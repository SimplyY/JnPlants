/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// css
	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(7);
	__webpack_require__(9);
	__webpack_require__(11);

	// js
	__webpack_require__(13);
	__webpack_require__(15);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./scene.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./scene.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".scene-info {\n    width: 98%;\n    margin-left: auto;\n    margin-right: auto;\n}\n.title {\n    text-align: center;\n}\nfooter {\n    background-color: #4aca63;\n    color: #ffffff;\n    font-size: 1.5rem;\n    width: 100%;\n    height: 2.5rem;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n}\nfooter .icons {\n    padding: 0.3rem 0.5rem 0 0.5rem ;\n    position: relative;\n}\n#article{\n    margin-bottom: 2.5rem;\n}\n.icon1, .icon2 {\n    position: absolute;\n}\n.icon1 {\n    left: 3rem;\n}\n.icon2 {\n    right: 3.5rem;\n}\n.love-num, .com-num {\n    font-size: 1.3rem;\n    font-weight: 150;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./comment.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./comment.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./github-markdown.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./github-markdown.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@font-face {\r\n  font-family: octicons-anchor;\r\n  src: url(data:font/woff;charset=utf-8;base64,d09GRgABAAAAAAYcAA0AAAAACjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABMAAAABwAAAAca8vGTk9TLzIAAAFMAAAARAAAAFZG1VHVY21hcAAAAZAAAAA+AAABQgAP9AdjdnQgAAAB0AAAAAQAAAAEACICiGdhc3AAAAHUAAAACAAAAAj//wADZ2x5ZgAAAdwAAADRAAABEKyikaNoZWFkAAACsAAAAC0AAAA2AtXoA2hoZWEAAALgAAAAHAAAACQHngNFaG10eAAAAvwAAAAQAAAAEAwAACJsb2NhAAADDAAAAAoAAAAKALIAVG1heHAAAAMYAAAAHwAAACABEAB2bmFtZQAAAzgAAALBAAAFu3I9x/Nwb3N0AAAF/AAAAB0AAAAvaoFvbwAAAAEAAAAAzBdyYwAAAADP2IQvAAAAAM/bz7t4nGNgZGFgnMDAysDB1Ml0hoGBoR9CM75mMGLkYGBgYmBlZsAKAtJcUxgcPsR8iGF2+O/AEMPsznAYKMwIkgMA5REMOXicY2BgYGaAYBkGRgYQsAHyGMF8FgYFIM0ChED+h5j//yEk/3KoSgZGNgYYk4GRCUgwMaACRoZhDwCs7QgGAAAAIgKIAAAAAf//AAJ4nHWMMQrCQBBF/0zWrCCIKUQsTDCL2EXMohYGSSmorScInsRGL2DOYJe0Ntp7BK+gJ1BxF1stZvjz/v8DRghQzEc4kIgKwiAppcA9LtzKLSkdNhKFY3HF4lK69ExKslx7Xa+vPRVS43G98vG1DnkDMIBUgFN0MDXflU8tbaZOUkXUH0+U27RoRpOIyCKjbMCVejwypzJJG4jIwb43rfl6wbwanocrJm9XFYfskuVC5K/TPyczNU7b84CXcbxks1Un6H6tLH9vf2LRnn8Ax7A5WQAAAHicY2BkYGAA4teL1+yI57f5ysDNwgAC529f0kOmWRiYVgEpDgYmEA8AUzEKsQAAAHicY2BkYGB2+O/AEMPCAAJAkpEBFbAAADgKAe0EAAAiAAAAAAQAAAAEAAAAAAAAKgAqACoAiAAAeJxjYGRgYGBhsGFgYgABEMkFhAwM/xn0QAIAD6YBhwB4nI1Ty07cMBS9QwKlQapQW3VXySvEqDCZGbGaHULiIQ1FKgjWMxknMfLEke2A+IJu+wntrt/QbVf9gG75jK577Lg8K1qQPCfnnnt8fX1NRC/pmjrk/zprC+8D7tBy9DHgBXoWfQ44Av8t4Bj4Z8CLtBL9CniJluPXASf0Lm4CXqFX8Q84dOLnMB17N4c7tBo1AS/Qi+hTwBH4rwHHwN8DXqQ30XXAS7QaLwSc0Gn8NuAVWou/gFmnjLrEaEh9GmDdDGgL3B4JsrRPDU2hTOiMSuJUIdKQQayiAth69r6akSSFqIJuA19TrzCIaY8sIoxyrNIrL//pw7A2iMygkX5vDj+G+kuoLdX4GlGK/8Lnlz6/h9MpmoO9rafrz7ILXEHHaAx95s9lsI7AHNMBWEZHULnfAXwG9/ZqdzLI08iuwRloXE8kfhXYAvE23+23DU3t626rbs8/8adv+9DWknsHp3E17oCf+Z48rvEQNZ78paYM38qfk3v/u3l3u3GXN2Dmvmvpf1Srwk3pB/VSsp512bA/GG5i2WJ7wu430yQ5K3nFGiOqgtmSB5pJVSizwaacmUZzZhXLlZTq8qGGFY2YcSkqbth6aW1tRmlaCFs2016m5qn36SbJrqosG4uMV4aP2PHBmB3tjtmgN2izkGQyLWprekbIntJFing32a5rKWCN/SdSoga45EJykyQ7asZvHQ8PTm6cslIpwyeyjbVltNikc2HTR7YKh9LBl9DADC0U/jLcBZDKrMhUBfQBvXRzLtFtjU9eNHKin0x5InTqb8lNpfKv1s1xHzTXRqgKzek/mb7nB8RZTCDhGEX3kK/8Q75AmUM/eLkfA+0Hi908Kx4eNsMgudg5GLdRD7a84npi+YxNr5i5KIbW5izXas7cHXIMAau1OueZhfj+cOcP3P8MNIWLyYOBuxL6DRylJ4cAAAB4nGNgYoAALjDJyIAOWMCiTIxMLDmZedkABtIBygAAAA==) format('woff');\r\n}\r\n\r\n.markdown-body {\r\n  -webkit-text-size-adjust: 100%;\r\n  text-size-adjust: 100%;\r\n  color: #333;\r\n  overflow: hidden;\r\n  font-family: \"Helvetica Neue\", Helvetica, \"Segoe UI\", Arial, freesans, sans-serif;\r\n  font-size: 16px;\r\n  line-height: 1.6;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.markdown-body a {\r\n  background-color: transparent;\r\n}\r\n\r\n.markdown-body a:active,\r\n.markdown-body a:hover {\r\n  outline: 0;\r\n}\r\n\r\n.markdown-body strong {\r\n  font-weight: bold;\r\n}\r\n\r\n.markdown-body h1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n  text-align: center;\r\n}\r\n\r\n.markdown-body img {\r\n  border: 0;\r\n}\r\n\r\n/*.markdown-body hr {\r\n  box-sizing: content-box;\r\n  height: 0;\r\n}*/\r\n\r\n.markdown-body pre {\r\n  overflow: auto;\r\n}\r\n\r\n.markdown-body code,\r\n.markdown-body kbd,\r\n.markdown-body pre {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\r\n\r\n.markdown-body input {\r\n  color: inherit;\r\n  font: inherit;\r\n  margin: 0;\r\n}\r\n\r\n.markdown-body html input[disabled] {\r\n  cursor: default;\r\n}\r\n\r\n.markdown-body input {\r\n  line-height: normal;\r\n}\r\n\r\n.markdown-body input[type=\"checkbox\"] {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n}\r\n\r\n.markdown-body table {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n.markdown-body td,\r\n.markdown-body th {\r\n  padding: 0;\r\n}\r\n\r\n.markdown-body * {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.markdown-body input {\r\n  font: 13px/1.4 Helvetica, arial, nimbussansl, liberationsans, freesans, clean, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n}\r\n\r\n.markdown-body a {\r\n  color: #4078c0;\r\n  text-decoration: none;\r\n}\r\n\r\n.markdown-body a:hover,\r\n.markdown-body a:active {\r\n  text-decoration: underline;\r\n}\r\n\r\n/*.markdown-body hr {\r\n  height: 0;\r\n  margin: 15px 0;\r\n  overflow: hidden;\r\n  background: transparent;\r\n  border: 0;\r\n}*/\r\n\r\n/*.markdown-body hr:before {\r\n  display: table;\r\n  content: \"\";\r\n}\r\n\r\n.markdown-body hr:after {\r\n  display: table;\r\n  clear: both;\r\n  content: \"\";\r\n}*/\r\n\r\n.markdown-body h1,\r\n.markdown-body h2,\r\n.markdown-body h3,\r\n.markdown-body h4,\r\n.markdown-body h5,\r\n.markdown-body h6 {\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n  line-height: 1.1;\r\n}\r\n\r\n.markdown-body h1 {\r\n  font-size: 30px;\r\n}\r\n\r\n.markdown-body h2 {\r\n  font-size: 21px;\r\n}\r\n\r\n.markdown-body h3 {\r\n  font-size: 16px;\r\n}\r\n\r\n.markdown-body h4 {\r\n  font-size: 14px;\r\n}\r\n\r\n.markdown-body h5 {\r\n  font-size: 12px;\r\n}\r\n\r\n.markdown-body h6 {\r\n  font-size: 11px;\r\n}\r\n\r\n.markdown-body blockquote {\r\n  margin: 0;\r\n}\r\n\r\n.markdown-body ul,\r\n.markdown-body ol {\r\n  padding: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.markdown-body ol ol,\r\n.markdown-body ul ol {\r\n  list-style-type: lower-roman;\r\n}\r\n\r\n.markdown-body ul ul ol,\r\n.markdown-body ul ol ol,\r\n.markdown-body ol ul ol,\r\n.markdown-body ol ol ol {\r\n  list-style-type: lower-alpha;\r\n}\r\n\r\n.markdown-body dd {\r\n  margin-left: 0;\r\n}\r\n\r\n.markdown-body code {\r\n  font-family: Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\r\n  font-size: 12px;\r\n}\r\n\r\n.markdown-body pre {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  font: 12px Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\r\n}\r\n\r\n.markdown-body .select::-ms-expand {\r\n  opacity: 0;\r\n}\r\n\r\n.markdown-body .octicon {\r\n  font: normal normal normal 16px/1 octicons-anchor;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.markdown-body .octicon-link:before {\r\n  content: '\\F05C';\r\n}\r\n\r\n.markdown-body>*:first-child {\r\n  margin-top: 0 !important;\r\n}\r\n\r\n.markdown-body>*:last-child {\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n/*.markdown-body a:not([href]) {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}*/\r\n\r\n.markdown-body .anchor {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  padding-right: 6px;\r\n  padding-left: 30px;\r\n  margin-left: -30px;\r\n}\r\n\r\n.markdown-body .anchor:focus {\r\n  outline: none;\r\n}\r\n\r\n.markdown-body h1,\r\n.markdown-body h2,\r\n.markdown-body h3,\r\n.markdown-body h4,\r\n.markdown-body h5,\r\n.markdown-body h6 {\r\n  position: relative;\r\n  margin-top: 1em;\r\n  margin-bottom: 16px;\r\n  font-weight: bold;\r\n  line-height: 1.4;\r\n}\r\n\r\n.markdown-body h1 .octicon-link,\r\n.markdown-body h2 .octicon-link,\r\n.markdown-body h3 .octicon-link,\r\n.markdown-body h4 .octicon-link,\r\n.markdown-body h5 .octicon-link,\r\n.markdown-body h6 .octicon-link {\r\n  display: none;\r\n  color: #000;\r\n  vertical-align: middle;\r\n}\r\n\r\n.markdown-body h1:hover .anchor,\r\n.markdown-body h2:hover .anchor,\r\n.markdown-body h3:hover .anchor,\r\n.markdown-body h4:hover .anchor,\r\n.markdown-body h5:hover .anchor,\r\n.markdown-body h6:hover .anchor {\r\n  padding-left: 8px;\r\n  margin-left: -30px;\r\n  text-decoration: none;\r\n}\r\n\r\n.markdown-body h1:hover .anchor .octicon-link,\r\n.markdown-body h2:hover .anchor .octicon-link,\r\n.markdown-body h3:hover .anchor .octicon-link,\r\n.markdown-body h4:hover .anchor .octicon-link,\r\n.markdown-body h5:hover .anchor .octicon-link,\r\n.markdown-body h6:hover .anchor .octicon-link {\r\n  display: inline-block;\r\n}\r\n\r\n.markdown-body h1 {\r\n  padding-bottom: 0.3em;\r\n  font-size: 2.25em;\r\n  line-height: 1.2;\r\n}\r\n\r\n.markdown-body h1 .anchor {\r\n  line-height: 1;\r\n}\r\n\r\n.markdown-body h2 {\r\n  padding-bottom: 0.3em;\r\n  font-size: 1.75em;\r\n  line-height: 1.225;\r\n}\r\n\r\n.markdown-body h2 .anchor {\r\n  line-height: 1;\r\n}\r\n\r\n.markdown-body h3 {\r\n  font-size: 1.5em;\r\n  line-height: 1.43;\r\n}\r\n\r\n.markdown-body h3 .anchor {\r\n  line-height: 1.2;\r\n}\r\n\r\n.markdown-body h4 {\r\n  font-size: 1.25em;\r\n}\r\n\r\n.markdown-body h4 .anchor {\r\n  line-height: 1.2;\r\n}\r\n\r\n.markdown-body h5 {\r\n  font-size: 1em;\r\n}\r\n\r\n.markdown-body h5 .anchor {\r\n  line-height: 1.1;\r\n}\r\n\r\n.markdown-body h6 {\r\n  font-size: 1em;\r\n  color: #777;\r\n}\r\n\r\n.markdown-body h6 .anchor {\r\n  line-height: 1.1;\r\n}\r\n\r\n.markdown-body p,\r\n.markdown-body blockquote,\r\n.markdown-body ul,\r\n.markdown-body ol,\r\n.markdown-body dl,\r\n.markdown-body table,\r\n.markdown-body pre {\r\n  margin-top: 0;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n/*.markdown-body hr {\r\n  height: 4px;\r\n  padding: 0;\r\n  margin: 16px 0;\r\n  background-color: #e7e7e7;\r\n  border: 0 none;\r\n}*/\r\n\r\n.markdown-body ul,\r\n.markdown-body ol {\r\n  padding-left: 2em;\r\n}\r\n\r\n.markdown-body ul ul,\r\n.markdown-body ul ol,\r\n.markdown-body ol ol,\r\n.markdown-body ol ul {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.markdown-body li>p {\r\n  margin-top: 16px;\r\n}\r\n\r\n.markdown-body dl {\r\n  padding: 0;\r\n}\r\n\r\n.markdown-body dl dt {\r\n  padding: 0;\r\n  margin-top: 16px;\r\n  font-size: 1em;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n}\r\n\r\n.markdown-body dl dd {\r\n  padding: 0 16px;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.markdown-body blockquote {\r\n  padding: 0 15px;\r\n  color: #777;\r\n  border-left: 4px solid #ddd;\r\n}\r\n\r\n.markdown-body blockquote>:first-child {\r\n  margin-top: 0;\r\n}\r\n\r\n.markdown-body blockquote>:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.markdown-body table {\r\n  display: block;\r\n  width: 100%;\r\n  overflow: auto;\r\n  word-break: normal;\r\n  word-break: keep-all;\r\n}\r\n\r\n.markdown-body table th {\r\n  font-weight: bold;\r\n}\r\n\r\n.markdown-body table th,\r\n.markdown-body table td {\r\n  padding: 6px 13px;\r\n  border: 1px solid #ddd;\r\n}\r\n\r\n.markdown-body table tr {\r\n  background-color: #fff;\r\n  border-top: 1px solid #ccc;\r\n}\r\n\r\n.markdown-body table tr:nth-child(2n) {\r\n  background-color: #f8f8f8;\r\n}\r\n\r\n.markdown-body img {\r\n  max-width: 100%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.markdown-body code {\r\n  padding: 0;\r\n  padding-top: 0.2em;\r\n  padding-bottom: 0.2em;\r\n  margin: 0;\r\n  font-size: 85%;\r\n  background-color: rgba(0,0,0,0.04);\r\n  border-radius: 3px;\r\n}\r\n\r\n.markdown-body code:before,\r\n.markdown-body code:after {\r\n  letter-spacing: -0.2em;\r\n  content: \"\\A0\";\r\n}\r\n\r\n.markdown-body pre>code {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 100%;\r\n  word-break: normal;\r\n  white-space: pre;\r\n  background: transparent;\r\n  border: 0;\r\n}\r\n\r\n.markdown-body .highlight {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.markdown-body .highlight pre,\r\n.markdown-body pre {\r\n  padding: 16px;\r\n  overflow: auto;\r\n  font-size: 85%;\r\n  line-height: 1.45;\r\n  background-color: #f7f7f7;\r\n  border-radius: 3px;\r\n}\r\n\r\n.markdown-body .highlight pre {\r\n  margin-bottom: 0;\r\n  word-break: normal;\r\n}\r\n\r\n.markdown-body pre {\r\n  word-wrap: normal;\r\n}\r\n\r\n.markdown-body pre code {\r\n  display: inline;\r\n  max-width: initial;\r\n  padding: 0;\r\n  margin: 0;\r\n  overflow: initial;\r\n  line-height: inherit;\r\n  word-wrap: normal;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n\r\n.markdown-body pre code:before,\r\n.markdown-body pre code:after {\r\n  content: normal;\r\n}\r\n\r\n.markdown-body kbd {\r\n  display: inline-block;\r\n  padding: 3px 5px;\r\n  font-size: 11px;\r\n  line-height: 10px;\r\n  color: #555;\r\n  vertical-align: middle;\r\n  background-color: #fcfcfc;\r\n  border: solid 1px #ccc;\r\n  border-radius: 3px;\r\n  box-shadow: inset 0 -1px 0 #bbb;\r\n}\r\n\r\n.markdown-body .pl-c {\r\n  color: #969896;\r\n}\r\n\r\n.markdown-body .pl-c1,\r\n.markdown-body .pl-s .pl-v {\r\n  color: #0086b3;\r\n}\r\n\r\n.markdown-body .pl-e,\r\n.markdown-body .pl-en {\r\n  color: #795da3;\r\n}\r\n\r\n.markdown-body .pl-s .pl-s1,\r\n.markdown-body .pl-smi {\r\n  color: #333;\r\n}\r\n\r\n.markdown-body .pl-ent {\r\n  color: #63a35c;\r\n}\r\n\r\n.markdown-body .pl-k {\r\n  color: #a71d5d;\r\n}\r\n\r\n.markdown-body .pl-pds,\r\n.markdown-body .pl-s,\r\n.markdown-body .pl-s .pl-pse .pl-s1,\r\n.markdown-body .pl-sr,\r\n.markdown-body .pl-sr .pl-cce,\r\n.markdown-body .pl-sr .pl-sra,\r\n.markdown-body .pl-sr .pl-sre {\r\n  color: #183691;\r\n}\r\n\r\n.markdown-body .pl-v {\r\n  color: #ed6a43;\r\n}\r\n\r\n.markdown-body .pl-id {\r\n  color: #b52a1d;\r\n}\r\n\r\n.markdown-body .pl-ii {\r\n  background-color: #b52a1d;\r\n  color: #f8f8f8;\r\n}\r\n\r\n.markdown-body .pl-sr .pl-cce {\r\n  color: #63a35c;\r\n  font-weight: bold;\r\n}\r\n\r\n.markdown-body .pl-ml {\r\n  color: #693a17;\r\n}\r\n\r\n.markdown-body .pl-mh,\r\n.markdown-body .pl-mh .pl-en,\r\n.markdown-body .pl-ms {\r\n  color: #1d3e81;\r\n  font-weight: bold;\r\n}\r\n\r\n.markdown-body .pl-mq {\r\n  color: #008080;\r\n}\r\n\r\n.markdown-body .pl-mi {\r\n  color: #333;\r\n  font-style: italic;\r\n}\r\n\r\n.markdown-body .pl-mb {\r\n  color: #333;\r\n  font-weight: bold;\r\n}\r\n\r\n.markdown-body .pl-md {\r\n  background-color: #ffecec;\r\n  color: #bd2c00;\r\n}\r\n\r\n.markdown-body .pl-mi1 {\r\n  background-color: #eaffea;\r\n  color: #55a532;\r\n}\r\n\r\n.markdown-body .pl-mdr {\r\n  color: #795da3;\r\n  font-weight: bold;\r\n}\r\n\r\n.markdown-body .pl-mo {\r\n  color: #1d3e81;\r\n}\r\n\r\n.markdown-body kbd {\r\n  display: inline-block;\r\n  padding: 3px 5px;\r\n  font: 11px Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\r\n  line-height: 10px;\r\n  color: #555;\r\n  vertical-align: middle;\r\n  background-color: #fcfcfc;\r\n  border: solid 1px #ccc;\r\n  border-radius: 3px;\r\n  box-shadow: inset 0 -1px 0 #bbb;\r\n}\r\n\r\n.markdown-body .task-list-item {\r\n  list-style-type: none;\r\n}\r\n\r\n.markdown-body .task-list-item+.task-list-item {\r\n  margin-top: 3px;\r\n}\r\n\r\n.markdown-body .task-list-item input {\r\n  margin: 0 0.35em 0.25em -1.6em;\r\n  vertical-align: middle;\r\n}\r\n\r\n.markdown-body :checked+.radio-label {\r\n  z-index: 1;\r\n  position: relative;\r\n  border-color: #4078c0;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./global.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./global.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "html, body {\n    margin: auto;\n    width: 100%;\n    /*height: 100%;*/\n}\np {\n    margin: 0;\n    padding: 0;\n    font-weight: 400;\n}\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./iconfont.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./iconfont.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*@font-face {\n\tfont-family: 'icomoon';\n\turl('../fonts/icomoon.ttf?ezlitq') format('truetype'),\n\turl('../fonts/icomoon.woff?ezlitq') format('woff'),\n\turl('../fonts/icomoon.svg?ezlitq#icomoon') format('svg');\n\tfont-weight: normal;\n\tfont-style: normal;\n}*/\n\n[class^=\"icon-\"], [class*=\" icon-\"] {\n\tfont-family: 'icomoon';\n\tspeak: none;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-variant: normal;\n\ttext-transform: none;\n\tline-height: 1;\n\tposition: relative;\n\ttop:.11rem;\n\n\t/* Better Font Rendering =========== */\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.icon-heart:before {\n\tfont-size: 1.4rem;\n\tcontent: \"\\E900\";\n}\n.icon-heart-o:before {\n\tfont-size: 1.3rem;\n\tcontent: \"\\E901\";\n}\n.icon-bubble:before {\n\tfont-size: 1.3rem;\n\tcontent: \"\\E902\";\n}\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(14);

	var newStyle = document.createElement('style');

	// var fonts = [
	//     {
	//         fontUrl: '../fonts/icomoon.ttf?ezlitq',
	//         fontFormat: 'truetype'
	//     },
	//     {
	//         fontUrl: '../fonts/icomoon.woff?ezlitq',
	//         fontFormat: 'woff'
	//     },
	//     {
	//         fontUrl: '../fonts/icomoon.svg?ezlitq#icomoon',
	//         fontFormat: 'svg'
	//     }
	// ];

	// var fontFace = '@font-face { ' +
	//     'font-family:' + 'icomoon' + '; ' +
	//     'src: url(' + fonts[i].fontUrl + ') format(' + fonts[i].fontFormat + ');' +
	// 'font-weight: normal;font-style: normal;}';

	// for(var i = 0;i < fonts.length;i++){
	//
	// }
	var test ='@font-face { ' +
	    "font-family: 'icomoon'" + '; ' +
	    'src: url(' + '../fonts/icomoon.woff?ezlitq' + ') format(' + 'woff' + ');' + 'font-weight: normal;font-style: normal;}';

	newStyle.appendChild(document.createTextNode(test));

	document.head.appendChild(newStyle);

	love_num = parseInt($('.love-num').text());
	var isClicked = false;
	var currentpage = $('#scene-page');

	$('.love').tap(function() {
	    if (isClicked === false) {
	        $(this).removeClass('icon-heart-o').addClass('icon-heart').css('color', '#fdacc9');
	        love_num = love_num + 1;
	        $('.love-num').text(love_num);
	        isClicked = true;
	    } else if (isClicked === true) {
	        $(this).removeClass('icon-heart').addClass('icon-heart-o').css('color', '#ffffff');

	        love_num = love_num - 1;
	        $('.love-num').text(love_num);
	        isClicked = false;
	    }
	});


/***/ },
/* 14 */
/***/ function(module, exports) {

	/* Gmu v2.1.0 - extend/touch.js */
	/**
	 * @file 来自zepto/touch.js, zepto自1.0后，已不默认打包此文件。
	 * @import zepto.js
	 */
	//     Zepto.js
	//     (c) 2010-2012 Thomas Fuchs
	//     Zepto.js may be freely distributed under the MIT license.

	;(function($){
	  var touch = {},
	    touchTimeout, tapTimeout, swipeTimeout,
	    longTapDelay = 750, longTapTimeout

	  function parentIfText(node) {
	    return 'tagName' in node ? node : node.parentNode
	  }

	  function swipeDirection(x1, x2, y1, y2) {
	    var xDelta = Math.abs(x1 - x2), yDelta = Math.abs(y1 - y2)
	    return xDelta >= yDelta ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
	  }

	  function longTap() {
	    longTapTimeout = null
	    if (touch.last) {
	      touch.el.trigger('longTap')
	      touch = {}
	    }
	  }

	  function cancelLongTap() {
	    if (longTapTimeout) clearTimeout(longTapTimeout)
	    longTapTimeout = null
	  }

	  function cancelAll() {
	    if (touchTimeout) clearTimeout(touchTimeout)
	    if (tapTimeout) clearTimeout(tapTimeout)
	    if (swipeTimeout) clearTimeout(swipeTimeout)
	    if (longTapTimeout) clearTimeout(longTapTimeout)
	    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null
	    touch = {}
	  }

	  $(document).ready(function(){
	    var now, delta

	    $(document.body)
	      .bind('touchstart', function(e){
	        now = Date.now()
	        delta = now - (touch.last || now)
	        touch.el = $(parentIfText(e.touches[0].target))
	        touchTimeout && clearTimeout(touchTimeout)
	        touch.x1 = e.touches[0].pageX
	        touch.y1 = e.touches[0].pageY
	        if (delta > 0 && delta <= 250) touch.isDoubleTap = true
	        touch.last = now
	        longTapTimeout = setTimeout(longTap, longTapDelay)
	      })
	      .bind('touchmove', function(e){
	        cancelLongTap()
	        touch.x2 = e.touches[0].pageX
	        touch.y2 = e.touches[0].pageY
	        if (Math.abs(touch.x1 - touch.x2) > 10)
	          e.preventDefault()
	      })
	      .bind('touchend', function(e){
	         cancelLongTap()

	        // swipe
	        if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) ||
	            (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30))

	          swipeTimeout = setTimeout(function() {
	            touch.el.trigger('swipe')
	            touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)))
	            touch = {}
	          }, 0)

	        // normal tap
	        else if ('last' in touch)

	          // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
	          // ('tap' fires before 'scroll')
	          tapTimeout = setTimeout(function() {

	            // trigger universal 'tap' with the option to cancelTouch()
	            // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
	            var event = $.Event('tap')
	            event.cancelTouch = cancelAll
	            touch.el.trigger(event)

	            // trigger double tap immediately
	            if (touch.isDoubleTap) {
	              touch.el.trigger('doubleTap')
	              touch = {}
	            }

	            // trigger single tap after 250ms of inactivity
	            else {
	              touchTimeout = setTimeout(function(){
	                touchTimeout = null
	                touch.el.trigger('singleTap')
	                touch = {}
	              }, 250)
	            }

	          }, 0)

	      })
	      .bind('touchcancel', cancelAll)

	    $(window).bind('scroll', cancelAll)
	  })

	  ;['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(m){
	    $.fn[m] = function(callback){ return this.bind(m, callback) }

	  })
	})(Zepto);


