function callTranslateApi(originalText, successCallback) {
	$.ajax({
		url: "http://fanyi.baidu.com/v2transapi",
		type: "POST",
		dataType: "json",
		data: {
			from: "en",
			to: "zh",
			source: "txt",
			query: originalText
		},
		success: function (data) {
			// TODO 处理格式转换
			var result = data;
			successCallback(result);
		},
		error: function (error) {
			console.error("百度翻译API调用错误！ 请联系作者 guzhilinghun@qq.com 更新。");
		}
	});
}

function translateAndShow(originalText) {
	callTranslateApi(originalText, showResult);
}

function showResult(result) {
	console.error(result);
}

function hideResult() {

}

function keypressListener(keyConfig, callback) {
	$(document).keydown(function (event) {
		var originalText = window.getSelection().toString()
		if (event.key == keyConfig.key) {
			// console.error(event);
			console.error("待翻译的字段为: " + originalText);
			callback(originalText);
			if (1 == 2) {
				event.preventDefault();
			}
		}
	});
}

// 注册按键事件
keypressListener({ key: "`" }, translateAndShow);
