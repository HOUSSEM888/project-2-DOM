// Function to generate a random hexadecimal color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    var color = '#';
    for ( i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // Function to change the background color of the color box
    function changeColor() {
        const randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;
    }

    // Add event listener to the button
    changeColorBtn.addEventListener('click', changeColor);
});