/***/ },
/* 15 */
/***/ function(module, exports) {

	
	var params = getQureyParams(window.location.href);
	var sceneId = params.sceneId;
	var sceneUrl = 'http://121.40.224.83:8080/JnPlant/api/scene/' + sceneId;
	console.log(sceneUrl);

	$.get(sceneUrl, function(data) {
	    console.log(data.article);
	    paddingSceneInfo(data);
	});

	function paddingSceneInfo(data) {
	    $('.top-img').attr('src', data.imgUrl);
	    $(".title").html(markdown.toHTML("##" + data.title));
	    $(".author").html(markdown.toHTML("- 投稿作者：" + data.authorName));
	    $(".location").html(markdown.toHTML("- 美景地点：" + data.location));
	    $(".month").html(markdown.toHTML("- 美景时间：" + data.month.toString() + "月"));
	    $("#article").html(markdown.toHTML(data.article));
	}

	function getQureyParams(url) {
	    var searchParams = {};

	    var qurey = url.split('?');
	    // scene_id=1&user_id=2
	    qurey = qurey[qurey.length -1];

	    var params = qurey.split('&');
	    for (var i = 0; i < params.length; i++) {
	        // scene_id=1
	        var keyValue = params[i].split('=');
	        searchParams[keyValue[0]] = keyValue[1];
	    }

	    return searchParams;
	}


/***/ }
/******/ ]);