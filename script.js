// Diary login password
const DIARY_PASSWORD = "summer2026";

// Check if user is already logged in
window.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = sessionStorage.getItem('diaryLoggedIn');
    if (isLoggedIn === 'true') {
        showDiary();
    }
});

// Check diary password
function checkDiaryPassword() {
    const input = document.getElementById('login-password-input');
    const hint = document.getElementById('login-hint');
    const password = input.value;

    if (password === DIARY_PASSWORD) {
        sessionStorage.setItem('diaryLoggedIn', 'true');
        showDiary();
    } else {
        hint.textContent = 'Incorrect password. Try again!';
        hint.style.color = '#d32f2f';
        input.value = '';
        input.focus();
    }
}

// Show diary after successful login
function showDiary() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('diary-container').style.display = 'block';
    // Initialize the diary
    init();
}

// Handle Enter key on login
document.addEventListener('DOMContentLoaded', () => {
    const loginInput = document.getElementById('login-password-input');
    if (loginInput) {
        loginInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkDiaryPassword();
            }
        });
        loginInput.focus();
    }
});

// Pre-written diary entries
const regularEntries = [
    {
        id: 1,
        title: "Clean Spaces",
        date: "June 1, 2026",
        content: `Reminder that a clean space can help with decluttering a messy mind. It’s a gentle breath for the mind to be quiet and at peace. Do not forget to look after yourself, and it starts with the morning when you wake up. I know it’s been challenging, but start off small. Making your bed and clearing your desk can be a start, and it’s a small win to celebrate yourself. 
        
        Clear space = clear mind. 
        
        I know that you can develop those cleaning habits again, you were always so diligent about it.`
    },
    {
        id: 2,
        title: "Beach Day Adventures",
        date: "June 8, 2026",
        content: `Finally made it to the beach today! The sand was warm between my toes and the ocean sparkled like it was covered in diamonds. I spent hours just walking along the shore, collecting seashells and watching the waves crash against the rocks.

Met a friendly dog named Max who was chasing the seagulls - it was hilarious watching him run back and forth. His owner and I chatted about our favorite beach spots. It's amazing how the beach brings people together.

I stayed until sunset and treated myself to ice cream from the boardwalk. Mint chocolate chip, my favorite. Days like this remind me why summer is my favorite season.`
    },
    {
        id: 3,
        title: "Midnight Stargazing",
        date: "June 15, 2026",
        content: `Couldn't sleep tonight, so I went outside to look at the stars. The sky was incredibly clear - I could see the Milky Way stretching across like a river of light.

I brought out a blanket and just lay there, thinking about how vast the universe is. I spotted several shooting stars and made wishes on each one. There's something humbling about stargazing, it puts everything into perspective.

The crickets were chirping their night song, and a cool breeze made the summer heat bearable. I stayed out there for two hours, just lost in thought and wonder. These quiet moments are precious.`
    },
    {
        id: 4,
        title: "Garden Party Success",
        date: "June 22, 2026",
        content: `Hosted my first garden party today and it was such a success! I spent all morning setting up fairy lights, arranging flowers, and preparing snacks. The backyard looked magical.

Friends started arriving around 4 PM and we spent the entire evening laughing, eating, and playing games. We had a impromptu karaoke session that had everyone in tears from laughing so hard.

As the sun set, the fairy lights created the most beautiful ambiance. We roasted marshmallows and told stories until midnight. This is what summer memories are made of.`
    },
    {
        id: 5,
        title: "Rainy Day Reading",
        date: "June 29, 2026",
        content: `Not every summer day is sunny, and that's okay. Today brought rain - the kind that drums steadily on the roof and creates that cozy atmosphere perfect for reading.

I curled up on the window seat with a cup of tea and my favorite novel. The smell of rain mixed with the scent of my lavender candle. Hours passed in what felt like minutes as I got lost in the story.

Sometimes the best days are the quiet ones, the ones where you slow down and just exist in the moment. The rain washed away the summer heat and left everything feeling fresh and new.`
    },
    {
        id: 6,
        title: "Fourth of July Fireworks",
        date: "July 4, 2026",
        content: `Independence Day! The whole neighborhood came together for a massive celebration. There was a parade in the morning with marching bands, colorful floats, and kids on decorated bikes.

The evening was the highlight - we all gathered at the park for the fireworks show. I spread out a blanket with friends and we shared snacks while waiting for dark. When the fireworks finally started, the entire sky lit up in brilliant colors.

Each boom echoed in my chest and the crowd "oohed" and "aahed" together. The grand finale was breathtaking - so many explosions of light that it looked like daylight for a moment. What a perfect way to celebrate summer!`
    },
    {
        id: 7,
        title: "Learning to Surf",
        date: "July 12, 2026",
        content: `Today I tried surfing for the first time! My friend who's been surfing for years offered to teach me. I was nervous but excited. The wetsuit felt strange and the surfboard was heavier than I expected.

The first dozen attempts were... let's say humbling. I fell off more times than I can count and swallowed more seawater than I care to admit. But then, on attempt number 15, I actually stood up and rode a small wave for about five seconds!

Those five seconds felt like flying. I can't wait to go again. My muscles are sore and I'm sunburned despite the sunscreen, but I'm already hooked on the feeling of catching a wave.`
    },
    {
        id: 8,
        title: "Farmers Market Treasures",
        date: "July 19, 2026",
        content: `Spent my Saturday morning at the local farmers market. The energy there is always so vibrant - vendors calling out their fresh produce, the smell of baked bread and flowers mixing in the air.

I bought the most beautiful bouquet of sunflowers, fresh strawberries that taste like pure summer, and homemade honey from a local beekeeper. We chatted for twenty minutes about bees and I learned so much!

Also discovered an incredible vendor selling handmade jewelry. Bought a bracelet made from sea glass - each piece smoothed by the ocean over time. Supporting local businesses and finding unique treasures makes my heart happy.`
    },
    {
        id: 9,
        title: "Summer Night Concert",
        date: "July 26, 2026",
        content: `Went to an outdoor concert tonight and it was absolutely magical. The band played under the stars while everyone sat on blankets or danced barefoot in the grass.

The music filled the warm summer air and I felt completely present in the moment. Strangers became friends as we all swayed to the same rhythm. There's something special about live music on a summer night.

As the final song played, I looked around at all the smiling faces lit by string lights and thought - these are the moments I'll remember forever. Summer magic at its finest.`
    }
];

