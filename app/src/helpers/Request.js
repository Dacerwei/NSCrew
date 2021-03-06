require('es6-promise').polyfill();

export default(url, opts) => {
    return fetch(url).then((resp) => {
    	let contentType = resp.headers.get('content-type');
    	if (contentType && contentType.indexOf('application/json') !== -1) {
    		return resp.json();
    	} else {
    		return resp.text();
    	}
    });
}
