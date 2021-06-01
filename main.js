const colors = ["#bae0f5", "#bc98f3", "#fdcae1", "#fcb7af", "#fdf9c4", "#b0f2c2",
    "#8fff93", "#911a93", "#120398"],
    button = document.getElementById("btn"),
    color = document.querySelector(".color");


button.addEventListener('click', () => {
    const number = getRandomNumber();
    color.textContent = colors[number];

    document.body.style.backgroundColor = colors[number];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}