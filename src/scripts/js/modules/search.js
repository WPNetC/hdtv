$(document).ready(function () {
	var search = function () {
		var term = $('.js-search-txt').val();
		var mode = $('input[name=mode]:checked', '.navbar-group__search').val();
		var query = '?term=' + term;

		if (mode != undefined && mode != '') {
			query = query + '&mode=' + mode;
		}

		window.location.assign('/search' + query); // eslint-disable-line
	};

	$('.js-search-txt').keydown(function (e) {
		if (e.which == 13) {
			search();
		}
	});

	$('.js-search-btn').click(function () {
		search();
	});
});
