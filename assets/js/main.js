// Scroll Up
$('#slider-btn1 a').on("click", function () {
    $('body,html').animate({
      scrollBottom: 0
    }, 800);
    return false;
  });
// Slide header
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
  
	
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });

  



// slide 


const prew = document.getElementById('btn-prew'),
	next = document.getElementById('btn-next'),
	slides = document.querySelectorAll('.slide'),
	dots = document.querySelectorAll('.dot'),
	slidesWrap = document.querySelectorAll('.slider-weapper');

let index = 0;

const activeSlide = n => {
	for(slide of slides) {
		slide.classList.remove('active')
	}
	slides[n].classList.add('active')


}
const activeDot = n => {
	for(dot of dots) {
		dot.classList.remove('active');
	}
	dots[n].classList.add('active');


}
const prepareCurrentSlide = ind => {
	activeSlide(ind);
	activeDot(ind);
}
const nextSlide = () => {
	if(index == slides.length - 1) {
		index = 0;
		prepareCurrentSlide(index)
	} else {
		index++;
		prepareCurrentSlide(index)
	}
}

const prewSlide = () => {
	if(index == 0) {
		index = slides.length - 1;
		prepareCurrentSlide(index);
	} else {
		index--;
		prepareCurrentSlide(index);
	}
}
 
 dots.forEach((item,indexDot) => {
 	item.addEventListener('click', () => {
 		index = indexDot
 		prepareCurrentSlide(index);	
 	})
 })

next.addEventListener('click', nextSlide);
prew.addEventListener('click', prewSlide);	


// modal-window



$('.flaticon-user').on('click', function () {
    $('.wrapper-modal').fadeIn();
  })

  $('.form-book').on('click', function () {
    $('.wrapper-modal').fadeOut();
  })

  $('.overlay').on('click', function () {
     $('.wrapper-modal').fadeOut();
  }) 
  $('.close').on('click', function(){
    $('.wrapper-modal').hide();
  })


  $(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
	  $(".header-sticky").removeClass("sticky-bar");
	  $('#back-top').fadeOut(500);
	} else {
	  $(".header-sticky").addClass("sticky-bar");
	  $('#back-top').fadeIn(500);
	}
  });

// Scroll Up
 function scrollTo(element) {
	window.scroll({
		left: 0,
		top: element.offsetTop,
		behavior: 'smooth'

	})
 }

 var buttonScroll = document.querySelector('.slider-btn1');
 var footer = document.querySelector('.new-collections');


 buttonScroll.addEventListener('click', () => {
	scrollTo(footer);
 })

 
   // Validate

   $('.button-form').on('click', function(e) {
	e.preventDefault();
	$(this).parent('form').submit();
  })
  
  $.validator.addMethod('regex', function(value, element, regexp) {
	let regExsp = new RegExp(regexp);
	return regExsp.test(value);
  }, 'Plese check your input')
  
  
	function valEll(el) {
	  el.validate({
		rules : {
		  firstName : {
			required : true,
			regex : "[A-Za-z] {1,32}"
		  },
		   email : {
			required : true,
			regex : "[0-9A-Za-z]"
		  },
		   phone : {
			required : true,
			digits : true,
			minlength : 10,
			maxlength : 13,
			regex : "[0-9]+"
		  }
		},
		messages : {
		  firstName : {
			required : 'Field is required',
			regexp : 'Enter your name correctly'
		  },
		 email : {
		  required : 'Field is required',
			regexp : 'Enter your name correctly'
  
		  },
		  phone : {
			required : 'Field is required',
			regexp : 'Enter your name correctly'
		  }
		},
		submitHandler: function(form) {
		  $('#preloader-active').fadeIn();
		  let $form = $(form)
		  let $formId = $(form).attr('id');
		  switch($formId) {
			case 'form-book':
			$.ajax({
			  type:'POST',
			  url: $form.attr('action'),
			  data: $form.serialize()
			})
			.done(function() {
			  console.log('Success');
			})
			.fail(function () {
			  console.log('Fail');
			})
			.always(function() {
			  setTimeout (function() {
				$form.trigger('reset');
				$('.wrapper-modal').fadeOut();
			  }, 1000);
			  setTimeout(function() {
				$('#preloader-active').fadeOut();
			  }, 1400)
			});
			break;
			case 'box-search':
			$.ajax ({
			  type: 'POST',
			  url : $form.attr('action'),
			  data: $form.serialize()
			})
			.done(function() {
			  console.log('Success');
			})
			.Fail(function() {
			  console.log('Fail');
			})
			.always(function() {
			  setTimeout(function() {
				$form.trigger('reset');
			  }, 1000);
			 setTimeout(function() {
				$('#preloader-active').fadeOut();
			  }, 1400);
			});
			break;
		  }
		  return false;
		}
	  })
	};
	$('.form-val').each(function() {
	  valEll($(this));
	})
  (jQuery);     
		  

 
  
