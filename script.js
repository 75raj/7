// Password Check Script
const errorMessages = [
    "Chal nikal, tumse password crack nahi hoga!",
    "Yeh tumhare bas ki baat nahi… try mat kar, time barbaad hai!",
    "Itna bhi asaan nahi hai… hacker banna hai kya?",
    "Ab toh sharam aa rahi hogi!",
    "Kyu? Kise ki chat dekhna chahte ho?",
    "Ho gaya na insult? Password tumhare aukaat se bahar hai!",
    "Bhai, password crack nahi hota… syllabus crack kar C**!"
];

const colors = [
    "#FF0020", // Red
    "#00FF00", // Green
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#FFA500"  // Orange
];

function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const correctPasswords = ['75', '95'];
    const errorMessage = document.getElementById('errorMessage');
    const passwordPrompt = document.getElementById('passwordPrompt');
    const content = document.getElementById('content');

    if (correctPasswords.includes(password)) {
        passwordPrompt.style.display = 'none';
        content.style.display = 'block';
    } else {
        const randomIndex = Math.floor(Math.random() * errorMessages.length);
        errorMessage.textContent = errorMessages[randomIndex];
        let textColorIndex = Math.floor(Math.random() * colors.length);
        let borderColorIndex;
        do {
            borderColorIndex = Math.floor(Math.random() * colors.length);
        } while (borderColorIndex === textColorIndex);
        const textColor = colors[textColorIndex];
        const borderColor = colors[borderColorIndex];
        errorMessage.style.color = textColor;
        errorMessage.style.textShadow = `0 0 5px ${textColor}`;
        errorMessage.style.outline = `1px solid ${borderColor}`;
        errorMessage.style.display = 'block';
    }
}

document.getElementById('passwordInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// Hint Toggle Script
function toggleHint() {
    const hint = document.getElementById('hintText');
    hint.style.display = hint.style.display === 'none' ? 'block' : 'none';
}

// Message Box and Extra Message Toggle
function showMessageBox() {
    const msgBox = document.getElementById("messageBox");
    msgBox.style.display = (msgBox.style.display === "block") ? "none" : "block";
}

function showExtraMessage(event) {
    const extra = document.getElementById("extraMessage");
    const btn = event.target;
    if (extra.style.display === "block") {
        extra.style.display = "none";
        btn.textContent = "Show More";
    } else {
        extra.style.display = "block";
        btn.textContent = "Show Less";
    }
}

// Page Navigation
let currentPage = 1;

function showPage(n) {
    document.querySelectorAll(".page").forEach((page, index) => {
        page.classList.remove("active");
        if (index === n - 1) page.classList.add("active");
    });
}

function nextPage() {
    if (currentPage < 2) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

// Back Button Logic
function goBack() {
    const storyPopup = document.getElementById('storyPopup');
    const videoPopup = document.getElementById('videoPopup');
    const extraMessage = document.getElementById('extraMessage');
    const fullText = document.getElementById('fullText');
    const messageContainer = document.getElementById('message-container');

    if (storyPopup.classList.contains('show')) {
        storyPopup.classList.remove('show');
    } else if (videoPopup.style.display === 'block') {
        videoPopup.style.display = 'none';
        document.getElementById('myVideo').style.display = 'none';
        document.getElementById('videoPasswordPrompt').style.display = 'flex';
        document.getElementById('videoErrorMessage').style.display = 'none';
        document.getElementById('videoPasswordInput').value = '';
    } else if (extraMessage.style.display === 'block') {
        extraMessage.style.display = 'none';
        document.querySelector('.showmore-button').textContent = 'Show More';
    } else if (fullText.style.display === 'block') {
        fullText.style.display = 'none';
    } else if (messageContainer.style.display === 'block') {
        messageContainer.style.display = 'none';
        document.getElementById('toggleBtn').textContent = '5 days before';
    } else if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

// Story Popup Toggle
function toggleText() {
    const extra = document.getElementById("extraContent");
    const btn = document.getElementById("toggleBtn");
    extra.classList.toggle("show");
    btn.innerText = extra.classList.contains("show") ? "Show Less" : "Show More";
}

// Video Password Check
function openVideoPopup() {
    document.getElementById('videoPopup').style.display = 'block';
    document.getElementById('videoPasswordPrompt').style.display = 'flex';
    document.getElementById('myVideo').style.display = 'none';
}

function checkVideoPassword() {
    const password = document.getElementById('videoPasswordInput').value;
    const correctPassword = '28';
    const videoErrorMessage = document.getElementById('videoErrorMessage');
    const video = document.getElementById('myVideo');
    const videoPasswordPrompt = document.getElementById('videoPasswordPrompt');

    if (password === correctPassword) {
        videoPasswordPrompt.style.display = 'none';
        video.style.display = 'block';
        video.play();
    } else {
        videoErrorMessage.textContent = 'Incorrect password. Please try again.';
        videoErrorMessage.style.display = 'block';
    }
}

document.getElementById('videoPasswordInput')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkVideoPassword();
    }
});

