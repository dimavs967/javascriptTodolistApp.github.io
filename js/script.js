$(function(){
	// localStorage
	function toLocal () {
		let todos; 
		todos = ulList.innerHTML; 
		localStorage.setItem('todos', todos);
	}

	$('input').keydown(function(e){
		if(e.keyCode === 13 || e.keyCode === 9) {

			let content = this.value; 

			if (content.length > 0) {
				$("#ulList").append('<li>' + this.value + '</li>')
			}		

			toLocal()

			this.value = ''
		}; 
	}); 

	// mark element
	$('#ulList').click(function(event) {
	   $(event.target).closest('li').toggleClass("line")
	   toLocal()
	});

	// clear list
	$('.clean').click(function(){
		const ulList = document.getElementById('ulList')
		while (ulList.firstChild) {
	  		ulList.removeChild(ulList.firstChild);
	  	}

	  	toLocal()
	})

	// day/night
	
	var changed = !!(parseInt(localStorage.getItem('changed')) || 0);

	$('.view').click(function(){

		changed = !changed;
		localStorage.setItem('changed', changed ? 1 : 0);

		$('body').toggleClass('dayNight', changed);
		$('#input').toggleClass('inputNight', changed)
		$('#footerBtnsParent').toggleClass('listNight', changed)
		$('#listParent').toggleClass('listNight', changed)
		$('.clean').toggleClass('cleanNight', changed)

	})
		$('body').toggleClass('dayNight', changed);
		$('#input').toggleClass('inputNight', changed)
		$('#footerBtnsParent').toggleClass('listNight', changed)
		$('#listParent').toggleClass('listNight', changed)
		$('.clean').toggleClass('cleanNight', changed)
		
	// get data
	if (localStorage.getItem('todos')) {
		ulList.innerHTML = localStorage.getItem('todos')
	}

})