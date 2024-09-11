const numberOfCircles = 10;
const circleContainer = document.getElementById('circle-container');

//Create circles
for (let i = 0; i < numberOfCircles; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circleContainer.appendChild(circle);
}

//Event listener for clicking circles
circleContainer.addEventListener('click', function (event) {
    const circles = document.querySelectorAll('.circle'); //Get circles from css
    const lastCircle = circles[circles.length - 1]; //Assign last circle

    if (event.target === lastCircle) {
        lastCircle.remove(); //Remove last clicked circle to the right
    }
});