// Page passwords for regular entries
const PAGE_PASSWORDS = {
    2: "page2",  // Password to access entries 4-6
    3: "page3"   // Password to access entries 7-9
};

// Track current page (1 = entries 1-3, 2 = entries 4-6, 3 = entries 7-9)
let currentPage = 1;
let unlockedPages = new Set([1]); // Page 1 is always unlocked

const lockedEntries = [
    {
        id: 101,
        title: "Dreams and Doubts",
        date: "June 5, 2026",
        passcode: "1111",
        content: `Sometimes I wonder if I'm on the right path. Everyone seems so sure of their direction, but I feel like I'm still figuring things out. Is that okay?

I have so many dreams - some big, some small. But there's this fear that holds me back. What if I fail? What if I'm not good enough? These thoughts keep me up at night.

But then I remind myself that it's okay not to have all the answers. Growth happens in the uncertainty. I'm allowed to be a work in progress.`
    },
    {
        id: 102,
        title: "The Conversation I Avoided",
        date: "June 18, 2026",
        passcode: "2222",
        content: `There's a conversation I need to have, but I keep putting it off. You know the kind - the one where you have to be vulnerable and honest, and you're not sure how the other person will react.

I rehearse what I want to say in my head, but when the moment comes, I chicken out. I change the subject, make a joke, anything to avoid the discomfort.

But I know I can't avoid it forever. The words are building up inside me, and eventually, they need to come out. Maybe tomorrow I'll find the courage.`
    },
    {
        id: 103,
        title: "Secret Crushes and Butterflies",
        date: "June 25, 2026",
        passcode: "3333",
        content: `Okay, so there's someone. Someone who makes me smile without even trying. Someone whose texts make my heart do that silly flutter thing.

We're just friends, at least that's what I keep telling myself. But there are these moments - when our eyes meet across a room, when our hands accidentally brush - that make me wonder if maybe there's something more.

I don't know if I should say anything or just enjoy the butterflies. What if I ruin the friendship? What if they don't feel the same way? For now, I'll keep this secret and see where the summer takes us.`
    }
];

// Track unlocked entries
let unlockedEntries = new Set();

// Track which entry is being unlocked
let currentUnlockingEntry = null;

// Track selected entries
let selectedRegularEntry = null;
let selectedLockedEntry = null;

