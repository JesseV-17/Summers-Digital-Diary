// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    loadEntries('regular');
    loadEntries('locked');
});

// Default passcode
const DEFAULT_PASSCODE = '1234';

// Get stored passcode or use default
function getStoredPasscode() {
    return localStorage.getItem('diaryPasscode') || DEFAULT_PASSCODE;
}

// Tab functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
}

function switchTab(tabName) {
    // Update tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tabName) {
            btn.classList.add('active');
        }
    });

    // Update tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    const activeTab = document.getElementById(tabName + '-tab');
    if (activeTab) {
        activeTab.classList.add('active');
    }

    // If switching to locked tab, ensure it's locked
    if (tabName === 'locked') {
        lockEntries();
    }
}

// Add entry function
function addEntry(type) {
    const titleInput = document.getElementById(type + '-title');
    const contentInput = type === 'regular' 
        ? document.getElementById(type + '-content')
        : document.getElementById('locked-content-text');

    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (!title || !content) {
        alert('Please fill in both title and content!');
        return;
    }

    const entry = {
        id: Date.now(),
        title: title,
        content: content,
        date: new Date().toLocaleString()
    };

    // Get existing entries
    const entries = JSON.parse(localStorage.getItem(type + 'Entries') || '[]');
    entries.unshift(entry); // Add to beginning
    localStorage.setItem(type + 'Entries', JSON.stringify(entries));

    // Clear inputs
    titleInput.value = '';
    contentInput.value = '';

    // Reload entries
    loadEntries(type);
}

// Load and display entries
function loadEntries(type) {
    const entries = JSON.parse(localStorage.getItem(type + 'Entries') || '[]');
    const container = document.getElementById(type + '-entries');

    if (entries.length === 0) {
        container.innerHTML = '<div class="empty-state">No entries yet. Start writing!</div>';
        return;
    }

    container.innerHTML = entries.map(entry => `
        <div class="entry-item">
            <div class="entry-header">
                <h3>${escapeHtml(entry.title)}</h3>
                <span class="entry-date">${entry.date}</span>
            </div>
            <div class="entry-text">${escapeHtml(entry.content)}</div>
            <button class="delete-btn" onclick="deleteEntry('${type}', ${entry.id})">
                Delete
            </button>
        </div>
    `).join('');
}

// Delete entry
function deleteEntry(type, id) {
    if (!confirm('Are you sure you want to delete this entry?')) {
        return;
    }

    let entries = JSON.parse(localStorage.getItem(type + 'Entries') || '[]');
    entries = entries.filter(entry => entry.id !== id);
    localStorage.setItem(type + 'Entries', JSON.stringify(entries));

    loadEntries(type);
}

// Passcode functionality
function checkPasscode() {
    const input = document.getElementById('passcode-input');
    const enteredPasscode = input.value;
    const storedPasscode = getStoredPasscode();

    if (enteredPasscode === storedPasscode) {
        // Unlock content
        document.getElementById('passcode-screen').style.display = 'none';
        document.getElementById('locked-content').style.display = 'block';
        input.value = '';
    } else {
        alert('Incorrect passcode!');
        input.value = '';
        input.focus();
    }
}

// Lock entries
function lockEntries() {
    document.getElementById('passcode-screen').style.display = 'flex';
    document.getElementById('locked-content').style.display = 'none';
    document.getElementById('change-passcode-screen').style.display = 'none';
}

// Show change passcode screen
function showChangePasscode() {
    document.getElementById('passcode-screen').style.display = 'none';
    document.getElementById('change-passcode-screen').style.display = 'flex';
}

// Cancel change passcode
function cancelChangePasscode() {
    document.getElementById('change-passcode-screen').style.display = 'none';
    document.getElementById('passcode-screen').style.display = 'flex';
    clearPasscodeInputs();
}

// Change passcode
function changePasscode() {
    const oldPasscode = document.getElementById('old-passcode').value;
    const newPasscode = document.getElementById('new-passcode').value;
    const confirmPasscode = document.getElementById('confirm-passcode').value;
    const messageDiv = document.getElementById('passcode-message');

    // Validate old passcode
    if (oldPasscode !== getStoredPasscode()) {
        showMessage(messageDiv, 'Current passcode is incorrect!', 'error');
        return;
    }

    // Validate new passcode
    if (newPasscode.length < 4 || newPasscode.length > 6) {
        showMessage(messageDiv, 'New passcode must be 4-6 digits!', 'error');
        return;
    }

    // Validate confirmation
    if (newPasscode !== confirmPasscode) {
        showMessage(messageDiv, 'Passcodes do not match!', 'error');
        return;
    }

    // Save new passcode
    localStorage.setItem('diaryPasscode', newPasscode);
    showMessage(messageDiv, 'Passcode changed successfully!', 'success');

    // Reset after 2 seconds
    setTimeout(() => {
        clearPasscodeInputs();
        cancelChangePasscode();
    }, 2000);
}

// Clear passcode inputs
function clearPasscodeInputs() {
    document.getElementById('old-passcode').value = '';
    document.getElementById('new-passcode').value = '';
    document.getElementById('confirm-passcode').value = '';
    document.getElementById('passcode-message').innerHTML = '';
    document.getElementById('passcode-message').className = 'message';
}

// Show message
function showMessage(element, text, type) {
    element.textContent = text;
    element.className = 'message ' + type;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Allow Enter key to submit passcode
document.addEventListener('DOMContentLoaded', function() {
    const passcodeInput = document.getElementById('passcode-input');
    if (passcodeInput) {
        passcodeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPasscode();
            }
        });
    }
});