// Caption Animation
const captions = [
    "🛑 <span class='glow'>Important Request</span> – <span class='glow'>Please don’t complain</span>. Everyone deserves a <span class='glow'>chance</span>.",
    "I <span class='glow'>respect</span> everyone. I’m not here to hurt or cross limits.",
    "Just once, please <span class='glow'>forgive</span> me if I made you uncomfortable.",
    "This is a <span class='glow'>genuine request</span> — <span class='glow'>please don’t complain</span>.",
    "Hi, I’m name. I made this website <span class='glow'>honestly</span> to talk to you.",
    "I don’t even know your real name — just a <span class='glow'>wish</span> to know.",
    "You don’t have to say your full name. Just tell me — is the first letter or  letter remove due to my ?",
    "If that feels personal, it’s okay. You can say <span class='glow'>‘no comment’</span>.",
    "💙 <span class='glow'>Main Baat</span>: I feel a small <span class='glow'>attraction</span> towards you.",
    "This isn’t love — but your <span class='glow'>vibe</span> and presence feels nice.",
    "So I’m asking, with respect: <span class='glow'>Is this attraction one-sided?</span>",
    "You can simply reply: <span class='glow'>Yes</span> or <span class='glow'>No</span>.",
    "Just like I’m being honest, I hope you’ll share your heart too. 💙",
    "and last — <span class='glow'>please do not complain</span>. Honest, respectful, and waiting."
];

let index = 0;
let autoInterval;
let isAuto = true;
const captionBox = document.getElementById('captionBox');
const stopBtn = document.getElementById('stopBtn');
const glowClasses = ['glow1', 'glow2', 'glow3', 'glow4', 'glow5'];

function showCaption() {
    captionBox.innerHTML = '';
    const html = captions[index];
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const nodes = Array.from(tempDiv.childNodes);
    let wordsArray = [];

    nodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            node.textContent.trim().split(/\s+/).forEach(w => {
                if (w) wordsArray.push({ text: w, glow: false });
            });
        } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'SPAN') {
            const glowClass = getRandomGlowClass();
            node.textContent.trim().split(/\s+/).forEach(w => {
                if (w) wordsArray.push({ text: w, glow: true, glowClass });
            });
        }
    });

    wordsArray.forEach((wordObj, i) => {
        const span = document.createElement('span');
        span.textContent = wordObj.text + ' ';
        span.classList.add('word');
        if (wordObj.glow) span.classList.add(wordObj.glowClass);
        span.style.transitionDelay = (i * 0.15) + 's';
        captionBox.appendChild(span);
        setTimeout(() => span.style.opacity = '1', 50 + i * 150);
    });
}

function getRandomGlowClass() {
    return glowClasses[Math.floor(Math.random() * glowClasses.length)];
}

function nextCaption() {
    if (index < captions.length - 1) {
        index++;
        showCaption();
    }
}

function prevCaption() {
    if (index > 0) {
        index--;
        showCaption();
    }
}

function toggleAuto() {
    if (isAuto) {
        clearInterval(autoInterval);
        isAuto = false;
        stopBtn.textContent = '▶ Resume';
    } else {
        autoInterval = setInterval(nextCaption, 5000);
        isAuto = true;
        stopBtn.textContent = '⏸ Stop';
    }
}

function showFullText() {
    document.getElementById('fullText').style.display = 'block';
    alert("🙏 Please don’t complain, please. I’ve shared this with full honesty. Click OK and see all ");
}

function toggleMessage() {
    const message = document.getElementById("message-container");
    const button = document.getElementById("toggleBtn");
    if (message.style.display === "none") {
        message.style.display = "block";
        button.innerText = "Show Less";
    } else {
        message.style.display = "none";
        button.innerText = "5 days before";
    }
}

showCaption();
autoInterval = setInterval(nextCaption, 5000);
