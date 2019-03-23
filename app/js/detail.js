require(["config"], function(){
	require(["jquery","header","footer","template"], function($,header,footer,template){
		$("header").load("/html/component/header.html .header-top,.header-mid",function(){
			alert("end");
			//执行header模块的交互代码
		});

		//footer


		//同时发送异步请求渲染主体部分

		//从url上取出id参数，然后携带这个参数去请求当前数据
		var str = location.search.slice(1);
		var arr = str.split("="); // ["id","3"];
		var obj = {};
		obj[arr[0]] = arr[1];

		$.ajax({
			url:"http://localhost/projectserver/api/detail.php",
			data: obj,
			method:"POST",
			dataType:"json",
			success: function(res){
				//console.log(res);
				if(res.code === 1){
					var str = template("detil-template",{product: res.product});
					$("#detail").html(str);
				}
			}
		})

	})
})