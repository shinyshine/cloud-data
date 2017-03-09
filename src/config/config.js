export const config = {
	server: "http://192.168.235.21:8080/WeiboNewsProject/news/"
}


export const splitUrlSearch = () => {
	var arr = [];
	var str = window.location.search;
	if(str = str.split('?')[1]) {
		var items = str.split('&');
		console.log(items);
		for(var i = 0, len = items.length; i < len; i ++) {
			var items = items[i].split('=');
			var name = items[0],
				value = items[1]
			arr[name] = value;
		}


	}
	return arr;
}

export const isIE = (ver) => {
	var b = document.createElement('b');
	b.innerHTML = '<!--[if IE ' + ver + ']1<![endif]-->';
	console.log(b.innerHTML)
	return b.innerHTML;
}
export const getIEVer = () => {
	var UA = navigator.userAgent;

	if(/msie/i.test(UA)) {
		return parseInt(UA.match(/msie (\d+\.\d+)/i)[1]);
	} else {
		return false;
	}
}
