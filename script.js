// Diary login password
const DIARY_PASSWORD = "H3AL1NG";

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
        date: "February 1st, 2026",
        content: `Reminder that a clean space can help with decluttering a messy mind. It's a gentle breath for the mind to be quiet and at peace. Do not forget to look after yourself, and it starts with the morning when you wake up. I know it's been challenging, but start off small. Making your bed and clearing your desk can be a start, and it's a small win to celebrate yourself. <br> <br> <em>Clear space = clear mind.</em> <br> <br>I know that you can develop those cleaning habits again, you were always so diligent about it.`
    },
    {
        id: 2,
        title: "Face Yourself",
        date: "February 1st, 2026",
        content: `It’s not too bad being alone, if you ever feel lonely it’s actually okay to feel sad and reflect. Make sure to face your emotions during difficult times so that they don’t bottle up into anger or resentment down the line. Let yourself feel sad, it’s part of being human. I think that it’s important to reach out to someone. When was the last time you took yourself on a solo date? Trust me on this one, going out alone is a perfect way to get to know more of you and how you’re actually feeling. Stop distracting yourself! <br> <br>Facing your feelings head on is a way to warm your heart and heal over time.`
    },
    {
        id: 3,
        title: "Get in the Car",
        date: "February 1st, 2026",
        content: `As I said before, going outside is a way to get out of your routine. If you’ve been in your room all day, you’re going to start attaching emotion and safety into that place. As nice as that sounds, you’re limiting yourself and hiding from the whole world that is out there. You can’t forget about the places that you used to love, those places are still there waiting for you.<br><br>I think I know a place where you could go that will make you feel alive, a reminder that you’re still here and that you have to keep going.<br><br>Take a few deep breaths and get in the car right now. Drive to Sheridan College. Yes, your college, and yes right now.<br><br><em>Go to the second floor of J wing to access your car<em>`
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
    },
    {
        id: 10,
        title: "Camping Under the Stars",
        date: "August 2, 2026",
        content: `Went camping this weekend with a group of friends. We drove two hours out of the city to a secluded campsite surrounded by tall pines. Setting up tents and gathering firewood felt like a return to something primal and essential.

We cooked dinner over the campfire - nothing fancy, just hot dogs and s'mores, but everything tastes better when cooked over an open flame. As night fell, we told ghost stories and laughed until our sides hurt.

The best part was lying in my sleeping bag with the tent flap open, watching the stars. So many stars - more than I've ever seen. The Milky Way stretched across the sky like a river of light. I forgot how small we are, and somehow that felt comforting. Nature has a way of putting things in perspective.`
    },
    {
        id: 11,
        title: "BookStore Adventure",
        date: "August 9, 2026",
        content: `Discovered a small independent bookstore today tucked away on a side street I'd never explored before. The moment I walked in, the smell of old books and coffee enveloped me like a warm hug.

The owner, an elderly woman with kind eyes, gave me recommendations and we chatted about our favorite authors for nearly an hour. She has a cat that lives in the store who immediately claimed my lap when I sat down to browse.

I left with three new books and a promise to return next week for their book club. There's something magical about finding a new favorite place. It feels like discovering a secret world that was there all along, just waiting to be found.`
    },
    {
        id: 12,
        title: "Sunset Picnic",
        date: "August 16, 2026",
        content: `Planned a spontaneous sunset picnic at the overlook today. Packed a basket with cheese, crackers, fruit, and a bottle of sparkling cider. The climb up was steep but worth every step.

We arrived just as the sun began its descent, painting the sky in shades of orange, pink, and purple. The clouds looked like cotton candy. We sat on our blanket and watched in comfortable silence as day turned to evening.

As the last rays of sunlight disappeared, the first stars appeared. We stayed until the sky was completely dark, not wanting the moment to end. Sometimes the simplest plans create the most beautiful memories. This summer has taught me to appreciate the little things.`
    }
];

// Page passwords for regular entries
const PAGE_PASSWORDS = {
    2: "page2",  // Password to access entries 4-6
    3: "page3",  // Password to access entries 7-9
    4: "page4"   // Password to access entries 10-12
};

// Track current page (1 = entries 1-3, 2 = entries 4-6, 3 = entries 7-9, 4 = entries 10-12)
let currentPage = 1;
let unlockedPages = new Set([1]); // Page 1 is always unlocked

// Track max visible entry for page 2 special unlock (entries 4,5,6)
let maxVisibleEntry = 3; // Start with 3 entries visible

