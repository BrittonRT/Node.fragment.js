Node.fragment.js
=======

A very simple DOM library for Javascript.

This library extends the Node object (which is the type of all HTML Dom elements), adding a method for each valid HTML5 DOM element. Calling one of these functions generates a DOM element of the appropriate type and returns it. It also adds a Node.fragment() function which creates and returns document fragments.


Basic Usage
-----------
<pre>
myArticle = Node.fragment(
				Node.div(
					{ class: 'article' },
					Node.p('This is an article'),
					Node.p(
						{ style: 'color:red' },
						'This is red text ',
						Node.a(
							{ href: 'http://google.com', target: '_blank' },
							'This is a link to google.com'
						)
					)
				)
			);
</pre>

This generates a document fragment which contains a &lt;div/&gt; with two &lt;p/&gt; tags, one of which has an &lt;a/&gt; tag in it:

<pre>
&lt;div class="article"&gt;
	&lt;p&gt;This is an article&lt;/p&gt;
	&lt;p style="color:red"&gt;This is red text &lt;a href="http://google.com" target="_blank"&gt;This is a link to google.com&lt;/a&gt;&lt;/p&gt;
&lt;/div&gt;
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

*Object*  An object whose keys represent html attributes and whose values contain the values of those attributes.<br/>
*DOM Element*  Adds a DOM element as a child node of the current element. All nodes occur in the order they appear in the arguments.<br/>
*String, Number, and everything else*  Adds a text node as a child of the current element. All nodes occur in the order they appear in the arguments.


Advanced Usage
--------------

You can also call the Node.createShortcuts() method to generate global shortcut functions:

<pre>
Node.createShortcuts();

// These are now the same
p()
Node.p()

// These are now the same
fragment()
Node.fragment()
</pre>

Additionally, you can pass in an optional argument "prefix", which is prepended to the generated function names:

<pre>
Node.createShortcuts('_');

// These are now the same
_p()
Node.p())

// These are now the same
_fragment()
Node.fragment()
</pre>


Performance
-----------

Designed to be light and simple. On a modern browser, it allows an abstraction of pure javascript DOM manipulation with very little additional overhead. The minified code is just under 2 kb.


Known Issues
------------

- No support for older browsers. If you require such support, <a href="http://jquery.com" target="_blank">jQuery</a> is probably your best bet.
- Using the optional shortcuts clutters the window namespace with a function for each valid html DOM element. This is by design, but as a result the "var" tag cannot be used as a shortcut without adding a prefix.