function $(expr, con) {
	console.log(`F1 ${expr}, ${con}`)
	return typeof expr === 'string'? (con || document).querySelector(expr) : expr;
}

function $$(expr, con) {
	console.log(`F2 ${expr}, ${con}`)
	const sliced = Array.prototype.slice.call((con || document).querySelectorAll(expr));
	console.log(`sliced ${sliced}`)
	return sliced;
	// return Array.prototype.slice.call((con || document).querySelectorAll(expr));
}

function xhr(o) {
		console.log(`xhr ${o}`)
	var xhr = new XMLHttpRequest(o.src);
	
	xhr.open("GET", o.src);
	
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if (xhr.status < 400) {
				try {
					o.onsuccess.call(xhr);
				}
				catch (e) {
					o.onerror.call(xhr);
					console.error(e);
				}
			}
			else {
				o.onerror.call(xhr);
			}
		}
	};
	
	xhr.send();
}

(function(){

document.body.className = 'redirecting';

		
var slug = location.pathname.slice(1);
		console.log(`redirecting, slug: ${slug}`)
        const url = '/multidocsify_test/index.html'

        location.href = url;


/*
xhr({
	src: 'secrets.json',
	onsuccess: function () {
		var slugs = JSON.parse(this.responseText);
		
		var hash = slugs[slug];
		
		if (hash) {
			// Redirect
			var url = hash.indexOf('http') == 0? hash : 'http://dabblet.com/gist/' + hash;
			$('section.redirecting > p').innerHTML = 'Redirecting to <a href="' + url + '">' + url + '</a>…';
			location.href = url;
		}
		else {
			document.body.className = 'error not-found';
		}
	},
	onerror: function () {
		//document.body.className = 'error json';
	}
});
*/

})();