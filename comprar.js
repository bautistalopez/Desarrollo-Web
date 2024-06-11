document.addEventListener('click', function () {
    const btnEuro = document.getElementById('btnEuro');
    const btnDolar = document.getElementById('btnDolar');
    const precios = document.querySelectorAll('.precio'); 

    const tasaCambio = 0.93;

    btnEuro.addEventListener('click', function () { 
        for (let i = 0; i < precios.length; i++) {
            const precio = precios[i];
            const precioUSD = parseFloat(precio.getAttribute('data-precio-usd'));
            const precioEUR = (precioUSD * tasaCambio);
            precio.textContent = precioEUR.toLocaleString() + "€";
        }
    });

    btnDolar.addEventListener('click',function () {
        for (let i = 0; i < precios.length; i++) {
            const precio = precios[i];
            const precioUSD = parseFloat(precio.getAttribute ('data-precio-usd'));
            precio.textContent = precioUSD.toLocaleString() + "$";
        }
    });
});
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

document.addEventListener('mousemove', function() {
    const btnEuro = document.getElementById('btnEuro');
    const btnDolar = document.getElementById('btnDolar');

    btnEuro.addEventListener('mouseenter', function() {
        btnEuro.style.backgroundColor = '#9E9E9E';
        btnEuro.style.color = 'white';
    });

    btnEuro.addEventListener('mouseleave', function() {
        btnEuro.style.backgroundColor = '';
        btnEuro.style.color = '';
    });

    btnDolar.addEventListener('mouseenter', function() {
        btnDolar.style.backgroundColor = '#9E9E9E';
        btnDolar.style.color = 'white';
    });

    btnDolar.addEventListener('mouseleave', function() {
        btnDolar.style.backgroundColor = '';
        btnDolar.style.color = '';
    });
});
