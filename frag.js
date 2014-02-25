;'use strict';
var frag = (function() {
	var elems = ["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","menu","menuitem","meta","meter","nav","nobr","noframes","noscript","object","ol","optgroup","option","output","p","param","plaintext","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr"];
	for (var i=0, l=elems.length; i<l; i++) {
		(function(tag) {
			window[tag] = function() {
				var el = document.createElement(tag), arg;
				for (var i=0, l=arguments.length; i<l; i++) { arg = arguments[i];
					if (arg.nodeName)
						el.appendChild(arg)
					else
						switch(typeof arg) {
							case 'object':
								if (typeof arg.listeners == 'object') {
									for (var event in arg.listeners) el.addEventListener(event, arg.listeners[event].bind(el), true);
									delete arg.listeners;
								}
								for (var attr in arg) el.setAttribute(attr,arg[attr]); break;
							case 'string':
							case 'number':
								el.appendChild(document.createTextNode(arg)); break;
						}
				}
				return el;
			}
		})(elems[i]);
	};
	return function() {
		var frag = document.createDocumentFragment(), arg;
		for (var i=0, l=arguments.length; i<l; i++) { arg = arguments[i];
			if (arg.nodeName)
				frag.appendChild(arg)
			else
				switch(typeof arg) {
					case 'string':
					case 'number':
						frag.appendChild(document.createTextNode(arg)); break;
				}
		}
		return frag;
	};
})();
