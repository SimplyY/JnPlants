//初始化
history.pushState({page: 1}, "title 1", "?page=1");
history.pushState({page: 2}, "title 2", "?page=2");
history.replaceState({page: 3}, "title 3", "?page=3");

//绑定事件
window.onpopstate = function(event) {
  alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
};

/**
 * 执行后退/前进动作打印信息
 * history.back(); alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
 * history.back(); alerts "location: http://example.com/example.html, state: null
 * history.go(2);  alerts "location: http://example.com/example.html?page=3, state: {"page":3}
 */
