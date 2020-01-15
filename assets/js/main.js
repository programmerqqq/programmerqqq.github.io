

(function($) {

	var	$window = $(window),
		$head = $('head'),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ],
			'xlarge-to-max':    '(min-width: 1681px)',
			'small-to-xlarge':  '(min-width: 481px) and (max-width: 1680px)'
		});
	// Sidebar.
	var $sidebar = $('#sidebar'),
	$sidebar_inner = $sidebar.children('.inner');

	// Toggle.
		$('<a href="#sidebar" class="toggle">Toggle</a>')
		.appendTo($sidebar)
		.on('click', function(event) {

			// Prevent default.
				event.preventDefault();
				event.stopPropagation();

			// Toggle.
				$sidebar.toggleClass('inactive');

		});

		
})(jQuery);