// Initialize the diary
function init() {
    loadEntriesList('regular');
    loadEntriesList('locked');
}

// Flip to next page function
function flipToNextPage() {
    const nextPage = currentPage + 1;
    
    // Check if the next page is already unlocked
    if (unlockedPages.has(nextPage)) {
        currentPage = nextPage;
        loadEntriesList('regular');
        loadLockedEntriesSections(); // Update special entries
        return;
    }
    
    // Show password prompt
    const password = prompt(`Enter password to turn to page ${nextPage}:`);
    
    if (password === PAGE_PASSWORDS[nextPage]) {
        unlockedPages.add(nextPage);
        currentPage = nextPage;
        loadEntriesList('regular');
        loadLockedEntriesSections(); // Update special entries
    } else if (password !== null) {
        alert('Incorrect password! Try again.');
    }
}

// Dropdown toggle functionality
function toggleDropdown(type) {
    const header = document.querySelector(`.dropdown-header[onclick*="${type}"]`);
    const content = document.getElementById(type === 'regular' ? 'regular-entries-list' : 'locked-entries-container');
    
    // Close other dropdown first
    const otherType = type === 'regular' ? 'locked' : 'regular';
    const otherHeader = document.querySelector(`.dropdown-header[onclick*="${otherType}"]`);
    const otherContent = document.getElementById(otherType === 'regular' ? 'regular-entries-list' : 'locked-entries-container');
    
    if (otherHeader && otherContent) {
        otherHeader.classList.remove('active');
        otherContent.classList.remove('active');
        const otherIcon = otherHeader.querySelector('.dropdown-icon');
        if (otherIcon) otherIcon.textContent = '►';
    }
    
    // Toggle current dropdown
    header.classList.toggle('active');
    content.classList.toggle('active');
    
    // Update icon
    const icon = header.querySelector('.dropdown-icon');
    if (header.classList.contains('active')) {
        icon.textContent = '▼';
    } else {
        icon.textContent = '►';
    }
}

// Load entries list in sidebar
function loadEntriesList(type) {
    const entries = type === 'regular' ? regularEntries : lockedEntries;
    const container = document.getElementById(type + '-entries-list');

    if (!container) return;

    if (type === 'regular') {
        // Calculate which entries to show - all entries from page 1 to current page
        const entriesPerPage = 3;
        const endIndex = currentPage * entriesPerPage;
        const visibleEntries = entries.slice(0, endIndex);
        
        // Regular entries - show all entries up to current page
        let html = visibleEntries.map((entry, index) => {
            return `
                <div class="entry-list-item" onclick="selectEntry('${type}', ${entry.id})">
                    <h3>${index + 1}. ${escapeHtml(entry.title)}</h3>
                    <div class="entry-list-date">${entry.date}</div>
                    <div class="entry-list-preview">${escapeHtml(entry.content.substring(0, 80))}...</div>
                </div>
            `;
        }).join('');
        
        container.innerHTML = html;
    } else {
        // Locked entries - separate into locked and unlocked
        loadLockedEntriesSections();
    }
}

// Load locked entries into separate sections
function loadLockedEntriesSections() {
    const lockedContainer = document.getElementById('locked-entries-list');
    const unlockedContainer = document.getElementById('unlocked-entries-list');
    
    if (!lockedContainer || !unlockedContainer) return;
    
    // Determine how many special entries to show based on current page
    // Page 1: 1 entry, Page 2: 2 entries, Page 3: 3 entries
    const numEntriesToShow = currentPage;
    const availableEntries = lockedEntries.slice(0, numEntriesToShow);
    
    const locked = [];
    const unlocked = [];
    
    // Separate available entries into locked and unlocked
    availableEntries.forEach((entry, index) => {
        if (unlockedEntries.has(entry.id)) {
            unlocked.push({ ...entry, index });
        } else {
            locked.push({ ...entry, index });
        }
    });
    
    // Render locked entries
    if (locked.length === 0) {
        lockedContainer.innerHTML = '';
    } else {
        lockedContainer.innerHTML = locked.map(entry => {
            return `
                <div class="entry-list-item entry-locked" onclick="selectEntry('locked', ${entry.id})">
                    <h3>${entry.index + 1}. ${escapeHtml(entry.title)}</h3>
                    <div class="entry-list-date">${entry.date}</div>
                </div>
            `;
        }).join('');
    }
    
    // Render unlocked entries
    if (unlocked.length === 0) {
        unlockedContainer.innerHTML = '';
    } else {
        unlockedContainer.innerHTML = unlocked.map(entry => {
            return `
                <div class="entry-list-item entry-unlocked" onclick="selectEntry('locked', ${entry.id})">
                    <h3>${entry.index + 1}. ${escapeHtml(entry.title)}</h3>
                    <div class="entry-list-date">${entry.date}</div>
                    <div class="entry-list-preview">${escapeHtml(entry.content.substring(0, 80))}...</div>
                </div>
            `;
        }).join('');
    }
}

