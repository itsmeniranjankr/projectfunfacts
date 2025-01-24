const facts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible.",
    "A group of flamingos is called a 'flamboyance'.",
    "Bananas are berries, but strawberries aren't.",
    "Octopuses have three hearts.",
    "Wombat poop is cube-shaped.",
    "A day on Venus is longer than a year on Venus.",
    "The shortest war in history lasted 38 minutes, between Britain and Zanzibar on August 27, 1896.",
    "Cows have best friends and get stressed when they are separated.",
    "The inventor of the Pringles can is buried in one.",
    "A jiffy is an actual unit of time: 1/100th of a second.",
    "Sea otters hold hands while sleeping to keep from drifting apart.",
    "The world's largest desert is Antarctica.",
    "A shrimp's heart is located in its head.",
    "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion.",
    "A group of pugs is called a 'grumble'.",
    "The unicorn is the national animal of Scotland.",
    "The longest time between two twins being born is 87 days.",
    "A snail can sleep for three years.",
    "The average person walks the equivalent of five times around the world in their lifetime.",
    "The heart of a blue whale is so large that a human can swim through its arteries."
];
function generateFact() {
    const factDisplay = document.getElementById('fact-display');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
}
