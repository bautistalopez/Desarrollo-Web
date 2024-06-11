document.addEventListener('mousemove', function() {
    const nav = document.querySelector('nav');
    const enlaces = nav.querySelectorAll('a');
    for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener('mouseenter', function() {
            for (let j = 0; j < enlaces.length; j++) {
                enlaces[j].style.color = '';
            }
            this.style.color = 'grey';
        });
    }
    nav.addEventListener('mouseleave', function() {
        for (let i = 0; i < enlaces.length; i++) {
            enlaces[i].style.color = '';
        }
    });
});

