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
        title: "Face Yourself",
        date: "February 1st, 2026",
        content: `It’s not too bad being alone, if you ever feel lonely it’s actually okay to feel sad and reflect. Make sure to face your emotions during difficult times so that they don’t bottle up into anger or resentment down the line. Let yourself feel sad, it’s part of being human. I think that it’s important to reach out to someone. When was the last time you took yourself on a solo date? Trust me on this one, going out alone is a perfect way to get to know more of you and how you’re actually feeling. Stop distracting yourself! <br> <br>Facing your feelings head on is a way to warm your heart and heal over time.`
    },
    {
        id: 2,
        title: "Clean Spaces",
        date: "February 1st, 2026",
        content: `Reminder that a clean space can help with decluttering a messy mind. It’s a gentle breath for the mind to be quiet and at peace. Do not forget to look after yourself, and it starts with the morning when you wake up. I know it’s been challenging, but start off small. Making your bed and clearing your desk can be a start, and it’s a small win to celebrate yourself.

<em>You used to say to me that a clean space was like a library of the mind, everything packed tightly and messes were silenced. Which is why I want you to remember: Clear Space = Quiet Mind.</em> 

I know that you can develop those cleaning habits again, you were always so diligent about it.`
    },
    {
        id: 3,
        title: "Get in the Car",
        date: "February 1st, 2026",
        content: `As I said before, going outside is a way to get out of your routine. If you’ve been in your room all day, you’re going to start attaching emotion and safety into that place. As nice as that sounds, you’re limiting yourself and hiding from the whole world that is out there. You can’t forget about the places that you used to love, those places are still there waiting for you.
        
I think I know a place where you could go that will make you feel alive, a reminder that you’re still here and that you have to keep going.
        
Take a few deep breaths and get in the car right now. Drive to Sheridan College. Yes, your college, and yes right now.
        
<em>Go to the second floor of J wing to access your car<em>`
    },
    {
        id: 4,
        title: "Your Passions will Forever be with You",
        date: "February 1st, 2026",
        content: `I see that you’ve completed my first task for you to do already! You should give yourself a pat on the back for that one. I may be wrong but I know that when people are feeling lost in life, they start to leave their passions behind. That’s going to be hard for your inner child to hear, but it’s never too late to go back to your passion. 

Don’t let anything stop you from doing your passion. You used to love photography, remember? Those photos you took captured real emotions, you have a gift Luke. 

It’s okay to start it back up again. Your passions will forever be within you.`
    },
    {
        id: 5,
        title: "Tend to Your Responsibilities",
        date: "February 1st, 2026",
        content: `Similar to plants that we have to take care of and tend to, you need to tend to your responsibilities in a similar way. Humans are meant to connect, feel, and improve on themselves every day. That’s part of life, and your responsibilities are waiting to be tended to and looked after. Trust me, it will make more sense as you start getting back into it, your life will feel so much lighter. 
        
<em>Remember, bulletin boards and poster boards are always helpful to keep track of your responsibilities! Especially on the floor you frequent most…</em>`
    },
    {
        id: 6,
        title: "Get Your Comfort Meal",
        date: "February 1st, 2026",
        content: `Have you been eating well? I hope you’ve been eating. Food is fuel! You used to love going to the school cafeteria and you would order the same snack every day. Onion rings from Harvey’s. 

Well now that you’re not a broke college student anymore, I think you should go to the cafeteria for old times sake and grab a bite. There’s something about food that ignites something inside of us, food can connect us to old memories or certain times of our life. I hope you can remember some of the good times when you eat, holding onto the good memories rather than the sad. 

<em>Find the laptop located in the cafeteria</em>`
    },
    {
        id: 7,
        title: "Don’t be Afraid, You’re Processing",
        date: "February 1st, 2026",
        content: `Those flashbacks that you’re going through right now are completely and entirely normal. It just means you’re processing something that means a lot to you. Don’t ever beat yourself up for feeling sad, don’t ever feel ashamed for taking your time to process. Everyone’s timing in healing is different, and there’s nothing set in stone with that. Let yourself process, let it flow. The winter outside will soon pass, and spring will come again; a reminder of life’s constant cycle and new beginnings. Just like the flowers outside, you will bloom once again during the process of healing. 
        
Give yourself a butterfly hug, it is known to release pressure from your chest and to help an individual calm their body down from anxious or tough emotions. Cross your arms against each other into an x shape and apply pressure gently to your chest and shoulder area. Doing this in times of processing will help ease your body from being overwhelmed.`
    },
    {
        id: 8,
        title: "Celebrate Your Small Wins",
        date: "February 1st, 2026",
        content: `Everything that you have been doing today or keeping in mind is a small win. Consider the things you do each day that benefit you a small win. These wins don’t need to be much but acknowledging them at the end of the day or after they happen will benefit you in the long run. I know this may seem silly to do, but this is something that can help brighten up your day if you’re feeling stagnant. 

Practice this: Instead of thinking:

- Oh I HAVE to go to the bank
- I have to go make dinner
- I have to get groceries. 

Repeat this in your head:

- It is nice that I GET to go to the bank
- I GET to go make dinner
- I GET the chance to go to the grocery. 

This is a simple and straightforward way to celebrate the small win of privilege and as you go on with life and practice this, you’re able to become more grounded.`
    },
    {
        id: 9,
        title: "Drive Back Home, You had a Long Day",
        date: "February 1st, 2026",
        content: `It’s time to drive back home Luke. There's something waiting for you. Take note of your surroundings, it’s important to slow down to smell the roses. Make sure to listen out for any sounds from the road and the radio, you never know what or who might call out. 

<em>Go back to the Car</em>`
    },
    {
        id: 10,
        title: "Time to Reflect on Your Past",
        date: "February 1st, 2026",
        content: `Happiness, feelings, and health, cannot be forced but it can be handled in a way so beautiful where it won’t affect us too heavily. Working and living with a heavy heart is something that many go through, so it is important to reflect on your past in order to reach a lighter feeling. 

Something that has been shown to help people navigate their past is by talking to someone about it. If someone isn’t there the best resort is to journal about it, essentially talking to yourself. After some time you are able to read back your old pages and reflect on the things that have changed since the last time you opened it. It may seem minuscule doing this everyday, but seriously after a long time it is very therapeutic to be able to read words from your old self.`
    },
    {
        id: 11,
        title: "Acceptance for the Inevitable ways of Life",
        date: "February 1st, 2026",
        content: `As miserable it may sound, there are countless things in this life that are out of our control. The inevitable ways of life I like to call it. You must do your best to accept this and you will unlock a lifetime's worth of happiness and peace from being able to do whatever you want with the things you do have control over. 

An example of this is, you can’t control what others think about or feel, but you can control how you will react to the situation at hand. If something is pulling you down and dragging you down, let it go. If people talk, let them talk but don’t let it get to you because you know they aren’t you, they haven’t gone through your life.`
    },
    {
        id: 12,
        title: "Love Yourself for me and for Yourself",
        date: "February 1st, 2026",
        content: `I think you know who I really am by now. Luke I have been trying to guide you, it hurts to see you this way, please take care of yourself for me. You know how they say that in order to love someone else you need to be able to love yourself first? I think that we both need to rediscover and find ourselves again, worlds apart. 

I’ve always admired the way you were able to calm my storms when I needed you, but who is there to take care of you now? Luke you have to keep fighting, keep going and remember your core. You’re strong, and have gotten out of situations so painful people don’t even need to think about it. Your heart right now is a caged bird, it’s time that you set it free.

<em>You can find the box close to the stream, outside of the SSU</em>`
    }
];

