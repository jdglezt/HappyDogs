// JavaScript Document


$(document).ready(function(){

//Scroll

	$('.ancla').click(function(evento){
      //Anulamos la funcionalidad por defecto del evento
      evento.preventDefault();
      //Creamos el string del enlace ancla
      var codigo = "#" + $(this).data('ancla');
      //Funcionalidad de scroll lento para el enlace ancla en 3 segundos
      $('html,body').animate({scrollTop: $(codigo).offset().top}, 2000, 'easeOutCirc');
    });

//Servicios

	$('.window').click(function(){
		
		var texto=$(this).data('window');
		var foto="img/portfolio/" + $(this).data('window') + ".png";

		if (texto==="paseo") {
			var texto="No tiene tiempo o no puede salir a pasear con su perro, llamenos y nosotros lo recogeremos.";
		}else if (texto==="comida") {
			var texto="Se ha quedado sin comida o no puede transportar ese saco tan pesado, nosotros podemos hacerlo.";
		}else if (texto==="vet") {
			var texto="Las visitas al Vet. suelen ser tediosas, largas esperas, situaciones complicadas, etc. Por eso, nos ofrecemos a llevarlo por Ud.";
		}else if (texto==="pelu") {
			var texto="Lavamos, desparasitamos, cortamos uñas y pelamos a su mascota. Recogida y entrega en su domicilio.";
		}else if (texto==="school") {
			var texto="Ofrecemos un programa de educación canina que hará a su mascota más obediente y equilibrada.";
		}else if (texto==="resi") {
			var texto="Proximamente sus mascotas no tendrán que quedarse solas cuando os ausenteis de casa.";
		}


		//alert (texto);
		

		$('.parrafo').text((texto));
		$('#foto').attr('src', foto);
		$('body').css('overflow', 'hidden');
		$('#window').slideToggle('linear');
	});

	$('.closeBoton').click(function(){
		$('body').css('overflow', 'auto');
		$('#window').slideToggle(1000, 'swing');
	});

});
