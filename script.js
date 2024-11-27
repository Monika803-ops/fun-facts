const facts = [
    "I enjoy building connections with people from various backgrounds.",
    "I believe in Krishna and Hanumanji.",
    "I am deeply spiritual.",
    "I value diversity and friendships.",
    "I am passionate about learning and self-improvement."
];

document.getElementById('generateFact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[randomIndex];
});
