$(document).ready(function() {

	var faqWrap          = $('.js-faq-accordion-wrap')
	var faqTitle         = $('.js-faq-accordion-title')
	var faqContentBlock  = $('.js-faq-accordion-content')

	// toggle FAQ questions blocks, simple accordion
	faqTitle.each(function(index, el){

		$(el).on('click', function () {
			var currentTitle        = $(this);
			var currentWrap         = $(currentTitle).closest(faqWrap);
			var currentContentBlock = currentWrap.find(faqContentBlock);


			if ( !currentWrap.hasClass('is-active') && currentContentBlock.length) {
				faqContentBlock.slideUp(300);
				currentContentBlock.slideDown(300);
				activeElement(currentWrap, faqWrap);
			} else {
				currentContentBlock.slideUp(300);
				activeElement(null, currentWrap);
			}

		});

	});

	// add active class or remove all, if we haven't $active
	function activeElement( $active, $all) {
		$all.removeClass('is-active');
		if ( $active ) {
			$active.addClass('is-active');
		}
	}


});

