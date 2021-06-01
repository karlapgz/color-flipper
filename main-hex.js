const colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "A", "B", "C", "D", "E", "F"],
    button = document.getElementById("btn"),
    color = document.querySelector(".color");

button.addEventListener('click', () => {
    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
        let number = getRandomNumber();
        hexColor += colors[number];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}