document.addEventListener('DOMContentLoaded', function () {
    var flower = document.querySelectorAll('.petals');
    var center = document.querySelector('.center')

    setInterval(function () {
        center.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }, 350);

    flower.forEach(function (petal) {
        petal.addEventListener('click', function () {
            this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        });
    });
});