const lockedEntries = [
    {
        id: 101,
        title: "I HATE Being Late!",
        date: "October 5th, 2021",
        updated: "February 1st, 2026",
        passcode: "M1s$ U",
        content: `Why is he ALWAYS late! It annoys me so much. Is it too much to ask for him to be punctual for once? Like, honestly, it hurts a lot when my time doesn’t feel valued. I set up this nice romantic picnic and now I’m stuck waiting here for him. *Sigh* I hope he’ll at least bring me some flowers to make up for it, or at least a picture of my favourite bird.

<em>Looking back on it now, I don't know why I always rushed you. Maybe it was an early sign of my illness taking hold, but it's not fair to you if I blame it on that. Now I had wished I moved through things slower. I remember that shortly after I wrote this, you arrived. We ended up having such a good date, and in the end you did get a picture of that bird when we went out for a stroll.</em>`
    },
    {
        id: 102,
        title: "Sonny Bought the Farm…",
        date: "January 18th, 2022",
        updated: "February 1st, 2026",
        passcode: "Y0uR tH3 B3$t",
        content: `There's a conversation I need to have, but I keep putting it off. You know the kind - the one where you have to be vulnerable and honest, and you're not sure how the other person will react.

I rehearse what I want to say in my head, but when the moment comes, I chicken out. I change the subject, make a joke, anything to avoid the discomfort.

But I know I can't avoid it forever. The words are building up inside me, and eventually, they need to come out. Maybe tomorrow I'll find the courage.`
    },
    {
        id: 103,
        title: "Wet Test Papers",
        date: "June 25th, 2022",
        updated: "February 1st, 2026",
        passcode: "H0lD mY h@nD",
        content: `Okay, so there's someone. Someone who makes me smile without even trying. Someone whose texts make my heart do that silly flutter thing.

We're just friends, at least that's what I keep telling myself. But there are these moments - when our eyes meet across a room, when our hands accidentally brush - that make me wonder if maybe there's something more.

I don't know if I should say anything or just enjoy the butterflies. What if I ruin the friendship? What if they don't feel the same way? For now, I'll keep this secret and see where the summer takes us.`
    },
    {
        id: 104,
        title: "My Loving Partner",
        date: "February 14th, 2023",
        updated: "February 1st, 2026",
        passcode: "gR@b T1gHt",
        content: `Sometimes I feel like I'm the only one trying in this relationship. I share everything with you - my fears, my dreams, my insecurities. But when I ask about YOUR feelings, you just change the subject or joke it away. It's like pulling teeth getting you to talk about anything real.

I just want to know what's going on in that head of yours. Are you happy? Are we okay? Do you even want this? The silence is killing me more than any answer would.

<em>I understand now why you struggled to share. Growing up, you were taught that showing emotion wasn't okay, that vulnerability was weakness. I wish I had been more patient with you instead of pushing so hard. You were trying, in your own way. I see that now. And by the time you learned to open up to me, I was the one who couldn't share anymore - hiding my diagnosis from you for months because I didn't want to burden you.</em>`
    },
    {
        id: 105,
        title: "I Want You to be Happy",
        date: "November 17th, 2025",
        updated: "February 1st, 2026",
        passcode: "W@lK f0Rw@rD",
        content: `We had the same fight again today. You know, the one about me wanting to make plans and you preferring to be spontaneous. I like having things to look forward to, you like living in the moment. Neither of us is wrong, but we can't seem to find middle ground.

You said I'm too controlling. I said you're too flaky. We both said things we'll probably regret tomorrow. I hate fighting with you. I hate that we can't see eye to eye on this. Why does this keep happening?

<em>What a silly thing to fight about. I'd give anything now to fight with you again, to have one more disagreement about weekend plans. After my diagnosis, all those planned futures I wanted became impossible dreams. And your spontaneity? That became our greatest gift. Every unexpected adventure, every last-minute decision to watch the sunset or drive nowhere in particular - those became the precious moments I held onto. You taught me to live in the now when that's all I had left.</em>`
    },
    {
        id: 106,
        title: "I Tried",
        date: "February 1st, 2026",
        updated: "February 1st, 2026",
        passcode: "1M $0rRy",
        content: `I saw her name flash on your phone screen today. Your ex. My stomach dropped. You quickly put your phone away and tried to act normal, but I SAW it. You've been texting her?

I wanted to ask about it but I was too scared. What if you're having second thoughts about us? What if you still have feelings for her? All these insecure thoughts are eating me alive and I can't stop them. I trust you, I do... but why didn't you tell me?

<em>I found out later it was nothing - she was just returning some old belongings you'd left at her place years ago. Such a simple, innocent thing that my anxiety turned into a catastrophe in my mind. I worked myself up over nothing. You never gave me a reason not to trust you, not once. Not even when things got really hard with my illness, when I became difficult and demanding and scared. You stayed. You always stayed. I'm sorry I doubted you, even for a moment.</em>`
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
        maxVisibleEntry = currentPage * 3;
        
        loadEntriesList('regular');
        loadLockedEntriesSections(); // Update special entries
        return;
    }
    
    // Show custom page password modal
    showPagePasswordModal(nextPage);
}

