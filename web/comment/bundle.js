/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** ./js/entry.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	// css
	__webpack_require__(/*! ../css/reset.css */ 1);
	__webpack_require__(/*! ../css/comment.css */ 5);
	
	// js
	var vueComment = __webpack_require__(/*! ./vue-comment.js */ 7);
	var server = __webpack_require__(/*! ./server.js */ 8);
	
	// 获取commentlist
	server.getList(vueComment.CommentList);


/***/ },
/* 1 */
/*!***********************!*\
  !*** ./css/reset.css ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./reset.css */ 2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./reset.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./reset.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/*!**************************************!*\
  !*** ./~/css-loader!./css/reset.css ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 3)();
	// imports
	
	
	// module
	exports.push([module.id, "html, body, div, span, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, img, ins, kbd, q, s, samp, small, strike, strong, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    outline: 0;\n    font-family: 'Helvetica Neue', Helvetica,\n,Lato,sans-serif;\n    vertical-align: baselinebaseline;\n}\nol, ul {\n    list-style: none;\n}\na {\n    text-decoration: none;\n}\nbutton{\n    border: 0;\n    outline: 0;\n}\nblockquote, q {\n    quotes: none;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n\ninput[type=number] {\n    -moz-appearance:textfield;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n", ""]);
	
	// exports


/***/ },
/* 3 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
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
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
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
		if(true) {
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
/*!*************************!*\
  !*** ./css/comment.css ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./comment.css */ 6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 4)(content, {});
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
/*!****************************************!*\
  !*** ./~/css-loader!./css/comment.css ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 3)();
	// imports
	
	
	// module
	exports.push([module.id, "body{\n    font-size: 1rem;\n}\n\n.main-container{\n    width: 97%;\n    height: 100%;\n    margin: .5rem auto 3.5rem auto;\n}\n\n#comment-list{\n    margin-top: .3rem;\n    border-bottom: 1px solid #eee;\n}\n\n.commentator-info{\n    position: relative;\n}\n\n.avatar{\n    width: 11%;\n    height: 11%;\n    border-radius: 50%;\n}\n\n.user-name{\n    position: absolute;\n    font-size: .8rem;\n    top: 21%;\n    left: 12.5%;\n}\n\n.comment-date{\n    font-size: .75rem;\n    color: #a5a5a5;\n    position: absolute;\n    top: .3rem;\n}\n\n.comment-date{\n    right: .3rem;\n}\n\n.comment-words{\n    font-size: .9rem;\n    line-height: 1.2rem;\n    margin-left: 12.5%;\n    margin-bottom: .3rem;\n}\n\nfooter{\n    width: 100%;\n    height: 2.8rem;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    background-color: #eee;\n}\n\n#comment-area{\n    width: 100%;\n    margin: .5rem auto;\n}\n\n.input-comment{\n    font-size: 1rem;\n    width: 75%;\n    height: 1.5rem;\n    margin: 0 2% 0 3%;\n}\n\n.input-comment:hover{\n    border-color: #4ace63;\n}\n\n.send-comment-btn{\n    background-color: #4ace63;\n    color: #fff;\n    width: 15%;\n    height: 1.8rem;\n    line-height: 1.5rem;\n    font-size: .9rem;\n    font-weight: 500;\n    border-radius: 3px;\n}\n", ""]);
	
	// exports


/***/ },
/* 7 */
/*!***************************!*\
  !*** ./js/vue-comment.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	var server = __webpack_require__(/*! ./server.js */ 8);
	var util = __webpack_require__(/*! ./util.js */ 10);
	var config = __webpack_require__(/*! ./config.js */ 9);
	
	var SendComment = new Vue({
	    el: "#comment-area",
	    data: getEmptyComment(),
	    methods:{
	        send: function() {
	            if (config.userId === undefined) {
	                window.android.webToast('请先登录');
	                return;
	            }
	
	            var today = new Date();
	
	            var newComment = {
	                userId: config.userId,
	                createdDate: util.getDateString(today),
	                createdTime: util.getTimeString(today),
	                content: SendComment.content,
	            };
	
	            server.addComment(CommentList, newComment, function () {
	                server.getList(CommentList);
	            });
	
	            SendComment.$data = getEmptyComment();
	        }
	    }
	});
	
	var CommentList = new Vue({
	    el: "#comment-list",
	    data: {
	        scene: {},
	        plant: {},
	        items: []
	    }
	});
	
	function getEmptyComment(){
	    return {
	        userName: '',
	        avatar: '',
	        userId: '',
	        createdDate: '',
	        createdTime: '',
	        content: '',
	        _id: ''
	    };
	}
	
	module.exports = {
	    CommentList:　CommentList
	};


