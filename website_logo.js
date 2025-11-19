let introPlayed = false;

const introLogo = document.getElementById("intro-logo");
const header = document.getElementById("header");
const chatContainer = document.getElementById("chat-container");
const messages = document.getElementById("messages");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.innerText = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
}

function mockCaumaResponse(userText) {
    const sampleReplies = [
        "Interesting... tell me more.",
        "I’m thinking about it!",
        "That’s actually pretty cool.",
        "Let me process that for a moment.",
        "Hmm… good point.",
        "I see what you mean!"
    ];
    return sampleReplies[Math.floor(Math.random() * sampleReplies.length)];
}

function playIntro() {
    introPlayed = true;

    // Move logo to header
    introLogo.style.transform = "translate(-50%, -300%) scale(0.1)";
    
    setTimeout(() => {
        introLogo.style.display = "none";
        header.style.top = "10px";
        chatContainer.style.top = "80px";
    }, 800);
}

sendBtn.onclick = () => {
    const text = input.value.trim();
    if (!text) return;

    if (!introPlayed) playIntro();

    addMessage(text, "user");
    input.value = "";

    setTimeout(() => {
        addMessage(mockCaumaResponse(text), "bot");
    }, 700);
};

input.addEventListener("keydown", e => {
    if (e.key === "Enter") sendBtn.onclick();
});