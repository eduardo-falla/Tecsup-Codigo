(function () {
	var retargetUrl = window.location.href;
	if (window.parent && window.location !== window.parent.location) {
		retargetUrl = window.parent.document.referrer;
	}
	const ticker = window.setInterval(function() {
		if (!window.document.body) {
			return;
		}
		clearInterval(ticker);

		var pixel = document.createElement('img');
		pixel.setAttribute(
			'style',
			'position: absolute; width: 1px; height: 1px; left: 0px; bottom: 0px; opacity: 0;',
		)
		pixel.src = 'https://my.rtmark.net/img.gif?f=sync&partner=7557818e0d391bba9ee7fe6645f01b42aa6056ddc9e0abd6cf87eba80a834878&ttl=&rurl=' + encodeURIComponent(retargetUrl);
		window.document.body.appendChild(pixel);
	}, 500);
})();