// Select and display an entry
function selectEntry(type, entryId) {
    const entries = type === 'regular' ? regularEntries : lockedEntries;
    const entry = entries.find(e => e.id === entryId);
    
    if (!entry) return;

    // Check if entry is locked
    if (type === 'locked' && !unlockedEntries.has(entryId)) {
        // Show passcode modal
        currentUnlockingEntry = entry;
        showPasscodeModal(entry);
        return;
    }

    // Update selected entry tracker
    if (type === 'regular') {
        selectedRegularEntry = entryId;
    } else {
        selectedLockedEntry = entryId;
    }

    // Update active state in sidebar for both locked and unlocked sections
    if (type === 'locked') {
        const allListItems = document.querySelectorAll('#locked-entries-list .entry-list-item, #unlocked-entries-list .entry-list-item');
        allListItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Find and activate the clicked entry
        allListItems.forEach(item => {
            if (item.getAttribute('onclick')?.includes(`${entryId}`)) {
                item.classList.add('active');
            }
        });
    } else {
        const listItems = document.querySelectorAll(`#${type}-entries-list .entry-list-item`);
        listItems.forEach((item, index) => {
            if (entries[index].id === entryId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Display full entry content in single content area
    const contentContainer = document.getElementById('entry-content');
    
    // Check if this entry should show the Next Entry button (entries 3 and 6)
    const shouldShowNextButton = (entry.id === 3 || entry.id === 6);
    const nextButtonHtml = shouldShowNextButton ? `
        <div class="flip-page-button" onclick="flipToNextPage()">
            <span>Next Entry</span>
        </div>
    ` : '';
    
    contentContainer.innerHTML = `
        <div class="entry-full">
            <h1>${escapeHtml(entry.title)}</h1>
            <div class="entry-full-date">${entry.date}</div>
            <div class="entry-full-text">${escapeHtml(entry.content)}</div>
            ${nextButtonHtml}
        </div>
    `;
}

// Modal functions for individual entry locking
function showPasscodeModal(entry) {
    const modal = document.getElementById('passcode-modal');
    const titleElement = document.getElementById('modal-entry-title');
    const hintElement = document.getElementById('passcode-hint');
    
    titleElement.textContent = `"${entry.title}"`;
    hintElement.textContent = `Hint: Passcode is ${entry.passcode}`;
    
    modal.style.display = 'flex';
    
    // Focus on input
    setTimeout(() => {
        document.getElementById('modal-passcode-input').focus();
    }, 100);
}

function closeModal() {
    const modal = document.getElementById('passcode-modal');
    modal.style.display = 'none';
    document.getElementById('modal-passcode-input').value = '';
    currentUnlockingEntry = null;
}

function unlockEntry() {
    const input = document.getElementById('modal-passcode-input');
    const enteredPasscode = input.value;
    
    if (!currentUnlockingEntry) {
        closeModal();
        return;
    }
    
    if (enteredPasscode === currentUnlockingEntry.passcode) {
        // Unlock the entry
        unlockedEntries.add(currentUnlockingEntry.id);
        
        // Close modal
        closeModal();
        
        // Reload the locked entries sections (this moves the entry to unlocked section)
        loadLockedEntriesSections();
        
        // Select the newly unlocked entry
        selectEntry('locked', currentUnlockingEntry.id);
    } else {
        alert('Incorrect passcode!');
        input.value = '';
        input.focus();
    }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Allow Enter key to submit passcode in modal
document.addEventListener('DOMContentLoaded', function() {
    const modalInput = document.getElementById('modal-passcode-input');
    if (modalInput) {
        modalInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                unlockEntry();
            }
        });
    }
    
    // Close modal when clicking outside
    const modal = document.getElementById('passcode-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});
