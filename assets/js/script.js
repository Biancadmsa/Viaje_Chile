
var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
  
  // Enviar alert al presionar el botón enviar
$("#buttonEnviar").click(function () {
  alert("Tu mensaje ha sido enviado");
});


// Desaparecer el texto
$('.card').click(function() {
  $(this).closest('.card').find('.card-text').toggle();
});


  // Agregando saltos de texto
$(document).ready(function() {
    // Manejador de eventos para cuando el mouse entra en el texto
  $("#inicio, #QuienesSomos, #Destacados, #Contacto").mouseenter(function() {
      // Aplica la animación de salto
  $(this).css("transform", "translateY(-10px)");
 });
  $("#inicio, #QuienesSomos, #Destacados, #Contacto").mouseleave(function() {
      // Reinicia la posición original
   $(this).css("transform", "translateY(0)");
  });
});


// Agregando Sombra en el texto del Navbar
$(document).ready(function() {
  $("#inicio, #QuienesSomos, #Destacados, #Contacto").on('mouseenter', function() {
    $(this).css('text-shadow', '2px 32px 4px rgba(0, 0, 0, 0.9)');
  }).on('mouseleave', function() {
    $(this).css('text-shadow', 'none');
  });
});

$(window).scroll(function(){

  if ($(this).scrollTop() > 400) {
      $("#menuNav").removeClass("navbar");
     $('#menuNav').addClass("bg-interno");
    } else {
  
     $("#menuNav").removeClass("bg-interno");
     $('#menuNav').addClass("navbar");
    }

 });
