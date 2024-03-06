
var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
  
  $("#buttonEnviar").click(function () {
    alert("Tu mensaje ha sido enviado");
  });

  $('.card').click(function() {
    $(this).closest('.card').find('.card-text').toggle();
  });

  
  $(document).ready(function() {
    // Manejador de eventos para cuando el mouse entra en el texto
    $("#inicio").mouseenter(function() {
      // Aplica la animación de salto
      $(this).css("transform", "translateY(-10px)");
    });
    $("#inicio").mouseleave(function() {
      // Reinicia la posición original
      $(this).css("transform", "translateY(0)");
    });
  });

  

  $(document).ready(function() {
    $("#QuienesSomos").mouseenter(function() {
      $(this).css("transform", "translateY(-10px)");
    });
    $("#QuienesSomos").mouseleave(function() { 
      $(this).css("transform", "translateY(0)");
    });
  });

  $(document).ready(function() {
    $("#Destacados").mouseenter(function() {
      $(this).css("transform", "translateY(-10px)");
    });
    $("#Destacados").mouseleave(function() { 
      $(this).css("transform", "translateY(0)");
    });
  });

  $(document).ready(function() {
    $("#Contacto").mouseenter(function() {
      $(this).css("transform", "translateY(-10px)");
    });
    $("#Contacto").mouseleave(function() { 
      $(this).css("transform", "translateY(0)");
    });
  });