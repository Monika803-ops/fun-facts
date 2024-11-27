const facts = [
    "I enjoy making friends from different places.It helps me learn about new cultures and experience divesity.",
    "I believe in Krishna and Hanumanji and draw spirutual strength frome these beliefs.",
    "I am  spiritual person and find peace in my connection with God and my beliefs.",
    "I value independence and self- improvement.",
    "I focus on my own path and don't worry about what others think of me.",
    "I can laugh through tough moments.",
    "I turn negativity into ambition.",
    "I believe in turning pain into strength.",
    "I have the right to work, but never to the fruit of work.",
    "I am the master of my destiny."
];

document.getElementById('generateFact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[randomIndex];
});
