$(document).ready(function(){
			
			//Mouse no Logotipo//
			/*$("#logotipo").on("mouseover", function(){
				$("#banner").addClass("efeito");
			}).on("mouseout", function(){
				$("#banner").removeClass("efeito");
			});*/

			

			//Clique no Campo de Busca no Nav
			$("#buscar").on("focus", function(){
				$("li.search").addClass("efeitoSearch");
			}).on("blur", function(){
				$("li.search").removeClass("efeitoSearch");
			});

			//Carousel no Latest News
			$(".thumbnails").owlCarousel({
				loop:true,
				nav:true,
				margin:20,
				responsive:{
					0:{
						items: 1
					},
					468:{
						items: 3
					},
					768:{
						items: 5
					}
				}
			});

			
			//Botão ScrollTop no Mobile//
			$("#pageup").on("click", function(event){
				
				event.preventDefault();

				$("html, body").animate({
					scrollTop: 0
				}, 300);

			});

			
			//Botão de Menu no Mobile
			$("#btn-bars").on("click", function() {
				$("header").toggleClass("open-menu");
			});

			$(".menu-mobile-mask, .btn-menu-close").on("click", function() {
				$("header").removeClass("open-menu");
			});

			

			//Botão de Busca no Mobile
			$("#btn-search").on("click", function(){
				$("header").toggleClass("open-search");
				$("#input-menu-search").focus();
			});

			$("#input-menu-search").on("blur", function(){
				$("header").removeClass("open-search");
			})




});