/***/ },
/* 8 */
/*!**********************!*\
  !*** ./js/server.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	var config = __webpack_require__(/*! ./config.js */ 9);
	var util = __webpack_require__(/*! ./util.js */ 10);
	if (config.sceneId !== undefined) {
	    var sceneUrl = config.sceneApiUrl + config.sceneId;
	} else if (config.plantId !== undefined) {
	    var plantUrl = config.plantApiUrl + config.plantId;
	}
	
	
	module.exports = {
	    'getList': getList,
	    'addComment': addComment
	};
	
	function getList(commentList) {
	    // 查询scene表
	    var qureyUrl;
	    if (config.sceneId !== undefined) {
	        qureyUrl = sceneUrl;
	    } else if (config.plantId !== undefined) {
	        qureyUrl = plantUrl;
	    }
	
	    $.get(qureyUrl, function(data) {
	        if (data.commentsIds.length === 0) {
	            if (config.sceneId !== undefined) {
	                commentList.scene = data;
	            } else if (config.plantId !== undefined) {
	                commentList.plant = data;
	            }
	            return;
	        }
	        if (config.sceneId !== undefined) {
	            commentList.scene = data;
	        } else if (config.plantId !== undefined) {
	            commentList.plant = data;
	        }
	
	        var commentsIds = data.commentsIds;
	        var idInQureyString = '?_id__in=';
	        var commentUrl = config.commentApiUrl + idInQureyString + commentsIds.toString();
	        // 查询comment表
	        $.get(commentUrl, function(data) {
	            var commentsData = data;
	
	            var usersIds = [];
	            for (var i = 0; i < commentsData.length; i++) {
	                usersIds.push(commentsData[i].userId);
	            }
	
	            getUsersData(usersIds, function (usersData) {
	                for (var i = 0; i < commentsData.length; i++) {
	                    for (var j = 0; j < usersData.length; j++) {
	                        if (commentsData[i].userId === usersData[j]._id) {
	                            commentsData[i].userName = usersData[j].name;
	                            commentsData[i].avatar = usersData[j].imgUrl;
	                        }
	                    }
	                }
	
	                commentsData.sort(mySort());
	
	                var comentListLength = commentList.items.length;
	                for (i = 0; i < comentListLength; i++) {
	                    commentList.items.pop();
	                }
	                for (i = 0; i < commentsData.length; i++) {
	                    commentList.items.push(commentsData[i]);
	                }
	            });
	        });
	    });
	}
	
	// 增加一条评论
	function addComment(commentList, newComment, callback) {
	    $.post(config.commentApiUrl, newComment, function(comment) {
	        var newCommentId = comment._id;
	        newComment._id = newCommentId;
	        if (config.sceneId !== undefined) {
	            var scene = commentList.scene;
	            scene.commentsIds.push(newCommentId);
	            util.restfulPutRequest(config.sceneApiUrl, scene._id, scene, callback);
	        } else if (config.plantId !== undefined) {
	            var plant = commentList.plant;
	            plant.commentsIds.push(newCommentId);
	            util.restfulPutRequest(config.plantApiUrl, plant._id, plant, callback);
	        }
	    });
	}
	
	// 根据usersIds查询user信息
	function getUsersData(usersIds, callback) {
	    var usersData;
	
	    var idInQureyString = '?_id__in=';
	    var userUrl = config.userApiUrl + idInQureyString + usersIds.toString();
	    $.get(userUrl, function (data) {
	        usersData = data;
	        callback(usersData);
	    });
	}
	
	function mySort() {
	    return function(obj1, obj2){
	        var a, b;
	        if (typeof obj1 === "object" && typeof obj2 === "object" && obj1 && obj2) {
	            a = Date.parse(obj1.createdDate + ' ' + obj1.createdTime);
	            b = Date.parse(obj2.createdDate + ' ' + obj2.createdTime);
	            if (a === b) {
	                return 0;
	            }
	            if (typeof a === typeof b) {
	                return a < b ? -1 : 1;
	            }
	        }
	    };
	}


/***/ },
/* 9 */
/*!**********************!*\
  !*** ./js/config.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(/*! ./util */ 10);
	
	var URLParams = util.getQureyParams(window.location.href);
	var userApiUrl = 'http://121.40.224.83:8080/JnPlant/api/user/';
	getUserIdByOpenId(URLParams.openId);
	
	module.exports = {
	    commentApiUrl: 'http://121.40.224.83:8080/JnPlant/api/comment/',
	    sceneApiUrl: 'http://121.40.224.83:8080/JnPlant/api/scene/',
	    userApiUrl: userApiUrl,
	    plantApiUrl: 'http://121.40.224.83:8080/JnPlant/api/plant/',
	
	    sceneId: URLParams.sceneId,
	    openId: URLParams.openId,
	    plantId: URLParams.plantId
	};
	
	
	function getUserIdByOpenId(openId) {
	    var qureyUrl = '?openId=';
	    $.get(userApiUrl + qureyUrl + openId, function (data) {
	        module.exports.userId = data[0]._id;
	    });
	}


/***/ },
/* 10 */
/*!********************!*\
  !*** ./js/util.js ***!
  \********************/
/***/ function(module, exports) {

	exports.getQureyParams = function(url) {
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
	};
	
	exports.restfulPutRequest = function (apiUrl, id, changeInfo, callback) {
	    $.ajax({
	        url: apiUrl + id,
	        type: 'PUT',
	        dataType: 'json',
	        contentType: 'application/json',
	        data: JSON.stringify(changeInfo),
	        success: function() {
	            callback();
	            console.log('put success');
	        }
	    });
	};
	get()
	
	exports.getDateString = function (date) {
	    var dateString = '';
	    var year = date.getFullYear().toString();
	    var month = (date.getMonth() + 1).toString();
	    var dateInMonth = date.getDate().toString();
	
	    dateString = year + '-' + month + '-' + dateInMonth;
	    return dateString;
	};
	
	exports.getTimeString = function (date) {
	    var timeString = '';
	    var hour = date.getHours().toString();
	    var minutes = date.getMinutes().toString();
	    var seconds = date.getSeconds().toString();
	
	    timeString = hour + ':' + minutes + ':' + seconds;
	    return timeString;
	};


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map