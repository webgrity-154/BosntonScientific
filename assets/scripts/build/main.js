

// start Jquery



/*!

 * jQuery JavaScript Library v3.7.1

 * https://jquery.com/

 *

 * Copyright OpenJS Foundation and other contributors

 * Released under the MIT license

 * https://jquery.org/license

 *

 * Date: 2023-08-28T13:37Z

 */

(function (global, factory) {



	"use strict";



	if (typeof module === "object" && typeof module.exports === "object") {



		// For CommonJS and CommonJS-like environments where a proper `window`

		// is present, execute the factory and get jQuery.

		// For environments that do not have a `window` with a `document`

		// (such as Node.js), expose a factory as module.exports.

		// This accentuates the need for the creation of a real `window`.

		// e.g. var jQuery = require("jquery")(window);

		// See ticket trac-14549 for more info.

		module.exports = global.document ?

			factory(global, true) :

			function (w) {

				if (!w.document) {

					throw new Error("jQuery requires a window with a document");

				}

				return factory(w);

			};

	} else {

		factory(global);

	}



	// Pass this if window is not defined yet

})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {



	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1

	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode

	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common

	// enough that all such attempts are guarded in a try block.

	"use strict";



	var arr = [];



	var getProto = Object.getPrototypeOf;



	var slice = arr.slice;



	var flat = arr.flat ? function (array) {

		return arr.flat.call(array);

	} : function (array) {

		return arr.concat.apply([], array);

	};





	var push = arr.push;



	var indexOf = arr.indexOf;



	var class2type = {};



	var toString = class2type.toString;



	var hasOwn = class2type.hasOwnProperty;



	var fnToString = hasOwn.toString;



	var ObjectFunctionString = fnToString.call(Object);



	var support = {};



	var isFunction = function isFunction(obj) {



		// Support: Chrome <=57, Firefox <=52

		// In some browsers, typeof returns "function" for HTML <object> elements

		// (i.e., `typeof document.createElement( "object" ) === "function"`).

		// We don't want to classify *any* DOM node as a function.

		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5

		// Plus for old WebKit, typeof returns "function" for HTML collections

		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)

		return typeof obj === "function" && typeof obj.nodeType !== "number" &&

			typeof obj.item !== "function";

	};





	var isWindow = function isWindow(obj) {

		return obj != null && obj === obj.window;

	};





	var document = window.document;







	var preservedScriptAttributes = {

		type: true,

		src: true,

		nonce: true,

		noModule: true

	};



	function DOMEval(code, node, doc) {

		doc = doc || document;



		var i, val,

			script = doc.createElement("script");



		script.text = code;

		if (node) {

			for (i in preservedScriptAttributes) {



				// Support: Firefox 64+, Edge 18+

				// Some browsers don't support the "nonce" property on scripts.

				// On the other hand, just using `getAttribute` is not enough as

				// the `nonce` attribute is reset to an empty string whenever it

				// becomes browsing-context connected.

				// See https://github.com/whatwg/html/issues/2369

				// See https://html.spec.whatwg.org/#nonce-attributes

				// The `node.getAttribute` check was added for the sake of

				// `jQuery.globalEval` so that it can fake a nonce-containing node

				// via an object.

				val = node[i] || node.getAttribute && node.getAttribute(i);

				if (val) {

					script.setAttribute(i, val);

				}

			}

		}

		doc.head.appendChild(script).parentNode.removeChild(script);

	}





	function toType(obj) {

		if (obj == null) {

			return obj + "";

		}



		// Support: Android <=2.3 only (functionish RegExp)

		return typeof obj === "object" || typeof obj === "function" ?

			class2type[toString.call(obj)] || "object" :

			typeof obj;

	}

	/* global Symbol */

	// Defining this global in .eslintrc.json would create a danger of using the global

	// unguarded in another place, it seems safer to define global only for this module







	var version = "3.7.1",



		rhtmlSuffix = /HTML$/i,



		// Define a local copy of jQuery

		jQuery = function (selector, context) {



			// The jQuery object is actually just the init constructor 'enhanced'

			// Need init if jQuery is called (just allow error to be thrown if not included)

			return new jQuery.fn.init(selector, context);

		};



	jQuery.fn = jQuery.prototype = {



		// The current version of jQuery being used

		jquery: version,



		constructor: jQuery,



		// The default length of a jQuery object is 0

		length: 0,



		toArray: function () {

			return slice.call(this);

		},



		// Get the Nth element in the matched element set OR

		// Get the whole matched element set as a clean array

		get: function (num) {



			// Return all the elements in a clean array

			if (num == null) {

				return slice.call(this);

			}



			// Return just the one element from the set

			return num < 0 ? this[num + this.length] : this[num];

		},



		// Take an array of elements and push it onto the stack

		// (returning the new matched element set)

		pushStack: function (elems) {



			// Build a new jQuery matched element set

			var ret = jQuery.merge(this.constructor(), elems);



			// Add the old object onto the stack (as a reference)

			ret.prevObject = this;



			// Return the newly-formed element set

			return ret;

		},



		// Execute a callback for every element in the matched set.

		each: function (callback) {

			return jQuery.each(this, callback);

		},



		map: function (callback) {

			return this.pushStack(jQuery.map(this, function (elem, i) {

				return callback.call(elem, i, elem);

			}));

		},



		slice: function () {

			return this.pushStack(slice.apply(this, arguments));

		},



		first: function () {

			return this.eq(0);

		},



		last: function () {

			return this.eq(-1);

		},



		even: function () {

			return this.pushStack(jQuery.grep(this, function (_elem, i) {

				return (i + 1) % 2;

			}));

		},



		odd: function () {

			return this.pushStack(jQuery.grep(this, function (_elem, i) {

				return i % 2;

			}));

		},



		eq: function (i) {

			var len = this.length,

				j = +i + (i < 0 ? len : 0);

			return this.pushStack(j >= 0 && j < len ? [this[j]] : []);

		},



		end: function () {

			return this.prevObject || this.constructor();

		},



		// For internal use only.

		// Behaves like an Array's method, not like a jQuery method.

		push: push,

		sort: arr.sort,

		splice: arr.splice

	};



	jQuery.extend = jQuery.fn.extend = function () {

		var options, name, src, copy, copyIsArray, clone,

			target = arguments[0] || {},

			i = 1,

			length = arguments.length,

			deep = false;



		// Handle a deep copy situation

		if (typeof target === "boolean") {

			deep = target;



			// Skip the boolean and the target

			target = arguments[i] || {};

			i++;

		}



		// Handle case when target is a string or something (possible in deep copy)

		if (typeof target !== "object" && !isFunction(target)) {

			target = {};

		}



		// Extend jQuery itself if only one argument is passed

		if (i === length) {

			target = this;

			i--;

		}



		for (; i < length; i++) {



			// Only deal with non-null/undefined values

			if ((options = arguments[i]) != null) {



				// Extend the base object

				for (name in options) {

					copy = options[name];



					// Prevent Object.prototype pollution

					// Prevent never-ending loop

					if (name === "__proto__" || target === copy) {

						continue;

					}



					// Recurse if we're merging plain objects or arrays

					if (deep && copy && (jQuery.isPlainObject(copy) ||

						(copyIsArray = Array.isArray(copy)))) {

						src = target[name];



						// Ensure proper type for the source value

						if (copyIsArray && !Array.isArray(src)) {

							clone = [];

						} else if (!copyIsArray && !jQuery.isPlainObject(src)) {

							clone = {};

						} else {

							clone = src;

						}

						copyIsArray = false;



						// Never move original objects, clone them

						target[name] = jQuery.extend(deep, clone, copy);



						// Don't bring in undefined values

					} else if (copy !== undefined) {

						target[name] = copy;

					}

				}

			}

		}



		// Return the modified object

		return target;

	};



	jQuery.extend({



		// Unique for each copy of jQuery on the page

		expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),



		// Assume jQuery is ready without the ready module

		isReady: true,



		error: function (msg) {

			throw new Error(msg);

		},



		noop: function () { },



		isPlainObject: function (obj) {

			var proto, Ctor;



			// Detect obvious negatives

			// Use toString instead of jQuery.type to catch host objects

			if (!obj || toString.call(obj) !== "[object Object]") {

				return false;

			}



			proto = getProto(obj);



			// Objects with no prototype (e.g., `Object.create( null )`) are plain

			if (!proto) {

				return true;

			}



			// Objects with prototype are plain iff they were constructed by a global Object function

			Ctor = hasOwn.call(proto, "constructor") && proto.constructor;

			return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;

		},



		isEmptyObject: function (obj) {

			var name;



			for (name in obj) {

				return false;

			}

			return true;

		},



		// Evaluates a script in a provided context; falls back to the global one

		// if not specified.

		globalEval: function (code, options, doc) {

			DOMEval(code, { nonce: options && options.nonce }, doc);

		},



		each: function (obj, callback) {

			var length, i = 0;



			if (isArrayLike(obj)) {

				length = obj.length;

				for (; i < length; i++) {

					if (callback.call(obj[i], i, obj[i]) === false) {

						break;

					}

				}

			} else {

				for (i in obj) {

					if (callback.call(obj[i], i, obj[i]) === false) {

						break;

					}

				}

			}



			return obj;

		},





		// Retrieve the text value of an array of DOM nodes

		text: function (elem) {

			var node,

				ret = "",

				i = 0,

				nodeType = elem.nodeType;



			if (!nodeType) {



				// If no nodeType, this is expected to be an array

				while ((node = elem[i++])) {



					// Do not traverse comment nodes

					ret += jQuery.text(node);

				}

			}

			if (nodeType === 1 || nodeType === 11) {

				return elem.textContent;

			}

			if (nodeType === 9) {

				return elem.documentElement.textContent;

			}

			if (nodeType === 3 || nodeType === 4) {

				return elem.nodeValue;

			}



			// Do not include comment or processing instruction nodes



			return ret;

		},



		// results is for internal usage only

		makeArray: function (arr, results) {

			var ret = results || [];



			if (arr != null) {

				if (isArrayLike(Object(arr))) {

					jQuery.merge(ret,

						typeof arr === "string" ?

							[arr] : arr

					);

				} else {

					push.call(ret, arr);

				}

			}



			return ret;

		},



		inArray: function (elem, arr, i) {

			return arr == null ? -1 : indexOf.call(arr, elem, i);

		},



		isXMLDoc: function (elem) {

			var namespace = elem && elem.namespaceURI,

				docElem = elem && (elem.ownerDocument || elem).documentElement;



			// Assume HTML when documentElement doesn't yet exist, such as inside

			// document fragments.

			return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");

		},



		// Support: Android <=4.0 only, PhantomJS 1 only

		// push.apply(_, arraylike) throws on ancient WebKit

		merge: function (first, second) {

			var len = +second.length,

				j = 0,

				i = first.length;



			for (; j < len; j++) {

				first[i++] = second[j];

			}



			first.length = i;



			return first;

		},



		grep: function (elems, callback, invert) {

			var callbackInverse,

				matches = [],

				i = 0,

				length = elems.length,

				callbackExpect = !invert;



			// Go through the array, only saving the items

			// that pass the validator function

			for (; i < length; i++) {

				callbackInverse = !callback(elems[i], i);

				if (callbackInverse !== callbackExpect) {

					matches.push(elems[i]);

				}

			}



			return matches;

		},



		// arg is for internal usage only

		map: function (elems, callback, arg) {

			var length, value,

				i = 0,

				ret = [];



			// Go through the array, translating each of the items to their new values

			if (isArrayLike(elems)) {

				length = elems.length;

				for (; i < length; i++) {

					value = callback(elems[i], i, arg);



					if (value != null) {

						ret.push(value);

					}

				}



				// Go through every key on the object,

			} else {

				for (i in elems) {

					value = callback(elems[i], i, arg);



					if (value != null) {

						ret.push(value);

					}

				}

			}



			// Flatten any nested arrays

			return flat(ret);

		},



		// A global GUID counter for objects

		guid: 1,



		// jQuery.support is not used in Core but other projects attach their

		// properties to it so it needs to exist.

		support: support

	});



	if (typeof Symbol === "function") {

		jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];

	}



	// Populate the class2type map

	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),

		function (_i, name) {

			class2type["[object " + name + "]"] = name.toLowerCase();

		});



	function isArrayLike(obj) {



		// Support: real iOS 8.2 only (not reproducible in simulator)

		// `in` check used to prevent JIT error (gh-2145)

		// hasOwn isn't used here due to false negatives

		// regarding Nodelist length in IE

		var length = !!obj && "length" in obj && obj.length,

			type = toType(obj);



		if (isFunction(obj) || isWindow(obj)) {

			return false;

		}



		return type === "array" || length === 0 ||

			typeof length === "number" && length > 0 && (length - 1) in obj;

	}





	function nodeName(elem, name) {



		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();



	}

	var pop = arr.pop;





	var sort = arr.sort;





	var splice = arr.splice;





	var whitespace = "[\\x20\\t\\r\\n\\f]";





	var rtrimCSS = new RegExp(

		"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",

		"g"

	);









	// Note: an element does not contain itself

	jQuery.contains = function (a, b) {

		var bup = b && b.parentNode;



		return a === bup || !!(bup && bup.nodeType === 1 && (



			// Support: IE 9 - 11+

			// IE doesn't have `contains` on SVG.

			a.contains ?

				a.contains(bup) :

				a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16

		));

	};









	// CSS string/identifier serialization

	// https://drafts.csswg.org/cssom/#common-serializing-idioms

	var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;



	function fcssescape(ch, asCodePoint) {

		if (asCodePoint) {



			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER

			if (ch === "\0") {

				return "\uFFFD";

			}



			// Control characters and (dependent upon position) numbers get escaped as code points

			return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";

		}



		// Other potentially-special ASCII characters get backslash-escaped

		return "\\" + ch;

	}



	jQuery.escapeSelector = function (sel) {

		return (sel + "").replace(rcssescape, fcssescape);

	};









	var preferredDoc = document,

		pushNative = push;



	(function () {



		var i,

			Expr,

			outermostContext,

			sortInput,

			hasDuplicate,

			push = pushNative,



			// Local document vars

			document,

			documentElement,

			documentIsHTML,

			rbuggyQSA,

			matches,



			// Instance-specific data

			expando = jQuery.expando,

			dirruns = 0,

			done = 0,

			classCache = createCache(),

			tokenCache = createCache(),

			compilerCache = createCache(),

			nonnativeSelectorCache = createCache(),

			sortOrder = function (a, b) {

				if (a === b) {

					hasDuplicate = true;

				}

				return 0;

			},



			booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" +

				"loop|multiple|open|readonly|required|scoped",



			// Regular expressions



			// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram

			identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +

				"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",



			// Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors

			attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +



				// Operator (capture 2)

				"*([*^$|!~]?=)" + whitespace +



				// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"

				"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +

				whitespace + "*\\]",



			pseudos = ":(" + identifier + ")(?:\\((" +



				// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:

				// 1. quoted (capture 3; capture 4 or capture 5)

				"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +



				// 2. simple (capture 6)

				"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +



				// 3. anything else (capture 2)

				".*" +

				")\\)|)",



			// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter

			rwhitespace = new RegExp(whitespace + "+", "g"),



			rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),

			rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" +

				whitespace + "*"),

			rdescend = new RegExp(whitespace + "|>"),



			rpseudo = new RegExp(pseudos),

			ridentifier = new RegExp("^" + identifier + "$"),



			matchExpr = {

				ID: new RegExp("^#(" + identifier + ")"),

				CLASS: new RegExp("^\\.(" + identifier + ")"),

				TAG: new RegExp("^(" + identifier + "|[*])"),

				ATTR: new RegExp("^" + attributes),

				PSEUDO: new RegExp("^" + pseudos),

				CHILD: new RegExp(

					"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +

					whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +

					whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),

				bool: new RegExp("^(?:" + booleans + ")$", "i"),



				// For use in libraries implementing .is()

				// We use this for POS matching in `select`

				needsContext: new RegExp("^" + whitespace +

					"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +

					"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")

			},



			rinputs = /^(?:input|select|textarea|button)$/i,

			rheader = /^h\d$/i,



			// Easily-parseable/retrievable ID or TAG or CLASS selectors

			rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,



			rsibling = /[+~]/,



			// CSS escapes

			// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters

			runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace +

				"?|\\\\([^\\r\\n\\f])", "g"),

			funescape = function (escape, nonHex) {

				var high = "0x" + escape.slice(1) - 0x10000;



				if (nonHex) {



					// Strip the backslash prefix from a non-hex escape sequence

					return nonHex;

				}



				// Replace a hexadecimal escape sequence with the encoded Unicode code point

				// Support: IE <=11+

				// For values outside the Basic Multilingual Plane (BMP), manually construct a

				// surrogate pair

				return high < 0 ?

					String.fromCharCode(high + 0x10000) :

					String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);

			},



			// Used for iframes; see `setDocument`.

			// Support: IE 9 - 11+, Edge 12 - 18+

			// Removing the function wrapper causes a "Permission Denied"

			// error in IE/Edge.

			unloadHandler = function () {

				setDocument();

			},



			inDisabledFieldset = addCombinator(

				function (elem) {

					return elem.disabled === true && nodeName(elem, "fieldset");

				},

				{ dir: "parentNode", next: "legend" }

			);



		// Support: IE <=9 only

		// Accessing document.activeElement can throw unexpectedly

		// https://bugs.jquery.com/ticket/13393

		function safeActiveElement() {

			try {

				return document.activeElement;

			} catch (err) { }

		}



		// Optimize for push.apply( _, NodeList )

		try {

			push.apply(

				(arr = slice.call(preferredDoc.childNodes)),

				preferredDoc.childNodes

			);



			// Support: Android <=4.0

			// Detect silently failing push.apply

			// eslint-disable-next-line no-unused-expressions

			arr[preferredDoc.childNodes.length].nodeType;

		} catch (e) {

			push = {

				apply: function (target, els) {

					pushNative.apply(target, slice.call(els));

				},

				call: function (target) {

					pushNative.apply(target, slice.call(arguments, 1));

				}

			};

		}



		function find(selector, context, results, seed) {

			var m, i, elem, nid, match, groups, newSelector,

				newContext = context && context.ownerDocument,



				// nodeType defaults to 9, since context defaults to document

				nodeType = context ? context.nodeType : 9;



			results = results || [];



			// Return early from calls with invalid selector or context

			if (typeof selector !== "string" || !selector ||

				nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {



				return results;

			}



			// Try to shortcut find operations (as opposed to filters) in HTML documents

			if (!seed) {

				setDocument(context);

				context = context || document;



				if (documentIsHTML) {



					// If the selector is sufficiently simple, try using a "get*By*" DOM method

					// (excepting DocumentFragment context, where the methods don't exist)

					if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {



						// ID selector

						if ((m = match[1])) {



							// Document context

							if (nodeType === 9) {

								if ((elem = context.getElementById(m))) {



									// Support: IE 9 only

									// getElementById can match elements by name instead of ID

									if (elem.id === m) {

										push.call(results, elem);

										return results;

									}

								} else {

									return results;

								}



								// Element context

							} else {



								// Support: IE 9 only

								// getElementById can match elements by name instead of ID

								if (newContext && (elem = newContext.getElementById(m)) &&

									find.contains(context, elem) &&

									elem.id === m) {



									push.call(results, elem);

									return results;

								}

							}



							// Type selector

						} else if (match[2]) {

							push.apply(results, context.getElementsByTagName(selector));

							return results;



							// Class selector

						} else if ((m = match[3]) && context.getElementsByClassName) {

							push.apply(results, context.getElementsByClassName(m));

							return results;

						}

					}



					// Take advantage of querySelectorAll

					if (!nonnativeSelectorCache[selector + " "] &&

						(!rbuggyQSA || !rbuggyQSA.test(selector))) {



						newSelector = selector;

						newContext = context;



						// qSA considers elements outside a scoping root when evaluating child or

						// descendant combinators, which is not what we want.

						// In such cases, we work around the behavior by prefixing every selector in the

						// list with an ID selector referencing the scope context.

						// The technique has to be used as well when a leading combinator is used

						// as such selectors are not recognized by querySelectorAll.

						// Thanks to Andrew Dupont for this technique.

						if (nodeType === 1 &&

							(rdescend.test(selector) || rleadingCombinator.test(selector))) {



							// Expand context for sibling selectors

							newContext = rsibling.test(selector) && testContext(context.parentNode) ||

								context;



							// We can use :scope instead of the ID hack if the browser

							// supports it & if we're not changing the context.

							// Support: IE 11+, Edge 17 - 18+

							// IE/Edge sometimes throw a "Permission denied" error when

							// strict-comparing two documents; shallow comparisons work.

							// eslint-disable-next-line eqeqeq

							if (newContext != context || !support.scope) {



								// Capture the context ID, setting it first if necessary

								if ((nid = context.getAttribute("id"))) {

									nid = jQuery.escapeSelector(nid);

								} else {

									context.setAttribute("id", (nid = expando));

								}

							}



							// Prefix every selector in the list

							groups = tokenize(selector);

							i = groups.length;

							while (i--) {

								groups[i] = (nid ? "#" + nid : ":scope") + " " +

									toSelector(groups[i]);

							}

							newSelector = groups.join(",");

						}



						try {

							push.apply(results,

								newContext.querySelectorAll(newSelector)

							);

							return results;

						} catch (qsaError) {

							nonnativeSelectorCache(selector, true);

						} finally {

							if (nid === expando) {

								context.removeAttribute("id");

							}

						}

					}

				}

			}



			// All others

			return select(selector.replace(rtrimCSS, "$1"), context, results, seed);

		}



		/**

		 * Create key-value caches of limited size

		 * @returns {function(string, object)} Returns the Object data after storing it on itself with

		 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)

		 *	deleting the oldest entry

		 */

		function createCache() {

			var keys = [];



			function cache(key, value) {



				// Use (key + " ") to avoid collision with native prototype properties

				// (see https://github.com/jquery/sizzle/issues/157)

				if (keys.push(key + " ") > Expr.cacheLength) {



					// Only keep the most recent entries

					delete cache[keys.shift()];

				}

				return (cache[key + " "] = value);

			}

			return cache;

		}



		/**

		 * Mark a function for special use by jQuery selector module

		 * @param {Function} fn The function to mark

		 */

		function markFunction(fn) {

			fn[expando] = true;

			return fn;

		}



		/**

		 * Support testing using an element

		 * @param {Function} fn Passed the created element and returns a boolean result

		 */

		function assert(fn) {

			var el = document.createElement("fieldset");



			try {

				return !!fn(el);

			} catch (e) {

				return false;

			} finally {



				// Remove from its parent by default

				if (el.parentNode) {

					el.parentNode.removeChild(el);

				}



				// release memory in IE

				el = null;

			}

		}



		/**

		 * Returns a function to use in pseudos for input types

		 * @param {String} type

		 */

		function createInputPseudo(type) {

			return function (elem) {

				return nodeName(elem, "input") && elem.type === type;

			};

		}



		/**

		 * Returns a function to use in pseudos for buttons

		 * @param {String} type

		 */

		function createButtonPseudo(type) {

			return function (elem) {

				return (nodeName(elem, "input") || nodeName(elem, "button")) &&

					elem.type === type;

			};

		}



		/**

		 * Returns a function to use in pseudos for :enabled/:disabled

		 * @param {Boolean} disabled true for :disabled; false for :enabled

		 */

		function createDisabledPseudo(disabled) {



			// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable

			return function (elem) {



				// Only certain elements can match :enabled or :disabled

				// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled

				// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled

				if ("form" in elem) {



					// Check for inherited disabledness on relevant non-disabled elements:

					// * listed form-associated elements in a disabled fieldset

					//   https://html.spec.whatwg.org/multipage/forms.html#category-listed

					//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled

					// * option elements in a disabled optgroup

					//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled

					// All such elements have a "form" property.

					if (elem.parentNode && elem.disabled === false) {



						// Option elements defer to a parent optgroup if present

						if ("label" in elem) {

							if ("label" in elem.parentNode) {

								return elem.parentNode.disabled === disabled;

							} else {

								return elem.disabled === disabled;

							}

						}



						// Support: IE 6 - 11+

						// Use the isDisabled shortcut property to check for disabled fieldset ancestors

						return elem.isDisabled === disabled ||



							// Where there is no isDisabled, check manually

							elem.isDisabled !== !disabled &&

							inDisabledFieldset(elem) === disabled;

					}



					return elem.disabled === disabled;



					// Try to winnow out elements that can't be disabled before trusting the disabled property.

					// Some victims get caught in our net (label, legend, menu, track), but it shouldn't

					// even exist on them, let alone have a boolean value.

				} else if ("label" in elem) {

					return elem.disabled === disabled;

				}



				// Remaining elements are neither :enabled nor :disabled

				return false;

			};

		}



		/**

		 * Returns a function to use in pseudos for positionals

		 * @param {Function} fn

		 */

		function createPositionalPseudo(fn) {

			return markFunction(function (argument) {

				argument = +argument;

				return markFunction(function (seed, matches) {

					var j,

						matchIndexes = fn([], seed.length, argument),

						i = matchIndexes.length;



					// Match elements found at the specified indexes

					while (i--) {

						if (seed[(j = matchIndexes[i])]) {

							seed[j] = !(matches[j] = seed[j]);

						}

					}

				});

			});

		}



		/**

		 * Checks a node for validity as a jQuery selector context

		 * @param {Element|Object=} context

		 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value

		 */

		function testContext(context) {

			return context && typeof context.getElementsByTagName !== "undefined" && context;

		}



		/**

		 * Sets document-related variables once based on the current document

		 * @param {Element|Object} [node] An element or document object to use to set the document

		 * @returns {Object} Returns the current document

		 */

		function setDocument(node) {

			var subWindow,

				doc = node ? node.ownerDocument || node : preferredDoc;



			// Return early if doc is invalid or already selected

			// Support: IE 11+, Edge 17 - 18+

			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing

			// two documents; shallow comparisons work.

			// eslint-disable-next-line eqeqeq

			if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {

				return document;

			}



			// Update global variables

			document = doc;

			documentElement = document.documentElement;

			documentIsHTML = !jQuery.isXMLDoc(document);



			// Support: iOS 7 only, IE 9 - 11+

			// Older browsers didn't support unprefixed `matches`.

			matches = documentElement.matches ||

				documentElement.webkitMatchesSelector ||

				documentElement.msMatchesSelector;



			// Support: IE 9 - 11+, Edge 12 - 18+

			// Accessing iframe documents after unload throws "permission denied" errors

			// (see trac-13936).

			// Limit the fix to IE & Edge Legacy; despite Edge 15+ implementing `matches`,

			// all IE 9+ and Edge Legacy versions implement `msMatchesSelector` as well.

			if (documentElement.msMatchesSelector &&



				// Support: IE 11+, Edge 17 - 18+

				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing

				// two documents; shallow comparisons work.

				// eslint-disable-next-line eqeqeq

				preferredDoc != document &&

				(subWindow = document.defaultView) && subWindow.top !== subWindow) {



				// Support: IE 9 - 11+, Edge 12 - 18+

				subWindow.addEventListener("unload", unloadHandler);

			}



			// Support: IE <10

			// Check if getElementById returns elements by name

			// The broken getElementById methods don't pick up programmatically-set names,

			// so use a roundabout getElementsByName test

			support.getById = assert(function (el) {

				documentElement.appendChild(el).id = jQuery.expando;

				return !document.getElementsByName ||

					!document.getElementsByName(jQuery.expando).length;

			});



			// Support: IE 9 only

			// Check to see if it's possible to do matchesSelector

			// on a disconnected node.

			support.disconnectedMatch = assert(function (el) {

				return matches.call(el, "*");

			});



			// Support: IE 9 - 11+, Edge 12 - 18+

			// IE/Edge don't support the :scope pseudo-class.

			support.scope = assert(function () {

				return document.querySelectorAll(":scope");

			});



			// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only

			// Make sure the `:has()` argument is parsed unforgivingly.

			// We include `*` in the test to detect buggy implementations that are

			// _selectively_ forgiving (specifically when the list includes at least

			// one valid selector).

			// Note that we treat complete lack of support for `:has()` as if it were

			// spec-compliant support, which is fine because use of `:has()` in such

			// environments will fail in the qSA path and fall back to jQuery traversal

			// anyway.

			support.cssHas = assert(function () {

				try {

					document.querySelector(":has(*,:jqfake)");

					return false;

				} catch (e) {

					return true;

				}

			});



			// ID filter and find

			if (support.getById) {

				Expr.filter.ID = function (id) {

					var attrId = id.replace(runescape, funescape);

					return function (elem) {

						return elem.getAttribute("id") === attrId;

					};

				};

				Expr.find.ID = function (id, context) {

					if (typeof context.getElementById !== "undefined" && documentIsHTML) {

						var elem = context.getElementById(id);

						return elem ? [elem] : [];

					}

				};

			} else {

				Expr.filter.ID = function (id) {

					var attrId = id.replace(runescape, funescape);

					return function (elem) {

						var node = typeof elem.getAttributeNode !== "undefined" &&

							elem.getAttributeNode("id");

						return node && node.value === attrId;

					};

				};



				// Support: IE 6 - 7 only

				// getElementById is not reliable as a find shortcut

				Expr.find.ID = function (id, context) {

					if (typeof context.getElementById !== "undefined" && documentIsHTML) {

						var node, i, elems,

							elem = context.getElementById(id);



						if (elem) {



							// Verify the id attribute

							node = elem.getAttributeNode("id");

							if (node && node.value === id) {

								return [elem];

							}



							// Fall back on getElementsByName

							elems = context.getElementsByName(id);

							i = 0;

							while ((elem = elems[i++])) {

								node = elem.getAttributeNode("id");

								if (node && node.value === id) {

									return [elem];

								}

							}

						}



						return [];

					}

				};

			}



			// Tag

			Expr.find.TAG = function (tag, context) {

				if (typeof context.getElementsByTagName !== "undefined") {

					return context.getElementsByTagName(tag);



					// DocumentFragment nodes don't have gEBTN

				} else {

					return context.querySelectorAll(tag);

				}

			};



			// Class

			Expr.find.CLASS = function (className, context) {

				if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {

					return context.getElementsByClassName(className);

				}

			};



			/* QSA/matchesSelector

			---------------------------------------------------------------------- */



			// QSA and matchesSelector support



			rbuggyQSA = [];



			// Build QSA regex

			// Regex strategy adopted from Diego Perini

			assert(function (el) {



				var input;



				documentElement.appendChild(el).innerHTML =

					"<a id='" + expando + "' href='' disabled='disabled'></a>" +

					"<select id='" + expando + "-\r\\' disabled='disabled'>" +

					"<option selected=''></option></select>";



				// Support: iOS <=7 - 8 only

				// Boolean attributes and "value" are not treated correctly in some XML documents

				if (!el.querySelectorAll("[selected]").length) {

					rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");

				}



				// Support: iOS <=7 - 8 only

				if (!el.querySelectorAll("[id~=" + expando + "-]").length) {

					rbuggyQSA.push("~=");

				}



				// Support: iOS 8 only

				// https://bugs.webkit.org/show_bug.cgi?id=136851

				// In-page `selector#id sibling-combinator selector` fails

				if (!el.querySelectorAll("a#" + expando + "+*").length) {

					rbuggyQSA.push(".#.+[+~]");

				}



				// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+

				// In some of the document kinds, these selectors wouldn't work natively.

				// This is probably OK but for backwards compatibility we want to maintain

				// handling them through jQuery traversal in jQuery 3.x.

				if (!el.querySelectorAll(":checked").length) {

					rbuggyQSA.push(":checked");

				}



				// Support: Windows 8 Native Apps

				// The type and name attributes are restricted during .innerHTML assignment

				input = document.createElement("input");

				input.setAttribute("type", "hidden");

				el.appendChild(input).setAttribute("name", "D");



				// Support: IE 9 - 11+

				// IE's :disabled selector does not pick up the children of disabled fieldsets

				// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+

				// In some of the document kinds, these selectors wouldn't work natively.

				// This is probably OK but for backwards compatibility we want to maintain

				// handling them through jQuery traversal in jQuery 3.x.

				documentElement.appendChild(el).disabled = true;

				if (el.querySelectorAll(":disabled").length !== 2) {

					rbuggyQSA.push(":enabled", ":disabled");

				}



				// Support: IE 11+, Edge 15 - 18+

				// IE 11/Edge don't find elements on a `[name='']` query in some cases.

				// Adding a temporary attribute to the document before the selection works

				// around the issue.

				// Interestingly, IE 10 & older don't seem to have the issue.

				input = document.createElement("input");

				input.setAttribute("name", "");

				el.appendChild(input);

				if (!el.querySelectorAll("[name='']").length) {

					rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" +

						whitespace + "*(?:''|\"\")");

				}

			});



			if (!support.cssHas) {



				// Support: Chrome 105 - 110+, Safari 15.4 - 16.3+

				// Our regular `try-catch` mechanism fails to detect natively-unsupported

				// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)

				// in browsers that parse the `:has()` argument as a forgiving selector list.

				// https://drafts.csswg.org/selectors/#relational now requires the argument

				// to be parsed unforgivingly, but browsers have not yet fully adjusted.

				rbuggyQSA.push(":has");

			}



			rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));



			/* Sorting

			---------------------------------------------------------------------- */



			// Document order sorting

			sortOrder = function (a, b) {



				// Flag for duplicate removal

				if (a === b) {

					hasDuplicate = true;

					return 0;

				}



				// Sort on method existence if only one input has compareDocumentPosition

				var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

				if (compare) {

					return compare;

				}



				// Calculate position if both inputs belong to the same document

				// Support: IE 11+, Edge 17 - 18+

				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing

				// two documents; shallow comparisons work.

				// eslint-disable-next-line eqeqeq

				compare = (a.ownerDocument || a) == (b.ownerDocument || b) ?

					a.compareDocumentPosition(b) :



					// Otherwise we know they are disconnected

					1;



				// Disconnected nodes

				if (compare & 1 ||

					(!support.sortDetached && b.compareDocumentPosition(a) === compare)) {



					// Choose the first element that is related to our preferred document

					// Support: IE 11+, Edge 17 - 18+

					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing

					// two documents; shallow comparisons work.

					// eslint-disable-next-line eqeqeq

					if (a === document || a.ownerDocument == preferredDoc &&

						find.contains(preferredDoc, a)) {

						return -1;

					}



					// Support: IE 11+, Edge 17 - 18+

					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing

					// two documents; shallow comparisons work.

					// eslint-disable-next-line eqeqeq

					if (b === document || b.ownerDocument == preferredDoc &&

						find.contains(preferredDoc, b)) {

						return 1;

					}



					// Maintain original order

					return sortInput ?

						(indexOf.call(sortInput, a) - indexOf.call(sortInput, b)) :

						0;

				}



				return compare & 4 ? -1 : 1;

			};



			return document;

		}



		find.matches = function (expr, elements) {

			return find(expr, null, null, elements);

		};



		find.matchesSelector = function (elem, expr) {

			setDocument(elem);



			if (documentIsHTML &&

				!nonnativeSelectorCache[expr + " "] &&

				(!rbuggyQSA || !rbuggyQSA.test(expr))) {



				try {

					var ret = matches.call(elem, expr);



					// IE 9's matchesSelector returns false on disconnected nodes

					if (ret || support.disconnectedMatch ||



						// As well, disconnected nodes are said to be in a document

						// fragment in IE 9

						elem.document && elem.document.nodeType !== 11) {

						return ret;

					}

				} catch (e) {

					nonnativeSelectorCache(expr, true);

				}

			}



			return find(expr, document, null, [elem]).length > 0;

		};



		find.contains = function (context, elem) {



			// Set document vars if needed

			// Support: IE 11+, Edge 17 - 18+

			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing

			// two documents; shallow comparisons work.

			// eslint-disable-next-line eqeqeq

			if ((context.ownerDocument || context) != document) {

				setDocument(context);

			}

			return jQuery.contains(context, elem);

		};





		find.attr = function (elem, name) {



			// Set document vars if needed

			// Support: IE 11+, Edge 17 - 18+

			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing

			// two documents; shallow comparisons work.

			// eslint-disable-next-line eqeqeq

			if ((elem.ownerDocument || elem) != document) {

				setDocument(elem);

			}



			var fn = Expr.attrHandle[name.toLowerCase()],



				// Don't get fooled by Object.prototype properties (see trac-13807)

				val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ?

					fn(elem, name, !documentIsHTML) :

					undefined;



			if (val !== undefined) {

				return val;

			}



			return elem.getAttribute(name);

		};



		find.error = function (msg) {

			throw new Error("Syntax error, unrecognized expression: " + msg);

		};



		/**

		 * Document sorting and removing duplicates

		 * @param {ArrayLike} results

		 */

		jQuery.uniqueSort = function (results) {

			var elem,

				duplicates = [],

				j = 0,

				i = 0;



			// Unless we *know* we can detect duplicates, assume their presence

			//

			// Support: Android <=4.0+

			// Testing for detecting duplicates is unpredictable so instead assume we can't

			// depend on duplicate detection in all browsers without a stable sort.

			hasDuplicate = !support.sortStable;

			sortInput = !support.sortStable && slice.call(results, 0);

			sort.call(results, sortOrder);



			if (hasDuplicate) {

				while ((elem = results[i++])) {

					if (elem === results[i]) {

						j = duplicates.push(i);

					}

				}

				while (j--) {

					splice.call(results, duplicates[j], 1);

				}

			}



			// Clear input after sorting to release objects

			// See https://github.com/jquery/sizzle/pull/225

			sortInput = null;



			return results;

		};



		jQuery.fn.uniqueSort = function () {

			return this.pushStack(jQuery.uniqueSort(slice.apply(this)));

		};



		Expr = jQuery.expr = {



			// Can be adjusted by the user

			cacheLength: 50,



			createPseudo: markFunction,



			match: matchExpr,



			attrHandle: {},



			find: {},



			relative: {

				">": { dir: "parentNode", first: true },

				" ": { dir: "parentNode" },

				"+": { dir: "previousSibling", first: true },

				"~": { dir: "previousSibling" }

			},



			preFilter: {

				ATTR: function (match) {

					match[1] = match[1].replace(runescape, funescape);



					// Move the given value to match[3] whether quoted or unquoted

					match[3] = (match[3] || match[4] || match[5] || "")

						.replace(runescape, funescape);



					if (match[2] === "~=") {

						match[3] = " " + match[3] + " ";

					}



					return match.slice(0, 4);

				},



				CHILD: function (match) {



					/* matches from matchExpr["CHILD"]

						1 type (only|nth|...)

						2 what (child|of-type)

						3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)

						4 xn-component of xn+y argument ([+-]?\d*n|)

						5 sign of xn-component

						6 x of xn-component

						7 sign of y-component

						8 y of y-component

					*/

					match[1] = match[1].toLowerCase();



					if (match[1].slice(0, 3) === "nth") {



						// nth-* requires argument

						if (!match[3]) {

							find.error(match[0]);

						}



						// numeric x and y parameters for Expr.filter.CHILD

						// remember that false/true cast respectively to 0/1

						match[4] = +(match[4] ?

							match[5] + (match[6] || 1) :

							2 * (match[3] === "even" || match[3] === "odd")

						);

						match[5] = +((match[7] + match[8]) || match[3] === "odd");



						// other types prohibit arguments

					} else if (match[3]) {

						find.error(match[0]);

					}



					return match;

				},



				PSEUDO: function (match) {

					var excess,

						unquoted = !match[6] && match[2];



					if (matchExpr.CHILD.test(match[0])) {

						return null;

					}



					// Accept quoted arguments as-is

					if (match[3]) {

						match[2] = match[4] || match[5] || "";



						// Strip excess characters from unquoted arguments

					} else if (unquoted && rpseudo.test(unquoted) &&



						// Get excess from tokenize (recursively)

						(excess = tokenize(unquoted, true)) &&



						// advance to the next closing parenthesis

						(excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {



						// excess is a negative index

						match[0] = match[0].slice(0, excess);

						match[2] = unquoted.slice(0, excess);

					}



					// Return only captures needed by the pseudo filter method (type and argument)

					return match.slice(0, 3);

				}

			},



			filter: {



				TAG: function (nodeNameSelector) {

					var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();

					return nodeNameSelector === "*" ?

						function () {

							return true;

						} :

						function (elem) {

							return nodeName(elem, expectedNodeName);

						};

				},



				CLASS: function (className) {

					var pattern = classCache[className + " "];



					return pattern ||

						(pattern = new RegExp("(^|" + whitespace + ")" + className +

							"(" + whitespace + "|$)")) &&

						classCache(className, function (elem) {

							return pattern.test(

								typeof elem.className === "string" && elem.className ||

								typeof elem.getAttribute !== "undefined" &&

								elem.getAttribute("class") ||

								""

							);

						});

				},



				ATTR: function (name, operator, check) {

					return function (elem) {

						var result = find.attr(elem, name);



						if (result == null) {

							return operator === "!=";

						}

						if (!operator) {

							return true;

						}



						result += "";



						if (operator === "=") {

							return result === check;

						}

						if (operator === "!=") {

							return result !== check;

						}

						if (operator === "^=") {

							return check && result.indexOf(check) === 0;

						}

						if (operator === "*=") {

							return check && result.indexOf(check) > -1;

						}

						if (operator === "$=") {

							return check && result.slice(-check.length) === check;

						}

						if (operator === "~=") {

							return (" " + result.replace(rwhitespace, " ") + " ")

								.indexOf(check) > -1;

						}

						if (operator === "|=") {

							return result === check || result.slice(0, check.length + 1) === check + "-";

						}



						return false;

					};

				},



				CHILD: function (type, what, _argument, first, last) {

					var simple = type.slice(0, 3) !== "nth",

						forward = type.slice(-4) !== "last",

						ofType = what === "of-type";



					return first === 1 && last === 0 ?



						// Shortcut for :nth-*(n)

						function (elem) {

							return !!elem.parentNode;

						} :



						function (elem, _context, xml) {

							var cache, outerCache, node, nodeIndex, start,

								dir = simple !== forward ? "nextSibling" : "previousSibling",

								parent = elem.parentNode,

								name = ofType && elem.nodeName.toLowerCase(),

								useCache = !xml && !ofType,

								diff = false;



							if (parent) {



								// :(first|last|only)-(child|of-type)

								if (simple) {

									while (dir) {

										node = elem;

										while ((node = node[dir])) {

											if (ofType ?

												nodeName(node, name) :

												node.nodeType === 1) {



												return false;

											}

										}



										// Reverse direction for :only-* (if we haven't yet done so)

										start = dir = type === "only" && !start && "nextSibling";

									}

									return true;

								}



								start = [forward ? parent.firstChild : parent.lastChild];



								// non-xml :nth-child(...) stores cache data on `parent`

								if (forward && useCache) {



									// Seek `elem` from a previously-cached index

									outerCache = parent[expando] || (parent[expando] = {});

									cache = outerCache[type] || [];

									nodeIndex = cache[0] === dirruns && cache[1];

									diff = nodeIndex && cache[2];

									node = nodeIndex && parent.childNodes[nodeIndex];



									while ((node = ++nodeIndex && node && node[dir] ||



										// Fallback to seeking `elem` from the start

										(diff = nodeIndex = 0) || start.pop())) {



										// When found, cache indexes on `parent` and break

										if (node.nodeType === 1 && ++diff && node === elem) {

											outerCache[type] = [dirruns, nodeIndex, diff];

											break;

										}

									}



								} else {



									// Use previously-cached element index if available

									if (useCache) {

										outerCache = elem[expando] || (elem[expando] = {});

										cache = outerCache[type] || [];

										nodeIndex = cache[0] === dirruns && cache[1];

										diff = nodeIndex;

									}



									// xml :nth-child(...)

									// or :nth-last-child(...) or :nth(-last)?-of-type(...)

									if (diff === false) {



										// Use the same loop as above to seek `elem` from the start

										while ((node = ++nodeIndex && node && node[dir] ||

											(diff = nodeIndex = 0) || start.pop())) {



											if ((ofType ?

												nodeName(node, name) :

												node.nodeType === 1) &&

												++diff) {



												// Cache the index of each encountered element

												if (useCache) {

													outerCache = node[expando] ||

														(node[expando] = {});

													outerCache[type] = [dirruns, diff];

												}



												if (node === elem) {

													break;

												}

											}

										}

									}

								}



								// Incorporate the offset, then check against cycle size

								diff -= last;

								return diff === first || (diff % first === 0 && diff / first >= 0);

							}

						};

				},



				PSEUDO: function (pseudo, argument) {



					// pseudo-class names are case-insensitive

					// https://www.w3.org/TR/selectors/#pseudo-classes

					// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters

					// Remember that setFilters inherits from pseudos

					var args,

						fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] ||

							find.error("unsupported pseudo: " + pseudo);



					// The user may use createPseudo to indicate that

					// arguments are needed to create the filter function

					// just as jQuery does

					if (fn[expando]) {

						return fn(argument);

					}



					// But maintain support for old signatures

					if (fn.length > 1) {

						args = [pseudo, pseudo, "", argument];

						return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ?

							markFunction(function (seed, matches) {

								var idx,

									matched = fn(seed, argument),

									i = matched.length;

								while (i--) {

									idx = indexOf.call(seed, matched[i]);

									seed[idx] = !(matches[idx] = matched[i]);

								}

							}) :

							function (elem) {

								return fn(elem, 0, args);

							};

					}



					return fn;

				}

			},



			pseudos: {



				// Potentially complex pseudos

				not: markFunction(function (selector) {



					// Trim the selector passed to compile

					// to avoid treating leading and trailing

					// spaces as combinators

					var input = [],

						results = [],

						matcher = compile(selector.replace(rtrimCSS, "$1"));



					return matcher[expando] ?

						markFunction(function (seed, matches, _context, xml) {

							var elem,

								unmatched = matcher(seed, null, xml, []),

								i = seed.length;



							// Match elements unmatched by `matcher`

							while (i--) {

								if ((elem = unmatched[i])) {

									seed[i] = !(matches[i] = elem);

								}

							}

						}) :

						function (elem, _context, xml) {

							input[0] = elem;

							matcher(input, null, xml, results);



							// Don't keep the element

							// (see https://github.com/jquery/sizzle/issues/299)

							input[0] = null;

							return !results.pop();

						};

				}),



				has: markFunction(function (selector) {

					return function (elem) {

						return find(selector, elem).length > 0;

					};

				}),



				contains: markFunction(function (text) {

					text = text.replace(runescape, funescape);

					return function (elem) {

						return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;

					};

				}),



				// "Whether an element is represented by a :lang() selector

				// is based solely on the element's language value

				// being equal to the identifier C,

				// or beginning with the identifier C immediately followed by "-".

				// The matching of C against the element's language value is performed case-insensitively.

				// The identifier C does not have to be a valid language name."

				// https://www.w3.org/TR/selectors/#lang-pseudo

				lang: markFunction(function (lang) {



					// lang value must be a valid identifier

					if (!ridentifier.test(lang || "")) {

						find.error("unsupported lang: " + lang);

					}

					lang = lang.replace(runescape, funescape).toLowerCase();

					return function (elem) {

						var elemLang;

						do {

							if ((elemLang = documentIsHTML ?

								elem.lang :

								elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {



								elemLang = elemLang.toLowerCase();

								return elemLang === lang || elemLang.indexOf(lang + "-") === 0;

							}

						} while ((elem = elem.parentNode) && elem.nodeType === 1);

						return false;

					};

				}),



				// Miscellaneous

				target: function (elem) {

					var hash = window.location && window.location.hash;

					return hash && hash.slice(1) === elem.id;

				},



				root: function (elem) {

					return elem === documentElement;

				},



				focus: function (elem) {

					return elem === safeActiveElement() &&

						document.hasFocus() &&

						!!(elem.type || elem.href || ~elem.tabIndex);

				},



				// Boolean properties

				enabled: createDisabledPseudo(false),

				disabled: createDisabledPseudo(true),



				checked: function (elem) {



					// In CSS3, :checked should return both checked and selected elements

					// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked

					return (nodeName(elem, "input") && !!elem.checked) ||

						(nodeName(elem, "option") && !!elem.selected);

				},



				selected: function (elem) {



					// Support: IE <=11+

					// Accessing the selectedIndex property

					// forces the browser to treat the default option as

					// selected when in an optgroup.

					if (elem.parentNode) {

						// eslint-disable-next-line no-unused-expressions

						elem.parentNode.selectedIndex;

					}



					return elem.selected === true;

				},



				// Contents

				empty: function (elem) {



					// https://www.w3.org/TR/selectors/#empty-pseudo

					// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),

					//   but not by others (comment: 8; processing instruction: 7; etc.)

					// nodeType < 6 works because attributes (2) do not appear as children

					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {

						if (elem.nodeType < 6) {

							return false;

						}

					}

					return true;

				},



				parent: function (elem) {

					return !Expr.pseudos.empty(elem);

				},



				// Element/input types

				header: function (elem) {

					return rheader.test(elem.nodeName);

				},



				input: function (elem) {

					return rinputs.test(elem.nodeName);

				},



				button: function (elem) {

					return nodeName(elem, "input") && elem.type === "button" ||

						nodeName(elem, "button");

				},



				text: function (elem) {

					var attr;

					return nodeName(elem, "input") && elem.type === "text" &&



						// Support: IE <10 only

						// New HTML5 attribute values (e.g., "search") appear

						// with elem.type === "text"

						((attr = elem.getAttribute("type")) == null ||

							attr.toLowerCase() === "text");

				},



				// Position-in-collection

				first: createPositionalPseudo(function () {

					return [0];

				}),



				last: createPositionalPseudo(function (_matchIndexes, length) {

					return [length - 1];

				}),



				eq: createPositionalPseudo(function (_matchIndexes, length, argument) {

					return [argument < 0 ? argument + length : argument];

				}),



				even: createPositionalPseudo(function (matchIndexes, length) {

					var i = 0;

					for (; i < length; i += 2) {

						matchIndexes.push(i);

					}

					return matchIndexes;

				}),



				odd: createPositionalPseudo(function (matchIndexes, length) {

					var i = 1;

					for (; i < length; i += 2) {

						matchIndexes.push(i);

					}

					return matchIndexes;

				}),



				lt: createPositionalPseudo(function (matchIndexes, length, argument) {

					var i;



					if (argument < 0) {

						i = argument + length;

					} else if (argument > length) {

						i = length;

					} else {

						i = argument;

					}



					for (; --i >= 0;) {

						matchIndexes.push(i);

					}

					return matchIndexes;

				}),



				gt: createPositionalPseudo(function (matchIndexes, length, argument) {

					var i = argument < 0 ? argument + length : argument;

					for (; ++i < length;) {

						matchIndexes.push(i);

					}

					return matchIndexes;

				})

			}

		};



		Expr.pseudos.nth = Expr.pseudos.eq;



		// Add button/input type pseudos

		for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {

			Expr.pseudos[i] = createInputPseudo(i);

		}

		for (i in { submit: true, reset: true }) {

			Expr.pseudos[i] = createButtonPseudo(i);

		}



		// Easy API for creating new setFilters

		function setFilters() { }

		setFilters.prototype = Expr.filters = Expr.pseudos;

		Expr.setFilters = new setFilters();



		function tokenize(selector, parseOnly) {

			var matched, match, tokens, type,

				soFar, groups, preFilters,

				cached = tokenCache[selector + " "];



			if (cached) {

				return parseOnly ? 0 : cached.slice(0);

			}



			soFar = selector;

			groups = [];

			preFilters = Expr.preFilter;



			while (soFar) {



				// Comma and first run

				if (!matched || (match = rcomma.exec(soFar))) {

					if (match) {



						// Don't consume trailing commas as valid

						soFar = soFar.slice(match[0].length) || soFar;

					}

					groups.push((tokens = []));

				}



				matched = false;



				// Combinators

				if ((match = rleadingCombinator.exec(soFar))) {

					matched = match.shift();

					tokens.push({

						value: matched,



						// Cast descendant combinators to space

						type: match[0].replace(rtrimCSS, " ")

					});

					soFar = soFar.slice(matched.length);

				}



				// Filters

				for (type in Expr.filter) {

					if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] ||

						(match = preFilters[type](match)))) {

						matched = match.shift();

						tokens.push({

							value: matched,

							type: type,

							matches: match

						});

						soFar = soFar.slice(matched.length);

					}

				}



				if (!matched) {

					break;

				}

			}



			// Return the length of the invalid excess

			// if we're just parsing

			// Otherwise, throw an error or return tokens

			if (parseOnly) {

				return soFar.length;

			}



			return soFar ?

				find.error(selector) :



				// Cache the tokens

				tokenCache(selector, groups).slice(0);

		}



		function toSelector(tokens) {

			var i = 0,

				len = tokens.length,

				selector = "";

			for (; i < len; i++) {

				selector += tokens[i].value;

			}

			return selector;

		}



		function addCombinator(matcher, combinator, base) {

			var dir = combinator.dir,

				skip = combinator.next,

				key = skip || dir,

				checkNonElements = base && key === "parentNode",

				doneName = done++;



			return combinator.first ?



				// Check against closest ancestor/preceding element

				function (elem, context, xml) {

					while ((elem = elem[dir])) {

						if (elem.nodeType === 1 || checkNonElements) {

							return matcher(elem, context, xml);

						}

					}

					return false;

				} :



				// Check against all ancestor/preceding elements

				function (elem, context, xml) {

					var oldCache, outerCache,

						newCache = [dirruns, doneName];



					// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

					if (xml) {

						while ((elem = elem[dir])) {

							if (elem.nodeType === 1 || checkNonElements) {

								if (matcher(elem, context, xml)) {

									return true;

								}

							}

						}

					} else {

						while ((elem = elem[dir])) {

							if (elem.nodeType === 1 || checkNonElements) {

								outerCache = elem[expando] || (elem[expando] = {});



								if (skip && nodeName(elem, skip)) {

									elem = elem[dir] || elem;

								} else if ((oldCache = outerCache[key]) &&

									oldCache[0] === dirruns && oldCache[1] === doneName) {



									// Assign to newCache so results back-propagate to previous elements

									return (newCache[2] = oldCache[2]);

								} else {



									// Reuse newcache so results back-propagate to previous elements

									outerCache[key] = newCache;



									// A match means we're done; a fail means we have to keep checking

									if ((newCache[2] = matcher(elem, context, xml))) {

										return true;

									}

								}

							}

						}

					}

					return false;

				};

		}



		function elementMatcher(matchers) {

			return matchers.length > 1 ?

				function (elem, context, xml) {

					var i = matchers.length;

					while (i--) {

						if (!matchers[i](elem, context, xml)) {

							return false;

						}

					}

					return true;

				} :

				matchers[0];

		}



		function multipleContexts(selector, contexts, results) {

			var i = 0,

				len = contexts.length;

			for (; i < len; i++) {

				find(selector, contexts[i], results);

			}

			return results;

		}



		function condense(unmatched, map, filter, context, xml) {

			var elem,

				newUnmatched = [],

				i = 0,

				len = unmatched.length,

				mapped = map != null;



			for (; i < len; i++) {

				if ((elem = unmatched[i])) {

					if (!filter || filter(elem, context, xml)) {

						newUnmatched.push(elem);

						if (mapped) {

							map.push(i);

						}

					}

				}

			}



			return newUnmatched;

		}



		function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {

			if (postFilter && !postFilter[expando]) {

				postFilter = setMatcher(postFilter);

			}

			if (postFinder && !postFinder[expando]) {

				postFinder = setMatcher(postFinder, postSelector);

			}

			return markFunction(function (seed, results, context, xml) {

				var temp, i, elem, matcherOut,

					preMap = [],

					postMap = [],

					preexisting = results.length,



					// Get initial elements from seed or context

					elems = seed ||

						multipleContexts(selector || "*",

							context.nodeType ? [context] : context, []),



					// Prefilter to get matcher input, preserving a map for seed-results synchronization

					matcherIn = preFilter && (seed || !selector) ?

						condense(elems, preMap, preFilter, context, xml) :

						elems;



				if (matcher) {



					// If we have a postFinder, or filtered seed, or non-seed postFilter

					// or preexisting results,

					matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ?



						// ...intermediate processing is necessary

						[] :



						// ...otherwise use results directly

						results;



					// Find primary matches

					matcher(matcherIn, matcherOut, context, xml);

				} else {

					matcherOut = matcherIn;

				}



				// Apply postFilter

				if (postFilter) {

					temp = condense(matcherOut, postMap);

					postFilter(temp, [], context, xml);



					// Un-match failing elements by moving them back to matcherIn

					i = temp.length;

					while (i--) {

						if ((elem = temp[i])) {

							matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);

						}

					}

				}



				if (seed) {

					if (postFinder || preFilter) {

						if (postFinder) {



							// Get the final matcherOut by condensing this intermediate into postFinder contexts

							temp = [];

							i = matcherOut.length;

							while (i--) {

								if ((elem = matcherOut[i])) {



									// Restore matcherIn since elem is not yet a final match

									temp.push((matcherIn[i] = elem));

								}

							}

							postFinder(null, (matcherOut = []), temp, xml);

						}



						// Move matched elements from seed to results to keep them synchronized

						i = matcherOut.length;

						while (i--) {

							if ((elem = matcherOut[i]) &&

								(temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {



								seed[temp] = !(results[temp] = elem);

							}

						}

					}



					// Add elements to results, through postFinder if defined

				} else {

					matcherOut = condense(

						matcherOut === results ?

							matcherOut.splice(preexisting, matcherOut.length) :

							matcherOut

					);

					if (postFinder) {

						postFinder(null, results, matcherOut, xml);

					} else {

						push.apply(results, matcherOut);

					}

				}

			});

		}



		function matcherFromTokens(tokens) {

			var checkContext, matcher, j,

				len = tokens.length,

				leadingRelative = Expr.relative[tokens[0].type],

				implicitRelative = leadingRelative || Expr.relative[" "],

				i = leadingRelative ? 1 : 0,



				// The foundational matcher ensures that elements are reachable from top-level context(s)

				matchContext = addCombinator(function (elem) {

					return elem === checkContext;

				}, implicitRelative, true),

				matchAnyContext = addCombinator(function (elem) {

					return indexOf.call(checkContext, elem) > -1;

				}, implicitRelative, true),

				matchers = [function (elem, context, xml) {



					// Support: IE 11+, Edge 17 - 18+

					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing

					// two documents; shallow comparisons work.

					// eslint-disable-next-line eqeqeq

					var ret = (!leadingRelative && (xml || context != outermostContext)) || (

						(checkContext = context).nodeType ?

							matchContext(elem, context, xml) :

							matchAnyContext(elem, context, xml));



					// Avoid hanging onto element

					// (see https://github.com/jquery/sizzle/issues/299)

					checkContext = null;

					return ret;

				}];



			for (; i < len; i++) {

				if ((matcher = Expr.relative[tokens[i].type])) {

					matchers = [addCombinator(elementMatcher(matchers), matcher)];

				} else {

					matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);



					// Return special upon seeing a positional matcher

					if (matcher[expando]) {



						// Find the next relative operator (if any) for proper handling

						j = ++i;

						for (; j < len; j++) {

							if (Expr.relative[tokens[j].type]) {

								break;

							}

						}

						return setMatcher(

							i > 1 && elementMatcher(matchers),

							i > 1 && toSelector(



								// If the preceding token was a descendant combinator, insert an implicit any-element `*`

								tokens.slice(0, i - 1)

									.concat({ value: tokens[i - 2].type === " " ? "*" : "" })

							).replace(rtrimCSS, "$1"),

							matcher,

							i < j && matcherFromTokens(tokens.slice(i, j)),

							j < len && matcherFromTokens((tokens = tokens.slice(j))),

							j < len && toSelector(tokens)

						);

					}

					matchers.push(matcher);

				}

			}



			return elementMatcher(matchers);

		}



		function matcherFromGroupMatchers(elementMatchers, setMatchers) {

			var bySet = setMatchers.length > 0,

				byElement = elementMatchers.length > 0,

				superMatcher = function (seed, context, xml, results, outermost) {

					var elem, j, matcher,

						matchedCount = 0,

						i = "0",

						unmatched = seed && [],

						setMatched = [],

						contextBackup = outermostContext,



						// We must always have either seed elements or outermost context

						elems = seed || byElement && Expr.find.TAG("*", outermost),



						// Use integer dirruns iff this is the outermost matcher

						dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),

						len = elems.length;



					if (outermost) {



						// Support: IE 11+, Edge 17 - 18+

						// IE/Edge sometimes throw a "Permission denied" error when strict-comparing

						// two documents; shallow comparisons work.

						// eslint-disable-next-line eqeqeq

						outermostContext = context == document || context || outermost;

					}



					// Add elements passing elementMatchers directly to results

					// Support: iOS <=7 - 9 only

					// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching

					// elements by id. (see trac-14142)

					for (; i !== len && (elem = elems[i]) != null; i++) {

						if (byElement && elem) {

							j = 0;



							// Support: IE 11+, Edge 17 - 18+

							// IE/Edge sometimes throw a "Permission denied" error when strict-comparing

							// two documents; shallow comparisons work.

							// eslint-disable-next-line eqeqeq

							if (!context && elem.ownerDocument != document) {

								setDocument(elem);

								xml = !documentIsHTML;

							}

							while ((matcher = elementMatchers[j++])) {

								if (matcher(elem, context || document, xml)) {

									push.call(results, elem);

									break;

								}

							}

							if (outermost) {

								dirruns = dirrunsUnique;

							}

						}



						// Track unmatched elements for set filters

						if (bySet) {



							// They will have gone through all possible matchers

							if ((elem = !matcher && elem)) {

								matchedCount--;

							}



							// Lengthen the array for every element, matched or not

							if (seed) {

								unmatched.push(elem);

							}

						}

					}



					// `i` is now the count of elements visited above, and adding it to `matchedCount`

					// makes the latter nonnegative.

					matchedCount += i;



					// Apply set filters to unmatched elements

					// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`

					// equals `i`), unless we didn't visit _any_ elements in the above loop because we have

					// no element matchers and no seed.

					// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that

					// case, which will result in a "00" `matchedCount` that differs from `i` but is also

					// numerically zero.

					if (bySet && i !== matchedCount) {

						j = 0;

						while ((matcher = setMatchers[j++])) {

							matcher(unmatched, setMatched, context, xml);

						}



						if (seed) {



							// Reintegrate element matches to eliminate the need for sorting

							if (matchedCount > 0) {

								while (i--) {

									if (!(unmatched[i] || setMatched[i])) {

										setMatched[i] = pop.call(results);

									}

								}

							}



							// Discard index placeholder values to get only actual matches

							setMatched = condense(setMatched);

						}



						// Add matches to results

						push.apply(results, setMatched);



						// Seedless set matches succeeding multiple successful matchers stipulate sorting

						if (outermost && !seed && setMatched.length > 0 &&

							(matchedCount + setMatchers.length) > 1) {



							jQuery.uniqueSort(results);

						}

					}



					// Override manipulation of globals by nested matchers

					if (outermost) {

						dirruns = dirrunsUnique;

						outermostContext = contextBackup;

					}



					return unmatched;

				};



			return bySet ?

				markFunction(superMatcher) :

				superMatcher;

		}



		function compile(selector, match /* Internal Use Only */) {

			var i,

				setMatchers = [],

				elementMatchers = [],

				cached = compilerCache[selector + " "];



			if (!cached) {



				// Generate a function of recursive functions that can be used to check each element

				if (!match) {

					match = tokenize(selector);

				}

				i = match.length;

				while (i--) {

					cached = matcherFromTokens(match[i]);

					if (cached[expando]) {

						setMatchers.push(cached);

					} else {

						elementMatchers.push(cached);

					}

				}



				// Cache the compiled function

				cached = compilerCache(selector,

					matcherFromGroupMatchers(elementMatchers, setMatchers));



				// Save selector and tokenization

				cached.selector = selector;

			}

			return cached;

		}



		/**

		 * A low-level selection function that works with jQuery's compiled

		 *  selector functions

		 * @param {String|Function} selector A selector or a pre-compiled

		 *  selector function built with jQuery selector compile

		 * @param {Element} context

		 * @param {Array} [results]

		 * @param {Array} [seed] A set of elements to match against

		 */

		function select(selector, context, results, seed) {

			var i, tokens, token, type, find,

				compiled = typeof selector === "function" && selector,

				match = !seed && tokenize((selector = compiled.selector || selector));



			results = results || [];



			// Try to minimize operations if there is only one selector in the list and no seed

			// (the latter of which guarantees us context)

			if (match.length === 1) {



				// Reduce context if the leading compound selector is an ID

				tokens = match[0] = match[0].slice(0);

				if (tokens.length > 2 && (token = tokens[0]).type === "ID" &&

					context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {



					context = (Expr.find.ID(

						token.matches[0].replace(runescape, funescape),

						context

					) || [])[0];

					if (!context) {

						return results;



						// Precompiled matchers will still verify ancestry, so step up a level

					} else if (compiled) {

						context = context.parentNode;

					}



					selector = selector.slice(tokens.shift().value.length);

				}



				// Fetch a seed set for right-to-left matching

				i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;

				while (i--) {

					token = tokens[i];



					// Abort if we hit a combinator

					if (Expr.relative[(type = token.type)]) {

						break;

					}

					if ((find = Expr.find[type])) {



						// Search, expanding context for leading sibling combinators

						if ((seed = find(

							token.matches[0].replace(runescape, funescape),

							rsibling.test(tokens[0].type) &&

							testContext(context.parentNode) || context

						))) {



							// If seed is empty or no tokens remain, we can return early

							tokens.splice(i, 1);

							selector = seed.length && toSelector(tokens);

							if (!selector) {

								push.apply(results, seed);

								return results;

							}



							break;

						}

					}

				}

			}



			// Compile and execute a filtering function if one is not provided

			// Provide `match` to avoid retokenization if we modified the selector above

			(compiled || compile(selector, match))(

				seed,

				context,

				!documentIsHTML,

				results,

				!context || rsibling.test(selector) && testContext(context.parentNode) || context

			);

			return results;

		}



		// One-time assignments



		// Support: Android <=4.0 - 4.1+

		// Sort stability

		support.sortStable = expando.split("").sort(sortOrder).join("") === expando;



		// Initialize against the default document

		setDocument();



		// Support: Android <=4.0 - 4.1+

		// Detached nodes confoundingly follow *each other*

		support.sortDetached = assert(function (el) {



			// Should return 1, but returns 4 (following)

			return el.compareDocumentPosition(document.createElement("fieldset")) & 1;

		});



		jQuery.find = find;



		// Deprecated

		jQuery.expr[":"] = jQuery.expr.pseudos;

		jQuery.unique = jQuery.uniqueSort;



		// These have always been private, but they used to be documented as part of

		// Sizzle so let's maintain them for now for backwards compatibility purposes.

		find.compile = compile;

		find.select = select;

		find.setDocument = setDocument;

		find.tokenize = tokenize;



		find.escape = jQuery.escapeSelector;

		find.getText = jQuery.text;

		find.isXML = jQuery.isXMLDoc;

		find.selectors = jQuery.expr;

		find.support = jQuery.support;

		find.uniqueSort = jQuery.uniqueSort;



		/* eslint-enable */



	})();





	var dir = function (elem, dir, until) {

		var matched = [],

			truncate = until !== undefined;



		while ((elem = elem[dir]) && elem.nodeType !== 9) {

			if (elem.nodeType === 1) {

				if (truncate && jQuery(elem).is(until)) {

					break;

				}

				matched.push(elem);

			}

		}

		return matched;

	};





	var siblings = function (n, elem) {

		var matched = [];



		for (; n; n = n.nextSibling) {

			if (n.nodeType === 1 && n !== elem) {

				matched.push(n);

			}

		}



		return matched;

	};





	var rneedsContext = jQuery.expr.match.needsContext;



	var rsingleTag = (/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);







	// Implement the identical functionality for filter and not

	function winnow(elements, qualifier, not) {

		if (isFunction(qualifier)) {

			return jQuery.grep(elements, function (elem, i) {

				return !!qualifier.call(elem, i, elem) !== not;

			});

		}



		// Single element

		if (qualifier.nodeType) {

			return jQuery.grep(elements, function (elem) {

				return (elem === qualifier) !== not;

			});

		}



		// Arraylike of elements (jQuery, arguments, Array)

		if (typeof qualifier !== "string") {

			return jQuery.grep(elements, function (elem) {

				return (indexOf.call(qualifier, elem) > -1) !== not;

			});

		}



		// Filtered directly for both simple and complex selectors

		return jQuery.filter(qualifier, elements, not);

	}



	jQuery.filter = function (expr, elems, not) {

		var elem = elems[0];



		if (not) {

			expr = ":not(" + expr + ")";

		}



		if (elems.length === 1 && elem.nodeType === 1) {

			return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];

		}



		return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {

			return elem.nodeType === 1;

		}));

	};



	jQuery.fn.extend({

		find: function (selector) {

			var i, ret,

				len = this.length,

				self = this;



			if (typeof selector !== "string") {

				return this.pushStack(jQuery(selector).filter(function () {

					for (i = 0; i < len; i++) {

						if (jQuery.contains(self[i], this)) {

							return true;

						}

					}

				}));

			}



			ret = this.pushStack([]);



			for (i = 0; i < len; i++) {

				jQuery.find(selector, self[i], ret);

			}



			return len > 1 ? jQuery.uniqueSort(ret) : ret;

		},

		filter: function (selector) {

			return this.pushStack(winnow(this, selector || [], false));

		},

		not: function (selector) {

			return this.pushStack(winnow(this, selector || [], true));

		},

		is: function (selector) {

			return !!winnow(

				this,



				// If this is a positional/relative selector, check membership in the returned set

				// so $("p:first").is("p:last") won't return true for a doc with two "p".

				typeof selector === "string" && rneedsContext.test(selector) ?

					jQuery(selector) :

					selector || [],

				false

			).length;

		}

	});





	// Initialize a jQuery object





	// A central reference to the root jQuery(document)

	var rootjQuery,



		// A simple way to check for HTML strings

		// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)

		// Strict HTML recognition (trac-11290: must start with <)

		// Shortcut simple #id case for speed

		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,



		init = jQuery.fn.init = function (selector, context, root) {

			var match, elem;



			// HANDLE: $(""), $(null), $(undefined), $(false)

			if (!selector) {

				return this;

			}



			// Method init() accepts an alternate rootjQuery

			// so migrate can support jQuery.sub (gh-2101)

			root = root || rootjQuery;



			// Handle HTML strings

			if (typeof selector === "string") {

				if (selector[0] === "<" &&

					selector[selector.length - 1] === ">" &&

					selector.length >= 3) {



					// Assume that strings that start and end with <> are HTML and skip the regex check

					match = [null, selector, null];



				} else {

					match = rquickExpr.exec(selector);

				}



				// Match html or make sure no context is specified for #id

				if (match && (match[1] || !context)) {



					// HANDLE: $(html) -> $(array)

					if (match[1]) {

						context = context instanceof jQuery ? context[0] : context;



						// Option to run scripts is true for back-compat

						// Intentionally let the error be thrown if parseHTML is not present

						jQuery.merge(this, jQuery.parseHTML(

							match[1],

							context && context.nodeType ? context.ownerDocument || context : document,

							true

						));



						// HANDLE: $(html, props)

						if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {

							for (match in context) {



								// Properties of context are called as methods if possible

								if (isFunction(this[match])) {

									this[match](context[match]);



									// ...and otherwise set as attributes

								} else {

									this.attr(match, context[match]);

								}

							}

						}



						return this;



						// HANDLE: $(#id)

					} else {

						elem = document.getElementById(match[2]);



						if (elem) {



							// Inject the element directly into the jQuery object

							this[0] = elem;

							this.length = 1;

						}

						return this;

					}



					// HANDLE: $(expr, $(...))

				} else if (!context || context.jquery) {

					return (context || root).find(selector);



					// HANDLE: $(expr, context)

					// (which is just equivalent to: $(context).find(expr)

				} else {

					return this.constructor(context).find(selector);

				}



				// HANDLE: $(DOMElement)

			} else if (selector.nodeType) {

				this[0] = selector;

				this.length = 1;

				return this;



				// HANDLE: $(function)

				// Shortcut for document ready

			} else if (isFunction(selector)) {

				return root.ready !== undefined ?

					root.ready(selector) :



					// Execute immediately if ready is not present

					selector(jQuery);

			}



			return jQuery.makeArray(selector, this);

		};



	// Give the init function the jQuery prototype for later instantiation

	init.prototype = jQuery.fn;



	// Initialize central reference

	rootjQuery = jQuery(document);





	var rparentsprev = /^(?:parents|prev(?:Until|All))/,



		// Methods guaranteed to produce a unique set when starting from a unique set

		guaranteedUnique = {

			children: true,

			contents: true,

			next: true,

			prev: true

		};



	jQuery.fn.extend({

		has: function (target) {

			var targets = jQuery(target, this),

				l = targets.length;



			return this.filter(function () {

				var i = 0;

				for (; i < l; i++) {

					if (jQuery.contains(this, targets[i])) {

						return true;

					}

				}

			});

		},



		closest: function (selectors, context) {

			var cur,

				i = 0,

				l = this.length,

				matched = [],

				targets = typeof selectors !== "string" && jQuery(selectors);



			// Positional selectors never match, since there's no _selection_ context

			if (!rneedsContext.test(selectors)) {

				for (; i < l; i++) {

					for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {



						// Always skip document fragments

						if (cur.nodeType < 11 && (targets ?

							targets.index(cur) > -1 :



							// Don't pass non-elements to jQuery#find

							cur.nodeType === 1 &&

							jQuery.find.matchesSelector(cur, selectors))) {



							matched.push(cur);

							break;

						}

					}

				}

			}



			return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);

		},



		// Determine the position of an element within the set

		index: function (elem) {



			// No argument, return index in parent

			if (!elem) {

				return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;

			}



			// Index in selector

			if (typeof elem === "string") {

				return indexOf.call(jQuery(elem), this[0]);

			}



			// Locate the position of the desired element

			return indexOf.call(this,



				// If it receives a jQuery object, the first element is used

				elem.jquery ? elem[0] : elem

			);

		},



		add: function (selector, context) {

			return this.pushStack(

				jQuery.uniqueSort(

					jQuery.merge(this.get(), jQuery(selector, context))

				)

			);

		},



		addBack: function (selector) {

			return this.add(selector == null ?

				this.prevObject : this.prevObject.filter(selector)

			);

		}

	});



	function sibling(cur, dir) {

		while ((cur = cur[dir]) && cur.nodeType !== 1) { }

		return cur;

	}



	jQuery.each({

		parent: function (elem) {

			var parent = elem.parentNode;

			return parent && parent.nodeType !== 11 ? parent : null;

		},

		parents: function (elem) {

			return dir(elem, "parentNode");

		},

		parentsUntil: function (elem, _i, until) {

			return dir(elem, "parentNode", until);

		},

		next: function (elem) {

			return sibling(elem, "nextSibling");

		},

		prev: function (elem) {

			return sibling(elem, "previousSibling");

		},

		nextAll: function (elem) {

			return dir(elem, "nextSibling");

		},

		prevAll: function (elem) {

			return dir(elem, "previousSibling");

		},

		nextUntil: function (elem, _i, until) {

			return dir(elem, "nextSibling", until);

		},

		prevUntil: function (elem, _i, until) {

			return dir(elem, "previousSibling", until);

		},

		siblings: function (elem) {

			return siblings((elem.parentNode || {}).firstChild, elem);

		},

		children: function (elem) {

			return siblings(elem.firstChild);

		},

		contents: function (elem) {

			if (elem.contentDocument != null &&



				// Support: IE 11+

				// <object> elements with no `data` attribute has an object

				// `contentDocument` with a `null` prototype.

				getProto(elem.contentDocument)) {



				return elem.contentDocument;

			}



			// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only

			// Treat the template element as a regular one in browsers that

			// don't support it.

			if (nodeName(elem, "template")) {

				elem = elem.content || elem;

			}



			return jQuery.merge([], elem.childNodes);

		}

	}, function (name, fn) {

		jQuery.fn[name] = function (until, selector) {

			var matched = jQuery.map(this, fn, until);



			if (name.slice(-5) !== "Until") {

				selector = until;

			}



			if (selector && typeof selector === "string") {

				matched = jQuery.filter(selector, matched);

			}



			if (this.length > 1) {



				// Remove duplicates

				if (!guaranteedUnique[name]) {

					jQuery.uniqueSort(matched);

				}



				// Reverse order for parents* and prev-derivatives

				if (rparentsprev.test(name)) {

					matched.reverse();

				}

			}



			return this.pushStack(matched);

		};

	});

	var rnothtmlwhite = (/[^\x20\t\r\n\f]+/g);







	// Convert String-formatted options into Object-formatted ones

	function createOptions(options) {

		var object = {};

		jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {

			object[flag] = true;

		});

		return object;

	}



	/*

	 * Create a callback list using the following parameters:

	 *

	 *	options: an optional list of space-separated options that will change how

	 *			the callback list behaves or a more traditional option object

	 *

	 * By default a callback list will act like an event callback list and can be

	 * "fired" multiple times.

	 *

	 * Possible options:

	 *

	 *	once:			will ensure the callback list can only be fired once (like a Deferred)

	 *

	 *	memory:			will keep track of previous values and will call any callback added

	 *					after the list has been fired right away with the latest "memorized"

	 *					values (like a Deferred)

	 *

	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)

	 *

	 *	stopOnFalse:	interrupt callings when a callback returns false

	 *

	 */

	jQuery.Callbacks = function (options) {



		// Convert options from String-formatted to Object-formatted if needed

		// (we check in cache first)

		options = typeof options === "string" ?

			createOptions(options) :

			jQuery.extend({}, options);



		var // Flag to know if list is currently firing

			firing,



			// Last fire value for non-forgettable lists

			memory,



			// Flag to know if list was already fired

			fired,



			// Flag to prevent firing

			locked,



			// Actual callback list

			list = [],



			// Queue of execution data for repeatable lists

			queue = [],



			// Index of currently firing callback (modified by add/remove as needed)

			firingIndex = -1,



			// Fire callbacks

			fire = function () {



				// Enforce single-firing

				locked = locked || options.once;



				// Execute callbacks for all pending executions,

				// respecting firingIndex overrides and runtime changes

				fired = firing = true;

				for (; queue.length; firingIndex = -1) {

					memory = queue.shift();

					while (++firingIndex < list.length) {



						// Run callback and check for early termination

						if (list[firingIndex].apply(memory[0], memory[1]) === false &&

							options.stopOnFalse) {



							// Jump to end and forget the data so .add doesn't re-fire

							firingIndex = list.length;

							memory = false;

						}

					}

				}



				// Forget the data if we're done with it

				if (!options.memory) {

					memory = false;

				}



				firing = false;



				// Clean up if we're done firing for good

				if (locked) {



					// Keep an empty list if we have data for future add calls

					if (memory) {

						list = [];



						// Otherwise, this object is spent

					} else {

						list = "";

					}

				}

			},



			// Actual Callbacks object

			self = {



				// Add a callback or a collection of callbacks to the list

				add: function () {

					if (list) {



						// If we have memory from a past run, we should fire after adding

						if (memory && !firing) {

							firingIndex = list.length - 1;

							queue.push(memory);

						}



						(function add(args) {

							jQuery.each(args, function (_, arg) {

								if (isFunction(arg)) {

									if (!options.unique || !self.has(arg)) {

										list.push(arg);

									}

								} else if (arg && arg.length && toType(arg) !== "string") {



									// Inspect recursively

									add(arg);

								}

							});

						})(arguments);



						if (memory && !firing) {

							fire();

						}

					}

					return this;

				},



				// Remove a callback from the list

				remove: function () {

					jQuery.each(arguments, function (_, arg) {

						var index;

						while ((index = jQuery.inArray(arg, list, index)) > -1) {

							list.splice(index, 1);



							// Handle firing indexes

							if (index <= firingIndex) {

								firingIndex--;

							}

						}

					});

					return this;

				},



				// Check if a given callback is in the list.

				// If no argument is given, return whether or not list has callbacks attached.

				has: function (fn) {

					return fn ?

						jQuery.inArray(fn, list) > -1 :

						list.length > 0;

				},



				// Remove all callbacks from the list

				empty: function () {

					if (list) {

						list = [];

					}

					return this;

				},



				// Disable .fire and .add

				// Abort any current/pending executions

				// Clear all callbacks and values

				disable: function () {

					locked = queue = [];

					list = memory = "";

					return this;

				},

				disabled: function () {

					return !list;

				},



				// Disable .fire

				// Also disable .add unless we have memory (since it would have no effect)

				// Abort any pending executions

				lock: function () {

					locked = queue = [];

					if (!memory && !firing) {

						list = memory = "";

					}

					return this;

				},

				locked: function () {

					return !!locked;

				},



				// Call all callbacks with the given context and arguments

				fireWith: function (context, args) {

					if (!locked) {

						args = args || [];

						args = [context, args.slice ? args.slice() : args];

						queue.push(args);

						if (!firing) {

							fire();

						}

					}

					return this;

				},



				// Call all the callbacks with the given arguments

				fire: function () {

					self.fireWith(this, arguments);

					return this;

				},



				// To know if the callbacks have already been called at least once

				fired: function () {

					return !!fired;

				}

			};



		return self;

	};





	function Identity(v) {

		return v;

	}

	function Thrower(ex) {

		throw ex;

	}



	function adoptValue(value, resolve, reject, noValue) {

		var method;



		try {



			// Check for promise aspect first to privilege synchronous behavior

			if (value && isFunction((method = value.promise))) {

				method.call(value).done(resolve).fail(reject);



				// Other thenables

			} else if (value && isFunction((method = value.then))) {

				method.call(value, resolve, reject);



				// Other non-thenables

			} else {



				// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:

				// * false: [ value ].slice( 0 ) => resolve( value )

				// * true: [ value ].slice( 1 ) => resolve()

				resolve.apply(undefined, [value].slice(noValue));

			}



			// For Promises/A+, convert exceptions into rejections

			// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in

			// Deferred#then to conditionally suppress rejection.

		} catch (value) {



			// Support: Android 4.0 only

			// Strict mode functions invoked without .call/.apply get global-object context

			reject.apply(undefined, [value]);

		}

	}



	jQuery.extend({



		Deferred: function (func) {

			var tuples = [



				// action, add listener, callbacks,

				// ... .then handlers, argument index, [final state]

				["notify", "progress", jQuery.Callbacks("memory"),

					jQuery.Callbacks("memory"), 2],

				["resolve", "done", jQuery.Callbacks("once memory"),

					jQuery.Callbacks("once memory"), 0, "resolved"],

				["reject", "fail", jQuery.Callbacks("once memory"),

					jQuery.Callbacks("once memory"), 1, "rejected"]

			],

				state = "pending",

				promise = {

					state: function () {

						return state;

					},

					always: function () {

						deferred.done(arguments).fail(arguments);

						return this;

					},

					"catch": function (fn) {

						return promise.then(null, fn);

					},



					// Keep pipe for back-compat

					pipe: function ( /* fnDone, fnFail, fnProgress */) {

						var fns = arguments;



						return jQuery.Deferred(function (newDefer) {

							jQuery.each(tuples, function (_i, tuple) {



								// Map tuples (progress, done, fail) to arguments (done, fail, progress)

								var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];



								// deferred.progress(function() { bind to newDefer or newDefer.notify })

								// deferred.done(function() { bind to newDefer or newDefer.resolve })

								// deferred.fail(function() { bind to newDefer or newDefer.reject })

								deferred[tuple[1]](function () {

									var returned = fn && fn.apply(this, arguments);

									if (returned && isFunction(returned.promise)) {

										returned.promise()

											.progress(newDefer.notify)

											.done(newDefer.resolve)

											.fail(newDefer.reject);

									} else {

										newDefer[tuple[0] + "With"](

											this,

											fn ? [returned] : arguments

										);

									}

								});

							});

							fns = null;

						}).promise();

					},

					then: function (onFulfilled, onRejected, onProgress) {

						var maxDepth = 0;

						function resolve(depth, deferred, handler, special) {

							return function () {

								var that = this,

									args = arguments,

									mightThrow = function () {

										var returned, then;



										// Support: Promises/A+ section 2.3.3.3.3

										// https://promisesaplus.com/#point-59

										// Ignore double-resolution attempts

										if (depth < maxDepth) {

											return;

										}



										returned = handler.apply(that, args);



										// Support: Promises/A+ section 2.3.1

										// https://promisesaplus.com/#point-48

										if (returned === deferred.promise()) {

											throw new TypeError("Thenable self-resolution");

										}



										// Support: Promises/A+ sections 2.3.3.1, 3.5

										// https://promisesaplus.com/#point-54

										// https://promisesaplus.com/#point-75

										// Retrieve `then` only once

										then = returned &&



											// Support: Promises/A+ section 2.3.4

											// https://promisesaplus.com/#point-64

											// Only check objects and functions for thenability

											(typeof returned === "object" ||

												typeof returned === "function") &&

											returned.then;



										// Handle a returned thenable

										if (isFunction(then)) {



											// Special processors (notify) just wait for resolution

											if (special) {

												then.call(

													returned,

													resolve(maxDepth, deferred, Identity, special),

													resolve(maxDepth, deferred, Thrower, special)

												);



												// Normal processors (resolve) also hook into progress

											} else {



												// ...and disregard older resolution values

												maxDepth++;



												then.call(

													returned,

													resolve(maxDepth, deferred, Identity, special),

													resolve(maxDepth, deferred, Thrower, special),

													resolve(maxDepth, deferred, Identity,

														deferred.notifyWith)

												);

											}



											// Handle all other returned values

										} else {



											// Only substitute handlers pass on context

											// and multiple values (non-spec behavior)

											if (handler !== Identity) {

												that = undefined;

												args = [returned];

											}



											// Process the value(s)

											// Default process is resolve

											(special || deferred.resolveWith)(that, args);

										}

									},



									// Only normal processors (resolve) catch and reject exceptions

									process = special ?

										mightThrow :

										function () {

											try {

												mightThrow();

											} catch (e) {



												if (jQuery.Deferred.exceptionHook) {

													jQuery.Deferred.exceptionHook(e,

														process.error);

												}



												// Support: Promises/A+ section 2.3.3.3.4.1

												// https://promisesaplus.com/#point-61

												// Ignore post-resolution exceptions

												if (depth + 1 >= maxDepth) {



													// Only substitute handlers pass on context

													// and multiple values (non-spec behavior)

													if (handler !== Thrower) {

														that = undefined;

														args = [e];

													}



													deferred.rejectWith(that, args);

												}

											}

										};



								// Support: Promises/A+ section 2.3.3.3.1

								// https://promisesaplus.com/#point-57

								// Re-resolve promises immediately to dodge false rejection from

								// subsequent errors

								if (depth) {

									process();

								} else {



									// Call an optional hook to record the error, in case of exception

									// since it's otherwise lost when execution goes async

									if (jQuery.Deferred.getErrorHook) {

										process.error = jQuery.Deferred.getErrorHook();



										// The deprecated alias of the above. While the name suggests

										// returning the stack, not an error instance, jQuery just passes

										// it directly to `console.warn` so both will work; an instance

										// just better cooperates with source maps.

									} else if (jQuery.Deferred.getStackHook) {

										process.error = jQuery.Deferred.getStackHook();

									}

									window.setTimeout(process);

								}

							};

						}



						return jQuery.Deferred(function (newDefer) {



							// progress_handlers.add( ... )

							tuples[0][3].add(

								resolve(

									0,

									newDefer,

									isFunction(onProgress) ?

										onProgress :

										Identity,

									newDefer.notifyWith

								)

							);



							// fulfilled_handlers.add( ... )

							tuples[1][3].add(

								resolve(

									0,

									newDefer,

									isFunction(onFulfilled) ?

										onFulfilled :

										Identity

								)

							);



							// rejected_handlers.add( ... )

							tuples[2][3].add(

								resolve(

									0,

									newDefer,

									isFunction(onRejected) ?

										onRejected :

										Thrower

								)

							);

						}).promise();

					},



					// Get a promise for this deferred

					// If obj is provided, the promise aspect is added to the object

					promise: function (obj) {

						return obj != null ? jQuery.extend(obj, promise) : promise;

					}

				},

				deferred = {};



			// Add list-specific methods

			jQuery.each(tuples, function (i, tuple) {

				var list = tuple[2],

					stateString = tuple[5];



				// promise.progress = list.add

				// promise.done = list.add

				// promise.fail = list.add

				promise[tuple[1]] = list.add;



				// Handle state

				if (stateString) {

					list.add(

						function () {



							// state = "resolved" (i.e., fulfilled)

							// state = "rejected"

							state = stateString;

						},



						// rejected_callbacks.disable

						// fulfilled_callbacks.disable

						tuples[3 - i][2].disable,



						// rejected_handlers.disable

						// fulfilled_handlers.disable

						tuples[3 - i][3].disable,



						// progress_callbacks.lock

						tuples[0][2].lock,



						// progress_handlers.lock

						tuples[0][3].lock

					);

				}



				// progress_handlers.fire

				// fulfilled_handlers.fire

				// rejected_handlers.fire

				list.add(tuple[3].fire);



				// deferred.notify = function() { deferred.notifyWith(...) }

				// deferred.resolve = function() { deferred.resolveWith(...) }

				// deferred.reject = function() { deferred.rejectWith(...) }

				deferred[tuple[0]] = function () {

					deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);

					return this;

				};



				// deferred.notifyWith = list.fireWith

				// deferred.resolveWith = list.fireWith

				// deferred.rejectWith = list.fireWith

				deferred[tuple[0] + "With"] = list.fireWith;

			});



			// Make the deferred a promise

			promise.promise(deferred);



			// Call given func if any

			if (func) {

				func.call(deferred, deferred);

			}



			// All done!

			return deferred;

		},



		// Deferred helper

		when: function (singleValue) {

			var



				// count of uncompleted subordinates

				remaining = arguments.length,



				// count of unprocessed arguments

				i = remaining,



				// subordinate fulfillment data

				resolveContexts = Array(i),

				resolveValues = slice.call(arguments),



				// the primary Deferred

				primary = jQuery.Deferred(),



				// subordinate callback factory

				updateFunc = function (i) {

					return function (value) {

						resolveContexts[i] = this;

						resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;

						if (!(--remaining)) {

							primary.resolveWith(resolveContexts, resolveValues);

						}

					};

				};



			// Single- and empty arguments are adopted like Promise.resolve

			if (remaining <= 1) {

				adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject,

					!remaining);



				// Use .then() to unwrap secondary thenables (cf. gh-3000)

				if (primary.state() === "pending" ||

					isFunction(resolveValues[i] && resolveValues[i].then)) {



					return primary.then();

				}

			}



			// Multiple arguments are aggregated like Promise.all array elements

			while (i--) {

				adoptValue(resolveValues[i], updateFunc(i), primary.reject);

			}



			return primary.promise();

		}

	});





	// These usually indicate a programmer mistake during development,

	// warn about them ASAP rather than swallowing them by default.

	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;



	// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error

	// captured before the async barrier to get the original error cause

	// which may otherwise be hidden.

	jQuery.Deferred.exceptionHook = function (error, asyncError) {



		// Support: IE 8 - 9 only

		// Console exists when dev tools are open, which can happen at any time

		if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {

			window.console.warn("jQuery.Deferred exception: " + error.message,

				error.stack, asyncError);

		}

	};









	jQuery.readyException = function (error) {

		window.setTimeout(function () {

			throw error;

		});

	};









	// The deferred used on DOM ready

	var readyList = jQuery.Deferred();



	jQuery.fn.ready = function (fn) {



		readyList

			.then(fn)



			// Wrap jQuery.readyException in a function so that the lookup

			// happens at the time of error handling instead of callback

			// registration.

			.catch(function (error) {

				jQuery.readyException(error);

			});



		return this;

	};



	jQuery.extend({



		// Is the DOM ready to be used? Set to true once it occurs.

		isReady: false,



		// A counter to track how many items to wait for before

		// the ready event fires. See trac-6781

		readyWait: 1,



		// Handle when the DOM is ready

		ready: function (wait) {



			// Abort if there are pending holds or we're already ready

			if (wait === true ? --jQuery.readyWait : jQuery.isReady) {

				return;

			}



			// Remember that the DOM is ready

			jQuery.isReady = true;



			// If a normal DOM Ready event fired, decrement, and wait if need be

			if (wait !== true && --jQuery.readyWait > 0) {

				return;

			}



			// If there are functions bound, to execute

			readyList.resolveWith(document, [jQuery]);

		}

	});



	jQuery.ready.then = readyList.then;



	// The ready event handler and self cleanup method

	function completed() {

		document.removeEventListener("DOMContentLoaded", completed);

		window.removeEventListener("load", completed);

		jQuery.ready();

	}



	// Catch cases where $(document).ready() is called

	// after the browser event has already occurred.

	// Support: IE <=9 - 10 only

	// Older IE sometimes signals "interactive" too soon

	if (document.readyState === "complete" ||

		(document.readyState !== "loading" && !document.documentElement.doScroll)) {



		// Handle it asynchronously to allow scripts the opportunity to delay ready

		window.setTimeout(jQuery.ready);



	} else {



		// Use the handy event callback

		document.addEventListener("DOMContentLoaded", completed);



		// A fallback to window.onload, that will always work

		window.addEventListener("load", completed);

	}









	// Multifunctional method to get and set values of a collection

	// The value/s can optionally be executed if it's a function

	var access = function (elems, fn, key, value, chainable, emptyGet, raw) {

		var i = 0,

			len = elems.length,

			bulk = key == null;



		// Sets many values

		if (toType(key) === "object") {

			chainable = true;

			for (i in key) {

				access(elems, fn, i, key[i], true, emptyGet, raw);

			}



			// Sets one value

		} else if (value !== undefined) {

			chainable = true;



			if (!isFunction(value)) {

				raw = true;

			}



			if (bulk) {



				// Bulk operations run against the entire set

				if (raw) {

					fn.call(elems, value);

					fn = null;



					// ...except when executing function values

				} else {

					bulk = fn;

					fn = function (elem, _key, value) {

						return bulk.call(jQuery(elem), value);

					};

				}

			}



			if (fn) {

				for (; i < len; i++) {

					fn(

						elems[i], key, raw ?

						value :

						value.call(elems[i], i, fn(elems[i], key))

					);

				}

			}

		}



		if (chainable) {

			return elems;

		}



		// Gets

		if (bulk) {

			return fn.call(elems);

		}



		return len ? fn(elems[0], key) : emptyGet;

	};





	// Matches dashed string for camelizing

	var rmsPrefix = /^-ms-/,

		rdashAlpha = /-([a-z])/g;



	// Used by camelCase as callback to replace()

	function fcamelCase(_all, letter) {

		return letter.toUpperCase();

	}



	// Convert dashed to camelCase; used by the css and data modules

	// Support: IE <=9 - 11, Edge 12 - 15

	// Microsoft forgot to hump their vendor prefix (trac-9572)

	function camelCase(string) {

		return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);

	}

	var acceptData = function (owner) {



		// Accepts only:

		//  - Node

		//    - Node.ELEMENT_NODE

		//    - Node.DOCUMENT_NODE

		//  - Object

		//    - Any

		return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);

	};









	function Data() {

		this.expando = jQuery.expando + Data.uid++;

	}



	Data.uid = 1;



	Data.prototype = {



		cache: function (owner) {



			// Check if the owner object already has a cache

			var value = owner[this.expando];



			// If not, create one

			if (!value) {

				value = {};



				// We can accept data for non-element nodes in modern browsers,

				// but we should not, see trac-8335.

				// Always return an empty object.

				if (acceptData(owner)) {



					// If it is a node unlikely to be stringify-ed or looped over

					// use plain assignment

					if (owner.nodeType) {

						owner[this.expando] = value;



						// Otherwise secure it in a non-enumerable property

						// configurable must be true to allow the property to be

						// deleted when data is removed

					} else {

						Object.defineProperty(owner, this.expando, {

							value: value,

							configurable: true

						});

					}

				}

			}



			return value;

		},

		set: function (owner, data, value) {

			var prop,

				cache = this.cache(owner);



			// Handle: [ owner, key, value ] args

			// Always use camelCase key (gh-2257)

			if (typeof data === "string") {

				cache[camelCase(data)] = value;



				// Handle: [ owner, { properties } ] args

			} else {



				// Copy the properties one-by-one to the cache object

				for (prop in data) {

					cache[camelCase(prop)] = data[prop];

				}

			}

			return cache;

		},

		get: function (owner, key) {

			return key === undefined ?

				this.cache(owner) :



				// Always use camelCase key (gh-2257)

				owner[this.expando] && owner[this.expando][camelCase(key)];

		},

		access: function (owner, key, value) {



			// In cases where either:

			//

			//   1. No key was specified

			//   2. A string key was specified, but no value provided

			//

			// Take the "read" path and allow the get method to determine

			// which value to return, respectively either:

			//

			//   1. The entire cache object

			//   2. The data stored at the key

			//

			if (key === undefined ||

				((key && typeof key === "string") && value === undefined)) {



				return this.get(owner, key);

			}



			// When the key is not a string, or both a key and value

			// are specified, set or extend (existing objects) with either:

			//

			//   1. An object of properties

			//   2. A key and value

			//

			this.set(owner, key, value);



			// Since the "set" path can have two possible entry points

			// return the expected data based on which path was taken[*]

			return value !== undefined ? value : key;

		},

		remove: function (owner, key) {

			var i,

				cache = owner[this.expando];



			if (cache === undefined) {

				return;

			}



			if (key !== undefined) {



				// Support array or space separated string of keys

				if (Array.isArray(key)) {



					// If key is an array of keys...

					// We always set camelCase keys, so remove that.

					key = key.map(camelCase);

				} else {

					key = camelCase(key);



					// If a key with the spaces exists, use it.

					// Otherwise, create an array by matching non-whitespace

					key = key in cache ?

						[key] :

						(key.match(rnothtmlwhite) || []);

				}



				i = key.length;



				while (i--) {

					delete cache[key[i]];

				}

			}



			// Remove the expando if there's no more data

			if (key === undefined || jQuery.isEmptyObject(cache)) {



				// Support: Chrome <=35 - 45

				// Webkit & Blink performance suffers when deleting properties

				// from DOM nodes, so set to undefined instead

				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)

				if (owner.nodeType) {

					owner[this.expando] = undefined;

				} else {

					delete owner[this.expando];

				}

			}

		},

		hasData: function (owner) {

			var cache = owner[this.expando];

			return cache !== undefined && !jQuery.isEmptyObject(cache);

		}

	};

	var dataPriv = new Data();



	var dataUser = new Data();







	//	Implementation Summary

	//

	//	1. Enforce API surface and semantic compatibility with 1.9.x branch

	//	2. Improve the module's maintainability by reducing the storage

	//		paths to a single mechanism.

	//	3. Use the same single mechanism to support "private" and "user" data.

	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)

	//	5. Avoid exposing implementation details on user objects (eg. expando properties)

	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014



	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,

		rmultiDash = /[A-Z]/g;



	function getData(data) {

		if (data === "true") {

			return true;

		}



		if (data === "false") {

			return false;

		}



		if (data === "null") {

			return null;

		}



		// Only convert to a number if it doesn't change the string

		if (data === +data + "") {

			return +data;

		}



		if (rbrace.test(data)) {

			return JSON.parse(data);

		}



		return data;

	}



	function dataAttr(elem, key, data) {

		var name;



		// If nothing was found internally, try to fetch any

		// data from the HTML5 data-* attribute

		if (data === undefined && elem.nodeType === 1) {

			name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();

			data = elem.getAttribute(name);



			if (typeof data === "string") {

				try {

					data = getData(data);

				} catch (e) { }



				// Make sure we set the data so it isn't changed later

				dataUser.set(elem, key, data);

			} else {

				data = undefined;

			}

		}

		return data;

	}



	jQuery.extend({

		hasData: function (elem) {

			return dataUser.hasData(elem) || dataPriv.hasData(elem);

		},



		data: function (elem, name, data) {

			return dataUser.access(elem, name, data);

		},



		removeData: function (elem, name) {

			dataUser.remove(elem, name);

		},



		// TODO: Now that all calls to _data and _removeData have been replaced

		// with direct calls to dataPriv methods, these can be deprecated.

		_data: function (elem, name, data) {

			return dataPriv.access(elem, name, data);

		},



		_removeData: function (elem, name) {

			dataPriv.remove(elem, name);

		}

	});



	jQuery.fn.extend({

		data: function (key, value) {

			var i, name, data,

				elem = this[0],

				attrs = elem && elem.attributes;



			// Gets all values

			if (key === undefined) {

				if (this.length) {

					data = dataUser.get(elem);



					if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {

						i = attrs.length;

						while (i--) {



							// Support: IE 11 only

							// The attrs elements can be null (trac-14894)

							if (attrs[i]) {

								name = attrs[i].name;

								if (name.indexOf("data-") === 0) {

									name = camelCase(name.slice(5));

									dataAttr(elem, name, data[name]);

								}

							}

						}

						dataPriv.set(elem, "hasDataAttrs", true);

					}

				}



				return data;

			}



			// Sets multiple values

			if (typeof key === "object") {

				return this.each(function () {

					dataUser.set(this, key);

				});

			}



			return access(this, function (value) {

				var data;



				// The calling jQuery object (element matches) is not empty

				// (and therefore has an element appears at this[ 0 ]) and the

				// `value` parameter was not undefined. An empty jQuery object

				// will result in `undefined` for elem = this[ 0 ] which will

				// throw an exception if an attempt to read a data cache is made.

				if (elem && value === undefined) {



					// Attempt to get data from the cache

					// The key will always be camelCased in Data

					data = dataUser.get(elem, key);

					if (data !== undefined) {

						return data;

					}



					// Attempt to "discover" the data in

					// HTML5 custom data-* attrs

					data = dataAttr(elem, key);

					if (data !== undefined) {

						return data;

					}



					// We tried really hard, but the data doesn't exist.

					return;

				}



				// Set the data...

				this.each(function () {



					// We always store the camelCased key

					dataUser.set(this, key, value);

				});

			}, null, value, arguments.length > 1, null, true);

		},



		removeData: function (key) {

			return this.each(function () {

				dataUser.remove(this, key);

			});

		}

	});





	jQuery.extend({

		queue: function (elem, type, data) {

			var queue;



			if (elem) {

				type = (type || "fx") + "queue";

				queue = dataPriv.get(elem, type);



				// Speed up dequeue by getting out quickly if this is just a lookup

				if (data) {

					if (!queue || Array.isArray(data)) {

						queue = dataPriv.access(elem, type, jQuery.makeArray(data));

					} else {

						queue.push(data);

					}

				}

				return queue || [];

			}

		},



		dequeue: function (elem, type) {

			type = type || "fx";



			var queue = jQuery.queue(elem, type),

				startLength = queue.length,

				fn = queue.shift(),

				hooks = jQuery._queueHooks(elem, type),

				next = function () {

					jQuery.dequeue(elem, type);

				};



			// If the fx queue is dequeued, always remove the progress sentinel

			if (fn === "inprogress") {

				fn = queue.shift();

				startLength--;

			}



			if (fn) {



				// Add a progress sentinel to prevent the fx queue from being

				// automatically dequeued

				if (type === "fx") {

					queue.unshift("inprogress");

				}



				// Clear up the last queue stop function

				delete hooks.stop;

				fn.call(elem, next, hooks);

			}



			if (!startLength && hooks) {

				hooks.empty.fire();

			}

		},



		// Not public - generate a queueHooks object, or return the current one

		_queueHooks: function (elem, type) {

			var key = type + "queueHooks";

			return dataPriv.get(elem, key) || dataPriv.access(elem, key, {

				empty: jQuery.Callbacks("once memory").add(function () {

					dataPriv.remove(elem, [type + "queue", key]);

				})

			});

		}

	});



	jQuery.fn.extend({

		queue: function (type, data) {

			var setter = 2;



			if (typeof type !== "string") {

				data = type;

				type = "fx";

				setter--;

			}



			if (arguments.length < setter) {

				return jQuery.queue(this[0], type);

			}



			return data === undefined ?

				this :

				this.each(function () {

					var queue = jQuery.queue(this, type, data);



					// Ensure a hooks for this queue

					jQuery._queueHooks(this, type);



					if (type === "fx" && queue[0] !== "inprogress") {

						jQuery.dequeue(this, type);

					}

				});

		},

		dequeue: function (type) {

			return this.each(function () {

				jQuery.dequeue(this, type);

			});

		},

		clearQueue: function (type) {

			return this.queue(type || "fx", []);

		},



		// Get a promise resolved when queues of a certain type

		// are emptied (fx is the type by default)

		promise: function (type, obj) {

			var tmp,

				count = 1,

				defer = jQuery.Deferred(),

				elements = this,

				i = this.length,

				resolve = function () {

					if (!(--count)) {

						defer.resolveWith(elements, [elements]);

					}

				};



			if (typeof type !== "string") {

				obj = type;

				type = undefined;

			}

			type = type || "fx";



			while (i--) {

				tmp = dataPriv.get(elements[i], type + "queueHooks");

				if (tmp && tmp.empty) {

					count++;

					tmp.empty.add(resolve);

				}

			}

			resolve();

			return defer.promise(obj);

		}

	});

	var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;



	var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");





	var cssExpand = ["Top", "Right", "Bottom", "Left"];



	var documentElement = document.documentElement;







	var isAttached = function (elem) {

		return jQuery.contains(elem.ownerDocument, elem);

	},

		composed = { composed: true };



	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only

	// Check attachment across shadow DOM boundaries when possible (gh-3504)

	// Support: iOS 10.0-10.2 only

	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,

	// leading to errors. We need to check for `getRootNode`.

	if (documentElement.getRootNode) {

		isAttached = function (elem) {

			return jQuery.contains(elem.ownerDocument, elem) ||

				elem.getRootNode(composed) === elem.ownerDocument;

		};

	}

	var isHiddenWithinTree = function (elem, el) {



		// isHiddenWithinTree might be called from jQuery#filter function;

		// in that case, element will be second argument

		elem = el || elem;



		// Inline style trumps all

		return elem.style.display === "none" ||

			elem.style.display === "" &&



			// Otherwise, check computed style

			// Support: Firefox <=43 - 45

			// Disconnected elements can have computed display: none, so first confirm that elem is

			// in the document.

			isAttached(elem) &&



			jQuery.css(elem, "display") === "none";

	};







	function adjustCSS(elem, prop, valueParts, tween) {

		var adjusted, scale,

			maxIterations = 20,

			currentValue = tween ?

				function () {

					return tween.cur();

				} :

				function () {

					return jQuery.css(elem, prop, "");

				},

			initial = currentValue(),

			unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),



			// Starting value computation is required for potential unit mismatches

			initialInUnit = elem.nodeType &&

				(jQuery.cssNumber[prop] || unit !== "px" && +initial) &&

				rcssNum.exec(jQuery.css(elem, prop));



		if (initialInUnit && initialInUnit[3] !== unit) {



			// Support: Firefox <=54

			// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)

			initial = initial / 2;



			// Trust units reported by jQuery.css

			unit = unit || initialInUnit[3];



			// Iteratively approximate from a nonzero starting point

			initialInUnit = +initial || 1;



			while (maxIterations--) {



				// Evaluate and update our best guess (doubling guesses that zero out).

				// Finish if the scale equals or crosses 1 (making the old*new product non-positive).

				jQuery.style(elem, prop, initialInUnit + unit);

				if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {

					maxIterations = 0;

				}

				initialInUnit = initialInUnit / scale;



			}



			initialInUnit = initialInUnit * 2;

			jQuery.style(elem, prop, initialInUnit + unit);



			// Make sure we update the tween properties later on

			valueParts = valueParts || [];

		}



		if (valueParts) {

			initialInUnit = +initialInUnit || +initial || 0;



			// Apply relative offset (+=/-=) if specified

			adjusted = valueParts[1] ?

				initialInUnit + (valueParts[1] + 1) * valueParts[2] :

				+valueParts[2];

			if (tween) {

				tween.unit = unit;

				tween.start = initialInUnit;

				tween.end = adjusted;

			}

		}

		return adjusted;

	}





	var defaultDisplayMap = {};



	function getDefaultDisplay(elem) {

		var temp,

			doc = elem.ownerDocument,

			nodeName = elem.nodeName,

			display = defaultDisplayMap[nodeName];



		if (display) {

			return display;

		}



		temp = doc.body.appendChild(doc.createElement(nodeName));

		display = jQuery.css(temp, "display");



		temp.parentNode.removeChild(temp);



		if (display === "none") {

			display = "block";

		}

		defaultDisplayMap[nodeName] = display;



		return display;

	}



	function showHide(elements, show) {

		var display, elem,

			values = [],

			index = 0,

			length = elements.length;



		// Determine new display value for elements that need to change

		for (; index < length; index++) {

			elem = elements[index];

			if (!elem.style) {

				continue;

			}



			display = elem.style.display;

			if (show) {



				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)

				// check is required in this first loop unless we have a nonempty display value (either

				// inline or about-to-be-restored)

				if (display === "none") {

					values[index] = dataPriv.get(elem, "display") || null;

					if (!values[index]) {

						elem.style.display = "";

					}

				}

				if (elem.style.display === "" && isHiddenWithinTree(elem)) {

					values[index] = getDefaultDisplay(elem);

				}

			} else {

				if (display !== "none") {

					values[index] = "none";



					// Remember what we're overwriting

					dataPriv.set(elem, "display", display);

				}

			}

		}



		// Set the display of the elements in a second loop to avoid constant reflow

		for (index = 0; index < length; index++) {

			if (values[index] != null) {

				elements[index].style.display = values[index];

			}

		}



		return elements;

	}



	jQuery.fn.extend({

		show: function () {

			return showHide(this, true);

		},

		hide: function () {

			return showHide(this);

		},

		toggle: function (state) {

			if (typeof state === "boolean") {

				return state ? this.show() : this.hide();

			}



			return this.each(function () {

				if (isHiddenWithinTree(this)) {

					jQuery(this).show();

				} else {

					jQuery(this).hide();

				}

			});

		}

	});

	var rcheckableType = (/^(?:checkbox|radio)$/i);



	var rtagName = (/<([a-z][^\/\0>\x20\t\r\n\f]*)/i);



	var rscriptType = (/^$|^module$|\/(?:java|ecma)script/i);







	(function () {

		var fragment = document.createDocumentFragment(),

			div = fragment.appendChild(document.createElement("div")),

			input = document.createElement("input");



		// Support: Android 4.0 - 4.3 only

		// Check state lost if the name is set (trac-11217)

		// Support: Windows Web Apps (WWA)

		// `name` and `type` must use .setAttribute for WWA (trac-14901)

		input.setAttribute("type", "radio");

		input.setAttribute("checked", "checked");

		input.setAttribute("name", "t");



		div.appendChild(input);



		// Support: Android <=4.1 only

		// Older WebKit doesn't clone checked state correctly in fragments

		support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;



		// Support: IE <=11 only

		// Make sure textarea (and checkbox) defaultValue is properly cloned

		div.innerHTML = "<textarea>x</textarea>";

		support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;



		// Support: IE <=9 only

		// IE <=9 replaces <option> tags with their contents when inserted outside of

		// the select element.

		div.innerHTML = "<option></option>";

		support.option = !!div.lastChild;

	})();





	// We have to close these tags to support XHTML (trac-13200)

	var wrapMap = {



		// XHTML parsers do not magically insert elements in the

		// same way that tag soup parsers do. So we cannot shorten

		// this by omitting <tbody> or other required elements.

		thead: [1, "<table>", "</table>"],

		col: [2, "<table><colgroup>", "</colgroup></table>"],

		tr: [2, "<table><tbody>", "</tbody></table>"],

		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],



		_default: [0, "", ""]

	};



	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;

	wrapMap.th = wrapMap.td;



	// Support: IE <=9 only

	if (!support.option) {

		wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];

	}





	function getAll(context, tag) {



		// Support: IE <=9 - 11 only

		// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)

		var ret;



		if (typeof context.getElementsByTagName !== "undefined") {

			ret = context.getElementsByTagName(tag || "*");



		} else if (typeof context.querySelectorAll !== "undefined") {

			ret = context.querySelectorAll(tag || "*");



		} else {

			ret = [];

		}



		if (tag === undefined || tag && nodeName(context, tag)) {

			return jQuery.merge([context], ret);

		}



		return ret;

	}





	// Mark scripts as having already been evaluated

	function setGlobalEval(elems, refElements) {

		var i = 0,

			l = elems.length;



		for (; i < l; i++) {

			dataPriv.set(

				elems[i],

				"globalEval",

				!refElements || dataPriv.get(refElements[i], "globalEval")

			);

		}

	}





	var rhtml = /<|&#?\w+;/;



	function buildFragment(elems, context, scripts, selection, ignored) {

		var elem, tmp, tag, wrap, attached, j,

			fragment = context.createDocumentFragment(),

			nodes = [],

			i = 0,

			l = elems.length;



		for (; i < l; i++) {

			elem = elems[i];



			if (elem || elem === 0) {



				// Add nodes directly

				if (toType(elem) === "object") {



					// Support: Android <=4.0 only, PhantomJS 1 only

					// push.apply(_, arraylike) throws on ancient WebKit

					jQuery.merge(nodes, elem.nodeType ? [elem] : elem);



					// Convert non-html into a text node

				} else if (!rhtml.test(elem)) {

					nodes.push(context.createTextNode(elem));



					// Convert html into DOM nodes

				} else {

					tmp = tmp || fragment.appendChild(context.createElement("div"));



					// Deserialize a standard representation

					tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();

					wrap = wrapMap[tag] || wrapMap._default;

					tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];



					// Descend through wrappers to the right content

					j = wrap[0];

					while (j--) {

						tmp = tmp.lastChild;

					}



					// Support: Android <=4.0 only, PhantomJS 1 only

					// push.apply(_, arraylike) throws on ancient WebKit

					jQuery.merge(nodes, tmp.childNodes);



					// Remember the top-level container

					tmp = fragment.firstChild;



					// Ensure the created nodes are orphaned (trac-12392)

					tmp.textContent = "";

				}

			}

		}



		// Remove wrapper from fragment

		fragment.textContent = "";



		i = 0;

		while ((elem = nodes[i++])) {



			// Skip elements already in the context collection (trac-4087)

			if (selection && jQuery.inArray(elem, selection) > -1) {

				if (ignored) {

					ignored.push(elem);

				}

				continue;

			}



			attached = isAttached(elem);



			// Append to fragment

			tmp = getAll(fragment.appendChild(elem), "script");



			// Preserve script evaluation history

			if (attached) {

				setGlobalEval(tmp);

			}



			// Capture executables

			if (scripts) {

				j = 0;

				while ((elem = tmp[j++])) {

					if (rscriptType.test(elem.type || "")) {

						scripts.push(elem);

					}

				}

			}

		}



		return fragment;

	}





	var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;



	function returnTrue() {

		return true;

	}



	function returnFalse() {

		return false;

	}



	function on(elem, types, selector, data, fn, one) {

		var origFn, type;



		// Types can be a map of types/handlers

		if (typeof types === "object") {



			// ( types-Object, selector, data )

			if (typeof selector !== "string") {



				// ( types-Object, data )

				data = data || selector;

				selector = undefined;

			}

			for (type in types) {

				on(elem, type, selector, data, types[type], one);

			}

			return elem;

		}



		if (data == null && fn == null) {



			// ( types, fn )

			fn = selector;

			data = selector = undefined;

		} else if (fn == null) {

			if (typeof selector === "string") {



				// ( types, selector, fn )

				fn = data;

				data = undefined;

			} else {



				// ( types, data, fn )

				fn = data;

				data = selector;

				selector = undefined;

			}

		}

		if (fn === false) {

			fn = returnFalse;

		} else if (!fn) {

			return elem;

		}



		if (one === 1) {

			origFn = fn;

			fn = function (event) {



				// Can use an empty set, since event contains the info

				jQuery().off(event);

				return origFn.apply(this, arguments);

			};



			// Use same guid so caller can remove using origFn

			fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);

		}

		return elem.each(function () {

			jQuery.event.add(this, types, fn, data, selector);

		});

	}



	/*

	 * Helper functions for managing events -- not part of the public interface.

	 * Props to Dean Edwards' addEvent library for many of the ideas.

	 */

	jQuery.event = {



		global: {},



		add: function (elem, types, handler, data, selector) {



			var handleObjIn, eventHandle, tmp,

				events, t, handleObj,

				special, handlers, type, namespaces, origType,

				elemData = dataPriv.get(elem);



			// Only attach events to objects that accept data

			if (!acceptData(elem)) {

				return;

			}



			// Caller can pass in an object of custom data in lieu of the handler

			if (handler.handler) {

				handleObjIn = handler;

				handler = handleObjIn.handler;

				selector = handleObjIn.selector;

			}



			// Ensure that invalid selectors throw exceptions at attach time

			// Evaluate against documentElement in case elem is a non-element node (e.g., document)

			if (selector) {

				jQuery.find.matchesSelector(documentElement, selector);

			}



			// Make sure that the handler has a unique ID, used to find/remove it later

			if (!handler.guid) {

				handler.guid = jQuery.guid++;

			}



			// Init the element's event structure and main handler, if this is the first

			if (!(events = elemData.events)) {

				events = elemData.events = Object.create(null);

			}

			if (!(eventHandle = elemData.handle)) {

				eventHandle = elemData.handle = function (e) {



					// Discard the second event of a jQuery.event.trigger() and

					// when an event is called after a page has unloaded

					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?

						jQuery.event.dispatch.apply(elem, arguments) : undefined;

				};

			}



			// Handle multiple events separated by a space

			types = (types || "").match(rnothtmlwhite) || [""];

			t = types.length;

			while (t--) {

				tmp = rtypenamespace.exec(types[t]) || [];

				type = origType = tmp[1];

				namespaces = (tmp[2] || "").split(".").sort();



				// There *must* be a type, no attaching namespace-only handlers

				if (!type) {

					continue;

				}



				// If event changes its type, use the special event handlers for the changed type

				special = jQuery.event.special[type] || {};



				// If selector defined, determine special event api type, otherwise given type

				type = (selector ? special.delegateType : special.bindType) || type;



				// Update special based on newly reset type

				special = jQuery.event.special[type] || {};



				// handleObj is passed to all event handlers

				handleObj = jQuery.extend({

					type: type,

					origType: origType,

					data: data,

					handler: handler,

					guid: handler.guid,

					selector: selector,

					needsContext: selector && jQuery.expr.match.needsContext.test(selector),

					namespace: namespaces.join(".")

				}, handleObjIn);



				// Init the event handler queue if we're the first

				if (!(handlers = events[type])) {

					handlers = events[type] = [];

					handlers.delegateCount = 0;



					// Only use addEventListener if the special events handler returns false

					if (!special.setup ||

						special.setup.call(elem, data, namespaces, eventHandle) === false) {



						if (elem.addEventListener) {

							elem.addEventListener(type, eventHandle);

						}

					}

				}



				if (special.add) {

					special.add.call(elem, handleObj);



					if (!handleObj.handler.guid) {

						handleObj.handler.guid = handler.guid;

					}

				}



				// Add to the element's handler list, delegates in front

				if (selector) {

					handlers.splice(handlers.delegateCount++, 0, handleObj);

				} else {

					handlers.push(handleObj);

				}



				// Keep track of which events have ever been used, for event optimization

				jQuery.event.global[type] = true;

			}



		},



		// Detach an event or set of events from an element

		remove: function (elem, types, handler, selector, mappedTypes) {



			var j, origCount, tmp,

				events, t, handleObj,

				special, handlers, type, namespaces, origType,

				elemData = dataPriv.hasData(elem) && dataPriv.get(elem);



			if (!elemData || !(events = elemData.events)) {

				return;

			}



			// Once for each type.namespace in types; type may be omitted

			types = (types || "").match(rnothtmlwhite) || [""];

			t = types.length;

			while (t--) {

				tmp = rtypenamespace.exec(types[t]) || [];

				type = origType = tmp[1];

				namespaces = (tmp[2] || "").split(".").sort();



				// Unbind all events (on this namespace, if provided) for the element

				if (!type) {

					for (type in events) {

						jQuery.event.remove(elem, type + types[t], handler, selector, true);

					}

					continue;

				}



				special = jQuery.event.special[type] || {};

				type = (selector ? special.delegateType : special.bindType) || type;

				handlers = events[type] || [];

				tmp = tmp[2] &&

					new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");



				// Remove matching events

				origCount = j = handlers.length;

				while (j--) {

					handleObj = handlers[j];



					if ((mappedTypes || origType === handleObj.origType) &&

						(!handler || handler.guid === handleObj.guid) &&

						(!tmp || tmp.test(handleObj.namespace)) &&

						(!selector || selector === handleObj.selector ||

							selector === "**" && handleObj.selector)) {

						handlers.splice(j, 1);



						if (handleObj.selector) {

							handlers.delegateCount--;

						}

						if (special.remove) {

							special.remove.call(elem, handleObj);

						}

					}

				}



				// Remove generic event handler if we removed something and no more handlers exist

				// (avoids potential for endless recursion during removal of special event handlers)

				if (origCount && !handlers.length) {

					if (!special.teardown ||

						special.teardown.call(elem, namespaces, elemData.handle) === false) {



						jQuery.removeEvent(elem, type, elemData.handle);

					}



					delete events[type];

				}

			}



			// Remove data and the expando if it's no longer used

			if (jQuery.isEmptyObject(events)) {

				dataPriv.remove(elem, "handle events");

			}

		},



		dispatch: function (nativeEvent) {



			var i, j, ret, matched, handleObj, handlerQueue,

				args = new Array(arguments.length),



				// Make a writable jQuery.Event from the native event object

				event = jQuery.event.fix(nativeEvent),



				handlers = (

					dataPriv.get(this, "events") || Object.create(null)

				)[event.type] || [],

				special = jQuery.event.special[event.type] || {};



			// Use the fix-ed jQuery.Event rather than the (read-only) native event

			args[0] = event;



			for (i = 1; i < arguments.length; i++) {

				args[i] = arguments[i];

			}



			event.delegateTarget = this;



			// Call the preDispatch hook for the mapped type, and let it bail if desired

			if (special.preDispatch && special.preDispatch.call(this, event) === false) {

				return;

			}



			// Determine handlers

			handlerQueue = jQuery.event.handlers.call(this, event, handlers);



			// Run delegates first; they may want to stop propagation beneath us

			i = 0;

			while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {

				event.currentTarget = matched.elem;



				j = 0;

				while ((handleObj = matched.handlers[j++]) &&

					!event.isImmediatePropagationStopped()) {



					// If the event is namespaced, then each handler is only invoked if it is

					// specially universal or its namespaces are a superset of the event's.

					if (!event.rnamespace || handleObj.namespace === false ||

						event.rnamespace.test(handleObj.namespace)) {



						event.handleObj = handleObj;

						event.data = handleObj.data;



						ret = ((jQuery.event.special[handleObj.origType] || {}).handle ||

							handleObj.handler).apply(matched.elem, args);



						if (ret !== undefined) {

							if ((event.result = ret) === false) {

								event.preventDefault();

								event.stopPropagation();

							}

						}

					}

				}

			}



			// Call the postDispatch hook for the mapped type

			if (special.postDispatch) {

				special.postDispatch.call(this, event);

			}



			return event.result;

		},



		handlers: function (event, handlers) {

			var i, handleObj, sel, matchedHandlers, matchedSelectors,

				handlerQueue = [],

				delegateCount = handlers.delegateCount,

				cur = event.target;



			// Find delegate handlers

			if (delegateCount &&



				// Support: IE <=9

				// Black-hole SVG <use> instance trees (trac-13180)

				cur.nodeType &&



				// Support: Firefox <=42

				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)

				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click

				// Support: IE 11 only

				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)

				!(event.type === "click" && event.button >= 1)) {



				for (; cur !== this; cur = cur.parentNode || this) {



					// Don't check non-elements (trac-13208)

					// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)

					if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {

						matchedHandlers = [];

						matchedSelectors = {};

						for (i = 0; i < delegateCount; i++) {

							handleObj = handlers[i];



							// Don't conflict with Object.prototype properties (trac-13203)

							sel = handleObj.selector + " ";



							if (matchedSelectors[sel] === undefined) {

								matchedSelectors[sel] = handleObj.needsContext ?

									jQuery(sel, this).index(cur) > -1 :

									jQuery.find(sel, this, null, [cur]).length;

							}

							if (matchedSelectors[sel]) {

								matchedHandlers.push(handleObj);

							}

						}

						if (matchedHandlers.length) {

							handlerQueue.push({ elem: cur, handlers: matchedHandlers });

						}

					}

				}

			}



			// Add the remaining (directly-bound) handlers

			cur = this;

			if (delegateCount < handlers.length) {

				handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });

			}



			return handlerQueue;

		},



		addProp: function (name, hook) {

			Object.defineProperty(jQuery.Event.prototype, name, {

				enumerable: true,

				configurable: true,



				get: isFunction(hook) ?

					function () {

						if (this.originalEvent) {

							return hook(this.originalEvent);

						}

					} :

					function () {

						if (this.originalEvent) {

							return this.originalEvent[name];

						}

					},



				set: function (value) {

					Object.defineProperty(this, name, {

						enumerable: true,

						configurable: true,

						writable: true,

						value: value

					});

				}

			});

		},



		fix: function (originalEvent) {

			return originalEvent[jQuery.expando] ?

				originalEvent :

				new jQuery.Event(originalEvent);

		},



		special: {

			load: {



				// Prevent triggered image.load events from bubbling to window.load

				noBubble: true

			},

			click: {



				// Utilize native event to ensure correct state for checkable inputs

				setup: function (data) {



					// For mutual compressibility with _default, replace `this` access with a local var.

					// `|| data` is dead code meant only to preserve the variable through minification.

					var el = this || data;



					// Claim the first handler

					if (rcheckableType.test(el.type) &&

						el.click && nodeName(el, "input")) {



						// dataPriv.set( el, "click", ... )

						leverageNative(el, "click", true);

					}



					// Return false to allow normal processing in the caller

					return false;

				},

				trigger: function (data) {



					// For mutual compressibility with _default, replace `this` access with a local var.

					// `|| data` is dead code meant only to preserve the variable through minification.

					var el = this || data;



					// Force setup before triggering a click

					if (rcheckableType.test(el.type) &&

						el.click && nodeName(el, "input")) {



						leverageNative(el, "click");

					}



					// Return non-false to allow normal event-path propagation

					return true;

				},



				// For cross-browser consistency, suppress native .click() on links

				// Also prevent it if we're currently inside a leveraged native-event stack

				_default: function (event) {

					var target = event.target;

					return rcheckableType.test(target.type) &&

						target.click && nodeName(target, "input") &&

						dataPriv.get(target, "click") ||

						nodeName(target, "a");

				}

			},



			beforeunload: {

				postDispatch: function (event) {



					// Support: Firefox 20+

					// Firefox doesn't alert if the returnValue field is not set.

					if (event.result !== undefined && event.originalEvent) {

						event.originalEvent.returnValue = event.result;

					}

				}

			}

		}

	};



	// Ensure the presence of an event listener that handles manually-triggered

	// synthetic events by interrupting progress until reinvoked in response to

	// *native* events that it fires directly, ensuring that state changes have

	// already occurred before other listeners are invoked.

	function leverageNative(el, type, isSetup) {



		// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add

		if (!isSetup) {

			if (dataPriv.get(el, type) === undefined) {

				jQuery.event.add(el, type, returnTrue);

			}

			return;

		}



		// Register the controller as a special universal handler for all event namespaces

		dataPriv.set(el, type, false);

		jQuery.event.add(el, type, {

			namespace: false,

			handler: function (event) {

				var result,

					saved = dataPriv.get(this, type);



				if ((event.isTrigger & 1) && this[type]) {



					// Interrupt processing of the outer synthetic .trigger()ed event

					if (!saved) {



						// Store arguments for use when handling the inner native event

						// There will always be at least one argument (an event object), so this array

						// will not be confused with a leftover capture object.

						saved = slice.call(arguments);

						dataPriv.set(this, type, saved);



						// Trigger the native event and capture its result

						this[type]();

						result = dataPriv.get(this, type);

						dataPriv.set(this, type, false);



						if (saved !== result) {



							// Cancel the outer synthetic event

							event.stopImmediatePropagation();

							event.preventDefault();



							return result;

						}



						// If this is an inner synthetic event for an event with a bubbling surrogate

						// (focus or blur), assume that the surrogate already propagated from triggering

						// the native event and prevent that from happening again here.

						// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the

						// bubbling surrogate propagates *after* the non-bubbling base), but that seems

						// less bad than duplication.

					} else if ((jQuery.event.special[type] || {}).delegateType) {

						event.stopPropagation();

					}



					// If this is a native event triggered above, everything is now in order

					// Fire an inner synthetic event with the original arguments

				} else if (saved) {



					// ...and capture the result

					dataPriv.set(this, type, jQuery.event.trigger(

						saved[0],

						saved.slice(1),

						this

					));



					// Abort handling of the native event by all jQuery handlers while allowing

					// native handlers on the same element to run. On target, this is achieved

					// by stopping immediate propagation just on the jQuery event. However,

					// the native event is re-wrapped by a jQuery one on each level of the

					// propagation so the only way to stop it for jQuery is to stop it for

					// everyone via native `stopPropagation()`. This is not a problem for

					// focus/blur which don't bubble, but it does also stop click on checkboxes

					// and radios. We accept this limitation.

					event.stopPropagation();

					event.isImmediatePropagationStopped = returnTrue;

				}

			}

		});

	}



	jQuery.removeEvent = function (elem, type, handle) {



		// This "if" is needed for plain objects

		if (elem.removeEventListener) {

			elem.removeEventListener(type, handle);

		}

	};



	jQuery.Event = function (src, props) {



		// Allow instantiation without the 'new' keyword

		if (!(this instanceof jQuery.Event)) {

			return new jQuery.Event(src, props);

		}



		// Event object

		if (src && src.type) {

			this.originalEvent = src;

			this.type = src.type;



			// Events bubbling up the document may have been marked as prevented

			// by a handler lower down the tree; reflect the correct value.

			this.isDefaultPrevented = src.defaultPrevented ||

				src.defaultPrevented === undefined &&



				// Support: Android <=2.3 only

				src.returnValue === false ?

				returnTrue :

				returnFalse;



			// Create target properties

			// Support: Safari <=6 - 7 only

			// Target should not be a text node (trac-504, trac-13143)

			this.target = (src.target && src.target.nodeType === 3) ?

				src.target.parentNode :

				src.target;



			this.currentTarget = src.currentTarget;

			this.relatedTarget = src.relatedTarget;



			// Event type

		} else {

			this.type = src;

		}



		// Put explicitly provided properties onto the event object

		if (props) {

			jQuery.extend(this, props);

		}



		// Create a timestamp if incoming event doesn't have one

		this.timeStamp = src && src.timeStamp || Date.now();



		// Mark it as fixed

		this[jQuery.expando] = true;

	};



	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding

	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html

	jQuery.Event.prototype = {

		constructor: jQuery.Event,

		isDefaultPrevented: returnFalse,

		isPropagationStopped: returnFalse,

		isImmediatePropagationStopped: returnFalse,

		isSimulated: false,



		preventDefault: function () {

			var e = this.originalEvent;



			this.isDefaultPrevented = returnTrue;



			if (e && !this.isSimulated) {

				e.preventDefault();

			}

		},

		stopPropagation: function () {

			var e = this.originalEvent;



			this.isPropagationStopped = returnTrue;



			if (e && !this.isSimulated) {

				e.stopPropagation();

			}

		},

		stopImmediatePropagation: function () {

			var e = this.originalEvent;



			this.isImmediatePropagationStopped = returnTrue;



			if (e && !this.isSimulated) {

				e.stopImmediatePropagation();

			}



			this.stopPropagation();

		}

	};



	// Includes all common event props including KeyEvent and MouseEvent specific props

	jQuery.each({

		altKey: true,

		bubbles: true,

		cancelable: true,

		changedTouches: true,

		ctrlKey: true,

		detail: true,

		eventPhase: true,

		metaKey: true,

		pageX: true,

		pageY: true,

		shiftKey: true,

		view: true,

		"char": true,

		code: true,

		charCode: true,

		key: true,

		keyCode: true,

		button: true,

		buttons: true,

		clientX: true,

		clientY: true,

		offsetX: true,

		offsetY: true,

		pointerId: true,

		pointerType: true,

		screenX: true,

		screenY: true,

		targetTouches: true,

		toElement: true,

		touches: true,

		which: true

	}, jQuery.event.addProp);



	jQuery.each({ focus: "focusin", blur: "focusout" }, function (type, delegateType) {



		function focusMappedHandler(nativeEvent) {

			if (document.documentMode) {



				// Support: IE 11+

				// Attach a single focusin/focusout handler on the document while someone wants

				// focus/blur. This is because the former are synchronous in IE while the latter

				// are async. In other browsers, all those handlers are invoked synchronously.



				// `handle` from private data would already wrap the event, but we need

				// to change the `type` here.

				var handle = dataPriv.get(this, "handle"),

					event = jQuery.event.fix(nativeEvent);

				event.type = nativeEvent.type === "focusin" ? "focus" : "blur";

				event.isSimulated = true;



				// First, handle focusin/focusout

				handle(nativeEvent);



				// ...then, handle focus/blur

				//

				// focus/blur don't bubble while focusin/focusout do; simulate the former by only

				// invoking the handler at the lower level.

				if (event.target === event.currentTarget) {



					// The setup part calls `leverageNative`, which, in turn, calls

					// `jQuery.event.add`, so event handle will already have been set

					// by this point.

					handle(event);

				}

			} else {



				// For non-IE browsers, attach a single capturing handler on the document

				// while someone wants focusin/focusout.

				jQuery.event.simulate(delegateType, nativeEvent.target,

					jQuery.event.fix(nativeEvent));

			}

		}



		jQuery.event.special[type] = {



			// Utilize native event if possible so blur/focus sequence is correct

			setup: function () {



				var attaches;



				// Claim the first handler

				// dataPriv.set( this, "focus", ... )

				// dataPriv.set( this, "blur", ... )

				leverageNative(this, type, true);



				if (document.documentMode) {



					// Support: IE 9 - 11+

					// We use the same native handler for focusin & focus (and focusout & blur)

					// so we need to coordinate setup & teardown parts between those events.

					// Use `delegateType` as the key as `type` is already used by `leverageNative`.

					attaches = dataPriv.get(this, delegateType);

					if (!attaches) {

						this.addEventListener(delegateType, focusMappedHandler);

					}

					dataPriv.set(this, delegateType, (attaches || 0) + 1);

				} else {



					// Return false to allow normal processing in the caller

					return false;

				}

			},

			trigger: function () {



				// Force setup before trigger

				leverageNative(this, type);



				// Return non-false to allow normal event-path propagation

				return true;

			},



			teardown: function () {

				var attaches;



				if (document.documentMode) {

					attaches = dataPriv.get(this, delegateType) - 1;

					if (!attaches) {

						this.removeEventListener(delegateType, focusMappedHandler);

						dataPriv.remove(this, delegateType);

					} else {

						dataPriv.set(this, delegateType, attaches);

					}

				} else {



					// Return false to indicate standard teardown should be applied

					return false;

				}

			},



			// Suppress native focus or blur if we're currently inside

			// a leveraged native-event stack

			_default: function (event) {

				return dataPriv.get(event.target, type);

			},



			delegateType: delegateType

		};



		// Support: Firefox <=44

		// Firefox doesn't have focus(in | out) events

		// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787

		//

		// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1

		// focus(in | out) events fire after focus & blur events,

		// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order

		// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

		//

		// Support: IE 9 - 11+

		// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,

		// attach a single handler for both events in IE.

		jQuery.event.special[delegateType] = {

			setup: function () {



				// Handle: regular nodes (via `this.ownerDocument`), window

				// (via `this.document`) & document (via `this`).

				var doc = this.ownerDocument || this.document || this,

					dataHolder = document.documentMode ? this : doc,

					attaches = dataPriv.get(dataHolder, delegateType);



				// Support: IE 9 - 11+

				// We use the same native handler for focusin & focus (and focusout & blur)

				// so we need to coordinate setup & teardown parts between those events.

				// Use `delegateType` as the key as `type` is already used by `leverageNative`.

				if (!attaches) {

					if (document.documentMode) {

						this.addEventListener(delegateType, focusMappedHandler);

					} else {

						doc.addEventListener(type, focusMappedHandler, true);

					}

				}

				dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);

			},

			teardown: function () {

				var doc = this.ownerDocument || this.document || this,

					dataHolder = document.documentMode ? this : doc,

					attaches = dataPriv.get(dataHolder, delegateType) - 1;



				if (!attaches) {

					if (document.documentMode) {

						this.removeEventListener(delegateType, focusMappedHandler);

					} else {

						doc.removeEventListener(type, focusMappedHandler, true);

					}

					dataPriv.remove(dataHolder, delegateType);

				} else {

					dataPriv.set(dataHolder, delegateType, attaches);

				}

			}

		};

	});



	// Create mouseenter/leave events using mouseover/out and event-time checks

	// so that event delegation works in jQuery.

	// Do the same for pointerenter/pointerleave and pointerover/pointerout

	//

	// Support: Safari 7 only

	// Safari sends mouseenter too often; see:

	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258

	// for the description of the bug (it existed in older Chrome versions as well).

	jQuery.each({

		mouseenter: "mouseover",

		mouseleave: "mouseout",

		pointerenter: "pointerover",

		pointerleave: "pointerout"

	}, function (orig, fix) {

		jQuery.event.special[orig] = {

			delegateType: fix,

			bindType: fix,



			handle: function (event) {

				var ret,

					target = this,

					related = event.relatedTarget,

					handleObj = event.handleObj;



				// For mouseenter/leave call the handler if related is outside the target.

				// NB: No relatedTarget if the mouse left/entered the browser window

				if (!related || (related !== target && !jQuery.contains(target, related))) {

					event.type = handleObj.origType;

					ret = handleObj.handler.apply(this, arguments);

					event.type = fix;

				}

				return ret;

			}

		};

	});



	jQuery.fn.extend({



		on: function (types, selector, data, fn) {

			return on(this, types, selector, data, fn);

		},

		one: function (types, selector, data, fn) {

			return on(this, types, selector, data, fn, 1);

		},

		off: function (types, selector, fn) {

			var handleObj, type;

			if (types && types.preventDefault && types.handleObj) {



				// ( event )  dispatched jQuery.Event

				handleObj = types.handleObj;

				jQuery(types.delegateTarget).off(

					handleObj.namespace ?

						handleObj.origType + "." + handleObj.namespace :

						handleObj.origType,

					handleObj.selector,

					handleObj.handler

				);

				return this;

			}

			if (typeof types === "object") {



				// ( types-object [, selector] )

				for (type in types) {

					this.off(type, selector, types[type]);

				}

				return this;

			}

			if (selector === false || typeof selector === "function") {



				// ( types [, fn] )

				fn = selector;

				selector = undefined;

			}

			if (fn === false) {

				fn = returnFalse;

			}

			return this.each(function () {

				jQuery.event.remove(this, types, fn, selector);

			});

		}

	});





	var



		// Support: IE <=10 - 11, Edge 12 - 13 only

		// In IE/Edge using regex groups here causes severe slowdowns.

		// See https://connect.microsoft.com/IE/feedback/details/1736512/

		rnoInnerhtml = /<script|<style|<link/i,



		// checked="checked" or checked

		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,



		rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;



	// Prefer a tbody over its parent table for containing new rows

	function manipulationTarget(elem, content) {

		if (nodeName(elem, "table") &&

			nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {



			return jQuery(elem).children("tbody")[0] || elem;

		}



		return elem;

	}



	// Replace/restore the type attribute of script elements for safe DOM manipulation

	function disableScript(elem) {

		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;

		return elem;

	}

	function restoreScript(elem) {

		if ((elem.type || "").slice(0, 5) === "true/") {

			elem.type = elem.type.slice(5);

		} else {

			elem.removeAttribute("type");

		}



		return elem;

	}



	function cloneCopyEvent(src, dest) {

		var i, l, type, pdataOld, udataOld, udataCur, events;



		if (dest.nodeType !== 1) {

			return;

		}



		// 1. Copy private data: events, handlers, etc.

		if (dataPriv.hasData(src)) {

			pdataOld = dataPriv.get(src);

			events = pdataOld.events;



			if (events) {

				dataPriv.remove(dest, "handle events");



				for (type in events) {

					for (i = 0, l = events[type].length; i < l; i++) {

						jQuery.event.add(dest, type, events[type][i]);

					}

				}

			}

		}



		// 2. Copy user data

		if (dataUser.hasData(src)) {

			udataOld = dataUser.access(src);

			udataCur = jQuery.extend({}, udataOld);



			dataUser.set(dest, udataCur);

		}

	}



	// Fix IE bugs, see support tests

	function fixInput(src, dest) {

		var nodeName = dest.nodeName.toLowerCase();



		// Fails to persist the checked state of a cloned checkbox or radio button.

		if (nodeName === "input" && rcheckableType.test(src.type)) {

			dest.checked = src.checked;



			// Fails to return the selected option to the default selected state when cloning options

		} else if (nodeName === "input" || nodeName === "textarea") {

			dest.defaultValue = src.defaultValue;

		}

	}



	function domManip(collection, args, callback, ignored) {



		// Flatten any nested arrays

		args = flat(args);



		var fragment, first, scripts, hasScripts, node, doc,

			i = 0,

			l = collection.length,

			iNoClone = l - 1,

			value = args[0],

			valueIsFunction = isFunction(value);



		// We can't cloneNode fragments that contain checked, in WebKit

		if (valueIsFunction ||

			(l > 1 && typeof value === "string" &&

				!support.checkClone && rchecked.test(value))) {

			return collection.each(function (index) {

				var self = collection.eq(index);

				if (valueIsFunction) {

					args[0] = value.call(this, index, self.html());

				}

				domManip(self, args, callback, ignored);

			});

		}



		if (l) {

			fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);

			first = fragment.firstChild;



			if (fragment.childNodes.length === 1) {

				fragment = first;

			}



			// Require either new content or an interest in ignored elements to invoke the callback

			if (first || ignored) {

				scripts = jQuery.map(getAll(fragment, "script"), disableScript);

				hasScripts = scripts.length;



				// Use the original fragment for the last item

				// instead of the first because it can end up

				// being emptied incorrectly in certain situations (trac-8070).

				for (; i < l; i++) {

					node = fragment;



					if (i !== iNoClone) {

						node = jQuery.clone(node, true, true);



						// Keep references to cloned scripts for later restoration

						if (hasScripts) {



							// Support: Android <=4.0 only, PhantomJS 1 only

							// push.apply(_, arraylike) throws on ancient WebKit

							jQuery.merge(scripts, getAll(node, "script"));

						}

					}



					callback.call(collection[i], node, i);

				}



				if (hasScripts) {

					doc = scripts[scripts.length - 1].ownerDocument;



					// Re-enable scripts

					jQuery.map(scripts, restoreScript);



					// Evaluate executable scripts on first document insertion

					for (i = 0; i < hasScripts; i++) {

						node = scripts[i];

						if (rscriptType.test(node.type || "") &&

							!dataPriv.access(node, "globalEval") &&

							jQuery.contains(doc, node)) {



							if (node.src && (node.type || "").toLowerCase() !== "module") {



								// Optional AJAX dependency, but won't run scripts if not present

								if (jQuery._evalUrl && !node.noModule) {

									jQuery._evalUrl(node.src, {

										nonce: node.nonce || node.getAttribute("nonce")

									}, doc);

								}

							} else {



								// Unwrap a CDATA section containing script contents. This shouldn't be

								// needed as in XML documents they're already not visible when

								// inspecting element contents and in HTML documents they have no

								// meaning but we're preserving that logic for backwards compatibility.

								// This will be removed completely in 4.0. See gh-4904.

								DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);

							}

						}

					}

				}

			}

		}



		return collection;

	}



	function remove(elem, selector, keepData) {

		var node,

			nodes = selector ? jQuery.filter(selector, elem) : elem,

			i = 0;



		for (; (node = nodes[i]) != null; i++) {

			if (!keepData && node.nodeType === 1) {

				jQuery.cleanData(getAll(node));

			}



			if (node.parentNode) {

				if (keepData && isAttached(node)) {

					setGlobalEval(getAll(node, "script"));

				}

				node.parentNode.removeChild(node);

			}

		}



		return elem;

	}



	jQuery.extend({

		htmlPrefilter: function (html) {

			return html;

		},



		clone: function (elem, dataAndEvents, deepDataAndEvents) {

			var i, l, srcElements, destElements,

				clone = elem.cloneNode(true),

				inPage = isAttached(elem);



			// Fix IE cloning issues

			if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) &&

				!jQuery.isXMLDoc(elem)) {



				// We eschew jQuery#find here for performance reasons:

				// https://jsperf.com/getall-vs-sizzle/2

				destElements = getAll(clone);

				srcElements = getAll(elem);



				for (i = 0, l = srcElements.length; i < l; i++) {

					fixInput(srcElements[i], destElements[i]);

				}

			}



			// Copy the events from the original to the clone

			if (dataAndEvents) {

				if (deepDataAndEvents) {

					srcElements = srcElements || getAll(elem);

					destElements = destElements || getAll(clone);



					for (i = 0, l = srcElements.length; i < l; i++) {

						cloneCopyEvent(srcElements[i], destElements[i]);

					}

				} else {

					cloneCopyEvent(elem, clone);

				}

			}



			// Preserve script evaluation history

			destElements = getAll(clone, "script");

			if (destElements.length > 0) {

				setGlobalEval(destElements, !inPage && getAll(elem, "script"));

			}



			// Return the cloned set

			return clone;

		},



		cleanData: function (elems) {

			var data, elem, type,

				special = jQuery.event.special,

				i = 0;



			for (; (elem = elems[i]) !== undefined; i++) {

				if (acceptData(elem)) {

					if ((data = elem[dataPriv.expando])) {

						if (data.events) {

							for (type in data.events) {

								if (special[type]) {

									jQuery.event.remove(elem, type);



									// This is a shortcut to avoid jQuery.event.remove's overhead

								} else {

									jQuery.removeEvent(elem, type, data.handle);

								}

							}

						}



						// Support: Chrome <=35 - 45+

						// Assign undefined instead of using delete, see Data#remove

						elem[dataPriv.expando] = undefined;

					}

					if (elem[dataUser.expando]) {



						// Support: Chrome <=35 - 45+

						// Assign undefined instead of using delete, see Data#remove

						elem[dataUser.expando] = undefined;

					}

				}

			}

		}

	});



	jQuery.fn.extend({

		detach: function (selector) {

			return remove(this, selector, true);

		},



		remove: function (selector) {

			return remove(this, selector);

		},



		text: function (value) {

			return access(this, function (value) {

				return value === undefined ?

					jQuery.text(this) :

					this.empty().each(function () {

						if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {

							this.textContent = value;

						}

					});

			}, null, value, arguments.length);

		},



		append: function () {

			return domManip(this, arguments, function (elem) {

				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {

					var target = manipulationTarget(this, elem);

					target.appendChild(elem);

				}

			});

		},



		prepend: function () {

			return domManip(this, arguments, function (elem) {

				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {

					var target = manipulationTarget(this, elem);

					target.insertBefore(elem, target.firstChild);

				}

			});

		},



		before: function () {

			return domManip(this, arguments, function (elem) {

				if (this.parentNode) {

					this.parentNode.insertBefore(elem, this);

				}

			});

		},



		after: function () {

			return domManip(this, arguments, function (elem) {

				if (this.parentNode) {

					this.parentNode.insertBefore(elem, this.nextSibling);

				}

			});

		},



		empty: function () {

			var elem,

				i = 0;



			for (; (elem = this[i]) != null; i++) {

				if (elem.nodeType === 1) {



					// Prevent memory leaks

					jQuery.cleanData(getAll(elem, false));



					// Remove any remaining nodes

					elem.textContent = "";

				}

			}



			return this;

		},



		clone: function (dataAndEvents, deepDataAndEvents) {

			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;

			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;



			return this.map(function () {

				return jQuery.clone(this, dataAndEvents, deepDataAndEvents);

			});

		},



		html: function (value) {

			return access(this, function (value) {

				var elem = this[0] || {},

					i = 0,

					l = this.length;



				if (value === undefined && elem.nodeType === 1) {

					return elem.innerHTML;

				}



				// See if we can take a shortcut and just use innerHTML

				if (typeof value === "string" && !rnoInnerhtml.test(value) &&

					!wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {



					value = jQuery.htmlPrefilter(value);



					try {

						for (; i < l; i++) {

							elem = this[i] || {};



							// Remove element nodes and prevent memory leaks

							if (elem.nodeType === 1) {

								jQuery.cleanData(getAll(elem, false));

								elem.innerHTML = value;

							}

						}



						elem = 0;



						// If using innerHTML throws an exception, use the fallback method

					} catch (e) { }

				}



				if (elem) {

					this.empty().append(value);

				}

			}, null, value, arguments.length);

		},



		replaceWith: function () {

			var ignored = [];



			// Make the changes, replacing each non-ignored context element with the new content

			return domManip(this, arguments, function (elem) {

				var parent = this.parentNode;



				if (jQuery.inArray(this, ignored) < 0) {

					jQuery.cleanData(getAll(this));

					if (parent) {

						parent.replaceChild(elem, this);

					}

				}



				// Force callback invocation

			}, ignored);

		}

	});



	jQuery.each({

		appendTo: "append",

		prependTo: "prepend",

		insertBefore: "before",

		insertAfter: "after",

		replaceAll: "replaceWith"

	}, function (name, original) {

		jQuery.fn[name] = function (selector) {

			var elems,

				ret = [],

				insert = jQuery(selector),

				last = insert.length - 1,

				i = 0;



			for (; i <= last; i++) {

				elems = i === last ? this : this.clone(true);

				jQuery(insert[i])[original](elems);



				// Support: Android <=4.0 only, PhantomJS 1 only

				// .get() because push.apply(_, arraylike) throws on ancient WebKit

				push.apply(ret, elems.get());

			}



			return this.pushStack(ret);

		};

	});

	var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");



	var rcustomProp = /^--/;





	var getStyles = function (elem) {



		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)

		// IE throws on elements created in popups

		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"

		var view = elem.ownerDocument.defaultView;



		if (!view || !view.opener) {

			view = window;

		}



		return view.getComputedStyle(elem);

	};



	var swap = function (elem, options, callback) {

		var ret, name,

			old = {};



		// Remember the old values, and insert the new ones

		for (name in options) {

			old[name] = elem.style[name];

			elem.style[name] = options[name];

		}



		ret = callback.call(elem);



		// Revert the old values

		for (name in options) {

			elem.style[name] = old[name];

		}



		return ret;

	};





	var rboxStyle = new RegExp(cssExpand.join("|"), "i");







	(function () {



		// Executing both pixelPosition & boxSizingReliable tests require only one layout

		// so they're executed at the same time to save the second computation.

		function computeStyleTests() {



			// This is a singleton, we need to execute it only once

			if (!div) {

				return;

			}



			container.style.cssText = "position:absolute;left:-11111px;width:60px;" +

				"margin-top:1px;padding:0;border:0";

			div.style.cssText =

				"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +

				"margin:auto;border:1px;padding:1px;" +

				"width:60%;top:1%";

			documentElement.appendChild(container).appendChild(div);



			var divStyle = window.getComputedStyle(div);

			pixelPositionVal = divStyle.top !== "1%";



			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

			reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;



			// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3

			// Some styles come back with percentage values, even though they shouldn't

			div.style.right = "60%";

			pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;



			// Support: IE 9 - 11 only

			// Detect misreporting of content dimensions for box-sizing:border-box elements

			boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;



			// Support: IE 9 only

			// Detect overflow:scroll screwiness (gh-3699)

			// Support: Chrome <=64

			// Don't get tricked when zoom affects offsetWidth (gh-4029)

			div.style.position = "absolute";

			scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;



			documentElement.removeChild(container);



			// Nullify the div so it wouldn't be stored in the memory and

			// it will also be a sign that checks already performed

			div = null;

		}



		function roundPixelMeasures(measure) {

			return Math.round(parseFloat(measure));

		}



		var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,

			reliableTrDimensionsVal, reliableMarginLeftVal,

			container = document.createElement("div"),

			div = document.createElement("div");



		// Finish early in limited (non-browser) environments

		if (!div.style) {

			return;

		}



		// Support: IE <=9 - 11 only

		// Style of cloned element affects source element cloned (trac-8908)

		div.style.backgroundClip = "content-box";

		div.cloneNode(true).style.backgroundClip = "";

		support.clearCloneStyle = div.style.backgroundClip === "content-box";



		jQuery.extend(support, {

			boxSizingReliable: function () {

				computeStyleTests();

				return boxSizingReliableVal;

			},

			pixelBoxStyles: function () {

				computeStyleTests();

				return pixelBoxStylesVal;

			},

			pixelPosition: function () {

				computeStyleTests();

				return pixelPositionVal;

			},

			reliableMarginLeft: function () {

				computeStyleTests();

				return reliableMarginLeftVal;

			},

			scrollboxSize: function () {

				computeStyleTests();

				return scrollboxSizeVal;

			},



			// Support: IE 9 - 11+, Edge 15 - 18+

			// IE/Edge misreport `getComputedStyle` of table rows with width/height

			// set in CSS while `offset*` properties report correct values.

			// Behavior in IE 9 is more subtle than in newer versions & it passes

			// some versions of this test; make sure not to make it pass there!

			//

			// Support: Firefox 70+

			// Only Firefox includes border widths

			// in computed dimensions. (gh-4529)

			reliableTrDimensions: function () {

				var table, tr, trChild, trStyle;

				if (reliableTrDimensionsVal == null) {

					table = document.createElement("table");

					tr = document.createElement("tr");

					trChild = document.createElement("div");



					table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";

					tr.style.cssText = "box-sizing:content-box;border:1px solid";



					// Support: Chrome 86+

					// Height set through cssText does not get applied.

					// Computed height then comes back as 0.

					tr.style.height = "1px";

					trChild.style.height = "9px";



					// Support: Android 8 Chrome 86+

					// In our bodyBackground.html iframe,

					// display for all div elements is set to "inline",

					// which causes a problem only in Android 8 Chrome 86.

					// Ensuring the div is `display: block`

					// gets around this issue.

					trChild.style.display = "block";



					documentElement

						.appendChild(table)

						.appendChild(tr)

						.appendChild(trChild);



					trStyle = window.getComputedStyle(tr);

					reliableTrDimensionsVal = (parseInt(trStyle.height, 10) +

						parseInt(trStyle.borderTopWidth, 10) +

						parseInt(trStyle.borderBottomWidth, 10)) === tr.offsetHeight;



					documentElement.removeChild(table);

				}

				return reliableTrDimensionsVal;

			}

		});

	})();





	function curCSS(elem, name, computed) {

		var width, minWidth, maxWidth, ret,

			isCustomProp = rcustomProp.test(name),



			// Support: Firefox 51+

			// Retrieving style before computed somehow

			// fixes an issue with getting wrong values

			// on detached elements

			style = elem.style;



		computed = computed || getStyles(elem);



		// getPropertyValue is needed for:

		//   .css('filter') (IE 9 only, trac-12537)

		//   .css('--customProperty) (gh-3144)

		if (computed) {



			// Support: IE <=9 - 11+

			// IE only supports `"float"` in `getPropertyValue`; in computed styles

			// it's only available as `"cssFloat"`. We no longer modify properties

			// sent to `.css()` apart from camelCasing, so we need to check both.

			// Normally, this would create difference in behavior: if

			// `getPropertyValue` returns an empty string, the value returned

			// by `.css()` would be `undefined`. This is usually the case for

			// disconnected elements. However, in IE even disconnected elements

			// with no styles return `"none"` for `getPropertyValue( "float" )`

			ret = computed.getPropertyValue(name) || computed[name];



			if (isCustomProp && ret) {



				// Support: Firefox 105+, Chrome <=105+

				// Spec requires trimming whitespace for custom properties (gh-4926).

				// Firefox only trims leading whitespace. Chrome just collapses

				// both leading & trailing whitespace to a single space.

				//

				// Fall back to `undefined` if empty string returned.

				// This collapses a missing definition with property defined

				// and set to an empty string but there's no standard API

				// allowing us to differentiate them without a performance penalty

				// and returning `undefined` aligns with older jQuery.

				//

				// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED

				// as whitespace while CSS does not, but this is not a problem

				// because CSS preprocessing replaces them with U+000A LINE FEED

				// (which *is* CSS whitespace)

				// https://www.w3.org/TR/css-syntax-3/#input-preprocessing

				ret = ret.replace(rtrimCSS, "$1") || undefined;

			}



			if (ret === "" && !isAttached(elem)) {

				ret = jQuery.style(elem, name);

			}



			// A tribute to the "awesome hack by Dean Edwards"

			// Android Browser returns percentage for some values,

			// but width seems to be reliably pixels.

			// This is against the CSSOM draft spec:

			// https://drafts.csswg.org/cssom/#resolved-values

			if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {



				// Remember the original values

				width = style.width;

				minWidth = style.minWidth;

				maxWidth = style.maxWidth;



				// Put in the new values to get a computed value out

				style.minWidth = style.maxWidth = style.width = ret;

				ret = computed.width;



				// Revert the changed values

				style.width = width;

				style.minWidth = minWidth;

				style.maxWidth = maxWidth;

			}

		}



		return ret !== undefined ?



			// Support: IE <=9 - 11 only

			// IE returns zIndex value as an integer.

			ret + "" :

			ret;

	}





	function addGetHookIf(conditionFn, hookFn) {



		// Define the hook, we'll check on the first run if it's really needed.

		return {

			get: function () {

				if (conditionFn()) {



					// Hook not needed (or it's not possible to use it due

					// to missing dependency), remove it.

					delete this.get;

					return;

				}



				// Hook needed; redefine it so that the support test is not executed again.

				return (this.get = hookFn).apply(this, arguments);

			}

		};

	}





	var cssPrefixes = ["Webkit", "Moz", "ms"],

		emptyStyle = document.createElement("div").style,

		vendorProps = {};



	// Return a vendor-prefixed property or undefined

	function vendorPropName(name) {



		// Check for vendor prefixed names

		var capName = name[0].toUpperCase() + name.slice(1),

			i = cssPrefixes.length;



		while (i--) {

			name = cssPrefixes[i] + capName;

			if (name in emptyStyle) {

				return name;

			}

		}

	}



	// Return a potentially-mapped jQuery.cssProps or vendor prefixed property

	function finalPropName(name) {

		var final = jQuery.cssProps[name] || vendorProps[name];



		if (final) {

			return final;

		}

		if (name in emptyStyle) {

			return name;

		}

		return vendorProps[name] = vendorPropName(name) || name;

	}





	var



		// Swappable if display is none or starts with table

		// except "table", "table-cell", or "table-caption"

		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display

		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },

		cssNormalTransform = {

			letterSpacing: "0",

			fontWeight: "400"

		};



	function setPositiveNumber(_elem, value, subtract) {



		// Any relative (+/-) values have already been

		// normalized at this point

		var matches = rcssNum.exec(value);

		return matches ?



			// Guard against undefined "subtract", e.g., when used as in cssHooks

			Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") :

			value;

	}



	function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {

		var i = dimension === "width" ? 1 : 0,

			extra = 0,

			delta = 0,

			marginDelta = 0;



		// Adjustment may not be necessary

		if (box === (isBorderBox ? "border" : "content")) {

			return 0;

		}



		for (; i < 4; i += 2) {



			// Both box models exclude margin

			// Count margin delta separately to only add it after scroll gutter adjustment.

			// This is needed to make negative margins work with `outerHeight( true )` (gh-3982).

			if (box === "margin") {

				marginDelta += jQuery.css(elem, box + cssExpand[i], true, styles);

			}



			// If we get here with a content-box, we're seeking "padding" or "border" or "margin"

			if (!isBorderBox) {



				// Add padding

				delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);



				// For "border" or "margin", add border

				if (box !== "padding") {

					delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);



					// But still keep track of it otherwise

				} else {

					extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);

				}



				// If we get here with a border-box (content + padding + border), we're seeking "content" or

				// "padding" or "margin"

			} else {



				// For "content", subtract padding

				if (box === "content") {

					delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);

				}



				// For "content" or "padding", subtract border

				if (box !== "margin") {

					delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);

				}

			}

		}



		// Account for positive content-box scroll gutter when requested by providing computedVal

		if (!isBorderBox && computedVal >= 0) {



			// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border

			// Assuming integer scroll gutter, subtract the rest and round down

			delta += Math.max(0, Math.ceil(

				elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] -

				computedVal -

				delta -

				extra -

				0.5



				// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter

				// Use an explicit zero to avoid NaN (gh-3964)

			)) || 0;

		}



		return delta + marginDelta;

	}



	function getWidthOrHeight(elem, dimension, extra) {



		// Start with computed style

		var styles = getStyles(elem),



			// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).

			// Fake content-box until we know it's needed to know the true value.

			boxSizingNeeded = !support.boxSizingReliable() || extra,

			isBorderBox = boxSizingNeeded &&

				jQuery.css(elem, "boxSizing", false, styles) === "border-box",

			valueIsBorderBox = isBorderBox,



			val = curCSS(elem, dimension, styles),

			offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);



		// Support: Firefox <=54

		// Return a confounding non-pixel value or feign ignorance, as appropriate.

		if (rnumnonpx.test(val)) {

			if (!extra) {

				return val;

			}

			val = "auto";

		}





		// Support: IE 9 - 11 only

		// Use offsetWidth/offsetHeight for when box sizing is unreliable.

		// In those cases, the computed value can be trusted to be border-box.

		if ((!support.boxSizingReliable() && isBorderBox ||



			// Support: IE 10 - 11+, Edge 15 - 18+

			// IE/Edge misreport `getComputedStyle` of table rows with width/height

			// set in CSS while `offset*` properties report correct values.

			// Interestingly, in some cases IE 9 doesn't suffer from this issue.

			!support.reliableTrDimensions() && nodeName(elem, "tr") ||



			// Fall back to offsetWidth/offsetHeight when value is "auto"

			// This happens for inline elements with no explicit setting (gh-3571)

			val === "auto" ||



			// Support: Android <=4.1 - 4.3 only

			// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)

			!parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") &&



			// Make sure the element is visible & connected

			elem.getClientRects().length) {



			isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";



			// Where available, offsetWidth/offsetHeight approximate border box dimensions.

			// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the

			// retrieved value as a content box dimension.

			valueIsBorderBox = offsetProp in elem;

			if (valueIsBorderBox) {

				val = elem[offsetProp];

			}

		}



		// Normalize "" and auto

		val = parseFloat(val) || 0;



		// Adjust for the element's box model

		return (val +

			boxModelAdjustment(

				elem,

				dimension,

				extra || (isBorderBox ? "border" : "content"),

				valueIsBorderBox,

				styles,



				// Provide the current computed size to request scroll gutter calculation (gh-3589)

				val

			)

		) + "px";

	}



	jQuery.extend({



		// Add in style property hooks for overriding the default

		// behavior of getting and setting a style property

		cssHooks: {

			opacity: {

				get: function (elem, computed) {

					if (computed) {



						// We should always get a number back from opacity

						var ret = curCSS(elem, "opacity");

						return ret === "" ? "1" : ret;

					}

				}

			}

		},



		// Don't automatically add "px" to these possibly-unitless properties

		cssNumber: {

			animationIterationCount: true,

			aspectRatio: true,

			borderImageSlice: true,

			columnCount: true,

			flexGrow: true,

			flexShrink: true,

			fontWeight: true,

			gridArea: true,

			gridColumn: true,

			gridColumnEnd: true,

			gridColumnStart: true,

			gridRow: true,

			gridRowEnd: true,

			gridRowStart: true,

			lineHeight: true,

			opacity: true,

			order: true,

			orphans: true,

			scale: true,

			widows: true,

			zIndex: true,

			zoom: true,



			// SVG-related

			fillOpacity: true,

			floodOpacity: true,

			stopOpacity: true,

			strokeMiterlimit: true,

			strokeOpacity: true

		},



		// Add in properties whose names you wish to fix before

		// setting or getting the value

		cssProps: {},



		// Get and set the style property on a DOM Node

		style: function (elem, name, value, extra) {



			// Don't set styles on text and comment nodes

			if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {

				return;

			}



			// Make sure that we're working with the right name

			var ret, type, hooks,

				origName = camelCase(name),

				isCustomProp = rcustomProp.test(name),

				style = elem.style;



			// Make sure that we're working with the right name. We don't

			// want to query the value if it is a CSS custom property

			// since they are user-defined.

			if (!isCustomProp) {

				name = finalPropName(origName);

			}



			// Gets hook for the prefixed version, then unprefixed version

			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];



			// Check if we're setting a value

			if (value !== undefined) {

				type = typeof value;



				// Convert "+=" or "-=" to relative numbers (trac-7345)

				if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {

					value = adjustCSS(elem, name, ret);



					// Fixes bug trac-9237

					type = "number";

				}



				// Make sure that null and NaN values aren't set (trac-7116)

				if (value == null || value !== value) {

					return;

				}



				// If a number was passed in, add the unit (except for certain CSS properties)

				// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append

				// "px" to a few hardcoded values.

				if (type === "number" && !isCustomProp) {

					value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");

				}



				// background-* props affect original clone's values

				if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {

					style[name] = "inherit";

				}



				// If a hook was provided, use that value, otherwise just set the specified value

				if (!hooks || !("set" in hooks) ||

					(value = hooks.set(elem, value, extra)) !== undefined) {



					if (isCustomProp) {

						style.setProperty(name, value);

					} else {

						style[name] = value;

					}

				}



			} else {



				// If a hook was provided get the non-computed value from there

				if (hooks && "get" in hooks &&

					(ret = hooks.get(elem, false, extra)) !== undefined) {



					return ret;

				}



				// Otherwise just get the value from the style object

				return style[name];

			}

		},



		css: function (elem, name, extra, styles) {

			var val, num, hooks,

				origName = camelCase(name),

				isCustomProp = rcustomProp.test(name);



			// Make sure that we're working with the right name. We don't

			// want to modify the value if it is a CSS custom property

			// since they are user-defined.

			if (!isCustomProp) {

				name = finalPropName(origName);

			}



			// Try prefixed name followed by the unprefixed name

			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];



			// If a hook was provided get the computed value from there

			if (hooks && "get" in hooks) {

				val = hooks.get(elem, true, extra);

			}



			// Otherwise, if a way to get the computed value exists, use that

			if (val === undefined) {

				val = curCSS(elem, name, styles);

			}



			// Convert "normal" to computed value

			if (val === "normal" && name in cssNormalTransform) {

				val = cssNormalTransform[name];

			}



			// Make numeric if forced or a qualifier was provided and val looks numeric

			if (extra === "" || extra) {

				num = parseFloat(val);

				return extra === true || isFinite(num) ? num || 0 : val;

			}



			return val;

		}

	});



	jQuery.each(["height", "width"], function (_i, dimension) {

		jQuery.cssHooks[dimension] = {

			get: function (elem, computed, extra) {

				if (computed) {



					// Certain elements can have dimension info if we invisibly show them

					// but it must have a current display style that would benefit

					return rdisplayswap.test(jQuery.css(elem, "display")) &&



						// Support: Safari 8+

						// Table columns in Safari have non-zero offsetWidth & zero

						// getBoundingClientRect().width unless display is changed.

						// Support: IE <=11 only

						// Running getBoundingClientRect on a disconnected node

						// in IE throws an error.

						(!elem.getClientRects().length || !elem.getBoundingClientRect().width) ?

						swap(elem, cssShow, function () {

							return getWidthOrHeight(elem, dimension, extra);

						}) :

						getWidthOrHeight(elem, dimension, extra);

				}

			},



			set: function (elem, value, extra) {

				var matches,

					styles = getStyles(elem),



					// Only read styles.position if the test has a chance to fail

					// to avoid forcing a reflow.

					scrollboxSizeBuggy = !support.scrollboxSize() &&

						styles.position === "absolute",



					// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)

					boxSizingNeeded = scrollboxSizeBuggy || extra,

					isBorderBox = boxSizingNeeded &&

						jQuery.css(elem, "boxSizing", false, styles) === "border-box",

					subtract = extra ?

						boxModelAdjustment(

							elem,

							dimension,

							extra,

							isBorderBox,

							styles

						) :

						0;



				// Account for unreliable border-box dimensions by comparing offset* to computed and

				// faking a content-box to get border and padding (gh-3699)

				if (isBorderBox && scrollboxSizeBuggy) {

					subtract -= Math.ceil(

						elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] -

						parseFloat(styles[dimension]) -

						boxModelAdjustment(elem, dimension, "border", false, styles) -

						0.5

					);

				}



				// Convert to pixels if value adjustment is needed

				if (subtract && (matches = rcssNum.exec(value)) &&

					(matches[3] || "px") !== "px") {



					elem.style[dimension] = value;

					value = jQuery.css(elem, dimension);

				}



				return setPositiveNumber(elem, value, subtract);

			}

		};

	});



	jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft,

		function (elem, computed) {

			if (computed) {

				return (parseFloat(curCSS(elem, "marginLeft")) ||

					elem.getBoundingClientRect().left -

					swap(elem, { marginLeft: 0 }, function () {

						return elem.getBoundingClientRect().left;

					})

				) + "px";

			}

		}

	);



	// These hooks are used by animate to expand properties

	jQuery.each({

		margin: "",

		padding: "",

		border: "Width"

	}, function (prefix, suffix) {

		jQuery.cssHooks[prefix + suffix] = {

			expand: function (value) {

				var i = 0,

					expanded = {},



					// Assumes a single number if not a string

					parts = typeof value === "string" ? value.split(" ") : [value];



				for (; i < 4; i++) {

					expanded[prefix + cssExpand[i] + suffix] =

						parts[i] || parts[i - 2] || parts[0];

				}



				return expanded;

			}

		};



		if (prefix !== "margin") {

			jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;

		}

	});



	jQuery.fn.extend({

		css: function (name, value) {

			return access(this, function (elem, name, value) {

				var styles, len,

					map = {},

					i = 0;



				if (Array.isArray(name)) {

					styles = getStyles(elem);

					len = name.length;



					for (; i < len; i++) {

						map[name[i]] = jQuery.css(elem, name[i], false, styles);

					}



					return map;

				}



				return value !== undefined ?

					jQuery.style(elem, name, value) :

					jQuery.css(elem, name);

			}, name, value, arguments.length > 1);

		}

	});





	function Tween(elem, options, prop, end, easing) {

		return new Tween.prototype.init(elem, options, prop, end, easing);

	}

	jQuery.Tween = Tween;



	Tween.prototype = {

		constructor: Tween,

		init: function (elem, options, prop, end, easing, unit) {

			this.elem = elem;

			this.prop = prop;

			this.easing = easing || jQuery.easing._default;

			this.options = options;

			this.start = this.now = this.cur();

			this.end = end;

			this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");

		},

		cur: function () {

			var hooks = Tween.propHooks[this.prop];



			return hooks && hooks.get ?

				hooks.get(this) :

				Tween.propHooks._default.get(this);

		},

		run: function (percent) {

			var eased,

				hooks = Tween.propHooks[this.prop];



			if (this.options.duration) {

				this.pos = eased = jQuery.easing[this.easing](

					percent, this.options.duration * percent, 0, 1, this.options.duration

				);

			} else {

				this.pos = eased = percent;

			}

			this.now = (this.end - this.start) * eased + this.start;



			if (this.options.step) {

				this.options.step.call(this.elem, this.now, this);

			}



			if (hooks && hooks.set) {

				hooks.set(this);

			} else {

				Tween.propHooks._default.set(this);

			}

			return this;

		}

	};



	Tween.prototype.init.prototype = Tween.prototype;



	Tween.propHooks = {

		_default: {

			get: function (tween) {

				var result;



				// Use a property on the element directly when it is not a DOM element,

				// or when there is no matching style property that exists.

				if (tween.elem.nodeType !== 1 ||

					tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {

					return tween.elem[tween.prop];

				}



				// Passing an empty string as a 3rd parameter to .css will automatically

				// attempt a parseFloat and fallback to a string if the parse fails.

				// Simple values such as "10px" are parsed to Float;

				// complex values such as "rotate(1rad)" are returned as-is.

				result = jQuery.css(tween.elem, tween.prop, "");



				// Empty strings, null, undefined and "auto" are converted to 0.

				return !result || result === "auto" ? 0 : result;

			},

			set: function (tween) {



				// Use step hook for back compat.

				// Use cssHook if its there.

				// Use .style if available and use plain properties where available.

				if (jQuery.fx.step[tween.prop]) {

					jQuery.fx.step[tween.prop](tween);

				} else if (tween.elem.nodeType === 1 && (

					jQuery.cssHooks[tween.prop] ||

					tween.elem.style[finalPropName(tween.prop)] != null)) {

					jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);

				} else {

					tween.elem[tween.prop] = tween.now;

				}

			}

		}

	};



	// Support: IE <=9 only

	// Panic based approach to setting things on disconnected nodes

	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {

		set: function (tween) {

			if (tween.elem.nodeType && tween.elem.parentNode) {

				tween.elem[tween.prop] = tween.now;

			}

		}

	};



	jQuery.easing = {

		linear: function (p) {

			return p;

		},

		swing: function (p) {

			return 0.5 - Math.cos(p * Math.PI) / 2;

		},

		_default: "swing"

	};



	jQuery.fx = Tween.prototype.init;



	// Back compat <1.8 extension point

	jQuery.fx.step = {};









	var

		fxNow, inProgress,

		rfxtypes = /^(?:toggle|show|hide)$/,

		rrun = /queueHooks$/;



	function schedule() {

		if (inProgress) {

			if (document.hidden === false && window.requestAnimationFrame) {

				window.requestAnimationFrame(schedule);

			} else {

				window.setTimeout(schedule, jQuery.fx.interval);

			}



			jQuery.fx.tick();

		}

	}



	// Animations created synchronously will run synchronously

	function createFxNow() {

		window.setTimeout(function () {

			fxNow = undefined;

		});

		return (fxNow = Date.now());

	}



	// Generate parameters to create a standard animation

	function genFx(type, includeWidth) {

		var which,

			i = 0,

			attrs = { height: type };



		// If we include width, step value is 1 to do all cssExpand values,

		// otherwise step value is 2 to skip over Left and Right

		includeWidth = includeWidth ? 1 : 0;

		for (; i < 4; i += 2 - includeWidth) {

			which = cssExpand[i];

			attrs["margin" + which] = attrs["padding" + which] = type;

		}



		if (includeWidth) {

			attrs.opacity = attrs.width = type;

		}



		return attrs;

	}



	function createTween(value, prop, animation) {

		var tween,

			collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),

			index = 0,

			length = collection.length;

		for (; index < length; index++) {

			if ((tween = collection[index].call(animation, prop, value))) {



				// We're done with this property

				return tween;

			}

		}

	}



	function defaultPrefilter(elem, props, opts) {

		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,

			isBox = "width" in props || "height" in props,

			anim = this,

			orig = {},

			style = elem.style,

			hidden = elem.nodeType && isHiddenWithinTree(elem),

			dataShow = dataPriv.get(elem, "fxshow");



		// Queue-skipping animations hijack the fx hooks

		if (!opts.queue) {

			hooks = jQuery._queueHooks(elem, "fx");

			if (hooks.unqueued == null) {

				hooks.unqueued = 0;

				oldfire = hooks.empty.fire;

				hooks.empty.fire = function () {

					if (!hooks.unqueued) {

						oldfire();

					}

				};

			}

			hooks.unqueued++;



			anim.always(function () {



				// Ensure the complete handler is called before this completes

				anim.always(function () {

					hooks.unqueued--;

					if (!jQuery.queue(elem, "fx").length) {

						hooks.empty.fire();

					}

				});

			});

		}



		// Detect show/hide animations

		for (prop in props) {

			value = props[prop];

			if (rfxtypes.test(value)) {

				delete props[prop];

				toggle = toggle || value === "toggle";

				if (value === (hidden ? "hide" : "show")) {



					// Pretend to be hidden if this is a "show" and

					// there is still data from a stopped show/hide

					if (value === "show" && dataShow && dataShow[prop] !== undefined) {

						hidden = true;



						// Ignore all other no-op show/hide data

					} else {

						continue;

					}

				}

				orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);

			}

		}



		// Bail out if this is a no-op like .hide().hide()

		propTween = !jQuery.isEmptyObject(props);

		if (!propTween && jQuery.isEmptyObject(orig)) {

			return;

		}



		// Restrict "overflow" and "display" styles during box animations

		if (isBox && elem.nodeType === 1) {



			// Support: IE <=9 - 11, Edge 12 - 15

			// Record all 3 overflow attributes because IE does not infer the shorthand

			// from identically-valued overflowX and overflowY and Edge just mirrors

			// the overflowX value there.

			opts.overflow = [style.overflow, style.overflowX, style.overflowY];



			// Identify a display type, preferring old show/hide data over the CSS cascade

			restoreDisplay = dataShow && dataShow.display;

			if (restoreDisplay == null) {

				restoreDisplay = dataPriv.get(elem, "display");

			}

			display = jQuery.css(elem, "display");

			if (display === "none") {

				if (restoreDisplay) {

					display = restoreDisplay;

				} else {



					// Get nonempty value(s) by temporarily forcing visibility

					showHide([elem], true);

					restoreDisplay = elem.style.display || restoreDisplay;

					display = jQuery.css(elem, "display");

					showHide([elem]);

				}

			}



			// Animate inline elements as inline-block

			if (display === "inline" || display === "inline-block" && restoreDisplay != null) {

				if (jQuery.css(elem, "float") === "none") {



					// Restore the original display value at the end of pure show/hide animations

					if (!propTween) {

						anim.done(function () {

							style.display = restoreDisplay;

						});

						if (restoreDisplay == null) {

							display = style.display;

							restoreDisplay = display === "none" ? "" : display;

						}

					}

					style.display = "inline-block";

				}

			}

		}



		if (opts.overflow) {

			style.overflow = "hidden";

			anim.always(function () {

				style.overflow = opts.overflow[0];

				style.overflowX = opts.overflow[1];

				style.overflowY = opts.overflow[2];

			});

		}



		// Implement show/hide animations

		propTween = false;

		for (prop in orig) {



			// General show/hide setup for this element animation

			if (!propTween) {

				if (dataShow) {

					if ("hidden" in dataShow) {

						hidden = dataShow.hidden;

					}

				} else {

					dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });

				}



				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"

				if (toggle) {

					dataShow.hidden = !hidden;

				}



				// Show elements before animating them

				if (hidden) {

					showHide([elem], true);

				}



				/* eslint-disable no-loop-func */



				anim.done(function () {



					/* eslint-enable no-loop-func */



					// The final step of a "hide" animation is actually hiding the element

					if (!hidden) {

						showHide([elem]);

					}

					dataPriv.remove(elem, "fxshow");

					for (prop in orig) {

						jQuery.style(elem, prop, orig[prop]);

					}

				});

			}



			// Per-property setup

			propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

			if (!(prop in dataShow)) {

				dataShow[prop] = propTween.start;

				if (hidden) {

					propTween.end = propTween.start;

					propTween.start = 0;

				}

			}

		}

	}



	function propFilter(props, specialEasing) {

		var index, name, easing, value, hooks;



		// camelCase, specialEasing and expand cssHook pass

		for (index in props) {

			name = camelCase(index);

			easing = specialEasing[name];

			value = props[index];

			if (Array.isArray(value)) {

				easing = value[1];

				value = props[index] = value[0];

			}



			if (index !== name) {

				props[name] = value;

				delete props[index];

			}



			hooks = jQuery.cssHooks[name];

			if (hooks && "expand" in hooks) {

				value = hooks.expand(value);

				delete props[name];



				// Not quite $.extend, this won't overwrite existing keys.

				// Reusing 'index' because we have the correct "name"

				for (index in value) {

					if (!(index in props)) {

						props[index] = value[index];

						specialEasing[index] = easing;

					}

				}

			} else {

				specialEasing[name] = easing;

			}

		}

	}



	function Animation(elem, properties, options) {

		var result,

			stopped,

			index = 0,

			length = Animation.prefilters.length,

			deferred = jQuery.Deferred().always(function () {



				// Don't match elem in the :animated selector

				delete tick.elem;

			}),

			tick = function () {

				if (stopped) {

					return false;

				}

				var currentTime = fxNow || createFxNow(),

					remaining = Math.max(0, animation.startTime + animation.duration - currentTime),



					// Support: Android 2.3 only

					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)

					temp = remaining / animation.duration || 0,

					percent = 1 - temp,

					index = 0,

					length = animation.tweens.length;



				for (; index < length; index++) {

					animation.tweens[index].run(percent);

				}



				deferred.notifyWith(elem, [animation, percent, remaining]);



				// If there's more to do, yield

				if (percent < 1 && length) {

					return remaining;

				}



				// If this was an empty animation, synthesize a final progress notification

				if (!length) {

					deferred.notifyWith(elem, [animation, 1, 0]);

				}



				// Resolve the animation and report its conclusion

				deferred.resolveWith(elem, [animation]);

				return false;

			},

			animation = deferred.promise({

				elem: elem,

				props: jQuery.extend({}, properties),

				opts: jQuery.extend(true, {

					specialEasing: {},

					easing: jQuery.easing._default

				}, options),

				originalProperties: properties,

				originalOptions: options,

				startTime: fxNow || createFxNow(),

				duration: options.duration,

				tweens: [],

				createTween: function (prop, end) {

					var tween = jQuery.Tween(elem, animation.opts, prop, end,

						animation.opts.specialEasing[prop] || animation.opts.easing);

					animation.tweens.push(tween);

					return tween;

				},

				stop: function (gotoEnd) {

					var index = 0,



						// If we are going to the end, we want to run all the tweens

						// otherwise we skip this part

						length = gotoEnd ? animation.tweens.length : 0;

					if (stopped) {

						return this;

					}

					stopped = true;

					for (; index < length; index++) {

						animation.tweens[index].run(1);

					}



					// Resolve when we played the last frame; otherwise, reject

					if (gotoEnd) {

						deferred.notifyWith(elem, [animation, 1, 0]);

						deferred.resolveWith(elem, [animation, gotoEnd]);

					} else {

						deferred.rejectWith(elem, [animation, gotoEnd]);

					}

					return this;

				}

			}),

			props = animation.props;



		propFilter(props, animation.opts.specialEasing);



		for (; index < length; index++) {

			result = Animation.prefilters[index].call(animation, elem, props, animation.opts);

			if (result) {

				if (isFunction(result.stop)) {

					jQuery._queueHooks(animation.elem, animation.opts.queue).stop =

						result.stop.bind(result);

				}

				return result;

			}

		}



		jQuery.map(props, createTween, animation);



		if (isFunction(animation.opts.start)) {

			animation.opts.start.call(elem, animation);

		}



		// Attach callbacks from options

		animation

			.progress(animation.opts.progress)

			.done(animation.opts.done, animation.opts.complete)

			.fail(animation.opts.fail)

			.always(animation.opts.always);



		jQuery.fx.timer(

			jQuery.extend(tick, {

				elem: elem,

				anim: animation,

				queue: animation.opts.queue

			})

		);



		return animation;

	}



	jQuery.Animation = jQuery.extend(Animation, {



		tweeners: {

			"*": [function (prop, value) {

				var tween = this.createTween(prop, value);

				adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);

				return tween;

			}]

		},



		tweener: function (props, callback) {

			if (isFunction(props)) {

				callback = props;

				props = ["*"];

			} else {

				props = props.match(rnothtmlwhite);

			}



			var prop,

				index = 0,

				length = props.length;



			for (; index < length; index++) {

				prop = props[index];

				Animation.tweeners[prop] = Animation.tweeners[prop] || [];

				Animation.tweeners[prop].unshift(callback);

			}

		},



		prefilters: [defaultPrefilter],



		prefilter: function (callback, prepend) {

			if (prepend) {

				Animation.prefilters.unshift(callback);

			} else {

				Animation.prefilters.push(callback);

			}

		}

	});



	jQuery.speed = function (speed, easing, fn) {

		var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {

			complete: fn || !fn && easing ||

				isFunction(speed) && speed,

			duration: speed,

			easing: fn && easing || easing && !isFunction(easing) && easing

		};



		// Go to the end state if fx are off

		if (jQuery.fx.off) {

			opt.duration = 0;



		} else {

			if (typeof opt.duration !== "number") {

				if (opt.duration in jQuery.fx.speeds) {

					opt.duration = jQuery.fx.speeds[opt.duration];



				} else {

					opt.duration = jQuery.fx.speeds._default;

				}

			}

		}



		// Normalize opt.queue - true/undefined/null -> "fx"

		if (opt.queue == null || opt.queue === true) {

			opt.queue = "fx";

		}



		// Queueing

		opt.old = opt.complete;



		opt.complete = function () {

			if (isFunction(opt.old)) {

				opt.old.call(this);

			}



			if (opt.queue) {

				jQuery.dequeue(this, opt.queue);

			}

		};



		return opt;

	};



	jQuery.fn.extend({

		fadeTo: function (speed, to, easing, callback) {



			// Show any hidden elements after setting opacity to 0

			return this.filter(isHiddenWithinTree).css("opacity", 0).show()



				// Animate to the value specified

				.end().animate({ opacity: to }, speed, easing, callback);

		},

		animate: function (prop, speed, easing, callback) {

			var empty = jQuery.isEmptyObject(prop),

				optall = jQuery.speed(speed, easing, callback),

				doAnimation = function () {



					// Operate on a copy of prop so per-property easing won't be lost

					var anim = Animation(this, jQuery.extend({}, prop), optall);



					// Empty animations, or finishing resolves immediately

					if (empty || dataPriv.get(this, "finish")) {

						anim.stop(true);

					}

				};



			doAnimation.finish = doAnimation;



			return empty || optall.queue === false ?

				this.each(doAnimation) :

				this.queue(optall.queue, doAnimation);

		},

		stop: function (type, clearQueue, gotoEnd) {

			var stopQueue = function (hooks) {

				var stop = hooks.stop;

				delete hooks.stop;

				stop(gotoEnd);

			};



			if (typeof type !== "string") {

				gotoEnd = clearQueue;

				clearQueue = type;

				type = undefined;

			}

			if (clearQueue) {

				this.queue(type || "fx", []);

			}



			return this.each(function () {

				var dequeue = true,

					index = type != null && type + "queueHooks",

					timers = jQuery.timers,

					data = dataPriv.get(this);



				if (index) {

					if (data[index] && data[index].stop) {

						stopQueue(data[index]);

					}

				} else {

					for (index in data) {

						if (data[index] && data[index].stop && rrun.test(index)) {

							stopQueue(data[index]);

						}

					}

				}



				for (index = timers.length; index--;) {

					if (timers[index].elem === this &&

						(type == null || timers[index].queue === type)) {



						timers[index].anim.stop(gotoEnd);

						dequeue = false;

						timers.splice(index, 1);

					}

				}



				// Start the next in the queue if the last step wasn't forced.

				// Timers currently will call their complete callbacks, which

				// will dequeue but only if they were gotoEnd.

				if (dequeue || !gotoEnd) {

					jQuery.dequeue(this, type);

				}

			});

		},

		finish: function (type) {

			if (type !== false) {

				type = type || "fx";

			}

			return this.each(function () {

				var index,

					data = dataPriv.get(this),

					queue = data[type + "queue"],

					hooks = data[type + "queueHooks"],

					timers = jQuery.timers,

					length = queue ? queue.length : 0;



				// Enable finishing flag on private data

				data.finish = true;



				// Empty the queue first

				jQuery.queue(this, type, []);



				if (hooks && hooks.stop) {

					hooks.stop.call(this, true);

				}



				// Look for any active animations, and finish them

				for (index = timers.length; index--;) {

					if (timers[index].elem === this && timers[index].queue === type) {

						timers[index].anim.stop(true);

						timers.splice(index, 1);

					}

				}



				// Look for any animations in the old queue and finish them

				for (index = 0; index < length; index++) {

					if (queue[index] && queue[index].finish) {

						queue[index].finish.call(this);

					}

				}



				// Turn off finishing flag

				delete data.finish;

			});

		}

	});



	jQuery.each(["toggle", "show", "hide"], function (_i, name) {

		var cssFn = jQuery.fn[name];

		jQuery.fn[name] = function (speed, easing, callback) {

			return speed == null || typeof speed === "boolean" ?

				cssFn.apply(this, arguments) :

				this.animate(genFx(name, true), speed, easing, callback);

		};

	});



	// Generate shortcuts for custom animations

	jQuery.each({

		slideDown: genFx("show"),

		slideUp: genFx("hide"),

		slideToggle: genFx("toggle"),

		fadeIn: { opacity: "show" },

		fadeOut: { opacity: "hide" },

		fadeToggle: { opacity: "toggle" }

	}, function (name, props) {

		jQuery.fn[name] = function (speed, easing, callback) {

			return this.animate(props, speed, easing, callback);

		};

	});



	jQuery.timers = [];

	jQuery.fx.tick = function () {

		var timer,

			i = 0,

			timers = jQuery.timers;



		fxNow = Date.now();



		for (; i < timers.length; i++) {

			timer = timers[i];



			// Run the timer and safely remove it when done (allowing for external removal)

			if (!timer() && timers[i] === timer) {

				timers.splice(i--, 1);

			}

		}



		if (!timers.length) {

			jQuery.fx.stop();

		}

		fxNow = undefined;

	};



	jQuery.fx.timer = function (timer) {

		jQuery.timers.push(timer);

		jQuery.fx.start();

	};



	jQuery.fx.interval = 13;

	jQuery.fx.start = function () {

		if (inProgress) {

			return;

		}



		inProgress = true;

		schedule();

	};



	jQuery.fx.stop = function () {

		inProgress = null;

	};



	jQuery.fx.speeds = {

		slow: 600,

		fast: 200,



		// Default speed

		_default: 400

	};





	// Based off of the plugin by Clint Helfers, with permission.

	jQuery.fn.delay = function (time, type) {

		time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;

		type = type || "fx";



		return this.queue(type, function (next, hooks) {

			var timeout = window.setTimeout(next, time);

			hooks.stop = function () {

				window.clearTimeout(timeout);

			};

		});

	};





	(function () {

		var input = document.createElement("input"),

			select = document.createElement("select"),

			opt = select.appendChild(document.createElement("option"));



		input.type = "checkbox";



		// Support: Android <=4.3 only

		// Default value for a checkbox should be "on"

		support.checkOn = input.value !== "";



		// Support: IE <=11 only

		// Must access selectedIndex to make default options select

		support.optSelected = opt.selected;



		// Support: IE <=11 only

		// An input loses its value after becoming a radio

		input = document.createElement("input");

		input.value = "t";

		input.type = "radio";

		support.radioValue = input.value === "t";

	})();





	var boolHook,

		attrHandle = jQuery.expr.attrHandle;



	jQuery.fn.extend({

		attr: function (name, value) {

			return access(this, jQuery.attr, name, value, arguments.length > 1);

		},



		removeAttr: function (name) {

			return this.each(function () {

				jQuery.removeAttr(this, name);

			});

		}

	});



	jQuery.extend({

		attr: function (elem, name, value) {

			var ret, hooks,

				nType = elem.nodeType;



			// Don't get/set attributes on text, comment and attribute nodes

			if (nType === 3 || nType === 8 || nType === 2) {

				return;

			}



			// Fallback to prop when attributes are not supported

			if (typeof elem.getAttribute === "undefined") {

				return jQuery.prop(elem, name, value);

			}



			// Attribute hooks are determined by the lowercase version

			// Grab necessary hook if one is defined

			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

				hooks = jQuery.attrHooks[name.toLowerCase()] ||

					(jQuery.expr.match.bool.test(name) ? boolHook : undefined);

			}



			if (value !== undefined) {

				if (value === null) {

					jQuery.removeAttr(elem, name);

					return;

				}



				if (hooks && "set" in hooks &&

					(ret = hooks.set(elem, value, name)) !== undefined) {

					return ret;

				}



				elem.setAttribute(name, value + "");

				return value;

			}



			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {

				return ret;

			}



			ret = jQuery.find.attr(elem, name);



			// Non-existent attributes return null, we normalize to undefined

			return ret == null ? undefined : ret;

		},



		attrHooks: {

			type: {

				set: function (elem, value) {

					if (!support.radioValue && value === "radio" &&

						nodeName(elem, "input")) {

						var val = elem.value;

						elem.setAttribute("type", value);

						if (val) {

							elem.value = val;

						}

						return value;

					}

				}

			}

		},



		removeAttr: function (elem, value) {

			var name,

				i = 0,



				// Attribute names can contain non-HTML whitespace characters

				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2

				attrNames = value && value.match(rnothtmlwhite);



			if (attrNames && elem.nodeType === 1) {

				while ((name = attrNames[i++])) {

					elem.removeAttribute(name);

				}

			}

		}

	});



	// Hooks for boolean attributes

	boolHook = {

		set: function (elem, value, name) {

			if (value === false) {



				// Remove boolean attributes when set to false

				jQuery.removeAttr(elem, name);

			} else {

				elem.setAttribute(name, name);

			}

			return name;

		}

	};



	jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (_i, name) {

		var getter = attrHandle[name] || jQuery.find.attr;



		attrHandle[name] = function (elem, name, isXML) {

			var ret, handle,

				lowercaseName = name.toLowerCase();



			if (!isXML) {



				// Avoid an infinite loop by temporarily removing this function from the getter

				handle = attrHandle[lowercaseName];

				attrHandle[lowercaseName] = ret;

				ret = getter(elem, name, isXML) != null ?

					lowercaseName :

					null;

				attrHandle[lowercaseName] = handle;

			}

			return ret;

		};

	});









	var rfocusable = /^(?:input|select|textarea|button)$/i,

		rclickable = /^(?:a|area)$/i;



	jQuery.fn.extend({

		prop: function (name, value) {

			return access(this, jQuery.prop, name, value, arguments.length > 1);

		},



		removeProp: function (name) {

			return this.each(function () {

				delete this[jQuery.propFix[name] || name];

			});

		}

	});



	jQuery.extend({

		prop: function (elem, name, value) {

			var ret, hooks,

				nType = elem.nodeType;



			// Don't get/set properties on text, comment and attribute nodes

			if (nType === 3 || nType === 8 || nType === 2) {

				return;

			}



			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {



				// Fix name and attach hooks

				name = jQuery.propFix[name] || name;

				hooks = jQuery.propHooks[name];

			}



			if (value !== undefined) {

				if (hooks && "set" in hooks &&

					(ret = hooks.set(elem, value, name)) !== undefined) {

					return ret;

				}



				return (elem[name] = value);

			}



			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {

				return ret;

			}



			return elem[name];

		},



		propHooks: {

			tabIndex: {

				get: function (elem) {



					// Support: IE <=9 - 11 only

					// elem.tabIndex doesn't always return the

					// correct value when it hasn't been explicitly set

					// Use proper attribute retrieval (trac-12072)

					var tabindex = jQuery.find.attr(elem, "tabindex");



					if (tabindex) {

						return parseInt(tabindex, 10);

					}



					if (

						rfocusable.test(elem.nodeName) ||

						rclickable.test(elem.nodeName) &&

						elem.href

					) {

						return 0;

					}



					return -1;

				}

			}

		},



		propFix: {

			"for": "htmlFor",

			"class": "className"

		}

	});



	// Support: IE <=11 only

	// Accessing the selectedIndex property

	// forces the browser to respect setting selected

	// on the option

	// The getter ensures a default option is selected

	// when in an optgroup

	// eslint rule "no-unused-expressions" is disabled for this code

	// since it considers such accessions noop

	if (!support.optSelected) {

		jQuery.propHooks.selected = {

			get: function (elem) {



				/* eslint no-unused-expressions: "off" */



				var parent = elem.parentNode;

				if (parent && parent.parentNode) {

					parent.parentNode.selectedIndex;

				}

				return null;

			},

			set: function (elem) {



				/* eslint no-unused-expressions: "off" */



				var parent = elem.parentNode;

				if (parent) {

					parent.selectedIndex;



					if (parent.parentNode) {

						parent.parentNode.selectedIndex;

					}

				}

			}

		};

	}



	jQuery.each([

		"tabIndex",

		"readOnly",

		"maxLength",

		"cellSpacing",

		"cellPadding",

		"rowSpan",

		"colSpan",

		"useMap",

		"frameBorder",

		"contentEditable"

	], function () {

		jQuery.propFix[this.toLowerCase()] = this;

	});









	// Strip and collapse whitespace according to HTML spec

	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

	function stripAndCollapse(value) {

		var tokens = value.match(rnothtmlwhite) || [];

		return tokens.join(" ");

	}





	function getClass(elem) {

		return elem.getAttribute && elem.getAttribute("class") || "";

	}



	function classesToArray(value) {

		if (Array.isArray(value)) {

			return value;

		}

		if (typeof value === "string") {

			return value.match(rnothtmlwhite) || [];

		}

		return [];

	}



	jQuery.fn.extend({

		addClass: function (value) {

			var classNames, cur, curValue, className, i, finalValue;



			if (isFunction(value)) {

				return this.each(function (j) {

					jQuery(this).addClass(value.call(this, j, getClass(this)));

				});

			}



			classNames = classesToArray(value);



			if (classNames.length) {

				return this.each(function () {

					curValue = getClass(this);

					cur = this.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");



					if (cur) {

						for (i = 0; i < classNames.length; i++) {

							className = classNames[i];

							if (cur.indexOf(" " + className + " ") < 0) {

								cur += className + " ";

							}

						}



						// Only assign if different to avoid unneeded rendering.

						finalValue = stripAndCollapse(cur);

						if (curValue !== finalValue) {

							this.setAttribute("class", finalValue);

						}

					}

				});

			}



			return this;

		},



		removeClass: function (value) {

			var classNames, cur, curValue, className, i, finalValue;



			if (isFunction(value)) {

				return this.each(function (j) {

					jQuery(this).removeClass(value.call(this, j, getClass(this)));

				});

			}



			if (!arguments.length) {

				return this.attr("class", "");

			}



			classNames = classesToArray(value);



			if (classNames.length) {

				return this.each(function () {

					curValue = getClass(this);



					// This expression is here for better compressibility (see addClass)

					cur = this.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");



					if (cur) {

						for (i = 0; i < classNames.length; i++) {

							className = classNames[i];



							// Remove *all* instances

							while (cur.indexOf(" " + className + " ") > -1) {

								cur = cur.replace(" " + className + " ", " ");

							}

						}



						// Only assign if different to avoid unneeded rendering.

						finalValue = stripAndCollapse(cur);

						if (curValue !== finalValue) {

							this.setAttribute("class", finalValue);

						}

					}

				});

			}



			return this;

		},



		toggleClass: function (value, stateVal) {

			var classNames, className, i, self,

				type = typeof value,

				isValidValue = type === "string" || Array.isArray(value);



			if (isFunction(value)) {

				return this.each(function (i) {

					jQuery(this).toggleClass(

						value.call(this, i, getClass(this), stateVal),

						stateVal

					);

				});

			}



			if (typeof stateVal === "boolean" && isValidValue) {

				return stateVal ? this.addClass(value) : this.removeClass(value);

			}



			classNames = classesToArray(value);



			return this.each(function () {

				if (isValidValue) {



					// Toggle individual class names

					self = jQuery(this);



					for (i = 0; i < classNames.length; i++) {

						className = classNames[i];



						// Check each className given, space separated list

						if (self.hasClass(className)) {

							self.removeClass(className);

						} else {

							self.addClass(className);

						}

					}



					// Toggle whole class name

				} else if (value === undefined || type === "boolean") {

					className = getClass(this);

					if (className) {



						// Store className if set

						dataPriv.set(this, "__className__", className);

					}



					// If the element has a class name or if we're passed `false`,

					// then remove the whole classname (if there was one, the above saved it).

					// Otherwise bring back whatever was previously saved (if anything),

					// falling back to the empty string if nothing was stored.

					if (this.setAttribute) {

						this.setAttribute("class",

							className || value === false ?

								"" :

								dataPriv.get(this, "__className__") || ""

						);

					}

				}

			});

		},



		hasClass: function (selector) {

			var className, elem,

				i = 0;



			className = " " + selector + " ";

			while ((elem = this[i++])) {

				if (elem.nodeType === 1 &&

					(" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {

					return true;

				}

			}



			return false;

		}

	});









	var rreturn = /\r/g;



	jQuery.fn.extend({

		val: function (value) {

			var hooks, ret, valueIsFunction,

				elem = this[0];



			if (!arguments.length) {

				if (elem) {

					hooks = jQuery.valHooks[elem.type] ||

						jQuery.valHooks[elem.nodeName.toLowerCase()];



					if (hooks &&

						"get" in hooks &&

						(ret = hooks.get(elem, "value")) !== undefined

					) {

						return ret;

					}



					ret = elem.value;



					// Handle most common string cases

					if (typeof ret === "string") {

						return ret.replace(rreturn, "");

					}



					// Handle cases where value is null/undef or number

					return ret == null ? "" : ret;

				}



				return;

			}



			valueIsFunction = isFunction(value);



			return this.each(function (i) {

				var val;



				if (this.nodeType !== 1) {

					return;

				}



				if (valueIsFunction) {

					val = value.call(this, i, jQuery(this).val());

				} else {

					val = value;

				}



				// Treat null/undefined as ""; convert numbers to string

				if (val == null) {

					val = "";



				} else if (typeof val === "number") {

					val += "";



				} else if (Array.isArray(val)) {

					val = jQuery.map(val, function (value) {

						return value == null ? "" : value + "";

					});

				}



				hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];



				// If set returns undefined, fall back to normal setting

				if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {

					this.value = val;

				}

			});

		}

	});



	jQuery.extend({

		valHooks: {

			option: {

				get: function (elem) {



					var val = jQuery.find.attr(elem, "value");

					return val != null ?

						val :



						// Support: IE <=10 - 11 only

						// option.text throws exceptions (trac-14686, trac-14858)

						// Strip and collapse whitespace

						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace

						stripAndCollapse(jQuery.text(elem));

				}

			},

			select: {

				get: function (elem) {

					var value, option, i,

						options = elem.options,

						index = elem.selectedIndex,

						one = elem.type === "select-one",

						values = one ? null : [],

						max = one ? index + 1 : options.length;



					if (index < 0) {

						i = max;



					} else {

						i = one ? index : 0;

					}



					// Loop through all the selected options

					for (; i < max; i++) {

						option = options[i];



						// Support: IE <=9 only

						// IE8-9 doesn't update selected after form reset (trac-2551)

						if ((option.selected || i === index) &&



							// Don't return options that are disabled or in a disabled optgroup

							!option.disabled &&

							(!option.parentNode.disabled ||

								!nodeName(option.parentNode, "optgroup"))) {



							// Get the specific value for the option

							value = jQuery(option).val();



							// We don't need an array for one selects

							if (one) {

								return value;

							}



							// Multi-Selects return an array

							values.push(value);

						}

					}



					return values;

				},



				set: function (elem, value) {

					var optionSet, option,

						options = elem.options,

						values = jQuery.makeArray(value),

						i = options.length;



					while (i--) {

						option = options[i];



						/* eslint-disable no-cond-assign */



						if (option.selected =

							jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1

						) {

							optionSet = true;

						}



						/* eslint-enable no-cond-assign */

					}



					// Force browsers to behave consistently when non-matching value is set

					if (!optionSet) {

						elem.selectedIndex = -1;

					}

					return values;

				}

			}

		}

	});



	// Radios and checkboxes getter/setter

	jQuery.each(["radio", "checkbox"], function () {

		jQuery.valHooks[this] = {

			set: function (elem, value) {

				if (Array.isArray(value)) {

					return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);

				}

			}

		};

		if (!support.checkOn) {

			jQuery.valHooks[this].get = function (elem) {

				return elem.getAttribute("value") === null ? "on" : elem.value;

			};

		}

	});









	// Return jQuery for attributes-only inclusion

	var location = window.location;



	var nonce = { guid: Date.now() };



	var rquery = (/\?/);







	// Cross-browser xml parsing

	jQuery.parseXML = function (data) {

		var xml, parserErrorElem;

		if (!data || typeof data !== "string") {

			return null;

		}



		// Support: IE 9 - 11 only

		// IE throws on parseFromString with invalid input.

		try {

			xml = (new window.DOMParser()).parseFromString(data, "text/xml");

		} catch (e) { }



		parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];

		if (!xml || parserErrorElem) {

			jQuery.error("Invalid XML: " + (

				parserErrorElem ?

					jQuery.map(parserErrorElem.childNodes, function (el) {

						return el.textContent;

					}).join("\n") :

					data

			));

		}

		return xml;

	};





	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,

		stopPropagationCallback = function (e) {

			e.stopPropagation();

		};



	jQuery.extend(jQuery.event, {



		trigger: function (event, data, elem, onlyHandlers) {



			var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,

				eventPath = [elem || document],

				type = hasOwn.call(event, "type") ? event.type : event,

				namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];



			cur = lastElement = tmp = elem = elem || document;



			// Don't do events on text and comment nodes

			if (elem.nodeType === 3 || elem.nodeType === 8) {

				return;

			}



			// focus/blur morphs to focusin/out; ensure we're not firing them right now

			if (rfocusMorph.test(type + jQuery.event.triggered)) {

				return;

			}



			if (type.indexOf(".") > -1) {



				// Namespaced trigger; create a regexp to match event type in handle()

				namespaces = type.split(".");

				type = namespaces.shift();

				namespaces.sort();

			}

			ontype = type.indexOf(":") < 0 && "on" + type;



			// Caller can pass in a jQuery.Event object, Object, or just an event type string

			event = event[jQuery.expando] ?

				event :

				new jQuery.Event(type, typeof event === "object" && event);



			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

			event.isTrigger = onlyHandlers ? 2 : 3;

			event.namespace = namespaces.join(".");

			event.rnamespace = event.namespace ?

				new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") :

				null;



			// Clean up the event in case it is being reused

			event.result = undefined;

			if (!event.target) {

				event.target = elem;

			}



			// Clone any incoming data and prepend the event, creating the handler arg list

			data = data == null ?

				[event] :

				jQuery.makeArray(data, [event]);



			// Allow special events to draw outside the lines

			special = jQuery.event.special[type] || {};

			if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {

				return;

			}



			// Determine event propagation path in advance, per W3C events spec (trac-9951)

			// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)

			if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {



				bubbleType = special.delegateType || type;

				if (!rfocusMorph.test(bubbleType + type)) {

					cur = cur.parentNode;

				}

				for (; cur; cur = cur.parentNode) {

					eventPath.push(cur);

					tmp = cur;

				}



				// Only add window if we got to document (e.g., not plain obj or detached DOM)

				if (tmp === (elem.ownerDocument || document)) {

					eventPath.push(tmp.defaultView || tmp.parentWindow || window);

				}

			}



			// Fire handlers on the event path

			i = 0;

			while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

				lastElement = cur;

				event.type = i > 1 ?

					bubbleType :

					special.bindType || type;



				// jQuery handler

				handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] &&

					dataPriv.get(cur, "handle");

				if (handle) {

					handle.apply(cur, data);

				}



				// Native handler

				handle = ontype && cur[ontype];

				if (handle && handle.apply && acceptData(cur)) {

					event.result = handle.apply(cur, data);

					if (event.result === false) {

						event.preventDefault();

					}

				}

			}

			event.type = type;



			// If nobody prevented the default action, do it now

			if (!onlyHandlers && !event.isDefaultPrevented()) {



				if ((!special._default ||

					special._default.apply(eventPath.pop(), data) === false) &&

					acceptData(elem)) {



					// Call a native DOM method on the target with the same name as the event.

					// Don't do default actions on window, that's where global variables be (trac-6170)

					if (ontype && isFunction(elem[type]) && !isWindow(elem)) {



						// Don't re-trigger an onFOO event when we call its FOO() method

						tmp = elem[ontype];



						if (tmp) {

							elem[ontype] = null;

						}



						// Prevent re-triggering of the same event, since we already bubbled it above

						jQuery.event.triggered = type;



						if (event.isPropagationStopped()) {

							lastElement.addEventListener(type, stopPropagationCallback);

						}



						elem[type]();



						if (event.isPropagationStopped()) {

							lastElement.removeEventListener(type, stopPropagationCallback);

						}



						jQuery.event.triggered = undefined;



						if (tmp) {

							elem[ontype] = tmp;

						}

					}

				}

			}



			return event.result;

		},



		// Piggyback on a donor event to simulate a different one

		// Used only for `focus(in | out)` events

		simulate: function (type, elem, event) {

			var e = jQuery.extend(

				new jQuery.Event(),

				event,

				{

					type: type,

					isSimulated: true

				}

			);



			jQuery.event.trigger(e, null, elem);

		}



	});



	jQuery.fn.extend({



		trigger: function (type, data) {

			return this.each(function () {

				jQuery.event.trigger(type, data, this);

			});

		},

		triggerHandler: function (type, data) {

			var elem = this[0];

			if (elem) {

				return jQuery.event.trigger(type, data, elem, true);

			}

		}

	});





	var

		rbracket = /\[\]$/,

		rCRLF = /\r?\n/g,

		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,

		rsubmittable = /^(?:input|select|textarea|keygen)/i;



	function buildParams(prefix, obj, traditional, add) {

		var name;



		if (Array.isArray(obj)) {



			// Serialize array item.

			jQuery.each(obj, function (i, v) {

				if (traditional || rbracket.test(prefix)) {



					// Treat each array item as a scalar.

					add(prefix, v);



				} else {



					// Item is non-scalar (array or object), encode its numeric index.

					buildParams(

						prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",

						v,

						traditional,

						add

					);

				}

			});



		} else if (!traditional && toType(obj) === "object") {



			// Serialize object item.

			for (name in obj) {

				buildParams(prefix + "[" + name + "]", obj[name], traditional, add);

			}



		} else {



			// Serialize scalar item.

			add(prefix, obj);

		}

	}



	// Serialize an array of form elements or a set of

	// key/values into a query string

	jQuery.param = function (a, traditional) {

		var prefix,

			s = [],

			add = function (key, valueOrFunction) {



				// If value is a function, invoke it and use its return value

				var value = isFunction(valueOrFunction) ?

					valueOrFunction() :

					valueOrFunction;



				s[s.length] = encodeURIComponent(key) + "=" +

					encodeURIComponent(value == null ? "" : value);

			};



		if (a == null) {

			return "";

		}



		// If an array was passed in, assume that it is an array of form elements.

		if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {



			// Serialize the form elements

			jQuery.each(a, function () {

				add(this.name, this.value);

			});



		} else {



			// If traditional, encode the "old" way (the way 1.3.2 or older

			// did it), otherwise encode params recursively.

			for (prefix in a) {

				buildParams(prefix, a[prefix], traditional, add);

			}

		}



		// Return the resulting serialization

		return s.join("&");

	};



	jQuery.fn.extend({

		serialize: function () {

			return jQuery.param(this.serializeArray());

		},

		serializeArray: function () {

			return this.map(function () {



				// Can add propHook for "elements" to filter or add form elements

				var elements = jQuery.prop(this, "elements");

				return elements ? jQuery.makeArray(elements) : this;

			}).filter(function () {

				var type = this.type;



				// Use .is( ":disabled" ) so that fieldset[disabled] works

				return this.name && !jQuery(this).is(":disabled") &&

					rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) &&

					(this.checked || !rcheckableType.test(type));

			}).map(function (_i, elem) {

				var val = jQuery(this).val();



				if (val == null) {

					return null;

				}



				if (Array.isArray(val)) {

					return jQuery.map(val, function (val) {

						return { name: elem.name, value: val.replace(rCRLF, "\r\n") };

					});

				}



				return { name: elem.name, value: val.replace(rCRLF, "\r\n") };

			}).get();

		}

	});





	var

		r20 = /%20/g,

		rhash = /#.*$/,

		rantiCache = /([?&])_=[^&]*/,

		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,



		// trac-7653, trac-8125, trac-8152: local protocol detection

		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,

		rnoContent = /^(?:GET|HEAD)$/,

		rprotocol = /^\/\//,



		/* Prefilters

		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)

		 * 2) These are called:

		 *    - BEFORE asking for a transport

		 *    - AFTER param serialization (s.data is a string if s.processData is true)

		 * 3) key is the dataType

		 * 4) the catchall symbol "*" can be used

		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed

		 */

		prefilters = {},



		/* Transports bindings

		 * 1) key is the dataType

		 * 2) the catchall symbol "*" can be used

		 * 3) selection will start with transport dataType and THEN go to "*" if needed

		 */

		transports = {},



		// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression

		allTypes = "*/".concat("*"),



		// Anchor tag for parsing the document origin

		originAnchor = document.createElement("a");



	originAnchor.href = location.href;



	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

	function addToPrefiltersOrTransports(structure) {



		// dataTypeExpression is optional and defaults to "*"

		return function (dataTypeExpression, func) {



			if (typeof dataTypeExpression !== "string") {

				func = dataTypeExpression;

				dataTypeExpression = "*";

			}



			var dataType,

				i = 0,

				dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];



			if (isFunction(func)) {



				// For each dataType in the dataTypeExpression

				while ((dataType = dataTypes[i++])) {



					// Prepend if requested

					if (dataType[0] === "+") {

						dataType = dataType.slice(1) || "*";

						(structure[dataType] = structure[dataType] || []).unshift(func);



						// Otherwise append

					} else {

						(structure[dataType] = structure[dataType] || []).push(func);

					}

				}

			}

		};

	}



	// Base inspection function for prefilters and transports

	function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {



		var inspected = {},

			seekingTransport = (structure === transports);



		function inspect(dataType) {

			var selected;

			inspected[dataType] = true;

			jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {

				var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

				if (typeof dataTypeOrTransport === "string" &&

					!seekingTransport && !inspected[dataTypeOrTransport]) {



					options.dataTypes.unshift(dataTypeOrTransport);

					inspect(dataTypeOrTransport);

					return false;

				} else if (seekingTransport) {

					return !(selected = dataTypeOrTransport);

				}

			});

			return selected;

		}



		return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");

	}



	// A special extend for ajax options

	// that takes "flat" options (not to be deep extended)

	// Fixes trac-9887

	function ajaxExtend(target, src) {

		var key, deep,

			flatOptions = jQuery.ajaxSettings.flatOptions || {};



		for (key in src) {

			if (src[key] !== undefined) {

				(flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];

			}

		}

		if (deep) {

			jQuery.extend(true, target, deep);

		}



		return target;

	}



	/* Handles responses to an ajax request:

	 * - finds the right dataType (mediates between content-type and expected dataType)

	 * - returns the corresponding response

	 */

	function ajaxHandleResponses(s, jqXHR, responses) {



		var ct, type, finalDataType, firstDataType,

			contents = s.contents,

			dataTypes = s.dataTypes;



		// Remove auto dataType and get content-type in the process

		while (dataTypes[0] === "*") {

			dataTypes.shift();

			if (ct === undefined) {

				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");

			}

		}



		// Check if we're dealing with a known content-type

		if (ct) {

			for (type in contents) {

				if (contents[type] && contents[type].test(ct)) {

					dataTypes.unshift(type);

					break;

				}

			}

		}



		// Check to see if we have a response for the expected dataType

		if (dataTypes[0] in responses) {

			finalDataType = dataTypes[0];

		} else {



			// Try convertible dataTypes

			for (type in responses) {

				if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {

					finalDataType = type;

					break;

				}

				if (!firstDataType) {

					firstDataType = type;

				}

			}



			// Or just use first one

			finalDataType = finalDataType || firstDataType;

		}



		// If we found a dataType

		// We add the dataType to the list if needed

		// and return the corresponding response

		if (finalDataType) {

			if (finalDataType !== dataTypes[0]) {

				dataTypes.unshift(finalDataType);

			}

			return responses[finalDataType];

		}

	}



	/* Chain conversions given the request and the original response

	 * Also sets the responseXXX fields on the jqXHR instance

	 */

	function ajaxConvert(s, response, jqXHR, isSuccess) {

		var conv2, current, conv, tmp, prev,

			converters = {},



			// Work with a copy of dataTypes in case we need to modify it for conversion

			dataTypes = s.dataTypes.slice();



		// Create converters map with lowercased keys

		if (dataTypes[1]) {

			for (conv in s.converters) {

				converters[conv.toLowerCase()] = s.converters[conv];

			}

		}



		current = dataTypes.shift();



		// Convert to each sequential dataType

		while (current) {



			if (s.responseFields[current]) {

				jqXHR[s.responseFields[current]] = response;

			}



			// Apply the dataFilter if provided

			if (!prev && isSuccess && s.dataFilter) {

				response = s.dataFilter(response, s.dataType);

			}



			prev = current;

			current = dataTypes.shift();



			if (current) {



				// There's only work to do if current dataType is non-auto

				if (current === "*") {



					current = prev;



					// Convert response if prev dataType is non-auto and differs from current

				} else if (prev !== "*" && prev !== current) {



					// Seek a direct converter

					conv = converters[prev + " " + current] || converters["* " + current];



					// If none found, seek a pair

					if (!conv) {

						for (conv2 in converters) {



							// If conv2 outputs current

							tmp = conv2.split(" ");

							if (tmp[1] === current) {



								// If prev can be converted to accepted input

								conv = converters[prev + " " + tmp[0]] ||

									converters["* " + tmp[0]];

								if (conv) {



									// Condense equivalence converters

									if (conv === true) {

										conv = converters[conv2];



										// Otherwise, insert the intermediate dataType

									} else if (converters[conv2] !== true) {

										current = tmp[0];

										dataTypes.unshift(tmp[1]);

									}

									break;

								}

							}

						}

					}



					// Apply converter (if not an equivalence)

					if (conv !== true) {



						// Unless errors are allowed to bubble, catch and return them

						if (conv && s.throws) {

							response = conv(response);

						} else {

							try {

								response = conv(response);

							} catch (e) {

								return {

									state: "parsererror",

									error: conv ? e : "No conversion from " + prev + " to " + current

								};

							}

						}

					}

				}

			}

		}



		return { state: "success", data: response };

	}



	jQuery.extend({



		// Counter for holding the number of active queries

		active: 0,



		// Last-Modified header cache for next request

		lastModified: {},

		etag: {},



		ajaxSettings: {

			url: location.href,

			type: "GET",

			isLocal: rlocalProtocol.test(location.protocol),

			global: true,

			processData: true,

			async: true,

			contentType: "application/x-www-form-urlencoded; charset=UTF-8",



			/*

			timeout: 0,

			data: null,

			dataType: null,

			username: null,

			password: null,

			cache: null,

			throws: false,

			traditional: false,

			headers: {},

			*/



			accepts: {

				"*": allTypes,

				text: "text/plain",

				html: "text/html",

				xml: "application/xml, text/xml",

				json: "application/json, text/javascript"

			},



			contents: {

				xml: /\bxml\b/,

				html: /\bhtml/,

				json: /\bjson\b/

			},



			responseFields: {

				xml: "responseXML",

				text: "responseText",

				json: "responseJSON"

			},



			// Data converters

			// Keys separate source (or catchall "*") and destination types with a single space

			converters: {



				// Convert anything to text

				"* text": String,



				// Text to html (true = no transformation)

				"text html": true,



				// Evaluate text as a json expression

				"text json": JSON.parse,



				// Parse text as xml

				"text xml": jQuery.parseXML

			},



			// For options that shouldn't be deep extended:

			// you can add your own custom options here if

			// and when you create one that shouldn't be

			// deep extended (see ajaxExtend)

			flatOptions: {

				url: true,

				context: true

			}

		},



		// Creates a full fledged settings object into target

		// with both ajaxSettings and settings fields.

		// If target is omitted, writes into ajaxSettings.

		ajaxSetup: function (target, settings) {

			return settings ?



				// Building a settings object

				ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :



				// Extending ajaxSettings

				ajaxExtend(jQuery.ajaxSettings, target);

		},



		ajaxPrefilter: addToPrefiltersOrTransports(prefilters),

		ajaxTransport: addToPrefiltersOrTransports(transports),



		// Main method

		ajax: function (url, options) {



			// If url is an object, simulate pre-1.5 signature

			if (typeof url === "object") {

				options = url;

				url = undefined;

			}



			// Force options to be an object

			options = options || {};



			var transport,



				// URL without anti-cache param

				cacheURL,



				// Response headers

				responseHeadersString,

				responseHeaders,



				// timeout handle

				timeoutTimer,



				// Url cleanup var

				urlAnchor,



				// Request state (becomes false upon send and true upon completion)

				completed,



				// To know if global events are to be dispatched

				fireGlobals,



				// Loop variable

				i,



				// uncached part of the url

				uncached,



				// Create the final options object

				s = jQuery.ajaxSetup({}, options),



				// Callbacks context

				callbackContext = s.context || s,



				// Context for global events is callbackContext if it is a DOM node or jQuery collection

				globalEventContext = s.context &&

					(callbackContext.nodeType || callbackContext.jquery) ?

					jQuery(callbackContext) :

					jQuery.event,



				// Deferreds

				deferred = jQuery.Deferred(),

				completeDeferred = jQuery.Callbacks("once memory"),



				// Status-dependent callbacks

				statusCode = s.statusCode || {},



				// Headers (they are sent all at once)

				requestHeaders = {},

				requestHeadersNames = {},



				// Default abort message

				strAbort = "canceled",



				// Fake xhr

				jqXHR = {

					readyState: 0,



					// Builds headers hashtable if needed

					getResponseHeader: function (key) {

						var match;

						if (completed) {

							if (!responseHeaders) {

								responseHeaders = {};

								while ((match = rheaders.exec(responseHeadersString))) {

									responseHeaders[match[1].toLowerCase() + " "] =

										(responseHeaders[match[1].toLowerCase() + " "] || [])

											.concat(match[2]);

								}

							}

							match = responseHeaders[key.toLowerCase() + " "];

						}

						return match == null ? null : match.join(", ");

					},



					// Raw string

					getAllResponseHeaders: function () {

						return completed ? responseHeadersString : null;

					},



					// Caches the header

					setRequestHeader: function (name, value) {

						if (completed == null) {

							name = requestHeadersNames[name.toLowerCase()] =

								requestHeadersNames[name.toLowerCase()] || name;

							requestHeaders[name] = value;

						}

						return this;

					},



					// Overrides response content-type header

					overrideMimeType: function (type) {

						if (completed == null) {

							s.mimeType = type;

						}

						return this;

					},



					// Status-dependent callbacks

					statusCode: function (map) {

						var code;

						if (map) {

							if (completed) {



								// Execute the appropriate callbacks

								jqXHR.always(map[jqXHR.status]);

							} else {



								// Lazy-add the new callbacks in a way that preserves old ones

								for (code in map) {

									statusCode[code] = [statusCode[code], map[code]];

								}

							}

						}

						return this;

					},



					// Cancel the request

					abort: function (statusText) {

						var finalText = statusText || strAbort;

						if (transport) {

							transport.abort(finalText);

						}

						done(0, finalText);

						return this;

					}

				};



			// Attach deferreds

			deferred.promise(jqXHR);



			// Add protocol if not provided (prefilters might expect it)

			// Handle falsy url in the settings object (trac-10093: consistency with old signature)

			// We also use the url parameter if available

			s.url = ((url || s.url || location.href) + "")

				.replace(rprotocol, location.protocol + "//");



			// Alias method option to type as per ticket trac-12004

			s.type = options.method || options.type || s.method || s.type;



			// Extract dataTypes list

			s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];



			// A cross-domain request is in order when the origin doesn't match the current origin.

			if (s.crossDomain == null) {

				urlAnchor = document.createElement("a");



				// Support: IE <=8 - 11, Edge 12 - 15

				// IE throws exception on accessing the href property if url is malformed,

				// e.g. http://example.com:80x/

				try {

					urlAnchor.href = s.url;



					// Support: IE <=8 - 11 only

					// Anchor's host property isn't correctly set when s.url is relative

					urlAnchor.href = urlAnchor.href;

					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==

						urlAnchor.protocol + "//" + urlAnchor.host;

				} catch (e) {



					// If there is an error parsing the URL, assume it is crossDomain,

					// it can be rejected by the transport if it is invalid

					s.crossDomain = true;

				}

			}



			// Convert data if not already a string

			if (s.data && s.processData && typeof s.data !== "string") {

				s.data = jQuery.param(s.data, s.traditional);

			}



			// Apply prefilters

			inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);



			// If request was aborted inside a prefilter, stop there

			if (completed) {

				return jqXHR;

			}



			// We can fire global events as of now if asked to

			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)

			fireGlobals = jQuery.event && s.global;



			// Watch for a new set of requests

			if (fireGlobals && jQuery.active++ === 0) {

				jQuery.event.trigger("ajaxStart");

			}



			// Uppercase the type

			s.type = s.type.toUpperCase();



			// Determine if request has content

			s.hasContent = !rnoContent.test(s.type);



			// Save the URL in case we're toying with the If-Modified-Since

			// and/or If-None-Match header later on

			// Remove hash to simplify url manipulation

			cacheURL = s.url.replace(rhash, "");



			// More options handling for requests with no content

			if (!s.hasContent) {



				// Remember the hash so we can put it back

				uncached = s.url.slice(cacheURL.length);



				// If data is available and should be processed, append data to url

				if (s.data && (s.processData || typeof s.data === "string")) {

					cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;



					// trac-9682: remove data so that it's not used in an eventual retry

					delete s.data;

				}



				// Add or update anti-cache param if needed

				if (s.cache === false) {

					cacheURL = cacheURL.replace(rantiCache, "$1");

					uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + (nonce.guid++) +

						uncached;

				}



				// Put hash and anti-cache on the URL that will be requested (gh-1732)

				s.url = cacheURL + uncached;



				// Change '%20' to '+' if this is encoded form body content (gh-2658)

			} else if (s.data && s.processData &&

				(s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {

				s.data = s.data.replace(r20, "+");

			}



			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.

			if (s.ifModified) {

				if (jQuery.lastModified[cacheURL]) {

					jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);

				}

				if (jQuery.etag[cacheURL]) {

					jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);

				}

			}



			// Set the correct header, if data is being sent

			if (s.data && s.hasContent && s.contentType !== false || options.contentType) {

				jqXHR.setRequestHeader("Content-Type", s.contentType);

			}



			// Set the Accepts header for the server, depending on the dataType

			jqXHR.setRequestHeader(

				"Accept",

				s.dataTypes[0] && s.accepts[s.dataTypes[0]] ?

					s.accepts[s.dataTypes[0]] +

					(s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") :

					s.accepts["*"]

			);



			// Check for headers option

			for (i in s.headers) {

				jqXHR.setRequestHeader(i, s.headers[i]);

			}



			// Allow custom headers/mimetypes and early abort

			if (s.beforeSend &&

				(s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {



				// Abort if not done already and return

				return jqXHR.abort();

			}



			// Aborting is no longer a cancellation

			strAbort = "abort";



			// Install callbacks on deferreds

			completeDeferred.add(s.complete);

			jqXHR.done(s.success);

			jqXHR.fail(s.error);



			// Get transport

			transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);



			// If no transport, we auto-abort

			if (!transport) {

				done(-1, "No Transport");

			} else {

				jqXHR.readyState = 1;



				// Send global event

				if (fireGlobals) {

					globalEventContext.trigger("ajaxSend", [jqXHR, s]);

				}



				// If request was aborted inside ajaxSend, stop there

				if (completed) {

					return jqXHR;

				}



				// Timeout

				if (s.async && s.timeout > 0) {

					timeoutTimer = window.setTimeout(function () {

						jqXHR.abort("timeout");

					}, s.timeout);

				}



				try {

					completed = false;

					transport.send(requestHeaders, done);

				} catch (e) {



					// Rethrow post-completion exceptions

					if (completed) {

						throw e;

					}



					// Propagate others as results

					done(-1, e);

				}

			}



			// Callback for when everything is done

			function done(status, nativeStatusText, responses, headers) {

				var isSuccess, success, error, response, modified,

					statusText = nativeStatusText;



				// Ignore repeat invocations

				if (completed) {

					return;

				}



				completed = true;



				// Clear timeout if it exists

				if (timeoutTimer) {

					window.clearTimeout(timeoutTimer);

				}



				// Dereference transport for early garbage collection

				// (no matter how long the jqXHR object will be used)

				transport = undefined;



				// Cache response headers

				responseHeadersString = headers || "";



				// Set readyState

				jqXHR.readyState = status > 0 ? 4 : 0;



				// Determine if successful

				isSuccess = status >= 200 && status < 300 || status === 304;



				// Get response data

				if (responses) {

					response = ajaxHandleResponses(s, jqXHR, responses);

				}



				// Use a noop converter for missing script but not if jsonp

				if (!isSuccess &&

					jQuery.inArray("script", s.dataTypes) > -1 &&

					jQuery.inArray("json", s.dataTypes) < 0) {

					s.converters["text script"] = function () { };

				}



				// Convert no matter what (that way responseXXX fields are always set)

				response = ajaxConvert(s, response, jqXHR, isSuccess);



				// If successful, handle type chaining

				if (isSuccess) {



					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.

					if (s.ifModified) {

						modified = jqXHR.getResponseHeader("Last-Modified");

						if (modified) {

							jQuery.lastModified[cacheURL] = modified;

						}

						modified = jqXHR.getResponseHeader("etag");

						if (modified) {

							jQuery.etag[cacheURL] = modified;

						}

					}



					// if no content

					if (status === 204 || s.type === "HEAD") {

						statusText = "nocontent";



						// if not modified

					} else if (status === 304) {

						statusText = "notmodified";



						// If we have data, let's convert it

					} else {

						statusText = response.state;

						success = response.data;

						error = response.error;

						isSuccess = !error;

					}

				} else {



					// Extract error from statusText and normalize for non-aborts

					error = statusText;

					if (status || !statusText) {

						statusText = "error";

						if (status < 0) {

							status = 0;

						}

					}

				}



				// Set data for the fake xhr object

				jqXHR.status = status;

				jqXHR.statusText = (nativeStatusText || statusText) + "";



				// Success/Error

				if (isSuccess) {

					deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);

				} else {

					deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);

				}



				// Status-dependent callbacks

				jqXHR.statusCode(statusCode);

				statusCode = undefined;



				if (fireGlobals) {

					globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError",

						[jqXHR, s, isSuccess ? success : error]);

				}



				// Complete

				completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);



				if (fireGlobals) {

					globalEventContext.trigger("ajaxComplete", [jqXHR, s]);



					// Handle the global AJAX counter

					if (!(--jQuery.active)) {

						jQuery.event.trigger("ajaxStop");

					}

				}

			}



			return jqXHR;

		},



		getJSON: function (url, data, callback) {

			return jQuery.get(url, data, callback, "json");

		},



		getScript: function (url, callback) {

			return jQuery.get(url, undefined, callback, "script");

		}

	});



	jQuery.each(["get", "post"], function (_i, method) {

		jQuery[method] = function (url, data, callback, type) {



			// Shift arguments if data argument was omitted

			if (isFunction(data)) {

				type = type || callback;

				callback = data;

				data = undefined;

			}



			// The url can be an options object (which then must have .url)

			return jQuery.ajax(jQuery.extend({

				url: url,

				type: method,

				dataType: type,

				data: data,

				success: callback

			}, jQuery.isPlainObject(url) && url));

		};

	});



	jQuery.ajaxPrefilter(function (s) {

		var i;

		for (i in s.headers) {

			if (i.toLowerCase() === "content-type") {

				s.contentType = s.headers[i] || "";

			}

		}

	});





	jQuery._evalUrl = function (url, options, doc) {

		return jQuery.ajax({

			url: url,



			// Make this explicit, since user can override this through ajaxSetup (trac-11264)

			type: "GET",

			dataType: "script",

			cache: true,

			async: false,

			global: false,



			// Only evaluate the response if it is successful (gh-4126)

			// dataFilter is not invoked for failure responses, so using it instead

			// of the default converter is kludgy but it works.

			converters: {

				"text script": function () { }

			},

			dataFilter: function (response) {

				jQuery.globalEval(response, options, doc);

			}

		});

	};





	jQuery.fn.extend({

		wrapAll: function (html) {

			var wrap;



			if (this[0]) {

				if (isFunction(html)) {

					html = html.call(this[0]);

				}



				// The elements to wrap the target around

				wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);



				if (this[0].parentNode) {

					wrap.insertBefore(this[0]);

				}



				wrap.map(function () {

					var elem = this;



					while (elem.firstElementChild) {

						elem = elem.firstElementChild;

					}



					return elem;

				}).append(this);

			}



			return this;

		},



		wrapInner: function (html) {

			if (isFunction(html)) {

				return this.each(function (i) {

					jQuery(this).wrapInner(html.call(this, i));

				});

			}



			return this.each(function () {

				var self = jQuery(this),

					contents = self.contents();



				if (contents.length) {

					contents.wrapAll(html);



				} else {

					self.append(html);

				}

			});

		},



		wrap: function (html) {

			var htmlIsFunction = isFunction(html);



			return this.each(function (i) {

				jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);

			});

		},



		unwrap: function (selector) {

			this.parent(selector).not("body").each(function () {

				jQuery(this).replaceWith(this.childNodes);

			});

			return this;

		}

	});





	jQuery.expr.pseudos.hidden = function (elem) {

		return !jQuery.expr.pseudos.visible(elem);

	};

	jQuery.expr.pseudos.visible = function (elem) {

		return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);

	};









	jQuery.ajaxSettings.xhr = function () {

		try {

			return new window.XMLHttpRequest();

		} catch (e) { }

	};



	var xhrSuccessStatus = {



		// File protocol always yields status code 0, assume 200

		0: 200,



		// Support: IE <=9 only

		// trac-1450: sometimes IE returns 1223 when it should be 204

		1223: 204

	},

		xhrSupported = jQuery.ajaxSettings.xhr();



	support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);

	support.ajax = xhrSupported = !!xhrSupported;



	jQuery.ajaxTransport(function (options) {

		var callback, errorCallback;



		// Cross domain only allowed if supported through XMLHttpRequest

		if (support.cors || xhrSupported && !options.crossDomain) {

			return {

				send: function (headers, complete) {

					var i,

						xhr = options.xhr();



					xhr.open(

						options.type,

						options.url,

						options.async,

						options.username,

						options.password

					);



					// Apply custom fields if provided

					if (options.xhrFields) {

						for (i in options.xhrFields) {

							xhr[i] = options.xhrFields[i];

						}

					}



					// Override mime type if needed

					if (options.mimeType && xhr.overrideMimeType) {

						xhr.overrideMimeType(options.mimeType);

					}



					// X-Requested-With header

					// For cross-domain requests, seeing as conditions for a preflight are

					// akin to a jigsaw puzzle, we simply never set it to be sure.

					// (it can always be set on a per-request basis or even using ajaxSetup)

					// For same-domain requests, won't change header if already provided.

					if (!options.crossDomain && !headers["X-Requested-With"]) {

						headers["X-Requested-With"] = "XMLHttpRequest";

					}



					// Set headers

					for (i in headers) {

						xhr.setRequestHeader(i, headers[i]);

					}



					// Callback

					callback = function (type) {

						return function () {

							if (callback) {

								callback = errorCallback = xhr.onload =

									xhr.onerror = xhr.onabort = xhr.ontimeout =

									xhr.onreadystatechange = null;



								if (type === "abort") {

									xhr.abort();

								} else if (type === "error") {



									// Support: IE <=9 only

									// On a manual native abort, IE9 throws

									// errors on any property access that is not readyState

									if (typeof xhr.status !== "number") {

										complete(0, "error");

									} else {

										complete(



											// File: protocol always yields status 0; see trac-8605, trac-14207

											xhr.status,

											xhr.statusText

										);

									}

								} else {

									complete(

										xhrSuccessStatus[xhr.status] || xhr.status,

										xhr.statusText,



										// Support: IE <=9 only

										// IE9 has no XHR2 but throws on binary (trac-11426)

										// For XHR2 non-text, let the caller handle it (gh-2498)

										(xhr.responseType || "text") !== "text" ||

											typeof xhr.responseText !== "string" ?

											{ binary: xhr.response } :

											{ text: xhr.responseText },

										xhr.getAllResponseHeaders()

									);

								}

							}

						};

					};



					// Listen to events

					xhr.onload = callback();

					errorCallback = xhr.onerror = xhr.ontimeout = callback("error");



					// Support: IE 9 only

					// Use onreadystatechange to replace onabort

					// to handle uncaught aborts

					if (xhr.onabort !== undefined) {

						xhr.onabort = errorCallback;

					} else {

						xhr.onreadystatechange = function () {



							// Check readyState before timeout as it changes

							if (xhr.readyState === 4) {



								// Allow onerror to be called first,

								// but that will not handle a native abort

								// Also, save errorCallback to a variable

								// as xhr.onerror cannot be accessed

								window.setTimeout(function () {

									if (callback) {

										errorCallback();

									}

								});

							}

						};

					}



					// Create the abort callback

					callback = callback("abort");



					try {



						// Do send the request (this may raise an exception)

						xhr.send(options.hasContent && options.data || null);

					} catch (e) {



						// trac-14683: Only rethrow if this hasn't been notified as an error yet

						if (callback) {

							throw e;

						}

					}

				},



				abort: function () {

					if (callback) {

						callback();

					}

				}

			};

		}

	});









	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

	jQuery.ajaxPrefilter(function (s) {

		if (s.crossDomain) {

			s.contents.script = false;

		}

	});



	// Install script dataType

	jQuery.ajaxSetup({

		accepts: {

			script: "text/javascript, application/javascript, " +

				"application/ecmascript, application/x-ecmascript"

		},

		contents: {

			script: /\b(?:java|ecma)script\b/

		},

		converters: {

			"text script": function (text) {

				jQuery.globalEval(text);

				return text;

			}

		}

	});



	// Handle cache's special case and crossDomain

	jQuery.ajaxPrefilter("script", function (s) {

		if (s.cache === undefined) {

			s.cache = false;

		}

		if (s.crossDomain) {

			s.type = "GET";

		}

	});



	// Bind script tag hack transport

	jQuery.ajaxTransport("script", function (s) {



		// This transport only deals with cross domain or forced-by-attrs requests

		if (s.crossDomain || s.scriptAttrs) {

			var script, callback;

			return {

				send: function (_, complete) {

					script = jQuery("<script>")

						.attr(s.scriptAttrs || {})

						.prop({ charset: s.scriptCharset, src: s.url })

						.on("load error", callback = function (evt) {

							script.remove();

							callback = null;

							if (evt) {

								complete(evt.type === "error" ? 404 : 200, evt.type);

							}

						});



					// Use native DOM manipulation to avoid our domManip AJAX trickery

					document.head.appendChild(script[0]);

				},

				abort: function () {

					if (callback) {

						callback();

					}

				}

			};

		}

	});









	var oldCallbacks = [],

		rjsonp = /(=)\?(?=&|$)|\?\?/;



	// Default jsonp settings

	jQuery.ajaxSetup({

		jsonp: "callback",

		jsonpCallback: function () {

			var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce.guid++));

			this[callback] = true;

			return callback;

		}

	});



	// Detect, normalize options and install callbacks for jsonp requests

	jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {



		var callbackName, overwritten, responseContainer,

			jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ?

				"url" :

				typeof s.data === "string" &&

				(s.contentType || "")

					.indexOf("application/x-www-form-urlencoded") === 0 &&

				rjsonp.test(s.data) && "data"

			);



		// Handle iff the expected data type is "jsonp" or we have a parameter to set

		if (jsonProp || s.dataTypes[0] === "jsonp") {



			// Get callback name, remembering preexisting value associated with it

			callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ?

				s.jsonpCallback() :

				s.jsonpCallback;



			// Insert callback into url or form data

			if (jsonProp) {

				s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);

			} else if (s.jsonp !== false) {

				s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;

			}



			// Use data converter to retrieve json after script execution

			s.converters["script json"] = function () {

				if (!responseContainer) {

					jQuery.error(callbackName + " was not called");

				}

				return responseContainer[0];

			};



			// Force json dataType

			s.dataTypes[0] = "json";



			// Install callback

			overwritten = window[callbackName];

			window[callbackName] = function () {

				responseContainer = arguments;

			};



			// Clean-up function (fires after converters)

			jqXHR.always(function () {



				// If previous value didn't exist - remove it

				if (overwritten === undefined) {

					jQuery(window).removeProp(callbackName);



					// Otherwise restore preexisting value

				} else {

					window[callbackName] = overwritten;

				}



				// Save back as free

				if (s[callbackName]) {



					// Make sure that re-using the options doesn't screw things around

					s.jsonpCallback = originalSettings.jsonpCallback;



					// Save the callback name for future use

					oldCallbacks.push(callbackName);

				}



				// Call if it was a function and we have a response

				if (responseContainer && isFunction(overwritten)) {

					overwritten(responseContainer[0]);

				}



				responseContainer = overwritten = undefined;

			});



			// Delegate to script

			return "script";

		}

	});









	// Support: Safari 8 only

	// In Safari 8 documents created via document.implementation.createHTMLDocument

	// collapse sibling forms: the second one becomes a child of the first one.

	// Because of that, this security measure has to be disabled in Safari 8.

	// https://bugs.webkit.org/show_bug.cgi?id=137337

	support.createHTMLDocument = (function () {

		var body = document.implementation.createHTMLDocument("").body;

		body.innerHTML = "<form></form><form></form>";

		return body.childNodes.length === 2;

	})();





	// Argument "data" should be string of html

	// context (optional): If specified, the fragment will be created in this context,

	// defaults to document

	// keepScripts (optional): If true, will include scripts passed in the html string

	jQuery.parseHTML = function (data, context, keepScripts) {

		if (typeof data !== "string") {

			return [];

		}

		if (typeof context === "boolean") {

			keepScripts = context;

			context = false;

		}



		var base, parsed, scripts;



		if (!context) {



			// Stop scripts or inline event handlers from being executed immediately

			// by using document.implementation

			if (support.createHTMLDocument) {

				context = document.implementation.createHTMLDocument("");



				// Set the base href for the created document

				// so any parsed elements with URLs

				// are based on the document's URL (gh-2965)

				base = context.createElement("base");

				base.href = document.location.href;

				context.head.appendChild(base);

			} else {

				context = document;

			}

		}



		parsed = rsingleTag.exec(data);

		scripts = !keepScripts && [];



		// Single tag

		if (parsed) {

			return [context.createElement(parsed[1])];

		}



		parsed = buildFragment([data], context, scripts);



		if (scripts && scripts.length) {

			jQuery(scripts).remove();

		}



		return jQuery.merge([], parsed.childNodes);

	};





	/**

	 * Load a url into a page

	 */

	jQuery.fn.load = function (url, params, callback) {

		var selector, type, response,

			self = this,

			off = url.indexOf(" ");



		if (off > -1) {

			selector = stripAndCollapse(url.slice(off));

			url = url.slice(0, off);

		}



		// If it's a function

		if (isFunction(params)) {



			// We assume that it's the callback

			callback = params;

			params = undefined;



			// Otherwise, build a param string

		} else if (params && typeof params === "object") {

			type = "POST";

		}



		// If we have elements to modify, make the request

		if (self.length > 0) {

			jQuery.ajax({

				url: url,



				// If "type" variable is undefined, then "GET" method will be used.

				// Make value of this field explicit since

				// user can override it through ajaxSetup method

				type: type || "GET",

				dataType: "html",

				data: params

			}).done(function (responseText) {



				// Save response for use in complete callback

				response = arguments;



				self.html(selector ?



					// If a selector was specified, locate the right elements in a dummy div

					// Exclude scripts to avoid IE 'Permission Denied' errors

					jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :



					// Otherwise use the full result

					responseText);



				// If the request succeeds, this function gets "data", "status", "jqXHR"

				// but they are ignored because response was set above.

				// If it fails, this function gets "jqXHR", "status", "error"

			}).always(callback && function (jqXHR, status) {

				self.each(function () {

					callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);

				});

			});

		}



		return this;

	};









	jQuery.expr.pseudos.animated = function (elem) {

		return jQuery.grep(jQuery.timers, function (fn) {

			return elem === fn.elem;

		}).length;

	};









	jQuery.offset = {

		setOffset: function (elem, options, i) {

			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,

				position = jQuery.css(elem, "position"),

				curElem = jQuery(elem),

				props = {};



			// Set position first, in-case top/left are set even on static elem

			if (position === "static") {

				elem.style.position = "relative";

			}



			curOffset = curElem.offset();

			curCSSTop = jQuery.css(elem, "top");

			curCSSLeft = jQuery.css(elem, "left");

			calculatePosition = (position === "absolute" || position === "fixed") &&

				(curCSSTop + curCSSLeft).indexOf("auto") > -1;



			// Need to be able to calculate position if either

			// top or left is auto and position is either absolute or fixed

			if (calculatePosition) {

				curPosition = curElem.position();

				curTop = curPosition.top;

				curLeft = curPosition.left;



			} else {

				curTop = parseFloat(curCSSTop) || 0;

				curLeft = parseFloat(curCSSLeft) || 0;

			}



			if (isFunction(options)) {



				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)

				options = options.call(elem, i, jQuery.extend({}, curOffset));

			}



			if (options.top != null) {

				props.top = (options.top - curOffset.top) + curTop;

			}

			if (options.left != null) {

				props.left = (options.left - curOffset.left) + curLeft;

			}



			if ("using" in options) {

				options.using.call(elem, props);



			} else {

				curElem.css(props);

			}

		}

	};



	jQuery.fn.extend({



		// offset() relates an element's border box to the document origin

		offset: function (options) {



			// Preserve chaining for setter

			if (arguments.length) {

				return options === undefined ?

					this :

					this.each(function (i) {

						jQuery.offset.setOffset(this, options, i);

					});

			}



			var rect, win,

				elem = this[0];



			if (!elem) {

				return;

			}



			// Return zeros for disconnected and hidden (display: none) elements (gh-2310)

			// Support: IE <=11 only

			// Running getBoundingClientRect on a

			// disconnected node in IE throws an error

			if (!elem.getClientRects().length) {

				return { top: 0, left: 0 };

			}



			// Get document-relative position by adding viewport scroll to viewport-relative gBCR

			rect = elem.getBoundingClientRect();

			win = elem.ownerDocument.defaultView;

			return {

				top: rect.top + win.pageYOffset,

				left: rect.left + win.pageXOffset

			};

		},



		// position() relates an element's margin box to its offset parent's padding box

		// This corresponds to the behavior of CSS absolute positioning

		position: function () {

			if (!this[0]) {

				return;

			}



			var offsetParent, offset, doc,

				elem = this[0],

				parentOffset = { top: 0, left: 0 };



			// position:fixed elements are offset from the viewport, which itself always has zero offset

			if (jQuery.css(elem, "position") === "fixed") {



				// Assume position:fixed implies availability of getBoundingClientRect

				offset = elem.getBoundingClientRect();



			} else {

				offset = this.offset();



				// Account for the *real* offset parent, which can be the document or its root element

				// when a statically positioned element is identified

				doc = elem.ownerDocument;

				offsetParent = elem.offsetParent || doc.documentElement;

				while (offsetParent &&

					(offsetParent === doc.body || offsetParent === doc.documentElement) &&

					jQuery.css(offsetParent, "position") === "static") {



					offsetParent = offsetParent.parentNode;

				}

				if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {



					// Incorporate borders into its offset, since they are outside its content origin

					parentOffset = jQuery(offsetParent).offset();

					parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);

					parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);

				}

			}



			// Subtract parent offsets and element margins

			return {

				top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),

				left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)

			};

		},



		// This method will return documentElement in the following cases:

		// 1) For the element inside the iframe without offsetParent, this method will return

		//    documentElement of the parent window

		// 2) For the hidden or detached element

		// 3) For body or html element, i.e. in case of the html node - it will return itself

		//

		// but those exceptions were never presented as a real life use-cases

		// and might be considered as more preferable results.

		//

		// This logic, however, is not guaranteed and can change at any point in the future

		offsetParent: function () {

			return this.map(function () {

				var offsetParent = this.offsetParent;



				while (offsetParent && jQuery.css(offsetParent, "position") === "static") {

					offsetParent = offsetParent.offsetParent;

				}



				return offsetParent || documentElement;

			});

		}

	});



	// Create scrollLeft and scrollTop methods

	jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {

		var top = "pageYOffset" === prop;



		jQuery.fn[method] = function (val) {

			return access(this, function (elem, method, val) {



				// Coalesce documents and windows

				var win;

				if (isWindow(elem)) {

					win = elem;

				} else if (elem.nodeType === 9) {

					win = elem.defaultView;

				}



				if (val === undefined) {

					return win ? win[prop] : elem[method];

				}



				if (win) {

					win.scrollTo(

						!top ? val : win.pageXOffset,

						top ? val : win.pageYOffset

					);



				} else {

					elem[method] = val;

				}

			}, method, val, arguments.length);

		};

	});



	// Support: Safari <=7 - 9.1, Chrome <=37 - 49

	// Add the top/left cssHooks using jQuery.fn.position

	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084

	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347

	// getComputedStyle returns percent when specified for top/left/bottom/right;

	// rather than make the css module depend on the offset module, just check for it here

	jQuery.each(["top", "left"], function (_i, prop) {

		jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition,

			function (elem, computed) {

				if (computed) {

					computed = curCSS(elem, prop);



					// If curCSS returns percentage, fallback to offset

					return rnumnonpx.test(computed) ?

						jQuery(elem).position()[prop] + "px" :

						computed;

				}

			}

		);

	});





	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

	jQuery.each({ Height: "height", Width: "width" }, function (name, type) {

		jQuery.each({

			padding: "inner" + name,

			content: type,

			"": "outer" + name

		}, function (defaultExtra, funcName) {



			// Margin is only for outerHeight, outerWidth

			jQuery.fn[funcName] = function (margin, value) {

				var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),

					extra = defaultExtra || (margin === true || value === true ? "margin" : "border");



				return access(this, function (elem, type, value) {

					var doc;



					if (isWindow(elem)) {



						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)

						return funcName.indexOf("outer") === 0 ?

							elem["inner" + name] :

							elem.document.documentElement["client" + name];

					}



					// Get document width or height

					if (elem.nodeType === 9) {

						doc = elem.documentElement;



						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],

						// whichever is greatest

						return Math.max(

							elem.body["scroll" + name], doc["scroll" + name],

							elem.body["offset" + name], doc["offset" + name],

							doc["client" + name]

						);

					}



					return value === undefined ?



						// Get width or height on the element, requesting but not forcing parseFloat

						jQuery.css(elem, type, extra) :



						// Set width or height on the element

						jQuery.style(elem, type, value, extra);

				}, type, chainable ? margin : undefined, chainable);

			};

		});

	});





	jQuery.each([

		"ajaxStart",

		"ajaxStop",

		"ajaxComplete",

		"ajaxError",

		"ajaxSuccess",

		"ajaxSend"

	], function (_i, type) {

		jQuery.fn[type] = function (fn) {

			return this.on(type, fn);

		};

	});









	jQuery.fn.extend({



		bind: function (types, data, fn) {

			return this.on(types, null, data, fn);

		},

		unbind: function (types, fn) {

			return this.off(types, null, fn);

		},



		delegate: function (selector, types, data, fn) {

			return this.on(types, selector, data, fn);

		},

		undelegate: function (selector, types, fn) {



			// ( namespace ) or ( selector, types [, fn] )

			return arguments.length === 1 ?

				this.off(selector, "**") :

				this.off(types, selector || "**", fn);

		},



		hover: function (fnOver, fnOut) {

			return this

				.on("mouseenter", fnOver)

				.on("mouseleave", fnOut || fnOver);

		}

	});



	jQuery.each(

		("blur focus focusin focusout resize scroll click dblclick " +

			"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +

			"change select submit keydown keypress keyup contextmenu").split(" "),

		function (_i, name) {



			// Handle event binding

			jQuery.fn[name] = function (data, fn) {

				return arguments.length > 0 ?

					this.on(name, null, data, fn) :

					this.trigger(name);

			};

		}

	);









	// Support: Android <=4.0 only

	// Make sure we trim BOM and NBSP

	// Require that the "whitespace run" starts from a non-whitespace

	// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.

	var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;



	// Bind a function to a context, optionally partially applying any

	// arguments.

	// jQuery.proxy is deprecated to promote standards (specifically Function#bind)

	// However, it is not slated for removal any time soon

	jQuery.proxy = function (fn, context) {

		var tmp, args, proxy;



		if (typeof context === "string") {

			tmp = fn[context];

			context = fn;

			fn = tmp;

		}



		// Quick check to determine if target is callable, in the spec

		// this throws a TypeError, but we will just return undefined.

		if (!isFunction(fn)) {

			return undefined;

		}



		// Simulated bind

		args = slice.call(arguments, 2);

		proxy = function () {

			return fn.apply(context || this, args.concat(slice.call(arguments)));

		};



		// Set the guid of unique handler to the same of original handler, so it can be removed

		proxy.guid = fn.guid = fn.guid || jQuery.guid++;



		return proxy;

	};



	jQuery.holdReady = function (hold) {

		if (hold) {

			jQuery.readyWait++;

		} else {

			jQuery.ready(true);

		}

	};

	jQuery.isArray = Array.isArray;

	jQuery.parseJSON = JSON.parse;

	jQuery.nodeName = nodeName;

	jQuery.isFunction = isFunction;

	jQuery.isWindow = isWindow;

	jQuery.camelCase = camelCase;

	jQuery.type = toType;



	jQuery.now = Date.now;



	jQuery.isNumeric = function (obj) {



		// As of jQuery 3.0, isNumeric is limited to

		// strings and numbers (primitives or objects)

		// that can be coerced to finite numbers (gh-2662)

		var type = jQuery.type(obj);

		return (type === "number" || type === "string") &&



			// parseFloat NaNs numeric-cast false positives ("")

			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")

			// subtraction forces infinities to NaN

			!isNaN(obj - parseFloat(obj));

	};



	jQuery.trim = function (text) {

		return text == null ?

			"" :

			(text + "").replace(rtrim, "$1");

	};







	// Register as a named AMD module, since jQuery can be concatenated with other

	// files that may use define, but not via a proper concatenation script that

	// understands anonymous AMD modules. A named AMD is safest and most robust

	// way to register. Lowercase jquery is used because AMD module names are

	// derived from file names, and jQuery is normally delivered in a lowercase

	// file name. Do this after creating the global so that if an AMD module wants

	// to call noConflict to hide this version of jQuery, it will work.



	// Note that for maximum portability, libraries that are not jQuery should

	// declare themselves as anonymous modules, and avoid setting a global if an

	// AMD loader is present. jQuery is a special case. For more information, see

	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon



	if (typeof define === "function" && define.amd) {

		define("jquery", [], function () {

			return jQuery;

		});

	}









	var



		// Map over jQuery in case of overwrite

		_jQuery = window.jQuery,



		// Map over the $ in case of overwrite

		_$ = window.$;



	jQuery.noConflict = function (deep) {

		if (window.$ === jQuery) {

			window.$ = _$;

		}



		if (deep && window.jQuery === jQuery) {

			window.jQuery = _jQuery;

		}



		return jQuery;

	};



	// Expose jQuery and $ identifiers, even in AMD

	// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)

	// and CommonJS for browser emulators (trac-13566)

	if (typeof noGlobal === "undefined") {

		window.jQuery = window.$ = jQuery;

	}









	return jQuery;

});







// end Jquery





// start Select 2



/*! Select2 4.1.0-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */

!function (n) { "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof module && module.exports ? module.exports = function (e, t) { return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), n(t), t } : n(jQuery) }(function (t) { var e, n, s, p, r, o, h, f, g, m, y, v, i, a, _, s = ((u = t && t.fn && t.fn.select2 && t.fn.select2.amd ? t.fn.select2.amd : u) && u.requirejs || (u ? n = u : u = {}, g = {}, m = {}, y = {}, v = {}, i = Object.prototype.hasOwnProperty, a = [].slice, _ = /\.js$/, h = function (e, t) { var n, s, i = c(e), r = i[0], t = t[1]; return e = i[1], r && (n = x(r = l(r, t))), r ? e = n && n.normalize ? n.normalize(e, (s = t, function (e) { return l(e, s) })) : l(e, t) : (r = (i = c(e = l(e, t)))[0], e = i[1], r && (n = x(r))), { f: r ? r + "!" + e : e, n: e, pr: r, p: n } }, f = { require: function (e) { return w(e) }, exports: function (e) { var t = g[e]; return void 0 !== t ? t : g[e] = {} }, module: function (e) { return { id: e, uri: "", exports: g[e], config: (t = e, function () { return y && y.config && y.config[t] || {} }) }; var t } }, r = function (e, t, n, s) { var i, r, o, a, l, c = [], u = typeof n, d = A(s = s || e); if ("undefined" == u || "function" == u) { for (t = !t.length && n.length ? ["require", "exports", "module"] : t, a = 0; a < t.length; a += 1)if ("require" === (r = (o = h(t[a], d)).f)) c[a] = f.require(e); else if ("exports" === r) c[a] = f.exports(e), l = !0; else if ("module" === r) i = c[a] = f.module(e); else if (b(g, r) || b(m, r) || b(v, r)) c[a] = x(r); else { if (!o.p) throw new Error(e + " missing " + r); o.p.load(o.n, w(s, !0), function (t) { return function (e) { g[t] = e } }(r), {}), c[a] = g[r] } u = n ? n.apply(g[e], c) : void 0, e && (i && i.exports !== p && i.exports !== g[e] ? g[e] = i.exports : u === p && l || (g[e] = u)) } else e && (g[e] = n) }, e = n = o = function (e, t, n, s, i) { if ("string" == typeof e) return f[e] ? f[e](t) : x(h(e, A(t)).f); if (!e.splice) { if ((y = e).deps && o(y.deps, y.callback), !t) return; t.splice ? (e = t, t = n, n = null) : e = p } return t = t || function () { }, "function" == typeof n && (n = s, s = i), s ? r(p, e, t, n) : setTimeout(function () { r(p, e, t, n) }, 4), o }, o.config = function (e) { return o(e) }, e._defined = g, (s = function (e, t, n) { if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name"); t.splice || (n = t, t = []), b(g, e) || b(m, e) || (m[e] = [e, t, n]) }).amd = { jQuery: !0 }, u.requirejs = e, u.require = n, u.define = s), u.define("almond", function () { }), u.define("jquery", [], function () { var e = t || $; return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e }), u.define("select2/utils", ["jquery"], function (r) { var s = {}; function c(e) { var t, n = e.prototype, s = []; for (t in n) "function" == typeof n[t] && "constructor" !== t && s.push(t); return s } s.Extend = function (e, t) { var n, s = {}.hasOwnProperty; function i() { this.constructor = e } for (n in t) s.call(t, n) && (e[n] = t[n]); return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e }, s.Decorate = function (s, i) { var e = c(i), t = c(s); function r() { var e = Array.prototype.unshift, t = i.prototype.constructor.length, n = s.prototype.constructor; 0 < t && (e.call(arguments, s.prototype.constructor), n = i.prototype.constructor), n.apply(this, arguments) } i.displayName = s.displayName, r.prototype = new function () { this.constructor = r }; for (var n = 0; n < t.length; n++) { var o = t[n]; r.prototype[o] = s.prototype[o] } for (var a = 0; a < e.length; a++) { var l = e[a]; r.prototype[l] = function (e) { var t = function () { }; e in r.prototype && (t = r.prototype[e]); var n = i.prototype[e]; return function () { return Array.prototype.unshift.call(arguments, t), n.apply(this, arguments) } }(l) } return r }; function e() { this.listeners = {} } e.prototype.on = function (e, t) { this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t] }, e.prototype.trigger = function (e) { var t = Array.prototype.slice, n = t.call(arguments, 1); this.listeners = this.listeners || {}, 0 === (n = null == n ? [] : n).length && n.push({}), (n[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments) }, e.prototype.invoke = function (e, t) { for (var n = 0, s = e.length; n < s; n++)e[n].apply(this, t) }, s.Observable = e, s.generateChars = function (e) { for (var t = "", n = 0; n < e; n++)t += Math.floor(36 * Math.random()).toString(36); return t }, s.bind = function (e, t) { return function () { e.apply(t, arguments) } }, s._convertData = function (e) { for (var t in e) { var n = t.split("-"), s = e; if (1 !== n.length) { for (var i = 0; i < n.length; i++) { var r = n[i]; (r = r.substring(0, 1).toLowerCase() + r.substring(1)) in s || (s[r] = {}), i == n.length - 1 && (s[r] = e[t]), s = s[r] } delete e[t] } } return e }, s.hasScroll = function (e, t) { var n = r(t), s = t.style.overflowX, i = t.style.overflowY; return (s !== i || "hidden" !== i && "visible" !== i) && ("scroll" === s || "scroll" === i || (n.innerHeight() < t.scrollHeight || n.innerWidth() < t.scrollWidth)) }, s.escapeMarkup = function (e) { var t = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" }; return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function (e) { return t[e] }) }, s.__cache = {}; var n = 0; return s.GetUniqueElementId = function (e) { var t = e.getAttribute("data-select2-id"); return null != t || (t = e.id ? "select2-data-" + e.id : "select2-data-" + (++n).toString() + "-" + s.generateChars(4), e.setAttribute("data-select2-id", t)), t }, s.StoreData = function (e, t, n) { e = s.GetUniqueElementId(e); s.__cache[e] || (s.__cache[e] = {}), s.__cache[e][t] = n }, s.GetData = function (e, t) { var n = s.GetUniqueElementId(e); return t ? s.__cache[n] && null != s.__cache[n][t] ? s.__cache[n][t] : r(e).data(t) : s.__cache[n] }, s.RemoveData = function (e) { var t = s.GetUniqueElementId(e); null != s.__cache[t] && delete s.__cache[t], e.removeAttribute("data-select2-id") }, s.copyNonInternalCssClasses = function (e, t) { var n = (n = e.getAttribute("class").trim().split(/\s+/)).filter(function (e) { return 0 === e.indexOf("select2-") }), t = (t = t.getAttribute("class").trim().split(/\s+/)).filter(function (e) { return 0 !== e.indexOf("select2-") }), t = n.concat(t); e.setAttribute("class", t.join(" ")) }, s }), u.define("select2/results", ["jquery", "./utils"], function (d, p) { function s(e, t, n) { this.$element = e, this.data = n, this.options = t, s.__super__.constructor.call(this) } return p.Extend(s, p.Observable), s.prototype.render = function () { var e = d('<ul class="select2-results__options" role="listbox"></ul>'); return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e }, s.prototype.clear = function () { this.$results.empty() }, s.prototype.displayMessage = function (e) { var t = this.options.get("escapeMarkup"); this.clear(), this.hideLoading(); var n = d('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'), s = this.options.get("translations").get(e.message); n.append(t(s(e.args))), n[0].className += " select2-results__message", this.$results.append(n) }, s.prototype.hideMessages = function () { this.$results.find(".select2-results__message").remove() }, s.prototype.append = function (e) { this.hideLoading(); var t = []; if (null != e.results && 0 !== e.results.length) { e.results = this.sort(e.results); for (var n = 0; n < e.results.length; n++) { var s = e.results[n], s = this.option(s); t.push(s) } this.$results.append(t) } else 0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" }) }, s.prototype.position = function (e, t) { t.find(".select2-results").append(e) }, s.prototype.sort = function (e) { return this.options.get("sorter")(e) }, s.prototype.highlightFirstItem = function () { var e = this.$results.find(".select2-results__option--selectable"), t = e.filter(".select2-results__option--selected"); (0 < t.length ? t : e).first().trigger("mouseenter"), this.ensureHighlightVisible() }, s.prototype.setClasses = function () { var t = this; this.data.current(function (e) { var s = e.map(function (e) { return e.id.toString() }); t.$results.find(".select2-results__option--selectable").each(function () { var e = d(this), t = p.GetData(this, "data"), n = "" + t.id; null != t.element && t.element.selected || null == t.element && -1 < s.indexOf(n) ? (this.classList.add("select2-results__option--selected"), e.attr("aria-selected", "true")) : (this.classList.remove("select2-results__option--selected"), e.attr("aria-selected", "false")) }) }) }, s.prototype.showLoading = function (e) { this.hideLoading(); e = { disabled: !0, loading: !0, text: this.options.get("translations").get("searching")(e) }, e = this.option(e); e.className += " loading-results", this.$results.prepend(e) }, s.prototype.hideLoading = function () { this.$results.find(".loading-results").remove() }, s.prototype.option = function (e) { var t = document.createElement("li"); t.classList.add("select2-results__option"), t.classList.add("select2-results__option--selectable"); var n, s = { role: "option" }, i = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector; for (n in (null != e.element && i.call(e.element, ":disabled") || null == e.element && e.disabled) && (s["aria-disabled"] = "true", t.classList.remove("select2-results__option--selectable"), t.classList.add("select2-results__option--disabled")), null == e.id && t.classList.remove("select2-results__option--selectable"), null != e._resultId && (t.id = e._resultId), e.title && (t.title = e.title), e.children && (s.role = "group", s["aria-label"] = e.text, t.classList.remove("select2-results__option--selectable"), t.classList.add("select2-results__option--group")), s) { var r = s[n]; t.setAttribute(n, r) } if (e.children) { var o = d(t), a = document.createElement("strong"); a.className = "select2-results__group", this.template(e, a); for (var l = [], c = 0; c < e.children.length; c++) { var u = e.children[c], u = this.option(u); l.push(u) } i = d("<ul></ul>", { class: "select2-results__options select2-results__options--nested", role: "none" }); i.append(l), o.append(a), o.append(i) } else this.template(e, t); return p.StoreData(t, "data", e), t }, s.prototype.bind = function (t, e) { var i = this, n = t.id + "-results"; this.$results.attr("id", n), t.on("results:all", function (e) { i.clear(), i.append(e.data), t.isOpen() && (i.setClasses(), i.highlightFirstItem()) }), t.on("results:append", function (e) { i.append(e.data), t.isOpen() && i.setClasses() }), t.on("query", function (e) { i.hideMessages(), i.showLoading(e) }), t.on("select", function () { t.isOpen() && (i.setClasses(), i.options.get("scrollAfterSelect") && i.highlightFirstItem()) }), t.on("unselect", function () { t.isOpen() && (i.setClasses(), i.options.get("scrollAfterSelect") && i.highlightFirstItem()) }), t.on("open", function () { i.$results.attr("aria-expanded", "true"), i.$results.attr("aria-hidden", "false"), i.setClasses(), i.ensureHighlightVisible() }), t.on("close", function () { i.$results.attr("aria-expanded", "false"), i.$results.attr("aria-hidden", "true"), i.$results.removeAttr("aria-activedescendant") }), t.on("results:toggle", function () { var e = i.getHighlightedResults(); 0 !== e.length && e.trigger("mouseup") }), t.on("results:select", function () { var e, t = i.getHighlightedResults(); 0 !== t.length && (e = p.GetData(t[0], "data"), t.hasClass("select2-results__option--selected") ? i.trigger("close", {}) : i.trigger("select", { data: e })) }), t.on("results:previous", function () { var e, t = i.getHighlightedResults(), n = i.$results.find(".select2-results__option--selectable"), s = n.index(t); s <= 0 || (e = s - 1, 0 === t.length && (e = 0), (s = n.eq(e)).trigger("mouseenter"), t = i.$results.offset().top, n = s.offset().top, s = i.$results.scrollTop() + (n - t), 0 === e ? i.$results.scrollTop(0) : n - t < 0 && i.$results.scrollTop(s)) }), t.on("results:next", function () { var e, t = i.getHighlightedResults(), n = i.$results.find(".select2-results__option--selectable"), s = n.index(t) + 1; s >= n.length || ((e = n.eq(s)).trigger("mouseenter"), t = i.$results.offset().top + i.$results.outerHeight(!1), n = e.offset().top + e.outerHeight(!1), e = i.$results.scrollTop() + n - t, 0 === s ? i.$results.scrollTop(0) : t < n && i.$results.scrollTop(e)) }), t.on("results:focus", function (e) { e.element[0].classList.add("select2-results__option--highlighted"), e.element[0].setAttribute("aria-selected", "true") }), t.on("results:message", function (e) { i.displayMessage(e) }), d.fn.mousewheel && this.$results.on("mousewheel", function (e) { var t = i.$results.scrollTop(), n = i.$results.get(0).scrollHeight - t + e.deltaY, t = 0 < e.deltaY && t - e.deltaY <= 0, n = e.deltaY < 0 && n <= i.$results.height(); t ? (i.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : n && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), e.preventDefault(), e.stopPropagation()) }), this.$results.on("mouseup", ".select2-results__option--selectable", function (e) { var t = d(this), n = p.GetData(this, "data"); t.hasClass("select2-results__option--selected") ? i.options.get("multiple") ? i.trigger("unselect", { originalEvent: e, data: n }) : i.trigger("close", {}) : i.trigger("select", { originalEvent: e, data: n }) }), this.$results.on("mouseenter", ".select2-results__option--selectable", function (e) { var t = p.GetData(this, "data"); i.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected", "false"), i.trigger("results:focus", { data: t, element: d(this) }) }) }, s.prototype.getHighlightedResults = function () { return this.$results.find(".select2-results__option--highlighted") }, s.prototype.destroy = function () { this.$results.remove() }, s.prototype.ensureHighlightVisible = function () { var e, t, n, s, i = this.getHighlightedResults(); 0 !== i.length && (e = this.$results.find(".select2-results__option--selectable").index(i), s = this.$results.offset().top, t = i.offset().top, n = this.$results.scrollTop() + (t - s), s = t - s, n -= 2 * i.outerHeight(!1), e <= 2 ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || s < 0) && this.$results.scrollTop(n)) }, s.prototype.template = function (e, t) { var n = this.options.get("templateResult"), s = this.options.get("escapeMarkup"), e = n(e, t); null == e ? t.style.display = "none" : "string" == typeof e ? t.innerHTML = s(e) : d(t).append(e) }, s }), u.define("select2/keys", [], function () { return { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 } }), u.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (n, s, i) { function r(e, t) { this.$element = e, this.options = t, r.__super__.constructor.call(this) } return s.Extend(r, s.Observable), r.prototype.render = function () { var e = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'); return this._tabindex = 0, null != s.GetData(this.$element[0], "old-tabindex") ? this._tabindex = s.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), e.attr("aria-disabled", "false"), this.$selection = e }, r.prototype.bind = function (e, t) { var n = this, s = e.id + "-results"; this.container = e, this.$selection.on("focus", function (e) { n.trigger("focus", e) }), this.$selection.on("blur", function (e) { n._handleBlur(e) }), this.$selection.on("keydown", function (e) { n.trigger("keypress", e), e.which === i.SPACE && e.preventDefault() }), e.on("results:focus", function (e) { n.$selection.attr("aria-activedescendant", e.data._resultId) }), e.on("selection:update", function (e) { n.update(e.data) }), e.on("open", function () { n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", s), n._attachCloseHandler(e) }), e.on("close", function () { n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), n.$selection.removeAttr("aria-owns"), n.$selection.trigger("focus"), n._detachCloseHandler(e) }), e.on("enable", function () { n.$selection.attr("tabindex", n._tabindex), n.$selection.attr("aria-disabled", "false") }), e.on("disable", function () { n.$selection.attr("tabindex", "-1"), n.$selection.attr("aria-disabled", "true") }) }, r.prototype._handleBlur = function (e) { var t = this; window.setTimeout(function () { document.activeElement == t.$selection[0] || n.contains(t.$selection[0], document.activeElement) || t.trigger("blur", e) }, 1) }, r.prototype._attachCloseHandler = function (e) { n(document.body).on("mousedown.select2." + e.id, function (e) { var t = n(e.target).closest(".select2"); n(".select2.select2-container--open").each(function () { this != t[0] && s.GetData(this, "element").select2("close") }) }) }, r.prototype._detachCloseHandler = function (e) { n(document.body).off("mousedown.select2." + e.id) }, r.prototype.position = function (e, t) { t.find(".selection").append(e) }, r.prototype.destroy = function () { this._detachCloseHandler(this.container) }, r.prototype.update = function (e) { throw new Error("The `update` method must be defined in child classes.") }, r.prototype.isEnabled = function () { return !this.isDisabled() }, r.prototype.isDisabled = function () { return this.options.get("disabled") }, r }), u.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, s) { function i() { i.__super__.constructor.apply(this, arguments) } return n.Extend(i, t), i.prototype.render = function () { var e = i.__super__.render.call(this); return e[0].classList.add("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e }, i.prototype.bind = function (t, e) { var n = this; i.__super__.bind.apply(this, arguments); var s = t.id + "-container"; this.$selection.find(".select2-selection__rendered").attr("id", s).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", s), this.$selection.attr("aria-controls", s), this.$selection.on("mousedown", function (e) { 1 === e.which && n.trigger("toggle", { originalEvent: e }) }), this.$selection.on("focus", function (e) { }), this.$selection.on("blur", function (e) { }), t.on("focus", function (e) { t.isOpen() || n.$selection.trigger("focus") }) }, i.prototype.clear = function () { var e = this.$selection.find(".select2-selection__rendered"); e.empty(), e.removeAttr("title") }, i.prototype.display = function (e, t) { var n = this.options.get("templateSelection"); return this.options.get("escapeMarkup")(n(e, t)) }, i.prototype.selectionContainer = function () { return e("<span></span>") }, i.prototype.update = function (e) { var t, n; 0 !== e.length ? (n = e[0], t = this.$selection.find(".select2-selection__rendered"), e = this.display(n, t), t.empty().append(e), (n = n.title || n.text) ? t.attr("title", n) : t.removeAttr("title")) : this.clear() }, i }), u.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (i, e, c) { function r(e, t) { r.__super__.constructor.apply(this, arguments) } return c.Extend(r, e), r.prototype.render = function () { var e = r.__super__.render.call(this); return e[0].classList.add("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e }, r.prototype.bind = function (e, t) { var n = this; r.__super__.bind.apply(this, arguments); var s = e.id + "-container"; this.$selection.find(".select2-selection__rendered").attr("id", s), this.$selection.on("click", function (e) { n.trigger("toggle", { originalEvent: e }) }), this.$selection.on("click", ".select2-selection__choice__remove", function (e) { var t; n.isDisabled() || (t = i(this).parent(), t = c.GetData(t[0], "data"), n.trigger("unselect", { originalEvent: e, data: t })) }), this.$selection.on("keydown", ".select2-selection__choice__remove", function (e) { n.isDisabled() || e.stopPropagation() }) }, r.prototype.clear = function () { var e = this.$selection.find(".select2-selection__rendered"); e.empty(), e.removeAttr("title") }, r.prototype.display = function (e, t) { var n = this.options.get("templateSelection"); return this.options.get("escapeMarkup")(n(e, t)) }, r.prototype.selectionContainer = function () { return i('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>') }, r.prototype.update = function (e) { if (this.clear(), 0 !== e.length) { for (var t = [], n = this.$selection.find(".select2-selection__rendered").attr("id") + "-choice-", s = 0; s < e.length; s++) { var i = e[s], r = this.selectionContainer(), o = this.display(i, r), a = n + c.generateChars(4) + "-"; i.id ? a += i.id : a += c.generateChars(4), r.find(".select2-selection__choice__display").append(o).attr("id", a); var l = i.title || i.text; l && r.attr("title", l); o = this.options.get("translations").get("removeItem"), l = r.find(".select2-selection__choice__remove"); l.attr("title", o()), l.attr("aria-label", o()), l.attr("aria-describedby", a), c.StoreData(r[0], "data", i), t.push(r) } this.$selection.find(".select2-selection__rendered").append(t) } }, r }), u.define("select2/selection/placeholder", [], function () { function e(e, t, n) { this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n) } return e.prototype.normalizePlaceholder = function (e, t) { return t = "string" == typeof t ? { id: "", text: t } : t }, e.prototype.createPlaceholder = function (e, t) { var n = this.selectionContainer(); n.html(this.display(t)), n[0].classList.add("select2-selection__placeholder"), n[0].classList.remove("select2-selection__choice"); t = t.title || t.text || n.text(); return this.$selection.find(".select2-selection__rendered").attr("title", t), n }, e.prototype.update = function (e, t) { var n = 1 == t.length && t[0].id != this.placeholder.id; if (1 < t.length || n) return e.call(this, t); this.clear(); t = this.createPlaceholder(this.placeholder); this.$selection.find(".select2-selection__rendered").append(t) }, e }), u.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function (i, s, a) { function e() { } return e.prototype.bind = function (e, t, n) { var s = this; e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) { s._handleClear(e) }), t.on("keypress", function (e) { s._handleKeyboardClear(e, t) }) }, e.prototype._handleClear = function (e, t) { if (!this.isDisabled()) { var n = this.$selection.find(".select2-selection__clear"); if (0 !== n.length) { t.stopPropagation(); var s = a.GetData(n[0], "data"), i = this.$element.val(); this.$element.val(this.placeholder.id); var r = { data: s }; if (this.trigger("clear", r), r.prevented) this.$element.val(i); else { for (var o = 0; o < s.length; o++)if (r = { data: s[o] }, this.trigger("unselect", r), r.prevented) return void this.$element.val(i); this.$element.trigger("input").trigger("change"), this.trigger("toggle", {}) } } } }, e.prototype._handleKeyboardClear = function (e, t, n) { n.isOpen() || t.which != s.DELETE && t.which != s.BACKSPACE || this._handleClear(t) }, e.prototype.update = function (e, t) { var n, s; e.call(this, t), this.$selection.find(".select2-selection__clear").remove(), this.$selection[0].classList.remove("select2-selection--clearable"), 0 < this.$selection.find(".select2-selection__placeholder").length || 0 === t.length || (n = this.$selection.find(".select2-selection__rendered").attr("id"), s = this.options.get("translations").get("removeAllItems"), (e = i('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>')).attr("title", s()), e.attr("aria-label", s()), e.attr("aria-describedby", n), a.StoreData(e[0], "data", t), this.$selection.prepend(e), this.$selection[0].classList.add("select2-selection--clearable")) }, e }), u.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (s, a, l) { function e(e, t, n) { e.call(this, t, n) } return e.prototype.render = function (e) { var t = this.options.get("translations").get("search"), n = s('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>'); this.$searchContainer = n, this.$search = n.find("textarea"), this.$search.prop("autocomplete", this.options.get("autocomplete")), this.$search.attr("aria-label", t()); e = e.call(this); return this._transferTabIndex(), e.append(this.$searchContainer), e }, e.prototype.bind = function (e, t, n) { var s = this, i = t.id + "-results", r = t.id + "-container"; e.call(this, t, n), s.$search.attr("aria-describedby", r), t.on("open", function () { s.$search.attr("aria-controls", i), s.$search.trigger("focus") }), t.on("close", function () { s.$search.val(""), s.resizeSearch(), s.$search.removeAttr("aria-controls"), s.$search.removeAttr("aria-activedescendant"), s.$search.trigger("focus") }), t.on("enable", function () { s.$search.prop("disabled", !1), s._transferTabIndex() }), t.on("disable", function () { s.$search.prop("disabled", !0) }), t.on("focus", function (e) { s.$search.trigger("focus") }), t.on("results:focus", function (e) { e.data._resultId ? s.$search.attr("aria-activedescendant", e.data._resultId) : s.$search.removeAttr("aria-activedescendant") }), this.$selection.on("focusin", ".select2-search--inline", function (e) { s.trigger("focus", e) }), this.$selection.on("focusout", ".select2-search--inline", function (e) { s._handleBlur(e) }), this.$selection.on("keydown", ".select2-search--inline", function (e) { var t; e.stopPropagation(), s.trigger("keypress", e), s._keyUpPrevented = e.isDefaultPrevented(), e.which !== l.BACKSPACE || "" !== s.$search.val() || 0 < (t = s.$selection.find(".select2-selection__choice").last()).length && (t = a.GetData(t[0], "data"), s.searchRemoveChoice(t), e.preventDefault()) }), this.$selection.on("click", ".select2-search--inline", function (e) { s.$search.val() && e.stopPropagation() }); var t = document.documentMode, o = t && t <= 11; this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) { o ? s.$selection.off("input.search input.searchcheck") : s.$selection.off("keyup.search") }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) { var t; o && "input" === e.type ? s.$selection.off("input.search input.searchcheck") : (t = e.which) != l.SHIFT && t != l.CTRL && t != l.ALT && t != l.TAB && s.handleSearch(e) }) }, e.prototype._transferTabIndex = function (e) { this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1") }, e.prototype.createPlaceholder = function (e, t) { this.$search.attr("placeholder", t.text) }, e.prototype.update = function (e, t) { var n = this.$search[0] == document.activeElement; this.$search.attr("placeholder", ""), e.call(this, t), this.resizeSearch(), n && this.$search.trigger("focus") }, e.prototype.handleSearch = function () { var e; this.resizeSearch(), this._keyUpPrevented || (e = this.$search.val(), this.trigger("query", { term: e })), this._keyUpPrevented = !1 }, e.prototype.searchRemoveChoice = function (e, t) { this.trigger("unselect", { data: t }), this.$search.val(t.text), this.handleSearch() }, e.prototype.resizeSearch = function () { this.$search.css("width", "25px"); var e = "100%"; "" === this.$search.attr("placeholder") && (e = .75 * (this.$search.val().length + 1) + "em"), this.$search.css("width", e) }, e }), u.define("select2/selection/selectionCss", ["../utils"], function (n) { function e() { } return e.prototype.render = function (e) { var t = e.call(this), e = this.options.get("selectionCssClass") || ""; return -1 !== e.indexOf(":all:") && (e = e.replace(":all:", ""), n.copyNonInternalCssClasses(t[0], this.$element[0])), t.addClass(e), t }, e }), u.define("select2/selection/eventRelay", ["jquery"], function (o) { function e() { } return e.prototype.bind = function (e, t, n) { var s = this, i = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"], r = ["opening", "closing", "selecting", "unselecting", "clearing"]; e.call(this, t, n), t.on("*", function (e, t) { var n; -1 !== i.indexOf(e) && (t = t || {}, n = o.Event("select2:" + e, { params: t }), s.$element.trigger(n), -1 !== r.indexOf(e) && (t.prevented = n.isDefaultPrevented())) }) }, e }), u.define("select2/translation", ["jquery", "require"], function (t, n) { function s(e) { this.dict = e || {} } return s.prototype.all = function () { return this.dict }, s.prototype.get = function (e) { return this.dict[e] }, s.prototype.extend = function (e) { this.dict = t.extend({}, e.all(), this.dict) }, s._cache = {}, s.loadPath = function (e) { var t; return e in s._cache || (t = n(e), s._cache[e] = t), new s(s._cache[e]) }, s }), u.define("select2/diacritics", [], function () { return { "Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "Ǡ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "Ạ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "Ḡ": "G", "Ğ": "G", "Ġ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "Ꞡ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "Ƞ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "Ơ": "O", "Ờ": "O", "Ớ": "O", "Ỡ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Œ": "OE", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "Ṡ": "S", "Š": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "Ꝡ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "à": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "ɠ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "œ": "oe", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "ⓠ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z", "Ά": "Α", "Έ": "Ε", "Ή": "Η", "Ί": "Ι", "Ϊ": "Ι", "Ό": "Ο", "Ύ": "Υ", "Ϋ": "Υ", "Ώ": "Ω", "ά": "α", "έ": "ε", "ή": "η", "ί": "ι", "ϊ": "ι", "ΐ": "ι", "ό": "ο", "ύ": "υ", "ϋ": "υ", "ΰ": "υ", "ώ": "ω", "ς": "σ", "’": "'" } }), u.define("select2/data/base", ["../utils"], function (n) { function s(e, t) { s.__super__.constructor.call(this) } return n.Extend(s, n.Observable), s.prototype.current = function (e) { throw new Error("The `current` method must be defined in child classes.") }, s.prototype.query = function (e, t) { throw new Error("The `query` method must be defined in child classes.") }, s.prototype.bind = function (e, t) { }, s.prototype.destroy = function () { }, s.prototype.generateResultId = function (e, t) { e = e.id + "-result-"; return e += n.generateChars(4), null != t.id ? e += "-" + t.id.toString() : e += "-" + n.generateChars(4), e }, s }), u.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, a, l) { function n(e, t) { this.$element = e, this.options = t, n.__super__.constructor.call(this) } return a.Extend(n, e), n.prototype.current = function (e) { var t = this; e(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"), function (e) { return t.item(l(e)) })) }, n.prototype.select = function (i) { var e, r = this; if (i.selected = !0, null != i.element && "option" === i.element.tagName.toLowerCase()) return i.element.selected = !0, void this.$element.trigger("input").trigger("change"); this.$element.prop("multiple") ? this.current(function (e) { var t = []; (i = [i]).push.apply(i, e); for (var n = 0; n < i.length; n++) { var s = i[n].id; -1 === t.indexOf(s) && t.push(s) } r.$element.val(t), r.$element.trigger("input").trigger("change") }) : (e = i.id, this.$element.val(e), this.$element.trigger("input").trigger("change")) }, n.prototype.unselect = function (i) { var r = this; if (this.$element.prop("multiple")) { if (i.selected = !1, null != i.element && "option" === i.element.tagName.toLowerCase()) return i.element.selected = !1, void this.$element.trigger("input").trigger("change"); this.current(function (e) { for (var t = [], n = 0; n < e.length; n++) { var s = e[n].id; s !== i.id && -1 === t.indexOf(s) && t.push(s) } r.$element.val(t), r.$element.trigger("input").trigger("change") }) } }, n.prototype.bind = function (e, t) { var n = this; (this.container = e).on("select", function (e) { n.select(e.data) }), e.on("unselect", function (e) { n.unselect(e.data) }) }, n.prototype.destroy = function () { this.$element.find("*").each(function () { a.RemoveData(this) }) }, n.prototype.query = function (t, e) { var n = [], s = this; this.$element.children().each(function () { var e; "option" !== this.tagName.toLowerCase() && "optgroup" !== this.tagName.toLowerCase() || (e = l(this), e = s.item(e), null !== (e = s.matches(t, e)) && n.push(e)) }), e({ results: n }) }, n.prototype.addOptions = function (e) { this.$element.append(e) }, n.prototype.option = function (e) { var t; e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text, void 0 !== e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title); e = this._normalizeItem(e); return e.element = t, a.StoreData(t, "data", e), l(t) }, n.prototype.item = function (e) { var t = {}; if (null != (t = a.GetData(e[0], "data"))) return t; var n = e[0]; if ("option" === n.tagName.toLowerCase()) t = { id: e.val(), text: e.text(), disabled: e.prop("disabled"), selected: e.prop("selected"), title: e.prop("title") }; else if ("optgroup" === n.tagName.toLowerCase()) { t = { text: e.prop("label"), children: [], title: e.prop("title") }; for (var s = e.children("option"), i = [], r = 0; r < s.length; r++) { var o = l(s[r]), o = this.item(o); i.push(o) } t.children = i } return (t = this._normalizeItem(t)).element = e[0], a.StoreData(e[0], "data", t), t }, n.prototype._normalizeItem = function (e) { e !== Object(e) && (e = { id: e, text: e }); return null != (e = l.extend({}, { text: "" }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), l.extend({}, { selected: !1, disabled: !1 }, e) }, n.prototype.matches = function (e, t) { return this.options.get("matcher")(e, t) }, n }), u.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, t, c) { function s(e, t) { this._dataToConvert = t.get("data") || [], s.__super__.constructor.call(this, e, t) } return t.Extend(s, e), s.prototype.bind = function (e, t) { s.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert)) }, s.prototype.select = function (n) { var e = this.$element.find("option").filter(function (e, t) { return t.value == n.id.toString() }); 0 === e.length && (e = this.option(n), this.addOptions(e)), s.__super__.select.call(this, n) }, s.prototype.convertToOptions = function (e) { var t = this, n = this.$element.find("option"), s = n.map(function () { return t.item(c(this)).id }).get(), i = []; for (var r = 0; r < e.length; r++) { var o, a, l = this._normalizeItem(e[r]); 0 <= s.indexOf(l.id) ? (o = n.filter(function (e) { return function () { return c(this).val() == e.id } }(l)), a = this.item(o), a = c.extend(!0, {}, l, a), a = this.option(a), o.replaceWith(a)) : (a = this.option(l), l.children && (l = this.convertToOptions(l.children), a.append(l)), i.push(a)) } return i }, s }), u.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, r) { function n(e, t) { this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, e, t) } return t.Extend(n, e), n.prototype._applyDefaults = function (e) { var t = { data: function (e) { return r.extend({}, e, { q: e.term }) }, transport: function (e, t, n) { e = r.ajax(e); return e.then(t), e.fail(n), e } }; return r.extend({}, t, e, !0) }, n.prototype.processResults = function (e) { return e }, n.prototype.query = function (t, n) { var s = this; null != this._request && ("function" == typeof this._request.abort && this._request.abort(), this._request = null); var i = r.extend({ type: "GET" }, this.ajaxOptions); function e() { var e = i.transport(i, function (e) { e = s.processResults(e, t); s.options.get("debug") && window.console && console.error && (e && e.results && Array.isArray(e.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), n(e) }, function () { "status" in e && (0 === e.status || "0" === e.status) || s.trigger("results:message", { message: "errorLoading" }) }); s._request = e } "function" == typeof i.url && (i.url = i.url.call(this.$element, t)), "function" == typeof i.data && (i.data = i.data.call(this.$element, t)), this.ajaxOptions.delay && null != t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay)) : e() }, n }), u.define("select2/data/tags", ["jquery"], function (t) { function e(e, t, n) { var s = n.get("tags"), i = n.get("createTag"); void 0 !== i && (this.createTag = i); i = n.get("insertTag"); if (void 0 !== i && (this.insertTag = i), e.call(this, t, n), Array.isArray(s)) for (var r = 0; r < s.length; r++) { var o = s[r], o = this._normalizeItem(o), o = this.option(o); this.$element.append(o) } } return e.prototype.query = function (e, c, u) { var d = this; this._removeOldTags(), null != c.term && null == c.page ? e.call(this, c, function e(t, n) { for (var s = t.results, i = 0; i < s.length; i++) { var r = s[i], o = null != r.children && !e({ results: r.children }, !0); if ((r.text || "").toUpperCase() === (c.term || "").toUpperCase() || o) return !n && (t.data = s, void u(t)) } if (n) return !0; var a, l = d.createTag(c); null != l && ((a = d.option(l)).attr("data-select2-tag", "true"), d.addOptions([a]), d.insertTag(s, l)), t.results = s, u(t) }) : e.call(this, c, u) }, e.prototype.createTag = function (e, t) { if (null == t.term) return null; t = t.term.trim(); return "" === t ? null : { id: t, text: t } }, e.prototype.insertTag = function (e, t, n) { t.unshift(n) }, e.prototype._removeOldTags = function (e) { this.$element.find("option[data-select2-tag]").each(function () { this.selected || t(this).remove() }) }, e }), u.define("select2/data/tokenizer", ["jquery"], function (c) { function e(e, t, n) { var s = n.get("tokenizer"); void 0 !== s && (this.tokenizer = s), e.call(this, t, n) } return e.prototype.bind = function (e, t, n) { e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field") }, e.prototype.query = function (e, t, n) { var s = this; t.term = t.term || ""; var i = this.tokenizer(t, this.options, function (e) { var t, n = s._normalizeItem(e); s.$element.find("option").filter(function () { return c(this).val() === n.id }).length || ((t = s.option(n)).attr("data-select2-tag", !0), s._removeOldTags(), s.addOptions([t])), t = n, s.trigger("select", { data: t }) }); i.term !== t.term && (this.$search.length && (this.$search.val(i.term), this.$search.trigger("focus")), t.term = i.term), e.call(this, t, n) }, e.prototype.tokenizer = function (e, t, n, s) { for (var i = n.get("tokenSeparators") || [], r = t.term, o = 0, a = this.createTag || function (e) { return { id: e.term, text: e.term } }; o < r.length;) { var l = r[o]; -1 !== i.indexOf(l) ? (l = r.substr(0, o), null != (l = a(c.extend({}, t, { term: l }))) ? (s(l), r = r.substr(o + 1) || "", o = 0) : o++) : o++ } return { term: r } }, e }), u.define("select2/data/minimumInputLength", [], function () { function e(e, t, n) { this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n) } return e.prototype.query = function (e, t, n) { t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: t.term, params: t } }) : e.call(this, t, n) }, e }), u.define("select2/data/maximumInputLength", [], function () { function e(e, t, n) { this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n) } return e.prototype.query = function (e, t, n) { t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: t.term, params: t } }) : e.call(this, t, n) }, e }), u.define("select2/data/maximumSelectionLength", [], function () { function e(e, t, n) { this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n) } return e.prototype.bind = function (e, t, n) { var s = this; e.call(this, t, n), t.on("select", function () { s._checkIfMaximumSelected() }) }, e.prototype.query = function (e, t, n) { var s = this; this._checkIfMaximumSelected(function () { e.call(s, t, n) }) }, e.prototype._checkIfMaximumSelected = function (e, t) { var n = this; this.current(function (e) { e = null != e ? e.length : 0; 0 < n.maximumSelectionLength && e >= n.maximumSelectionLength ? n.trigger("results:message", { message: "maximumSelected", args: { maximum: n.maximumSelectionLength } }) : t && t() }) }, e }), u.define("select2/dropdown", ["jquery", "./utils"], function (t, e) { function n(e, t) { this.$element = e, this.options = t, n.__super__.constructor.call(this) } return e.Extend(n, e.Observable), n.prototype.render = function () { var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>'); return e.attr("dir", this.options.get("dir")), this.$dropdown = e }, n.prototype.bind = function () { }, n.prototype.position = function (e, t) { }, n.prototype.destroy = function () { this.$dropdown.remove() }, n }), u.define("select2/dropdown/search", ["jquery"], function (r) { function e() { } return e.prototype.render = function (e) { var t = e.call(this), n = this.options.get("translations").get("search"), e = r('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'); return this.$searchContainer = e, this.$search = e.find("input"), this.$search.prop("autocomplete", this.options.get("autocomplete")), this.$search.attr("aria-label", n()), t.prepend(e), t }, e.prototype.bind = function (e, t, n) { var s = this, i = t.id + "-results"; e.call(this, t, n), this.$search.on("keydown", function (e) { s.trigger("keypress", e), s._keyUpPrevented = e.isDefaultPrevented() }), this.$search.on("input", function (e) { r(this).off("keyup") }), this.$search.on("keyup input", function (e) { s.handleSearch(e) }), t.on("open", function () { s.$search.attr("tabindex", 0), s.$search.attr("aria-controls", i), s.$search.trigger("focus"), window.setTimeout(function () { s.$search.trigger("focus") }, 0) }), t.on("close", function () { s.$search.attr("tabindex", -1), s.$search.removeAttr("aria-controls"), s.$search.removeAttr("aria-activedescendant"), s.$search.val(""), s.$search.trigger("blur") }), t.on("focus", function () { t.isOpen() || s.$search.trigger("focus") }), t.on("results:all", function (e) { null != e.query.term && "" !== e.query.term || (s.showSearch(e) ? s.$searchContainer[0].classList.remove("select2-search--hide") : s.$searchContainer[0].classList.add("select2-search--hide")) }), t.on("results:focus", function (e) { e.data._resultId ? s.$search.attr("aria-activedescendant", e.data._resultId) : s.$search.removeAttr("aria-activedescendant") }) }, e.prototype.handleSearch = function (e) { var t; this._keyUpPrevented || (t = this.$search.val(), this.trigger("query", { term: t })), this._keyUpPrevented = !1 }, e.prototype.showSearch = function (e, t) { return !0 }, e }), u.define("select2/dropdown/hidePlaceholder", [], function () { function e(e, t, n, s) { this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, s) } return e.prototype.append = function (e, t) { t.results = this.removePlaceholder(t.results), e.call(this, t) }, e.prototype.normalizePlaceholder = function (e, t) { return t = "string" == typeof t ? { id: "", text: t } : t }, e.prototype.removePlaceholder = function (e, t) { for (var n = t.slice(0), s = t.length - 1; 0 <= s; s--) { var i = t[s]; this.placeholder.id === i.id && n.splice(s, 1) } return n }, e }), u.define("select2/dropdown/infiniteScroll", ["jquery"], function (n) { function e(e, t, n, s) { this.lastParams = {}, e.call(this, t, n, s), this.$loadingMore = this.createLoadingMore(), this.loading = !1 } return e.prototype.append = function (e, t) { this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded()) }, e.prototype.bind = function (e, t, n) { var s = this; e.call(this, t, n), t.on("query", function (e) { s.lastParams = e, s.loading = !0 }), t.on("query:append", function (e) { s.lastParams = e, s.loading = !0 }), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this)) }, e.prototype.loadMoreIfNeeded = function () { var e = n.contains(document.documentElement, this.$loadingMore[0]); !this.loading && e && (e = this.$results.offset().top + this.$results.outerHeight(!1), this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) <= e + 50 && this.loadMore()) }, e.prototype.loadMore = function () { this.loading = !0; var e = n.extend({}, { page: 1 }, this.lastParams); e.page++, this.trigger("query:append", e) }, e.prototype.showLoadingMore = function (e, t) { return t.pagination && t.pagination.more }, e.prototype.createLoadingMore = function () { var e = n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'), t = this.options.get("translations").get("loadingMore"); return e.html(t(this.lastParams)), e }, e }), u.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (u, o) { function e(e, t, n) { this.$dropdownParent = u(n.get("dropdownParent") || document.body), e.call(this, t, n) } return e.prototype.bind = function (e, t, n) { var s = this; e.call(this, t, n), t.on("open", function () { s._showDropdown(), s._attachPositioningHandler(t), s._bindContainerResultHandlers(t) }), t.on("close", function () { s._hideDropdown(), s._detachPositioningHandler(t) }), this.$dropdownContainer.on("mousedown", function (e) { e.stopPropagation() }) }, e.prototype.destroy = function (e) { e.call(this), this.$dropdownContainer.remove() }, e.prototype.position = function (e, t, n) { t.attr("class", n.attr("class")), t[0].classList.remove("select2"), t[0].classList.add("select2-container--open"), t.css({ position: "absolute", top: -999999 }), this.$container = n }, e.prototype.render = function (e) { var t = u("<span></span>"), e = e.call(this); return t.append(e), this.$dropdownContainer = t }, e.prototype._hideDropdown = function (e) { this.$dropdownContainer.detach() }, e.prototype._bindContainerResultHandlers = function (e, t) { var n; this._containerResultsHandlersBound || (n = this, t.on("results:all", function () { n._positionDropdown(), n._resizeDropdown() }), t.on("results:append", function () { n._positionDropdown(), n._resizeDropdown() }), t.on("results:message", function () { n._positionDropdown(), n._resizeDropdown() }), t.on("select", function () { n._positionDropdown(), n._resizeDropdown() }), t.on("unselect", function () { n._positionDropdown(), n._resizeDropdown() }), this._containerResultsHandlersBound = !0) }, e.prototype._attachPositioningHandler = function (e, t) { var n = this, s = "scroll.select2." + t.id, i = "resize.select2." + t.id, r = "orientationchange.select2." + t.id, t = this.$container.parents().filter(o.hasScroll); t.each(function () { o.StoreData(this, "select2-scroll-position", { x: u(this).scrollLeft(), y: u(this).scrollTop() }) }), t.on(s, function (e) { var t = o.GetData(this, "select2-scroll-position"); u(this).scrollTop(t.y) }), u(window).on(s + " " + i + " " + r, function (e) { n._positionDropdown(), n._resizeDropdown() }) }, e.prototype._detachPositioningHandler = function (e, t) { var n = "scroll.select2." + t.id, s = "resize.select2." + t.id, t = "orientationchange.select2." + t.id; this.$container.parents().filter(o.hasScroll).off(n), u(window).off(n + " " + s + " " + t) }, e.prototype._positionDropdown = function () { var e = u(window), t = this.$dropdown[0].classList.contains("select2-dropdown--above"), n = this.$dropdown[0].classList.contains("select2-dropdown--below"), s = null, i = this.$container.offset(); i.bottom = i.top + this.$container.outerHeight(!1); var r = { height: this.$container.outerHeight(!1) }; r.top = i.top, r.bottom = i.top + r.height; var o = this.$dropdown.outerHeight(!1), a = e.scrollTop(), l = e.scrollTop() + e.height(), c = a < i.top - o, e = l > i.bottom + o, a = { left: i.left, top: r.bottom }, l = this.$dropdownParent; "static" === l.css("position") && (l = l.offsetParent()); i = { top: 0, left: 0 }; (u.contains(document.body, l[0]) || l[0].isConnected) && (i = l.offset()), a.top -= i.top, a.left -= i.left, t || n || (s = "below"), e || !c || t ? !c && e && t && (s = "below") : s = "above", ("above" == s || t && "below" !== s) && (a.top = r.top - i.top - o), null != s && (this.$dropdown[0].classList.remove("select2-dropdown--below"), this.$dropdown[0].classList.remove("select2-dropdown--above"), this.$dropdown[0].classList.add("select2-dropdown--" + s), this.$container[0].classList.remove("select2-container--below"), this.$container[0].classList.remove("select2-container--above"), this.$container[0].classList.add("select2-container--" + s)), this.$dropdownContainer.css(a) }, e.prototype._resizeDropdown = function () { var e = { width: this.$container.outerWidth(!1) + "px" }; this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e) }, e.prototype._showDropdown = function (e) { this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown() }, e }), u.define("select2/dropdown/minimumResultsForSearch", [], function () { function e(e, t, n, s) { this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, s) } return e.prototype.showSearch = function (e, t) { return !(function e(t) { for (var n = 0, s = 0; s < t.length; s++) { var i = t[s]; i.children ? n += e(i.children) : n++ } return n }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t) }, e }), u.define("select2/dropdown/selectOnClose", ["../utils"], function (s) { function e() { } return e.prototype.bind = function (e, t, n) { var s = this; e.call(this, t, n), t.on("close", function (e) { s._handleSelectOnClose(e) }) }, e.prototype._handleSelectOnClose = function (e, t) { if (t && null != t.originalSelect2Event) { var n = t.originalSelect2Event; if ("select" === n._type || "unselect" === n._type) return } n = this.getHighlightedResults(); n.length < 1 || (null != (n = s.GetData(n[0], "data")).element && n.element.selected || null == n.element && n.selected || this.trigger("select", { data: n })) }, e }), u.define("select2/dropdown/closeOnSelect", [], function () { function e() { } return e.prototype.bind = function (e, t, n) { var s = this; e.call(this, t, n), t.on("select", function (e) { s._selectTriggered(e) }), t.on("unselect", function (e) { s._selectTriggered(e) }) }, e.prototype._selectTriggered = function (e, t) { var n = t.originalEvent; n && (n.ctrlKey || n.metaKey) || this.trigger("close", { originalEvent: n, originalSelect2Event: t }) }, e }), u.define("select2/dropdown/dropdownCss", ["../utils"], function (n) { function e() { } return e.prototype.render = function (e) { var t = e.call(this), e = this.options.get("dropdownCssClass") || ""; return -1 !== e.indexOf(":all:") && (e = e.replace(":all:", ""), n.copyNonInternalCssClasses(t[0], this.$element[0])), t.addClass(e), t }, e }), u.define("select2/dropdown/tagsSearchHighlight", ["../utils"], function (s) { function e() { } return e.prototype.highlightFirstItem = function (e) { var t = this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)"); if (0 < t.length) { var n = t.first(), t = s.GetData(n[0], "data").element; if (t && t.getAttribute && "true" === t.getAttribute("data-select2-tag")) return void n.trigger("mouseenter") } e.call(this) }, e }), u.define("select2/i18n/en", [], function () { return { errorLoading: function () { return "The results could not be loaded." }, inputTooLong: function (e) { var t = e.input.length - e.maximum, e = "Please delete " + t + " character"; return 1 != t && (e += "s"), e }, inputTooShort: function (e) { return "Please enter " + (e.minimum - e.input.length) + " or more characters" }, loadingMore: function () { return "Loading more results…" }, maximumSelected: function (e) { var t = "You can only select " + e.maximum + " item"; return 1 != e.maximum && (t += "s"), t }, noResults: function () { return "No results found" }, searching: function () { return "Searching…" }, removeAllItems: function () { return "Remove all items" }, removeItem: function () { return "Remove item" }, search: function () { return "Search" } } }), u.define("select2/defaults", ["jquery", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/selectionCss", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./dropdown/dropdownCss", "./dropdown/tagsSearchHighlight", "./i18n/en"], function (l, r, o, a, c, u, d, p, h, f, g, t, m, y, v, _, b, $, w, x, A, D, S, E, O, C, L, T, q, I, e) { function n() { this.reset() } return n.prototype.apply = function (e) { var t; null == (e = l.extend(!0, {}, this.defaults, e)).dataAdapter && (null != e.ajax ? e.dataAdapter = v : null != e.data ? e.dataAdapter = y : e.dataAdapter = m, 0 < e.minimumInputLength && (e.dataAdapter = f.Decorate(e.dataAdapter, $)), 0 < e.maximumInputLength && (e.dataAdapter = f.Decorate(e.dataAdapter, w)), 0 < e.maximumSelectionLength && (e.dataAdapter = f.Decorate(e.dataAdapter, x)), e.tags && (e.dataAdapter = f.Decorate(e.dataAdapter, _)), null == e.tokenSeparators && null == e.tokenizer || (e.dataAdapter = f.Decorate(e.dataAdapter, b))), null == e.resultsAdapter && (e.resultsAdapter = r, null != e.ajax && (e.resultsAdapter = f.Decorate(e.resultsAdapter, E)), null != e.placeholder && (e.resultsAdapter = f.Decorate(e.resultsAdapter, S)), e.selectOnClose && (e.resultsAdapter = f.Decorate(e.resultsAdapter, L)), e.tags && (e.resultsAdapter = f.Decorate(e.resultsAdapter, I))), null == e.dropdownAdapter && (e.multiple ? e.dropdownAdapter = A : (t = f.Decorate(A, D), e.dropdownAdapter = t), 0 !== e.minimumResultsForSearch && (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, C)), e.closeOnSelect && (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, T)), null != e.dropdownCssClass && (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, q)), e.dropdownAdapter = f.Decorate(e.dropdownAdapter, O)), null == e.selectionAdapter && (e.multiple ? e.selectionAdapter = a : e.selectionAdapter = o, null != e.placeholder && (e.selectionAdapter = f.Decorate(e.selectionAdapter, c)), e.allowClear && (e.selectionAdapter = f.Decorate(e.selectionAdapter, u)), e.multiple && (e.selectionAdapter = f.Decorate(e.selectionAdapter, d)), null != e.selectionCssClass && (e.selectionAdapter = f.Decorate(e.selectionAdapter, p)), e.selectionAdapter = f.Decorate(e.selectionAdapter, h)), e.language = this._resolveLanguage(e.language), e.language.push("en"); for (var n = [], s = 0; s < e.language.length; s++) { var i = e.language[s]; -1 === n.indexOf(i) && n.push(i) } return e.language = n, e.translations = this._processTranslations(e.language, e.debug), e }, n.prototype.reset = function () { function a(e) { return e.replace(/[^\u0000-\u007E]/g, function (e) { return t[e] || e }) } this.defaults = { amdLanguageBase: "./i18n/", autocomplete: "off", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: f.escapeMarkup, language: {}, matcher: function e(t, n) { if (null == t.term || "" === t.term.trim()) return n; if (n.children && 0 < n.children.length) { for (var s = l.extend(!0, {}, n), i = n.children.length - 1; 0 <= i; i--)null == e(t, n.children[i]) && s.children.splice(i, 1); return 0 < s.children.length ? s : e(t, s) } var r = a(n.text).toUpperCase(), o = a(t.term).toUpperCase(); return -1 < r.indexOf(o) ? n : null }, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, scrollAfterSelect: !1, sorter: function (e) { return e }, templateResult: function (e) { return e.text }, templateSelection: function (e) { return e.text }, theme: "default", width: "resolve" } }, n.prototype.applyFromElement = function (e, t) { var n = e.language, s = this.defaults.language, i = t.prop("lang"), t = t.closest("[lang]").prop("lang"), t = Array.prototype.concat.call(this._resolveLanguage(i), this._resolveLanguage(n), this._resolveLanguage(s), this._resolveLanguage(t)); return e.language = t, e }, n.prototype._resolveLanguage = function (e) { if (!e) return []; if (l.isEmptyObject(e)) return []; if (l.isPlainObject(e)) return [e]; for (var t, n = Array.isArray(e) ? e : [e], s = [], i = 0; i < n.length; i++)s.push(n[i]), "string" == typeof n[i] && 0 < n[i].indexOf("-") && (t = n[i].split("-")[0], s.push(t)); return s }, n.prototype._processTranslations = function (e, t) { for (var n = new g, s = 0; s < e.length; s++) { var i = new g, r = e[s]; if ("string" == typeof r) try { i = g.loadPath(r) } catch (e) { try { r = this.defaults.amdLanguageBase + r, i = g.loadPath(r) } catch (e) { t && window.console && console.warn && console.warn('Select2: The language file for "' + r + '" could not be automatically loaded. A fallback will be used instead.') } } else i = l.isPlainObject(r) ? new g(r) : r; n.extend(i) } return n }, n.prototype.set = function (e, t) { var n = {}; n[l.camelCase(e)] = t; n = f._convertData(n); l.extend(!0, this.defaults, n) }, new n }), u.define("select2/options", ["jquery", "./defaults", "./utils"], function (c, n, u) { function e(e, t) { this.options = e, null != t && this.fromElement(t), null != t && (this.options = n.applyFromElement(this.options, t)), this.options = n.apply(this.options) } return e.prototype.fromElement = function (e) { var t = ["select2"]; null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.autocomplete && e.prop("autocomplete") && (this.options.autocomplete = e.prop("autocomplete")), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), u.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), u.StoreData(e[0], "data", u.GetData(e[0], "select2Tags")), u.StoreData(e[0], "tags", !0)), u.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", u.GetData(e[0], "ajaxUrl")), u.StoreData(e[0], "ajax-Url", u.GetData(e[0], "ajaxUrl"))); var n = {}; function s(e, t) { return t.toUpperCase() } for (var i = 0; i < e[0].attributes.length; i++) { var r = e[0].attributes[i].name, o = "data-"; r.substr(0, o.length) == o && (r = r.substring(o.length), o = u.GetData(e[0], r), n[r.replace(/-([a-z])/g, s)] = o) } c.fn.jquery && "1." == c.fn.jquery.substr(0, 2) && e[0].dataset && (n = c.extend(!0, {}, e[0].dataset, n)); var a, l = c.extend(!0, {}, u.GetData(e[0]), n); for (a in l = u._convertData(l)) -1 < t.indexOf(a) || (c.isPlainObject(this.options[a]) ? c.extend(this.options[a], l[a]) : this.options[a] = l[a]); return this }, e.prototype.get = function (e) { return this.options[e] }, e.prototype.set = function (e, t) { this.options[e] = t }, e }), u.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (t, i, r, s) { var o = function (e, t) { null != r.GetData(e[0], "select2") && r.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), t = t || {}, this.options = new i(t, e), o.__super__.constructor.call(this); var n = e.attr("tabindex") || 0; r.StoreData(e[0], "old-tabindex", n), e.attr("tabindex", "-1"); t = this.options.get("dataAdapter"); this.dataAdapter = new t(e, this.options); n = this.render(); this._placeContainer(n); t = this.options.get("selectionAdapter"); this.selection = new t(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, n); t = this.options.get("dropdownAdapter"); this.dropdown = new t(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, n); n = this.options.get("resultsAdapter"); this.results = new n(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown); var s = this; this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e) { s.trigger("selection:update", { data: e }) }), e[0].classList.add("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), r.StoreData(e[0], "select2", this), e.data("select2", this) }; return r.Extend(o, r.Observable), o.prototype._generateId = function (e) { return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + r.generateChars(2) : r.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "") }, o.prototype._placeContainer = function (e) { e.insertAfter(this.$element); var t = this._resolveWidth(this.$element, this.options.get("width")); null != t && e.css("width", t) }, o.prototype._resolveWidth = function (e, t) { var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i; if ("resolve" == t) { var s = this._resolveWidth(e, "style"); return null != s ? s : this._resolveWidth(e, "element") } if ("element" == t) { s = e.outerWidth(!1); return s <= 0 ? "auto" : s + "px" } if ("style" != t) return "computedstyle" != t ? t : window.getComputedStyle(e[0]).width; e = e.attr("style"); if ("string" != typeof e) return null; for (var i = e.split(";"), r = 0, o = i.length; r < o; r += 1) { var a = i[r].replace(/\s/g, "").match(n); if (null !== a && 1 <= a.length) return a[1] } return null }, o.prototype._bindAdapters = function () { this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container) }, o.prototype._registerDomEvents = function () { var t = this; this.$element.on("change.select2", function () { t.dataAdapter.current(function (e) { t.trigger("selection:update", { data: e }) }) }), this.$element.on("focus.select2", function (e) { t.trigger("focus", e) }), this._syncA = r.bind(this._syncAttributes, this), this._syncS = r.bind(this._syncSubtree, this), this._observer = new window.MutationObserver(function (e) { t._syncA(), t._syncS(e) }), this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 }) }, o.prototype._registerDataEvents = function () { var n = this; this.dataAdapter.on("*", function (e, t) { n.trigger(e, t) }) }, o.prototype._registerSelectionEvents = function () { var n = this, s = ["toggle", "focus"]; this.selection.on("toggle", function () { n.toggleDropdown() }), this.selection.on("focus", function (e) { n.focus(e) }), this.selection.on("*", function (e, t) { -1 === s.indexOf(e) && n.trigger(e, t) }) }, o.prototype._registerDropdownEvents = function () { var n = this; this.dropdown.on("*", function (e, t) { n.trigger(e, t) }) }, o.prototype._registerResultsEvents = function () { var n = this; this.results.on("*", function (e, t) { n.trigger(e, t) }) }, o.prototype._registerEvents = function () { var n = this; this.on("open", function () { n.$container[0].classList.add("select2-container--open") }), this.on("close", function () { n.$container[0].classList.remove("select2-container--open") }), this.on("enable", function () { n.$container[0].classList.remove("select2-container--disabled") }), this.on("disable", function () { n.$container[0].classList.add("select2-container--disabled") }), this.on("blur", function () { n.$container[0].classList.remove("select2-container--focus") }), this.on("query", function (t) { n.isOpen() || n.trigger("open", {}), this.dataAdapter.query(t, function (e) { n.trigger("results:all", { data: e, query: t }) }) }), this.on("query:append", function (t) { this.dataAdapter.query(t, function (e) { n.trigger("results:append", { data: e, query: t }) }) }), this.on("keypress", function (e) { var t = e.which; n.isOpen() ? t === s.ESC || t === s.UP && e.altKey ? (n.close(e), e.preventDefault()) : t === s.ENTER || t === s.TAB ? (n.trigger("results:select", {}), e.preventDefault()) : t === s.SPACE && e.ctrlKey ? (n.trigger("results:toggle", {}), e.preventDefault()) : t === s.UP ? (n.trigger("results:previous", {}), e.preventDefault()) : t === s.DOWN && (n.trigger("results:next", {}), e.preventDefault()) : (t === s.ENTER || t === s.SPACE || t === s.DOWN && e.altKey) && (n.open(), e.preventDefault()) }) }, o.prototype._syncAttributes = function () { this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {}) }, o.prototype._isChangeMutation = function (e) { var t = this; if (e.addedNodes && 0 < e.addedNodes.length) { for (var n = 0; n < e.addedNodes.length; n++)if (e.addedNodes[n].selected) return !0 } else { if (e.removedNodes && 0 < e.removedNodes.length) return !0; if (Array.isArray(e)) return e.some(function (e) { return t._isChangeMutation(e) }) } return !1 }, o.prototype._syncSubtree = function (e) { var e = this._isChangeMutation(e), t = this; e && this.dataAdapter.current(function (e) { t.trigger("selection:update", { data: e }) }) }, o.prototype.trigger = function (e, t) { var n = o.__super__.trigger, s = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting", clear: "clearing" }; if (void 0 === t && (t = {}), e in s) { var i = s[e], s = { prevented: !1, name: e, args: t }; if (n.call(this, i, s), s.prevented) return void (t.prevented = !0) } n.call(this, e, t) }, o.prototype.toggleDropdown = function () { this.isDisabled() || (this.isOpen() ? this.close() : this.open()) }, o.prototype.open = function () { this.isOpen() || this.isDisabled() || this.trigger("query", {}) }, o.prototype.close = function (e) { this.isOpen() && this.trigger("close", { originalEvent: e }) }, o.prototype.isEnabled = function () { return !this.isDisabled() }, o.prototype.isDisabled = function () { return this.options.get("disabled") }, o.prototype.isOpen = function () { return this.$container[0].classList.contains("select2-container--open") }, o.prototype.hasFocus = function () { return this.$container[0].classList.contains("select2-container--focus") }, o.prototype.focus = function (e) { this.hasFocus() || (this.$container[0].classList.add("select2-container--focus"), this.trigger("focus", {})) }, o.prototype.enable = function (e) { this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'); e = !(e = null == e || 0 === e.length ? [!0] : e)[0]; this.$element.prop("disabled", e) }, o.prototype.data = function () { this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'); var t = []; return this.dataAdapter.current(function (e) { t = e }), t }, o.prototype.val = function (e) { if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val(); e = e[0]; Array.isArray(e) && (e = e.map(function (e) { return e.toString() })), this.$element.val(e).trigger("input").trigger("change") }, o.prototype.destroy = function () { r.RemoveData(this.$container[0]), this.$container.remove(), this._observer.disconnect(), this._observer = null, this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", r.GetData(this.$element[0], "old-tabindex")), this.$element[0].classList.remove("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), r.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null }, o.prototype.render = function () { var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'); return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container[0].classList.add("select2-container--" + this.options.get("theme")), r.StoreData(e[0], "element", this.$element), e }, o }), u.define("jquery-mousewheel", ["jquery"], function (e) { return e }), u.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function (i, e, r, t, o) { var a; return null == i.fn.select2 && (a = ["open", "close", "destroy"], i.fn.select2 = function (t) { if ("object" == typeof (t = t || {})) return this.each(function () { var e = i.extend(!0, {}, t); new r(i(this), e) }), this; if ("string" != typeof t) throw new Error("Invalid arguments for Select2: " + t); var n, s = Array.prototype.slice.call(arguments, 1); return this.each(function () { var e = o.GetData(this, "select2"); null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), n = e[t].apply(e, s) }), -1 < a.indexOf(t) ? this : n }), null == i.fn.select2.defaults && (i.fn.select2.defaults = t), r }), { define: u.define, require: u.require }); function b(e, t) { return i.call(e, t) } function l(e, t) { var n, s, i, r, o, a, l, c, u, d, p = t && t.split("/"), h = y.map, f = h && h["*"] || {}; if (e) { for (t = (e = e.split("/")).length - 1, y.nodeIdCompat && _.test(e[t]) && (e[t] = e[t].replace(_, "")), "." === e[0].charAt(0) && p && (e = p.slice(0, p.length - 1).concat(e)), c = 0; c < e.length; c++)"." === (d = e[c]) ? (e.splice(c, 1), --c) : ".." === d && (0 === c || 1 === c && ".." === e[2] || ".." === e[c - 1] || 0 < c && (e.splice(c - 1, 2), c -= 2)); e = e.join("/") } if ((p || f) && h) { for (c = (n = e.split("/")).length; 0 < c; --c) { if (s = n.slice(0, c).join("/"), p) for (u = p.length; 0 < u; --u)if (i = h[p.slice(0, u).join("/")], i = i && i[s]) { r = i, o = c; break } if (r) break; !a && f && f[s] && (a = f[s], l = c) } !r && a && (r = a, o = l), r && (n.splice(0, o, r), e = n.join("/")) } return e } function w(t, n) { return function () { var e = a.call(arguments, 0); return "string" != typeof e[0] && 1 === e.length && e.push(null), o.apply(p, e.concat([t, n])) } } function x(e) { var t; if (b(m, e) && (t = m[e], delete m[e], v[e] = !0, r.apply(p, t)), !b(g, e) && !b(v, e)) throw new Error("No " + e); return g[e] } function c(e) { var t, n = e ? e.indexOf("!") : -1; return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e] } function A(e) { return e ? c(e) : [] } var u = s.require("jquery.select2"); return t.fn.select2.amd = s, u });



// end select 2











// start chartJS



/**

 * Skipped minification because the original files appears to be already minified.

 * Original file: /npm/chart.js@4.4.3/dist/chart.umd.js

 *

 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files

 */

/*!

 * Chart.js v4.4.3

 * https://www.chartjs.org

 * (c) 2024 Chart.js Contributors

 * Released under the MIT License

 */

!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Chart = e() }(this, (function () {

	"use strict"; var t = Object.freeze({ __proto__: null, get Colors() { return Go }, get Decimation() { return Qo }, get Filler() { return ma }, get Legend() { return ya }, get SubTitle() { return ka }, get Title() { return Ma }, get Tooltip() { return Ba } }); function e() { } const i = (() => { let t = 0; return () => t++ })(); function s(t) { return null == t } function n(t) { if (Array.isArray && Array.isArray(t)) return !0; const e = Object.prototype.toString.call(t); return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6) } function o(t) { return null !== t && "[object Object]" === Object.prototype.toString.call(t) } function a(t) { return ("number" == typeof t || t instanceof Number) && isFinite(+t) } function r(t, e) { return a(t) ? t : e } function l(t, e) { return void 0 === t ? e : t } const h = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 : +t / e, c = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t; function d(t, e, i) { if (t && "function" == typeof t.call) return t.apply(i, e) } function u(t, e, i, s) { let a, r, l; if (n(t)) if (r = t.length, s) for (a = r - 1; a >= 0; a--)e.call(i, t[a], a); else for (a = 0; a < r; a++)e.call(i, t[a], a); else if (o(t)) for (l = Object.keys(t), r = l.length, a = 0; a < r; a++)e.call(i, t[l[a]], l[a]) } function f(t, e) { let i, s, n, o; if (!t || !e || t.length !== e.length) return !1; for (i = 0, s = t.length; i < s; ++i)if (n = t[i], o = e[i], n.datasetIndex !== o.datasetIndex || n.index !== o.index) return !1; return !0 } function g(t) { if (n(t)) return t.map(g); if (o(t)) { const e = Object.create(null), i = Object.keys(t), s = i.length; let n = 0; for (; n < s; ++n)e[i[n]] = g(t[i[n]]); return e } return t } function p(t) { return -1 === ["__proto__", "prototype", "constructor"].indexOf(t) } function m(t, e, i, s) { if (!p(t)) return; const n = e[t], a = i[t]; o(n) && o(a) ? x(n, a, s) : e[t] = g(a) } function x(t, e, i) { const s = n(e) ? e : [e], a = s.length; if (!o(t)) return t; const r = (i = i || {}).merger || m; let l; for (let e = 0; e < a; ++e) { if (l = s[e], !o(l)) continue; const n = Object.keys(l); for (let e = 0, s = n.length; e < s; ++e)r(n[e], t, l, i) } return t } function b(t, e) { return x(t, e, { merger: _ }) } function _(t, e, i) { if (!p(t)) return; const s = e[t], n = i[t]; o(s) && o(n) ? b(s, n) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = g(n)) } const y = { "": t => t, x: t => t.x, y: t => t.y }; function v(t) { const e = t.split("."), i = []; let s = ""; for (const t of e) s += t, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (i.push(s), s = ""); return i } function M(t, e) { const i = y[e] || (y[e] = function (t) { const e = v(t); return t => { for (const i of e) { if ("" === i) break; t = t && t[i] } return t } }(e)); return i(t) } function w(t) { return t.charAt(0).toUpperCase() + t.slice(1) } const k = t => void 0 !== t, S = t => "function" == typeof t, P = (t, e) => { if (t.size !== e.size) return !1; for (const i of t) if (!e.has(i)) return !1; return !0 }; function D(t) { return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type } const C = Math.PI, O = 2 * C, A = O + C, T = Number.POSITIVE_INFINITY, L = C / 180, E = C / 2, R = C / 4, I = 2 * C / 3, z = Math.log10, F = Math.sign; function V(t, e, i) { return Math.abs(t - e) < i } function B(t) { const e = Math.round(t); t = V(t, e, t / 1e3) ? e : t; const i = Math.pow(10, Math.floor(z(t))), s = t / i; return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * i } function W(t) { const e = [], i = Math.sqrt(t); let s; for (s = 1; s < i; s++)t % s == 0 && (e.push(s), e.push(t / s)); return i === (0 | i) && e.push(i), e.sort(((t, e) => t - e)).pop(), e } function N(t) { return !isNaN(parseFloat(t)) && isFinite(t) } function H(t, e) { const i = Math.round(t); return i - e <= t && i + e >= t } function j(t, e, i) { let s, n, o; for (s = 0, n = t.length; s < n; s++)o = t[s][i], isNaN(o) || (e.min = Math.min(e.min, o), e.max = Math.max(e.max, o)) } function $(t) { return t * (C / 180) } function Y(t) { return t * (180 / C) } function U(t) { if (!a(t)) return; let e = 1, i = 0; for (; Math.round(t * e) / e !== t;)e *= 10, i++; return i } function X(t, e) { const i = e.x - t.x, s = e.y - t.y, n = Math.sqrt(i * i + s * s); let o = Math.atan2(s, i); return o < -.5 * C && (o += O), { angle: o, distance: n } } function q(t, e) { return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) } function K(t, e) { return (t - e + A) % O - C } function G(t) { return (t % O + O) % O } function Z(t, e, i, s) { const n = G(t), o = G(e), a = G(i), r = G(o - n), l = G(a - n), h = G(n - o), c = G(n - a); return n === o || n === a || s && o === a || r > l && h < c } function J(t, e, i) { return Math.max(e, Math.min(i, t)) } function Q(t) { return J(t, -32768, 32767) } function tt(t, e, i, s = 1e-6) { return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s } function et(t, e, i) { i = i || (i => t[i] < e); let s, n = t.length - 1, o = 0; for (; n - o > 1;)s = o + n >> 1, i(s) ? o = s : n = s; return { lo: o, hi: n } } const it = (t, e, i, s) => et(t, i, s ? s => { const n = t[s][e]; return n < i || n === i && t[s + 1][e] === i } : s => t[s][e] < i), st = (t, e, i) => et(t, i, (s => t[s][e] >= i)); function nt(t, e, i) { let s = 0, n = t.length; for (; s < n && t[s] < e;)s++; for (; n > s && t[n - 1] > i;)n--; return s > 0 || n < t.length ? t.slice(s, n) : t } const ot = ["push", "pop", "shift", "splice", "unshift"]; function at(t, e) { t._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [e] } }), ot.forEach((e => { const i = "_onData" + w(e), s = t[e]; Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value(...e) { const n = s.apply(this, e); return t._chartjs.listeners.forEach((t => { "function" == typeof t[i] && t[i](...e) })), n } }) }))) } function rt(t, e) { const i = t._chartjs; if (!i) return; const s = i.listeners, n = s.indexOf(e); -1 !== n && s.splice(n, 1), s.length > 0 || (ot.forEach((e => { delete t[e] })), delete t._chartjs) } function lt(t) { const e = new Set(t); return e.size === t.length ? t : Array.from(e) } const ht = "undefined" == typeof window ? function (t) { return t() } : window.requestAnimationFrame; function ct(t, e) { let i = [], s = !1; return function (...n) { i = n, s || (s = !0, ht.call(window, (() => { s = !1, t.apply(e, i) }))) } } function dt(t, e) { let i; return function (...s) { return e ? (clearTimeout(i), i = setTimeout(t, e, s)) : t.apply(this, s), e } } const ut = t => "start" === t ? "left" : "end" === t ? "right" : "center", ft = (t, e, i) => "start" === t ? e : "end" === t ? i : (e + i) / 2, gt = (t, e, i, s) => t === (s ? "left" : "right") ? i : "center" === t ? (e + i) / 2 : e; function pt(t, e, i) { const s = e.length; let n = 0, o = s; if (t._sorted) { const { iScale: a, _parsed: r } = t, l = a.axis, { min: h, max: c, minDefined: d, maxDefined: u } = a.getUserBounds(); d && (n = J(Math.min(it(r, l, h).lo, i ? s : it(e, l, a.getPixelForValue(h)).lo), 0, s - 1)), o = u ? J(Math.max(it(r, a.axis, c, !0).hi + 1, i ? 0 : it(e, l, a.getPixelForValue(c), !0).hi + 1), n, s) - n : s - n } return { start: n, count: o } } function mt(t) { const { xScale: e, yScale: i, _scaleRanges: s } = t, n = { xmin: e.min, xmax: e.max, ymin: i.min, ymax: i.max }; if (!s) return t._scaleRanges = n, !0; const o = s.xmin !== e.min || s.xmax !== e.max || s.ymin !== i.min || s.ymax !== i.max; return Object.assign(s, n), o } class xt { constructor() { this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0 } _notify(t, e, i, s) { const n = e.listeners[s], o = e.duration; n.forEach((s => s({ chart: t, initial: e.initial, numSteps: o, currentStep: Math.min(i - e.start, o) }))) } _refresh() { this._request || (this._running = !0, this._request = ht.call(window, (() => { this._update(), this._request = null, this._running && this._refresh() }))) } _update(t = Date.now()) { let e = 0; this._charts.forEach(((i, s) => { if (!i.running || !i.items.length) return; const n = i.items; let o, a = n.length - 1, r = !1; for (; a >= 0; --a)o = n[a], o._active ? (o._total > i.duration && (i.duration = o._total), o.tick(t), r = !0) : (n[a] = n[n.length - 1], n.pop()); r && (s.draw(), this._notify(s, i, t, "progress")), n.length || (i.running = !1, this._notify(s, i, t, "complete"), i.initial = !1), e += n.length })), this._lastDate = t, 0 === e && (this._running = !1) } _getAnims(t) { const e = this._charts; let i = e.get(t); return i || (i = { running: !1, initial: !0, items: [], listeners: { complete: [], progress: [] } }, e.set(t, i)), i } listen(t, e, i) { this._getAnims(t).listeners[e].push(i) } add(t, e) { e && e.length && this._getAnims(t).items.push(...e) } has(t) { return this._getAnims(t).items.length > 0 } start(t) { const e = this._charts.get(t); e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce(((t, e) => Math.max(t, e._duration)), 0), this._refresh()) } running(t) { if (!this._running) return !1; const e = this._charts.get(t); return !!(e && e.running && e.items.length) } stop(t) { const e = this._charts.get(t); if (!e || !e.items.length) return; const i = e.items; let s = i.length - 1; for (; s >= 0; --s)i[s].cancel(); e.items = [], this._notify(t, e, Date.now(), "complete") } remove(t) { return this._charts.delete(t) } } var bt = new xt;

	/*!

	 * @kurkle/color v0.3.2

	 * https://github.com/kurkle/color#readme

	 * (c) 2023 Jukka Kurkela

	 * Released under the MIT License

	 */

	function _t(t) { return t + .5 | 0 } const yt = (t, e, i) => Math.max(Math.min(t, i), e); function vt(t) { return yt(_t(2.55 * t), 0, 255) } function Mt(t) { return yt(_t(255 * t), 0, 255) } function wt(t) { return yt(_t(t / 2.55) / 100, 0, 1) } function kt(t) { return yt(_t(100 * t), 0, 100) } const St = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Pt = [..."0123456789ABCDEF"], Dt = t => Pt[15 & t], Ct = t => Pt[(240 & t) >> 4] + Pt[15 & t], Ot = t => (240 & t) >> 4 == (15 & t); function At(t) { var e = (t => Ot(t.r) && Ot(t.g) && Ot(t.b) && Ot(t.a))(t) ? Dt : Ct; return t ? "#" + e(t.r) + e(t.g) + e(t.b) + ((t, e) => t < 255 ? e(t) : "")(t.a, e) : void 0 } const Tt = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/; function Lt(t, e, i) { const s = e * Math.min(i, 1 - i), n = (e, n = (e + t / 30) % 12) => i - s * Math.max(Math.min(n - 3, 9 - n, 1), -1); return [n(0), n(8), n(4)] } function Et(t, e, i) { const s = (s, n = (s + t / 60) % 6) => i - i * e * Math.max(Math.min(n, 4 - n, 1), 0); return [s(5), s(3), s(1)] } function Rt(t, e, i) { const s = Lt(t, 1, .5); let n; for (e + i > 1 && (n = 1 / (e + i), e *= n, i *= n), n = 0; n < 3; n++)s[n] *= 1 - e - i, s[n] += e; return s } function It(t) { const e = t.r / 255, i = t.g / 255, s = t.b / 255, n = Math.max(e, i, s), o = Math.min(e, i, s), a = (n + o) / 2; let r, l, h; return n !== o && (h = n - o, l = a > .5 ? h / (2 - n - o) : h / (n + o), r = function (t, e, i, s, n) { return t === n ? (e - i) / s + (e < i ? 6 : 0) : e === n ? (i - t) / s + 2 : (t - e) / s + 4 }(e, i, s, h, n), r = 60 * r + .5), [0 | r, l || 0, a] } function zt(t, e, i, s) { return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(Mt) } function Ft(t, e, i) { return zt(Lt, t, e, i) } function Vt(t) { return (t % 360 + 360) % 360 } function Bt(t) { const e = Tt.exec(t); let i, s = 255; if (!e) return; e[5] !== i && (s = e[6] ? vt(+e[5]) : Mt(+e[5])); const n = Vt(+e[2]), o = +e[3] / 100, a = +e[4] / 100; return i = "hwb" === e[1] ? function (t, e, i) { return zt(Rt, t, e, i) }(n, o, a) : "hsv" === e[1] ? function (t, e, i) { return zt(Et, t, e, i) }(n, o, a) : Ft(n, o, a), { r: i[0], g: i[1], b: i[2], a: s } } const Wt = { x: "dark", Z: "light", Y: "re", X: "blu", W: "gr", V: "medium", U: "slate", A: "ee", T: "ol", S: "or", B: "ra", C: "lateg", D: "ights", R: "in", Q: "turquois", E: "hi", P: "ro", O: "al", N: "le", M: "de", L: "yello", F: "en", K: "ch", G: "arks", H: "ea", I: "ightg", J: "wh" }, Nt = { OiceXe: "f0f8ff", antiquewEte: "faebd7", aqua: "ffff", aquamarRe: "7fffd4", azuY: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "0", blanKedOmond: "ffebcd", Xe: "ff", XeviTet: "8a2be2", bPwn: "a52a2a", burlywood: "deb887", caMtXe: "5f9ea0", KartYuse: "7fff00", KocTate: "d2691e", cSO: "ff7f50", cSnflowerXe: "6495ed", cSnsilk: "fff8dc", crimson: "dc143c", cyan: "ffff", xXe: "8b", xcyan: "8b8b", xgTMnPd: "b8860b", xWay: "a9a9a9", xgYF: "6400", xgYy: "a9a9a9", xkhaki: "bdb76b", xmagFta: "8b008b", xTivegYF: "556b2f", xSange: "ff8c00", xScEd: "9932cc", xYd: "8b0000", xsOmon: "e9967a", xsHgYF: "8fbc8f", xUXe: "483d8b", xUWay: "2f4f4f", xUgYy: "2f4f4f", xQe: "ced1", xviTet: "9400d3", dAppRk: "ff1493", dApskyXe: "bfff", dimWay: "696969", dimgYy: "696969", dodgerXe: "1e90ff", fiYbrick: "b22222", flSOwEte: "fffaf0", foYstWAn: "228b22", fuKsia: "ff00ff", gaRsbSo: "dcdcdc", ghostwEte: "f8f8ff", gTd: "ffd700", gTMnPd: "daa520", Way: "808080", gYF: "8000", gYFLw: "adff2f", gYy: "808080", honeyMw: "f0fff0", hotpRk: "ff69b4", RdianYd: "cd5c5c", Rdigo: "4b0082", ivSy: "fffff0", khaki: "f0e68c", lavFMr: "e6e6fa", lavFMrXsh: "fff0f5", lawngYF: "7cfc00", NmoncEffon: "fffacd", ZXe: "add8e6", ZcSO: "f08080", Zcyan: "e0ffff", ZgTMnPdLw: "fafad2", ZWay: "d3d3d3", ZgYF: "90ee90", ZgYy: "d3d3d3", ZpRk: "ffb6c1", ZsOmon: "ffa07a", ZsHgYF: "20b2aa", ZskyXe: "87cefa", ZUWay: "778899", ZUgYy: "778899", ZstAlXe: "b0c4de", ZLw: "ffffe0", lime: "ff00", limegYF: "32cd32", lRF: "faf0e6", magFta: "ff00ff", maPon: "800000", VaquamarRe: "66cdaa", VXe: "cd", VScEd: "ba55d3", VpurpN: "9370db", VsHgYF: "3cb371", VUXe: "7b68ee", VsprRggYF: "fa9a", VQe: "48d1cc", VviTetYd: "c71585", midnightXe: "191970", mRtcYam: "f5fffa", mistyPse: "ffe4e1", moccasR: "ffe4b5", navajowEte: "ffdead", navy: "80", Tdlace: "fdf5e6", Tive: "808000", TivedBb: "6b8e23", Sange: "ffa500", SangeYd: "ff4500", ScEd: "da70d6", pOegTMnPd: "eee8aa", pOegYF: "98fb98", pOeQe: "afeeee", pOeviTetYd: "db7093", papayawEp: "ffefd5", pHKpuff: "ffdab9", peru: "cd853f", pRk: "ffc0cb", plum: "dda0dd", powMrXe: "b0e0e6", purpN: "800080", YbeccapurpN: "663399", Yd: "ff0000", Psybrown: "bc8f8f", PyOXe: "4169e1", saddNbPwn: "8b4513", sOmon: "fa8072", sandybPwn: "f4a460", sHgYF: "2e8b57", sHshell: "fff5ee", siFna: "a0522d", silver: "c0c0c0", skyXe: "87ceeb", UXe: "6a5acd", UWay: "708090", UgYy: "708090", snow: "fffafa", sprRggYF: "ff7f", stAlXe: "4682b4", tan: "d2b48c", teO: "8080", tEstN: "d8bfd8", tomato: "ff6347", Qe: "40e0d0", viTet: "ee82ee", JHt: "f5deb3", wEte: "ffffff", wEtesmoke: "f5f5f5", Lw: "ffff00", LwgYF: "9acd32" }; let Ht; function jt(t) { Ht || (Ht = function () { const t = {}, e = Object.keys(Nt), i = Object.keys(Wt); let s, n, o, a, r; for (s = 0; s < e.length; s++) { for (a = r = e[s], n = 0; n < i.length; n++)o = i[n], r = r.replace(o, Wt[o]); o = parseInt(Nt[a], 16), t[r] = [o >> 16 & 255, o >> 8 & 255, 255 & o] } return t }(), Ht.transparent = [0, 0, 0, 0]); const e = Ht[t.toLowerCase()]; return e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 } } const $t = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/; const Yt = t => t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055, Ut = t => t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4); function Xt(t, e, i) { if (t) { let s = It(t); s[e] = Math.max(0, Math.min(s[e] + s[e] * i, 0 === e ? 360 : 1)), s = Ft(s), t.r = s[0], t.g = s[1], t.b = s[2] } } function qt(t, e) { return t ? Object.assign(e || {}, t) : t } function Kt(t) { var e = { r: 0, g: 0, b: 0, a: 255 }; return Array.isArray(t) ? t.length >= 3 && (e = { r: t[0], g: t[1], b: t[2], a: 255 }, t.length > 3 && (e.a = Mt(t[3]))) : (e = qt(t, { r: 0, g: 0, b: 0, a: 1 })).a = Mt(e.a), e } function Gt(t) { return "r" === t.charAt(0) ? function (t) { const e = $t.exec(t); let i, s, n, o = 255; if (e) { if (e[7] !== i) { const t = +e[7]; o = e[8] ? vt(t) : yt(255 * t, 0, 255) } return i = +e[1], s = +e[3], n = +e[5], i = 255 & (e[2] ? vt(i) : yt(i, 0, 255)), s = 255 & (e[4] ? vt(s) : yt(s, 0, 255)), n = 255 & (e[6] ? vt(n) : yt(n, 0, 255)), { r: i, g: s, b: n, a: o } } }(t) : Bt(t) } class Zt { constructor(t) { if (t instanceof Zt) return t; const e = typeof t; let i; var s, n, o; "object" === e ? i = Kt(t) : "string" === e && (o = (s = t).length, "#" === s[0] && (4 === o || 5 === o ? n = { r: 255 & 17 * St[s[1]], g: 255 & 17 * St[s[2]], b: 255 & 17 * St[s[3]], a: 5 === o ? 17 * St[s[4]] : 255 } : 7 !== o && 9 !== o || (n = { r: St[s[1]] << 4 | St[s[2]], g: St[s[3]] << 4 | St[s[4]], b: St[s[5]] << 4 | St[s[6]], a: 9 === o ? St[s[7]] << 4 | St[s[8]] : 255 })), i = n || jt(t) || Gt(t)), this._rgb = i, this._valid = !!i } get valid() { return this._valid } get rgb() { var t = qt(this._rgb); return t && (t.a = wt(t.a)), t } set rgb(t) { this._rgb = Kt(t) } rgbString() { return this._valid ? (t = this._rgb) && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${wt(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`) : void 0; var t } hexString() { return this._valid ? At(this._rgb) : void 0 } hslString() { return this._valid ? function (t) { if (!t) return; const e = It(t), i = e[0], s = kt(e[1]), n = kt(e[2]); return t.a < 255 ? `hsla(${i}, ${s}%, ${n}%, ${wt(t.a)})` : `hsl(${i}, ${s}%, ${n}%)` }(this._rgb) : void 0 } mix(t, e) { if (t) { const i = this.rgb, s = t.rgb; let n; const o = e === n ? .5 : e, a = 2 * o - 1, r = i.a - s.a, l = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2; n = 1 - l, i.r = 255 & l * i.r + n * s.r + .5, i.g = 255 & l * i.g + n * s.g + .5, i.b = 255 & l * i.b + n * s.b + .5, i.a = o * i.a + (1 - o) * s.a, this.rgb = i } return this } interpolate(t, e) { return t && (this._rgb = function (t, e, i) { const s = Ut(wt(t.r)), n = Ut(wt(t.g)), o = Ut(wt(t.b)); return { r: Mt(Yt(s + i * (Ut(wt(e.r)) - s))), g: Mt(Yt(n + i * (Ut(wt(e.g)) - n))), b: Mt(Yt(o + i * (Ut(wt(e.b)) - o))), a: t.a + i * (e.a - t.a) } }(this._rgb, t._rgb, e)), this } clone() { return new Zt(this.rgb) } alpha(t) { return this._rgb.a = Mt(t), this } clearer(t) { return this._rgb.a *= 1 - t, this } greyscale() { const t = this._rgb, e = _t(.3 * t.r + .59 * t.g + .11 * t.b); return t.r = t.g = t.b = e, this } opaquer(t) { return this._rgb.a *= 1 + t, this } negate() { const t = this._rgb; return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this } lighten(t) { return Xt(this._rgb, 2, t), this } darken(t) { return Xt(this._rgb, 2, -t), this } saturate(t) { return Xt(this._rgb, 1, t), this } desaturate(t) { return Xt(this._rgb, 1, -t), this } rotate(t) { return function (t, e) { var i = It(t); i[0] = Vt(i[0] + e), i = Ft(i), t.r = i[0], t.g = i[1], t.b = i[2] }(this._rgb, t), this } } function Jt(t) { if (t && "object" == typeof t) { const e = t.toString(); return "[object CanvasPattern]" === e || "[object CanvasGradient]" === e } return !1 } function Qt(t) { return Jt(t) ? t : new Zt(t) } function te(t) { return Jt(t) ? t : new Zt(t).saturate(.5).darken(.1).hexString() } const ee = ["x", "y", "borderWidth", "radius", "tension"], ie = ["color", "borderColor", "backgroundColor"]; const se = new Map; function ne(t, e, i) { return function (t, e) { e = e || {}; const i = t + JSON.stringify(e); let s = se.get(i); return s || (s = new Intl.NumberFormat(t, e), se.set(i, s)), s }(e, i).format(t) } const oe = { values: t => n(t) ? t : "" + t, numeric(t, e, i) { if (0 === t) return "0"; const s = this.chart.options.locale; let n, o = t; if (i.length > 1) { const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value)); (e < 1e-4 || e > 1e15) && (n = "scientific"), o = function (t, e) { let i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value; Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t)); return i }(t, i) } const a = z(Math.abs(o)), r = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0), l = { notation: n, minimumFractionDigits: r, maximumFractionDigits: r }; return Object.assign(l, this.options.ticks.format), ne(t, s, l) }, logarithmic(t, e, i) { if (0 === t) return "0"; const s = i[e].significand || t / Math.pow(10, Math.floor(z(t))); return [1, 2, 3, 5, 10, 15].includes(s) || e > .8 * i.length ? oe.numeric.call(this, t, e, i) : "" } }; var ae = { formatters: oe }; const re = Object.create(null), le = Object.create(null); function he(t, e) { if (!e) return t; const i = e.split("."); for (let e = 0, s = i.length; e < s; ++e) { const s = i[e]; t = t[s] || (t[s] = Object.create(null)) } return t } function ce(t, e, i) { return "string" == typeof e ? x(he(t, e), i) : x(he(t, ""), e) } class de { constructor(t, e) { this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = { family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", size: 12, style: "normal", lineHeight: 1.2, weight: null }, this.hover = {}, this.hoverBackgroundColor = (t, e) => te(e.backgroundColor), this.hoverBorderColor = (t, e) => te(e.borderColor), this.hoverColor = (t, e) => te(e.color), this.indexAxis = "x", this.interaction = { mode: "nearest", intersect: !0, includeInvisible: !1 }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e) } set(t, e) { return ce(this, t, e) } get(t) { return he(this, t) } describe(t, e) { return ce(le, t, e) } override(t, e) { return ce(re, t, e) } route(t, e, i, s) { const n = he(this, t), a = he(this, i), r = "_" + e; Object.defineProperties(n, { [r]: { value: n[e], writable: !0 }, [e]: { enumerable: !0, get() { const t = this[r], e = a[s]; return o(t) ? Object.assign({}, e, t) : l(t, e) }, set(t) { this[r] = t } } }) } apply(t) { t.forEach((t => t(this))) } } var ue = new de({ _scriptable: t => !t.startsWith("on"), _indexable: t => "events" !== t, hover: { _fallback: "interaction" }, interaction: { _scriptable: !1, _indexable: !1 } }, [function (t) { t.set("animation", { delay: void 0, duration: 1e3, easing: "easeOutQuart", fn: void 0, from: void 0, loop: void 0, to: void 0, type: void 0 }), t.describe("animation", { _fallback: !1, _indexable: !1, _scriptable: t => "onProgress" !== t && "onComplete" !== t && "fn" !== t }), t.set("animations", { colors: { type: "color", properties: ie }, numbers: { type: "number", properties: ee } }), t.describe("animations", { _fallback: "animation" }), t.set("transitions", { active: { animation: { duration: 400 } }, resize: { animation: { duration: 0 } }, show: { animations: { colors: { from: "transparent" }, visible: { type: "boolean", duration: 0 } } }, hide: { animations: { colors: { to: "transparent" }, visible: { type: "boolean", easing: "linear", fn: t => 0 | t } } } }) }, function (t) { t.set("layout", { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } }) }, function (t) { t.set("scale", { display: !0, offset: !1, reverse: !1, beginAtZero: !1, bounds: "ticks", clip: !0, grace: 0, grid: { display: !0, lineWidth: 1, drawOnChartArea: !0, drawTicks: !0, tickLength: 8, tickWidth: (t, e) => e.lineWidth, tickColor: (t, e) => e.color, offset: !1 }, border: { display: !0, dash: [], dashOffset: 0, width: 1 }, title: { display: !1, text: "", padding: { top: 4, bottom: 4 } }, ticks: { minRotation: 0, maxRotation: 50, mirror: !1, textStrokeWidth: 0, textStrokeColor: "", padding: 3, display: !0, autoSkip: !0, autoSkipPadding: 3, labelOffset: 0, callback: ae.formatters.values, minor: {}, major: {}, align: "center", crossAlign: "near", showLabelBackdrop: !1, backdropColor: "rgba(255, 255, 255, 0.75)", backdropPadding: 2 } }), t.route("scale.ticks", "color", "", "color"), t.route("scale.grid", "color", "", "borderColor"), t.route("scale.border", "color", "", "borderColor"), t.route("scale.title", "color", "", "color"), t.describe("scale", { _fallback: !1, _scriptable: t => !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t, _indexable: t => "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t }), t.describe("scales", { _fallback: "scale" }), t.describe("scale.ticks", { _scriptable: t => "backdropPadding" !== t && "callback" !== t, _indexable: t => "backdropPadding" !== t }) }]); function fe() { return "undefined" != typeof window && "undefined" != typeof document } function ge(t) { let e = t.parentNode; return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e } function pe(t, e, i) { let s; return "string" == typeof t ? (s = parseInt(t, 10), -1 !== t.indexOf("%") && (s = s / 100 * e.parentNode[i])) : s = t, s } const me = t => t.ownerDocument.defaultView.getComputedStyle(t, null); function xe(t, e) { return me(t).getPropertyValue(e) } const be = ["top", "right", "bottom", "left"]; function _e(t, e, i) { const s = {}; i = i ? "-" + i : ""; for (let n = 0; n < 4; n++) { const o = be[n]; s[o] = parseFloat(t[e + "-" + o + i]) || 0 } return s.width = s.left + s.right, s.height = s.top + s.bottom, s } const ye = (t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot); function ve(t, e) { if ("native" in t) return t; const { canvas: i, currentDevicePixelRatio: s } = e, n = me(i), o = "border-box" === n.boxSizing, a = _e(n, "padding"), r = _e(n, "border", "width"), { x: l, y: h, box: c } = function (t, e) { const i = t.touches, s = i && i.length ? i[0] : t, { offsetX: n, offsetY: o } = s; let a, r, l = !1; if (ye(n, o, t.target)) a = n, r = o; else { const t = e.getBoundingClientRect(); a = s.clientX - t.left, r = s.clientY - t.top, l = !0 } return { x: a, y: r, box: l } }(t, i), d = a.left + (c && r.left), u = a.top + (c && r.top); let { width: f, height: g } = e; return o && (f -= a.width + r.width, g -= a.height + r.height), { x: Math.round((l - d) / f * i.width / s), y: Math.round((h - u) / g * i.height / s) } } const Me = t => Math.round(10 * t) / 10; function we(t, e, i, s) { const n = me(t), o = _e(n, "margin"), a = pe(n.maxWidth, t, "clientWidth") || T, r = pe(n.maxHeight, t, "clientHeight") || T, l = function (t, e, i) { let s, n; if (void 0 === e || void 0 === i) { const o = t && ge(t); if (o) { const t = o.getBoundingClientRect(), a = me(o), r = _e(a, "border", "width"), l = _e(a, "padding"); e = t.width - l.width - r.width, i = t.height - l.height - r.height, s = pe(a.maxWidth, o, "clientWidth"), n = pe(a.maxHeight, o, "clientHeight") } else e = t.clientWidth, i = t.clientHeight } return { width: e, height: i, maxWidth: s || T, maxHeight: n || T } }(t, e, i); let { width: h, height: c } = l; if ("content-box" === n.boxSizing) { const t = _e(n, "border", "width"), e = _e(n, "padding"); h -= e.width + t.width, c -= e.height + t.height } h = Math.max(0, h - o.width), c = Math.max(0, s ? h / s : c - o.height), h = Me(Math.min(h, a, l.maxWidth)), c = Me(Math.min(c, r, l.maxHeight)), h && !c && (c = Me(h / 2)); return (void 0 !== e || void 0 !== i) && s && l.height && c > l.height && (c = l.height, h = Me(Math.floor(c * s))), { width: h, height: c } } function ke(t, e, i) { const s = e || 1, n = Math.floor(t.height * s), o = Math.floor(t.width * s); t.height = Math.floor(t.height), t.width = Math.floor(t.width); const a = t.canvas; return a.style && (i || !a.style.height && !a.style.width) && (a.style.height = `${t.height}px`, a.style.width = `${t.width}px`), (t.currentDevicePixelRatio !== s || a.height !== n || a.width !== o) && (t.currentDevicePixelRatio = s, a.height = n, a.width = o, t.ctx.setTransform(s, 0, 0, s, 0, 0), !0) } const Se = function () { let t = !1; try { const e = { get passive() { return t = !0, !1 } }; fe() && (window.addEventListener("test", null, e), window.removeEventListener("test", null, e)) } catch (t) { } return t }(); function Pe(t, e) { const i = xe(t, e), s = i && i.match(/^(\d+)(\.\d+)?px$/); return s ? +s[1] : void 0 } function De(t) { return !t || s(t.size) || s(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family } function Ce(t, e, i, s, n) { let o = e[n]; return o || (o = e[n] = t.measureText(n).width, i.push(n)), o > s && (s = o), s } function Oe(t, e, i, s) { let o = (s = s || {}).data = s.data || {}, a = s.garbageCollect = s.garbageCollect || []; s.font !== e && (o = s.data = {}, a = s.garbageCollect = [], s.font = e), t.save(), t.font = e; let r = 0; const l = i.length; let h, c, d, u, f; for (h = 0; h < l; h++)if (u = i[h], null == u || n(u)) { if (n(u)) for (c = 0, d = u.length; c < d; c++)f = u[c], null == f || n(f) || (r = Ce(t, o, a, r, f)) } else r = Ce(t, o, a, r, u); t.restore(); const g = a.length / 2; if (g > i.length) { for (h = 0; h < g; h++)delete o[a[h]]; a.splice(0, g) } return r } function Ae(t, e, i) { const s = t.currentDevicePixelRatio, n = 0 !== i ? Math.max(i / 2, .5) : 0; return Math.round((e - n) * s) / s + n } function Te(t, e) { (e || t) && ((e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore()) } function Le(t, e, i, s) { Ee(t, e, i, s, null) } function Ee(t, e, i, s, n) { let o, a, r, l, h, c, d, u; const f = e.pointStyle, g = e.rotation, p = e.radius; let m = (g || 0) * L; if (f && "object" == typeof f && (o = f.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)) return t.save(), t.translate(i, s), t.rotate(m), t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), void t.restore(); if (!(isNaN(p) || p <= 0)) { switch (t.beginPath(), f) { default: n ? t.ellipse(i, s, n / 2, p, 0, 0, O) : t.arc(i, s, p, 0, O), t.closePath(); break; case "triangle": c = n ? n / 2 : p, t.moveTo(i + Math.sin(m) * c, s - Math.cos(m) * p), m += I, t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p), m += I, t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p), t.closePath(); break; case "rectRounded": h = .516 * p, l = p - h, a = Math.cos(m + R) * l, d = Math.cos(m + R) * (n ? n / 2 - h : l), r = Math.sin(m + R) * l, u = Math.sin(m + R) * (n ? n / 2 - h : l), t.arc(i - d, s - r, h, m - C, m - E), t.arc(i + u, s - a, h, m - E, m), t.arc(i + d, s + r, h, m, m + E), t.arc(i - u, s + a, h, m + E, m + C), t.closePath(); break; case "rect": if (!g) { l = Math.SQRT1_2 * p, c = n ? n / 2 : l, t.rect(i - c, s - l, 2 * c, 2 * l); break } m += R; case "rectRot": d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + u, s - a), t.lineTo(i + d, s + r), t.lineTo(i - u, s + a), t.closePath(); break; case "crossRot": m += R; case "cross": d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + d, s + r), t.moveTo(i + u, s - a), t.lineTo(i - u, s + a); break; case "star": d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + d, s + r), t.moveTo(i + u, s - a), t.lineTo(i - u, s + a), m += R, d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + d, s + r), t.moveTo(i + u, s - a), t.lineTo(i - u, s + a); break; case "line": a = n ? n / 2 : Math.cos(m) * p, r = Math.sin(m) * p, t.moveTo(i - a, s - r), t.lineTo(i + a, s + r); break; case "dash": t.moveTo(i, s), t.lineTo(i + Math.cos(m) * (n ? n / 2 : p), s + Math.sin(m) * p); break; case !1: t.closePath() }t.fill(), e.borderWidth > 0 && t.stroke() } } function Re(t, e, i) { return i = i || .5, !e || t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i } function Ie(t, e) { t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip() } function ze(t) { t.restore() } function Fe(t, e, i, s, n) { if (!e) return t.lineTo(i.x, i.y); if ("middle" === n) { const s = (e.x + i.x) / 2; t.lineTo(s, e.y), t.lineTo(s, i.y) } else "after" === n != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y); t.lineTo(i.x, i.y) } function Ve(t, e, i, s) { if (!e) return t.lineTo(i.x, i.y); t.bezierCurveTo(s ? e.cp1x : e.cp2x, s ? e.cp1y : e.cp2y, s ? i.cp2x : i.cp1x, s ? i.cp2y : i.cp1y, i.x, i.y) } function Be(t, e, i, s, n) { if (n.strikethrough || n.underline) { const o = t.measureText(s), a = e - o.actualBoundingBoxLeft, r = e + o.actualBoundingBoxRight, l = i - o.actualBoundingBoxAscent, h = i + o.actualBoundingBoxDescent, c = n.strikethrough ? (l + h) / 2 : h; t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = n.decorationWidth || 2, t.moveTo(a, c), t.lineTo(r, c), t.stroke() } } function We(t, e) { const i = t.fillStyle; t.fillStyle = e.color, t.fillRect(e.left, e.top, e.width, e.height), t.fillStyle = i } function Ne(t, e, i, o, a, r = {}) { const l = n(e) ? e : [e], h = r.strokeWidth > 0 && "" !== r.strokeColor; let c, d; for (t.save(), t.font = a.string, function (t, e) { e.translation && t.translate(e.translation[0], e.translation[1]), s(e.rotation) || t.rotate(e.rotation), e.color && (t.fillStyle = e.color), e.textAlign && (t.textAlign = e.textAlign), e.textBaseline && (t.textBaseline = e.textBaseline) }(t, r), c = 0; c < l.length; ++c)d = l[c], r.backdrop && We(t, r.backdrop), h && (r.strokeColor && (t.strokeStyle = r.strokeColor), s(r.strokeWidth) || (t.lineWidth = r.strokeWidth), t.strokeText(d, i, o, r.maxWidth)), t.fillText(d, i, o, r.maxWidth), Be(t, i, o, d, r), o += Number(a.lineHeight); t.restore() } function He(t, e) { const { x: i, y: s, w: n, h: o, radius: a } = e; t.arc(i + a.topLeft, s + a.topLeft, a.topLeft, 1.5 * C, C, !0), t.lineTo(i, s + o - a.bottomLeft), t.arc(i + a.bottomLeft, s + o - a.bottomLeft, a.bottomLeft, C, E, !0), t.lineTo(i + n - a.bottomRight, s + o), t.arc(i + n - a.bottomRight, s + o - a.bottomRight, a.bottomRight, E, 0, !0), t.lineTo(i + n, s + a.topRight), t.arc(i + n - a.topRight, s + a.topRight, a.topRight, 0, -E, !0), t.lineTo(i + a.topLeft, s) } function je(t, e = [""], i, s, n = (() => t[0])) { const o = i || t; void 0 === s && (s = ti("_fallback", t)); const a = { [Symbol.toStringTag]: "Object", _cacheable: !0, _scopes: t, _rootScopes: o, _fallback: s, _getTarget: n, override: i => je([i, ...t], e, o, s) }; return new Proxy(a, { deleteProperty: (e, i) => (delete e[i], delete e._keys, delete t[0][i], !0), get: (i, s) => qe(i, s, (() => function (t, e, i, s) { let n; for (const o of e) if (n = ti(Ue(o, t), i), void 0 !== n) return Xe(t, n) ? Je(i, s, t, n) : n }(s, e, t, i))), getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e), getPrototypeOf: () => Reflect.getPrototypeOf(t[0]), has: (t, e) => ei(t).includes(e), ownKeys: t => ei(t), set(t, e, i) { const s = t._storage || (t._storage = n()); return t[e] = s[e] = i, delete t._keys, !0 } }) } function $e(t, e, i, s) { const a = { _cacheable: !1, _proxy: t, _context: e, _subProxy: i, _stack: new Set, _descriptors: Ye(t, s), setContext: e => $e(t, e, i, s), override: n => $e(t.override(n), e, i, s) }; return new Proxy(a, { deleteProperty: (e, i) => (delete e[i], delete t[i], !0), get: (t, e, i) => qe(t, e, (() => function (t, e, i) { const { _proxy: s, _context: a, _subProxy: r, _descriptors: l } = t; let h = s[e]; S(h) && l.isScriptable(e) && (h = function (t, e, i, s) { const { _proxy: n, _context: o, _subProxy: a, _stack: r } = i; if (r.has(t)) throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + t); r.add(t); let l = e(o, a || s); r.delete(t), Xe(t, l) && (l = Je(n._scopes, n, t, l)); return l }(e, h, t, i)); n(h) && h.length && (h = function (t, e, i, s) { const { _proxy: n, _context: a, _subProxy: r, _descriptors: l } = i; if (void 0 !== a.index && s(t)) return e[a.index % e.length]; if (o(e[0])) { const i = e, s = n._scopes.filter((t => t !== i)); e = []; for (const o of i) { const i = Je(s, n, t, o); e.push($e(i, a, r && r[t], l)) } } return e }(e, h, t, l.isIndexable)); Xe(e, h) && (h = $e(h, a, r && r[e], l)); return h }(t, e, i))), getOwnPropertyDescriptor: (e, i) => e._descriptors.allKeys ? Reflect.has(t, i) ? { enumerable: !0, configurable: !0 } : void 0 : Reflect.getOwnPropertyDescriptor(t, i), getPrototypeOf: () => Reflect.getPrototypeOf(t), has: (e, i) => Reflect.has(t, i), ownKeys: () => Reflect.ownKeys(t), set: (e, i, s) => (t[i] = s, delete e[i], !0) }) } function Ye(t, e = { scriptable: !0, indexable: !0 }) { const { _scriptable: i = e.scriptable, _indexable: s = e.indexable, _allKeys: n = e.allKeys } = t; return { allKeys: n, scriptable: i, indexable: s, isScriptable: S(i) ? i : () => i, isIndexable: S(s) ? s : () => s } } const Ue = (t, e) => t ? t + w(e) : e, Xe = (t, e) => o(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object); function qe(t, e, i) { if (Object.prototype.hasOwnProperty.call(t, e) || "constructor" === e) return t[e]; const s = i(); return t[e] = s, s } function Ke(t, e, i) { return S(t) ? t(e, i) : t } const Ge = (t, e) => !0 === t ? e : "string" == typeof t ? M(e, t) : void 0; function Ze(t, e, i, s, n) { for (const o of e) { const e = Ge(i, o); if (e) { t.add(e); const o = Ke(e._fallback, i, n); if (void 0 !== o && o !== i && o !== s) return o } else if (!1 === e && void 0 !== s && i !== s) return null } return !1 } function Je(t, e, i, s) { const a = e._rootScopes, r = Ke(e._fallback, i, s), l = [...t, ...a], h = new Set; h.add(s); let c = Qe(h, l, i, r || i, s); return null !== c && ((void 0 === r || r === i || (c = Qe(h, l, r, c, s), null !== c)) && je(Array.from(h), [""], a, r, (() => function (t, e, i) { const s = t._getTarget(); e in s || (s[e] = {}); const a = s[e]; if (n(a) && o(i)) return i; return a || {} }(e, i, s)))) } function Qe(t, e, i, s, n) { for (; i;)i = Ze(t, e, i, s, n); return i } function ti(t, e) { for (const i of e) { if (!i) continue; const e = i[t]; if (void 0 !== e) return e } } function ei(t) { let e = t._keys; return e || (e = t._keys = function (t) { const e = new Set; for (const i of t) for (const t of Object.keys(i).filter((t => !t.startsWith("_")))) e.add(t); return Array.from(e) }(t._scopes)), e } function ii(t, e, i, s) { const { iScale: n } = t, { key: o = "r" } = this._parsing, a = new Array(s); let r, l, h, c; for (r = 0, l = s; r < l; ++r)h = r + i, c = e[h], a[r] = { r: n.parse(M(c, o), h) }; return a } const si = Number.EPSILON || 1e-14, ni = (t, e) => e < t.length && !t[e].skip && t[e], oi = t => "x" === t ? "y" : "x"; function ai(t, e, i, s) { const n = t.skip ? e : t, o = e, a = i.skip ? e : i, r = q(o, n), l = q(a, o); let h = r / (r + l), c = l / (r + l); h = isNaN(h) ? 0 : h, c = isNaN(c) ? 0 : c; const d = s * h, u = s * c; return { previous: { x: o.x - d * (a.x - n.x), y: o.y - d * (a.y - n.y) }, next: { x: o.x + u * (a.x - n.x), y: o.y + u * (a.y - n.y) } } } function ri(t, e = "x") { const i = oi(e), s = t.length, n = Array(s).fill(0), o = Array(s); let a, r, l, h = ni(t, 0); for (a = 0; a < s; ++a)if (r = l, l = h, h = ni(t, a + 1), l) { if (h) { const t = h[e] - l[e]; n[a] = 0 !== t ? (h[i] - l[i]) / t : 0 } o[a] = r ? h ? F(n[a - 1]) !== F(n[a]) ? 0 : (n[a - 1] + n[a]) / 2 : n[a - 1] : n[a] } !function (t, e, i) { const s = t.length; let n, o, a, r, l, h = ni(t, 0); for (let c = 0; c < s - 1; ++c)l = h, h = ni(t, c + 1), l && h && (V(e[c], 0, si) ? i[c] = i[c + 1] = 0 : (n = i[c] / e[c], o = i[c + 1] / e[c], r = Math.pow(n, 2) + Math.pow(o, 2), r <= 9 || (a = 3 / Math.sqrt(r), i[c] = n * a * e[c], i[c + 1] = o * a * e[c]))) }(t, n, o), function (t, e, i = "x") { const s = oi(i), n = t.length; let o, a, r, l = ni(t, 0); for (let h = 0; h < n; ++h) { if (a = r, r = l, l = ni(t, h + 1), !r) continue; const n = r[i], c = r[s]; a && (o = (n - a[i]) / 3, r[`cp1${i}`] = n - o, r[`cp1${s}`] = c - o * e[h]), l && (o = (l[i] - n) / 3, r[`cp2${i}`] = n + o, r[`cp2${s}`] = c + o * e[h]) } }(t, o, e) } function li(t, e, i) { return Math.max(Math.min(t, i), e) } function hi(t, e, i, s, n) { let o, a, r, l; if (e.spanGaps && (t = t.filter((t => !t.skip))), "monotone" === e.cubicInterpolationMode) ri(t, n); else { let i = s ? t[t.length - 1] : t[0]; for (o = 0, a = t.length; o < a; ++o)r = t[o], l = ai(i, r, t[Math.min(o + 1, a - (s ? 0 : 1)) % a], e.tension), r.cp1x = l.previous.x, r.cp1y = l.previous.y, r.cp2x = l.next.x, r.cp2y = l.next.y, i = r } e.capBezierPoints && function (t, e) { let i, s, n, o, a, r = Re(t[0], e); for (i = 0, s = t.length; i < s; ++i)a = o, o = r, r = i < s - 1 && Re(t[i + 1], e), o && (n = t[i], a && (n.cp1x = li(n.cp1x, e.left, e.right), n.cp1y = li(n.cp1y, e.top, e.bottom)), r && (n.cp2x = li(n.cp2x, e.left, e.right), n.cp2y = li(n.cp2y, e.top, e.bottom))) }(t, i) } const ci = t => 0 === t || 1 === t, di = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * O / i), ui = (t, e, i) => Math.pow(2, -10 * t) * Math.sin((t - e) * O / i) + 1, fi = { linear: t => t, easeInQuad: t => t * t, easeOutQuad: t => -t * (t - 2), easeInOutQuad: t => (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1), easeInCubic: t => t * t * t, easeOutCubic: t => (t -= 1) * t * t + 1, easeInOutCubic: t => (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2), easeInQuart: t => t * t * t * t, easeOutQuart: t => -((t -= 1) * t * t * t - 1), easeInOutQuart: t => (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2), easeInQuint: t => t * t * t * t * t, easeOutQuint: t => (t -= 1) * t * t * t * t + 1, easeInOutQuint: t => (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2), easeInSine: t => 1 - Math.cos(t * E), easeOutSine: t => Math.sin(t * E), easeInOutSine: t => -.5 * (Math.cos(C * t) - 1), easeInExpo: t => 0 === t ? 0 : Math.pow(2, 10 * (t - 1)), easeOutExpo: t => 1 === t ? 1 : 1 - Math.pow(2, -10 * t), easeInOutExpo: t => ci(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1))), easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1), easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t), easeInOutCirc: t => (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1), easeInElastic: t => ci(t) ? t : di(t, .075, .3), easeOutElastic: t => ci(t) ? t : ui(t, .075, .3), easeInOutElastic(t) { const e = .1125; return ci(t) ? t : t < .5 ? .5 * di(2 * t, e, .45) : .5 + .5 * ui(2 * t - 1, e, .45) }, easeInBack(t) { const e = 1.70158; return t * t * ((e + 1) * t - e) }, easeOutBack(t) { const e = 1.70158; return (t -= 1) * t * ((e + 1) * t + e) + 1 }, easeInOutBack(t) { let e = 1.70158; return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2) }, easeInBounce: t => 1 - fi.easeOutBounce(1 - t), easeOutBounce(t) { const e = 7.5625, i = 2.75; return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375 }, easeInOutBounce: t => t < .5 ? .5 * fi.easeInBounce(2 * t) : .5 * fi.easeOutBounce(2 * t - 1) + .5 }; function gi(t, e, i, s) { return { x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y) } } function pi(t, e, i, s) { return { x: t.x + i * (e.x - t.x), y: "middle" === s ? i < .5 ? t.y : e.y : "after" === s ? i < 1 ? t.y : e.y : i > 0 ? e.y : t.y } } function mi(t, e, i, s) { const n = { x: t.cp2x, y: t.cp2y }, o = { x: e.cp1x, y: e.cp1y }, a = gi(t, n, i), r = gi(n, o, i), l = gi(o, e, i), h = gi(a, r, i), c = gi(r, l, i); return gi(h, c, i) } const xi = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, bi = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/; function _i(t, e) { const i = ("" + t).match(xi); if (!i || "normal" === i[1]) return 1.2 * e; switch (t = +i[2], i[3]) { case "px": return t; case "%": t /= 100 }return e * t } const yi = t => +t || 0; function vi(t, e) { const i = {}, s = o(e), n = s ? Object.keys(e) : e, a = o(t) ? s ? i => l(t[i], t[e[i]]) : e => t[e] : () => t; for (const t of n) i[t] = yi(a(t)); return i } function Mi(t) { return vi(t, { top: "y", right: "x", bottom: "y", left: "x" }) } function wi(t) { return vi(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]) } function ki(t) { const e = Mi(t); return e.width = e.left + e.right, e.height = e.top + e.bottom, e } function Si(t, e) { t = t || {}, e = e || ue.font; let i = l(t.size, e.size); "string" == typeof i && (i = parseInt(i, 10)); let s = l(t.style, e.style); s && !("" + s).match(bi) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0); const n = { family: l(t.family, e.family), lineHeight: _i(l(t.lineHeight, e.lineHeight), i), size: i, style: s, weight: l(t.weight, e.weight), string: "" }; return n.string = De(n), n } function Pi(t, e, i, s) { let o, a, r, l = !0; for (o = 0, a = t.length; o < a; ++o)if (r = t[o], void 0 !== r && (void 0 !== e && "function" == typeof r && (r = r(e), l = !1), void 0 !== i && n(r) && (r = r[i % r.length], l = !1), void 0 !== r)) return s && !l && (s.cacheable = !1), r } function Di(t, e, i) { const { min: s, max: n } = t, o = c(e, (n - s) / 2), a = (t, e) => i && 0 === t ? 0 : t + e; return { min: a(s, -Math.abs(o)), max: a(n, o) } } function Ci(t, e) { return Object.assign(Object.create(t), e) } function Oi(t, e, i) { return t ? function (t, e) { return { x: i => t + t + e - i, setWidth(t) { e = t }, textAlign: t => "center" === t ? t : "right" === t ? "left" : "right", xPlus: (t, e) => t - e, leftForLtr: (t, e) => t - e } }(e, i) : { x: t => t, setWidth(t) { }, textAlign: t => t, xPlus: (t, e) => t + e, leftForLtr: (t, e) => t } } function Ai(t, e) { let i, s; "ltr" !== e && "rtl" !== e || (i = t.canvas.style, s = [i.getPropertyValue("direction"), i.getPropertyPriority("direction")], i.setProperty("direction", e, "important"), t.prevTextDirection = s) } function Ti(t, e) { void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1])) } function Li(t) { return "angle" === t ? { between: Z, compare: K, normalize: G } : { between: tt, compare: (t, e) => t - e, normalize: t => t } } function Ei({ start: t, end: e, count: i, loop: s, style: n }) { return { start: t % i, end: e % i, loop: s && (e - t + 1) % i == 0, style: n } } function Ri(t, e, i) { if (!i) return [t]; const { property: s, start: n, end: o } = i, a = e.length, { compare: r, between: l, normalize: h } = Li(s), { start: c, end: d, loop: u, style: f } = function (t, e, i) { const { property: s, start: n, end: o } = i, { between: a, normalize: r } = Li(s), l = e.length; let h, c, { start: d, end: u, loop: f } = t; if (f) { for (d += l, u += l, h = 0, c = l; h < c && a(r(e[d % l][s]), n, o); ++h)d--, u--; d %= l, u %= l } return u < d && (u += l), { start: d, end: u, loop: f, style: t.style } }(t, e, i), g = []; let p, m, x, b = !1, _ = null; const y = () => b || l(n, x, p) && 0 !== r(n, x), v = () => !b || 0 === r(o, p) || l(o, x, p); for (let t = c, i = c; t <= d; ++t)m = e[t % a], m.skip || (p = h(m[s]), p !== x && (b = l(p, n, o), null === _ && y() && (_ = 0 === r(p, n) ? t : i), null !== _ && v() && (g.push(Ei({ start: _, end: t, loop: u, count: a, style: f })), _ = null), i = t, x = p)); return null !== _ && g.push(Ei({ start: _, end: d, loop: u, count: a, style: f })), g } function Ii(t, e) { const i = [], s = t.segments; for (let n = 0; n < s.length; n++) { const o = Ri(s[n], t.points, e); o.length && i.push(...o) } return i } function zi(t, e) { const i = t.points, s = t.options.spanGaps, n = i.length; if (!n) return []; const o = !!t._loop, { start: a, end: r } = function (t, e, i, s) { let n = 0, o = e - 1; if (i && !s) for (; n < e && !t[n].skip;)n++; for (; n < e && t[n].skip;)n++; for (n %= e, i && (o += n); o > n && t[o % e].skip;)o--; return o %= e, { start: n, end: o } }(i, n, o, s); if (!0 === s) return Fi(t, [{ start: a, end: r, loop: o }], i, e); return Fi(t, function (t, e, i, s) { const n = t.length, o = []; let a, r = e, l = t[e]; for (a = e + 1; a <= i; ++a) { const i = t[a % n]; i.skip || i.stop ? l.skip || (s = !1, o.push({ start: e % n, end: (a - 1) % n, loop: s }), e = r = i.stop ? a : null) : (r = a, l.skip && (e = a)), l = i } return null !== r && o.push({ start: e % n, end: r % n, loop: s }), o }(i, a, r < a ? r + n : r, !!t._fullLoop && 0 === a && r === n - 1), i, e) } function Fi(t, e, i, s) { return s && s.setContext && i ? function (t, e, i, s) { const n = t._chart.getContext(), o = Vi(t.options), { _datasetIndex: a, options: { spanGaps: r } } = t, l = i.length, h = []; let c = o, d = e[0].start, u = d; function f(t, e, s, n) { const o = r ? -1 : 1; if (t !== e) { for (t += l; i[t % l].skip;)t -= o; for (; i[e % l].skip;)e += o; t % l != e % l && (h.push({ start: t % l, end: e % l, loop: s, style: n }), c = n, d = e % l) } } for (const t of e) { d = r ? d : t.start; let e, o = i[d % l]; for (u = d + 1; u <= t.end; u++) { const r = i[u % l]; e = Vi(s.setContext(Ci(n, { type: "segment", p0: o, p1: r, p0DataIndex: (u - 1) % l, p1DataIndex: u % l, datasetIndex: a }))), Bi(e, c) && f(d, u - 1, t.loop, c), o = r, c = e } d < u - 1 && f(d, u - 1, t.loop, c) } return h }(t, e, i, s) : e } function Vi(t) { return { backgroundColor: t.backgroundColor, borderCapStyle: t.borderCapStyle, borderDash: t.borderDash, borderDashOffset: t.borderDashOffset, borderJoinStyle: t.borderJoinStyle, borderWidth: t.borderWidth, borderColor: t.borderColor } } function Bi(t, e) { if (!e) return !1; const i = [], s = function (t, e) { return Jt(e) ? (i.includes(e) || i.push(e), i.indexOf(e)) : e }; return JSON.stringify(t, s) !== JSON.stringify(e, s) } var Wi = Object.freeze({ __proto__: null, HALF_PI: E, INFINITY: T, PI: C, PITAU: A, QUARTER_PI: R, RAD_PER_DEG: L, TAU: O, TWO_THIRDS_PI: I, _addGrace: Di, _alignPixel: Ae, _alignStartEnd: ft, _angleBetween: Z, _angleDiff: K, _arrayUnique: lt, _attachContext: $e, _bezierCurveTo: Ve, _bezierInterpolation: mi, _boundSegment: Ri, _boundSegments: Ii, _capitalize: w, _computeSegments: zi, _createResolver: je, _decimalPlaces: U, _deprecated: function (t, e, i, s) { void 0 !== e && console.warn(t + ': "' + i + '" is deprecated. Please use "' + s + '" instead') }, _descriptors: Ye, _elementsEqual: f, _factorize: W, _filterBetween: nt, _getParentNode: ge, _getStartAndCountOfVisiblePoints: pt, _int16Range: Q, _isBetween: tt, _isClickEvent: D, _isDomSupported: fe, _isPointInArea: Re, _limitValue: J, _longestText: Oe, _lookup: et, _lookupByKey: it, _measureText: Ce, _merger: m, _mergerIf: _, _normalizeAngle: G, _parseObjectDataRadialScale: ii, _pointInLine: gi, _readValueToProps: vi, _rlookupByKey: st, _scaleRangesChanged: mt, _setMinAndMaxByKey: j, _splitKey: v, _steppedInterpolation: pi, _steppedLineTo: Fe, _textX: gt, _toLeftRightCenter: ut, _updateBezierControlPoints: hi, addRoundedRectPath: He, almostEquals: V, almostWhole: H, callback: d, clearCanvas: Te, clipArea: Ie, clone: g, color: Qt, createContext: Ci, debounce: dt, defined: k, distanceBetweenPoints: q, drawPoint: Le, drawPointLegend: Ee, each: u, easingEffects: fi, finiteOrDefault: r, fontString: function (t, e, i) { return e + " " + t + "px " + i }, formatNumber: ne, getAngleFromPoint: X, getHoverColor: te, getMaximumSize: we, getRelativePosition: ve, getRtlAdapter: Oi, getStyle: xe, isArray: n, isFinite: a, isFunction: S, isNullOrUndef: s, isNumber: N, isObject: o, isPatternOrGradient: Jt, listenArrayEvents: at, log10: z, merge: x, mergeIf: b, niceNum: B, noop: e, overrideTextDirection: Ai, readUsedSize: Pe, renderText: Ne, requestAnimFrame: ht, resolve: Pi, resolveObjectKey: M, restoreTextDirection: Ti, retinaScale: ke, setsEqual: P, sign: F, splineCurve: ai, splineCurveMonotone: ri, supportsEventListenerOptions: Se, throttled: ct, toDegrees: Y, toDimension: c, toFont: Si, toFontString: De, toLineHeight: _i, toPadding: ki, toPercentage: h, toRadians: $, toTRBL: Mi, toTRBLCorners: wi, uid: i, unclipArea: ze, unlistenArrayEvents: rt, valueOrDefault: l }); function Ni(t, e, i, s) { const { controller: n, data: o, _sorted: a } = t, r = n._cachedMeta.iScale; if (r && e === r.axis && "r" !== e && a && o.length) { const t = r._reversePixels ? st : it; if (!s) return t(o, e, i); if (n._sharedOptions) { const s = o[0], n = "function" == typeof s.getRange && s.getRange(e); if (n) { const s = t(o, e, i - n), a = t(o, e, i + n); return { lo: s.lo, hi: a.hi } } } } return { lo: 0, hi: o.length - 1 } } function Hi(t, e, i, s, n) { const o = t.getSortedVisibleDatasetMetas(), a = i[e]; for (let t = 0, i = o.length; t < i; ++t) { const { index: i, data: r } = o[t], { lo: l, hi: h } = Ni(o[t], e, a, n); for (let t = l; t <= h; ++t) { const e = r[t]; e.skip || s(e, i, t) } } } function ji(t, e, i, s, n) { const o = []; if (!n && !t.isPointInArea(e)) return o; return Hi(t, i, e, (function (i, a, r) { (n || Re(i, t.chartArea, 0)) && i.inRange(e.x, e.y, s) && o.push({ element: i, datasetIndex: a, index: r }) }), !0), o } function $i(t, e, i, s, n, o) { let a = []; const r = function (t) { const e = -1 !== t.indexOf("x"), i = -1 !== t.indexOf("y"); return function (t, s) { const n = e ? Math.abs(t.x - s.x) : 0, o = i ? Math.abs(t.y - s.y) : 0; return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2)) } }(i); let l = Number.POSITIVE_INFINITY; return Hi(t, i, e, (function (i, h, c) { const d = i.inRange(e.x, e.y, n); if (s && !d) return; const u = i.getCenterPoint(n); if (!(!!o || t.isPointInArea(u)) && !d) return; const f = r(e, u); f < l ? (a = [{ element: i, datasetIndex: h, index: c }], l = f) : f === l && a.push({ element: i, datasetIndex: h, index: c }) })), a } function Yi(t, e, i, s, n, o) { return o || t.isPointInArea(e) ? "r" !== i || s ? $i(t, e, i, s, n, o) : function (t, e, i, s) { let n = []; return Hi(t, i, e, (function (t, i, o) { const { startAngle: a, endAngle: r } = t.getProps(["startAngle", "endAngle"], s), { angle: l } = X(t, { x: e.x, y: e.y }); Z(l, a, r) && n.push({ element: t, datasetIndex: i, index: o }) })), n }(t, e, i, n) : [] } function Ui(t, e, i, s, n) { const o = [], a = "x" === i ? "inXRange" : "inYRange"; let r = !1; return Hi(t, i, e, ((t, s, l) => { t[a](e[i], n) && (o.push({ element: t, datasetIndex: s, index: l }), r = r || t.inRange(e.x, e.y, n)) })), s && !r ? [] : o } var Xi = { evaluateInteractionItems: Hi, modes: { index(t, e, i, s) { const n = ve(e, t), o = i.axis || "x", a = i.includeInvisible || !1, r = i.intersect ? ji(t, n, o, s, a) : Yi(t, n, o, !1, s, a), l = []; return r.length ? (t.getSortedVisibleDatasetMetas().forEach((t => { const e = r[0].index, i = t.data[e]; i && !i.skip && l.push({ element: i, datasetIndex: t.index, index: e }) })), l) : [] }, dataset(t, e, i, s) { const n = ve(e, t), o = i.axis || "xy", a = i.includeInvisible || !1; let r = i.intersect ? ji(t, n, o, s, a) : Yi(t, n, o, !1, s, a); if (r.length > 0) { const e = r[0].datasetIndex, i = t.getDatasetMeta(e).data; r = []; for (let t = 0; t < i.length; ++t)r.push({ element: i[t], datasetIndex: e, index: t }) } return r }, point: (t, e, i, s) => ji(t, ve(e, t), i.axis || "xy", s, i.includeInvisible || !1), nearest(t, e, i, s) { const n = ve(e, t), o = i.axis || "xy", a = i.includeInvisible || !1; return Yi(t, n, o, i.intersect, s, a) }, x: (t, e, i, s) => Ui(t, ve(e, t), "x", i.intersect, s), y: (t, e, i, s) => Ui(t, ve(e, t), "y", i.intersect, s) } }; const qi = ["left", "top", "right", "bottom"]; function Ki(t, e) { return t.filter((t => t.pos === e)) } function Gi(t, e) { return t.filter((t => -1 === qi.indexOf(t.pos) && t.box.axis === e)) } function Zi(t, e) { return t.sort(((t, i) => { const s = e ? i : t, n = e ? t : i; return s.weight === n.weight ? s.index - n.index : s.weight - n.weight })) } function Ji(t, e) { const i = function (t) { const e = {}; for (const i of t) { const { stack: t, pos: s, stackWeight: n } = i; if (!t || !qi.includes(s)) continue; const o = e[t] || (e[t] = { count: 0, placed: 0, weight: 0, size: 0 }); o.count++, o.weight += n } return e }(t), { vBoxMaxWidth: s, hBoxMaxHeight: n } = e; let o, a, r; for (o = 0, a = t.length; o < a; ++o) { r = t[o]; const { fullSize: a } = r.box, l = i[r.stack], h = l && r.stackWeight / l.weight; r.horizontal ? (r.width = h ? h * s : a && e.availableWidth, r.height = n) : (r.width = s, r.height = h ? h * n : a && e.availableHeight) } return i } function Qi(t, e, i, s) { return Math.max(t[i], e[i]) + Math.max(t[s], e[s]) } function ts(t, e) { t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right) } function es(t, e, i, s) { const { pos: n, box: a } = i, r = t.maxPadding; if (!o(n)) { i.size && (t[n] -= i.size); const e = s[i.stack] || { size: 0, count: 1 }; e.size = Math.max(e.size, i.horizontal ? a.height : a.width), i.size = e.size / e.count, t[n] += i.size } a.getPadding && ts(r, a.getPadding()); const l = Math.max(0, e.outerWidth - Qi(r, t, "left", "right")), h = Math.max(0, e.outerHeight - Qi(r, t, "top", "bottom")), c = l !== t.w, d = h !== t.h; return t.w = l, t.h = h, i.horizontal ? { same: c, other: d } : { same: d, other: c } } function is(t, e) { const i = e.maxPadding; function s(t) { const s = { left: 0, top: 0, right: 0, bottom: 0 }; return t.forEach((t => { s[t] = Math.max(e[t], i[t]) })), s } return s(t ? ["left", "right"] : ["top", "bottom"]) } function ss(t, e, i, s) { const n = []; let o, a, r, l, h, c; for (o = 0, a = t.length, h = 0; o < a; ++o) { r = t[o], l = r.box, l.update(r.width || e.w, r.height || e.h, is(r.horizontal, e)); const { same: a, other: d } = es(e, i, r, s); h |= a && n.length, c = c || d, l.fullSize || n.push(r) } return h && ss(n, e, i, s) || c } function ns(t, e, i, s, n) { t.top = i, t.left = e, t.right = e + s, t.bottom = i + n, t.width = s, t.height = n } function os(t, e, i, s) { const n = i.padding; let { x: o, y: a } = e; for (const r of t) { const t = r.box, l = s[r.stack] || { count: 1, placed: 0, weight: 1 }, h = r.stackWeight / l.weight || 1; if (r.horizontal) { const s = e.w * h, o = l.size || t.height; k(l.start) && (a = l.start), t.fullSize ? ns(t, n.left, a, i.outerWidth - n.right - n.left, o) : ns(t, e.left + l.placed, a, s, o), l.start = a, l.placed += s, a = t.bottom } else { const s = e.h * h, a = l.size || t.width; k(l.start) && (o = l.start), t.fullSize ? ns(t, o, n.top, a, i.outerHeight - n.bottom - n.top) : ns(t, o, e.top + l.placed, a, s), l.start = o, l.placed += s, o = t.right } } e.x = o, e.y = a } var as = { addBox(t, e) { t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function () { return [{ z: 0, draw(t) { e.draw(t) } }] }, t.boxes.push(e) }, removeBox(t, e) { const i = t.boxes ? t.boxes.indexOf(e) : -1; -1 !== i && t.boxes.splice(i, 1) }, configure(t, e, i) { e.fullSize = i.fullSize, e.position = i.position, e.weight = i.weight }, update(t, e, i, s) { if (!t) return; const n = ki(t.options.layout.padding), o = Math.max(e - n.width, 0), a = Math.max(i - n.height, 0), r = function (t) { const e = function (t) { const e = []; let i, s, n, o, a, r; for (i = 0, s = (t || []).length; i < s; ++i)n = t[i], ({ position: o, options: { stack: a, stackWeight: r = 1 } } = n), e.push({ index: i, box: n, pos: o, horizontal: n.isHorizontal(), weight: n.weight, stack: a && o + a, stackWeight: r }); return e }(t), i = Zi(e.filter((t => t.box.fullSize)), !0), s = Zi(Ki(e, "left"), !0), n = Zi(Ki(e, "right")), o = Zi(Ki(e, "top"), !0), a = Zi(Ki(e, "bottom")), r = Gi(e, "x"), l = Gi(e, "y"); return { fullSize: i, leftAndTop: s.concat(o), rightAndBottom: n.concat(l).concat(a).concat(r), chartArea: Ki(e, "chartArea"), vertical: s.concat(n).concat(l), horizontal: o.concat(a).concat(r) } }(t.boxes), l = r.vertical, h = r.horizontal; u(t.boxes, (t => { "function" == typeof t.beforeLayout && t.beforeLayout() })); const c = l.reduce(((t, e) => e.box.options && !1 === e.box.options.display ? t : t + 1), 0) || 1, d = Object.freeze({ outerWidth: e, outerHeight: i, padding: n, availableWidth: o, availableHeight: a, vBoxMaxWidth: o / 2 / c, hBoxMaxHeight: a / 2 }), f = Object.assign({}, n); ts(f, ki(s)); const g = Object.assign({ maxPadding: f, w: o, h: a, x: n.left, y: n.top }, n), p = Ji(l.concat(h), d); ss(r.fullSize, g, d, p), ss(l, g, d, p), ss(h, g, d, p) && ss(l, g, d, p), function (t) { const e = t.maxPadding; function i(i) { const s = Math.max(e[i] - t[i], 0); return t[i] += s, s } t.y += i("top"), t.x += i("left"), i("right"), i("bottom") }(g), os(r.leftAndTop, g, d, p), g.x += g.w, g.y += g.h, os(r.rightAndBottom, g, d, p), t.chartArea = { left: g.left, top: g.top, right: g.left + g.w, bottom: g.top + g.h, height: g.h, width: g.w }, u(r.chartArea, (e => { const i = e.box; Object.assign(i, t.chartArea), i.update(g.w, g.h, { left: 0, top: 0, right: 0, bottom: 0 }) })) } }; class rs { acquireContext(t, e) { } releaseContext(t) { return !1 } addEventListener(t, e, i) { } removeEventListener(t, e, i) { } getDevicePixelRatio() { return 1 } getMaximumSize(t, e, i, s) { return e = Math.max(0, e || t.width), i = i || t.height, { width: e, height: Math.max(0, s ? Math.floor(e / s) : i) } } isAttached(t) { return !0 } updateConfig(t) { } } class ls extends rs { acquireContext(t) { return t && t.getContext && t.getContext("2d") || null } updateConfig(t) { t.options.animation = !1 } } const hs = "$chartjs", cs = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout" }, ds = t => null === t || "" === t; const us = !!Se && { passive: !0 }; function fs(t, e, i) { t && t.canvas && t.canvas.removeEventListener(e, i, us) } function gs(t, e) { for (const i of t) if (i === e || i.contains(e)) return !0 } function ps(t, e, i) { const s = t.canvas, n = new MutationObserver((t => { let e = !1; for (const i of t) e = e || gs(i.addedNodes, s), e = e && !gs(i.removedNodes, s); e && i() })); return n.observe(document, { childList: !0, subtree: !0 }), n } function ms(t, e, i) { const s = t.canvas, n = new MutationObserver((t => { let e = !1; for (const i of t) e = e || gs(i.removedNodes, s), e = e && !gs(i.addedNodes, s); e && i() })); return n.observe(document, { childList: !0, subtree: !0 }), n } const xs = new Map; let bs = 0; function _s() { const t = window.devicePixelRatio; t !== bs && (bs = t, xs.forEach(((e, i) => { i.currentDevicePixelRatio !== t && e() }))) } function ys(t, e, i) { const s = t.canvas, n = s && ge(s); if (!n) return; const o = ct(((t, e) => { const s = n.clientWidth; i(t, e), s < n.clientWidth && i() }), window), a = new ResizeObserver((t => { const e = t[0], i = e.contentRect.width, s = e.contentRect.height; 0 === i && 0 === s || o(i, s) })); return a.observe(n), function (t, e) { xs.size || window.addEventListener("resize", _s), xs.set(t, e) }(t, o), a } function vs(t, e, i) { i && i.disconnect(), "resize" === e && function (t) { xs.delete(t), xs.size || window.removeEventListener("resize", _s) }(t) } function Ms(t, e, i) { const s = t.canvas, n = ct((e => { null !== t.ctx && i(function (t, e) { const i = cs[t.type] || t.type, { x: s, y: n } = ve(t, e); return { type: i, chart: e, native: t, x: void 0 !== s ? s : null, y: void 0 !== n ? n : null } }(e, t)) }), t); return function (t, e, i) { t && t.addEventListener(e, i, us) }(s, e, n), n } class ws extends rs { acquireContext(t, e) { const i = t && t.getContext && t.getContext("2d"); return i && i.canvas === t ? (function (t, e) { const i = t.style, s = t.getAttribute("height"), n = t.getAttribute("width"); if (t[hs] = { initial: { height: s, width: n, style: { display: i.display, height: i.height, width: i.width } } }, i.display = i.display || "block", i.boxSizing = i.boxSizing || "border-box", ds(n)) { const e = Pe(t, "width"); void 0 !== e && (t.width = e) } if (ds(s)) if ("" === t.style.height) t.height = t.width / (e || 2); else { const e = Pe(t, "height"); void 0 !== e && (t.height = e) } }(t, e), i) : null } releaseContext(t) { const e = t.canvas; if (!e[hs]) return !1; const i = e[hs].initial;["height", "width"].forEach((t => { const n = i[t]; s(n) ? e.removeAttribute(t) : e.setAttribute(t, n) })); const n = i.style || {}; return Object.keys(n).forEach((t => { e.style[t] = n[t] })), e.width = e.width, delete e[hs], !0 } addEventListener(t, e, i) { this.removeEventListener(t, e); const s = t.$proxies || (t.$proxies = {}), n = { attach: ps, detach: ms, resize: ys }[e] || Ms; s[e] = n(t, e, i) } removeEventListener(t, e) { const i = t.$proxies || (t.$proxies = {}), s = i[e]; if (!s) return; ({ attach: vs, detach: vs, resize: vs }[e] || fs)(t, e, s), i[e] = void 0 } getDevicePixelRatio() { return window.devicePixelRatio } getMaximumSize(t, e, i, s) { return we(t, e, i, s) } isAttached(t) { const e = t && ge(t); return !(!e || !e.isConnected) } } function ks(t) { return !fe() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? ls : ws } var Ss = Object.freeze({ __proto__: null, BasePlatform: rs, BasicPlatform: ls, DomPlatform: ws, _detectPlatform: ks }); const Ps = "transparent", Ds = { boolean: (t, e, i) => i > .5 ? e : t, color(t, e, i) { const s = Qt(t || Ps), n = s.valid && Qt(e || Ps); return n && n.valid ? n.mix(s, i).hexString() : e }, number: (t, e, i) => t + (e - t) * i }; class Cs { constructor(t, e, i, s) { const n = e[i]; s = Pi([t.to, s, n, t.from]); const o = Pi([t.from, n, s]); this._active = !0, this._fn = t.fn || Ds[t.type || typeof o], this._easing = fi[t.easing] || fi.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = o, this._to = s, this._promises = void 0 } active() { return this._active } update(t, e, i) { if (this._active) { this._notify(!1); const s = this._target[this._prop], n = i - this._start, o = this._duration - n; this._start = i, this._duration = Math.floor(Math.max(o, t.duration)), this._total += n, this._loop = !!t.loop, this._to = Pi([t.to, e, s, t.from]), this._from = Pi([t.from, s, e]) } } cancel() { this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1)) } tick(t) { const e = t - this._start, i = this._duration, s = this._prop, n = this._from, o = this._loop, a = this._to; let r; if (this._active = n !== a && (o || e < i), !this._active) return this._target[s] = a, void this._notify(!0); e < 0 ? this._target[s] = n : (r = e / i % 2, r = o && r > 1 ? 2 - r : r, r = this._easing(Math.min(1, Math.max(0, r))), this._target[s] = this._fn(n, a, r)) } wait() { const t = this._promises || (this._promises = []); return new Promise(((e, i) => { t.push({ res: e, rej: i }) })) } _notify(t) { const e = t ? "res" : "rej", i = this._promises || []; for (let t = 0; t < i.length; t++)i[t][e]() } } class Os { constructor(t, e) { this._chart = t, this._properties = new Map, this.configure(e) } configure(t) { if (!o(t)) return; const e = Object.keys(ue.animation), i = this._properties; Object.getOwnPropertyNames(t).forEach((s => { const a = t[s]; if (!o(a)) return; const r = {}; for (const t of e) r[t] = a[t]; (n(a.properties) && a.properties || [s]).forEach((t => { t !== s && i.has(t) || i.set(t, r) })) })) } _animateOptions(t, e) { const i = e.options, s = function (t, e) { if (!e) return; let i = t.options; if (!i) return void (t.options = e); i.$shared && (t.options = i = Object.assign({}, i, { $shared: !1, $animations: {} })); return i }(t, i); if (!s) return []; const n = this._createAnimations(s, i); return i.$shared && function (t, e) { const i = [], s = Object.keys(e); for (let e = 0; e < s.length; e++) { const n = t[s[e]]; n && n.active() && i.push(n.wait()) } return Promise.all(i) }(t.options.$animations, i).then((() => { t.options = i }), (() => { })), n } _createAnimations(t, e) { const i = this._properties, s = [], n = t.$animations || (t.$animations = {}), o = Object.keys(e), a = Date.now(); let r; for (r = o.length - 1; r >= 0; --r) { const l = o[r]; if ("$" === l.charAt(0)) continue; if ("options" === l) { s.push(...this._animateOptions(t, e)); continue } const h = e[l]; let c = n[l]; const d = i.get(l); if (c) { if (d && c.active()) { c.update(d, h, a); continue } c.cancel() } d && d.duration ? (n[l] = c = new Cs(d, t, l, h), s.push(c)) : t[l] = h } return s } update(t, e) { if (0 === this._properties.size) return void Object.assign(t, e); const i = this._createAnimations(t, e); return i.length ? (bt.add(this._chart, i), !0) : void 0 } } function As(t, e) { const i = t && t.options || {}, s = i.reverse, n = void 0 === i.min ? e : 0, o = void 0 === i.max ? e : 0; return { start: s ? o : n, end: s ? n : o } } function Ts(t, e) { const i = [], s = t._getSortedDatasetMetas(e); let n, o; for (n = 0, o = s.length; n < o; ++n)i.push(s[n].index); return i } function Ls(t, e, i, s = {}) { const n = t.keys, o = "single" === s.mode; let r, l, h, c; if (null !== e) { for (r = 0, l = n.length; r < l; ++r) { if (h = +n[r], h === i) { if (s.all) continue; break } c = t.values[h], a(c) && (o || 0 === e || F(e) === F(c)) && (e += c) } return e } } function Es(t, e) { const i = t && t.options.stacked; return i || void 0 === i && void 0 !== e.stack } function Rs(t, e, i) { const s = t[e] || (t[e] = {}); return s[i] || (s[i] = {}) } function Is(t, e, i, s) { for (const n of e.getMatchingVisibleMetas(s).reverse()) { const e = t[n.index]; if (i && e > 0 || !i && e < 0) return n.index } return null } function zs(t, e) { const { chart: i, _cachedMeta: s } = t, n = i._stacks || (i._stacks = {}), { iScale: o, vScale: a, index: r } = s, l = o.axis, h = a.axis, c = function (t, e, i) { return `${t.id}.${e.id}.${i.stack || i.type}` }(o, a, s), d = e.length; let u; for (let t = 0; t < d; ++t) { const i = e[t], { [l]: o, [h]: d } = i; u = (i._stacks || (i._stacks = {}))[h] = Rs(n, c, o), u[r] = d, u._top = Is(u, a, !0, s.type), u._bottom = Is(u, a, !1, s.type); (u._visualValues || (u._visualValues = {}))[r] = d } } function Fs(t, e) { const i = t.scales; return Object.keys(i).filter((t => i[t].axis === e)).shift() } function Vs(t, e) { const i = t.controller.index, s = t.vScale && t.vScale.axis; if (s) { e = e || t._parsed; for (const t of e) { const e = t._stacks; if (!e || void 0 === e[s] || void 0 === e[s][i]) return; delete e[s][i], void 0 !== e[s]._visualValues && void 0 !== e[s]._visualValues[i] && delete e[s]._visualValues[i] } } } const Bs = t => "reset" === t || "none" === t, Ws = (t, e) => e ? t : Object.assign({}, t); class Ns { static defaults = {}; static datasetElementType = null; static dataElementType = null; constructor(t, e) { this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize() } initialize() { const t = this._cachedMeta; this.configure(), this.linkScales(), t._stacked = Es(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options") } updateIndex(t) { this.index !== t && Vs(this._cachedMeta), this.index = t } linkScales() { const t = this.chart, e = this._cachedMeta, i = this.getDataset(), s = (t, e, i, s) => "x" === t ? e : "r" === t ? s : i, n = e.xAxisID = l(i.xAxisID, Fs(t, "x")), o = e.yAxisID = l(i.yAxisID, Fs(t, "y")), a = e.rAxisID = l(i.rAxisID, Fs(t, "r")), r = e.indexAxis, h = e.iAxisID = s(r, n, o, a), c = e.vAxisID = s(r, o, n, a); e.xScale = this.getScaleForId(n), e.yScale = this.getScaleForId(o), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(h), e.vScale = this.getScaleForId(c) } getDataset() { return this.chart.data.datasets[this.index] } getMeta() { return this.chart.getDatasetMeta(this.index) } getScaleForId(t) { return this.chart.scales[t] } _getOtherScale(t) { const e = this._cachedMeta; return t === e.iScale ? e.vScale : e.iScale } reset() { this._update("reset") } _destroy() { const t = this._cachedMeta; this._data && rt(this._data, this), t._stacked && Vs(t) } _dataCheck() { const t = this.getDataset(), e = t.data || (t.data = []), i = this._data; if (o(e)) { const t = this._cachedMeta; this._data = function (t, e) { const { iScale: i, vScale: s } = e, n = "x" === i.axis ? "x" : "y", o = "x" === s.axis ? "x" : "y", a = Object.keys(t), r = new Array(a.length); let l, h, c; for (l = 0, h = a.length; l < h; ++l)c = a[l], r[l] = { [n]: c, [o]: t[c] }; return r }(e, t) } else if (i !== e) { if (i) { rt(i, this); const t = this._cachedMeta; Vs(t), t._parsed = [] } e && Object.isExtensible(e) && at(e, this), this._syncList = [], this._data = e } } addElements() { const t = this._cachedMeta; this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType) } buildOrUpdateElements(t) { const e = this._cachedMeta, i = this.getDataset(); let s = !1; this._dataCheck(); const n = e._stacked; e._stacked = Es(e.vScale, e), e.stack !== i.stack && (s = !0, Vs(e), e.stack = i.stack), this._resyncElements(t), (s || n !== e._stacked) && zs(this, e._parsed) } configure() { const t = this.chart.config, e = t.datasetScopeKeys(this._type), i = t.getOptionScopes(this.getDataset(), e, !0); this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {} } parse(t, e) { const { _cachedMeta: i, _data: s } = this, { iScale: a, _stacked: r } = i, l = a.axis; let h, c, d, u = 0 === t && e === s.length || i._sorted, f = t > 0 && i._parsed[t - 1]; if (!1 === this._parsing) i._parsed = s, i._sorted = !0, d = s; else { d = n(s[t]) ? this.parseArrayData(i, s, t, e) : o(s[t]) ? this.parseObjectData(i, s, t, e) : this.parsePrimitiveData(i, s, t, e); const a = () => null === c[l] || f && c[l] < f[l]; for (h = 0; h < e; ++h)i._parsed[h + t] = c = d[h], u && (a() && (u = !1), f = c); i._sorted = u } r && zs(this, d) } parsePrimitiveData(t, e, i, s) { const { iScale: n, vScale: o } = t, a = n.axis, r = o.axis, l = n.getLabels(), h = n === o, c = new Array(s); let d, u, f; for (d = 0, u = s; d < u; ++d)f = d + i, c[d] = { [a]: h || n.parse(l[f], f), [r]: o.parse(e[f], f) }; return c } parseArrayData(t, e, i, s) { const { xScale: n, yScale: o } = t, a = new Array(s); let r, l, h, c; for (r = 0, l = s; r < l; ++r)h = r + i, c = e[h], a[r] = { x: n.parse(c[0], h), y: o.parse(c[1], h) }; return a } parseObjectData(t, e, i, s) { const { xScale: n, yScale: o } = t, { xAxisKey: a = "x", yAxisKey: r = "y" } = this._parsing, l = new Array(s); let h, c, d, u; for (h = 0, c = s; h < c; ++h)d = h + i, u = e[d], l[h] = { x: n.parse(M(u, a), d), y: o.parse(M(u, r), d) }; return l } getParsed(t) { return this._cachedMeta._parsed[t] } getDataElement(t) { return this._cachedMeta.data[t] } applyStack(t, e, i) { const s = this.chart, n = this._cachedMeta, o = e[t.axis]; return Ls({ keys: Ts(s, !0), values: e._stacks[t.axis]._visualValues }, o, n.index, { mode: i }) } updateRangeFromParsed(t, e, i, s) { const n = i[e.axis]; let o = null === n ? NaN : n; const a = s && i._stacks[e.axis]; s && a && (s.values = a, o = Ls(s, n, this._cachedMeta.index)), t.min = Math.min(t.min, o), t.max = Math.max(t.max, o) } getMinMax(t, e) { const i = this._cachedMeta, s = i._parsed, n = i._sorted && t === i.iScale, o = s.length, r = this._getOtherScale(t), l = ((t, e, i) => t && !e.hidden && e._stacked && { keys: Ts(i, !0), values: null })(e, i, this.chart), h = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY }, { min: c, max: d } = function (t) { const { min: e, max: i, minDefined: s, maxDefined: n } = t.getUserBounds(); return { min: s ? e : Number.NEGATIVE_INFINITY, max: n ? i : Number.POSITIVE_INFINITY } }(r); let u, f; function g() { f = s[u]; const e = f[r.axis]; return !a(f[t.axis]) || c > e || d < e } for (u = 0; u < o && (g() || (this.updateRangeFromParsed(h, t, f, l), !n)); ++u); if (n) for (u = o - 1; u >= 0; --u)if (!g()) { this.updateRangeFromParsed(h, t, f, l); break } return h } getAllParsedValues(t) { const e = this._cachedMeta._parsed, i = []; let s, n, o; for (s = 0, n = e.length; s < n; ++s)o = e[s][t.axis], a(o) && i.push(o); return i } getMaxOverflow() { return !1 } getLabelAndValue(t) { const e = this._cachedMeta, i = e.iScale, s = e.vScale, n = this.getParsed(t); return { label: i ? "" + i.getLabelForValue(n[i.axis]) : "", value: s ? "" + s.getLabelForValue(n[s.axis]) : "" } } _update(t) { const e = this._cachedMeta; this.update(t || "default"), e._clip = function (t) { let e, i, s, n; return o(t) ? (e = t.top, i = t.right, s = t.bottom, n = t.left) : e = i = s = n = t, { top: e, right: i, bottom: s, left: n, disabled: !1 === t } }(l(this.options.clip, function (t, e, i) { if (!1 === i) return !1; const s = As(t, i), n = As(e, i); return { top: n.end, right: s.end, bottom: n.start, left: s.start } }(e.xScale, e.yScale, this.getMaxOverflow()))) } update(t) { } draw() { const t = this._ctx, e = this.chart, i = this._cachedMeta, s = i.data || [], n = e.chartArea, o = [], a = this._drawStart || 0, r = this._drawCount || s.length - a, l = this.options.drawActiveElementsOnTop; let h; for (i.dataset && i.dataset.draw(t, n, a, r), h = a; h < a + r; ++h) { const e = s[h]; e.hidden || (e.active && l ? o.push(e) : e.draw(t, n)) } for (h = 0; h < o.length; ++h)o[h].draw(t, n) } getStyle(t, e) { const i = e ? "active" : "default"; return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i) } getContext(t, e, i) { const s = this.getDataset(); let n; if (t >= 0 && t < this._cachedMeta.data.length) { const e = this._cachedMeta.data[t]; n = e.$context || (e.$context = function (t, e, i) { return Ci(t, { active: !1, dataIndex: e, parsed: void 0, raw: void 0, element: i, index: e, mode: "default", type: "data" }) }(this.getContext(), t, e)), n.parsed = this.getParsed(t), n.raw = s.data[t], n.index = n.dataIndex = t } else n = this.$context || (this.$context = function (t, e) { return Ci(t, { active: !1, dataset: void 0, datasetIndex: e, index: e, mode: "default", type: "dataset" }) }(this.chart.getContext(), this.index)), n.dataset = s, n.index = n.datasetIndex = this.index; return n.active = !!e, n.mode = i, n } resolveDatasetElementOptions(t) { return this._resolveElementOptions(this.datasetElementType.id, t) } resolveDataElementOptions(t, e) { return this._resolveElementOptions(this.dataElementType.id, e, t) } _resolveElementOptions(t, e = "default", i) { const s = "active" === e, n = this._cachedDataOpts, o = t + "-" + e, a = n[o], r = this.enableOptionSharing && k(i); if (a) return Ws(a, r); const l = this.chart.config, h = l.datasetElementScopeKeys(this._type, t), c = s ? [`${t}Hover`, "hover", t, ""] : [t, ""], d = l.getOptionScopes(this.getDataset(), h), u = Object.keys(ue.elements[t]), f = l.resolveNamedOptions(d, u, (() => this.getContext(i, s, e)), c); return f.$shared && (f.$shared = r, n[o] = Object.freeze(Ws(f, r))), f } _resolveAnimations(t, e, i) { const s = this.chart, n = this._cachedDataOpts, o = `animation-${e}`, a = n[o]; if (a) return a; let r; if (!1 !== s.options.animation) { const s = this.chart.config, n = s.datasetAnimationScopeKeys(this._type, e), o = s.getOptionScopes(this.getDataset(), n); r = s.createResolver(o, this.getContext(t, i, e)) } const l = new Os(s, r && r.animations); return r && r._cacheable && (n[o] = Object.freeze(l)), l } getSharedOptions(t) { if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t)) } includeOptions(t, e) { return !e || Bs(t) || this.chart._animationsDisabled } _getSharedOptions(t, e) { const i = this.resolveDataElementOptions(t, e), s = this._sharedOptions, n = this.getSharedOptions(i), o = this.includeOptions(e, n) || n !== s; return this.updateSharedOptions(n, e, i), { sharedOptions: n, includeOptions: o } } updateElement(t, e, i, s) { Bs(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i) } updateSharedOptions(t, e, i) { t && !Bs(e) && this._resolveAnimations(void 0, e).update(t, i) } _setStyle(t, e, i, s) { t.active = s; const n = this.getStyle(e, s); this._resolveAnimations(e, i, s).update(t, { options: !s && this.getSharedOptions(n) || n }) } removeHoverStyle(t, e, i) { this._setStyle(t, i, "active", !1) } setHoverStyle(t, e, i) { this._setStyle(t, i, "active", !0) } _removeDatasetHoverStyle() { const t = this._cachedMeta.dataset; t && this._setStyle(t, void 0, "active", !1) } _setDatasetHoverStyle() { const t = this._cachedMeta.dataset; t && this._setStyle(t, void 0, "active", !0) } _resyncElements(t) { const e = this._data, i = this._cachedMeta.data; for (const [t, e, i] of this._syncList) this[t](e, i); this._syncList = []; const s = i.length, n = e.length, o = Math.min(n, s); o && this.parse(0, o), n > s ? this._insertElements(s, n - s, t) : n < s && this._removeElements(n, s - n) } _insertElements(t, e, i = !0) { const s = this._cachedMeta, n = s.data, o = t + e; let a; const r = t => { for (t.length += e, a = t.length - 1; a >= o; a--)t[a] = t[a - e] }; for (r(n), a = t; a < o; ++a)n[a] = new this.dataElementType; this._parsing && r(s._parsed), this.parse(t, e), i && this.updateElements(n, t, e, "reset") } updateElements(t, e, i, s) { } _removeElements(t, e) { const i = this._cachedMeta; if (this._parsing) { const s = i._parsed.splice(t, e); i._stacked && Vs(i, s) } i.data.splice(t, e) } _sync(t) { if (this._parsing) this._syncList.push(t); else { const [e, i, s] = t; this[e](i, s) } this.chart._dataChanges.push([this.index, ...t]) } _onDataPush() { const t = arguments.length; this._sync(["_insertElements", this.getDataset().data.length - t, t]) } _onDataPop() { this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]) } _onDataShift() { this._sync(["_removeElements", 0, 1]) } _onDataSplice(t, e) { e && this._sync(["_removeElements", t, e]); const i = arguments.length - 2; i && this._sync(["_insertElements", t, i]) } _onDataUnshift() { this._sync(["_insertElements", 0, arguments.length]) } } class Hs { static defaults = {}; static defaultRoutes = void 0; x; y; active = !1; options; $animations; tooltipPosition(t) { const { x: e, y: i } = this.getProps(["x", "y"], t); return { x: e, y: i } } hasValue() { return N(this.x) && N(this.y) } getProps(t, e) { const i = this.$animations; if (!e || !i) return this; const s = {}; return t.forEach((t => { s[t] = i[t] && i[t].active() ? i[t]._to : this[t] })), s } } function js(t, e) { const i = t.options.ticks, n = function (t) { const e = t.options.offset, i = t._tickSize(), s = t._length / i + (e ? 0 : 1), n = t._maxLength / i; return Math.floor(Math.min(s, n)) }(t), o = Math.min(i.maxTicksLimit || n, n), a = i.major.enabled ? function (t) { const e = []; let i, s; for (i = 0, s = t.length; i < s; i++)t[i].major && e.push(i); return e }(e) : [], r = a.length, l = a[0], h = a[r - 1], c = []; if (r > o) return function (t, e, i, s) { let n, o = 0, a = i[0]; for (s = Math.ceil(s), n = 0; n < t.length; n++)n === a && (e.push(t[n]), o++, a = i[o * s]) }(e, c, a, r / o), c; const d = function (t, e, i) { const s = function (t) { const e = t.length; let i, s; if (e < 2) return !1; for (s = t[0], i = 1; i < e; ++i)if (t[i] - t[i - 1] !== s) return !1; return s }(t), n = e.length / i; if (!s) return Math.max(n, 1); const o = W(s); for (let t = 0, e = o.length - 1; t < e; t++) { const e = o[t]; if (e > n) return e } return Math.max(n, 1) }(a, e, o); if (r > 0) { let t, i; const n = r > 1 ? Math.round((h - l) / (r - 1)) : null; for ($s(e, c, d, s(n) ? 0 : l - n, l), t = 0, i = r - 1; t < i; t++)$s(e, c, d, a[t], a[t + 1]); return $s(e, c, d, h, s(n) ? e.length : h + n), c } return $s(e, c, d), c } function $s(t, e, i, s, n) { const o = l(s, 0), a = Math.min(l(n, t.length), t.length); let r, h, c, d = 0; for (i = Math.ceil(i), n && (r = n - s, i = r / Math.floor(r / i)), c = o; c < 0;)d++, c = Math.round(o + d * i); for (h = Math.max(o, 0); h < a; h++)h === c && (e.push(t[h]), d++, c = Math.round(o + d * i)) } const Ys = (t, e, i) => "top" === e || "left" === e ? t[e] + i : t[e] - i, Us = (t, e) => Math.min(e || t, t); function Xs(t, e) { const i = [], s = t.length / e, n = t.length; let o = 0; for (; o < n; o += s)i.push(t[Math.floor(o)]); return i } function qs(t, e, i) { const s = t.ticks.length, n = Math.min(e, s - 1), o = t._startPixel, a = t._endPixel, r = 1e-6; let l, h = t.getPixelForTick(n); if (!(i && (l = 1 === s ? Math.max(h - o, a - h) : 0 === e ? (t.getPixelForTick(1) - h) / 2 : (h - t.getPixelForTick(n - 1)) / 2, h += n < e ? l : -l, h < o - r || h > a + r))) return h } function Ks(t) { return t.drawTicks ? t.tickLength : 0 } function Gs(t, e) { if (!t.display) return 0; const i = Si(t.font, e), s = ki(t.padding); return (n(t.text) ? t.text.length : 1) * i.lineHeight + s.height } function Zs(t, e, i) { let s = ut(t); return (i && "right" !== e || !i && "right" === e) && (s = (t => "left" === t ? "right" : "right" === t ? "left" : t)(s)), s } class Js extends Hs { constructor(t) { super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = { left: 0, right: 0, top: 0, bottom: 0 }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0 } init(t) { this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax) } parse(t, e) { return t } getUserBounds() { let { _userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: s } = this; return t = r(t, Number.POSITIVE_INFINITY), e = r(e, Number.NEGATIVE_INFINITY), i = r(i, Number.POSITIVE_INFINITY), s = r(s, Number.NEGATIVE_INFINITY), { min: r(t, i), max: r(e, s), minDefined: a(t), maxDefined: a(e) } } getMinMax(t) { let e, { min: i, max: s, minDefined: n, maxDefined: o } = this.getUserBounds(); if (n && o) return { min: i, max: s }; const a = this.getMatchingVisibleMetas(); for (let r = 0, l = a.length; r < l; ++r)e = a[r].controller.getMinMax(this, t), n || (i = Math.min(i, e.min)), o || (s = Math.max(s, e.max)); return i = o && i > s ? s : i, s = n && i > s ? i : s, { min: r(i, r(s, i)), max: r(s, r(i, s)) } } getPadding() { return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 } } getTicks() { return this.ticks } getLabels() { const t = this.chart.data; return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [] } getLabelItems(t = this.chart.chartArea) { return this._labelItems || (this._labelItems = this._computeLabelItems(t)) } beforeLayout() { this._cache = {}, this._dataLimitsCached = !1 } beforeUpdate() { d(this.options.beforeUpdate, [this]) } update(t, e, i) { const { beginAtZero: s, grace: n, ticks: o } = this.options, a = o.sampleSize; this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Di(this, n, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks(); const r = a < this.ticks.length; this._convertTicksToLabels(r ? Xs(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), o.display && (o.autoSkip || "auto" === o.source) && (this.ticks = js(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), r && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate() } configure() { let t, e, i = this.options.reverse; this.isHorizontal() ? (t = this.left, e = this.right) : (t = this.top, e = this.bottom, i = !i), this._startPixel = t, this._endPixel = e, this._reversePixels = i, this._length = e - t, this._alignToPixels = this.options.alignToPixels } afterUpdate() { d(this.options.afterUpdate, [this]) } beforeSetDimensions() { d(this.options.beforeSetDimensions, [this]) } setDimensions() { this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0 } afterSetDimensions() { d(this.options.afterSetDimensions, [this]) } _callHooks(t) { this.chart.notifyPlugins(t, this.getContext()), d(this.options[t], [this]) } beforeDataLimits() { this._callHooks("beforeDataLimits") } determineDataLimits() { } afterDataLimits() { this._callHooks("afterDataLimits") } beforeBuildTicks() { this._callHooks("beforeBuildTicks") } buildTicks() { return [] } afterBuildTicks() { this._callHooks("afterBuildTicks") } beforeTickToLabelConversion() { d(this.options.beforeTickToLabelConversion, [this]) } generateTickLabels(t) { const e = this.options.ticks; let i, s, n; for (i = 0, s = t.length; i < s; i++)n = t[i], n.label = d(e.callback, [n.value, i, t], this) } afterTickToLabelConversion() { d(this.options.afterTickToLabelConversion, [this]) } beforeCalculateLabelRotation() { d(this.options.beforeCalculateLabelRotation, [this]) } calculateLabelRotation() { const t = this.options, e = t.ticks, i = Us(this.ticks.length, t.ticks.maxTicksLimit), s = e.minRotation || 0, n = e.maxRotation; let o, a, r, l = s; if (!this._isVisible() || !e.display || s >= n || i <= 1 || !this.isHorizontal()) return void (this.labelRotation = s); const h = this._getLabelSizes(), c = h.widest.width, d = h.highest.height, u = J(this.chart.width - c, 0, this.maxWidth); o = t.offset ? this.maxWidth / i : u / (i - 1), c + 6 > o && (o = u / (i - (t.offset ? .5 : 1)), a = this.maxHeight - Ks(t.grid) - e.padding - Gs(t.title, this.chart.options.font), r = Math.sqrt(c * c + d * d), l = Y(Math.min(Math.asin(J((h.highest.height + 6) / o, -1, 1)), Math.asin(J(a / r, -1, 1)) - Math.asin(J(d / r, -1, 1)))), l = Math.max(s, Math.min(n, l))), this.labelRotation = l } afterCalculateLabelRotation() { d(this.options.afterCalculateLabelRotation, [this]) } afterAutoSkip() { } beforeFit() { d(this.options.beforeFit, [this]) } fit() { const t = { width: 0, height: 0 }, { chart: e, options: { ticks: i, title: s, grid: n } } = this, o = this._isVisible(), a = this.isHorizontal(); if (o) { const o = Gs(s, e.options.font); if (a ? (t.width = this.maxWidth, t.height = Ks(n) + o) : (t.height = this.maxHeight, t.width = Ks(n) + o), i.display && this.ticks.length) { const { first: e, last: s, widest: n, highest: o } = this._getLabelSizes(), r = 2 * i.padding, l = $(this.labelRotation), h = Math.cos(l), c = Math.sin(l); if (a) { const e = i.mirror ? 0 : c * n.width + h * o.height; t.height = Math.min(this.maxHeight, t.height + e + r) } else { const e = i.mirror ? 0 : h * n.width + c * o.height; t.width = Math.min(this.maxWidth, t.width + e + r) } this._calculatePadding(e, s, c, h) } } this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom) } _calculatePadding(t, e, i, s) { const { ticks: { align: n, padding: o }, position: a } = this.options, r = 0 !== this.labelRotation, l = "top" !== a && "x" === this.axis; if (this.isHorizontal()) { const a = this.getPixelForTick(0) - this.left, h = this.right - this.getPixelForTick(this.ticks.length - 1); let c = 0, d = 0; r ? l ? (c = s * t.width, d = i * e.height) : (c = i * t.height, d = s * e.width) : "start" === n ? d = e.width : "end" === n ? c = t.width : "inner" !== n && (c = t.width / 2, d = e.width / 2), this.paddingLeft = Math.max((c - a + o) * this.width / (this.width - a), 0), this.paddingRight = Math.max((d - h + o) * this.width / (this.width - h), 0) } else { let i = e.height / 2, s = t.height / 2; "start" === n ? (i = 0, s = t.height) : "end" === n && (i = e.height, s = 0), this.paddingTop = i + o, this.paddingBottom = s + o } } _handleMargins() { this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)) } afterFit() { d(this.options.afterFit, [this]) } isHorizontal() { const { axis: t, position: e } = this.options; return "top" === e || "bottom" === e || "x" === t } isFullSize() { return this.options.fullSize } _convertTicksToLabels(t) { let e, i; for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, i = t.length; e < i; e++)s(t[e].label) && (t.splice(e, 1), i--, e--); this.afterTickToLabelConversion() } _getLabelSizes() { let t = this._labelSizes; if (!t) { const e = this.options.ticks.sampleSize; let i = this.ticks; e < i.length && (i = Xs(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit) } return t } _computeLabelSizes(t, e, i) { const { ctx: o, _longestTextCache: a } = this, r = [], l = [], h = Math.floor(e / Us(e, i)); let c, d, f, g, p, m, x, b, _, y, v, M = 0, w = 0; for (c = 0; c < e; c += h) { if (g = t[c].label, p = this._resolveTickFontOptions(c), o.font = m = p.string, x = a[m] = a[m] || { data: {}, gc: [] }, b = p.lineHeight, _ = y = 0, s(g) || n(g)) { if (n(g)) for (d = 0, f = g.length; d < f; ++d)v = g[d], s(v) || n(v) || (_ = Ce(o, x.data, x.gc, _, v), y += b) } else _ = Ce(o, x.data, x.gc, _, g), y = b; r.push(_), l.push(y), M = Math.max(_, M), w = Math.max(y, w) } !function (t, e) { u(t, (t => { const i = t.gc, s = i.length / 2; let n; if (s > e) { for (n = 0; n < s; ++n)delete t.data[i[n]]; i.splice(0, s) } })) }(a, e); const k = r.indexOf(M), S = l.indexOf(w), P = t => ({ width: r[t] || 0, height: l[t] || 0 }); return { first: P(0), last: P(e - 1), widest: P(k), highest: P(S), widths: r, heights: l } } getLabelForValue(t) { return t } getPixelForValue(t, e) { return NaN } getValueForPixel(t) { } getPixelForTick(t) { const e = this.ticks; return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value) } getPixelForDecimal(t) { this._reversePixels && (t = 1 - t); const e = this._startPixel + t * this._length; return Q(this._alignToPixels ? Ae(this.chart, e, 0) : e) } getDecimalForPixel(t) { const e = (t - this._startPixel) / this._length; return this._reversePixels ? 1 - e : e } getBasePixel() { return this.getPixelForValue(this.getBaseValue()) } getBaseValue() { const { min: t, max: e } = this; return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0 } getContext(t) { const e = this.ticks || []; if (t >= 0 && t < e.length) { const i = e[t]; return i.$context || (i.$context = function (t, e, i) { return Ci(t, { tick: i, index: e, type: "tick" }) }(this.getContext(), t, i)) } return this.$context || (this.$context = Ci(this.chart.getContext(), { scale: this, type: "scale" })) } _tickSize() { const t = this.options.ticks, e = $(this.labelRotation), i = Math.abs(Math.cos(e)), s = Math.abs(Math.sin(e)), n = this._getLabelSizes(), o = t.autoSkipPadding || 0, a = n ? n.widest.width + o : 0, r = n ? n.highest.height + o : 0; return this.isHorizontal() ? r * i > a * s ? a / i : r / s : r * s < a * i ? r / i : a / s } _isVisible() { const t = this.options.display; return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0 } _computeGridLineItems(t) { const e = this.axis, i = this.chart, s = this.options, { grid: n, position: a, border: r } = s, h = n.offset, c = this.isHorizontal(), d = this.ticks.length + (h ? 1 : 0), u = Ks(n), f = [], g = r.setContext(this.getContext()), p = g.display ? g.width : 0, m = p / 2, x = function (t) { return Ae(i, t, p) }; let b, _, y, v, M, w, k, S, P, D, C, O; if ("top" === a) b = x(this.bottom), w = this.bottom - u, S = b - m, D = x(t.top) + m, O = t.bottom; else if ("bottom" === a) b = x(this.top), D = t.top, O = x(t.bottom) - m, w = b + m, S = this.top + u; else if ("left" === a) b = x(this.right), M = this.right - u, k = b - m, P = x(t.left) + m, C = t.right; else if ("right" === a) b = x(this.left), P = t.left, C = x(t.right) - m, M = b + m, k = this.left + u; else if ("x" === e) { if ("center" === a) b = x((t.top + t.bottom) / 2 + .5); else if (o(a)) { const t = Object.keys(a)[0], e = a[t]; b = x(this.chart.scales[t].getPixelForValue(e)) } D = t.top, O = t.bottom, w = b + m, S = w + u } else if ("y" === e) { if ("center" === a) b = x((t.left + t.right) / 2); else if (o(a)) { const t = Object.keys(a)[0], e = a[t]; b = x(this.chart.scales[t].getPixelForValue(e)) } M = b - m, k = M - u, P = t.left, C = t.right } const A = l(s.ticks.maxTicksLimit, d), T = Math.max(1, Math.ceil(d / A)); for (_ = 0; _ < d; _ += T) { const t = this.getContext(_), e = n.setContext(t), s = r.setContext(t), o = e.lineWidth, a = e.color, l = s.dash || [], d = s.dashOffset, u = e.tickWidth, g = e.tickColor, p = e.tickBorderDash || [], m = e.tickBorderDashOffset; y = qs(this, _, h), void 0 !== y && (v = Ae(i, y, o), c ? M = k = P = C = v : w = S = D = O = v, f.push({ tx1: M, ty1: w, tx2: k, ty2: S, x1: P, y1: D, x2: C, y2: O, width: o, color: a, borderDash: l, borderDashOffset: d, tickWidth: u, tickColor: g, tickBorderDash: p, tickBorderDashOffset: m })) } return this._ticksLength = d, this._borderValue = b, f } _computeLabelItems(t) { const e = this.axis, i = this.options, { position: s, ticks: a } = i, r = this.isHorizontal(), l = this.ticks, { align: h, crossAlign: c, padding: d, mirror: u } = a, f = Ks(i.grid), g = f + d, p = u ? -d : g, m = -$(this.labelRotation), x = []; let b, _, y, v, M, w, k, S, P, D, C, O, A = "middle"; if ("top" === s) w = this.bottom - p, k = this._getXAxisLabelAlignment(); else if ("bottom" === s) w = this.top + p, k = this._getXAxisLabelAlignment(); else if ("left" === s) { const t = this._getYAxisLabelAlignment(f); k = t.textAlign, M = t.x } else if ("right" === s) { const t = this._getYAxisLabelAlignment(f); k = t.textAlign, M = t.x } else if ("x" === e) { if ("center" === s) w = (t.top + t.bottom) / 2 + g; else if (o(s)) { const t = Object.keys(s)[0], e = s[t]; w = this.chart.scales[t].getPixelForValue(e) + g } k = this._getXAxisLabelAlignment() } else if ("y" === e) { if ("center" === s) M = (t.left + t.right) / 2 - g; else if (o(s)) { const t = Object.keys(s)[0], e = s[t]; M = this.chart.scales[t].getPixelForValue(e) } k = this._getYAxisLabelAlignment(f).textAlign } "y" === e && ("start" === h ? A = "top" : "end" === h && (A = "bottom")); const T = this._getLabelSizes(); for (b = 0, _ = l.length; b < _; ++b) { y = l[b], v = y.label; const t = a.setContext(this.getContext(b)); S = this.getPixelForTick(b) + a.labelOffset, P = this._resolveTickFontOptions(b), D = P.lineHeight, C = n(v) ? v.length : 1; const e = C / 2, i = t.color, o = t.textStrokeColor, h = t.textStrokeWidth; let d, f = k; if (r ? (M = S, "inner" === k && (f = b === _ - 1 ? this.options.reverse ? "left" : "right" : 0 === b ? this.options.reverse ? "right" : "left" : "center"), O = "top" === s ? "near" === c || 0 !== m ? -C * D + D / 2 : "center" === c ? -T.highest.height / 2 - e * D + D : -T.highest.height + D / 2 : "near" === c || 0 !== m ? D / 2 : "center" === c ? T.highest.height / 2 - e * D : T.highest.height - C * D, u && (O *= -1), 0 === m || t.showLabelBackdrop || (M += D / 2 * Math.sin(m))) : (w = S, O = (1 - C) * D / 2), t.showLabelBackdrop) { const e = ki(t.backdropPadding), i = T.heights[b], s = T.widths[b]; let n = O - e.top, o = 0 - e.left; switch (A) { case "middle": n -= i / 2; break; case "bottom": n -= i }switch (k) { case "center": o -= s / 2; break; case "right": o -= s; break; case "inner": b === _ - 1 ? o -= s : b > 0 && (o -= s / 2) }d = { left: o, top: n, width: s + e.width, height: i + e.height, color: t.backdropColor } } x.push({ label: v, font: P, textOffset: O, options: { rotation: m, color: i, strokeColor: o, strokeWidth: h, textAlign: f, textBaseline: A, translation: [M, w], backdrop: d } }) } return x } _getXAxisLabelAlignment() { const { position: t, ticks: e } = this.options; if (-$(this.labelRotation)) return "top" === t ? "left" : "right"; let i = "center"; return "start" === e.align ? i = "left" : "end" === e.align ? i = "right" : "inner" === e.align && (i = "inner"), i } _getYAxisLabelAlignment(t) { const { position: e, ticks: { crossAlign: i, mirror: s, padding: n } } = this.options, o = t + n, a = this._getLabelSizes().widest.width; let r, l; return "left" === e ? s ? (l = this.right + n, "near" === i ? r = "left" : "center" === i ? (r = "center", l += a / 2) : (r = "right", l += a)) : (l = this.right - o, "near" === i ? r = "right" : "center" === i ? (r = "center", l -= a / 2) : (r = "left", l = this.left)) : "right" === e ? s ? (l = this.left + n, "near" === i ? r = "right" : "center" === i ? (r = "center", l -= a / 2) : (r = "left", l -= a)) : (l = this.left + o, "near" === i ? r = "left" : "center" === i ? (r = "center", l += a / 2) : (r = "right", l = this.right)) : r = "right", { textAlign: r, x: l } } _computeLabelArea() { if (this.options.ticks.mirror) return; const t = this.chart, e = this.options.position; return "left" === e || "right" === e ? { top: 0, left: this.left, bottom: t.height, right: this.right } : "top" === e || "bottom" === e ? { top: this.top, left: 0, bottom: this.bottom, right: t.width } : void 0 } drawBackground() { const { ctx: t, options: { backgroundColor: e }, left: i, top: s, width: n, height: o } = this; e && (t.save(), t.fillStyle = e, t.fillRect(i, s, n, o), t.restore()) } getLineWidthForValue(t) { const e = this.options.grid; if (!this._isVisible() || !e.display) return 0; const i = this.ticks.findIndex((e => e.value === t)); if (i >= 0) { return e.setContext(this.getContext(i)).lineWidth } return 0 } drawGrid(t) { const e = this.options.grid, i = this.ctx, s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t)); let n, o; const a = (t, e, s) => { s.width && s.color && (i.save(), i.lineWidth = s.width, i.strokeStyle = s.color, i.setLineDash(s.borderDash || []), i.lineDashOffset = s.borderDashOffset, i.beginPath(), i.moveTo(t.x, t.y), i.lineTo(e.x, e.y), i.stroke(), i.restore()) }; if (e.display) for (n = 0, o = s.length; n < o; ++n) { const t = s[n]; e.drawOnChartArea && a({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t), e.drawTicks && a({ x: t.tx1, y: t.ty1 }, { x: t.tx2, y: t.ty2 }, { color: t.tickColor, width: t.tickWidth, borderDash: t.tickBorderDash, borderDashOffset: t.tickBorderDashOffset }) } } drawBorder() { const { chart: t, ctx: e, options: { border: i, grid: s } } = this, n = i.setContext(this.getContext()), o = i.display ? n.width : 0; if (!o) return; const a = s.setContext(this.getContext(0)).lineWidth, r = this._borderValue; let l, h, c, d; this.isHorizontal() ? (l = Ae(t, this.left, o) - o / 2, h = Ae(t, this.right, a) + a / 2, c = d = r) : (c = Ae(t, this.top, o) - o / 2, d = Ae(t, this.bottom, a) + a / 2, l = h = r), e.save(), e.lineWidth = n.width, e.strokeStyle = n.color, e.beginPath(), e.moveTo(l, c), e.lineTo(h, d), e.stroke(), e.restore() } drawLabels(t) { if (!this.options.ticks.display) return; const e = this.ctx, i = this._computeLabelArea(); i && Ie(e, i); const s = this.getLabelItems(t); for (const t of s) { const i = t.options, s = t.font; Ne(e, t.label, 0, t.textOffset, s, i) } i && ze(e) } drawTitle() { const { ctx: t, options: { position: e, title: i, reverse: s } } = this; if (!i.display) return; const a = Si(i.font), r = ki(i.padding), l = i.align; let h = a.lineHeight / 2; "bottom" === e || "center" === e || o(e) ? (h += r.bottom, n(i.text) && (h += a.lineHeight * (i.text.length - 1))) : h += r.top; const { titleX: c, titleY: d, maxWidth: u, rotation: f } = function (t, e, i, s) { const { top: n, left: a, bottom: r, right: l, chart: h } = t, { chartArea: c, scales: d } = h; let u, f, g, p = 0; const m = r - n, x = l - a; if (t.isHorizontal()) { if (f = ft(s, a, l), o(i)) { const t = Object.keys(i)[0], s = i[t]; g = d[t].getPixelForValue(s) + m - e } else g = "center" === i ? (c.bottom + c.top) / 2 + m - e : Ys(t, i, e); u = l - a } else { if (o(i)) { const t = Object.keys(i)[0], s = i[t]; f = d[t].getPixelForValue(s) - x + e } else f = "center" === i ? (c.left + c.right) / 2 - x + e : Ys(t, i, e); g = ft(s, r, n), p = "left" === i ? -E : E } return { titleX: f, titleY: g, maxWidth: u, rotation: p } }(this, h, e, l); Ne(t, i.text, 0, 0, a, { color: i.color, maxWidth: u, rotation: f, textAlign: Zs(l, e, s), textBaseline: "middle", translation: [c, d] }) } draw(t) { this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t)) } _layers() { const t = this.options, e = t.ticks && t.ticks.z || 0, i = l(t.grid && t.grid.z, -1), s = l(t.border && t.border.z, 0); return this._isVisible() && this.draw === Js.prototype.draw ? [{ z: i, draw: t => { this.drawBackground(), this.drawGrid(t), this.drawTitle() } }, { z: s, draw: () => { this.drawBorder() } }, { z: e, draw: t => { this.drawLabels(t) } }] : [{ z: e, draw: t => { this.draw(t) } }] } getMatchingVisibleMetas(t) { const e = this.chart.getSortedVisibleDatasetMetas(), i = this.axis + "AxisID", s = []; let n, o; for (n = 0, o = e.length; n < o; ++n) { const o = e[n]; o[i] !== this.id || t && o.type !== t || s.push(o) } return s } _resolveTickFontOptions(t) { return Si(this.options.ticks.setContext(this.getContext(t)).font) } _maxDigits() { const t = this._resolveTickFontOptions(0).lineHeight; return (this.isHorizontal() ? this.width : this.height) / t } } class Qs { constructor(t, e, i) { this.type = t, this.scope = e, this.override = i, this.items = Object.create(null) } isForType(t) { return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype) } register(t) { const e = Object.getPrototypeOf(t); let i; (function (t) { return "id" in t && "defaults" in t })(e) && (i = this.register(e)); const s = this.items, n = t.id, o = this.scope + "." + n; if (!n) throw new Error("class does not have id: " + t); return n in s || (s[n] = t, function (t, e, i) { const s = x(Object.create(null), [i ? ue.get(i) : {}, ue.get(e), t.defaults]); ue.set(e, s), t.defaultRoutes && function (t, e) { Object.keys(e).forEach((i => { const s = i.split("."), n = s.pop(), o = [t].concat(s).join("."), a = e[i].split("."), r = a.pop(), l = a.join("."); ue.route(o, n, l, r) })) }(e, t.defaultRoutes); t.descriptors && ue.describe(e, t.descriptors) }(t, o, i), this.override && ue.override(t.id, t.overrides)), o } get(t) { return this.items[t] } unregister(t) { const e = this.items, i = t.id, s = this.scope; i in e && delete e[i], s && i in ue[s] && (delete ue[s][i], this.override && delete re[i]) } } class tn { constructor() { this.controllers = new Qs(Ns, "datasets", !0), this.elements = new Qs(Hs, "elements"), this.plugins = new Qs(Object, "plugins"), this.scales = new Qs(Js, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements] } add(...t) { this._each("register", t) } remove(...t) { this._each("unregister", t) } addControllers(...t) { this._each("register", t, this.controllers) } addElements(...t) { this._each("register", t, this.elements) } addPlugins(...t) { this._each("register", t, this.plugins) } addScales(...t) { this._each("register", t, this.scales) } getController(t) { return this._get(t, this.controllers, "controller") } getElement(t) { return this._get(t, this.elements, "element") } getPlugin(t) { return this._get(t, this.plugins, "plugin") } getScale(t) { return this._get(t, this.scales, "scale") } removeControllers(...t) { this._each("unregister", t, this.controllers) } removeElements(...t) { this._each("unregister", t, this.elements) } removePlugins(...t) { this._each("unregister", t, this.plugins) } removeScales(...t) { this._each("unregister", t, this.scales) } _each(t, e, i) { [...e].forEach((e => { const s = i || this._getRegistryForType(e); i || s.isForType(e) || s === this.plugins && e.id ? this._exec(t, s, e) : u(e, (e => { const s = i || this._getRegistryForType(e); this._exec(t, s, e) })) })) } _exec(t, e, i) { const s = w(t); d(i["before" + s], [], i), e[t](i), d(i["after" + s], [], i) } _getRegistryForType(t) { for (let e = 0; e < this._typedRegistries.length; e++) { const i = this._typedRegistries[e]; if (i.isForType(t)) return i } return this.plugins } _get(t, e, i) { const s = e.get(t); if (void 0 === s) throw new Error('"' + t + '" is not a registered ' + i + "."); return s } } var en = new tn; class sn { constructor() { this._init = [] } notify(t, e, i, s) { "beforeInit" === e && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install")); const n = s ? this._descriptors(t).filter(s) : this._descriptors(t), o = this._notify(n, t, e, i); return "afterDestroy" === e && (this._notify(n, t, "stop"), this._notify(this._init, t, "uninstall")), o } _notify(t, e, i, s) { s = s || {}; for (const n of t) { const t = n.plugin; if (!1 === d(t[i], [e, s, n.options], t) && s.cancelable) return !1 } return !0 } invalidate() { s(this._cache) || (this._oldCache = this._cache, this._cache = void 0) } _descriptors(t) { if (this._cache) return this._cache; const e = this._cache = this._createDescriptors(t); return this._notifyStateChanges(t), e } _createDescriptors(t, e) { const i = t && t.config, s = l(i.options && i.options.plugins, {}), n = function (t) { const e = {}, i = [], s = Object.keys(en.plugins.items); for (let t = 0; t < s.length; t++)i.push(en.getPlugin(s[t])); const n = t.plugins || []; for (let t = 0; t < n.length; t++) { const s = n[t]; -1 === i.indexOf(s) && (i.push(s), e[s.id] = !0) } return { plugins: i, localIds: e } }(i); return !1 !== s || e ? function (t, { plugins: e, localIds: i }, s, n) { const o = [], a = t.getContext(); for (const r of e) { const e = r.id, l = nn(s[e], n); null !== l && o.push({ plugin: r, options: on(t.config, { plugin: r, local: i[e] }, l, a) }) } return o }(t, n, s, e) : [] } _notifyStateChanges(t) { const e = this._oldCache || [], i = this._cache, s = (t, e) => t.filter((t => !e.some((e => t.plugin.id === e.plugin.id)))); this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start") } } function nn(t, e) { return e || !1 !== t ? !0 === t ? {} : t : null } function on(t, { plugin: e, local: i }, s, n) { const o = t.pluginScopeKeys(e), a = t.getOptionScopes(s, o); return i && e.defaults && a.push(e.defaults), t.createResolver(a, n, [""], { scriptable: !1, indexable: !1, allKeys: !0 }) } function an(t, e) { const i = ue.datasets[t] || {}; return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x" } function rn(t) { if ("x" === t || "y" === t || "r" === t) return t } function ln(t, ...e) { if (rn(t)) return t; for (const s of e) { const e = s.axis || ("top" === (i = s.position) || "bottom" === i ? "x" : "left" === i || "right" === i ? "y" : void 0) || t.length > 1 && rn(t[0].toLowerCase()); if (e) return e } var i; throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`) } function hn(t, e, i) { if (i[e + "AxisID"] === t) return { axis: e } } function cn(t, e) { const i = re[t.type] || { scales: {} }, s = e.scales || {}, n = an(t.type, e), a = Object.create(null); return Object.keys(s).forEach((e => { const r = s[e]; if (!o(r)) return console.error(`Invalid scale configuration for scale: ${e}`); if (r._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${e}`); const l = ln(e, r, function (t, e) { if (e.data && e.data.datasets) { const i = e.data.datasets.filter((e => e.xAxisID === t || e.yAxisID === t)); if (i.length) return hn(t, "x", i[0]) || hn(t, "y", i[0]) } return {} }(e, t), ue.scales[r.type]), h = function (t, e) { return t === e ? "_index_" : "_value_" }(l, n), c = i.scales || {}; a[e] = b(Object.create(null), [{ axis: l }, r, c[l], c[h]]) })), t.data.datasets.forEach((i => { const n = i.type || t.type, o = i.indexAxis || an(n, e), r = (re[n] || {}).scales || {}; Object.keys(r).forEach((t => { const e = function (t, e) { let i = t; return "_index_" === t ? i = e : "_value_" === t && (i = "x" === e ? "y" : "x"), i }(t, o), n = i[e + "AxisID"] || e; a[n] = a[n] || Object.create(null), b(a[n], [{ axis: e }, s[n], r[t]]) })) })), Object.keys(a).forEach((t => { const e = a[t]; b(e, [ue.scales[e.type], ue.scale]) })), a } function dn(t) { const e = t.options || (t.options = {}); e.plugins = l(e.plugins, {}), e.scales = cn(t, e) } function un(t) { return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t } const fn = new Map, gn = new Set; function pn(t, e) { let i = fn.get(t); return i || (i = e(), fn.set(t, i), gn.add(i)), i } const mn = (t, e, i) => { const s = M(e, i); void 0 !== s && t.add(s) }; class xn { constructor(t) { this._config = function (t) { return (t = t || {}).data = un(t.data), dn(t), t }(t), this._scopeCache = new Map, this._resolverCache = new Map } get platform() { return this._config.platform } get type() { return this._config.type } set type(t) { this._config.type = t } get data() { return this._config.data } set data(t) { this._config.data = un(t) } get options() { return this._config.options } set options(t) { this._config.options = t } get plugins() { return this._config.plugins } update() { const t = this._config; this.clearCache(), dn(t) } clearCache() { this._scopeCache.clear(), this._resolverCache.clear() } datasetScopeKeys(t) { return pn(t, (() => [[`datasets.${t}`, ""]])) } datasetAnimationScopeKeys(t, e) { return pn(`${t}.transition.${e}`, (() => [[`datasets.${t}.transitions.${e}`, `transitions.${e}`], [`datasets.${t}`, ""]])) } datasetElementScopeKeys(t, e) { return pn(`${t}-${e}`, (() => [[`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]])) } pluginScopeKeys(t) { const e = t.id; return pn(`${this.type}-plugin-${e}`, (() => [[`plugins.${e}`, ...t.additionalOptionScopes || []]])) } _cachedScopes(t, e) { const i = this._scopeCache; let s = i.get(t); return s && !e || (s = new Map, i.set(t, s)), s } getOptionScopes(t, e, i) { const { options: s, type: n } = this, o = this._cachedScopes(t, i), a = o.get(e); if (a) return a; const r = new Set; e.forEach((e => { t && (r.add(t), e.forEach((e => mn(r, t, e)))), e.forEach((t => mn(r, s, t))), e.forEach((t => mn(r, re[n] || {}, t))), e.forEach((t => mn(r, ue, t))), e.forEach((t => mn(r, le, t))) })); const l = Array.from(r); return 0 === l.length && l.push(Object.create(null)), gn.has(e) && o.set(e, l), l } chartOptionScopes() { const { options: t, type: e } = this; return [t, re[e] || {}, ue.datasets[e] || {}, { type: e }, ue, le] } resolveNamedOptions(t, e, i, s = [""]) { const o = { $shared: !0 }, { resolver: a, subPrefixes: r } = bn(this._resolverCache, t, s); let l = a; if (function (t, e) { const { isScriptable: i, isIndexable: s } = Ye(t); for (const o of e) { const e = i(o), a = s(o), r = (a || e) && t[o]; if (e && (S(r) || _n(r)) || a && n(r)) return !0 } return !1 }(a, e)) { o.$shared = !1; l = $e(a, i = S(i) ? i() : i, this.createResolver(t, i, r)) } for (const t of e) o[t] = l[t]; return o } createResolver(t, e, i = [""], s) { const { resolver: n } = bn(this._resolverCache, t, i); return o(e) ? $e(n, e, void 0, s) : n } } function bn(t, e, i) { let s = t.get(e); s || (s = new Map, t.set(e, s)); const n = i.join(); let o = s.get(n); if (!o) { o = { resolver: je(e, i), subPrefixes: i.filter((t => !t.toLowerCase().includes("hover"))) }, s.set(n, o) } return o } const _n = t => o(t) && Object.getOwnPropertyNames(t).some((e => S(t[e]))); const yn = ["top", "bottom", "left", "right", "chartArea"]; function vn(t, e) { return "top" === t || "bottom" === t || -1 === yn.indexOf(t) && "x" === e } function Mn(t, e) { return function (i, s) { return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t] } } function wn(t) { const e = t.chart, i = e.options.animation; e.notifyPlugins("afterRender"), d(i && i.onComplete, [t], e) } function kn(t) { const e = t.chart, i = e.options.animation; d(i && i.onProgress, [t], e) } function Sn(t) { return fe() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t } const Pn = {}, Dn = t => { const e = Sn(t); return Object.values(Pn).filter((t => t.canvas === e)).pop() }; function Cn(t, e, i) { const s = Object.keys(t); for (const n of s) { const s = +n; if (s >= e) { const o = t[n]; delete t[n], (i > 0 || s > e) && (t[s + i] = o) } } } function On(t, e, i) { return t.options.clip ? t[i] : e[i] } class An { static defaults = ue; static instances = Pn; static overrides = re; static registry = en; static version = "4.4.3"; static getChart = Dn; static register(...t) { en.add(...t), Tn() } static unregister(...t) { en.remove(...t), Tn() } constructor(t, e) { const s = this.config = new xn(e), n = Sn(t), o = Dn(n); if (o) throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused."); const a = s.createResolver(s.chartOptionScopes(), this.getContext()); this.platform = new (s.platform || ks(n)), this.platform.updateConfig(s); const r = this.platform.acquireContext(n, a.aspectRatio), l = r && r.canvas, h = l && l.height, c = l && l.width; this.id = i(), this.ctx = r, this.canvas = l, this.width = c, this.height = h, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new sn, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = dt((t => this.update(t)), a.resizeDelay || 0), this._dataChanges = [], Pn[this.id] = this, r && l ? (bt.listen(this, "complete", wn), bt.listen(this, "progress", kn), this._initialize(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item") } get aspectRatio() { const { options: { aspectRatio: t, maintainAspectRatio: e }, width: i, height: n, _aspectRatio: o } = this; return s(t) ? e && o ? o : n ? i / n : null : t } get data() { return this.config.data } set data(t) { this.config.data = t } get options() { return this._options } set options(t) { this.config.options = t } get registry() { return en } _initialize() { return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : ke(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this } clear() { return Te(this.canvas, this.ctx), this } stop() { return bt.stop(this), this } resize(t, e) { bt.running(this) ? this._resizeBeforeDraw = { width: t, height: e } : this._resize(t, e) } _resize(t, e) { const i = this.options, s = this.canvas, n = i.maintainAspectRatio && this.aspectRatio, o = this.platform.getMaximumSize(s, t, e, n), a = i.devicePixelRatio || this.platform.getDevicePixelRatio(), r = this.width ? "resize" : "attach"; this.width = o.width, this.height = o.height, this._aspectRatio = this.aspectRatio, ke(this, a, !0) && (this.notifyPlugins("resize", { size: o }), d(i.onResize, [this, o], this), this.attached && this._doResize(r) && this.render()) } ensureScalesHaveIDs() { u(this.options.scales || {}, ((t, e) => { t.id = e })) } buildOrUpdateScales() { const t = this.options, e = t.scales, i = this.scales, s = Object.keys(i).reduce(((t, e) => (t[e] = !1, t)), {}); let n = []; e && (n = n.concat(Object.keys(e).map((t => { const i = e[t], s = ln(t, i), n = "r" === s, o = "x" === s; return { options: i, dposition: n ? "chartArea" : o ? "bottom" : "left", dtype: n ? "radialLinear" : o ? "category" : "linear" } })))), u(n, (e => { const n = e.options, o = n.id, a = ln(o, n), r = l(n.type, e.dtype); void 0 !== n.position && vn(n.position, a) === vn(e.dposition) || (n.position = e.dposition), s[o] = !0; let h = null; if (o in i && i[o].type === r) h = i[o]; else { h = new (en.getScale(r))({ id: o, type: r, ctx: this.ctx, chart: this }), i[h.id] = h } h.init(n, t) })), u(s, ((t, e) => { t || delete i[e] })), u(i, (t => { as.configure(this, t, t.options), as.addBox(this, t) })) } _updateMetasets() { const t = this._metasets, e = this.data.datasets.length, i = t.length; if (t.sort(((t, e) => t.index - e.index)), i > e) { for (let t = e; t < i; ++t)this._destroyDatasetMeta(t); t.splice(e, i - e) } this._sortedMetasets = t.slice(0).sort(Mn("order", "index")) } _removeUnreferencedMetasets() { const { _metasets: t, data: { datasets: e } } = this; t.length > e.length && delete this._stacks, t.forEach(((t, i) => { 0 === e.filter((e => e === t._dataset)).length && this._destroyDatasetMeta(i) })) } buildOrUpdateControllers() { const t = [], e = this.data.datasets; let i, s; for (this._removeUnreferencedMetasets(), i = 0, s = e.length; i < s; i++) { const s = e[i]; let n = this.getDatasetMeta(i); const o = s.type || this.config.type; if (n.type && n.type !== o && (this._destroyDatasetMeta(i), n = this.getDatasetMeta(i)), n.type = o, n.indexAxis = s.indexAxis || an(o, this.options), n.order = s.order || 0, n.index = i, n.label = "" + s.label, n.visible = this.isDatasetVisible(i), n.controller) n.controller.updateIndex(i), n.controller.linkScales(); else { const e = en.getController(o), { datasetElementType: s, dataElementType: a } = ue.datasets[o]; Object.assign(e, { dataElementType: en.getElement(a), datasetElementType: s && en.getElement(s) }), n.controller = new e(this, i), t.push(n.controller) } } return this._updateMetasets(), t } _resetElements() { u(this.data.datasets, ((t, e) => { this.getDatasetMeta(e).controller.reset() }), this) } reset() { this._resetElements(), this.notifyPlugins("reset") } update(t) { const e = this.config; e.update(); const i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), s = this._animationsDisabled = !i.animation; if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 === this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 })) return; const n = this.buildOrUpdateControllers(); this.notifyPlugins("beforeElementsUpdate"); let o = 0; for (let t = 0, e = this.data.datasets.length; t < e; t++) { const { controller: e } = this.getDatasetMeta(t), i = !s && -1 === n.indexOf(e); e.buildOrUpdateElements(i), o = Math.max(+e.getMaxOverflow(), o) } o = this._minPadding = i.layout.autoPadding ? o : 0, this._updateLayout(o), s || u(n, (t => { t.reset() })), this._updateDatasets(t), this.notifyPlugins("afterUpdate", { mode: t }), this._layers.sort(Mn("z", "_idx")); const { _active: a, _lastEvent: r } = this; r ? this._eventHandler(r, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render() } _updateScales() { u(this.scales, (t => { as.removeBox(this, t) })), this.ensureScalesHaveIDs(), this.buildOrUpdateScales() } _checkEventBindings() { const t = this.options, e = new Set(Object.keys(this._listeners)), i = new Set(t.events); P(e, i) && !!this._responsiveListeners === t.responsive || (this.unbindEvents(), this.bindEvents()) } _updateHiddenIndices() { const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || []; for (const { method: i, start: s, count: n } of e) { Cn(t, s, "_removeElements" === i ? -n : n) } } _getUniformDataChanges() { const t = this._dataChanges; if (!t || !t.length) return; this._dataChanges = []; const e = this.data.datasets.length, i = e => new Set(t.filter((t => t[0] === e)).map(((t, e) => e + "," + t.splice(1).join(",")))), s = i(0); for (let t = 1; t < e; t++)if (!P(s, i(t))) return; return Array.from(s).map((t => t.split(","))).map((t => ({ method: t[1], start: +t[2], count: +t[3] }))) } _updateLayout(t) { if (!1 === this.notifyPlugins("beforeLayout", { cancelable: !0 })) return; as.update(this, this.width, this.height, t); const e = this.chartArea, i = e.width <= 0 || e.height <= 0; this._layers = [], u(this.boxes, (t => { i && "chartArea" === t.position || (t.configure && t.configure(), this._layers.push(...t._layers())) }), this), this._layers.forEach(((t, e) => { t._idx = e })), this.notifyPlugins("afterLayout") } _updateDatasets(t) { if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", { mode: t, cancelable: !0 })) { for (let t = 0, e = this.data.datasets.length; t < e; ++t)this.getDatasetMeta(t).controller.configure(); for (let e = 0, i = this.data.datasets.length; e < i; ++e)this._updateDataset(e, S(t) ? t({ datasetIndex: e }) : t); this.notifyPlugins("afterDatasetsUpdate", { mode: t }) } } _updateDataset(t, e) { const i = this.getDatasetMeta(t), s = { meta: i, index: t, mode: e, cancelable: !0 }; !1 !== this.notifyPlugins("beforeDatasetUpdate", s) && (i.controller._update(e), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s)) } render() { !1 !== this.notifyPlugins("beforeRender", { cancelable: !0 }) && (bt.has(this) ? this.attached && !bt.running(this) && bt.start(this) : (this.draw(), wn({ chart: this }))) } draw() { let t; if (this._resizeBeforeDraw) { const { width: t, height: e } = this._resizeBeforeDraw; this._resize(t, e), this._resizeBeforeDraw = null } if (this.clear(), this.width <= 0 || this.height <= 0) return; if (!1 === this.notifyPlugins("beforeDraw", { cancelable: !0 })) return; const e = this._layers; for (t = 0; t < e.length && e[t].z <= 0; ++t)e[t].draw(this.chartArea); for (this._drawDatasets(); t < e.length; ++t)e[t].draw(this.chartArea); this.notifyPlugins("afterDraw") } _getSortedDatasetMetas(t) { const e = this._sortedMetasets, i = []; let s, n; for (s = 0, n = e.length; s < n; ++s) { const n = e[s]; t && !n.visible || i.push(n) } return i } getSortedVisibleDatasetMetas() { return this._getSortedDatasetMetas(!0) } _drawDatasets() { if (!1 === this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 })) return; const t = this.getSortedVisibleDatasetMetas(); for (let e = t.length - 1; e >= 0; --e)this._drawDataset(t[e]); this.notifyPlugins("afterDatasetsDraw") } _drawDataset(t) { const e = this.ctx, i = t._clip, s = !i.disabled, n = function (t, e) { const { xScale: i, yScale: s } = t; return i && s ? { left: On(i, e, "left"), right: On(i, e, "right"), top: On(s, e, "top"), bottom: On(s, e, "bottom") } : e }(t, this.chartArea), o = { meta: t, index: t.index, cancelable: !0 }; !1 !== this.notifyPlugins("beforeDatasetDraw", o) && (s && Ie(e, { left: !1 === i.left ? 0 : n.left - i.left, right: !1 === i.right ? this.width : n.right + i.right, top: !1 === i.top ? 0 : n.top - i.top, bottom: !1 === i.bottom ? this.height : n.bottom + i.bottom }), t.controller.draw(), s && ze(e), o.cancelable = !1, this.notifyPlugins("afterDatasetDraw", o)) } isPointInArea(t) { return Re(t, this.chartArea, this._minPadding) } getElementsAtEventForMode(t, e, i, s) { const n = Xi.modes[e]; return "function" == typeof n ? n(this, t, i, s) : [] } getDatasetMeta(t) { const e = this.data.datasets[t], i = this._metasets; let s = i.filter((t => t && t._dataset === e)).pop(); return s || (s = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null, order: e && e.order || 0, index: t, _dataset: e, _parsed: [], _sorted: !1 }, i.push(s)), s } getContext() { return this.$context || (this.$context = Ci(null, { chart: this, type: "chart" })) } getVisibleDatasetCount() { return this.getSortedVisibleDatasetMetas().length } isDatasetVisible(t) { const e = this.data.datasets[t]; if (!e) return !1; const i = this.getDatasetMeta(t); return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden } setDatasetVisibility(t, e) { this.getDatasetMeta(t).hidden = !e } toggleDataVisibility(t) { this._hiddenIndices[t] = !this._hiddenIndices[t] } getDataVisibility(t) { return !this._hiddenIndices[t] } _updateVisibility(t, e, i) { const s = i ? "show" : "hide", n = this.getDatasetMeta(t), o = n.controller._resolveAnimations(void 0, s); k(e) ? (n.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), o.update(n, { visible: i }), this.update((e => e.datasetIndex === t ? s : void 0))) } hide(t, e) { this._updateVisibility(t, e, !1) } show(t, e) { this._updateVisibility(t, e, !0) } _destroyDatasetMeta(t) { const e = this._metasets[t]; e && e.controller && e.controller._destroy(), delete this._metasets[t] } _stop() { let t, e; for (this.stop(), bt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)this._destroyDatasetMeta(t) } destroy() { this.notifyPlugins("beforeDestroy"); const { canvas: t, ctx: e } = this; this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Te(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Pn[this.id], this.notifyPlugins("afterDestroy") } toBase64Image(...t) { return this.canvas.toDataURL(...t) } bindEvents() { this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0 } bindUserEvents() { const t = this._listeners, e = this.platform, i = (i, s) => { e.addEventListener(this, i, s), t[i] = s }, s = (t, e, i) => { t.offsetX = e, t.offsetY = i, this._eventHandler(t) }; u(this.options.events, (t => i(t, s))) } bindResponsiveEvents() { this._responsiveListeners || (this._responsiveListeners = {}); const t = this._responsiveListeners, e = this.platform, i = (i, s) => { e.addEventListener(this, i, s), t[i] = s }, s = (i, s) => { t[i] && (e.removeEventListener(this, i, s), delete t[i]) }, n = (t, e) => { this.canvas && this.resize(t, e) }; let o; const a = () => { s("attach", a), this.attached = !0, this.resize(), i("resize", n), i("detach", o) }; o = () => { this.attached = !1, s("resize", n), this._stop(), this._resize(0, 0), i("attach", a) }, e.isAttached(this.canvas) ? a() : o() } unbindEvents() { u(this._listeners, ((t, e) => { this.platform.removeEventListener(this, e, t) })), this._listeners = {}, u(this._responsiveListeners, ((t, e) => { this.platform.removeEventListener(this, e, t) })), this._responsiveListeners = void 0 } updateHoverStyle(t, e, i) { const s = i ? "set" : "remove"; let n, o, a, r; for ("dataset" === e && (n = this.getDatasetMeta(t[0].datasetIndex), n.controller["_" + s + "DatasetHoverStyle"]()), a = 0, r = t.length; a < r; ++a) { o = t[a]; const e = o && this.getDatasetMeta(o.datasetIndex).controller; e && e[s + "HoverStyle"](o.element, o.datasetIndex, o.index) } } getActiveElements() { return this._active || [] } setActiveElements(t) { const e = this._active || [], i = t.map((({ datasetIndex: t, index: e }) => { const i = this.getDatasetMeta(t); if (!i) throw new Error("No dataset found at index " + t); return { datasetIndex: t, element: i.data[e], index: e } })); !f(i, e) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, e)) } notifyPlugins(t, e, i) { return this._plugins.notify(this, t, e, i) } isPluginEnabled(t) { return 1 === this._plugins._cache.filter((e => e.plugin.id === t)).length } _updateHoverStyles(t, e, i) { const s = this.options.hover, n = (t, e) => t.filter((t => !e.some((e => t.datasetIndex === e.datasetIndex && t.index === e.index)))), o = n(e, t), a = i ? t : n(t, e); o.length && this.updateHoverStyle(o, s.mode, !1), a.length && s.mode && this.updateHoverStyle(a, s.mode, !0) } _eventHandler(t, e) { const i = { event: t, replay: e, cancelable: !0, inChartArea: this.isPointInArea(t) }, s = e => (e.options.events || this.options.events).includes(t.native.type); if (!1 === this.notifyPlugins("beforeEvent", i, s)) return; const n = this._handleEvent(t, e, i.inChartArea); return i.cancelable = !1, this.notifyPlugins("afterEvent", i, s), (n || i.changed) && this.render(), this } _handleEvent(t, e, i) { const { _active: s = [], options: n } = this, o = e, a = this._getActiveElements(t, s, i, o), r = D(t), l = function (t, e, i, s) { return i && "mouseout" !== t.type ? s ? e : t : null }(t, this._lastEvent, i, r); i && (this._lastEvent = null, d(n.onHover, [t, a, this], this), r && d(n.onClick, [t, a, this], this)); const h = !f(a, s); return (h || e) && (this._active = a, this._updateHoverStyles(a, s, e)), this._lastEvent = l, h } _getActiveElements(t, e, i, s) { if ("mouseout" === t.type) return []; if (!i) return e; const n = this.options.hover; return this.getElementsAtEventForMode(t, n.mode, n, s) } } function Tn() { return u(An.instances, (t => t._plugins.invalidate())) } function Ln() { throw new Error("This method is not implemented: Check that a complete date adapter is provided.") } class En { static override(t) { Object.assign(En.prototype, t) } options; constructor(t) { this.options = t || {} } init() { } formats() { return Ln() } parse() { return Ln() } format() { return Ln() } add() { return Ln() } diff() { return Ln() } startOf() { return Ln() } endOf() { return Ln() } } var Rn = { _date: En }; function In(t) { const e = t.iScale, i = function (t, e) { if (!t._cache.$bar) { const i = t.getMatchingVisibleMetas(e); let s = []; for (let e = 0, n = i.length; e < n; e++)s = s.concat(i[e].controller.getAllParsedValues(t)); t._cache.$bar = lt(s.sort(((t, e) => t - e))) } return t._cache.$bar }(e, t.type); let s, n, o, a, r = e._length; const l = () => { 32767 !== o && -32768 !== o && (k(a) && (r = Math.min(r, Math.abs(o - a) || r)), a = o) }; for (s = 0, n = i.length; s < n; ++s)o = e.getPixelForValue(i[s]), l(); for (a = void 0, s = 0, n = e.ticks.length; s < n; ++s)o = e.getPixelForTick(s), l(); return r } function zn(t, e, i, s) { return n(t) ? function (t, e, i, s) { const n = i.parse(t[0], s), o = i.parse(t[1], s), a = Math.min(n, o), r = Math.max(n, o); let l = a, h = r; Math.abs(a) > Math.abs(r) && (l = r, h = a), e[i.axis] = h, e._custom = { barStart: l, barEnd: h, start: n, end: o, min: a, max: r } }(t, e, i, s) : e[i.axis] = i.parse(t, s), e } function Fn(t, e, i, s) { const n = t.iScale, o = t.vScale, a = n.getLabels(), r = n === o, l = []; let h, c, d, u; for (h = i, c = i + s; h < c; ++h)u = e[h], d = {}, d[n.axis] = r || n.parse(a[h], h), l.push(zn(u, d, o, h)); return l } function Vn(t) { return t && void 0 !== t.barStart && void 0 !== t.barEnd } function Bn(t, e, i, s) { let n = e.borderSkipped; const o = {}; if (!n) return void (t.borderSkipped = o); if (!0 === n) return void (t.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 }); const { start: a, end: r, reverse: l, top: h, bottom: c } = function (t) { let e, i, s, n, o; return t.horizontal ? (e = t.base > t.x, i = "left", s = "right") : (e = t.base < t.y, i = "bottom", s = "top"), e ? (n = "end", o = "start") : (n = "start", o = "end"), { start: i, end: s, reverse: e, top: n, bottom: o } }(t); "middle" === n && i && (t.enableBorderRadius = !0, (i._top || 0) === s ? n = h : (i._bottom || 0) === s ? n = c : (o[Wn(c, a, r, l)] = !0, n = h)), o[Wn(n, a, r, l)] = !0, t.borderSkipped = o } function Wn(t, e, i, s) { var n, o, a; return s ? (a = i, t = Nn(t = (n = t) === (o = e) ? a : n === a ? o : n, i, e)) : t = Nn(t, e, i), t } function Nn(t, e, i) { return "start" === t ? e : "end" === t ? i : t } function Hn(t, { inflateAmount: e }, i) { t.inflateAmount = "auto" === e ? 1 === i ? .33 : 0 : e } class jn extends Ns { static id = "doughnut"; static defaults = { datasetElementType: !1, dataElementType: "arc", animation: { animateRotate: !0, animateScale: !1 }, animations: { numbers: { type: "number", properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"] } }, cutout: "50%", rotation: 0, circumference: 360, radius: "100%", spacing: 0, indexAxis: "r" }; static descriptors = { _scriptable: t => "spacing" !== t, _indexable: t => "spacing" !== t && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash") }; static overrides = { aspectRatio: 1, plugins: { legend: { labels: { generateLabels(t) { const e = t.data; if (e.labels.length && e.datasets.length) { const { labels: { pointStyle: i, color: s } } = t.legend.options; return e.labels.map(((e, n) => { const o = t.getDatasetMeta(0).controller.getStyle(n); return { text: e, fillStyle: o.backgroundColor, strokeStyle: o.borderColor, fontColor: s, lineWidth: o.borderWidth, pointStyle: i, hidden: !t.getDataVisibility(n), index: n } })) } return [] } }, onClick(t, e, i) { i.chart.toggleDataVisibility(e.index), i.chart.update() } } } }; constructor(t, e) { super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0 } linkScales() { } parse(t, e) { const i = this.getDataset().data, s = this._cachedMeta; if (!1 === this._parsing) s._parsed = i; else { let n, a, r = t => +i[t]; if (o(i[t])) { const { key: t = "value" } = this._parsing; r = e => +M(i[e], t) } for (n = t, a = t + e; n < a; ++n)s._parsed[n] = r(n) } } _getRotation() { return $(this.options.rotation - 90) } _getCircumference() { return $(this.options.circumference) } _getRotationExtents() { let t = O, e = -O; for (let i = 0; i < this.chart.data.datasets.length; ++i)if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) { const s = this.chart.getDatasetMeta(i).controller, n = s._getRotation(), o = s._getCircumference(); t = Math.min(t, n), e = Math.max(e, n + o) } return { rotation: t, circumference: e - t } } update(t) { const e = this.chart, { chartArea: i } = e, s = this._cachedMeta, n = s.data, o = this.getMaxBorderWidth() + this.getMaxOffset(n) + this.options.spacing, a = Math.max((Math.min(i.width, i.height) - o) / 2, 0), r = Math.min(h(this.options.cutout, a), 1), l = this._getRingWeight(this.index), { circumference: d, rotation: u } = this._getRotationExtents(), { ratioX: f, ratioY: g, offsetX: p, offsetY: m } = function (t, e, i) { let s = 1, n = 1, o = 0, a = 0; if (e < O) { const r = t, l = r + e, h = Math.cos(r), c = Math.sin(r), d = Math.cos(l), u = Math.sin(l), f = (t, e, s) => Z(t, r, l, !0) ? 1 : Math.max(e, e * i, s, s * i), g = (t, e, s) => Z(t, r, l, !0) ? -1 : Math.min(e, e * i, s, s * i), p = f(0, h, d), m = f(E, c, u), x = g(C, h, d), b = g(C + E, c, u); s = (p - x) / 2, n = (m - b) / 2, o = -(p + x) / 2, a = -(m + b) / 2 } return { ratioX: s, ratioY: n, offsetX: o, offsetY: a } }(u, d, r), x = (i.width - o) / f, b = (i.height - o) / g, _ = Math.max(Math.min(x, b) / 2, 0), y = c(this.options.radius, _), v = (y - Math.max(y * r, 0)) / this._getVisibleDatasetWeightTotal(); this.offsetX = p * y, this.offsetY = m * y, s.total = this.calculateTotal(), this.outerRadius = y - v * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - v * l, 0), this.updateElements(n, 0, n.length, t) } _circumference(t, e) { const i = this.options, s = this._cachedMeta, n = this._getCircumference(); return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || null === s._parsed[t] || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * n / O) } updateElements(t, e, i, s) { const n = "reset" === s, o = this.chart, a = o.chartArea, r = o.options.animation, l = (a.left + a.right) / 2, h = (a.top + a.bottom) / 2, c = n && r.animateScale, d = c ? 0 : this.innerRadius, u = c ? 0 : this.outerRadius, { sharedOptions: f, includeOptions: g } = this._getSharedOptions(e, s); let p, m = this._getRotation(); for (p = 0; p < e; ++p)m += this._circumference(p, n); for (p = e; p < e + i; ++p) { const e = this._circumference(p, n), i = t[p], o = { x: l + this.offsetX, y: h + this.offsetY, startAngle: m, endAngle: m + e, circumference: e, outerRadius: u, innerRadius: d }; g && (o.options = f || this.resolveDataElementOptions(p, i.active ? "active" : s)), m += e, this.updateElement(i, p, o, s) } } calculateTotal() { const t = this._cachedMeta, e = t.data; let i, s = 0; for (i = 0; i < e.length; i++) { const n = t._parsed[i]; null === n || isNaN(n) || !this.chart.getDataVisibility(i) || e[i].hidden || (s += Math.abs(n)) } return s } calculateCircumference(t) { const e = this._cachedMeta.total; return e > 0 && !isNaN(t) ? O * (Math.abs(t) / e) : 0 } getLabelAndValue(t) { const e = this._cachedMeta, i = this.chart, s = i.data.labels || [], n = ne(e._parsed[t], i.options.locale); return { label: s[t] || "", value: n } } getMaxBorderWidth(t) { let e = 0; const i = this.chart; let s, n, o, a, r; if (!t) for (s = 0, n = i.data.datasets.length; s < n; ++s)if (i.isDatasetVisible(s)) { o = i.getDatasetMeta(s), t = o.data, a = o.controller; break } if (!t) return 0; for (s = 0, n = t.length; s < n; ++s)r = a.resolveDataElementOptions(s), "inner" !== r.borderAlign && (e = Math.max(e, r.borderWidth || 0, r.hoverBorderWidth || 0)); return e } getMaxOffset(t) { let e = 0; for (let i = 0, s = t.length; i < s; ++i) { const t = this.resolveDataElementOptions(i); e = Math.max(e, t.offset || 0, t.hoverOffset || 0) } return e } _getRingWeightOffset(t) { let e = 0; for (let i = 0; i < t; ++i)this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i)); return e } _getRingWeight(t) { return Math.max(l(this.chart.data.datasets[t].weight, 1), 0) } _getVisibleDatasetWeightTotal() { return this._getRingWeightOffset(this.chart.data.datasets.length) || 1 } } class $n extends Ns { static id = "polarArea"; static defaults = { dataElementType: "arc", animation: { animateRotate: !0, animateScale: !0 }, animations: { numbers: { type: "number", properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"] } }, indexAxis: "r", startAngle: 0 }; static overrides = { aspectRatio: 1, plugins: { legend: { labels: { generateLabels(t) { const e = t.data; if (e.labels.length && e.datasets.length) { const { labels: { pointStyle: i, color: s } } = t.legend.options; return e.labels.map(((e, n) => { const o = t.getDatasetMeta(0).controller.getStyle(n); return { text: e, fillStyle: o.backgroundColor, strokeStyle: o.borderColor, fontColor: s, lineWidth: o.borderWidth, pointStyle: i, hidden: !t.getDataVisibility(n), index: n } })) } return [] } }, onClick(t, e, i) { i.chart.toggleDataVisibility(e.index), i.chart.update() } } }, scales: { r: { type: "radialLinear", angleLines: { display: !1 }, beginAtZero: !0, grid: { circular: !0 }, pointLabels: { display: !1 }, startAngle: 0 } } }; constructor(t, e) { super(t, e), this.innerRadius = void 0, this.outerRadius = void 0 } getLabelAndValue(t) { const e = this._cachedMeta, i = this.chart, s = i.data.labels || [], n = ne(e._parsed[t].r, i.options.locale); return { label: s[t] || "", value: n } } parseObjectData(t, e, i, s) { return ii.bind(this)(t, e, i, s) } update(t) { const e = this._cachedMeta.data; this._updateRadius(), this.updateElements(e, 0, e.length, t) } getMinMax() { const t = this._cachedMeta, e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY }; return t.data.forEach(((t, i) => { const s = this.getParsed(i).r; !isNaN(s) && this.chart.getDataVisibility(i) && (s < e.min && (e.min = s), s > e.max && (e.max = s)) })), e } _updateRadius() { const t = this.chart, e = t.chartArea, i = t.options, s = Math.min(e.right - e.left, e.bottom - e.top), n = Math.max(s / 2, 0), o = (n - Math.max(i.cutoutPercentage ? n / 100 * i.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount(); this.outerRadius = n - o * this.index, this.innerRadius = this.outerRadius - o } updateElements(t, e, i, s) { const n = "reset" === s, o = this.chart, a = o.options.animation, r = this._cachedMeta.rScale, l = r.xCenter, h = r.yCenter, c = r.getIndexAngle(0) - .5 * C; let d, u = c; const f = 360 / this.countVisibleElements(); for (d = 0; d < e; ++d)u += this._computeAngle(d, s, f); for (d = e; d < e + i; d++) { const e = t[d]; let i = u, g = u + this._computeAngle(d, s, f), p = o.getDataVisibility(d) ? r.getDistanceFromCenterForValue(this.getParsed(d).r) : 0; u = g, n && (a.animateScale && (p = 0), a.animateRotate && (i = g = c)); const m = { x: l, y: h, innerRadius: 0, outerRadius: p, startAngle: i, endAngle: g, options: this.resolveDataElementOptions(d, e.active ? "active" : s) }; this.updateElement(e, d, m, s) } } countVisibleElements() { const t = this._cachedMeta; let e = 0; return t.data.forEach(((t, i) => { !isNaN(this.getParsed(i).r) && this.chart.getDataVisibility(i) && e++ })), e } _computeAngle(t, e, i) { return this.chart.getDataVisibility(t) ? $(this.resolveDataElementOptions(t, e).angle || i) : 0 } } var Yn = Object.freeze({ __proto__: null, BarController: class extends Ns { static id = "bar"; static defaults = { datasetElementType: !1, dataElementType: "bar", categoryPercentage: .8, barPercentage: .9, grouped: !0, animations: { numbers: { type: "number", properties: ["x", "y", "base", "width", "height"] } } }; static overrides = { scales: { _index_: { type: "category", offset: !0, grid: { offset: !0 } }, _value_: { type: "linear", beginAtZero: !0 } } }; parsePrimitiveData(t, e, i, s) { return Fn(t, e, i, s) } parseArrayData(t, e, i, s) { return Fn(t, e, i, s) } parseObjectData(t, e, i, s) { const { iScale: n, vScale: o } = t, { xAxisKey: a = "x", yAxisKey: r = "y" } = this._parsing, l = "x" === n.axis ? a : r, h = "x" === o.axis ? a : r, c = []; let d, u, f, g; for (d = i, u = i + s; d < u; ++d)g = e[d], f = {}, f[n.axis] = n.parse(M(g, l), d), c.push(zn(M(g, h), f, o, d)); return c } updateRangeFromParsed(t, e, i, s) { super.updateRangeFromParsed(t, e, i, s); const n = i._custom; n && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, n.min), t.max = Math.max(t.max, n.max)) } getMaxOverflow() { return 0 } getLabelAndValue(t) { const e = this._cachedMeta, { iScale: i, vScale: s } = e, n = this.getParsed(t), o = n._custom, a = Vn(o) ? "[" + o.start + ", " + o.end + "]" : "" + s.getLabelForValue(n[s.axis]); return { label: "" + i.getLabelForValue(n[i.axis]), value: a } } initialize() { this.enableOptionSharing = !0, super.initialize(); this._cachedMeta.stack = this.getDataset().stack } update(t) { const e = this._cachedMeta; this.updateElements(e.data, 0, e.data.length, t) } updateElements(t, e, i, n) { const o = "reset" === n, { index: a, _cachedMeta: { vScale: r } } = this, l = r.getBasePixel(), h = r.isHorizontal(), c = this._getRuler(), { sharedOptions: d, includeOptions: u } = this._getSharedOptions(e, n); for (let f = e; f < e + i; f++) { const e = this.getParsed(f), i = o || s(e[r.axis]) ? { base: l, head: l } : this._calculateBarValuePixels(f), g = this._calculateBarIndexPixels(f, c), p = (e._stacks || {})[r.axis], m = { horizontal: h, base: i.base, enableBorderRadius: !p || Vn(e._custom) || a === p._top || a === p._bottom, x: h ? i.head : g.center, y: h ? g.center : i.head, height: h ? g.size : Math.abs(i.size), width: h ? Math.abs(i.size) : g.size }; u && (m.options = d || this.resolveDataElementOptions(f, t[f].active ? "active" : n)); const x = m.options || t[f].options; Bn(m, x, p, a), Hn(m, x, c.ratio), this.updateElement(t[f], f, m, n) } } _getStacks(t, e) { const { iScale: i } = this._cachedMeta, n = i.getMatchingVisibleMetas(this._type).filter((t => t.controller.options.grouped)), o = i.options.stacked, a = [], r = t => { const i = t.controller.getParsed(e), n = i && i[t.vScale.axis]; if (s(n) || isNaN(n)) return !0 }; for (const i of n) if ((void 0 === e || !r(i)) && ((!1 === o || -1 === a.indexOf(i.stack) || void 0 === o && void 0 === i.stack) && a.push(i.stack), i.index === t)) break; return a.length || a.push(void 0), a } _getStackCount(t) { return this._getStacks(void 0, t).length } _getStackIndex(t, e, i) { const s = this._getStacks(t, i), n = void 0 !== e ? s.indexOf(e) : -1; return -1 === n ? s.length - 1 : n } _getRuler() { const t = this.options, e = this._cachedMeta, i = e.iScale, s = []; let n, o; for (n = 0, o = e.data.length; n < o; ++n)s.push(i.getPixelForValue(this.getParsed(n)[i.axis], n)); const a = t.barThickness; return { min: a || In(e), pixels: s, start: i._startPixel, end: i._endPixel, stackCount: this._getStackCount(), scale: i, grouped: t.grouped, ratio: a ? 1 : t.categoryPercentage * t.barPercentage } } _calculateBarValuePixels(t) { const { _cachedMeta: { vScale: e, _stacked: i, index: n }, options: { base: o, minBarLength: a } } = this, r = o || 0, l = this.getParsed(t), h = l._custom, c = Vn(h); let d, u, f = l[e.axis], g = 0, p = i ? this.applyStack(e, l, i) : f; p !== f && (g = p - f, p = f), c && (f = h.barStart, p = h.barEnd - h.barStart, 0 !== f && F(f) !== F(h.barEnd) && (g = 0), g += f); const m = s(o) || c ? g : o; let x = e.getPixelForValue(m); if (d = this.chart.getDataVisibility(t) ? e.getPixelForValue(g + p) : x, u = d - x, Math.abs(u) < a) { u = function (t, e, i) { return 0 !== t ? F(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1) }(u, e, r) * a, f === r && (x -= u / 2); const t = e.getPixelForDecimal(0), s = e.getPixelForDecimal(1), o = Math.min(t, s), h = Math.max(t, s); x = Math.max(Math.min(x, h), o), d = x + u, i && !c && (l._stacks[e.axis]._visualValues[n] = e.getValueForPixel(d) - e.getValueForPixel(x)) } if (x === e.getPixelForValue(r)) { const t = F(u) * e.getLineWidthForValue(r) / 2; x += t, u -= t } return { size: u, base: x, head: d, center: d + u / 2 } } _calculateBarIndexPixels(t, e) { const i = e.scale, n = this.options, o = n.skipNull, a = l(n.maxBarThickness, 1 / 0); let r, h; if (e.grouped) { const i = o ? this._getStackCount(t) : e.stackCount, l = "flex" === n.barThickness ? function (t, e, i, s) { const n = e.pixels, o = n[t]; let a = t > 0 ? n[t - 1] : null, r = t < n.length - 1 ? n[t + 1] : null; const l = i.categoryPercentage; null === a && (a = o - (null === r ? e.end - e.start : r - o)), null === r && (r = o + o - a); const h = o - (o - Math.min(a, r)) / 2 * l; return { chunk: Math.abs(r - a) / 2 * l / s, ratio: i.barPercentage, start: h } }(t, e, n, i) : function (t, e, i, n) { const o = i.barThickness; let a, r; return s(o) ? (a = e.min * i.categoryPercentage, r = i.barPercentage) : (a = o * n, r = 1), { chunk: a / n, ratio: r, start: e.pixels[t] - a / 2 } }(t, e, n, i), c = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0); r = l.start + l.chunk * c + l.chunk / 2, h = Math.min(a, l.chunk * l.ratio) } else r = i.getPixelForValue(this.getParsed(t)[i.axis], t), h = Math.min(a, e.min * e.ratio); return { base: r - h / 2, head: r + h / 2, center: r, size: h } } draw() { const t = this._cachedMeta, e = t.vScale, i = t.data, s = i.length; let n = 0; for (; n < s; ++n)null === this.getParsed(n)[e.axis] || i[n].hidden || i[n].draw(this._ctx) } }, BubbleController: class extends Ns { static id = "bubble"; static defaults = { datasetElementType: !1, dataElementType: "point", animations: { numbers: { type: "number", properties: ["x", "y", "borderWidth", "radius"] } } }; static overrides = { scales: { x: { type: "linear" }, y: { type: "linear" } } }; initialize() { this.enableOptionSharing = !0, super.initialize() } parsePrimitiveData(t, e, i, s) { const n = super.parsePrimitiveData(t, e, i, s); for (let t = 0; t < n.length; t++)n[t]._custom = this.resolveDataElementOptions(t + i).radius; return n } parseArrayData(t, e, i, s) { const n = super.parseArrayData(t, e, i, s); for (let t = 0; t < n.length; t++) { const s = e[i + t]; n[t]._custom = l(s[2], this.resolveDataElementOptions(t + i).radius) } return n } parseObjectData(t, e, i, s) { const n = super.parseObjectData(t, e, i, s); for (let t = 0; t < n.length; t++) { const s = e[i + t]; n[t]._custom = l(s && s.r && +s.r, this.resolveDataElementOptions(t + i).radius) } return n } getMaxOverflow() { const t = this._cachedMeta.data; let e = 0; for (let i = t.length - 1; i >= 0; --i)e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2); return e > 0 && e } getLabelAndValue(t) { const e = this._cachedMeta, i = this.chart.data.labels || [], { xScale: s, yScale: n } = e, o = this.getParsed(t), a = s.getLabelForValue(o.x), r = n.getLabelForValue(o.y), l = o._custom; return { label: i[t] || "", value: "(" + a + ", " + r + (l ? ", " + l : "") + ")" } } update(t) { const e = this._cachedMeta.data; this.updateElements(e, 0, e.length, t) } updateElements(t, e, i, s) { const n = "reset" === s, { iScale: o, vScale: a } = this._cachedMeta, { sharedOptions: r, includeOptions: l } = this._getSharedOptions(e, s), h = o.axis, c = a.axis; for (let d = e; d < e + i; d++) { const e = t[d], i = !n && this.getParsed(d), u = {}, f = u[h] = n ? o.getPixelForDecimal(.5) : o.getPixelForValue(i[h]), g = u[c] = n ? a.getBasePixel() : a.getPixelForValue(i[c]); u.skip = isNaN(f) || isNaN(g), l && (u.options = r || this.resolveDataElementOptions(d, e.active ? "active" : s), n && (u.options.radius = 0)), this.updateElement(e, d, u, s) } } resolveDataElementOptions(t, e) { const i = this.getParsed(t); let s = super.resolveDataElementOptions(t, e); s.$shared && (s = Object.assign({}, s, { $shared: !1 })); const n = s.radius; return "active" !== e && (s.radius = 0), s.radius += l(i && i._custom, n), s } }, DoughnutController: jn, LineController: class extends Ns { static id = "line"; static defaults = { datasetElementType: "line", dataElementType: "point", showLine: !0, spanGaps: !1 }; static overrides = { scales: { _index_: { type: "category" }, _value_: { type: "linear" } } }; initialize() { this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize() } update(t) { const e = this._cachedMeta, { dataset: i, data: s = [], _dataset: n } = e, o = this.chart._animationsDisabled; let { start: a, count: r } = pt(e, s, o); this._drawStart = a, this._drawCount = r, mt(e) && (a = 0, r = s.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!n._decimated, i.points = s; const l = this.resolveDatasetElementOptions(t); this.options.showLine || (l.borderWidth = 0), l.segment = this.options.segment, this.updateElement(i, void 0, { animated: !o, options: l }, t), this.updateElements(s, a, r, t) } updateElements(t, e, i, n) { const o = "reset" === n, { iScale: a, vScale: r, _stacked: l, _dataset: h } = this._cachedMeta, { sharedOptions: c, includeOptions: d } = this._getSharedOptions(e, n), u = a.axis, f = r.axis, { spanGaps: g, segment: p } = this.options, m = N(g) ? g : Number.POSITIVE_INFINITY, x = this.chart._animationsDisabled || o || "none" === n, b = e + i, _ = t.length; let y = e > 0 && this.getParsed(e - 1); for (let i = 0; i < _; ++i) { const g = t[i], _ = x ? g : {}; if (i < e || i >= b) { _.skip = !0; continue } const v = this.getParsed(i), M = s(v[f]), w = _[u] = a.getPixelForValue(v[u], i), k = _[f] = o || M ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, v, l) : v[f], i); _.skip = isNaN(w) || isNaN(k) || M, _.stop = i > 0 && Math.abs(v[u] - y[u]) > m, p && (_.parsed = v, _.raw = h.data[i]), d && (_.options = c || this.resolveDataElementOptions(i, g.active ? "active" : n)), x || this.updateElement(g, i, _, n), y = v } } getMaxOverflow() { const t = this._cachedMeta, e = t.dataset, i = e.options && e.options.borderWidth || 0, s = t.data || []; if (!s.length) return i; const n = s[0].size(this.resolveDataElementOptions(0)), o = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1)); return Math.max(i, n, o) / 2 } draw() { const t = this._cachedMeta; t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw() } }, PieController: class extends jn { static id = "pie"; static defaults = { cutout: 0, rotation: 0, circumference: 360, radius: "100%" } }, PolarAreaController: $n, RadarController: class extends Ns { static id = "radar"; static defaults = { datasetElementType: "line", dataElementType: "point", indexAxis: "r", showLine: !0, elements: { line: { fill: "start" } } }; static overrides = { aspectRatio: 1, scales: { r: { type: "radialLinear" } } }; getLabelAndValue(t) { const e = this._cachedMeta.vScale, i = this.getParsed(t); return { label: e.getLabels()[t], value: "" + e.getLabelForValue(i[e.axis]) } } parseObjectData(t, e, i, s) { return ii.bind(this)(t, e, i, s) } update(t) { const e = this._cachedMeta, i = e.dataset, s = e.data || [], n = e.iScale.getLabels(); if (i.points = s, "resize" !== t) { const e = this.resolveDatasetElementOptions(t); this.options.showLine || (e.borderWidth = 0); const o = { _loop: !0, _fullLoop: n.length === s.length, options: e }; this.updateElement(i, void 0, o, t) } this.updateElements(s, 0, s.length, t) } updateElements(t, e, i, s) { const n = this._cachedMeta.rScale, o = "reset" === s; for (let a = e; a < e + i; a++) { const e = t[a], i = this.resolveDataElementOptions(a, e.active ? "active" : s), r = n.getPointPositionForValue(a, this.getParsed(a).r), l = o ? n.xCenter : r.x, h = o ? n.yCenter : r.y, c = { x: l, y: h, angle: r.angle, skip: isNaN(l) || isNaN(h), options: i }; this.updateElement(e, a, c, s) } } }, ScatterController: class extends Ns { static id = "scatter"; static defaults = { datasetElementType: !1, dataElementType: "point", showLine: !1, fill: !1 }; static overrides = { interaction: { mode: "point" }, scales: { x: { type: "linear" }, y: { type: "linear" } } }; getLabelAndValue(t) { const e = this._cachedMeta, i = this.chart.data.labels || [], { xScale: s, yScale: n } = e, o = this.getParsed(t), a = s.getLabelForValue(o.x), r = n.getLabelForValue(o.y); return { label: i[t] || "", value: "(" + a + ", " + r + ")" } } update(t) { const e = this._cachedMeta, { data: i = [] } = e, s = this.chart._animationsDisabled; let { start: n, count: o } = pt(e, i, s); if (this._drawStart = n, this._drawCount = o, mt(e) && (n = 0, o = i.length), this.options.showLine) { this.datasetElementType || this.addElements(); const { dataset: n, _dataset: o } = e; n._chart = this.chart, n._datasetIndex = this.index, n._decimated = !!o._decimated, n.points = i; const a = this.resolveDatasetElementOptions(t); a.segment = this.options.segment, this.updateElement(n, void 0, { animated: !s, options: a }, t) } else this.datasetElementType && (delete e.dataset, this.datasetElementType = !1); this.updateElements(i, n, o, t) } addElements() { const { showLine: t } = this.options; !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements() } updateElements(t, e, i, n) { const o = "reset" === n, { iScale: a, vScale: r, _stacked: l, _dataset: h } = this._cachedMeta, c = this.resolveDataElementOptions(e, n), d = this.getSharedOptions(c), u = this.includeOptions(n, d), f = a.axis, g = r.axis, { spanGaps: p, segment: m } = this.options, x = N(p) ? p : Number.POSITIVE_INFINITY, b = this.chart._animationsDisabled || o || "none" === n; let _ = e > 0 && this.getParsed(e - 1); for (let c = e; c < e + i; ++c) { const e = t[c], i = this.getParsed(c), p = b ? e : {}, y = s(i[g]), v = p[f] = a.getPixelForValue(i[f], c), M = p[g] = o || y ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, i, l) : i[g], c); p.skip = isNaN(v) || isNaN(M) || y, p.stop = c > 0 && Math.abs(i[f] - _[f]) > x, m && (p.parsed = i, p.raw = h.data[c]), u && (p.options = d || this.resolveDataElementOptions(c, e.active ? "active" : n)), b || this.updateElement(e, c, p, n), _ = i } this.updateSharedOptions(d, n, c) } getMaxOverflow() { const t = this._cachedMeta, e = t.data || []; if (!this.options.showLine) { let t = 0; for (let i = e.length - 1; i >= 0; --i)t = Math.max(t, e[i].size(this.resolveDataElementOptions(i)) / 2); return t > 0 && t } const i = t.dataset, s = i.options && i.options.borderWidth || 0; if (!e.length) return s; const n = e[0].size(this.resolveDataElementOptions(0)), o = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1)); return Math.max(s, n, o) / 2 } } }); function Un(t, e, i, s) { const n = vi(t.options.borderRadius, ["outerStart", "outerEnd", "innerStart", "innerEnd"]); const o = (i - e) / 2, a = Math.min(o, s * e / 2), r = t => { const e = (i - Math.min(o, t)) * s / 2; return J(t, 0, Math.min(o, e)) }; return { outerStart: r(n.outerStart), outerEnd: r(n.outerEnd), innerStart: J(n.innerStart, 0, a), innerEnd: J(n.innerEnd, 0, a) } } function Xn(t, e, i, s) { return { x: i + t * Math.cos(e), y: s + t * Math.sin(e) } } function qn(t, e, i, s, n, o) { const { x: a, y: r, startAngle: l, pixelMargin: h, innerRadius: c } = e, d = Math.max(e.outerRadius + s + i - h, 0), u = c > 0 ? c + s + i + h : 0; let f = 0; const g = n - l; if (s) { const t = ((c > 0 ? c - s : 0) + (d > 0 ? d - s : 0)) / 2; f = (g - (0 !== t ? g * t / (t + s) : g)) / 2 } const p = (g - Math.max(.001, g * d - i / C) / d) / 2, m = l + p + f, x = n - p - f, { outerStart: b, outerEnd: _, innerStart: y, innerEnd: v } = Un(e, u, d, x - m), M = d - b, w = d - _, k = m + b / M, S = x - _ / w, P = u + y, D = u + v, O = m + y / P, A = x - v / D; if (t.beginPath(), o) { const e = (k + S) / 2; if (t.arc(a, r, d, k, e), t.arc(a, r, d, e, S), _ > 0) { const e = Xn(w, S, a, r); t.arc(e.x, e.y, _, S, x + E) } const i = Xn(D, x, a, r); if (t.lineTo(i.x, i.y), v > 0) { const e = Xn(D, A, a, r); t.arc(e.x, e.y, v, x + E, A + Math.PI) } const s = (x - v / u + (m + y / u)) / 2; if (t.arc(a, r, u, x - v / u, s, !0), t.arc(a, r, u, s, m + y / u, !0), y > 0) { const e = Xn(P, O, a, r); t.arc(e.x, e.y, y, O + Math.PI, m - E) } const n = Xn(M, m, a, r); if (t.lineTo(n.x, n.y), b > 0) { const e = Xn(M, k, a, r); t.arc(e.x, e.y, b, m - E, k) } } else { t.moveTo(a, r); const e = Math.cos(k) * d + a, i = Math.sin(k) * d + r; t.lineTo(e, i); const s = Math.cos(S) * d + a, n = Math.sin(S) * d + r; t.lineTo(s, n) } t.closePath() } function Kn(t, e, i, s, n) { const { fullCircles: o, startAngle: a, circumference: r, options: l } = e, { borderWidth: h, borderJoinStyle: c, borderDash: d, borderDashOffset: u } = l, f = "inner" === l.borderAlign; if (!h) return; t.setLineDash(d || []), t.lineDashOffset = u, f ? (t.lineWidth = 2 * h, t.lineJoin = c || "round") : (t.lineWidth = h, t.lineJoin = c || "bevel"); let g = e.endAngle; if (o) { qn(t, e, i, s, g, n); for (let e = 0; e < o; ++e)t.stroke(); isNaN(r) || (g = a + (r % O || O)) } f && function (t, e, i) { const { startAngle: s, pixelMargin: n, x: o, y: a, outerRadius: r, innerRadius: l } = e; let h = n / r; t.beginPath(), t.arc(o, a, r, s - h, i + h), l > n ? (h = n / l, t.arc(o, a, l, i + h, s - h, !0)) : t.arc(o, a, n, i + E, s - E), t.closePath(), t.clip() }(t, e, g), o || (qn(t, e, i, s, g, n), t.stroke()) } function Gn(t, e, i = e) { t.lineCap = l(i.borderCapStyle, e.borderCapStyle), t.setLineDash(l(i.borderDash, e.borderDash)), t.lineDashOffset = l(i.borderDashOffset, e.borderDashOffset), t.lineJoin = l(i.borderJoinStyle, e.borderJoinStyle), t.lineWidth = l(i.borderWidth, e.borderWidth), t.strokeStyle = l(i.borderColor, e.borderColor) } function Zn(t, e, i) { t.lineTo(i.x, i.y) } function Jn(t, e, i = {}) { const s = t.length, { start: n = 0, end: o = s - 1 } = i, { start: a, end: r } = e, l = Math.max(n, a), h = Math.min(o, r), c = n < a && o < a || n > r && o > r; return { count: s, start: l, loop: e.loop, ilen: h < l && !c ? s + h - l : h - l } } function Qn(t, e, i, s) { const { points: n, options: o } = e, { count: a, start: r, loop: l, ilen: h } = Jn(n, i, s), c = function (t) { return t.stepped ? Fe : t.tension || "monotone" === t.cubicInterpolationMode ? Ve : Zn }(o); let d, u, f, { move: g = !0, reverse: p } = s || {}; for (d = 0; d <= h; ++d)u = n[(r + (p ? h - d : d)) % a], u.skip || (g ? (t.moveTo(u.x, u.y), g = !1) : c(t, f, u, p, o.stepped), f = u); return l && (u = n[(r + (p ? h : 0)) % a], c(t, f, u, p, o.stepped)), !!l } function to(t, e, i, s) { const n = e.points, { count: o, start: a, ilen: r } = Jn(n, i, s), { move: l = !0, reverse: h } = s || {}; let c, d, u, f, g, p, m = 0, x = 0; const b = t => (a + (h ? r - t : t)) % o, _ = () => { f !== g && (t.lineTo(m, g), t.lineTo(m, f), t.lineTo(m, p)) }; for (l && (d = n[b(0)], t.moveTo(d.x, d.y)), c = 0; c <= r; ++c) { if (d = n[b(c)], d.skip) continue; const e = d.x, i = d.y, s = 0 | e; s === u ? (i < f ? f = i : i > g && (g = i), m = (x * m + e) / ++x) : (_(), t.lineTo(e, i), u = s, x = 0, f = g = i), p = i } _() } function eo(t) { const e = t.options, i = e.borderDash && e.borderDash.length; return !(t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i) ? to : Qn } const io = "function" == typeof Path2D; function so(t, e, i, s) { io && !e.options.segment ? function (t, e, i, s) { let n = e._path; n || (n = e._path = new Path2D, e.path(n, i, s) && n.closePath()), Gn(t, e.options), t.stroke(n) }(t, e, i, s) : function (t, e, i, s) { const { segments: n, options: o } = e, a = eo(e); for (const r of n) Gn(t, o, r.style), t.beginPath(), a(t, e, r, { start: i, end: i + s - 1 }) && t.closePath(), t.stroke() }(t, e, i, s) } class no extends Hs { static id = "line"; static defaults = { borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", borderWidth: 3, capBezierPoints: !0, cubicInterpolationMode: "default", fill: !1, spanGaps: !1, stepped: !1, tension: 0 }; static defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" }; static descriptors = { _scriptable: !0, _indexable: t => "borderDash" !== t && "fill" !== t }; constructor(t) { super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t) } updateControlPoints(t, e) { const i = this.options; if ((i.tension || "monotone" === i.cubicInterpolationMode) && !i.stepped && !this._pointsUpdated) { const s = i.spanGaps ? this._loop : this._fullLoop; hi(this._points, i, t, s, e), this._pointsUpdated = !0 } } set points(t) { this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1 } get points() { return this._points } get segments() { return this._segments || (this._segments = zi(this, this.options.segment)) } first() { const t = this.segments, e = this.points; return t.length && e[t[0].start] } last() { const t = this.segments, e = this.points, i = t.length; return i && e[t[i - 1].end] } interpolate(t, e) { const i = this.options, s = t[e], n = this.points, o = Ii(this, { property: e, start: s, end: s }); if (!o.length) return; const a = [], r = function (t) { return t.stepped ? pi : t.tension || "monotone" === t.cubicInterpolationMode ? mi : gi }(i); let l, h; for (l = 0, h = o.length; l < h; ++l) { const { start: h, end: c } = o[l], d = n[h], u = n[c]; if (d === u) { a.push(d); continue } const f = r(d, u, Math.abs((s - d[e]) / (u[e] - d[e])), i.stepped); f[e] = t[e], a.push(f) } return 1 === a.length ? a[0] : a } pathSegment(t, e, i) { return eo(this)(t, this, e, i) } path(t, e, i) { const s = this.segments, n = eo(this); let o = this._loop; e = e || 0, i = i || this.points.length - e; for (const a of s) o &= n(t, this, a, { start: e, end: e + i - 1 }); return !!o } draw(t, e, i, s) { const n = this.options || {}; (this.points || []).length && n.borderWidth && (t.save(), so(t, this, i, s), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0) } } function oo(t, e, i, s) { const n = t.options, { [i]: o } = t.getProps([i], s); return Math.abs(e - o) < n.radius + n.hitRadius } function ao(t, e) { const { x: i, y: s, base: n, width: o, height: a } = t.getProps(["x", "y", "base", "width", "height"], e); let r, l, h, c, d; return t.horizontal ? (d = a / 2, r = Math.min(i, n), l = Math.max(i, n), h = s - d, c = s + d) : (d = o / 2, r = i - d, l = i + d, h = Math.min(s, n), c = Math.max(s, n)), { left: r, top: h, right: l, bottom: c } } function ro(t, e, i, s) { return t ? 0 : J(e, i, s) } function lo(t) { const e = ao(t), i = e.right - e.left, s = e.bottom - e.top, n = function (t, e, i) { const s = t.options.borderWidth, n = t.borderSkipped, o = Mi(s); return { t: ro(n.top, o.top, 0, i), r: ro(n.right, o.right, 0, e), b: ro(n.bottom, o.bottom, 0, i), l: ro(n.left, o.left, 0, e) } }(t, i / 2, s / 2), a = function (t, e, i) { const { enableBorderRadius: s } = t.getProps(["enableBorderRadius"]), n = t.options.borderRadius, a = wi(n), r = Math.min(e, i), l = t.borderSkipped, h = s || o(n); return { topLeft: ro(!h || l.top || l.left, a.topLeft, 0, r), topRight: ro(!h || l.top || l.right, a.topRight, 0, r), bottomLeft: ro(!h || l.bottom || l.left, a.bottomLeft, 0, r), bottomRight: ro(!h || l.bottom || l.right, a.bottomRight, 0, r) } }(t, i / 2, s / 2); return { outer: { x: e.left, y: e.top, w: i, h: s, radius: a }, inner: { x: e.left + n.l, y: e.top + n.t, w: i - n.l - n.r, h: s - n.t - n.b, radius: { topLeft: Math.max(0, a.topLeft - Math.max(n.t, n.l)), topRight: Math.max(0, a.topRight - Math.max(n.t, n.r)), bottomLeft: Math.max(0, a.bottomLeft - Math.max(n.b, n.l)), bottomRight: Math.max(0, a.bottomRight - Math.max(n.b, n.r)) } } } } function ho(t, e, i, s) { const n = null === e, o = null === i, a = t && !(n && o) && ao(t, s); return a && (n || tt(e, a.left, a.right)) && (o || tt(i, a.top, a.bottom)) } function co(t, e) { t.rect(e.x, e.y, e.w, e.h) } function uo(t, e, i = {}) { const s = t.x !== i.x ? -e : 0, n = t.y !== i.y ? -e : 0, o = (t.x + t.w !== i.x + i.w ? e : 0) - s, a = (t.y + t.h !== i.y + i.h ? e : 0) - n; return { x: t.x + s, y: t.y + n, w: t.w + o, h: t.h + a, radius: t.radius } } var fo = Object.freeze({ __proto__: null, ArcElement: class extends Hs { static id = "arc"; static defaults = { borderAlign: "center", borderColor: "#fff", borderDash: [], borderDashOffset: 0, borderJoinStyle: void 0, borderRadius: 0, borderWidth: 2, offset: 0, spacing: 0, angle: void 0, circular: !0 }; static defaultRoutes = { backgroundColor: "backgroundColor" }; static descriptors = { _scriptable: !0, _indexable: t => "borderDash" !== t }; circumference; endAngle; fullCircles; innerRadius; outerRadius; pixelMargin; startAngle; constructor(t) { super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t) } inRange(t, e, i) { const s = this.getProps(["x", "y"], i), { angle: n, distance: o } = X(s, { x: t, y: e }), { startAngle: a, endAngle: r, innerRadius: h, outerRadius: c, circumference: d } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], i), u = (this.options.spacing + this.options.borderWidth) / 2, f = l(d, r - a) >= O || Z(n, a, r), g = tt(o, h + u, c + u); return f && g } getCenterPoint(t) { const { x: e, y: i, startAngle: s, endAngle: n, innerRadius: o, outerRadius: a } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"], t), { offset: r, spacing: l } = this.options, h = (s + n) / 2, c = (o + a + l + r) / 2; return { x: e + Math.cos(h) * c, y: i + Math.sin(h) * c } } tooltipPosition(t) { return this.getCenterPoint(t) } draw(t) { const { options: e, circumference: i } = this, s = (e.offset || 0) / 4, n = (e.spacing || 0) / 2, o = e.circular; if (this.pixelMargin = "inner" === e.borderAlign ? .33 : 0, this.fullCircles = i > O ? Math.floor(i / O) : 0, 0 === i || this.innerRadius < 0 || this.outerRadius < 0) return; t.save(); const a = (this.startAngle + this.endAngle) / 2; t.translate(Math.cos(a) * s, Math.sin(a) * s); const r = s * (1 - Math.sin(Math.min(C, i || 0))); t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, function (t, e, i, s, n) { const { fullCircles: o, startAngle: a, circumference: r } = e; let l = e.endAngle; if (o) { qn(t, e, i, s, l, n); for (let e = 0; e < o; ++e)t.fill(); isNaN(r) || (l = a + (r % O || O)) } qn(t, e, i, s, l, n), t.fill() }(t, this, r, n, o), Kn(t, this, r, n, o), t.restore() } }, BarElement: class extends Hs { static id = "bar"; static defaults = { borderSkipped: "start", borderWidth: 0, borderRadius: 0, inflateAmount: "auto", pointStyle: void 0 }; static defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" }; constructor(t) { super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t) } draw(t) { const { inflateAmount: e, options: { borderColor: i, backgroundColor: s } } = this, { inner: n, outer: o } = lo(this), a = (r = o.radius).topLeft || r.topRight || r.bottomLeft || r.bottomRight ? He : co; var r; t.save(), o.w === n.w && o.h === n.h || (t.beginPath(), a(t, uo(o, e, n)), t.clip(), a(t, uo(n, -e, o)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), a(t, uo(n, e)), t.fillStyle = s, t.fill(), t.restore() } inRange(t, e, i) { return ho(this, t, e, i) } inXRange(t, e) { return ho(this, t, null, e) } inYRange(t, e) { return ho(this, null, t, e) } getCenterPoint(t) { const { x: e, y: i, base: s, horizontal: n } = this.getProps(["x", "y", "base", "horizontal"], t); return { x: n ? (e + s) / 2 : e, y: n ? i : (i + s) / 2 } } getRange(t) { return "x" === t ? this.width / 2 : this.height / 2 } }, LineElement: no, PointElement: class extends Hs { static id = "point"; parsed; skip; stop; static defaults = { borderWidth: 1, hitRadius: 1, hoverBorderWidth: 1, hoverRadius: 4, pointStyle: "circle", radius: 3, rotation: 0 }; static defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" }; constructor(t) { super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t) } inRange(t, e, i) { const s = this.options, { x: n, y: o } = this.getProps(["x", "y"], i); return Math.pow(t - n, 2) + Math.pow(e - o, 2) < Math.pow(s.hitRadius + s.radius, 2) } inXRange(t, e) { return oo(this, t, "x", e) } inYRange(t, e) { return oo(this, t, "y", e) } getCenterPoint(t) { const { x: e, y: i } = this.getProps(["x", "y"], t); return { x: e, y: i } } size(t) { let e = (t = t || this.options || {}).radius || 0; e = Math.max(e, e && t.hoverRadius || 0); return 2 * (e + (e && t.borderWidth || 0)) } draw(t, e) { const i = this.options; this.skip || i.radius < .1 || !Re(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, Le(t, i, this.x, this.y)) } getRange() { const t = this.options || {}; return t.radius + t.hitRadius } } }); function go(t, e, i, s) { const n = t.indexOf(e); if (-1 === n) return ((t, e, i, s) => ("string" == typeof e ? (i = t.push(e) - 1, s.unshift({ index: i, label: e })) : isNaN(e) && (i = null), i))(t, e, i, s); return n !== t.lastIndexOf(e) ? i : n } function po(t) { const e = this.getLabels(); return t >= 0 && t < e.length ? e[t] : t } function mo(t, e, { horizontal: i, minRotation: s }) { const n = $(s), o = (i ? Math.sin(n) : Math.cos(n)) || .001, a = .75 * e * ("" + t).length; return Math.min(e / o, a) } class xo extends Js { constructor(t) { super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0 } parse(t, e) { return s(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t } handleTickRangeOptions() { const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: i } = this.getUserBounds(); let { min: s, max: n } = this; const o = t => s = e ? s : t, a = t => n = i ? n : t; if (t) { const t = F(s), e = F(n); t < 0 && e < 0 ? a(0) : t > 0 && e > 0 && o(0) } if (s === n) { let e = 0 === n ? 1 : Math.abs(.05 * n); a(n + e), t || o(s - e) } this.min = s, this.max = n } getTickLimit() { const t = this.options.ticks; let e, { maxTicksLimit: i, stepSize: s } = t; return s ? (e = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, e > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`), e = 1e3)) : (e = this.computeTickLimit(), i = i || 11), i && (e = Math.min(i, e)), e } computeTickLimit() { return Number.POSITIVE_INFINITY } buildTicks() { const t = this.options, e = t.ticks; let i = this.getTickLimit(); i = Math.max(2, i); const n = function (t, e) { const i = [], { bounds: n, step: o, min: a, max: r, precision: l, count: h, maxTicks: c, maxDigits: d, includeBounds: u } = t, f = o || 1, g = c - 1, { min: p, max: m } = e, x = !s(a), b = !s(r), _ = !s(h), y = (m - p) / (d + 1); let v, M, w, k, S = B((m - p) / g / f) * f; if (S < 1e-14 && !x && !b) return [{ value: p }, { value: m }]; k = Math.ceil(m / S) - Math.floor(p / S), k > g && (S = B(k * S / g / f) * f), s(l) || (v = Math.pow(10, l), S = Math.ceil(S * v) / v), "ticks" === n ? (M = Math.floor(p / S) * S, w = Math.ceil(m / S) * S) : (M = p, w = m), x && b && o && H((r - a) / o, S / 1e3) ? (k = Math.round(Math.min((r - a) / S, c)), S = (r - a) / k, M = a, w = r) : _ ? (M = x ? a : M, w = b ? r : w, k = h - 1, S = (w - M) / k) : (k = (w - M) / S, k = V(k, Math.round(k), S / 1e3) ? Math.round(k) : Math.ceil(k)); const P = Math.max(U(S), U(M)); v = Math.pow(10, s(l) ? P : l), M = Math.round(M * v) / v, w = Math.round(w * v) / v; let D = 0; for (x && (u && M !== a ? (i.push({ value: a }), M < a && D++, V(Math.round((M + D * S) * v) / v, a, mo(a, y, t)) && D++) : M < a && D++); D < k; ++D) { const t = Math.round((M + D * S) * v) / v; if (b && t > r) break; i.push({ value: t }) } return b && u && w !== r ? i.length && V(i[i.length - 1].value, r, mo(r, y, t)) ? i[i.length - 1].value = r : i.push({ value: r }) : b && w !== r || i.push({ value: w }), i }({ maxTicks: i, bounds: t.bounds, min: t.min, max: t.max, precision: e.precision, step: e.stepSize, count: e.count, maxDigits: this._maxDigits(), horizontal: this.isHorizontal(), minRotation: e.minRotation || 0, includeBounds: !1 !== e.includeBounds }, this._range || this); return "ticks" === t.bounds && j(n, this, "value"), t.reverse ? (n.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), n } configure() { const t = this.ticks; let e = this.min, i = this.max; if (super.configure(), this.options.offset && t.length) { const s = (i - e) / Math.max(t.length - 1, 1) / 2; e -= s, i += s } this._startValue = e, this._endValue = i, this._valueRange = i - e } getLabelForValue(t) { return ne(t, this.chart.options.locale, this.options.ticks.format) } } class bo extends xo { static id = "linear"; static defaults = { ticks: { callback: ae.formatters.numeric } }; determineDataLimits() { const { min: t, max: e } = this.getMinMax(!0); this.min = a(t) ? t : 0, this.max = a(e) ? e : 1, this.handleTickRangeOptions() } computeTickLimit() { const t = this.isHorizontal(), e = t ? this.width : this.height, i = $(this.options.ticks.minRotation), s = (t ? Math.sin(i) : Math.cos(i)) || .001, n = this._resolveTickFontOptions(0); return Math.ceil(e / Math.min(40, n.lineHeight / s)) } getPixelForValue(t) { return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange) } getValueForPixel(t) { return this._startValue + this.getDecimalForPixel(t) * this._valueRange } } const _o = t => Math.floor(z(t)), yo = (t, e) => Math.pow(10, _o(t) + e); function vo(t) { return 1 === t / Math.pow(10, _o(t)) } function Mo(t, e, i) { const s = Math.pow(10, i), n = Math.floor(t / s); return Math.ceil(e / s) - n } function wo(t, { min: e, max: i }) { e = r(t.min, e); const s = [], n = _o(e); let o = function (t, e) { let i = _o(e - t); for (; Mo(t, e, i) > 10;)i++; for (; Mo(t, e, i) < 10;)i--; return Math.min(i, _o(t)) }(e, i), a = o < 0 ? Math.pow(10, Math.abs(o)) : 1; const l = Math.pow(10, o), h = n > o ? Math.pow(10, n) : 0, c = Math.round((e - h) * a) / a, d = Math.floor((e - h) / l / 10) * l * 10; let u = Math.floor((c - d) / Math.pow(10, o)), f = r(t.min, Math.round((h + d + u * Math.pow(10, o)) * a) / a); for (; f < i;)s.push({ value: f, major: vo(f), significand: u }), u >= 10 ? u = u < 15 ? 15 : 20 : u++, u >= 20 && (o++, u = 2, a = o >= 0 ? 1 : a), f = Math.round((h + d + u * Math.pow(10, o)) * a) / a; const g = r(t.max, f); return s.push({ value: g, major: vo(g), significand: u }), s } class ko extends Js { static id = "logarithmic"; static defaults = { ticks: { callback: ae.formatters.logarithmic, major: { enabled: !0 } } }; constructor(t) { super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0 } parse(t, e) { const i = xo.prototype.parse.apply(this, [t, e]); if (0 !== i) return a(i) && i > 0 ? i : null; this._zero = !0 } determineDataLimits() { const { min: t, max: e } = this.getMinMax(!0); this.min = a(t) ? Math.max(0, t) : null, this.max = a(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !a(this._userMin) && (this.min = t === yo(this.min, 0) ? yo(this.min, -1) : yo(this.min, 0)), this.handleTickRangeOptions() } handleTickRangeOptions() { const { minDefined: t, maxDefined: e } = this.getUserBounds(); let i = this.min, s = this.max; const n = e => i = t ? i : e, o = t => s = e ? s : t; i === s && (i <= 0 ? (n(1), o(10)) : (n(yo(i, -1)), o(yo(s, 1)))), i <= 0 && n(yo(s, -1)), s <= 0 && o(yo(i, 1)), this.min = i, this.max = s } buildTicks() { const t = this.options, e = wo({ min: this._userMin, max: this._userMax }, this); return "ticks" === t.bounds && j(e, this, "value"), t.reverse ? (e.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), e } getLabelForValue(t) { return void 0 === t ? "0" : ne(t, this.chart.options.locale, this.options.ticks.format) } configure() { const t = this.min; super.configure(), this._startValue = z(t), this._valueRange = z(this.max) - z(t) } getPixelForValue(t) { return void 0 !== t && 0 !== t || (t = this.min), null === t || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (z(t) - this._startValue) / this._valueRange) } getValueForPixel(t) { const e = this.getDecimalForPixel(t); return Math.pow(10, this._startValue + e * this._valueRange) } } function So(t) { const e = t.ticks; if (e.display && t.display) { const t = ki(e.backdropPadding); return l(e.font && e.font.size, ue.font.size) + t.height } return 0 } function Po(t, e, i, s, n) { return t === s || t === n ? { start: e - i / 2, end: e + i / 2 } : t < s || t > n ? { start: e - i, end: e } : { start: e, end: e + i } } function Do(t) { const e = { l: t.left + t._padding.left, r: t.right - t._padding.right, t: t.top + t._padding.top, b: t.bottom - t._padding.bottom }, i = Object.assign({}, e), s = [], o = [], a = t._pointLabels.length, r = t.options.pointLabels, l = r.centerPointLabels ? C / a : 0; for (let u = 0; u < a; u++) { const a = r.setContext(t.getPointLabelContext(u)); o[u] = a.padding; const f = t.getPointPosition(u, t.drawingArea + o[u], l), g = Si(a.font), p = (h = t.ctx, c = g, d = n(d = t._pointLabels[u]) ? d : [d], { w: Oe(h, c.string, d), h: d.length * c.lineHeight }); s[u] = p; const m = G(t.getIndexAngle(u) + l), x = Math.round(Y(m)); Co(i, e, m, Po(x, f.x, p.w, 0, 180), Po(x, f.y, p.h, 90, 270)) } var h, c, d; t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b), t._pointLabelItems = function (t, e, i) { const s = [], n = t._pointLabels.length, o = t.options, { centerPointLabels: a, display: r } = o.pointLabels, l = { extra: So(o) / 2, additionalAngle: a ? C / n : 0 }; let h; for (let o = 0; o < n; o++) { l.padding = i[o], l.size = e[o]; const n = Oo(t, o, l); s.push(n), "auto" === r && (n.visible = Ao(n, h), n.visible && (h = n)) } return s }(t, s, o) } function Co(t, e, i, s, n) { const o = Math.abs(Math.sin(i)), a = Math.abs(Math.cos(i)); let r = 0, l = 0; s.start < e.l ? (r = (e.l - s.start) / o, t.l = Math.min(t.l, e.l - r)) : s.end > e.r && (r = (s.end - e.r) / o, t.r = Math.max(t.r, e.r + r)), n.start < e.t ? (l = (e.t - n.start) / a, t.t = Math.min(t.t, e.t - l)) : n.end > e.b && (l = (n.end - e.b) / a, t.b = Math.max(t.b, e.b + l)) } function Oo(t, e, i) { const s = t.drawingArea, { extra: n, additionalAngle: o, padding: a, size: r } = i, l = t.getPointPosition(e, s + n + a, o), h = Math.round(Y(G(l.angle + E))), c = function (t, e, i) { 90 === i || 270 === i ? t -= e / 2 : (i > 270 || i < 90) && (t -= e); return t }(l.y, r.h, h), d = function (t) { if (0 === t || 180 === t) return "center"; if (t < 180) return "left"; return "right" }(h), u = function (t, e, i) { "right" === i ? t -= e : "center" === i && (t -= e / 2); return t }(l.x, r.w, d); return { visible: !0, x: l.x, y: c, textAlign: d, left: u, top: c, right: u + r.w, bottom: c + r.h } } function Ao(t, e) { if (!e) return !0; const { left: i, top: s, right: n, bottom: o } = t; return !(Re({ x: i, y: s }, e) || Re({ x: i, y: o }, e) || Re({ x: n, y: s }, e) || Re({ x: n, y: o }, e)) } function To(t, e, i) { const { left: n, top: o, right: a, bottom: r } = i, { backdropColor: l } = e; if (!s(l)) { const i = wi(e.borderRadius), s = ki(e.backdropPadding); t.fillStyle = l; const h = n - s.left, c = o - s.top, d = a - n + s.width, u = r - o + s.height; Object.values(i).some((t => 0 !== t)) ? (t.beginPath(), He(t, { x: h, y: c, w: d, h: u, radius: i }), t.fill()) : t.fillRect(h, c, d, u) } } function Lo(t, e, i, s) { const { ctx: n } = t; if (i) n.arc(t.xCenter, t.yCenter, e, 0, O); else { let i = t.getPointPosition(0, e); n.moveTo(i.x, i.y); for (let o = 1; o < s; o++)i = t.getPointPosition(o, e), n.lineTo(i.x, i.y) } } class Eo extends xo { static id = "radialLinear"; static defaults = { display: !0, animate: !0, position: "chartArea", angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 }, grid: { circular: !1 }, startAngle: 0, ticks: { showLabelBackdrop: !0, callback: ae.formatters.numeric }, pointLabels: { backdropColor: void 0, backdropPadding: 2, display: !0, font: { size: 10 }, callback: t => t, padding: 5, centerPointLabels: !1 } }; static defaultRoutes = { "angleLines.color": "borderColor", "pointLabels.color": "color", "ticks.color": "color" }; static descriptors = { angleLines: { _fallback: "grid" } }; constructor(t) { super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [] } setDimensions() { const t = this._padding = ki(So(this.options) / 2), e = this.width = this.maxWidth - t.width, i = this.height = this.maxHeight - t.height; this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, i) / 2) } determineDataLimits() { const { min: t, max: e } = this.getMinMax(!1); this.min = a(t) && !isNaN(t) ? t : 0, this.max = a(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions() } computeTickLimit() { return Math.ceil(this.drawingArea / So(this.options)) } generateTickLabels(t) { xo.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map(((t, e) => { const i = d(this.options.pointLabels.callback, [t, e], this); return i || 0 === i ? i : "" })).filter(((t, e) => this.chart.getDataVisibility(e))) } fit() { const t = this.options; t.display && t.pointLabels.display ? Do(this) : this.setCenterPoint(0, 0, 0, 0) } setCenterPoint(t, e, i, s) { this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - s) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s)) } getIndexAngle(t) { return G(t * (O / (this._pointLabels.length || 1)) + $(this.options.startAngle || 0)) } getDistanceFromCenterForValue(t) { if (s(t)) return NaN; const e = this.drawingArea / (this.max - this.min); return this.options.reverse ? (this.max - t) * e : (t - this.min) * e } getValueForDistanceFromCenter(t) { if (s(t)) return NaN; const e = t / (this.drawingArea / (this.max - this.min)); return this.options.reverse ? this.max - e : this.min + e } getPointLabelContext(t) { const e = this._pointLabels || []; if (t >= 0 && t < e.length) { const i = e[t]; return function (t, e, i) { return Ci(t, { label: i, index: e, type: "pointLabel" }) }(this.getContext(), t, i) } } getPointPosition(t, e, i = 0) { const s = this.getIndexAngle(t) - E + i; return { x: Math.cos(s) * e + this.xCenter, y: Math.sin(s) * e + this.yCenter, angle: s } } getPointPositionForValue(t, e) { return this.getPointPosition(t, this.getDistanceFromCenterForValue(e)) } getBasePosition(t) { return this.getPointPositionForValue(t || 0, this.getBaseValue()) } getPointLabelPosition(t) { const { left: e, top: i, right: s, bottom: n } = this._pointLabelItems[t]; return { left: e, top: i, right: s, bottom: n } } drawBackground() { const { backgroundColor: t, grid: { circular: e } } = this.options; if (t) { const i = this.ctx; i.save(), i.beginPath(), Lo(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), i.closePath(), i.fillStyle = t, i.fill(), i.restore() } } drawGrid() { const t = this.ctx, e = this.options, { angleLines: i, grid: s, border: n } = e, o = this._pointLabels.length; let a, r, l; if (e.pointLabels.display && function (t, e) { const { ctx: i, options: { pointLabels: s } } = t; for (let n = e - 1; n >= 0; n--) { const e = t._pointLabelItems[n]; if (!e.visible) continue; const o = s.setContext(t.getPointLabelContext(n)); To(i, o, e); const a = Si(o.font), { x: r, y: l, textAlign: h } = e; Ne(i, t._pointLabels[n], r, l + a.lineHeight / 2, a, { color: o.color, textAlign: h, textBaseline: "middle" }) } }(this, o), s.display && this.ticks.forEach(((t, e) => { if (0 !== e || 0 === e && this.min < 0) { r = this.getDistanceFromCenterForValue(t.value); const i = this.getContext(e), a = s.setContext(i), l = n.setContext(i); !function (t, e, i, s, n) { const o = t.ctx, a = e.circular, { color: r, lineWidth: l } = e; !a && !s || !r || !l || i < 0 || (o.save(), o.strokeStyle = r, o.lineWidth = l, o.setLineDash(n.dash), o.lineDashOffset = n.dashOffset, o.beginPath(), Lo(t, i, a, s), o.closePath(), o.stroke(), o.restore()) }(this, a, r, o, l) } })), i.display) { for (t.save(), a = o - 1; a >= 0; a--) { const s = i.setContext(this.getPointLabelContext(a)), { color: n, lineWidth: o } = s; o && n && (t.lineWidth = o, t.strokeStyle = n, t.setLineDash(s.borderDash), t.lineDashOffset = s.borderDashOffset, r = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), l = this.getPointPosition(a, r), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(l.x, l.y), t.stroke()) } t.restore() } } drawBorder() { } drawLabels() { const t = this.ctx, e = this.options, i = e.ticks; if (!i.display) return; const s = this.getIndexAngle(0); let n, o; t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(s), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach(((s, a) => { if (0 === a && this.min >= 0 && !e.reverse) return; const r = i.setContext(this.getContext(a)), l = Si(r.font); if (n = this.getDistanceFromCenterForValue(this.ticks[a].value), r.showLabelBackdrop) { t.font = l.string, o = t.measureText(s.label).width, t.fillStyle = r.backdropColor; const e = ki(r.backdropPadding); t.fillRect(-o / 2 - e.left, -n - l.size / 2 - e.top, o + e.width, l.size + e.height) } Ne(t, s.label, 0, -n, l, { color: r.color, strokeColor: r.textStrokeColor, strokeWidth: r.textStrokeWidth }) })), t.restore() } drawTitle() { } } const Ro = { millisecond: { common: !0, size: 1, steps: 1e3 }, second: { common: !0, size: 1e3, steps: 60 }, minute: { common: !0, size: 6e4, steps: 60 }, hour: { common: !0, size: 36e5, steps: 24 }, day: { common: !0, size: 864e5, steps: 30 }, week: { common: !1, size: 6048e5, steps: 4 }, month: { common: !0, size: 2628e6, steps: 12 }, quarter: { common: !1, size: 7884e6, steps: 4 }, year: { common: !0, size: 3154e7 } }, Io = Object.keys(Ro); function zo(t, e) { return t - e } function Fo(t, e) { if (s(e)) return null; const i = t._adapter, { parser: n, round: o, isoWeekday: r } = t._parseOpts; let l = e; return "function" == typeof n && (l = n(l)), a(l) || (l = "string" == typeof n ? i.parse(l, n) : i.parse(l)), null === l ? null : (o && (l = "week" !== o || !N(r) && !0 !== r ? i.startOf(l, o) : i.startOf(l, "isoWeek", r)), +l) } function Vo(t, e, i, s) { const n = Io.length; for (let o = Io.indexOf(t); o < n - 1; ++o) { const t = Ro[Io[o]], n = t.steps ? t.steps : Number.MAX_SAFE_INTEGER; if (t.common && Math.ceil((i - e) / (n * t.size)) <= s) return Io[o] } return Io[n - 1] } function Bo(t, e, i) { if (i) { if (i.length) { const { lo: s, hi: n } = et(i, e); t[i[s] >= e ? i[s] : i[n]] = !0 } } else t[e] = !0 } function Wo(t, e, i) { const s = [], n = {}, o = e.length; let a, r; for (a = 0; a < o; ++a)r = e[a], n[r] = a, s.push({ value: r, major: !1 }); return 0 !== o && i ? function (t, e, i, s) { const n = t._adapter, o = +n.startOf(e[0].value, s), a = e[e.length - 1].value; let r, l; for (r = o; r <= a; r = +n.add(r, 1, s))l = i[r], l >= 0 && (e[l].major = !0); return e }(t, s, n, i) : s } class No extends Js { static id = "time"; static defaults = { bounds: "data", adapters: {}, time: { parser: !1, unit: !1, round: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {} }, ticks: { source: "auto", callback: !1, major: { enabled: !1 } } }; constructor(t) { super(t), this._cache = { data: [], labels: [], all: [] }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0 } init(t, e = {}) { const i = t.time || (t.time = {}), s = this._adapter = new Rn._date(t.adapters.date); s.init(e), b(i.displayFormats, s.formats()), this._parseOpts = { parser: i.parser, round: i.round, isoWeekday: i.isoWeekday }, super.init(t), this._normalized = e.normalized } parse(t, e) { return void 0 === t ? null : Fo(this, t) } beforeLayout() { super.beforeLayout(), this._cache = { data: [], labels: [], all: [] } } determineDataLimits() { const t = this.options, e = this._adapter, i = t.time.unit || "day"; let { min: s, max: n, minDefined: o, maxDefined: r } = this.getUserBounds(); function l(t) { o || isNaN(t.min) || (s = Math.min(s, t.min)), r || isNaN(t.max) || (n = Math.max(n, t.max)) } o && r || (l(this._getLabelBounds()), "ticks" === t.bounds && "labels" === t.ticks.source || l(this.getMinMax(!1))), s = a(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i), n = a(n) && !isNaN(n) ? n : +e.endOf(Date.now(), i) + 1, this.min = Math.min(s, n - 1), this.max = Math.max(s + 1, n) } _getLabelBounds() { const t = this.getLabelTimestamps(); let e = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY; return t.length && (e = t[0], i = t[t.length - 1]), { min: e, max: i } } buildTicks() { const t = this.options, e = t.time, i = t.ticks, s = "labels" === i.source ? this.getLabelTimestamps() : this._generate(); "ticks" === t.bounds && s.length && (this.min = this._userMin || s[0], this.max = this._userMax || s[s.length - 1]); const n = this.min, o = nt(s, n, this.max); return this._unit = e.unit || (i.autoSkip ? Vo(e.minUnit, this.min, this.max, this._getLabelCapacity(n)) : function (t, e, i, s, n) { for (let o = Io.length - 1; o >= Io.indexOf(i); o--) { const i = Io[o]; if (Ro[i].common && t._adapter.diff(n, s, i) >= e - 1) return i } return Io[i ? Io.indexOf(i) : 0] }(this, o.length, e.minUnit, this.min, this.max)), this._majorUnit = i.major.enabled && "year" !== this._unit ? function (t) { for (let e = Io.indexOf(t) + 1, i = Io.length; e < i; ++e)if (Ro[Io[e]].common) return Io[e] }(this._unit) : void 0, this.initOffsets(s), t.reverse && o.reverse(), Wo(this, o, this._majorUnit) } afterAutoSkip() { this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t => +t.value))) } initOffsets(t = []) { let e, i, s = 0, n = 0; this.options.offset && t.length && (e = this.getDecimalForValue(t[0]), s = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2, i = this.getDecimalForValue(t[t.length - 1]), n = 1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2); const o = t.length < 3 ? .5 : .25; s = J(s, 0, o), n = J(n, 0, o), this._offsets = { start: s, end: n, factor: 1 / (s + 1 + n) } } _generate() { const t = this._adapter, e = this.min, i = this.max, s = this.options, n = s.time, o = n.unit || Vo(n.minUnit, e, i, this._getLabelCapacity(e)), a = l(s.ticks.stepSize, 1), r = "week" === o && n.isoWeekday, h = N(r) || !0 === r, c = {}; let d, u, f = e; if (h && (f = +t.startOf(f, "isoWeek", r)), f = +t.startOf(f, h ? "day" : o), t.diff(i, e, o) > 1e5 * a) throw new Error(e + " and " + i + " are too far apart with stepSize of " + a + " " + o); const g = "data" === s.ticks.source && this.getDataTimestamps(); for (d = f, u = 0; d < i; d = +t.add(d, a, o), u++)Bo(c, d, g); return d !== i && "ticks" !== s.bounds && 1 !== u || Bo(c, d, g), Object.keys(c).sort(zo).map((t => +t)) } getLabelForValue(t) { const e = this._adapter, i = this.options.time; return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime) } format(t, e) { const i = this.options.time.displayFormats, s = this._unit, n = e || i[s]; return this._adapter.format(t, n) } _tickFormatFunction(t, e, i, s) { const n = this.options, o = n.ticks.callback; if (o) return d(o, [t, e, i], this); const a = n.time.displayFormats, r = this._unit, l = this._majorUnit, h = r && a[r], c = l && a[l], u = i[e], f = l && c && u && u.major; return this._adapter.format(t, s || (f ? c : h)) } generateTickLabels(t) { let e, i, s; for (e = 0, i = t.length; e < i; ++e)s = t[e], s.label = this._tickFormatFunction(s.value, e, t) } getDecimalForValue(t) { return null === t ? NaN : (t - this.min) / (this.max - this.min) } getPixelForValue(t) { const e = this._offsets, i = this.getDecimalForValue(t); return this.getPixelForDecimal((e.start + i) * e.factor) } getValueForPixel(t) { const e = this._offsets, i = this.getDecimalForPixel(t) / e.factor - e.end; return this.min + i * (this.max - this.min) } _getLabelSize(t) { const e = this.options.ticks, i = this.ctx.measureText(t).width, s = $(this.isHorizontal() ? e.maxRotation : e.minRotation), n = Math.cos(s), o = Math.sin(s), a = this._resolveTickFontOptions(0).size; return { w: i * n + a * o, h: i * o + a * n } } _getLabelCapacity(t) { const e = this.options.time, i = e.displayFormats, s = i[e.unit] || i.millisecond, n = this._tickFormatFunction(t, 0, Wo(this, [t], this._majorUnit), s), o = this._getLabelSize(n), a = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1; return a > 0 ? a : 1 } getDataTimestamps() { let t, e, i = this._cache.data || []; if (i.length) return i; const s = this.getMatchingVisibleMetas(); if (this._normalized && s.length) return this._cache.data = s[0].controller.getAllParsedValues(this); for (t = 0, e = s.length; t < e; ++t)i = i.concat(s[t].controller.getAllParsedValues(this)); return this._cache.data = this.normalize(i) } getLabelTimestamps() { const t = this._cache.labels || []; let e, i; if (t.length) return t; const s = this.getLabels(); for (e = 0, i = s.length; e < i; ++e)t.push(Fo(this, s[e])); return this._cache.labels = this._normalized ? t : this.normalize(t) } normalize(t) { return lt(t.sort(zo)) } } function Ho(t, e, i) { let s, n, o, a, r = 0, l = t.length - 1; i ? (e >= t[r].pos && e <= t[l].pos && ({ lo: r, hi: l } = it(t, "pos", e)), ({ pos: s, time: o } = t[r]), ({ pos: n, time: a } = t[l])) : (e >= t[r].time && e <= t[l].time && ({ lo: r, hi: l } = it(t, "time", e)), ({ time: s, pos: o } = t[r]), ({ time: n, pos: a } = t[l])); const h = n - s; return h ? o + (a - o) * (e - s) / h : o } var jo = Object.freeze({ __proto__: null, CategoryScale: class extends Js { static id = "category"; static defaults = { ticks: { callback: po } }; constructor(t) { super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [] } init(t) { const e = this._addedLabels; if (e.length) { const t = this.getLabels(); for (const { index: i, label: s } of e) t[i] === s && t.splice(i, 1); this._addedLabels = [] } super.init(t) } parse(t, e) { if (s(t)) return null; const i = this.getLabels(); return ((t, e) => null === t ? null : J(Math.round(t), 0, e))(e = isFinite(e) && i[e] === t ? e : go(i, t, l(e, t), this._addedLabels), i.length - 1) } determineDataLimits() { const { minDefined: t, maxDefined: e } = this.getUserBounds(); let { min: i, max: s } = this.getMinMax(!0); "ticks" === this.options.bounds && (t || (i = 0), e || (s = this.getLabels().length - 1)), this.min = i, this.max = s } buildTicks() { const t = this.min, e = this.max, i = this.options.offset, s = []; let n = this.getLabels(); n = 0 === t && e === n.length - 1 ? n : n.slice(t, e + 1), this._valueRange = Math.max(n.length - (i ? 0 : 1), 1), this._startValue = this.min - (i ? .5 : 0); for (let i = t; i <= e; i++)s.push({ value: i }); return s } getLabelForValue(t) { return po.call(this, t) } configure() { super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels) } getPixelForValue(t) { return "number" != typeof t && (t = this.parse(t)), null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange) } getPixelForTick(t) { const e = this.ticks; return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value) } getValueForPixel(t) { return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange) } getBasePixel() { return this.bottom } }, LinearScale: bo, LogarithmicScale: ko, RadialLinearScale: Eo, TimeScale: No, TimeSeriesScale: class extends No { static id = "timeseries"; static defaults = No.defaults; constructor(t) { super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0 } initOffsets() { const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t); this._minPos = Ho(e, this.min), this._tableRange = Ho(e, this.max) - this._minPos, super.initOffsets(t) } buildLookupTable(t) { const { min: e, max: i } = this, s = [], n = []; let o, a, r, l, h; for (o = 0, a = t.length; o < a; ++o)l = t[o], l >= e && l <= i && s.push(l); if (s.length < 2) return [{ time: e, pos: 0 }, { time: i, pos: 1 }]; for (o = 0, a = s.length; o < a; ++o)h = s[o + 1], r = s[o - 1], l = s[o], Math.round((h + r) / 2) !== l && n.push({ time: l, pos: o / (a - 1) }); return n } _generate() { const t = this.min, e = this.max; let i = super.getDataTimestamps(); return i.includes(t) && i.length || i.splice(0, 0, t), i.includes(e) && 1 !== i.length || i.push(e), i.sort(((t, e) => t - e)) } _getTimestampsForTable() { let t = this._cache.all || []; if (t.length) return t; const e = this.getDataTimestamps(), i = this.getLabelTimestamps(); return t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i, t = this._cache.all = t, t } getDecimalForValue(t) { return (Ho(this._table, t) - this._minPos) / this._tableRange } getValueForPixel(t) { const e = this._offsets, i = this.getDecimalForPixel(t) / e.factor - e.end; return Ho(this._table, i * this._tableRange + this._minPos, !0) } } }); const $o = ["rgb(54, 162, 235)", "rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"], Yo = $o.map((t => t.replace("rgb(", "rgba(").replace(")", ", 0.5)"))); function Uo(t) { return $o[t % $o.length] } function Xo(t) { return Yo[t % Yo.length] } function qo(t) { let e = 0; return (i, s) => { const n = t.getDatasetMeta(s).controller; n instanceof jn ? e = function (t, e) { return t.backgroundColor = t.data.map((() => Uo(e++))), e }(i, e) : n instanceof $n ? e = function (t, e) { return t.backgroundColor = t.data.map((() => Xo(e++))), e }(i, e) : n && (e = function (t, e) { return t.borderColor = Uo(e), t.backgroundColor = Xo(e), ++e }(i, e)) } } function Ko(t) { let e; for (e in t) if (t[e].borderColor || t[e].backgroundColor) return !0; return !1 } var Go = { id: "colors", defaults: { enabled: !0, forceOverride: !1 }, beforeLayout(t, e, i) { if (!i.enabled) return; const { data: { datasets: s }, options: n } = t.config, { elements: o } = n; if (!i.forceOverride && (Ko(s) || (a = n) && (a.borderColor || a.backgroundColor) || o && Ko(o))) return; var a; const r = qo(t); s.forEach(r) } }; function Zo(t) { if (t._decimated) { const e = t._data; delete t._decimated, delete t._data, Object.defineProperty(t, "data", { configurable: !0, enumerable: !0, writable: !0, value: e }) } } function Jo(t) { t.data.datasets.forEach((t => { Zo(t) })) } var Qo = { id: "decimation", defaults: { algorithm: "min-max", enabled: !1 }, beforeElementsUpdate: (t, e, i) => { if (!i.enabled) return void Jo(t); const n = t.width; t.data.datasets.forEach(((e, o) => { const { _data: a, indexAxis: r } = e, l = t.getDatasetMeta(o), h = a || e.data; if ("y" === Pi([r, t.options.indexAxis])) return; if (!l.controller.supportsDecimation) return; const c = t.scales[l.xAxisID]; if ("linear" !== c.type && "time" !== c.type) return; if (t.options.parsing) return; let { start: d, count: u } = function (t, e) { const i = e.length; let s, n = 0; const { iScale: o } = t, { min: a, max: r, minDefined: l, maxDefined: h } = o.getUserBounds(); return l && (n = J(it(e, o.axis, a).lo, 0, i - 1)), s = h ? J(it(e, o.axis, r).hi + 1, n, i) - n : i - n, { start: n, count: s } }(l, h); if (u <= (i.threshold || 4 * n)) return void Zo(e); let f; switch (s(a) && (e._data = h, delete e.data, Object.defineProperty(e, "data", { configurable: !0, enumerable: !0, get: function () { return this._decimated }, set: function (t) { this._data = t } })), i.algorithm) { case "lttb": f = function (t, e, i, s, n) { const o = n.samples || s; if (o >= i) return t.slice(e, e + i); const a = [], r = (i - 2) / (o - 2); let l = 0; const h = e + i - 1; let c, d, u, f, g, p = e; for (a[l++] = t[p], c = 0; c < o - 2; c++) { let s, n = 0, o = 0; const h = Math.floor((c + 1) * r) + 1 + e, m = Math.min(Math.floor((c + 2) * r) + 1, i) + e, x = m - h; for (s = h; s < m; s++)n += t[s].x, o += t[s].y; n /= x, o /= x; const b = Math.floor(c * r) + 1 + e, _ = Math.min(Math.floor((c + 1) * r) + 1, i) + e, { x: y, y: v } = t[p]; for (u = f = -1, s = b; s < _; s++)f = .5 * Math.abs((y - n) * (t[s].y - v) - (y - t[s].x) * (o - v)), f > u && (u = f, d = t[s], g = s); a[l++] = d, p = g } return a[l++] = t[h], a }(h, d, u, n, i); break; case "min-max": f = function (t, e, i, n) { let o, a, r, l, h, c, d, u, f, g, p = 0, m = 0; const x = [], b = e + i - 1, _ = t[e].x, y = t[b].x - _; for (o = e; o < e + i; ++o) { a = t[o], r = (a.x - _) / y * n, l = a.y; const e = 0 | r; if (e === h) l < f ? (f = l, c = o) : l > g && (g = l, d = o), p = (m * p + a.x) / ++m; else { const i = o - 1; if (!s(c) && !s(d)) { const e = Math.min(c, d), s = Math.max(c, d); e !== u && e !== i && x.push({ ...t[e], x: p }), s !== u && s !== i && x.push({ ...t[s], x: p }) } o > 0 && i !== u && x.push(t[i]), x.push(a), h = e, m = 0, f = g = l, c = d = u = o } } return x }(h, d, u, n); break; default: throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`) }e._decimated = f })) }, destroy(t) { Jo(t) } }; function ta(t, e, i, s) { if (s) return; let n = e[t], o = i[t]; return "angle" === t && (n = G(n), o = G(o)), { property: t, start: n, end: o } } function ea(t, e, i) { for (; e > t; e--) { const t = i[e]; if (!isNaN(t.x) && !isNaN(t.y)) break } return e } function ia(t, e, i, s) { return t && e ? s(t[i], e[i]) : t ? t[i] : e ? e[i] : 0 } function sa(t, e) { let i = [], s = !1; return n(t) ? (s = !0, i = t) : i = function (t, e) { const { x: i = null, y: s = null } = t || {}, n = e.points, o = []; return e.segments.forEach((({ start: t, end: e }) => { e = ea(t, e, n); const a = n[t], r = n[e]; null !== s ? (o.push({ x: a.x, y: s }), o.push({ x: r.x, y: s })) : null !== i && (o.push({ x: i, y: a.y }), o.push({ x: i, y: r.y })) })), o }(t, e), i.length ? new no({ points: i, options: { tension: 0 }, _loop: s, _fullLoop: s }) : null } function na(t) { return t && !1 !== t.fill } function oa(t, e, i) { let s = t[e].fill; const n = [e]; let o; if (!i) return s; for (; !1 !== s && -1 === n.indexOf(s);) { if (!a(s)) return s; if (o = t[s], !o) return !1; if (o.visible) return s; n.push(s), s = o.fill } return !1 } function aa(t, e, i) { const s = function (t) { const e = t.options, i = e.fill; let s = l(i && i.target, i); void 0 === s && (s = !!e.backgroundColor); if (!1 === s || null === s) return !1; if (!0 === s) return "origin"; return s }(t); if (o(s)) return !isNaN(s.value) && s; let n = parseFloat(s); return a(n) && Math.floor(n) === n ? function (t, e, i, s) { "-" !== t && "+" !== t || (i = e + i); if (i === e || i < 0 || i >= s) return !1; return i }(s[0], e, n, i) : ["origin", "start", "end", "stack", "shape"].indexOf(s) >= 0 && s } function ra(t, e, i) { const s = []; for (let n = 0; n < i.length; n++) { const o = i[n], { first: a, last: r, point: l } = la(o, e, "x"); if (!(!l || a && r)) if (a) s.unshift(l); else if (t.push(l), !r) break } t.push(...s) } function la(t, e, i) { const s = t.interpolate(e, i); if (!s) return {}; const n = s[i], o = t.segments, a = t.points; let r = !1, l = !1; for (let t = 0; t < o.length; t++) { const e = o[t], s = a[e.start][i], h = a[e.end][i]; if (tt(n, s, h)) { r = n === s, l = n === h; break } } return { first: r, last: l, point: s } } class ha { constructor(t) { this.x = t.x, this.y = t.y, this.radius = t.radius } pathSegment(t, e, i) { const { x: s, y: n, radius: o } = this; return e = e || { start: 0, end: O }, t.arc(s, n, o, e.end, e.start, !0), !i.bounds } interpolate(t) { const { x: e, y: i, radius: s } = this, n = t.angle; return { x: e + Math.cos(n) * s, y: i + Math.sin(n) * s, angle: n } } } function ca(t) { const { chart: e, fill: i, line: s } = t; if (a(i)) return function (t, e) { const i = t.getDatasetMeta(e), s = i && t.isDatasetVisible(e); return s ? i.dataset : null }(e, i); if ("stack" === i) return function (t) { const { scale: e, index: i, line: s } = t, n = [], o = s.segments, a = s.points, r = function (t, e) { const i = [], s = t.getMatchingVisibleMetas("line"); for (let t = 0; t < s.length; t++) { const n = s[t]; if (n.index === e) break; n.hidden || i.unshift(n.dataset) } return i }(e, i); r.push(sa({ x: null, y: e.bottom }, s)); for (let t = 0; t < o.length; t++) { const e = o[t]; for (let t = e.start; t <= e.end; t++)ra(n, a[t], r) } return new no({ points: n, options: {} }) }(t); if ("shape" === i) return !0; const n = function (t) { const e = t.scale || {}; if (e.getPointPositionForValue) return function (t) { const { scale: e, fill: i } = t, s = e.options, n = e.getLabels().length, a = s.reverse ? e.max : e.min, r = function (t, e, i) { let s; return s = "start" === t ? i : "end" === t ? e.options.reverse ? e.min : e.max : o(t) ? t.value : e.getBaseValue(), s }(i, e, a), l = []; if (s.grid.circular) { const t = e.getPointPositionForValue(0, a); return new ha({ x: t.x, y: t.y, radius: e.getDistanceFromCenterForValue(r) }) } for (let t = 0; t < n; ++t)l.push(e.getPointPositionForValue(t, r)); return l }(t); return function (t) { const { scale: e = {}, fill: i } = t, s = function (t, e) { let i = null; return "start" === t ? i = e.bottom : "end" === t ? i = e.top : o(t) ? i = e.getPixelForValue(t.value) : e.getBasePixel && (i = e.getBasePixel()), i }(i, e); if (a(s)) { const t = e.isHorizontal(); return { x: t ? s : null, y: t ? null : s } } return null }(t) }(t); return n instanceof ha ? n : sa(n, s) } function da(t, e, i) { const s = ca(e), { line: n, scale: o, axis: a } = e, r = n.options, l = r.fill, h = r.backgroundColor, { above: c = h, below: d = h } = l || {}; s && n.points.length && (Ie(t, i), function (t, e) { const { line: i, target: s, above: n, below: o, area: a, scale: r } = e, l = i._loop ? "angle" : e.axis; t.save(), "x" === l && o !== n && (ua(t, s, a.top), fa(t, { line: i, target: s, color: n, scale: r, property: l }), t.restore(), t.save(), ua(t, s, a.bottom)); fa(t, { line: i, target: s, color: o, scale: r, property: l }), t.restore() }(t, { line: n, target: s, above: c, below: d, area: i, scale: o, axis: a }), ze(t)) } function ua(t, e, i) { const { segments: s, points: n } = e; let o = !0, a = !1; t.beginPath(); for (const r of s) { const { start: s, end: l } = r, h = n[s], c = n[ea(s, l, n)]; o ? (t.moveTo(h.x, h.y), o = !1) : (t.lineTo(h.x, i), t.lineTo(h.x, h.y)), a = !!e.pathSegment(t, r, { move: a }), a ? t.closePath() : t.lineTo(c.x, i) } t.lineTo(e.first().x, i), t.closePath(), t.clip() } function fa(t, e) { const { line: i, target: s, property: n, color: o, scale: a } = e, r = function (t, e, i) { const s = t.segments, n = t.points, o = e.points, a = []; for (const t of s) { let { start: s, end: r } = t; r = ea(s, r, n); const l = ta(i, n[s], n[r], t.loop); if (!e.segments) { a.push({ source: t, target: l, start: n[s], end: n[r] }); continue } const h = Ii(e, l); for (const e of h) { const s = ta(i, o[e.start], o[e.end], e.loop), r = Ri(t, n, s); for (const t of r) a.push({ source: t, target: e, start: { [i]: ia(l, s, "start", Math.max) }, end: { [i]: ia(l, s, "end", Math.min) } }) } } return a }(i, s, n); for (const { source: e, target: l, start: h, end: c } of r) { const { style: { backgroundColor: r = o } = {} } = e, d = !0 !== s; t.save(), t.fillStyle = r, ga(t, a, d && ta(n, h, c)), t.beginPath(); const u = !!i.pathSegment(t, e); let f; if (d) { u ? t.closePath() : pa(t, s, c, n); const e = !!s.pathSegment(t, l, { move: u, reverse: !0 }); f = u && e, f || pa(t, s, h, n) } t.closePath(), t.fill(f ? "evenodd" : "nonzero"), t.restore() } } function ga(t, e, i) { const { top: s, bottom: n } = e.chart.chartArea, { property: o, start: a, end: r } = i || {}; "x" === o && (t.beginPath(), t.rect(a, s, r - a, n - s), t.clip()) } function pa(t, e, i, s) { const n = e.interpolate(i, s); n && t.lineTo(n.x, n.y) } var ma = { id: "filler", afterDatasetsUpdate(t, e, i) { const s = (t.data.datasets || []).length, n = []; let o, a, r, l; for (a = 0; a < s; ++a)o = t.getDatasetMeta(a), r = o.dataset, l = null, r && r.options && r instanceof no && (l = { visible: t.isDatasetVisible(a), index: a, fill: aa(r, a, s), chart: t, axis: o.controller.options.indexAxis, scale: o.vScale, line: r }), o.$filler = l, n.push(l); for (a = 0; a < s; ++a)l = n[a], l && !1 !== l.fill && (l.fill = oa(n, a, i.propagate)) }, beforeDraw(t, e, i) { const s = "beforeDraw" === i.drawTime, n = t.getSortedVisibleDatasetMetas(), o = t.chartArea; for (let e = n.length - 1; e >= 0; --e) { const i = n[e].$filler; i && (i.line.updateControlPoints(o, i.axis), s && i.fill && da(t.ctx, i, o)) } }, beforeDatasetsDraw(t, e, i) { if ("beforeDatasetsDraw" !== i.drawTime) return; const s = t.getSortedVisibleDatasetMetas(); for (let e = s.length - 1; e >= 0; --e) { const i = s[e].$filler; na(i) && da(t.ctx, i, t.chartArea) } }, beforeDatasetDraw(t, e, i) { const s = e.meta.$filler; na(s) && "beforeDatasetDraw" === i.drawTime && da(t.ctx, s, t.chartArea) }, defaults: { propagate: !0, drawTime: "beforeDatasetDraw" } }; const xa = (t, e) => { let { boxHeight: i = e, boxWidth: s = e } = t; return t.usePointStyle && (i = Math.min(i, e), s = t.pointStyleWidth || Math.min(s, e)), { boxWidth: s, boxHeight: i, itemHeight: Math.max(e, i) } }; class ba extends Hs { constructor(t) { super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0 } update(t, e, i) { this.maxWidth = t, this.maxHeight = e, this._margins = i, this.setDimensions(), this.buildLabels(), this.fit() } setDimensions() { this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height) } buildLabels() { const t = this.options.labels || {}; let e = d(t.generateLabels, [this.chart], this) || []; t.filter && (e = e.filter((e => t.filter(e, this.chart.data)))), t.sort && (e = e.sort(((e, i) => t.sort(e, i, this.chart.data)))), this.options.reverse && e.reverse(), this.legendItems = e } fit() { const { options: t, ctx: e } = this; if (!t.display) return void (this.width = this.height = 0); const i = t.labels, s = Si(i.font), n = s.size, o = this._computeTitleHeight(), { boxWidth: a, itemHeight: r } = xa(i, n); let l, h; e.font = s.string, this.isHorizontal() ? (l = this.maxWidth, h = this._fitRows(o, n, a, r) + 10) : (h = this.maxHeight, l = this._fitCols(o, s, a, r) + 10), this.width = Math.min(l, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight) } _fitRows(t, e, i, s) { const { ctx: n, maxWidth: o, options: { labels: { padding: a } } } = this, r = this.legendHitBoxes = [], l = this.lineWidths = [0], h = s + a; let c = t; n.textAlign = "left", n.textBaseline = "middle"; let d = -1, u = -h; return this.legendItems.forEach(((t, f) => { const g = i + e / 2 + n.measureText(t.text).width; (0 === f || l[l.length - 1] + g + 2 * a > o) && (c += h, l[l.length - (f > 0 ? 0 : 1)] = 0, u += h, d++), r[f] = { left: 0, top: u, row: d, width: g, height: s }, l[l.length - 1] += g + a })), c } _fitCols(t, e, i, s) { const { ctx: n, maxHeight: o, options: { labels: { padding: a } } } = this, r = this.legendHitBoxes = [], l = this.columnSizes = [], h = o - t; let c = a, d = 0, u = 0, f = 0, g = 0; return this.legendItems.forEach(((t, o) => { const { itemWidth: p, itemHeight: m } = function (t, e, i, s, n) { const o = function (t, e, i, s) { let n = t.text; n && "string" != typeof n && (n = n.reduce(((t, e) => t.length > e.length ? t : e))); return e + i.size / 2 + s.measureText(n).width }(s, t, e, i), a = function (t, e, i) { let s = t; "string" != typeof e.text && (s = _a(e, i)); return s }(n, s, e.lineHeight); return { itemWidth: o, itemHeight: a } }(i, e, n, t, s); o > 0 && u + m + 2 * a > h && (c += d + a, l.push({ width: d, height: u }), f += d + a, g++, d = u = 0), r[o] = { left: f, top: u, col: g, width: p, height: m }, d = Math.max(d, p), u += m + a })), c += d, l.push({ width: d, height: u }), c } adjustHitBoxes() { if (!this.options.display) return; const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: i, labels: { padding: s }, rtl: n } } = this, o = Oi(n, this.left, this.width); if (this.isHorizontal()) { let n = 0, a = ft(i, this.left + s, this.right - this.lineWidths[n]); for (const r of e) n !== r.row && (n = r.row, a = ft(i, this.left + s, this.right - this.lineWidths[n])), r.top += this.top + t + s, r.left = o.leftForLtr(o.x(a), r.width), a += r.width + s } else { let n = 0, a = ft(i, this.top + t + s, this.bottom - this.columnSizes[n].height); for (const r of e) r.col !== n && (n = r.col, a = ft(i, this.top + t + s, this.bottom - this.columnSizes[n].height)), r.top = a, r.left += this.left + s, r.left = o.leftForLtr(o.x(r.left), r.width), a += r.height + s } } isHorizontal() { return "top" === this.options.position || "bottom" === this.options.position } draw() { if (this.options.display) { const t = this.ctx; Ie(t, this), this._draw(), ze(t) } } _draw() { const { options: t, columnSizes: e, lineWidths: i, ctx: s } = this, { align: n, labels: o } = t, a = ue.color, r = Oi(t.rtl, this.left, this.width), h = Si(o.font), { padding: c } = o, d = h.size, u = d / 2; let f; this.drawTitle(), s.textAlign = r.textAlign("left"), s.textBaseline = "middle", s.lineWidth = .5, s.font = h.string; const { boxWidth: g, boxHeight: p, itemHeight: m } = xa(o, d), x = this.isHorizontal(), b = this._computeTitleHeight(); f = x ? { x: ft(n, this.left + c, this.right - i[0]), y: this.top + c + b, line: 0 } : { x: this.left + c, y: ft(n, this.top + b + c, this.bottom - e[0].height), line: 0 }, Ai(this.ctx, t.textDirection); const _ = m + c; this.legendItems.forEach(((y, v) => { s.strokeStyle = y.fontColor, s.fillStyle = y.fontColor; const M = s.measureText(y.text).width, w = r.textAlign(y.textAlign || (y.textAlign = o.textAlign)), k = g + u + M; let S = f.x, P = f.y; r.setWidth(this.width), x ? v > 0 && S + k + c > this.right && (P = f.y += _, f.line++, S = f.x = ft(n, this.left + c, this.right - i[f.line])) : v > 0 && P + _ > this.bottom && (S = f.x = S + e[f.line].width + c, f.line++, P = f.y = ft(n, this.top + b + c, this.bottom - e[f.line].height)); if (function (t, e, i) { if (isNaN(g) || g <= 0 || isNaN(p) || p < 0) return; s.save(); const n = l(i.lineWidth, 1); if (s.fillStyle = l(i.fillStyle, a), s.lineCap = l(i.lineCap, "butt"), s.lineDashOffset = l(i.lineDashOffset, 0), s.lineJoin = l(i.lineJoin, "miter"), s.lineWidth = n, s.strokeStyle = l(i.strokeStyle, a), s.setLineDash(l(i.lineDash, [])), o.usePointStyle) { const a = { radius: p * Math.SQRT2 / 2, pointStyle: i.pointStyle, rotation: i.rotation, borderWidth: n }, l = r.xPlus(t, g / 2); Ee(s, a, l, e + u, o.pointStyleWidth && g) } else { const o = e + Math.max((d - p) / 2, 0), a = r.leftForLtr(t, g), l = wi(i.borderRadius); s.beginPath(), Object.values(l).some((t => 0 !== t)) ? He(s, { x: a, y: o, w: g, h: p, radius: l }) : s.rect(a, o, g, p), s.fill(), 0 !== n && s.stroke() } s.restore() }(r.x(S), P, y), S = gt(w, S + g + u, x ? S + k : this.right, t.rtl), function (t, e, i) { Ne(s, i.text, t, e + m / 2, h, { strikethrough: i.hidden, textAlign: r.textAlign(i.textAlign) }) }(r.x(S), P, y), x) f.x += k + c; else if ("string" != typeof y.text) { const t = h.lineHeight; f.y += _a(y, t) + c } else f.y += _ })), Ti(this.ctx, t.textDirection) } drawTitle() { const t = this.options, e = t.title, i = Si(e.font), s = ki(e.padding); if (!e.display) return; const n = Oi(t.rtl, this.left, this.width), o = this.ctx, a = e.position, r = i.size / 2, l = s.top + r; let h, c = this.left, d = this.width; if (this.isHorizontal()) d = Math.max(...this.lineWidths), h = this.top + l, c = ft(t.align, c, this.right - d); else { const e = this.columnSizes.reduce(((t, e) => Math.max(t, e.height)), 0); h = l + ft(t.align, this.top, this.bottom - e - t.labels.padding - this._computeTitleHeight()) } const u = ft(a, c, c + d); o.textAlign = n.textAlign(ut(a)), o.textBaseline = "middle", o.strokeStyle = e.color, o.fillStyle = e.color, o.font = i.string, Ne(o, e.text, u, h, i) } _computeTitleHeight() { const t = this.options.title, e = Si(t.font), i = ki(t.padding); return t.display ? e.lineHeight + i.height : 0 } _getLegendItemAt(t, e) { let i, s, n; if (tt(t, this.left, this.right) && tt(e, this.top, this.bottom)) for (n = this.legendHitBoxes, i = 0; i < n.length; ++i)if (s = n[i], tt(t, s.left, s.left + s.width) && tt(e, s.top, s.top + s.height)) return this.legendItems[i]; return null } handleEvent(t) { const e = this.options; if (!function (t, e) { if (("mousemove" === t || "mouseout" === t) && (e.onHover || e.onLeave)) return !0; if (e.onClick && ("click" === t || "mouseup" === t)) return !0; return !1 }(t.type, e)) return; const i = this._getLegendItemAt(t.x, t.y); if ("mousemove" === t.type || "mouseout" === t.type) { const o = this._hoveredItem, a = (n = i, null !== (s = o) && null !== n && s.datasetIndex === n.datasetIndex && s.index === n.index); o && !a && d(e.onLeave, [t, o, this], this), this._hoveredItem = i, i && !a && d(e.onHover, [t, i, this], this) } else i && d(e.onClick, [t, i, this], this); var s, n } } function _a(t, e) { return e * (t.text ? t.text.length : 0) } var ya = { id: "legend", _element: ba, start(t, e, i) { const s = t.legend = new ba({ ctx: t.ctx, options: i, chart: t }); as.configure(t, s, i), as.addBox(t, s) }, stop(t) { as.removeBox(t, t.legend), delete t.legend }, beforeUpdate(t, e, i) { const s = t.legend; as.configure(t, s, i), s.options = i }, afterUpdate(t) { const e = t.legend; e.buildLabels(), e.adjustHitBoxes() }, afterEvent(t, e) { e.replay || t.legend.handleEvent(e.event) }, defaults: { display: !0, position: "top", align: "center", fullSize: !0, reverse: !1, weight: 1e3, onClick(t, e, i) { const s = e.datasetIndex, n = i.chart; n.isDatasetVisible(s) ? (n.hide(s), e.hidden = !0) : (n.show(s), e.hidden = !1) }, onHover: null, onLeave: null, labels: { color: t => t.chart.options.color, boxWidth: 40, padding: 10, generateLabels(t) { const e = t.data.datasets, { labels: { usePointStyle: i, pointStyle: s, textAlign: n, color: o, useBorderRadius: a, borderRadius: r } } = t.legend.options; return t._getSortedDatasetMetas().map((t => { const l = t.controller.getStyle(i ? 0 : void 0), h = ki(l.borderWidth); return { text: e[t.index].label, fillStyle: l.backgroundColor, fontColor: o, hidden: !t.visible, lineCap: l.borderCapStyle, lineDash: l.borderDash, lineDashOffset: l.borderDashOffset, lineJoin: l.borderJoinStyle, lineWidth: (h.width + h.height) / 4, strokeStyle: l.borderColor, pointStyle: s || l.pointStyle, rotation: l.rotation, textAlign: n || l.textAlign, borderRadius: a && (r || l.borderRadius), datasetIndex: t.index } }), this) } }, title: { color: t => t.chart.options.color, display: !1, position: "center", text: "" } }, descriptors: { _scriptable: t => !t.startsWith("on"), labels: { _scriptable: t => !["generateLabels", "filter", "sort"].includes(t) } } }; class va extends Hs { constructor(t) { super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0 } update(t, e) { const i = this.options; if (this.left = 0, this.top = 0, !i.display) return void (this.width = this.height = this.right = this.bottom = 0); this.width = this.right = t, this.height = this.bottom = e; const s = n(i.text) ? i.text.length : 1; this._padding = ki(i.padding); const o = s * Si(i.font).lineHeight + this._padding.height; this.isHorizontal() ? this.height = o : this.width = o } isHorizontal() { const t = this.options.position; return "top" === t || "bottom" === t } _drawArgs(t) { const { top: e, left: i, bottom: s, right: n, options: o } = this, a = o.align; let r, l, h, c = 0; return this.isHorizontal() ? (l = ft(a, i, n), h = e + t, r = n - i) : ("left" === o.position ? (l = i + t, h = ft(a, s, e), c = -.5 * C) : (l = n - t, h = ft(a, e, s), c = .5 * C), r = s - e), { titleX: l, titleY: h, maxWidth: r, rotation: c } } draw() { const t = this.ctx, e = this.options; if (!e.display) return; const i = Si(e.font), s = i.lineHeight / 2 + this._padding.top, { titleX: n, titleY: o, maxWidth: a, rotation: r } = this._drawArgs(s); Ne(t, e.text, 0, 0, i, { color: e.color, maxWidth: a, rotation: r, textAlign: ut(e.align), textBaseline: "middle", translation: [n, o] }) } } var Ma = { id: "title", _element: va, start(t, e, i) { !function (t, e) { const i = new va({ ctx: t.ctx, options: e, chart: t }); as.configure(t, i, e), as.addBox(t, i), t.titleBlock = i }(t, i) }, stop(t) { const e = t.titleBlock; as.removeBox(t, e), delete t.titleBlock }, beforeUpdate(t, e, i) { const s = t.titleBlock; as.configure(t, s, i), s.options = i }, defaults: { align: "center", display: !1, font: { weight: "bold" }, fullSize: !0, padding: 10, position: "top", text: "", weight: 2e3 }, defaultRoutes: { color: "color" }, descriptors: { _scriptable: !0, _indexable: !1 } }; const wa = new WeakMap; var ka = { id: "subtitle", start(t, e, i) { const s = new va({ ctx: t.ctx, options: i, chart: t }); as.configure(t, s, i), as.addBox(t, s), wa.set(t, s) }, stop(t) { as.removeBox(t, wa.get(t)), wa.delete(t) }, beforeUpdate(t, e, i) { const s = wa.get(t); as.configure(t, s, i), s.options = i }, defaults: { align: "center", display: !1, font: { weight: "normal" }, fullSize: !0, padding: 0, position: "top", text: "", weight: 1500 }, defaultRoutes: { color: "color" }, descriptors: { _scriptable: !0, _indexable: !1 } }; const Sa = { average(t) { if (!t.length) return !1; let e, i, s = new Set, n = 0, o = 0; for (e = 0, i = t.length; e < i; ++e) { const i = t[e].element; if (i && i.hasValue()) { const t = i.tooltipPosition(); s.add(t.x), n += t.y, ++o } } return { x: [...s].reduce(((t, e) => t + e)) / s.size, y: n / o } }, nearest(t, e) { if (!t.length) return !1; let i, s, n, o = e.x, a = e.y, r = Number.POSITIVE_INFINITY; for (i = 0, s = t.length; i < s; ++i) { const s = t[i].element; if (s && s.hasValue()) { const t = q(e, s.getCenterPoint()); t < r && (r = t, n = s) } } if (n) { const t = n.tooltipPosition(); o = t.x, a = t.y } return { x: o, y: a } } }; function Pa(t, e) { return e && (n(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t } function Da(t) { return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t } function Ca(t, e) { const { element: i, datasetIndex: s, index: n } = e, o = t.getDatasetMeta(s).controller, { label: a, value: r } = o.getLabelAndValue(n); return { chart: t, label: a, parsed: o.getParsed(n), raw: t.data.datasets[s].data[n], formattedValue: r, dataset: o.getDataset(), dataIndex: n, datasetIndex: s, element: i } } function Oa(t, e) { const i = t.chart.ctx, { body: s, footer: n, title: o } = t, { boxWidth: a, boxHeight: r } = e, l = Si(e.bodyFont), h = Si(e.titleFont), c = Si(e.footerFont), d = o.length, f = n.length, g = s.length, p = ki(e.padding); let m = p.height, x = 0, b = s.reduce(((t, e) => t + e.before.length + e.lines.length + e.after.length), 0); if (b += t.beforeBody.length + t.afterBody.length, d && (m += d * h.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom), b) { m += g * (e.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight) + (b - g) * l.lineHeight + (b - 1) * e.bodySpacing } f && (m += e.footerMarginTop + f * c.lineHeight + (f - 1) * e.footerSpacing); let _ = 0; const y = function (t) { x = Math.max(x, i.measureText(t).width + _) }; return i.save(), i.font = h.string, u(t.title, y), i.font = l.string, u(t.beforeBody.concat(t.afterBody), y), _ = e.displayColors ? a + 2 + e.boxPadding : 0, u(s, (t => { u(t.before, y), u(t.lines, y), u(t.after, y) })), _ = 0, i.font = c.string, u(t.footer, y), i.restore(), x += p.width, { width: x, height: m } } function Aa(t, e, i, s) { const { x: n, width: o } = i, { width: a, chartArea: { left: r, right: l } } = t; let h = "center"; return "center" === s ? h = n <= (r + l) / 2 ? "left" : "right" : n <= o / 2 ? h = "left" : n >= a - o / 2 && (h = "right"), function (t, e, i, s) { const { x: n, width: o } = s, a = i.caretSize + i.caretPadding; return "left" === t && n + o + a > e.width || "right" === t && n - o - a < 0 || void 0 }(h, t, e, i) && (h = "center"), h } function Ta(t, e, i) { const s = i.yAlign || e.yAlign || function (t, e) { const { y: i, height: s } = e; return i < s / 2 ? "top" : i > t.height - s / 2 ? "bottom" : "center" }(t, i); return { xAlign: i.xAlign || e.xAlign || Aa(t, e, i, s), yAlign: s } } function La(t, e, i, s) { const { caretSize: n, caretPadding: o, cornerRadius: a } = t, { xAlign: r, yAlign: l } = i, h = n + o, { topLeft: c, topRight: d, bottomLeft: u, bottomRight: f } = wi(a); let g = function (t, e) { let { x: i, width: s } = t; return "right" === e ? i -= s : "center" === e && (i -= s / 2), i }(e, r); const p = function (t, e, i) { let { y: s, height: n } = t; return "top" === e ? s += i : s -= "bottom" === e ? n + i : n / 2, s }(e, l, h); return "center" === l ? "left" === r ? g += h : "right" === r && (g -= h) : "left" === r ? g -= Math.max(c, u) + n : "right" === r && (g += Math.max(d, f) + n), { x: J(g, 0, s.width - e.width), y: J(p, 0, s.height - e.height) } } function Ea(t, e, i) { const s = ki(i.padding); return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - s.right : t.x + s.left } function Ra(t) { return Pa([], Da(t)) } function Ia(t, e) { const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks; return i ? t.override(i) : t } const za = { beforeTitle: e, title(t) { if (t.length > 0) { const e = t[0], i = e.chart.data.labels, s = i ? i.length : 0; if (this && this.options && "dataset" === this.options.mode) return e.dataset.label || ""; if (e.label) return e.label; if (s > 0 && e.dataIndex < s) return i[e.dataIndex] } return "" }, afterTitle: e, beforeBody: e, beforeLabel: e, label(t) { if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue; let e = t.dataset.label || ""; e && (e += ": "); const i = t.formattedValue; return s(i) || (e += i), e }, labelColor(t) { const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex); return { borderColor: e.borderColor, backgroundColor: e.backgroundColor, borderWidth: e.borderWidth, borderDash: e.borderDash, borderDashOffset: e.borderDashOffset, borderRadius: 0 } }, labelTextColor() { return this.options.bodyColor }, labelPointStyle(t) { const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex); return { pointStyle: e.pointStyle, rotation: e.rotation } }, afterLabel: e, afterBody: e, beforeFooter: e, footer: e, afterFooter: e }; function Fa(t, e, i, s) { const n = t[e].call(i, s); return void 0 === n ? za[e].call(i, s) : n } class Va extends Hs { static positioners = Sa; constructor(t) { super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0 } initialize(t) { this.options = t, this._cachedAnimations = void 0, this.$context = void 0 } _resolveAnimations() { const t = this._cachedAnimations; if (t) return t; const e = this.chart, i = this.options.setContext(this.getContext()), s = i.enabled && e.options.animation && i.animations, n = new Os(this.chart, s); return s._cacheable && (this._cachedAnimations = Object.freeze(n)), n } getContext() { return this.$context || (this.$context = (t = this.chart.getContext(), e = this, i = this._tooltipItems, Ci(t, { tooltip: e, tooltipItems: i, type: "tooltip" }))); var t, e, i } getTitle(t, e) { const { callbacks: i } = e, s = Fa(i, "beforeTitle", this, t), n = Fa(i, "title", this, t), o = Fa(i, "afterTitle", this, t); let a = []; return a = Pa(a, Da(s)), a = Pa(a, Da(n)), a = Pa(a, Da(o)), a } getBeforeBody(t, e) { return Ra(Fa(e.callbacks, "beforeBody", this, t)) } getBody(t, e) { const { callbacks: i } = e, s = []; return u(t, (t => { const e = { before: [], lines: [], after: [] }, n = Ia(i, t); Pa(e.before, Da(Fa(n, "beforeLabel", this, t))), Pa(e.lines, Fa(n, "label", this, t)), Pa(e.after, Da(Fa(n, "afterLabel", this, t))), s.push(e) })), s } getAfterBody(t, e) { return Ra(Fa(e.callbacks, "afterBody", this, t)) } getFooter(t, e) { const { callbacks: i } = e, s = Fa(i, "beforeFooter", this, t), n = Fa(i, "footer", this, t), o = Fa(i, "afterFooter", this, t); let a = []; return a = Pa(a, Da(s)), a = Pa(a, Da(n)), a = Pa(a, Da(o)), a } _createItems(t) { const e = this._active, i = this.chart.data, s = [], n = [], o = []; let a, r, l = []; for (a = 0, r = e.length; a < r; ++a)l.push(Ca(this.chart, e[a])); return t.filter && (l = l.filter(((e, s, n) => t.filter(e, s, n, i)))), t.itemSort && (l = l.sort(((e, s) => t.itemSort(e, s, i)))), u(l, (e => { const i = Ia(t.callbacks, e); s.push(Fa(i, "labelColor", this, e)), n.push(Fa(i, "labelPointStyle", this, e)), o.push(Fa(i, "labelTextColor", this, e)) })), this.labelColors = s, this.labelPointStyles = n, this.labelTextColors = o, this.dataPoints = l, l } update(t, e) { const i = this.options.setContext(this.getContext()), s = this._active; let n, o = []; if (s.length) { const t = Sa[i.position].call(this, s, this._eventPosition); o = this._createItems(i), this.title = this.getTitle(o, i), this.beforeBody = this.getBeforeBody(o, i), this.body = this.getBody(o, i), this.afterBody = this.getAfterBody(o, i), this.footer = this.getFooter(o, i); const e = this._size = Oa(this, i), a = Object.assign({}, t, e), r = Ta(this.chart, i, a), l = La(i, a, r, this.chart); this.xAlign = r.xAlign, this.yAlign = r.yAlign, n = { opacity: 1, x: l.x, y: l.y, width: e.width, height: e.height, caretX: t.x, caretY: t.y } } else 0 !== this.opacity && (n = { opacity: 0 }); this._tooltipItems = o, this.$context = void 0, n && this._resolveAnimations().update(this, n), t && i.external && i.external.call(this, { chart: this.chart, tooltip: this, replay: e }) } drawCaret(t, e, i, s) { const n = this.getCaretPosition(t, i, s); e.lineTo(n.x1, n.y1), e.lineTo(n.x2, n.y2), e.lineTo(n.x3, n.y3) } getCaretPosition(t, e, i) { const { xAlign: s, yAlign: n } = this, { caretSize: o, cornerRadius: a } = i, { topLeft: r, topRight: l, bottomLeft: h, bottomRight: c } = wi(a), { x: d, y: u } = t, { width: f, height: g } = e; let p, m, x, b, _, y; return "center" === n ? (_ = u + g / 2, "left" === s ? (p = d, m = p - o, b = _ + o, y = _ - o) : (p = d + f, m = p + o, b = _ - o, y = _ + o), x = p) : (m = "left" === s ? d + Math.max(r, h) + o : "right" === s ? d + f - Math.max(l, c) - o : this.caretX, "top" === n ? (b = u, _ = b - o, p = m - o, x = m + o) : (b = u + g, _ = b + o, p = m + o, x = m - o), y = b), { x1: p, x2: m, x3: x, y1: b, y2: _, y3: y } } drawTitle(t, e, i) { const s = this.title, n = s.length; let o, a, r; if (n) { const l = Oi(i.rtl, this.x, this.width); for (t.x = Ea(this, i.titleAlign, i), e.textAlign = l.textAlign(i.titleAlign), e.textBaseline = "middle", o = Si(i.titleFont), a = i.titleSpacing, e.fillStyle = i.titleColor, e.font = o.string, r = 0; r < n; ++r)e.fillText(s[r], l.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + a, r + 1 === n && (t.y += i.titleMarginBottom - a) } } _drawColorBox(t, e, i, s, n) { const a = this.labelColors[i], r = this.labelPointStyles[i], { boxHeight: l, boxWidth: h } = n, c = Si(n.bodyFont), d = Ea(this, "left", n), u = s.x(d), f = l < c.lineHeight ? (c.lineHeight - l) / 2 : 0, g = e.y + f; if (n.usePointStyle) { const e = { radius: Math.min(h, l) / 2, pointStyle: r.pointStyle, rotation: r.rotation, borderWidth: 1 }, i = s.leftForLtr(u, h) + h / 2, o = g + l / 2; t.strokeStyle = n.multiKeyBackground, t.fillStyle = n.multiKeyBackground, Le(t, e, i, o), t.strokeStyle = a.borderColor, t.fillStyle = a.backgroundColor, Le(t, e, i, o) } else { t.lineWidth = o(a.borderWidth) ? Math.max(...Object.values(a.borderWidth)) : a.borderWidth || 1, t.strokeStyle = a.borderColor, t.setLineDash(a.borderDash || []), t.lineDashOffset = a.borderDashOffset || 0; const e = s.leftForLtr(u, h), i = s.leftForLtr(s.xPlus(u, 1), h - 2), r = wi(a.borderRadius); Object.values(r).some((t => 0 !== t)) ? (t.beginPath(), t.fillStyle = n.multiKeyBackground, He(t, { x: e, y: g, w: h, h: l, radius: r }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), He(t, { x: i, y: g + 1, w: h - 2, h: l - 2, radius: r }), t.fill()) : (t.fillStyle = n.multiKeyBackground, t.fillRect(e, g, h, l), t.strokeRect(e, g, h, l), t.fillStyle = a.backgroundColor, t.fillRect(i, g + 1, h - 2, l - 2)) } t.fillStyle = this.labelTextColors[i] } drawBody(t, e, i) { const { body: s } = this, { bodySpacing: n, bodyAlign: o, displayColors: a, boxHeight: r, boxWidth: l, boxPadding: h } = i, c = Si(i.bodyFont); let d = c.lineHeight, f = 0; const g = Oi(i.rtl, this.x, this.width), p = function (i) { e.fillText(i, g.x(t.x + f), t.y + d / 2), t.y += d + n }, m = g.textAlign(o); let x, b, _, y, v, M, w; for (e.textAlign = o, e.textBaseline = "middle", e.font = c.string, t.x = Ea(this, m, i), e.fillStyle = i.bodyColor, u(this.beforeBody, p), f = a && "right" !== m ? "center" === o ? l / 2 + h : l + 2 + h : 0, y = 0, M = s.length; y < M; ++y) { for (x = s[y], b = this.labelTextColors[y], e.fillStyle = b, u(x.before, p), _ = x.lines, a && _.length && (this._drawColorBox(e, t, y, g, i), d = Math.max(c.lineHeight, r)), v = 0, w = _.length; v < w; ++v)p(_[v]), d = c.lineHeight; u(x.after, p) } f = 0, d = c.lineHeight, u(this.afterBody, p), t.y -= n } drawFooter(t, e, i) { const s = this.footer, n = s.length; let o, a; if (n) { const r = Oi(i.rtl, this.x, this.width); for (t.x = Ea(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = r.textAlign(i.footerAlign), e.textBaseline = "middle", o = Si(i.footerFont), e.fillStyle = i.footerColor, e.font = o.string, a = 0; a < n; ++a)e.fillText(s[a], r.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + i.footerSpacing } } drawBackground(t, e, i, s) { const { xAlign: n, yAlign: o } = this, { x: a, y: r } = t, { width: l, height: h } = i, { topLeft: c, topRight: d, bottomLeft: u, bottomRight: f } = wi(s.cornerRadius); e.fillStyle = s.backgroundColor, e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, e.beginPath(), e.moveTo(a + c, r), "top" === o && this.drawCaret(t, e, i, s), e.lineTo(a + l - d, r), e.quadraticCurveTo(a + l, r, a + l, r + d), "center" === o && "right" === n && this.drawCaret(t, e, i, s), e.lineTo(a + l, r + h - f), e.quadraticCurveTo(a + l, r + h, a + l - f, r + h), "bottom" === o && this.drawCaret(t, e, i, s), e.lineTo(a + u, r + h), e.quadraticCurveTo(a, r + h, a, r + h - u), "center" === o && "left" === n && this.drawCaret(t, e, i, s), e.lineTo(a, r + c), e.quadraticCurveTo(a, r, a + c, r), e.closePath(), e.fill(), s.borderWidth > 0 && e.stroke() } _updateAnimationTarget(t) { const e = this.chart, i = this.$animations, s = i && i.x, n = i && i.y; if (s || n) { const i = Sa[t.position].call(this, this._active, this._eventPosition); if (!i) return; const o = this._size = Oa(this, t), a = Object.assign({}, i, this._size), r = Ta(e, t, a), l = La(t, a, r, e); s._to === l.x && n._to === l.y || (this.xAlign = r.xAlign, this.yAlign = r.yAlign, this.width = o.width, this.height = o.height, this.caretX = i.x, this.caretY = i.y, this._resolveAnimations().update(this, l)) } } _willRender() { return !!this.opacity } draw(t) { const e = this.options.setContext(this.getContext()); let i = this.opacity; if (!i) return; this._updateAnimationTarget(e); const s = { width: this.width, height: this.height }, n = { x: this.x, y: this.y }; i = Math.abs(i) < .001 ? 0 : i; const o = ki(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length; e.enabled && a && (t.save(), t.globalAlpha = i, this.drawBackground(n, t, s, e), Ai(t, e.textDirection), n.y += o.top, this.drawTitle(n, t, e), this.drawBody(n, t, e), this.drawFooter(n, t, e), Ti(t, e.textDirection), t.restore()) } getActiveElements() { return this._active || [] } setActiveElements(t, e) { const i = this._active, s = t.map((({ datasetIndex: t, index: e }) => { const i = this.chart.getDatasetMeta(t); if (!i) throw new Error("Cannot find a dataset at index " + t); return { datasetIndex: t, element: i.data[e], index: e } })), n = !f(i, s), o = this._positionChanged(s, e); (n || o) && (this._active = s, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0)) } handleEvent(t, e, i = !0) { if (e && this._ignoreReplayEvents) return !1; this._ignoreReplayEvents = !1; const s = this.options, n = this._active || [], o = this._getActiveElements(t, n, e, i), a = this._positionChanged(o, t), r = e || !f(o, n) || a; return r && (this._active = o, (s.enabled || s.external) && (this._eventPosition = { x: t.x, y: t.y }, this.update(!0, e))), r } _getActiveElements(t, e, i, s) { const n = this.options; if ("mouseout" === t.type) return []; if (!s) return e.filter((t => this.chart.data.datasets[t.datasetIndex] && void 0 !== this.chart.getDatasetMeta(t.datasetIndex).controller.getParsed(t.index))); const o = this.chart.getElementsAtEventForMode(t, n.mode, n, i); return n.reverse && o.reverse(), o } _positionChanged(t, e) { const { caretX: i, caretY: s, options: n } = this, o = Sa[n.position].call(this, t, e); return !1 !== o && (i !== o.x || s !== o.y) } } var Ba = { id: "tooltip", _element: Va, positioners: Sa, afterInit(t, e, i) { i && (t.tooltip = new Va({ chart: t, options: i })) }, beforeUpdate(t, e, i) { t.tooltip && t.tooltip.initialize(i) }, reset(t, e, i) { t.tooltip && t.tooltip.initialize(i) }, afterDraw(t) { const e = t.tooltip; if (e && e._willRender()) { const i = { tooltip: e }; if (!1 === t.notifyPlugins("beforeTooltipDraw", { ...i, cancelable: !0 })) return; e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i) } }, afterEvent(t, e) { if (t.tooltip) { const i = e.replay; t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0) } }, defaults: { enabled: !0, external: null, position: "average", backgroundColor: "rgba(0,0,0,0.8)", titleColor: "#fff", titleFont: { weight: "bold" }, titleSpacing: 2, titleMarginBottom: 6, titleAlign: "left", bodyColor: "#fff", bodySpacing: 2, bodyFont: {}, bodyAlign: "left", footerColor: "#fff", footerSpacing: 2, footerMarginTop: 6, footerFont: { weight: "bold" }, footerAlign: "left", padding: 6, caretPadding: 2, caretSize: 5, cornerRadius: 6, boxHeight: (t, e) => e.bodyFont.size, boxWidth: (t, e) => e.bodyFont.size, multiKeyBackground: "#fff", displayColors: !0, boxPadding: 0, borderColor: "rgba(0,0,0,0)", borderWidth: 0, animation: { duration: 400, easing: "easeOutQuart" }, animations: { numbers: { type: "number", properties: ["x", "y", "width", "height", "caretX", "caretY"] }, opacity: { easing: "linear", duration: 200 } }, callbacks: za }, defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" }, descriptors: { _scriptable: t => "filter" !== t && "itemSort" !== t && "external" !== t, _indexable: !1, callbacks: { _scriptable: !1, _indexable: !1 }, animation: { _fallback: !1 }, animations: { _fallback: "animation" } }, additionalOptionScopes: ["interaction"] }; return An.register(Yn, jo, fo, t), An.helpers = { ...Wi }, An._adapters = Rn, An.Animation = Cs, An.Animations = Os, An.animator = bt, An.controllers = en.controllers.items, An.DatasetController = Ns, An.Element = Hs, An.elements = fo, An.Interaction = Xi, An.layouts = as, An.platforms = Ss, An.Scale = Js, An.Ticks = ae, Object.assign(An, Yn, jo, fo, t, Ss), An.Chart = An, "undefined" != typeof window && (window.Chart = An), An

}));

// sourceMappingURL=chart.umd.js.map





// end chartJS









const Currency_names = {

	'Austria': 'Euros',

	'Belgium': 'Euros',

	'Czech-Republic': 'Czech koruna',

	'Denmark': 'Danish krone',

	'Finland': 'Euros',

	'France': 'Euros',

	'Germany': 'Euros',

	'Greece': 'Euros',

	'Ireland': 'Euros',

	'Italy': 'Euros',

	'Netherlands': 'Euros',

	'Norway': 'Norwegian krone',

	'Poland': 'Polish złoty',

	'Portugal': 'Euros',

	'Spain': 'Euros',

	'Sweden': 'Swedish krona',

	'Switzerland': 'Swiss franc',

	'United-Kingdom': 'Sterling',

}



// const country_currency = {

// 	'Austria': '€',

// 	'Belgium': '€',

// 	'Czech-Republic': 'Kč',

// 	'Denmark': 'kr',

// 	'Finland': '€',

// 	'France': '€',

// 	'Germany': '€',

// 	'Greece': '€',

// 	'Ireland': '€',

// 	'Italy': '€',

// 	'Netherlands': '€',

// 	'Norway': 'kr',

// 	'Poland': 'zł',

// 	'Portugal': '€',

// 	'Spain': '€',

// 	'Sweden': 'kr',

// 	'Switzerland': 'Fr',

// 	'United-Kingdom': '£',

// }

const country_currency = {

	'Austria': '&#8364;',

	'Belgium': '&#8364;',

	'Czech-Republic': 'Kč',

	'Denmark': 'kr',

	'Finland': '&#8364;',

	'France': '&#8364;',

	'Germany': '&#8364;',

	'Greece': '&#8364;',

	'Ireland': '&#8364;',

	'Italy': '&#8364;',

	'Netherlands': '&#8364;',

	'Norway': 'kr',

	'Poland': 'zł',

	'Portugal': '&#8364;',

	'Spain': '&#8364;',

	'Sweden': 'kr',

	'Switzerland': 'Fr',

	'United-Kingdom': '&#163;',

}

const currency_rate = {

	'Czech-Republic': 23.21,

	'Denmark': 7.07,

	'Norway': 10.71,

	'Poland': 4.34,

	'Sweden': 11.27,

	'Switzerland': 0.91,

	'United-Kingdom': 0.82,

}

const currency_class = {

	'Czech-Republic': 'czh',

	'Denmark': 'denmark',

	'Norway': 'norway',

	'Poland': 'poland',

	'Sweden': 'sweden',

	'Switzerland': 'switzer',

	'United-Kingdom': 'uk',

}



const global_hospitalisation = {

	'Austria': {

		'hospitalisation': 815,

		'nurse': 17,

		'physician': 82,

		'diagnosis': `Estimated at average hourly cost for physician (cardiology) + nurse based on average salary (Austria) in 2023 <br>

<a href="https://www.salaryexplorer.com/"
											target="_blank"><u>(source: salaryexplorer.com)</u></a>`,

		'monitoring': `Grustam AS, Severens JL, De Massari D et al. Cost-Effectiveness Analysis in Telehealth: A Comparison between Home Telemonitoring, Nurse Telephone Support, and Usual Care in Chronic Heart Failure Management. Value Health 2018;21(7):772-82. <a href="https://doi.org/10.1016/j.jval.2017.11.011" target="_blank"><u>doi: 10.1016/j.jval.2017.11.011</u></a>`,

	},

	'Belgium': {

		'hospitalisation': 435,

		'nurse': 29,

		'physician': 132,

		'diagnosis': `Estimated at average hourly cost for physician (cardiology) + nurse based on average salary (Belgium) in 2023 <br>

<a href="https://www.salaryexplorer.com/"
											target="_blank"><u>(source: salaryexplorer.com)</u></a>`,

		'monitoring': `Grustam AS, Severens JL, De Massari D et al. Cost-Effectiveness Analysis in Telehealth: A Comparison between Home Telemonitoring, Nurse Telephone Support, and Usual Care in Chronic Heart Failure Management. Value Health 2018;21(7):772-82. <a href="https://doi.org/10.1016/j.jval.2017.11.011" target="_blank"><u>doi: 10.1016/j.jval.2017.11.011</u></a>`,

	},

	'Czech-Republic': {

		'hospitalisation': 5103,

		'nurse': 257,

		'physician': 1306,

		'diagnosis': `Estimated at average hourly cost for physician (cardiology) + nurse based on average salary (Czech Republic) in 2023 <br>

<a href="https://www.salaryexplorer.com/"
											target="_blank"><u>(source: salaryexplorer.com)</u></a>`,

		'monitoring': `Grustam AS, Severens JL, De Massari D et al. Cost-Effectiveness Analysis in Telehealth: A Comparison between Home Telemonitoring, Nurse Telephone Support, and Usual Care in Chronic Heart Failure Management. Value Health 2018;21(7):772-82. <a href="https://doi.org/10.1016/j.jval.2017.11.011" target="_blank"><u>doi: 10.1016/j.jval.2017.11.011</u></a>`,

	},

	'Denmark': {

		'hospitalisation': 6728,

		'nurse': 183,

		'physician': 524,

		'diagnosis': `Estimated at average hourly cost for physician (cardiology) + nurse based on average salary (Denmark) in 2023 <br>

<a href="https://www.salaryexplorer.com/"
											target="_blank"><u>(source: salaryexplorer.com)</u></a>`,

		'monitoring': `Grustam AS, Severens JL, De Massari D et al. Cost-Effectiveness Analysis in Telehealth: A Comparison between Home Telemonitoring, Nurse Telephone Support, and Usual Care in Chronic Heart Failure Management. Value Health 2018;21(7):772-82. <a href="https://doi.org/10.1016/j.jval.2017.11.011" target="_blank"><u>doi: 10.1016/j.jval.2017.11.011</u></a>`,

	},

	'Finland': {

		'hospitalisation': 586,

		'nurse': 20,

		'physician': 97,

		'diagnosis': `Estimated at average hourly cost for physician (cardiology) + nurse based on average salary (Finland) in 2023 <br>

<a href="https://www.salaryexplorer.com/"
											target="_blank"><u>(source: salaryexplorer.com)</u></a>`,

		'monitoring': `Grustam AS, Severens JL, De Massari D et al. Cost-Effectiveness Analysis in Telehealth: A Comparison between Home Telemonitoring, Nurse Telephone Support, and Usual Care in Chronic Heart Failure Management. Value Health 2018;21(7):772-82. <a href="https://doi.org/10.1016/j.jval.2017.11.011" target="_blank"><u>doi: 10.1016/j.jval.2017.11.011</u></a>`,

	},

	'France': {

		'hospitalisation': 940,

		'nurse': 17,

		'physician': 84,

		'diagnosis': `Estimated at average hourly cost for physician (cardiology) + nurse based on average salary (France) in 2023 <br>

<a href="https://www.salaryexplorer.com/"
											target="_blank"><u>(source: salaryexplorer.com)</u></a>`,

		'monitoring': `Grustam AS, Severens JL, De Massari D et al. Cost-Effectiveness Analysis in Telehealth: A Comparison between Home Telemonitoring, Nurse Telephone Support, and Usual Care in Chronic Heart Failure Management. Value Health 2018;21(7):772-82. <a href="https://doi.org/10.1016/j.jval.2017.11.011" target="_blank"><u>doi: 10.1016/j.jval.2017.11.011</u></a>`,

	},

	'Germany': {

		'hospitalisation': 815,

		'nurse': 17,

		'physician': 82,

		'diagnosis': `Estimated at average hourly cost for physician (cardiology) + nurse based on average salary (Germany) in 2023 <br>

<a href="https://www.salaryexplorer.com/"
											target="_blank"><u>(source: salaryexplorer.com)</u></a>`,

		'monitoring': `Grustam AS, Severens JL, De Massari D et al. Cost-Effectiveness Analysis in Telehealth: A Comparison between Home Telemonitoring, Nurse Telephone Support, and Usual Care in Chronic Heart Failure Management. Value Health 2018;21(7):772-82. <a href="https://doi.org/10.1016/j.jval.2017.11.011" target="_blank"><u>doi: 10.1016/j.jval.2017.11.011</u></a>`,

	},

	'Greece': {

		'hospitalisation': 272,

		'nurse': 11,

		'physician': 49,

		'diagnosis': `Estimated at average hourly cost for physician (cardiology) + nurse based on average salary (Greece) in 2023 <br>

<a href="https://www.salaryexplorer.com/"
											target="_blank"><u>(source: salaryexplorer.com)</u></a>`,

		'monitoring': `Grustam AS, Severens JL, De Massari D et al. Cost-Effectiveness Analysis in Telehealth: A Comparison between Home Telemonitoring, Nurse Telephone Support, and Usual Care in Chronic Heart Failure Management. Value Health 2018;21(7):772-82. <a href="https://doi.org/10.1016/j.jval.2017.11.011" target="_blank"><u>doi: 10.1016/j.jval.2017.11.011</u></a>`,

	},

	'Ireland': {

		'hospitalisation': 948,

		'nurse': 15,

		'physician': 70,

		'diagnosis': `Estimated at average hourly cost for physician (cardiology) + nurse based on average salary (Ireland) in 2023 <br>

<a href="https://www.salaryexplorer.com/"
											target="_blank"><u>(source: salaryexplorer.com)</u></a>`,

		'monitoring': `Grustam AS, Severens JL, De Massari D et al. Cost-Effectiveness Analysis in Telehealth: A Comparison between Home Telemonitoring, Nurse Telephone Support, and Usual Care in Chronic Heart Failure Management. Value Health 2018;21(7):772-82. <a href="https://doi.org/10.1016/j.jval.2017.11.011" target="_blank"><u>doi: 10.1016/j.jval.2017.11.011</u></a>`,

	},

	'Italy': {

		'hospitalisation': 610,

		'nurse': 17,

		'physician': 78,

		'diagnosis': `Estimated at average hourly cost for physician (cardiology) + nurse based on average salary (Italy) in 2023 <br>

<a href="https://www.salaryexplorer.com/"
											target="_blank"><u>(source: salaryexplorer.com)</u></a>`,

		'monitoring': `Grustam AS, Severens JL, De Massari D et al. Cost-Effectiveness Analysis in Telehealth: A Comparison between Home Telemonitoring, Nurse Telephone Support, and Usual Care in Chronic Heart Failure Management. Value Health 2018;21(7):772-82. <a href="https://doi.org/10.1016/j.jval.2017.11.011" target="_blank"><u>doi: 10.1016/j.jval.2017.11.011</u></a>`,

	},

	'Netherlands': {

		'hospitalisation': 807,

		'nurse': 23,

		'physician': 103,

		'diagnosis': `Estimated at average hourly cost for physician (cardiology) + nurse based on average salary (Netherlands) in 2023 <br>

<a href="https://www.salaryexplorer.com/"
											target="_blank"><u>(source: salaryexplorer.com)</u></a>`,

		'monitoring': `Grustam AS, Severens JL, De Massari D et al. Cost-Effectiveness Analysis in Telehealth: A Comparison between Home Telemonitoring, Nurse Telephone Support, and Usual Care in Chronic Heart Failure Management. Value Health 2018;21(7):772-82. <a href="https://doi.org/10.1016/j.jval.2017.11.011" target="_blank"><u>doi: 10.1016/j.jval.2017.11.011</u></a>`,

	},

	'Norway': {

		'hospitalisation': 9506,

		'nurse': 220,

		'physician': 1087,

		'diagnosis': `Estimated at average hourly cost for physician (cardiology) + nurse based on average salary (Norway) in 2023 <br>

<a href="https://www.salaryexplorer.com/"
											target="_blank"><u>(source: salaryexplorer.com)</u></a>`,

		'monitoring': `Grustam AS, Severens JL, De Massari D et al. Cost-Effectiveness Analysis in Telehealth: A Comparison between Home Telemonitoring, Nurse Telephone Support, and Usual Care in Chronic Heart Failure Management. Value Health 2018;21(7):772-82. <a href="https://doi.org/10.1016/j.jval.2017.11.011" target="_blank"><u>doi: 10.1016/j.jval.2017.11.011</u></a>`,

	},

	'Poland': {

		'hospitalisation': 2687,

		'nurse': 33,

		'physician': 156,

		'diagnosis': `Estimated at average hourly cost for physician (cardiology) + nurse based on average salary (Poland) in 2023 <br>

<a href="https://www.salaryexplorer.com/"
											target="_blank"><u>(source: salaryexplorer.com)</u></a>`,

		'monitoring': `Grustam AS, Severens JL, De Massari D et al. Cost-Effectiveness Analysis in Telehealth: A Comparison between Home Telemonitoring, Nurse Telephone Support, and Usual Care in Chronic Heart Failure Management. Value Health 2018;21(7):772-82. <a href="https://doi.org/10.1016/j.jval.2017.11.011" target="_blank"><u>doi: 10.1016/j.jval.2017.11.011</u></a>`,

	},

	'Portugal': {

		'hospitalisation': 570,

		'nurse': 12,

		'physician': 56,

		'diagnosis': `Estimated at average hourly cost for physician (cardiology) + nurse based on average salary (Portugal) in 2023 <br>

<a href="https://www.salaryexplorer.com/"
											target="_blank"><u>(source: salaryexplorer.com)</u></a>`,

		'monitoring': `Grustam AS, Severens JL, De Massari D et al. Cost-Effectiveness Analysis in Telehealth: A Comparison between Home Telemonitoring, Nurse Telephone Support, and Usual Care in Chronic Heart Failure Management. Value Health 2018;21(7):772-82. <a href="https://doi.org/10.1016/j.jval.2017.11.011" target="_blank"><u>doi: 10.1016/j.jval.2017.11.011</u></a>`,

	},

	'Spain': {

		'hospitalisation': 481,

		'nurse': 14,

		'physician': 57,

		'diagnosis': `Estimated at average hourly cost for physician (cardiology) + nurse based on average salary (Spain) in 2023 <br>

<a href="https://www.salaryexplorer.com/"
											target="_blank"><u>(source: salaryexplorer.com)</u></a>`,

		'monitoring': `Grustam AS, Severens JL, De Massari D et al. Cost-Effectiveness Analysis in Telehealth: A Comparison between Home Telemonitoring, Nurse Telephone Support, and Usual Care in Chronic Heart Failure Management. Value Health 2018;21(7):772-82. <a href="https://doi.org/10.1016/j.jval.2017.11.011" target="_blank"><u>doi: 10.1016/j.jval.2017.11.011</u></a>`,

	},

	'Sweden': {

		'hospitalisation': 19322,

		'nurse': 217,

		'physician': 978,

		'diagnosis': `Estimated at average hourly cost for physician (cardiology) + nurse based on average salary (Sweden) in 2023 <br>

<a href="https://www.salaryexplorer.com/"
											target="_blank"><u>(source: salaryexplorer.com)</u></a>`,

		'monitoring': `Grustam AS, Severens JL, De Massari D et al. Cost-Effectiveness Analysis in Telehealth: A Comparison between Home Telemonitoring, Nurse Telephone Support, and Usual Care in Chronic Heart Failure Management. Value Health 2018;21(7):772-82. <a href="https://doi.org/10.1016/j.jval.2017.11.011" target="_blank"><u>doi: 10.1016/j.jval.2017.11.011</u></a>`,

	},

	'Switzerland': {

		'hospitalisation': 816,

		'nurse': 48,

		'physician': 219,

		'diagnosis': `Estimated at average hourly cost for physician (cardiology) + nurse based on average salary (Switzerland) in 2023 <br>

<a href="https://www.salaryexplorer.com/"
											target="_blank"><u>(source: salaryexplorer.com)</u></a>`,

		'monitoring': `Grustam AS, Severens JL, De Massari D et al. Cost-Effectiveness Analysis in Telehealth: A Comparison between Home Telemonitoring, Nurse Telephone Support, and Usual Care in Chronic Heart Failure Management. Value Health 2018;21(7):772-82. <a href="https://doi.org/10.1016/j.jval.2017.11.011" target="_blank"><u>doi: 10.1016/j.jval.2017.11.011</u></a>`,

	},

	'United-Kingdom': {

		'hospitalisation': 495,

		'nurse': 26,

		'physician': 128,

		'diagnosis': `Estimated at average hourly cost for physician (cardiology) + nurse based on average salary (United Kingdom) in 2023 <br>

<a href="https://www.salaryexplorer.com/"
											target="_blank"><u>(source: salaryexplorer.com)</u></a>`,

		'monitoring': `Grustam AS, Severens JL, De Massari D et al. Cost-Effectiveness Analysis in Telehealth: A Comparison between Home Telemonitoring, Nurse Telephone Support, and Usual Care in Chronic Heart Failure Management. Value Health 2018;21(7):772-82. <a href="https://doi.org/10.1016/j.jval.2017.11.011" target="_blank"><u>doi: 10.1016/j.jval.2017.11.011</u></a>`,

	},

}



function number_format(number, decimals = 2, decPoint = '.', thousandsSep = ',') {

	if (isNaN(number) || number == null) {

		return '0';

	}

	// Fix the number to the specified number of decimal places

	let n = Number(number).toFixed(decimals);

	// Split the fixed number into integer and decimal parts

	let [integerPart, decimalPart] = n.split('.');

	// Add thousands separators to the integer part

	integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSep);

	// If decimals are specified, add the decimal part with the specified decimal point

	if (decimals > 0) {

		if (decimalPart == '00') {

			return integerPart;

		} else {

			return integerPart + decPoint + (decimalPart || '');

		}

	} else {

		return integerPart;

	}

}



const trimAndParse = (selector) => {

	let value = $(selector).val().trim();

	value = value.replaceAll('%', '');

	value = value.replaceAll(',', '');

	value = value.replaceAll(country_currency[Boston.country], '');

	return parseFloat(value) || 0; // Convert to number, default to 0 if NaN

}



const trimHtml = (value) => {

	value = value.replaceAll('%', '');

	value = value.replaceAll(',', '');

	value = value.replaceAll(country_currency[Boston.country], '');

	return number_format(parseFloat(value), 2, '.', ','); // Convert to number, default to 0 if NaN

}



const trimValue = (value) => {

	value = value.replaceAll('%', '');

	value = value.replaceAll(',', '');

	return parseFloat(value) || 0;

}



const Boston = {

	chart1: null,

	chart2: null,

	chart3: null,

	chart4: null,

	country: '', // current country

	initialData: {},



	actionTab: function () {

		const bothDirectionBtn = document.querySelector('.both-direct-btn');

		const menuWrapper = document.querySelector('.boston-tab-menu');

		if (!menuWrapper) return false;

		const btns = menuWrapper.querySelectorAll('[data-menu-item]');

		const tabContents = document.querySelectorAll('.boston-tab-content');

		const asideEl = document.querySelector('aside');



		menuWrapper.addEventListener('click', (e) => {

			const tBtn = e.target.closest('button[data-menu-item]');

			if (tBtn) {



				btns.forEach((btn) => {

					if (btn === tBtn) {

						btn.classList.add('active');

					} else {

						btn.classList.remove('active');

					}

				})



				const tTabContent = document.querySelector('.boston-tab-content-' + tBtn.dataset.menuItem);

				localStorage.setItem('memorize-tab', tBtn.dataset.menuItem)

				asideEl.setAttribute('data-active-tab', tBtn.dataset.menuItem.replace('boston-tab-content-', ''));



				tabContents.forEach((tabContent) => {

					if (tabContent === tTabContent) {

						tabContent.classList.add('active');

					} else {

						tabContent.classList.remove('active');

					}

				})



				bothDirectionBtn.setAttribute('id', tBtn.dataset.menuItem + '_modal_open');

			}







		})

	},



	actionOpenModal: function () {

		const btns = document.querySelectorAll('.open-modal-btn');

		btns.forEach((btn) => {

			btn.addEventListener('click', (e) => {

				document.querySelectorAll('.boston-modal').forEach((modalEl) => {

					modalEl.classList.remove('show');

				})

				const t = e.target.closest('.open-modal-btn').dataset.target;

				const tElement = document.querySelector('#' + t);

				if (!tElement)

					return false;

				tElement.classList.add('show');

			})

		})

	},



	actionCutModal: function () {

		const btns = document.querySelectorAll('.cut-modal');

		btns.forEach((btn) => {

			btn.addEventListener('click', (e) => {

				const modal = e.target.closest('.boston-modal');

				if (!modal) return false;

				modal.classList.remove('show');

			})

		})

	},



	slideResultUpdate: function () {

		const inputs = document.querySelectorAll('.boston-slider-input');

		inputs.forEach((inp) => {

			inp.addEventListener('input', (e) => {

				let val = +e.target.value;

				// console.log(val);

				const resultEl = e.target.closest('.boston-slider-input-wrapper').querySelector('.range-result');

				const thumbEl = e.target.closest('.boston-slider-input-wrapper').querySelector('.range-thumb');

				// if (val > 25 && val <= 50) {

				// 	val -= 0.5;

				// } else if (val > 50 && val < 75) {

				// 	val -= 2;

				// } else if (val >= 75 && val < 85) {

				// 	val -= 2.5;

				// } else if (val > 75 && val <= 100) {

				// 	val -= 3;

				// }

				resultEl.innerHTML = e.target.value + '%';

				thumbEl.style.left = val + '%';

				resultEl.style.left = val + '%';

			})

		})

	},



	select2Active: function () {

		$('#choose-country').select2({

			minimumResultsForSearch: -1,

		});

	},



	trackModifyInput: function () {

		const els = document.querySelectorAll('[data-modified="true"]');

		const sets = new Set();

		els.forEach((el) => {

			sets.add(el.id);

		});

		localStorage.setItem('modifie-fields', JSON.stringify(Array.from(sets)))

	},



	validateNumberInput: function () {

		const els = document.querySelectorAll('.validate-number-input');

		els.forEach((el) => {

			el.addEventListener('input', (e) => {

				const val = e.target.value;

				e.target.value = e.target.value.replace(/[^0-9.]/g, '');

				e.target.setAttribute('data-modified', true);

				Boston.trackModifyInput();

			})



			el.addEventListener('focus', (e) => {

				const val = e.target.value;

				if (val.length == 1 && val == 0) e.target.value = '';

				e.target.value = e.target.value.replace(/[^0-9.]/g, '');

			})

			el.addEventListener('blur', (e) => {

				const val = e.target.value.replace(/[^0-9.]/g, '');

				const symbol = e.target.dataset.symbol;

				if (symbol === 'percentage') e.target.value = e.target.value.replace(/[^0-9.]/g, '') + '%';

				if (symbol === 'currency') e.target.value = e.target.value.replace(/[^0-9.]/g, '');

				Boston.storeMemorizeData();

				ResultCalculation.resultMainCalculation();

				if (val.length == 0) e.target.value = '0';



				// after blur set value to input

				if (e.target.closest('.currency-input-wrapper')) {

					const currency = country_currency[Boston.country] || '';

					$(e.target).siblings('.currency-input-mirror').html(currency + number_format(e.target.value));

				}



			})

		})

	},



	cinputChecksTableAction: function () {

		const el = document.querySelector('#cinput-checks-table');

		if (!el) return false;

		el.addEventListener('change', (e) => {

			const tRow = e.target.closest('tr');

			if (e.target.value === 'no') {

				console.log(121);

				tRow.classList.add('cinputs-disable');

				tRow.classList.remove('cinputs-enable');

				$(tRow).find('.boston-input').addClass('disabled').attr('tabindex', '-1').css('pointer-events', 'none');

				$(tRow).find('.boston-input').val(0);

				this.calRemoteMonitoring()

			} else {

				tRow.classList.remove('cinputs-disable');

				tRow.classList.add('cinputs-enable');

				$(tRow).find('.boston-input').not('#sicd-percentage-input').removeClass('disabled').attr('tabindex', '0').css('pointer-events', 'inherit');

			}

		})

	},



	calRemoteMonitoring: function () {

		let remoteMonitored = parseFloat($('.remote-monitored-percent').val()) ?? 0

		let monitoredHeartlogic = parseFloat($('.monitored-heartlogic-precent').val()) ?? 0

		let total = 0,

			totalHeartLogic = 0

		$('.remote-monitor-input').each(function () {

			total += parseFloat($(this).val())

		})

		total = (total * remoteMonitored / 100)

		totalHeartLogic = (total * monitoredHeartlogic / 100)

		$('.remote-monitored').val(total.toFixed(0))

		$('.monitored-heartlogic').val(totalHeartLogic.toFixed(0))
	},



	showCurrentCurrencySymbol: function () {

		const els = document.querySelectorAll('.currency-sign');

		const currency = country_currency[Boston.country] || '';

		els.forEach((el) => {

			el.innerHTML = currency;

		})

		const iEls = document.querySelectorAll('[data-symbol="currency"]');

		iEls.forEach((el) => {

			if (!(el.value.indexOf(currency) === 0) && currency) {

				const format_numb = number_format(el.value);

				el.nextElementSibling.innerHTML = currency + (number_format(el.value.replaceAll(',', '')));



			}

		})

	},





	storeMemorizeData: function () {

		// diagnosis

		Boston.initialData.false_positive = ($('#false_positive').val());

		Boston.initialData.false_positive_dis = ($('#false_positive_dis').val());

		Boston.initialData.tot_cost_false = ($('#tot_cost_false').val());

		Boston.initialData.tot_cost_false_dis = ($('#tot_cost_false_dis').val());

		// Therapy

		Boston.initialData.icd_bos_science = ($('#icd_bos_science').val());

		Boston.initialData.icd_bos_science_dis = ($('#icd_bos_science_dis').val());

		Boston.initialData.crtd_bos_science = ($('#crtd_bos_science').val());

		Boston.initialData.crtd_bos_science_dis = ($('#crtd_bos_science_dis').val());

		Boston.initialData.infection_rate = ($('#infection_rate').val());

		Boston.initialData.infection_rate_dis = ($('#infection_rate_dis').val());

		Boston.initialData.tle_production_cost = ($('#tle_production_cost').val());

		Boston.initialData.tle_production_cost_dis = ($('#tle_production_cost_dis').val());



		// Monitoring

		Boston.initialData.remote_monitored = ($('#remote_monitored').val());

		Boston.initialData.remote_monitored_dis = ($('#remote_monitored_dis').val());

		Boston.initialData.avg_hospitalisation = ($('#avg_hospitalisation').val());

		Boston.initialData.avg_hospitalisation_dis = ($('#avg_hospitalisation_dis').val());

		Boston.initialData.len_hospitalisation = ($('#len_hospitalisation').val());

		Boston.initialData.len_hospitalisation_dis = ($('#len_hospitalisation_dis').val());

		Boston.initialData.hospitalisation_cost = ($('#hospitalisation_cost').val());

		Boston.initialData.hospitalisation_cost_dis = ($('#hospitalisation_cost_dis').val());

		// Boston.initialData.icd_crtd_cost = ($('#icd_crtd_cost').val());

		// Boston.initialData.icd_crtd_cost_dis = ($('#icd_crtd_cost_dis').val());

		// store in local storage

		const jsonData = JSON.stringify(Boston.initialData);

		localStorage.setItem('initial-data', jsonData);

	},



	setMemorizeData: function () {

		const data = JSON.parse(localStorage.getItem('initial-data'));

		// diagnosis

		$('#false_positive').val(data.false_positive);

		$('#false_positive_dis').val(data.false_positive_dis);

		$('#tot_cost_false').val(data.tot_cost_false);

		$('#tot_cost_false_dis').val(data.tot_cost_false_dis);

		// Therapy

		$('#icd_bos_science').val(data.icd_bos_science);

		$('#icd_bos_science_dis').val(data.icd_bos_science_dis);

		$('#crtd_bos_science').val(data.crtd_bos_science);

		$('#crtd_bos_science_dis').val(data.crtd_bos_science_dis);

		$('#infection_rate').val(data.infection_rate);

		$('#infection_rate_dis').val(data.infection_rate_dis);

		$('#tle_production_cost').val(data.tle_production_cost);

		$('#tle_production_cost_dis').val(data.tle_production_cost_dis);

		// Monitoring

		$('#remote_monitored').val(data.remote_monitored);

		$('#remote_monitored_dis').val(data.remote_monitored_dis);

		$('#avg_hospitalisation').val(data.avg_hospitalisation);

		$('#avg_hospitalisation_dis').val(data.avg_hospitalisation_dis);

		$('#len_hospitalisation').val(data.len_hospitalisation);

		$('#len_hospitalisation_dis').val(data.len_hospitalisation_dis);

		$('#hospitalisation_cost').val(data.hospitalisation_cost);

		$('#hospitalisation_cost_dis').val(data.hospitalisation_cost_dis);

		// $('#icd_crtd_cost').val(data.icd_crtd_cost);

		// $('#icd_crtd_cost_dis').val(data.icd_crtd_cost_dis);

	},



	activeGraphPortfolio: function (G_EconomicBenefit, G_TotalCost) {

		const canvas1 = document.querySelector('#economic-portfolio-graph');



		var progressData = [G_EconomicBenefit, G_TotalCost];

		var maxData = progressData.map(() => G_TotalCost);

		Chart.defaults.font.family = "SST-Bold";

		Chart.defaults.font.size = 16;

		Chart.defaults.color = "rgb(0, 61, 112)";



		let barThickness = 60;

		let maxBarThickness = 60;

		if (window.screen.width <= 1360) {

			barThickness = 45;

			maxBarThickness = 45;

		}



		Boston.chart1 = new Chart(canvas1, {

			type: 'bar',

			data: {

				labels: ['', ''],

				datasets: [

					{

						label: '',

						data: progressData,

						borderWidth: 0,

						backgroundColor: ['#660099', '#575454'],

						barThickness: barThickness, // Set a fixed bar thickness

						maxBarThickness: maxBarThickness, // Optional: Maximum bar thickness

						categoryPercentage: 0.8, // Increase the bar width relative to category width

						barPercentage: 0.8

					},

					{

						label: '',

						data: maxData,

						backgroundColor: ['#f7e6ff', '#ebebeb'],

						borderWidth: 0,

						barThickness: barThickness, // Set a fixed bar thickness

						maxBarThickness: maxBarThickness, // Optional: Maximum bar thickness

						categoryPercentage: 0.8, // Increase the bar width relative to category width

						barPercentage: 0.8

					}

				]

			},

			options: {

				responsive: true,

				maintainAspectRatio: false,

				layout: {

					padding: {

						left: 15

					}

				},

				indexAxis: 'y',

				scales: {

					x: {

						stacked: true,

						min: 0,

						max: G_TotalCost,

						grid: {

							display: false,

						},

						border: {

							width: 0 // Set x-axis border width

						},

						ticks: {
							padding: 0,
							autoSkip: false, // Ensures ticks are not skipped
							maxRotation: 45, // Allows rotation up to 45 degrees when space is insufficient
							minRotation: 20, // No rotation when space is sufficient
						}

					},

					y: {

						stacked: true,

						grid: {

							display: false,

						},

						border: {

							width: 0 // Set x-axis border width

						},

						ticks: {

							padding: 0,

						}

					}

				},

				plugins: {

					legend: {

						display: false // Hide legend to ensure no dataset labels are shown

					}

				},
				animation: {
					onComplete: function () {
						let xScale = Boston.chart1.scales.x;
						let rotationApplied = xScale.labelRotation; // Actual rotation in degrees
						// console.log('X-axis tick rotation:', rotationApplied);

						let analysisCanvas = canvas1.closest('.analysis-canvas'); // Get the closest parent element
						if (analysisCanvas) {
							let grayTextItem = analysisCanvas.querySelector('.analysis-canvas-custom .gray-analysis-text-item');
							let canvasCustom = analysisCanvas.querySelector('.analysis-canvas-custom');

							if (rotationApplied > 0) {
								if (rotationApplied < 17) {
									canvasCustom.style.marginTop = '-1px';
									if (grayTextItem) grayTextItem.style.marginTop = '10px';
									if (window.innerWidth <= 1360) {
										canvasCustom.style.marginTop = '0px';
										if (grayTextItem) grayTextItem.style.marginTop = '30px';
									}
								} else if (rotationApplied < 27) {
									canvasCustom.style.marginTop = '-7px';
									if (grayTextItem) grayTextItem.style.marginTop = '13px';
									if (window.innerWidth <= 1360) {
										canvasCustom.style.marginTop = '0px';
										if (grayTextItem) grayTextItem.style.marginTop = '21px';
									}
								} else {
									canvasCustom.style.marginTop = '-9px';
									if (grayTextItem) grayTextItem.style.marginTop = '4px';
									if (window.innerWidth <= 1360) {
										canvasCustom.style.marginTop = '-3px';
										if (grayTextItem) grayTextItem.style.marginTop = '18px';
									}
								}
							} else {
								canvasCustom.style.marginTop = '4px';
								if (grayTextItem) grayTextItem.style.marginTop = '23px';

								if (window.innerWidth <= 1360) {
									canvasCustom.style.marginTop = '7px';
									if (grayTextItem) grayTextItem.style.marginTop = '41px';
								}
							}
						}
					}
				}

			}

		});

	},



	activeGraphGHG: function (G_EconomicBenefit, G_TotalCost) {

		const canvas2 = document.querySelector('#ghg-graph');



		var progressData = [G_EconomicBenefit, G_TotalCost];

		var maxData = progressData.map(() => G_TotalCost);

		Chart.defaults.font.family = "SST-Bold";

		Chart.defaults.font.size = 16;

		Chart.defaults.color = "rgb(0, 61, 112)";



		let barThickness = 60;

		let maxBarThickness = 60;

		if (window.screen.width <= 1360) {

			barThickness = 45;

			maxBarThickness = 45;

		}



		Boston.chart2 = new Chart(canvas2, {

			type: 'bar',

			data: {

				labels: ['', ''],

				datasets: [

					{

						label: '',

						data: progressData,

						borderWidth: 0,

						backgroundColor: ['#660099', '#575454'],

						barThickness: barThickness, // Set a fixed bar thickness

						maxBarThickness: maxBarThickness, // Optional: Maximum bar thickness

						categoryPercentage: 3.2, // Increase the bar width relative to category width

						barPercentage: 3.2

					},

					{

						label: '',

						data: maxData,

						backgroundColor: ['#f7e6ff', '#ebebeb'],

						borderWidth: 0,

						barThickness: barThickness, // Set a fixed bar thickness

						maxBarThickness: maxBarThickness, // Optional: Maximum bar thickness

						categoryPercentage: 3.2, // Increase the bar width relative to category width

						barPercentage: 3.2

					}

				]

			},

			options: {

				responsive: true,

				maintainAspectRatio: false,

				layout: {

					padding: {

						left: 15

					}

				},

				indexAxis: 'y',

				scales: {

					x: {

						stacked: true,

						min: 0,

						max: G_TotalCost,

						grid: {

							display: false,

						},

						border: {

							width: 0 // Set x-axis border width

						},

						ticks: {

							padding: 0,

							// maxTicksLimit: 5,

						}

					},

					y: {

						stacked: true,

						grid: {

							display: false,

						},

						border: {

							width: 0 // Set x-axis border width

						},

						ticks: {

							padding: 0,

						}

					}

				},

				plugins: {

					legend: {

						display: false // Hide legend to ensure no dataset labels are shown

					}

				},
				animation: {
					onComplete: function () {
						let xScale = Boston.chart2.scales.x;
						let rotationApplied = xScale.labelRotation; // Actual rotation in degrees
						// console.log('X-axis tick rotation:', rotationApplied);

						let analysisCanvas = canvas2.closest('.analysis-canvas'); // Get the closest parent element
						if (analysisCanvas) {
							let grayTextItem = analysisCanvas.querySelector('.analysis-canvas-custom .gray-analysis-text-item');
							let canvasCustom = analysisCanvas.querySelector('.analysis-canvas-custom');

							if (rotationApplied > 0) {
								if (rotationApplied < 17) {
									canvasCustom.style.marginTop = '-1px';
									if (grayTextItem) grayTextItem.style.marginTop = '10px';
									if (window.innerWidth <= 1360) {
										canvasCustom.style.marginTop = '0px';
										if (grayTextItem) grayTextItem.style.marginTop = '19px';
									}
								} else if (rotationApplied < 27) {
									canvasCustom.style.marginTop = '-3px';
									if (grayTextItem) grayTextItem.style.marginTop = '9px';
									if (window.innerWidth <= 1360) {
										canvasCustom.style.marginTop = '-1px';
										if (grayTextItem) grayTextItem.style.marginTop = '15px';
									}
								} else {
									canvasCustom.style.marginTop = '-5px';
									if (grayTextItem) grayTextItem.style.marginTop = '10px';
									if (window.innerWidth <= 1360) {
										canvasCustom.style.marginTop = '-2px';
										if (grayTextItem) grayTextItem.style.marginTop = '19px';
									}
								}
							} else {
								canvasCustom.style.marginTop = '4px';
								if (grayTextItem) grayTextItem.style.marginTop = '23px';

								if (window.innerWidth <= 1360) {
									canvasCustom.style.marginTop = '7px';
									if (grayTextItem) grayTextItem.style.marginTop = '39px';
								}
							}
						}
					}
				}

			}

		});

	},



	activeGraphHospitalWaste: function (G_EconomicBenefit, G_TotalCost) {



		const canvas3 = document.querySelector('#hospital-waste');



		var progressData = [G_EconomicBenefit, G_TotalCost];

		var maxData = progressData.map(() => G_TotalCost);

		Chart.defaults.font.family = "SST-Bold";

		Chart.defaults.font.size = 16;

		Chart.defaults.color = "rgb(0, 61, 112)";



		let barThickness = 60;

		let maxBarThickness = 60;

		if (window.screen.width <= 1360) {

			barThickness = 45;

			maxBarThickness = 45;

		}



		Boston.chart3 = new Chart(canvas3, {

			type: 'bar',

			data: {

				labels: ['', ''],

				datasets: [

					{

						label: '',

						data: progressData,

						borderWidth: 0,

						backgroundColor: ['#660099', '#575454'],

						barThickness: barThickness, // Set a fixed bar thickness

						maxBarThickness: maxBarThickness, // Optional: Maximum bar thickness

						categoryPercentage: 3.2, // Increase the bar width relative to category width

						barPercentage: 3.2

					},

					{

						label: '',

						data: maxData,

						backgroundColor: ['#f7e6ff', '#ebebeb'],

						borderWidth: 0,

						barThickness: barThickness, // Set a fixed bar thickness

						maxBarThickness: maxBarThickness, // Optional: Maximum bar thickness

						categoryPercentage: 3.2, // Increase the bar width relative to category width

						barPercentage: 3.2

					}

				]

			},

			options: {

				responsive: true,

				maintainAspectRatio: false,

				layout: {

					padding: {

						left: 15

					}

				},

				indexAxis: 'y',

				scales: {

					x: {

						stacked: true,

						min: 0,

						max: G_TotalCost,

						grid: {

							display: false,

						},

						border: {

							width: 0 // Set x-axis border width

						},

						ticks: {

							padding: 0,

							// maxTicksLimit: 5,

						}

					},

					y: {

						stacked: true,

						grid: {

							display: false,

						},

						border: {

							width: 0 // Set x-axis border width

						},

						ticks: {

							padding: 0,

						}

					}

				},

				plugins: {

					legend: {

						display: false // Hide legend to ensure no dataset labels are shown

					}

				},
				animation: {
					onComplete: function () {
						let xScale = Boston.chart3.scales.x;
						let rotationApplied = xScale.labelRotation; // Actual rotation in degrees
						// console.log('X-axis tick rotation:', rotationApplied);

						let analysisCanvas = canvas3.closest('.analysis-canvas'); // Get the closest parent element
						if (analysisCanvas) {
							let grayTextItem = analysisCanvas.querySelector('.analysis-canvas-custom .gray-analysis-text-item');
							let canvasCustom = analysisCanvas.querySelector('.analysis-canvas-custom');

							if (rotationApplied > 0) {
								if (rotationApplied < 17) {
									canvasCustom.style.marginTop = '-1px';
									if (grayTextItem) grayTextItem.style.marginTop = '10px';
									if (window.innerWidth <= 1360) {
										canvasCustom.style.marginTop = '0px';
										if (grayTextItem) grayTextItem.style.marginTop = '29px';
									}
								} else if (rotationApplied < 27) {
									canvasCustom.style.marginTop = '-3px';
									if (grayTextItem) grayTextItem.style.marginTop = '9px';
									if (window.innerWidth <= 1360) {
										canvasCustom.style.marginTop = '0px';
										if (grayTextItem) grayTextItem.style.marginTop = '25px';
									}
								} else {
									canvasCustom.style.marginTop = '-4px';
									if (grayTextItem) grayTextItem.style.marginTop = '10px';
									if (window.innerWidth <= 1360) {
										canvasCustom.style.marginTop = '0px';
										if (grayTextItem) grayTextItem.style.marginTop = '29px';
									}
								}
							} else {
								canvasCustom.style.marginTop = '4px';
								if (grayTextItem) grayTextItem.style.marginTop = '23px';

								if (window.innerWidth <= 1360) {
									canvasCustom.style.marginTop = '7px';
									if (grayTextItem) grayTextItem.style.marginTop = '39px';
								}
							}
						}
					}
				}

			}

		});

	},



	activeGraphPortfolioModal: function (G_EconomicBenefit, G_TotalCost) {



		const canvas4 = document.querySelector('#economic-modal-portfolio-graph');



		var progressData = [G_EconomicBenefit, G_TotalCost];

		var maxData = progressData.map(() => G_TotalCost);

		Chart.defaults.font.family = "SST-Bold";

		Chart.defaults.font.size = 16;

		Chart.defaults.color = "rgb(0, 61, 112)";



		let barThickness = 60;

		let maxBarThickness = 60;

		if (window.screen.width <= 1360) {

			barThickness = 45;

			maxBarThickness = 45;

		}







		Boston.chart4 = new Chart(canvas4, {

			type: 'bar',

			data: {

				labels: ['', ''],

				datasets: [

					{

						label: '',

						data: progressData,

						borderWidth: 0,

						backgroundColor: ['#660099', '#575454'],

						barThickness: barThickness, // Set a fixed bar thickness

						maxBarThickness: maxBarThickness, // Optional: Maximum bar thickness

						categoryPercentage: 3.2, // Increase the bar width relative to category width

						barPercentage: 3.2

					},

					{

						label: '',

						data: maxData,

						backgroundColor: ['#f7e6ff', '#ebebeb'],

						borderWidth: 0,

						barThickness: barThickness, // Set a fixed bar thickness

						maxBarThickness: maxBarThickness, // Optional: Maximum bar thickness

						categoryPercentage: 3.2, // Increase the bar width relative to category width

						barPercentage: 3.2

					}

				]

			},

			options: {

				responsive: true,

				maintainAspectRatio: false,

				layout: {

					padding: {

						left: 15

					}

				},

				indexAxis: 'y',

				scales: {

					x: {

						stacked: true,

						min: 0,

						max: G_TotalCost,

						grid: {

							display: false,

						},

						border: {

							width: 0 // Set x-axis border width

						},

						ticks: {

							padding: 0,
							autoSkip: false, // Ensures ticks are not skipped
							maxRotation: 45, // Allows rotation up to 45 degrees when space is insufficient
							minRotation: 20, // No rotation when space is sufficient

						}

					},

					y: {

						stacked: true,

						grid: {

							display: false,

						},

						border: {

							width: 0 // Set x-axis border width

						},

						ticks: {

							padding: 0,

						}

					}

				},

				plugins: {

					legend: {

						display: false // Hide legend to ensure no dataset labels are shown

					}

				},
				animation: {
					onComplete: function () {
						let xScale = Boston.chart4.scales.x;
						let rotationApplied = xScale.labelRotation; // Actual rotation in degrees
						// console.log('X-axis tick rotation:', rotationApplied);

						let analysisCanvas = canvas4.closest('.analysis-canvas'); // Get the closest parent element
						if (analysisCanvas) {
							let grayTextItem = analysisCanvas.querySelector('.analysis-canvas-custom .gray-analysis-text-item');
							let canvasCustom = analysisCanvas.querySelector('.analysis-canvas-custom');

							if (rotationApplied > 0) {
								if (rotationApplied < 17) {
									canvasCustom.style.marginTop = '-1px';
									if (grayTextItem) grayTextItem.style.marginTop = '10px';
									if (window.innerWidth <= 1360) {
										canvasCustom.style.marginTop = '0px';
										if (grayTextItem) grayTextItem.style.marginTop = '30px';
									}
								} else if (rotationApplied < 27) {
									canvasCustom.style.marginTop = '-7px';
									if (grayTextItem) grayTextItem.style.marginTop = '13px';
									if (window.innerWidth <= 1360) {
										canvasCustom.style.marginTop = '0px';
										if (grayTextItem) grayTextItem.style.marginTop = '21px';
									}
								} else {
									canvasCustom.style.marginTop = '-9px';
									if (grayTextItem) grayTextItem.style.marginTop = '4px';
									if (window.innerWidth <= 1360) {
										canvasCustom.style.marginTop = '-3px';
										if (grayTextItem) grayTextItem.style.marginTop = '18px';
									}
								}
							} else {
								canvasCustom.style.marginTop = '4px';
								if (grayTextItem) grayTextItem.style.marginTop = '23px';

								if (window.innerWidth <= 1360) {
									canvasCustom.style.marginTop = '7px';
									if (grayTextItem) grayTextItem.style.marginTop = '41px';
								}
							}
						}
					}
				}

			}

		});

	},



	controlSICDInput: function () {

		const el = document.querySelector('#sicd-total-input');

		if (!el) return false;

		el.addEventListener('input', (e) => {

			// console.log(e.target.value.trim());

			if (e.target.value.trim() > 0) {

				$('#sicd-percentage-input').val(100);

			} else {

				$('#sicd-percentage-input').val('');
				console.log($('#sicd-percentage-input').val());

			}

		})

	},



	currencyInputMirror: function () {

		const els = document.querySelectorAll('[data-symbol="currency"]');

		els.forEach((el) => {

			const str = `

			  <span class="currency-input-wrapper">

					${el.outerHTML}

				  <span class="currency-input-mirror"></span>

				</span>

			`;

			el.insertAdjacentHTML('afterend', str);

			el.remove();

		})

	},



	storeAmendInputs: function () {

		const el = document.querySelector('#amend-input-form');

		if (!el) return false;

		el.addEventListener('submit', function () {

			const inputs = document.querySelectorAll('#amend-input-form .boston-input');

			const amendInputs = {};

			inputs.forEach((el) => {

				amendInputs[el.id] = el.value.trim();

			})

			localStorage.setItem('amend-input', JSON.stringify(amendInputs));

		})

	},



	setAmendInputs: function () {

		const data = JSON.parse(localStorage.getItem('amend-input'));

		for (let el in data) {

			const element = document.querySelector('#' + el);

			if (!element) return false;

			element.value = data[el];

			if (data[el] > 0) {

				element.closest('tr').classList.add('cinputs-enable');

				element.setAttribute('tabindex', 0);

				element.style.pointerEvents = 'inherit';

			} else {

				element.closest('tr').classList.add('cinputs-disable');

				element.setAttribute('tabindex', -1);

				element.classList.add('disabled')

			}



		}



		const data2 = JSON.parse(localStorage.getItem('amend-input'));

		for (let el in data2) {

			const element = document.querySelector('#' + el);

			if (element.closest('tr.cinputs-enable')) {

				element.closest('tr').classList.add('cinputs-enable');

				element.closest('tr').classList.remove('cinputs-disable');

				element.closest('tr.cinputs-enable')?.querySelectorAll('.boston-input')?.forEach((el) => {

					element.setAttribute('tabindex', 0);

					element.classList.remove('disabled')

				})

			}

		}



		$('tr.cinputs-enable [value="yes"]').attr("checked", true)

		$('tr.cinputs-disable [value="no"]').attr("checked", true)



		$('#amend-percent-input1').css('pointer-events', 'inherit').attr('tabindex', 0).removeClass('disabled');

		$('#amend-patient-input3').css('pointer-events', 'inherit').attr('tabindex', 0).removeClass('disabled');

		$('.input-page').css('opacity', 1);







	},



	portfolioCalcFormSubmit: function () {

		const formEl = document.querySelector('#portfolio-calc-form');

		if (!formEl) return false;

		formEl.addEventListener('submit', () => {

			localStorage.setItem('hospital-name', $('#hospital-name').val());

		})

	},



	styleModifyFieldOnLoad: function () {

		const fields = JSON.parse(localStorage.getItem('modifie-fields'));

		if (!fields) return false;

		fields.forEach(function (elId) {

			$('#' + elId).attr('data-modified', true);

		})

	},



	getMemorizeTab: function () {

		const elId = localStorage.getItem('memorize-tab') || 'diagnosis';

		const el = document.querySelector(`[data-menu-item="${elId}"]`);

		if (!el) return false;

		el.click();

	},



	init: function () {

		this.currencyInputMirror();

		this.actionTab();

		this.getMemorizeTab();

		this.actionOpenModal();

		this.actionCutModal();

		this.slideResultUpdate();

		this.select2Active();

		this.validateNumberInput();

		this.cinputChecksTableAction();

		this.calRemoteMonitoring();

		this.controlSICDInput();

		const self = this;

		$('.percent-value').each(function () {

			$(this).on('input', function () {

				if ($(this).val() > 100) {

					$(this).val(100)

				}

				if ($(this).val() < 0) {

					$(this).val(0)

				}

			})

		})

		$('.remote-monitor-input').each(function () {

			$(this).on('input', function () {

				self.calRemoteMonitoring();

			})

		})

		$('.remote-monitor-input-percent').each(function () {

			$(this).on('input', function () {

				self.calRemoteMonitoring();

			})

		})

		this.storeAmendInputs();

		this.portfolioCalcFormSubmit();





	}

}



const Diagnosis = {

	openTabulatormodal: function () {

		$(document).on('click', '#diagnosis_tabular_modal_btn', function () {

			$('#table_false_positive').html($('#false_positive').val())

			$('#table_false_positive_dis').html($('#false_positive_dis').val())

			$('#table_tot_cost_false').html(trimAndParse('#tot_cost_false'))

			$('#table_tot_cost_false_dis').html(trimAndParse('#tot_cost_false_dis'))

			$('#table_diagnostic_cost').html($('#diagnostic_cost').html())

			$('#table_diagnostic_cost_dis').html($('#diagnostic_cost_dis').html())

			$('#table_tot_diagnostic_cost').html($('#tot_diagnostic_cost').html())

			$('#table_tot_diagnostic_cost_dis').html($('#tot_diagnostic_cost_dis').html())

			$('#table_boston_scientific').html($('#boston_scientific').html())

			$('#table_tot_boston_scientific').html($('#tot_boston_scientific').html())

			$('#diagnosis-tabular-modal-wrapper').addClass('show');

		})

	},



	resetIput: function () {

		$(document).on('click', '.diagnosis_reset_btn', function () {

			$(this).closest('tr').find('.boston-sminput').each(function () {

				var dataValue = $(this).attr('data-value');

				$(this).val(dataValue);

				$(this).attr('data-modified', false);

			})

			Boston.storeMemorizeData();

			ResultCalculation.resultMainCalculation();

			Boston.trackModifyInput();

		})

	},



	openSliderModel: function () {

		$(document).on('click', '#diagnosis_modal_open', function (e) {

			$('#modal_boston_scientific').html($('#boston_scientific').html())

			$('#modal_tot_boston_scientific').html($('#tot_boston_scientific').html())

			$('#diagnosis_slider').val($('.icm_percent_display').html());

			$('#diagnosis_slider').parent().find('.range-result').html($('.icm_percent_display').html() + '%').css('left', $('.icm_percent_display').html() + '%')

			$('#diagnosis_slider').parent().find('.range-thumb').css('left', $('.icm_percent_display').html() + '%')

			$('#modified_tot_boston_scientific').html($('#tot_boston_scientific').html())

			$('#diagnosis-modal').addClass('show');

		})

	},



	recalculate: function () {

		$(document).on('click', '.diagnosis-recalculate', function (e) {

			let changedPercentage = $('#diagnosis_slider').val(),

				oldICM = parseFloat($('.icm_display').html());



			const D_ownFalsePos_modified = trimAndParse('#false_positive'); //number as percent

			const D_ownCostFalsePosTotal_modified = trimAndParse('#tot_cost_false');

			const D_ownDiagnosticCost_modified = D_ownCostFalsePosTotal_modified * D_ownFalsePos_modified / 100;



			//Other device numbers

			const D_otherFalsePos_modified = trimAndParse('#false_positive_dis'); //number as percent

			const D_otherCostFalsePosTotal_modified = trimAndParse('#tot_cost_false_dis');

			const D_otherDiagnosticCost_modified = D_otherCostFalsePosTotal_modified * D_otherFalsePos_modified / 100;

			//Benefit

			const D_BSCBenefitPatientYear_modified = D_otherDiagnosticCost_modified - D_ownDiagnosticCost_modified;

			const D_TotalBSCBenefitYear_modified = D_BSCBenefitPatientYear_modified * oldICM * changedPercentage / 100;

			$('#modified_tot_boston_scientific').html(number_format(D_TotalBSCBenefitYear_modified, ','))

		})

	},



	init: function () {

		this.openTabulatormodal();

		this.resetIput();

		this.openSliderModel();

		this.recalculate();

	}

}



const Therapy = {

	openTabulatormodal: function () {

		$(document).on('click', '.icd-crtd-table-modal-btn', function () {

			$('#table_icd_bos_science').html(number_format(trimAndParse('#icd_bos_science'), 2, '.', ','))

			$('#table_icd_bos_science_dis').html(number_format(trimAndParse('#icd_bos_science_dis'), 2, '.', ','))

			$('#table_crtd_bos_science').html(number_format(trimAndParse('#crtd_bos_science'), 2, '.', ','))

			$('#table_crtd_bos_science_dis').html(number_format(trimAndParse('#crtd_bos_science_dis'), 2, '.', ','))

			$('#table_tot_icd_cost').html($('#tot_icd_cost').val())

			$('#table_tot_icd_cost_dis').html($('#tot_icd_cost_dis').val())

			$('#table_tot_icd_bos_science').html($('#tot_icd_bos_science').html())

			$('#table_tot_crtd_cost').html($('#tot_crtd_cost').val())

			$('#table_tot_crtd_cost_dis').html($('#tot_crtd_cost_dis').val())

			$('#table_tot_crtd_bos_science').html($('#tot_crtd_bos_science').html())

			$('#table_tot_bos_science').html($('#tot_bos_science').html())

			$('#therapy-device-tabular-modal-wrapper').addClass('show');

		})

		$(document).on('click', '.sicd-table-modal-btn', function () {

			$('#table_infection_rate').html($('#infection_rate').val())

			$('#table_infection_rate_dis').html($('#infection_rate_dis').val())

			$('#table_tle_production_cost').html(number_format(trimAndParse('#tle_production_cost'), 2, '.', ','))

			$('#table_tle_production_cost_dis').html(number_format(trimAndParse('#tle_production_cost_dis'), 2, '.', ','))

			$('#table_tle_cost_year').html($('#tle_cost_year').html())

			$('#table_tle_cost_year_dis').html($('#tle_cost_year_dis').html())

			$('#table_tot_tle_cost').html($('#tot_tle_cost').html())

			$('#table_tot_tle_cost_dis').html($('#tot_tle_cost_dis').html())

			$('#table_icd_benifit_year').html($('#icd_benifit_year').html())

			$('#table_tot_icd_benifit_year').html($('#tot_icd_benifit_year').html())

			$('#therapy-tle-tabular-modal-wrapper').addClass('show');

		})

	},

	resetIput: function () {

		$(document).on('click', '.therapy_reset_btn', function () {

			$(this).closest('.tr-reset').find('.boston-sminput').each(function () {

				var dataValue = $(this).attr('data-value');

				$(this).val(dataValue);

				$(this).attr('data-modified', false);

			})



			Boston.storeMemorizeData();

			ResultCalculation.resultMainCalculation();

			Boston.trackModifyInput();



		})

	},

	openSliderModel: function () {

		$(document).on('click', '#therapy_modal_open', function (e) {

			$('#modal_tot_icd_bos_science').html($('#tot_icd_bos_science').html())

			$('#modal_tot_crtd_bos_science').html($('#tot_crtd_bos_science').html())

			$('#modal_tot_bos_science').html($('#tot_bos_science').html())

			$('#modal_icd_benifit_year').html($('#icd_benifit_year').html())

			$('#modal_tot_icd_benifit_year').html($('#tot_icd_benifit_year').html())

			$('#cal_modal_tot_bos_science').html($('#tot_bos_science').html())

			$('#cal_modal_tot_icd_benifit_year').html($('#tot_icd_benifit_year').html())



			$('#modal_slider_tvicd').parent().find('.range-result').html($('.tvicd_percent_display').html() + '%').css('left', $('.tvicd_percent_display').html() + '%')

			$('#modal_slider_tvicd').parent().find('.range-thumb').css('left', $('.tvicd_percent_display').html() + '%')

			$('#modal_slider_tvicd').val($('.tvicd_percent_display').html());



			$('#modal_slider_crtd').parent().find('.range-result').html($('.crtd_display_percent').html() + '%').css('left', $('.crtd_display_percent').html() + '%')

			$('#modal_slider_crtd').parent().find('.range-thumb').css('left', $('.crtd_display_percent').html() + '%')

			$('#modal_slider_crtd').val($('.crtd_display_percent').html());

			$('#therapy-modal').addClass('show');

		})

	},

	recalculate: function () {

		$(document).on('click', '.therapy-recalculate', function (e) {

			let changedtvicdPercentage = $('#modal_slider_tvicd').val(),

				changedcrtdPercentage = $('#modal_slider_crtd').val(),

				oldtvicd = parseFloat($('.tvicd_display').html()),

				oldcrtd = parseFloat($('.crtd_display').html())



			const N_DTL_BSCBenefitICDPatientYear = trimValue($('#modal_tot_icd_bos_science').html())

			const N_DTL_BSCBenefitCRTDPatientYear = trimValue($('#modal_tot_crtd_bos_science').html())

			const N_DTL_TotalBSCBenefitYear = (N_DTL_BSCBenefitICDPatientYear * oldtvicd * changedtvicdPercentage / 100) + (N_DTL_BSCBenefitCRTDPatientYear * oldcrtd * changedcrtdPercentage / 100);

			$('#cal_modal_tot_bos_science').html(number_format(N_DTL_TotalBSCBenefitYear, ','))

		})

	},



	init: function () {

		this.openTabulatormodal();

		this.resetIput();

		this.openSliderModel();

		this.recalculate();

	}

}



const Monitoring = {

	openTabulatormodal: function () {

		$(document).on('click', '.monitoring-crtd-tabular-modal-btn', function () {

			$('#tbl_remote_monitored').html(number_format(trimAndParse('#remote_monitored'), 2, '.', ','))

			$('#tbl_remote_monitored_dis').html(number_format(trimAndParse('#remote_monitored_dis'), 2, '.', ','))

			$('#tbl_remote_monitored_benifit').html($('#remote_monitored_benifit').html())

			$('#tbl_tot_remote_monitored').html($('#tot_remote_monitored').html())

			$('#tbl_tot_remote_monitored_dis').html($('#tot_remote_monitored_dis').html())

			$('#tbl_tot_remote_monitored_benifit').html($('#tot_remote_monitored_benifit').html())

			$('#monitoring-crtd-tabular-modal-wrapper').addClass('show');

		})



		$(document).on('click', '.monitoring-heart-tabular-modal-btn', function () {

			$('#tbl_avg_hospitalisation').html(number_format(trimAndParse('#avg_hospitalisation'), 2, '.', ','))

			$('#tbl_len_hospitalisation').html(number_format(trimAndParse('#len_hospitalisation'), 2, '.', ','))

			$('#tbl_hospitalisation_cost').html(number_format(trimAndParse('#hospitalisation_cost'), 2, '.', ','))

			$('#tbl_icd_crtd_cost').html($('#icd_crtd_cost').html())

			$('#tbl_avg_hospitalisation_dis').html(number_format(trimAndParse('#avg_hospitalisation_dis'), 2, '.', ','))

			$('#tbl_len_hospitalisation_dis').html(number_format(trimAndParse('#len_hospitalisation_dis'), 2, '.', ','))

			$('#tbl_hospitalisation_cost_dis').html(number_format(trimAndParse('#hospitalisation_cost_dis'), 2, '.', ','))

			$('#tbl_icd_crtd_cost_dis').html($('#icd_crtd_cost_dis').html())

			$('#tbl_tot_hospitalisation_cost').html($('#tot_hospitalisation_cost').html())

			$('#tbl_tot_hospitalisation_cost_dis').html($('#tot_hospitalisation_cost_dis').html())

			$('#tbl_hospitalisation_benifit').html($('#hospitalisation_benifit').html())

			$('#tbl_tot_hospitalisation_benifit').html($('#tot_hospitalisation_benifit').html())

			$('#monitoring-heart-tabular-modal-wrapper').addClass('show');

		})

	},

	resetIput: function () {

		$(document).on('click', '.monitoring-reset-btn', function () {

			$(this).closest('.tr-reset').find('.boston-sminput').each(function () {

				var dataValue = $(this).attr('data-value');

				$(this).val(dataValue);

				$(this).attr('data-modified', false);

			})

			Boston.storeMemorizeData();

			ResultCalculation.resultMainCalculation();

			Boston.trackModifyInput();

		})

	},



	init: function () {

		this.openTabulatormodal();

		this.resetIput();

	}

}

const Portfolio = {

	openSliderModel: function () {

		$(document).on('click', '#portfolio_modal_open', function (e) {

			$('#modal_Eco_impact').html($('#Eco_impact').html())

			$('#modal_Eco_impact_dis').html($('#Eco_impact_dis').html())

			$('#modal_Eco_impact_dif').html($('#Eco_impact_dif').html())
			$('#modal_Eco_impact_dif').attr('data-number', trimValue($('#Eco_impact_dif').html()));

			$('#cal_modal_Eco_impact_dis').html($('#Eco_impact_dif').html())
			$('#cal_modal_Eco_impact_dis').attr('data-number', trimValue($('#Eco_impact_dif').html()));


			let val1 = trimValue($('#Eco_impact').html());

			let val2 = trimValue($('#Eco_impact_dis').html());

			if (Boston.chart4) Boston.chart4.destroy();

			Boston.activeGraphPortfolioModal(val1, val2);



			$('#portfolio_slider_1').parent().find('.range-result').html($('.icm_percent_display').html() + '%').css('left', $('.icm_percent_display').html() + '%')

			$('#portfolio_slider_1').parent().find('.range-thumb').css('left', $('.icm_percent_display').html() + '%')

			$('#portfolio_slider_1').val($('.icm_percent_display').html());

			$('#portfolio_slider_2').parent().find('.range-result').html($('.tvicd_percent_display').html() + '%').css('left', $('.tvicd_percent_display').html() + '%')

			$('#portfolio_slider_2').parent().find('.range-thumb').css('left', $('.tvicd_percent_display').html() + '%')

			$('#portfolio_slider_2').val($('.tvicd_percent_display').html());

			$('#portfolio_slider_3').parent().find('.range-result').html($('.sicd_display_percent').html() + '%').css('left', $('.sicd_display_percent').html() + '%')

			$('#portfolio_slider_3').parent().find('.range-thumb').css('left', $('.sicd_display_percent').html() + '%')

			$('#portfolio_slider_3').val($('.sicd_display_percent').html());

			$('#portfolio_slider_4').parent().find('.range-result').html($('.crtd_display_percent').html() + '%').css('left', $('.crtd_display_percent').html() + '%')

			$('#portfolio_slider_4').parent().find('.range-thumb').css('left', $('.crtd_display_percent').html() + '%')

			$('#portfolio_slider_4').val($('.crtd_display_percent').html());

			$('#portfolio-modal').addClass('show');
			$('.num-box-cust').html('1');

		})

	},

	recalculate: function () {

		$(document).on('click', '.portfolio-recalculate', function (e) {

			let changedicmPercentage = $('#portfolio_slider_1').val(),

				changedtvicdPercentage = $('#portfolio_slider_2').val(),

				changedcrtdPercentage = $('#portfolio_slider_4').val(),

				oldicm = parseFloat($('.icm_display').html()),

				oldtvicd = parseFloat($('.tvicd_display').html()),

				oldcrtd = parseFloat($('.crtd_display').html())



			// diagnosis

			// const N_icm_othercost = trimValue($('#tot_diagnostic_cost_dis').html());

			//Benefit

			const NICM_TotalBSCBenefitYear = trimValue($('#boston_scientific').html()) * oldicm * changedicmPercentage / 100;



			// Therapy

			// const DTL_otherLongevityICDAvgYrCost = trimAndParse('#icd_bos_science_dis');

			// const N_tvicd_othercost = oldtvicd * DTL_otherLongevityICDAvgYrCost;

			// const DTL_otherLongevityCRTDAvgYrCost = trimAndParse('#crtd_bos_science_dis');

			// const N_crtd_othercost = oldcrtd * DTL_otherLongevityCRTDAvgYrCost;

			//Benefit

			const N_DTL_BSCBenefitICDPatientYear = trimValue($('#tot_icd_bos_science').html());

			const N_DTL_BSCBenefitCRTDPatientYear = trimValue($('#tot_crtd_bos_science').html());

			const N_DTL_TotalBSCBenefitYear = ((N_DTL_BSCBenefitICDPatientYear) * oldtvicd * changedtvicdPercentage / 100) + (N_DTL_BSCBenefitCRTDPatientYear * oldcrtd * changedcrtdPercentage / 100);



			//Transvenous Lead Extraction

			//Other Device Numbers

			// const N_sicd_othercost = trimValue($('#tot_tle_cost_dis').html());

			//Benefit

			const N_DTT_TotalBSCBenefitYear = trimValue($('#tot_icd_benifit_year').html());



			// Remote Monitoring

			//Other Device Numbers

			// const N_rm_othercost = trimValue($('#tot_remote_monitored_dis').html());

			//Benefit

			const N_RM_TotalBSCBenefitYear = trimValue($('#tot_remote_monitored_benifit').html());

			//Heartlogic

			// const N_hl_othercost = trimValue($('#tot_hospitalisation_cost_dis').html());

			//Benefit

			const N_HL_TotalBSCBenefitYear = trimValue($('#tot_hospitalisation_benifit').html());

			const N_G_EconomicBenefit = NICM_TotalBSCBenefitYear + N_DTL_TotalBSCBenefitYear + N_DTT_TotalBSCBenefitYear + N_RM_TotalBSCBenefitYear + N_HL_TotalBSCBenefitYear;

			// const N_G_TotalCost = N_icm_othercost + N_tvicd_othercost + N_crtd_othercost + N_sicd_othercost + N_rm_othercost + N_hl_othercost;

			// const N_G_ownTotalCost = N_G_TotalCost - N_G_EconomicBenefit;

			// $('#cal_modal_Eco_impact_dis').html(number_format(N_G_EconomicBenefit, ','))
			$('#cal_modal_Eco_impact_dis').attr('data-number', N_G_EconomicBenefit);
			let updated_cal_modal_Eco_impact_dis = $('#cal_modal_Eco_impact_dis').closest('.change-num-main-box').find('.num-box-cust').html();
			let updated_cal_modal_Eco_impact_dis_number = $('#cal_modal_Eco_impact_dis').attr('data-number');
			let updated_cal_modal_Eco_impact_dis_total = updated_cal_modal_Eco_impact_dis * updated_cal_modal_Eco_impact_dis_number;
			$('#cal_modal_Eco_impact_dis').html(number_format(updated_cal_modal_Eco_impact_dis_total, ','));
		})

	},

	init: function () {

		this.openSliderModel();

		this.recalculate()

	}

}



const ResultCalculation = {

	loadData: function () {

		var _urlHref$split$;

		const urlHref = location.href;

		let parameterArr = ((_urlHref$split$ = urlHref.split('.html?')[1]) === null || _urlHref$split$ === void 0 ? void 0 : _urlHref$split$.split('&')) || [];

		const parameterObj = {

			country: '',

		};

		parameterArr.forEach(item => {

			const itemArr = item.split('=');

			parameterObj[itemArr[0]] = itemArr[1];

		});

		Boston.country = parameterObj["country"]?.replace(/\+/g, " ") || '';

		if (location.pathname.includes('result.html')) {

			$('#hospitalisation_cost').val(number_format(global_hospitalisation[Boston.country]['hospitalisation']), 2, '.', ',')

			$('#hospitalisation_cost_dis').val(number_format(global_hospitalisation[Boston.country]['hospitalisation']), 2, '.', ',')

			$('#hospitalisation_cost').attr('data-value', global_hospitalisation[Boston.country]['hospitalisation'])

			$('#hospitalisation_cost_dis').attr('data-value', global_hospitalisation[Boston.country]['hospitalisation'])

			const falsepositive = global_hospitalisation[Boston.country]['nurse'] + global_hospitalisation[Boston.country]['physician'];

			$('#tot_cost_false').val(number_format(falsepositive, 2, '.', ','))

			$('#tot_cost_false_dis').val(number_format(falsepositive, 2, '.', ','))

			$('#tot_cost_false').attr('data-value', falsepositive)

			$('#tot_cost_false_dis').attr('data-value', falsepositive)



			// Portfolio Currency Sign Update		

			const country_currency = Currency_names[Boston.country];

			$('.portfolio-currency-k').html(`${country_currency}`);



			if (currency_rate[Boston.country]) {

				let newICD = currency_rate[Boston.country] * $('#icd_bos_science').attr('data-value'),

					newICDDIS = currency_rate[Boston.country] * $('#icd_bos_science_dis').attr('data-value'),

					newCRTD = currency_rate[Boston.country] * $('#crtd_bos_science').attr('data-value'),

					newCRTDDIS = currency_rate[Boston.country] * $('#crtd_bos_science_dis').attr('data-value'),

					newTLE = currency_rate[Boston.country] * $('#tle_production_cost').attr('data-value'),

					newTLEDIS = currency_rate[Boston.country] * $('#tle_production_cost_dis').attr('data-value'),

					newREM = currency_rate[Boston.country] * $('#remote_monitored').attr('data-value'),

					newREMDIS = currency_rate[Boston.country] * $('#remote_monitored_dis').attr('data-value')

				// newCRTDC = currency_rate[Boston.country] * $('#icd_crtd_cost').attr('data-value'),

				// newCRTDCDIS = currency_rate[Boston.country] * $('#icd_crtd_cost_dis').attr('data-value')



				$('#icd_bos_science').val(number_format(newICD, 2, '.', ','))

				$('#icd_bos_science').attr('data-value', number_format(newICD, 2, '.', ','))

				$('#icd_bos_science_dis').val(number_format(newICDDIS, 2, '.', ','))

				$('#icd_bos_science_dis').attr('data-value', number_format(newICDDIS, 2, '.', ','))

				$('#crtd_bos_science').val(number_format(newCRTD, 2, '.', ','))

				$('#crtd_bos_science').attr('data-value', number_format(newCRTD, 2, '.', ','))

				$('#crtd_bos_science_dis').val(number_format(newCRTDDIS, 2, '.', ','))

				$('#crtd_bos_science_dis').attr('data-value', number_format(newCRTDDIS, 2, '.', ','))

				$('#tle_production_cost').val(number_format(newTLE, 2, '.', ','))

				$('#tle_production_cost').attr('data-value', number_format(newTLE, 2, '.', ','))

				$('#tle_production_cost_dis').val(number_format(newTLEDIS, 2, '.', ','))

				$('#tle_production_cost_dis').attr('data-value', number_format(newTLEDIS, 2, '.', ','))

				$('#remote_monitored').val(number_format(newREM, 2, '.', ','))

				$('#remote_monitored_text').html(number_format(newREM, 2, '.', ','))

				$('#remote_monitored').attr('data-value', number_format(newREM, 2, '.', ','))

				$('#remote_monitored_dis').val(number_format(newREMDIS, 2, '.', ','))

				$('#remote_monitored_dis_text').html(number_format(newREMDIS, 2, '.', ','))

				$('#remote_monitored_dis').attr('data-value', number_format(newREMDIS, 2, '.', ','))

				// $('#icd_crtd_cost').val(number_format(newCRTDC, 2, '.', ','))

				// $('#icd_crtd_cost').attr('data-value', number_format(newCRTDC, 2, '.', ','))

				// $('#icd_crtd_cost_dis').val(number_format(newCRTDCDIS, 2, '.', ','))

				// $('#icd_crtd_cost_dis').attr('data-value', number_format(newCRTDCDIS, 2, '.', ','))

			}

			if (currency_class[Boston.country]) {

				$('.percendiff-monitoring').attr('id', currency_class[Boston.country])

			} else {

				$('.percendiff-monitoring').attr('id', '')

			}

		}



		if (global_hospitalisation[Boston.country]) {

			$('#diagnosis-caution').html(global_hospitalisation[Boston.country]['diagnosis']);

			$('#monitoring-caution').html(global_hospitalisation[Boston.country]['monitoring']);

		}



		Boston.styleModifyFieldOnLoad();

	},



	resultMainCalculation: function () {

		var _urlHref$split$;

		const urlHref = location.href;

		let parameterArr = ((_urlHref$split$ = urlHref.split('.html?')[1]) === null || _urlHref$split$ === void 0 ? void 0 : _urlHref$split$.split('&')) || [];

		const parameterObj = {

			country: '',

		};



		parameterArr.forEach(item => {

			const itemArr = item.split('=');

			parameterObj[itemArr[0]] = itemArr[1];

		});



		if (location.pathname.includes('index.html')) {

			localStorage.removeItem('amend-input');

			localStorage.removeItem('modifie-fields');

			localStorage.removeItem('memorize-tab');

			localStorage.removeItem('initial-data');

			remove_rhythm_total();

		}



		if (location.pathname.includes('input.html')) {

			localStorage.removeItem('memorize-tab');

			$('#country').val(parameterObj["country"]?.replace(/\+/g, " ") || '');

			Boston.country = parameterObj["country"]?.replace(/\+/g, " ") || '';

			Boston.showCurrentCurrencySymbol();

			$('#hospital').val(parameterObj["hospital"]?.replace(/\+/g, " ") || '');

			$('.country-name').html(parameterObj["country"]?.replace(/\+/g, " ") || '');

			$('.hospital-name').html(localStorage.getItem('hospital-name') || '');

			// localStorage.removeItem('amend-input');

			localStorage.removeItem('modifie-fields');

			localStorage.removeItem('memorize-tab');

			localStorage.removeItem('initial-data');

			remove_rhythm_total();

		} else {

			if (!location.pathname.includes('result.html')) {

				localStorage.removeItem('amend-input');

				localStorage.removeItem('modifie-fields');

				localStorage.removeItem('memorize-tab');

				localStorage.removeItem('initial-data');
				remove_rhythm_total();
				return;

			}

			if (localStorage.getItem('initial-data')) {

				Boston.setMemorizeData();

			} else {

				Boston.storeMemorizeData();

			}



			const country = parameterObj["country"]?.replace(/\+/g, " ") || '';

			const hospital = localStorage.getItem('hospital-name') || '';

			const LuxDx = parameterObj["icm_input"];

			const TVICD = parameterObj["tv_icd"];

			const SICD = parameterObj["s_icd"];

			const CRT = parameterObj["crt_d"];

			const LuxDxPercent = parameterObj["icm_input_percent"];

			const TVICDPercent = parameterObj["tv_icd_percent"];

			const SICDPercent = parameterObj["s_icd_percent"];

			const CRTPercent = parameterObj["crt_d_percent"];

			const RemoteMonitoredPercent = parameterObj["remote_monitored_percent"];

			const TotRemoteMonitored = parameterObj["tot_remote_monitored"];

			const HearLogicPercent = parameterObj["heartlogic_precent"];

			const TotHeartLogic = parameterObj["tot_heartlogic"];



			$('.country-name').html(country);

			$('.hospital-name').html(hospital)

			$('.amend-input').attr('href', 'input.html?country=' + country + '&hospital=' + hospital)

			$('.icm_display').html(LuxDx)

			$('.icm_percent_display').html(LuxDxPercent)

			$('.tvicd_display').html(TVICD)

			$('.tvicd_percent_display').html(TVICDPercent)

			$('.sicd_display').html(SICD);

			$('.sicd_display_percent').html(SICDPercent)

			$('.crtd_display').html(CRT)

			$('.crtd_display_percent').html(CRTPercent)

			$('.remote_monitred_percent').html(RemoteMonitoredPercent)

			$('.tot_remote_monitoed').html(TotRemoteMonitored)

			$('.heart_logic_percent').html(HearLogicPercent)

			$('.tot_heart_logic').html(TotHeartLogic)

			Boston.showCurrentCurrencySymbol();



			// Diagnostic Starts

			const D_ownFalsePos = trimAndParse('#false_positive'); //number as percent

			const D_ownCostFalsePosTotal = trimAndParse('#tot_cost_false');

			const D_ownDiagnosticCost = D_ownCostFalsePosTotal * D_ownFalsePos / 100;

			const D_ownTotalDiagnosticCost = D_ownDiagnosticCost * LuxDx;

			const D_otherFalsePos = trimAndParse('#false_positive_dis'); //number as percent

			const D_otherCostFalsePosTotal = trimAndParse('#tot_cost_false_dis');

			const D_otherDiagnosticCost = D_otherCostFalsePosTotal * D_otherFalsePos / 100;

			const D_otherTotalDiagnosticCost = D_otherDiagnosticCost * LuxDx;





			//Benefit

			const D_BSCBenefitPatientYear = D_otherDiagnosticCost - D_ownDiagnosticCost;

			const D_TotalBSCBenefitYear = D_BSCBenefitPatientYear * LuxDx * LuxDxPercent / 100;

			$('#diagnostic_cost').html(number_format(D_ownDiagnosticCost, 2, '.', ','));

			$('#diagnostic_cost_dis').html(number_format(D_otherDiagnosticCost, 2, '.', ','));

			$('#tot_diagnostic_cost').html(number_format(D_ownTotalDiagnosticCost, ','));

			$('#tot_diagnostic_cost_dis').html(number_format(D_otherTotalDiagnosticCost, ','));

			$('#boston_scientific').html(number_format(D_BSCBenefitPatientYear, 2, '.', ','));

			$('#tot_boston_scientific').html(number_format(D_TotalBSCBenefitYear, ','));

			// Diagnostic ends





			// Therapy Starts

			const DTL_ownLongevityICDAvgYrCost = trimAndParse('#icd_bos_science');

			const DTL_otherLongevityICDAvgYrCost = trimAndParse('#icd_bos_science_dis');

			const DTL_ownTotalICDCost = TVICD * DTL_ownLongevityICDAvgYrCost;

			const DTL_otherTotalICDCost = TVICD * DTL_otherLongevityICDAvgYrCost;

			const DTL_ownLongevityCRTDAvgYrCost = trimAndParse('#crtd_bos_science');

			const DTL_otherLongevityCRTDAvgYrCost = trimAndParse('#crtd_bos_science_dis');

			const DTL_ownTotalCRTDCost = CRT * DTL_ownLongevityCRTDAvgYrCost;

			const DTL_otherTotalCRTDCost = CRT * DTL_otherLongevityCRTDAvgYrCost;

			//Benefit

			const DTL_BSCBenefitICDPatientYear = DTL_otherLongevityICDAvgYrCost - DTL_ownLongevityICDAvgYrCost;

			const DTL_BSCBenefitCRTDPatientYear = DTL_otherLongevityCRTDAvgYrCost - DTL_ownLongevityCRTDAvgYrCost;

			const DTL_TotalBSCBenefitYear = ((DTL_otherTotalICDCost - DTL_ownTotalICDCost) * TVICDPercent / 100) + ((DTL_otherTotalCRTDCost - DTL_ownTotalCRTDCost) * CRTPercent / 100);

			$('#tot_icd_cost').val(number_format(DTL_ownTotalICDCost, 2, '.', ','));

			$('#tot_icd_cost_dis').val(number_format(DTL_otherTotalICDCost, 2, '.', ','));

			$('#tot_icd_bos_science').html(number_format(DTL_BSCBenefitICDPatientYear, 2, '.', ','));

			$('#tot_crtd_cost').val(number_format(DTL_ownTotalCRTDCost, 2, '.', ','));

			$('#tot_crtd_cost_dis').val(number_format(DTL_otherTotalCRTDCost, 2, '.', ','));

			$('#tot_crtd_bos_science').html(number_format(DTL_BSCBenefitCRTDPatientYear, 2, '.', ','));

			$('#tot_bos_science').html(number_format(DTL_TotalBSCBenefitYear, ','));



			//Transvenous Lead Extraction

			//BSC Numbers

			const DTT_ownInfectionsPatientYear = trimAndParse('#infection_rate'); //number as percent

			const DTT_ownProcCost = trimAndParse('#tle_production_cost');

			const DTT_ownCostPatientYear = DTT_ownProcCost * DTT_ownInfectionsPatientYear / 100;

			const DTT_ownTotalCost = SICD * Number(DTT_ownCostPatientYear).toFixed(2);

			//Other Device Numbers

			const DTT_otherInfectionsPatientYear = trimAndParse('#infection_rate_dis'); //number as percent

			const DTT_otherProcCost = trimAndParse('#tle_production_cost_dis');

			const DTT_otherCostPatientYear = DTT_otherProcCost * DTT_otherInfectionsPatientYear / 100;

			const DTT_otherTotalCost = SICD * Number(DTT_otherCostPatientYear).toFixed(2);

			//Benefit

			const DTT_BSCBenefitICDPatientYear = DTT_otherCostPatientYear - DTT_ownCostPatientYear;

			const DTT_TotalBSCBenefitYear = (DTT_otherTotalCost - DTT_ownTotalCost) * SICDPercent / 100;

			$('#tle_cost_year').html(number_format(DTT_ownCostPatientYear, 2, '.', ','))

			$('#tle_cost_year_dis').html(number_format(DTT_otherCostPatientYear, 2, '.', ','))

			$('#icd_benifit_year').html(number_format(DTT_BSCBenefitICDPatientYear, 2, '.', ','))

			$('#tot_tle_cost').html(number_format(DTT_ownTotalCost, ','))

			$('#tot_tle_cost_dis').html(number_format(DTT_otherTotalCost, ','))

			$('#tot_icd_benifit_year').html(number_format(DTT_TotalBSCBenefitYear, ','))



			//Remote Monitoring

			const RM_ownCostPatientYear = trimAndParse('#remote_monitored');

			const RM_ownTotalCost = TotRemoteMonitored * RM_ownCostPatientYear;

			//Other Device Numbers

			const RM_otherCostPatientYear = trimAndParse('#remote_monitored_dis');

			const RM_otherTotalCost = TotRemoteMonitored * RM_otherCostPatientYear;

			//Benefit

			const RM_BSCBenefitPatientYear = RM_otherCostPatientYear - RM_ownCostPatientYear;

			const RM_TotalBSCBenefitYear = RM_otherTotalCost - RM_ownTotalCost;

			$('#remote_monitored_benifit').html(number_format(RM_BSCBenefitPatientYear, 2, '.', ','))

			$('#tot_remote_monitored').html(number_format(RM_ownTotalCost, ','))

			$('#tot_remote_monitored_dis').html(number_format(RM_otherTotalCost, ','))

			$('#tot_remote_monitored_benifit').html(number_format(RM_TotalBSCBenefitYear, ','))



			//Heartlogic

			const HL_ownAvgPatientYear = trimAndParse('#avg_hospitalisation');

			const HL_ownLengthDays = trimAndParse('#len_hospitalisation');

			const HL_ownCostPatientDay = trimAndParse('#hospitalisation_cost');

			const HL_ownCostPatientYear = HL_ownAvgPatientYear * HL_ownLengthDays * HL_ownCostPatientDay;

			const HL_ownTotalCost = TotHeartLogic * HL_ownCostPatientYear;

			//Other Device Numbers

			const HL_otherAvgPatientYear = trimAndParse('#avg_hospitalisation_dis');

			const HL_otherLengthDays = trimAndParse('#len_hospitalisation_dis');

			const HL_otherCostPatientDay = trimAndParse('#hospitalisation_cost_dis');

			const HL_otherCostPatientYear = HL_otherAvgPatientYear * HL_otherLengthDays * HL_otherCostPatientDay;

			const HL_otherTotalCost = TotHeartLogic * HL_otherCostPatientYear;

			//Benefit

			const HL_BSCBenefitPatientYear = HL_otherCostPatientYear - HL_ownCostPatientYear;
			const HL_TotalBCSBenefitYear = HL_otherTotalCost - HL_ownTotalCost;

			$('#icd_crtd_cost').html(number_format(HL_ownCostPatientYear, 2, '.', ','))
			$('#icd_crtd_cost_dis').html(number_format(HL_otherCostPatientYear, 2, '.', ','))

			$('#tot_hospitalisation_cost').html(number_format(HL_ownTotalCost, ','))

			$('#tot_hospitalisation_cost_dis').html(number_format(HL_otherTotalCost, ','))

			$('#hospitalisation_benifit').html(number_format(HL_BSCBenefitPatientYear, 2, '.', ','))

			$('#tot_hospitalisation_benifit').html(number_format(HL_TotalBCSBenefitYear, ','))



			// Portfolio

			const G_EconomicBenefit = D_TotalBSCBenefitYear + DTT_TotalBSCBenefitYear + DTL_TotalBSCBenefitYear + HL_TotalBCSBenefitYear + RM_TotalBSCBenefitYear;

			const G_TotalCost = D_otherTotalDiagnosticCost + DTL_otherTotalICDCost + DTL_otherTotalCRTDCost + DTT_otherTotalCost + HL_otherTotalCost + RM_otherTotalCost;

			const G_ownTotalCost = G_TotalCost - G_EconomicBenefit;

			const GHG_emission = Number(TotHeartLogic * 29.2).toFixed(2);

			const GHG_emission_dis = Number(TotHeartLogic * 236.5).toFixed(2);

			const GHG_emission_dif = GHG_emission_dis - GHG_emission;

			const HW_waste = Number(TotHeartLogic * 9.7).toFixed(2);

			const HW_waste_dis = Number(TotHeartLogic * 80.7).toFixed(2);

			const HW_waste_dif = HW_waste_dis - HW_waste;



			$('#Eco_impact').html(number_format(G_ownTotalCost, ','))

			$('#Eco_impact_dis').html(number_format(G_TotalCost, ','))

			$('#Eco_impact_dif').html(number_format(G_EconomicBenefit, ','))

			$('#GHG_emission').html(number_format(GHG_emission, 2, '.', ','))

			$('#GHG_emission_dis').html(number_format(GHG_emission_dis, 2, '.', ','))

			$('#GHG_emission_dif').html(number_format(GHG_emission_dif, ','))

			$('#HW_waste').html(number_format(HW_waste, 2, '.', ','))

			$('#HW_waste_dis').html(number_format(HW_waste_dis, 2, '.', ','))

			$('#HW_waste_dif').html(number_format(HW_waste_dif, ','))



			if (Boston.chart1) Boston.chart1.destroy();

			if (Boston.chart2) Boston.chart2.destroy();

			if (Boston.chart3) Boston.chart3.destroy();

			// Boston.activeGraphPortfolio(+G_EconomicBenefit, +G_TotalCost);

			Boston.activeGraphPortfolio(+(Number(G_ownTotalCost).toFixed(0)), +(Number(G_TotalCost).toFixed(0)));

			// Boston.activeGraphGHG(+GHG_emission, +GHG_emission_dis);

			Boston.activeGraphGHG(+(Number(GHG_emission).toFixed(0)), +(Number(GHG_emission_dis).toFixed(0)));

			// Boston.activeGraphHospitalWaste(+HW_waste, +HW_waste_dis);

			Boston.activeGraphHospitalWaste(+(Number(HW_waste).toFixed(0)), +(Number(HW_waste_dis).toFixed(0)));



		}

	},



	init: function () {

		this.loadData();

		this.resultMainCalculation();

	}

}



window.addEventListener('load', function () {

	Boston.init();

	ResultCalculation.init();

	Diagnosis.init();

	Therapy.init();

	Monitoring.init();

	Portfolio.init();

})



window.addEventListener('DOMContentLoaded', function () {

	Boston.setAmendInputs();

})


function updateValue(button, increment) {
	let numBox = button.closest(".num-box-calculate").querySelector(".num-box-cust");
	let mainNum = button.closest(".change-num-main-box").querySelector(".change-num-main");
	let upArrow = button.closest(".num-box-calculate").querySelector(".up-arrow");
	let downArrow = button.closest(".num-box-calculate").querySelector(".down-arrow");
	let value = parseInt(numBox.textContent, 10) || 1;
	let baseValue = mainNum.getAttribute("data-number");

	value = Math.min(5, Math.max(1, value + increment)); // Ensure value stays within 1-5
	numBox.textContent = value;

	let result = value * baseValue;
	mainNum.textContent = number_format(result, ','); // Update result
	upArrow.classList.toggle("disable", value === 5);
	downArrow.classList.toggle("disable", value === 1);
}

document.querySelectorAll(".up-arrow, .down-arrow").forEach(button => {
	button.addEventListener("click", function () {
		updateValue(this, this.classList.contains("up-arrow") ? 1 : -1);
	});
});






$('.boston-sminput[data-symbol="km"]').each(function () {
	var value = $(this).val();
	$(this).wrap('<span class="currency-input-wrapper"></span>')
	$(this).after(`<span class="currency-input-mirror">${value} km</span>`);

	$(this).on('blur', function () {
		$(this).siblings('.currency-input-mirror').html($(this).val() + ' km');
		modifyInput();
	});
});
$('.env-reset-btn').on('click', function () {
	var inp = $(this).closest('.rhythm-bulb-box').find('#rhythm_km_work_order');
	inp.each(function () {
		var mainValue = $(this).attr('data-value');
		$(this).val(mainValue);
		$(this).siblings('.currency-input-mirror').html(mainValue + ' km');
	})
	rhythm_total();
})

$(document).on('input', '.rhythm-calculate-box input.boston-sminput', function () {
	this.value = this.value.replace(/[^0-9.]/g, ''); // Allow only numbers and decimal points
	if ((this.value.match(/\./g) || []).length > 1) {
		this.value = this.value.replace(/\.+$/, ""); // Prevent multiple dots
	}
	this.value = this.value.replace(/^0+(?=\d)/, ''); // Prevent leading zeros
	this.value = this.value.replace(/(\.\d{2})\d+/, '$1'); // Allow only two decimal places
});

function modifyInput() {
	$('.rhythm-calculate-box').find('input').each(function () {
		var currentValue = $(this).val();
		var dataValue = $(this).attr('data-value');

		if (currentValue === dataValue) {
			$(this).attr('data-modified', 'false');
		} else {
			$(this).attr('data-modified', 'true');
		}
	});
}


function rhythm_total() {
	var staticNum = parseFloat($('.rhythm-calculate-box').find('#rhythm_co2_multi').html()) || 1;
	var total = staticNum;

	var inputData = []; // Array to store input values, data-values, and mirrored values

	// Collect input values and data-value attributes
	$('.rhythm-calculate-box').find('input').each(function () {
		var inputVal = parseFloat($(this).val()) || 1; // Default to 1 for multiplication
		total *= inputVal; // Multiply each input value with total

		var dataValue = $(this).attr('data-value') || ''; // Get data-value
		inputData.push({ value: inputVal, dataValue: dataValue });
	});

	// Collect values from .currency-input-mirror elements
	$('.rhythm-calculate-box').find('.currency-input-mirror').each(function () {
		var mirrorValue = $(this).html();
		inputData.push({ mirrorValue: mirrorValue });
	});

	modifyInput();

	var formattedTotal = total % 1 === 0 ? total : total.toFixed(2);
	$('#rhythm_result_num').html(formattedTotal);

	// Store input values, data-values, and mirrored values in localStorage
	localStorage.setItem('rhythm-input', JSON.stringify(inputData));
}


// Restore stored values on page load
function restore_inputs() {
	var storedData = localStorage.getItem('rhythm-input');
	if (storedData) {
		var inputData = JSON.parse(storedData);

		// Restore input values and data-values
		$('.rhythm-calculate-box').find('input').each(function (index) {
			if (inputData[index] && inputData[index].value !== undefined) {
				$(this).val(inputData[index].value); // Restore input value
				$(this).attr('data-value', inputData[index].dataValue); // Restore data-value
			}
		});

		// Restore currency input mirror values
		var mirrorIndex = 0; // Separate index for mirrored elements
		$('.rhythm-calculate-box').find('.currency-input-mirror').each(function () {
			if (inputData[inputData.length - $('.currency-input-mirror').length + mirrorIndex] &&
				inputData[inputData.length - $('.currency-input-mirror').length + mirrorIndex].mirrorValue !== undefined) {

				$(this).html(inputData[inputData.length - $('.currency-input-mirror').length + mirrorIndex].mirrorValue);
			}
			mirrorIndex++;
		});

		rhythm_total(); // Recalculate after restoring values
	} else {
		rhythm_total();
	}
}


// Function to remove stored data
function remove_rhythm_total() {
	localStorage.removeItem('rhythm-input'); // Remove stored data
	$('.rhythm-calculate-box').find('input').val(''); // Clear input fields
	$('.rhythm-calculate-box').find('.currency-input-mirror').html(''); // Clear mirrored values
	$('#rhythm_result_num').html(''); // Clear result display

	rhythm_total(); // Call to reset the stored values in localStorage
}


// Call rhythm_total on input blur
$('.rhythm-calculate-box .boston-sminput').each(function () {
	$(this).on('blur', function () {
		rhythm_total();
	});
});

// Initialize stored data on page load
restore_inputs();

$(document).ready(function () {
	function updatePercentage() {
		let total = parseInt($('#sicd-total-input').val(), 10) || 0;
		$('#sicd-percentage-input').val(total > 0 ? '100' : '0');
	}

	updatePercentage(); // Set initial value on page load

	$('#sicd-total-input').on('input', updatePercentage); // Update on typing
});

