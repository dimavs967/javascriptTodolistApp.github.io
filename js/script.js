$(function(){
	// input
	$('input').keydown(function(e){
		if(e.keyCode === 13 || e.keyCode === 9) {

			let content = this.value; 

			if (content.length > 0) {
				$("#ulList").append('<li>' + this.value + '</li>')
			}		

			this.value = ''
		}; 
	}); 

	// remove/mark element
	$('#ulList').click(function(event) {
	    // $(event.target).closest('li').remove()
	   $(event.target).closest('li').toggleClass("line")
	
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
		$('.clean').toggleClass('cleanNight')
	})
})