// Show page password modal
function showPagePasswordModal(pageNumber) {
    const modal = document.getElementById('page-password-modal');
    const message = document.getElementById('page-modal-message');
    const input = document.getElementById('page-password-input');
    const error = document.getElementById('page-password-error');
    
    message.textContent = `Enter password to turn to page ${pageNumber}:`;
    input.value = '';
    error.style.display = 'none';
    modal.style.display = 'flex';
    input.focus();
    
    // Store the page number for submission
    modal.dataset.pageNumber = pageNumber;
    
    // Add enter key listener
    input.onkeypress = function(e) {
        if (e.key === 'Enter') {
            submitPagePassword();
        }
    };
}

// Submit page password
function submitPagePassword() {
    const modal = document.getElementById('page-password-modal');
    const input = document.getElementById('page-password-input');
    const error = document.getElementById('page-password-error');
    const nextPage = parseInt(modal.dataset.pageNumber);
    const password = input.value;
    
    if (password === PAGE_PASSWORDS[nextPage]) {
        unlockedPages.add(nextPage);
        currentPage = nextPage;
        maxVisibleEntry = currentPage * 3;
        
        loadEntriesList('regular');
        loadLockedEntriesSections(); // Update special entries
        closePagePasswordModal();
    } else if (password) {
        error.textContent = 'Incorrect password! Try again.';
        error.style.display = 'block';
        input.value = '';
        input.focus();
    }
}

// Close page password modal
function closePagePasswordModal() {
    const modal = document.getElementById('page-password-modal');
    const input = document.getElementById('page-password-input');
    const error = document.getElementById('page-password-error');
    
    modal.style.display = 'none';
    input.value = '';
    error.style.display = 'none';
}

// Toggle instructions dropdown on login page
function toggleInstructions() {
    const content = document.getElementById('instructions-content');
    const icon = document.querySelector('.instructions-icon');
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        icon.textContent = '▲';
    } else {
        content.style.display = 'none';
        icon.textContent = '▼';
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
        // Use maxVisibleEntry to control which entries are shown
        const visibleEntries = entries.slice(0, maxVisibleEntry);
        
        // Regular entries - show all entries up to maxVisibleEntry
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
    // Page 1: 2 entries, Page 2: 4 entries, Page 3: 5 entries, Page 4+: all 6 entries
    const numEntriesToShow = currentPage >= 4 ? 6 : (currentPage === 3 ? 5 : currentPage * 2);
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
            const dateDisplay = entry.updated ? `${entry.date} | Updated: ${entry.updated}` : entry.date;
            return `
                <div class="entry-list-item entry-unlocked" onclick="selectEntry('locked', ${entry.id})">
                    <h3>${entry.index + 1}. ${escapeHtml(entry.title)}</h3>
                    <div class="entry-list-date">${dateDisplay}</div>
                    <div class="entry-list-preview">${escapeHtml(entry.content.substring(0, 80))}...</div>
                </div>
            `;
        }).join('');
    }
}

// Helper function to format content with line breaks and allow specific HTML tags
function formatContent(content) {
    // Replace newlines with <br> tags and preserve HTML tags like <em>
    return content.replace(/\n/g, '<br>');
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
    
    // Check if this entry should show the Next Entry button (entries 3, 6, and 9)
    const shouldShowNextButton = (entry.id === 3 || entry.id === 6 || entry.id === 9);
    const nextButtonHtml = shouldShowNextButton ? `
        <div class="flip-page-button" onclick="flipToNextPage()">
            <span>Next Entry</span>
        </div>
    ` : '';
    
    // Add special class for locked entries
    const specialClass = type === 'locked' ? 'entry-special' : '';
    
    // Format date with updated info for locked entries
    let dateDisplay = entry.date;
    if (type === 'locked' && entry.updated) {
        dateDisplay += ` | Updated: ${entry.updated}`;
    }
    
    contentContainer.innerHTML = `
        <div class="entry-full ${specialClass}">
            <h1>${escapeHtml(entry.title)}</h1>
            <div class="entry-full-date">${dateDisplay}</div>
            <div class="entry-full-text">${formatContent(entry.content)}</div>
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
    hintElement.textContent = '';
    
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
