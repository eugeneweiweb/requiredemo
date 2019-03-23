require(["config"], function(){
	require(["jquery", "template", "header", "footer","lunbo"], function($, template, header){
		new Promise(function(resolve,reject){
			$("header").load("/html/component/header.html", function(){
				resolve();
				//header.nav();
			})
			$("footer").load("/html/component/footer.html", function(){
				//footer的交互代码
			})

		}).then(function(){
			//执行header和footer的逻辑代码，实现交互
			header.nav();
		}).then(function(){
			$.ajax({
				method: "get",
				url:"http://rap2api.taobao.org/app/mock/115081/products",
				success: function(res){
					console.log(res);
					var html = template("pro-template",{products: res.products});
					console.log(html);
					$("#proList").html(html);
				}

			})
		}).then(function(){
			$("#div1").lunbo({
				goPrev:"left",
				goNext: "right"
			})
		})
	})
})