//   const SwrappeBlock = document.getElementById('characteristics-color-grup')
//   const SwrapperContents = document.getElementById('one-item-img')
//   const StabsEl = Array.from(document.querySelectorAll('.characteristics-color-item'))
//   const wrappeBlock = document.getElementById('characteristics-button')

// const tabsEl = Array.from(document.querySelectorAll('.characteristics-button-item'));
// console.log(tabsEl)
//   console.log(tabsEl)
  
//   const changeClass = el => {
// 	  for(let i = 0; i < SwrappeBlock.children.length; i++) {
// 		  SwrappeBlock.children[i].classList.remove('active-color')
// 	  }
// 	  for(let i = 0; i < wrappeBlock.children.length; i++) {
// 		wrappeBlock.children[i].classList.remove('characteristics-button-item-active')
// 	}
// 	el.classList.add('characteristics-button-item-active');
// 	  el.classList.add('active-color');
// 	  for(let i = 0; i < SwrappeBlock.children.length; i++) {
// 		SwrappeBlock.children[i].classList.remove('characteristics-button-item-active')
// 	  }
// 	  el.classList.add('characteristics-button-item-active');
//   }
//   for(let index = 0; index < StabsEl.length; index++ ){
// 	  tabsEl[index].addEventListener('click', e => {
// 	  const currTab = e.target.dataset.btn
// 	  changeClass(e.target)
// 	  for(let i = 0; i < SwrapperContents.children.length; i++) {
// 		  SwrapperContents.children[i].classList.remove('active-color');
// 		  if(SwrapperContents.children[i].dataset.content == currTab) {
// 			  SwrapperContents.children[i].classList.add('active-color');
// 			  for(let index = 0; index < tabsEl.length; index++ ){
// 				tabsEl[index].addEventListener('click', e => {
// 				const currTab = e.target.dataset.btn
// 				changeClass(e.target)
// 				for(let i = 0; i < wrapperContents.children.length; i++) {
// 					wrapperContents.children[i].classList.remove('active-color');
// 					if(wrapperContents.children[i].dataset.content == currTab) {
// 						wrapperContents.children[i].classList.add('active-color');
// 					}
// 				}
// 			})
// 		  }
// 	  }
// 	}
// 	})

	 
  
  
  
const wrappeBlock = document.getElementById('characteristics-button')
const wrapperContents = document.getElementById('one-item-img')
const tabsEl = Array.from(document.querySelectorAll('.characteristics-button-item'));
console.log(tabsEl)

const changeClass = el => {
	for(let i = 0; i < wrappeBlock.children.length; i++) {
		wrappeBlock.children[i].classList.remove('characteristics-button-item-active')
	}
	el.classList.add('characteristics-button-item-active');
	for(let i = 0; i < wrappeBlock.children.length; i++) {
		wrappeBlock.children[i].classList.remove('characteristics-button-item-active')
	}
	el.classList.add('characteristics-button-item-active');
}
for(let index = 0; index < tabsEl.length; index++ ){
	tabsEl[index].addEventListener('click', e => {
	const currTab = e.target.dataset.btn
	changeClass(e.target)
	for(let i = 0; i < wrapperContents.children.length; i++) {
		wrapperContents.children[i].classList.remove('characteristics-button-item-active');
		if(wrapperContents.children[i].dataset.content == currTab) {
			wrapperContents.children[i].classList.add('characteristics-button-item-active');
		}
	}
})

}


// const QwrappeBlock = document.getElementById('characteristics-color-grup')
// const QwrapperContents = document.getElementById('one-item-img')
// const QtabsEl = Array.from(document.querySelectorAll('.characteristics-color-item '));
// console.log(tabsEl)

// const changeClass = el => {
// 	for(let i = 0; i < QwrappeBlock.children.length; i++) {
// 		QwrappeBlock.children[i].classList.remove('color-active')
// 	}
// 	el.classList.add('color-active');
// 	for(let i = 0; i < QwrappeBlock.children.length; i++) {
// 		QwrappeBlock.children[i].classList.remove('color-active')
// 	}
// 	el.classList.add('color-active');
// }
// for(let index = 0; index < QtabsEl.length; index++ ){
// 	QtabsEl[index].addEventListener('click', e => {
// 	const currTab = e.target.dataset.btn
// 	changeClass(e.target)
// 	for(let i = 0; i < QwrapperContents.children.length; i++) {
// 		QwrapperContents.children[i].classList.remove('color-active');
// 		if(QwrapperContents.children[i].dataset.content == currTab) {
// 			QwrapperContents.children[i].classList.add('color-active');
// 		}
// 	}
// })

// }

