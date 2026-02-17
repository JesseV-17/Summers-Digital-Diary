// Pre-written diary entries
const regularEntries = [
    {
        id: 1,
        title: "First Day of Summer",
        date: "June 1, 2026",
        content: `Today marks the beginning of summer! The weather is absolutely perfect - warm sunshine with a gentle breeze. I spent the morning planning all the adventures I want to have this season.

I made a list of places to visit, books to read, and friends to reconnect with. There's something magical about the start of summer, like anything is possible. The days feel longer, the world feels brighter, and I'm filled with excitement for what's to come.

Tonight, I watched the sunset from my favorite spot. The sky painted itself in shades of orange, pink, and purple. It felt like nature's way of saying "welcome to summer."`
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
    }
];

const lockedEntries = [
    {
        id: 101,
        title: "Dreams and Doubts",
        date: "June 5, 2026",
        content: `Sometimes I wonder if I'm on the right path. Everyone seems so sure of their direction, but I feel like I'm still figuring things out. Is that okay?

I have so many dreams - some big, some small. But there's this fear that holds me back. What if I fail? What if I'm not good enough? These thoughts keep me up at night.

But then I remind myself that it's okay not to have all the answers. Growth happens in the uncertainty. I'm allowed to be a work in progress.`
    },
    {
        id: 102,
        title: "The Conversation I Avoided",
        date: "June 18, 2026",
        content: `There's a conversation I need to have, but I keep putting it off. You know the kind - the one where you have to be vulnerable and honest, and you're not sure how the other person will react.

I rehearse what I want to say in my head, but when the moment comes, I chicken out. I change the subject, make a joke, anything to avoid the discomfort.

But I know I can't avoid it forever. The words are building up inside me, and eventually, they need to come out. Maybe tomorrow I'll find the courage.`
    },
    {
        id: 103,
        title: "Secret Crushes and Butterflies",
        date: "June 25, 2026",
        content: `Okay, so there's someone. Someone who makes me smile without even trying. Someone whose texts make my heart do that silly flutter thing.

We're just friends, at least that's what I keep telling myself. But there are these moments - when our eyes meet across a room, when our hands accidentally brush - that make me wonder if maybe there's something more.

I don't know if I should say anything or just enjoy the butterflies. What if I ruin the friendship? What if they don't feel the same way? For now, I'll keep this secret and see where the summer takes us.`
    },
    {
        id: 104,
        title: "Difficult Family Dinner",
        date: "July 2, 2026",
        content: `Family dinner tonight was... tense. Old conflicts resurfaced, the usual expectations were mentioned, and I felt myself shrinking back into the role everyone expects me to play.

Why is it so hard to be myself around the people who should know me best? I love my family, but sometimes I feel like they don't really see me - they see who they want me to be.

I left feeling exhausted and a bit sad. But I'm trying to remember that their expectations don't define my worth. I'm enough, exactly as I am, even if they don't always understand that.`
    },
    {
        id: 105,
        title: "The Thing I'm Ashamed Of",
        date: "July 9, 2026",
        content: `I did something I'm not proud of. I won't go into details, but it's been eating at me. I acted out of insecurity, jealousy maybe, and I hurt someone in the process.

The guilt is heavy. I've been trying to justify it, make excuses, but deep down I know I was wrong. I need to apologize, to make it right, but I'm scared.

This is my reminder that I'm human, flawed, still learning. The best I can do is acknowledge my mistakes, truly apologize, and do better going forward. Growth isn't pretty, but it's necessary.`
    },
    {
        id: 106,
        title: "Late Night Anxiety",
        date: "July 16, 2026",
        content: `It's 2 AM and my mind won't shut off. All the worries, all the what-ifs, they're swirling around like a storm. My chest feels tight and my breathing is shallow.

I hate these nights. When the world is quiet and my thoughts are so loud. I worry about things I can't control, imagine worst-case scenarios, question every decision I've made.

I'm trying the breathing exercises. In for four, hold for four, out for four. Slowly, the storm starts to calm. It's going to be okay. Tomorrow is a new day. I just need to get through tonight.`
    },
    {
        id: 107,
        title: "The Dream I Haven't Told Anyone",
        date: "July 23, 2026",
        content: `I have this dream. It's wild and impractical and probably impossible, but it's mine. I haven't told anyone because I'm afraid they'll laugh or tell me all the reasons it won't work.

But when I think about it, really imagine it, I feel alive. Excited. Like maybe life could be an adventure instead of just going through the motions.

What if I actually tried? What if I stopped playing it safe and took a chance? The thought terrifies me and thrills me at the same time. Maybe that's how you know it's worth pursuing.`
    }
];

// Track selected entries
let selectedRegularEntry = null;
let selectedLockedEntry = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    loadEntriesList('regular');
    // Don't load locked entries until unlocked
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

// Load entries list in sidebar
function loadEntriesList(type) {
    const entries = type === 'regular' ? regularEntries : lockedEntries;
    const container = document.getElementById(type + '-entries-list');

    if (!container) return;

    container.innerHTML = entries.map(entry => `
        <div class="entry-list-item" onclick="selectEntry('${type}', ${entry.id})">
            <h3>${escapeHtml(entry.title)}</h3>
            <div class="entry-list-date">${entry.date}</div>
            <div class="entry-list-preview">${escapeHtml(entry.content.substring(0, 80))}...</div>
        </div>
    `).join('');

    // Auto-select first entry
    if (entries.length > 0) {
        selectEntry(type, entries[0].id);
    }
}

// Select and display an entry
function selectEntry(type, entryId) {
    const entries = type === 'regular' ? regularEntries : lockedEntries;
    const entry = entries.find(e => e.id === entryId);
    
    if (!entry) return;

    // Update selected entry tracker
    if (type === 'regular') {
        selectedRegularEntry = entryId;
    } else {
        selectedLockedEntry = entryId;
    }

    // Update active state in sidebar
    const listItems = document.querySelectorAll(`#${type}-entries-list .entry-list-item`);
    listItems.forEach((item, index) => {
        if (entries[index].id === entryId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Display full entry content
    const contentContainer = document.getElementById(type + '-entry-content');
    contentContainer.innerHTML = `
        <div class="entry-full">
            <h1>${escapeHtml(entry.title)}</h1>
            <div class="entry-full-date">${entry.date}</div>
            <div class="entry-full-text">${escapeHtml(entry.content)}</div>
        </div>
    `;
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
        
        // Load locked entries
        loadEntriesList('locked');
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
