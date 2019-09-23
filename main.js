// JavaScript Document


$(document).ready(function(){

//Scroll

	$('.ancla').click(function(evento){
      //Anulamos la funcionalidad por defecto del evento
      evento.preventDefault();
      //Creamos el string del enlace ancla
      var codigo = "#" + $(this).data('ancla');
      //Funcionalidad de scroll lento para el enlace ancla en 2 segundos
      $('html,body').animate({scrollTop: $(codigo).offset().top}, 1500, 'easeOutCirc');
    });


	$('.ancla2').click(function(evento){
      //Anulamos la funcionalidad por defecto del evento
      evento.preventDefault();
      //Creamos el string del enlace ancla
      var codigo = "#" + $(this).data('ancla');
      //Funcionalidad de scroll lento para el enlace ancla en 2 segundos
      $('html,body').animate({scrollTop: $(codigo).offset().top}, 1500, 'easeOutCirc');
	  //Funcionalidad de slideToggle del menu desplegable
      $('#desplegable').slideToggle('swing');
    });

//Menu

    $('#botonMenu').click(function(evento){
    	//Anulamos la funcionalidad por defecto del evento
    	evento.preventDefault();
		//Funcionalidad de slideToggle del menu desplegable
    	$('#desplegable').slideToggle('swing');
    });  

//Servicios

	$('.window').click(function(){

		var titulo="";
		var texto=$(this).data('window');
		var foto="img/portfolio/" + $(this).data('window') + ".png";

		if (texto==="paseo") {
			var titulo="PASEOS";
			var texto="No tiene tiempo o no puede salir a pasear con su perro, llámenos y nosotros lo recogeremos.";
		}else if (texto==="comida") {
			var titulo="COMIDA";
			var texto="Se ha quedado sin comida, su medicina o cualquier otro accesorio de su mascota?, nosotros podemos llevarselo a casa.";
		}else if (texto==="vet") {
			var titulo="VETERINARIO";
			var texto="Las visitas al veterinario suelen ser tediosas, largas esperas, situaciones complicadas, etc. Por eso, nos ofrecemos a llevarlo por Ud.";
		}else if (texto==="pelu") {
			var titulo="PELUQUERIA";
			var texto="Lavamos, desparasitamos, cortamos uñas y pelamos a su mascota. Recogida y entrega en su domicilio.";
		}else if (texto==="school") {
			var titulo="ADIESTRAMIENTO";
			var texto="Ofrecemos un programa de educación canina que hará a su mascota más obediente y equilibrada.";
		}else if (texto==="resi") {
			var titulo="RESIDENCIA";
			var texto="Proximamente sus mascotas no tendrán que quedarse solas cuando os ausenteis de casa.";
		}


		//alert (texto);
		
		$('.titulo').text((titulo));
		$('.parrafo').text((texto));
		$('#foto').attr('src', foto);
		$('body').css('overflow', 'hidden');
		$('#window').slideToggle('swing');
	});

	$('.closeBoton').click(function(){
		$('body').css('overflow', 'auto');
		$('#window').slideToggle(1000, 'swing');
	});

});
