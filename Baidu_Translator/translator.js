
$(function () {
	$(document).keydown(function (event) {
		console.log(event);
		console.log("是否Ctrl: " + event.ctrlKey + "; 按键代码： " + event.keyCode);
	});
});