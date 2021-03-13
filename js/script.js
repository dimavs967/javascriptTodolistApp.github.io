$(function(){

	// input
	$('input').keydown(function(e){
		if(e.keyCode === 13 || e.keyCode === 9) {
			$("#ulList").append('<li>' + this.value + '</li>')

			this.value = ''
		}; 
	}); 

	// remove element
	$('#ulList').click(function(event) {
	    $(event.target).closest('li').remove()
	   
	    // $(event.target).closest('li').click(function(){
	    // 	 $(this).toggleClass("done")
	    // 	// console.log('test');
	    // })

	    // $(event.target).closest('li').click(function(){
	    // 	$(this).addClass('done')
	    // })

	});

	// clear list
	$('.clean').click(function(){
		const ulList = document.getElementById('ulList')
		while (ulList.firstChild) {
	  		ulList.removeChild(ulList.firstChild);
	  	}
	})

	// day/night
	$('.view').click(function(){
		$('body').toggleClass('dayNight')
		$('#input').toggleClass('inputNight')
		// $('#input').removeClass('inputClass')
		$('#footerBtnsParent').toggleClass('listNight')
		$('#listParent').toggleClass('listNight')
	})
})