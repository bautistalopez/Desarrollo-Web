

$(document).ready(function() {

    $("#boton").click(function() {
        if ($("#name")[0].value && $("#last_name")[0].value && $("#tel")[0].value && $("#email")[0].value && $("#message")[0].value) {
            alert("¡El formulario se envió correctamente!");
        } else {
            alert("Por favor, complete todos los campos del formulario.");
        }
    });


    function restaurarPlaceholderOriginal(input, placeholderOriginal) {
        input.attr("placeholder", placeholderOriginal);
    }

    var placeholderOriginalName = $("#name").attr("placeholder");
    var placeholderOriginalLastName = $("#last_name").attr("placeholder");
    var placeholderOriginalTel = $("#tel").attr("placeholder");
    var placeholderOriginalEmail = $("#email").attr("placeholder");
    var placeholderOriginalMessage = $("#message").attr("placeholder");

    $("#name").mouseenter(function() {
        $("#name").attr("placeholder", "Ingresa tu nombre");
    }).mouseleave(function() {
        restaurarPlaceholderOriginal($("#name"), placeholderOriginalName);
    });

    $("#last_name").mouseenter(function() {
        $("#last_name").attr("placeholder", "Ingresa tu apellido");
    }).mouseleave(function() {
        restaurarPlaceholderOriginal($("#last_name"), placeholderOriginalLastName);
    });

    $("#tel").mouseenter(function() {
        $("#tel").attr("placeholder", "Ingresa tu teléfono");
    }).mouseleave(function() {
        restaurarPlaceholderOriginal($("#tel"), placeholderOriginalTel);
    });

    $("#email").mouseenter(function() {
        $("#email").attr("placeholder", "Ingresa tu correo electrónico");
    }).mouseleave(function() {
        restaurarPlaceholderOriginal($("#email"), placeholderOriginalEmail);
    });

    $("#message").mouseenter(function() {
        $("#message").attr("placeholder", "Ingresa un mensaje");
    }).mouseleave(function() {
        restaurarPlaceholderOriginal($("#message"), placeholderOriginalMessage);
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

