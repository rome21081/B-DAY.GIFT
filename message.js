document.querySelector('.close-button').addEventListener('click', function () {
    document.querySelector('.overlay').style.display = 'none';
});

document.querySelectorAll('.interface').forEach(function (interfaceElement) {
    interfaceElement.addEventListener('click', function () {
        alert('Clicked interface element!');
    });
});