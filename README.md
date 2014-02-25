frag.js
=======

A very simple DOM library for Javascript.

This library adds a function for each valid HTML5 DOM element. Calling one of these functions generates a DOM element of the appropriate type and returns it. It also adds a frag() function which creates and returns document fragments.


Basic Usage
-----------
<pre>
myArticle = frag(
				div(
					{ class: 'article' },
					p('This is an article'),
					p(
						{ style: 'color:red' },
						'This is red text ',
						a(
							{ href: 'http://google.com', target: '_blank' },
							'This is a link to google.com'
						)
					)
				)
			);
</pre>

This generates a document fragment which contains a <div/> with two <p/> tags, one of which has an <a/> tag in it:

<pre>
<div class="article">
	<p>This is an article</p>
	<p style="color:red">This is red text <a href="http://google.com" target="_blank">This is a link to google.com</a></p>
</div>
</pre>

The returned object is a reference to a normal document fragment, so you can simply add it to any element you wish:

<pre>
// Javascript
document.body.appendChild(myArticle);
// jQuery
$('body').append(myArticle);
</pre>


A Little Deeper
---------------

These functions take an arbitrary and unlimited number of arguments. Each argument will be interpreted differently based on it's type:

*Object*  An object whose keys represent html attributes and whose values contain the values of those attributes.
"DOM Element"  Adds a DOM element as a child node of the current element. All nodes occur in the order they appear in the arguments.
*String, Number, and everything else*  Adds a text node as a child of the current element. All nodes occur in the order they appear in the arguments.


Performance
-----------

Designed to be light and simple. On a modern browser, it allows an abstraction of pure javascript DOM manipulation with very little additional overhead. The minified code is just under 2 kb.


Known Issues
------------

- No support for older browsers. If you require such support, <a href="http://jquery.com" target="_blank">jQuery</a> is probably your best bet.
- Clutters the window namespace with a function for each valid html DOM element. This is by design, but as a result the "var" tag cannot be used currently.