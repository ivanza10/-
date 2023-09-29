var navButton = document.getElementById('nav-button');
var pagePanel = document.getElementById('page-panel');

navButton.addEventListener('click', function (event) {
    event.stopPropagation(); 
    pagePanel.classList.toggle('active');
    document.querySelectorAll('.bar').forEach(bar => {
        bar.classList.toggle('opened');
    });
});

document.addEventListener('click', function () {
    if (pagePanel.classList.contains('active')) {
        pagePanel.classList.remove('active');
        document.querySelectorAll('.bar').forEach(bar => {
            bar.classList.remove('opened');
        });
    }
});

pagePanel.addEventListener('click', function (event) {
    event.stopPropagation(); 
});


document.addEventListener('keyup', function (event) {
    if (event.key === 'Escape' && pagePanel.classList.contains('active')) {
        pagePanel.classList.remove('active');
        document.querySelectorAll('.bar').forEach(bar => {
            bar.classList.remove('opened');
        });
    }
});
