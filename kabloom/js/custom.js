jQuery(document).ready(function(){
	$('#myModal').modal('show');
	$(window).scroll(function(){
		if( $(this).scrollTop() > 200 ) {
			$('.top-icon').fadeIn();
		} else {
			$('.top-icon').fadeOut();	
		}
	});	
	$('.top-icon').on('click',function(e){
		event.preventDefault()
		$('html, body').animate({scrollTop : 0}, 1000);
		return false;
	});			
});