// Page passwords for regular entries
const PAGE_PASSWORDS = {
    2: "lUk3!",  // Password to access entries 4-6
    3: "c@N y0U?",  // Password to access entries 7-9
    4: "H3rE m3?"   // Password to access entries 10-12
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
        content: `Sonny passed away yesterday… I don’t know what to do now. Everything feels slow… and cold, so very cold. Mom and Dad said that he went peacefully, but I didn’t want him to go, I still needed him. Luke heard the news and called me. He gave me his condolences about Sonny and told me that he was there for me and asked if I needed anything. In truth, I don’t want anything or anyone right now… All I want is to be left alone in my room, away from all the noise and bullshit. I feel this empty void in my chest, like a piece of me died when Sonny left. I just need time…

<em>It felt awful when Sonny died, but I realize that same feeling must be what you feel now. I’m sorry that during those hard weeks I pushed you and everyone else away, Luke. You were my only reason to keep going after everything around me felt crushed. I hope you knew that I never wanted to push you away. Of course you did, and you were still there for me. And now, I wanna be there for you, at least for as long as I can…</em>`
    },
    {
        id: 103,
        title: "Wet Test Papers",
        date: "June 25th, 2022",
        updated: "February 1st, 2026",
        passcode: "H0lD mY h@nD",
        content: `Why do we even have tests in an Industrial Design course! They always end up making my day worse… damn it, I can feel the tears peaking out from my eyes. My parents still don’t know yet, and I’m not going to tell them. If I do, they'll get mad… they’ll be worse than mad, they’ll be disappointed. Damn it Luke, why aren’t you awake? I need you to pick up your phone, I need you to tell me that it’ll be ok. I don’t want to cry anymore, my eyes are so very tired. 

<em>Sure, there were times where I had to journey on my own, but you were always with me. Even after a grueling 12 hour shift, the first thing you did after seeing the missed calls was call me back and calm me down. I remember my tears wouldn’t stop falling, you showed up at my house and hugged me… We sat there for such a long time in that embrace. It helped me a lot, not just the embrace but your presence. I hope even like this, I can provide you with the same comfort you provided me.</em>`
    },
    {
        id: 104,
        title: "My Loving Partner",
        date: "February 14th, 2023",
        updated: "February 1st, 2026",
        passcode: "gR@b T1gHt",
        content: `So, Luke and I had a big talk yesterday. It was a talk about the future, about us, about our relationship. It was only right that we talk about it now, since we’ll be graduating soon and we already moved in together, but funny enough Luke was actually the one who brought it up first. I have a feeling that some day within the year after graduation, he’s gonna propose. I really hope he doesn’t propose in front of people, wait no… of course he wouldn’t, he’s not a fan of big public displays lol. 

In all seriousness, we did have a long talk, and we both came out happy with the outcome! We even discussed the possibility of children in the future. We decided that we’ll see what the future holds, but if we do, we both agreed that if it’s a girl, her name will be Faye.

<em>And you did, you proposed about a year after we graduated. I could tell that you were planning something big, especially after our conversation about the future. I could see you working tirelessly day and night and saving money, I hope you knew that I didn’t need a fancy ring, a simple band was enough. A future where we exist now is long gone unfortunately, I’m sorry that this illness took so much from us. Maybe in another life, we could have had a daughter named Faye.</em>`
    },
    {
        id: 105,
        title: "I Want You to be Happy",
        date: "November 17th, 2025",
        updated: "February 1st, 2026",
        passcode: "W@lK f0Rw@rD",
        content: `Why, why is this happening to me! I went to the doctor, and they told me that I’m ill. I already told Luke about it, told him about how I don't have long left to live. Just when everything was starting to look bright… Why did this have to happen to us? I can’t keep crying about this, I don’t want Luke to feel more hurt than he already is by seeing me in pain. I wanted to give him a gift after our wedding. I made the gift box and everything, maybe he’ll still find it. I don’t want to live the little time I have left sulking and feeling anxious about the end. I’ll ask Luke if we can spend the little time we have left, together without a care in the world. But I also need him to know that his world will continue on without me. I need him to learn how to live for himself.

<em>Truely, all that I wanted was for both of us to be happy. If only times and circumstances were different. But the best thing I can do now to help you, to help me, is to guide you in your grief. It’s been ugly and stagnant, but life can’t continue on like this. Both of us need to pass on, I need you to let go, I need you to live for yourself. I couldn’t let go of my guilt if I was the one that was dragging you down this whole time. Please, remember all of our good times, and take them with you as you go, but don’t stop, keep going. Do it not for the sake of myself, but for you, so you can find happiness again… so you can find peace again, without me…</em>`
    },
    {
        id: 106,
        title: "I Tried",
        date: "February 1st, 2026",
        passcode: "1M $0rRy",
        content: `<em>I’m sorry Luke, I tried my best to help you move on. Oh, you probably didn’t even realize it was me. It’s Mae, I know… you’re probably wondering how or why, to be honest I don’t even know. All I can tell you is that I’m stuck in a limbo, I can’t move on Luke, just like you. I’m stuck now, permanently here. I’m tied down by your un-ending grief, enraptured by it. 

I worry for you Luke, please I beg, let go of me! You need to carry on without me, please keep trying! Why? Why are you giving up? Luke, you live like this! Please eat something! You can’t keep starving yourself, it’s not good for you! Drink something Luke, PLEASE, ANYTHING! 

WHY ARE YOU WALKING AROUND AS IF YOU’RE ALREADY DEAD? WHAT’S WRONG WITH YOU!? PLEASE LUKE, FORGET ABOUT ME! YOU NEED TO LIVE! Damn this shitty diary… LUKE, YOU NEED TO LIVE FOR YOURSELF! PLEASE LUKE, please…

I feel like I’m crying, but nothing is falling, why? I hate this place, Luke please, please… LUKE WAIT NO! PLEASE DON’T LUKE, I CAN’T WATCH YOU SUFFER LIKE THIS. NO! NO! NO! LUKE PLEASE, GET HELP, PLEASE! Please someone, anyone…

It’s so… cold here, I hate it.</em>`

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

// Handle special entry 5 button click
function handleSpecialEntry5Button() {
    // Check if all entries 1-5 are unlocked
    const allEntriesUnlocked = [101, 102, 103, 104, 105].every(id => unlockedEntries.has(id));
    
    if (allEntriesUnlocked) {
        // Show padlock instructions modal
        showPadlockModal();
    }
}

// Show padlock instructions modal
function showPadlockModal() {
    const modal = document.getElementById('padlock-modal');
    modal.style.display = 'flex';
}

// Close padlock instructions modal
function closePadlockModal() {
    const modal = document.getElementById('padlock-modal');
    modal.style.display = 'none';
}

// Show trigger warning modal for entry 106
function showTriggerWarningModal() {
    const modal = document.getElementById('trigger-warning-modal');
    modal.style.display = 'flex';
}

// Close trigger warning modal
function closeTriggerWarningModal() {
    const modal = document.getElementById('trigger-warning-modal');
    modal.style.display = 'none';
    // Clear pending entry
    window.pendingEntry106 = null;
}

// Proceed to display entry 106 after warning acceptance
function proceedToEntry106() {
    const modal = document.getElementById('trigger-warning-modal');
    modal.style.display = 'none';
    
    // Display the entry if it was stored
    if (window.pendingEntry106) {
        const { entry, type } = window.pendingEntry106;
        displayEntry(entry, type);
        window.pendingEntry106 = null;
    }
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
                    <div class="entry-list-preview">${escapeHtml(stripHtml(entry.content).substring(0, 80))}...</div>
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
                    <div class="entry-list-preview">${escapeHtml(stripHtml(entry.content).substring(0, 80))}...</div>
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

    // Check if this is entry 106 (trigger warning needed)
    if (entryId === 106) {
        // Store the entry data to display after warning acceptance
        window.pendingEntry106 = { entry, type };
        showTriggerWarningModal();
        return;
    }

    // Display the entry
    displayEntry(entry, type);
}

// Display entry content (separated from selectEntry for trigger warning flow)
function displayEntry(entry, type) {
    const entryId = entry.id;
    const entries = type === 'regular' ? regularEntries : lockedEntries;

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
        let activeItem = null;
        allListItems.forEach(item => {
            if (item.getAttribute('onclick')?.includes(`${entryId}`)) {
                item.classList.add('active');
                activeItem = item;
            }
        });
        
        // Scroll the active item into view in the sidebar
        if (activeItem) {
            activeItem.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }
    } else {
        const listItems = document.querySelectorAll(`#${type}-entries-list .entry-list-item`);
        let activeItem = null;
        listItems.forEach((item, index) => {
            if (entries[index].id === entryId) {
                item.classList.add('active');
                activeItem = item;
            } else {
                item.classList.remove('active');
            }
        });
        
        // Scroll the active item into view in the sidebar
        if (activeItem) {
            activeItem.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }
    }

    // Display full entry content in single content area
    const contentContainer = document.getElementById('entry-content');
    const entryDisplay = document.querySelector('.entry-display');
    
    // Add or remove special background class based on entry type
    if (type === 'locked') {
        entryDisplay.classList.add('special-entry-background');
    } else {
        entryDisplay.classList.remove('special-entry-background');
    }
    
    // Check if this entry should show the Next Entry button (entries 3, 6, and 9)
    const shouldShowNextButton = (entry.id === 3 || entry.id === 6 || entry.id === 9);
    const nextButtonHtml = shouldShowNextButton ? `
        <div class="flip-page-button" onclick="flipToNextPage()">
            <span>Next Entry</span>
        </div>
    ` : '';
    
    // Check if this is special entry 5 and if entries 1-5 are all unlocked
    const isSpecialEntry5 = (entry.id === 105);
    const allEntriesUnlocked = [101, 102, 103, 104, 105].every(id => unlockedEntries.has(id));
    const specialEntry5ButtonHtml = isSpecialEntry5 ? `
        <div class="special-unlock-button-container">
            <button onclick="handleSpecialEntry5Button()" class="btn-primary special-unlock-btn ${allEntriesUnlocked ? '' : 'disabled'}" ${allEntriesUnlocked ? '' : 'disabled'}>
                ${allEntriesUnlocked ? 'Continue' : 'Unlock all entries first'}
            </button>
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
            ${specialEntry5ButtonHtml}
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

// Strip HTML tags from text
function stripHtml(text) {
    const div = document.createElement('div');
    div.innerHTML = text;
    return div.textContent || div.innerText || '';
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
