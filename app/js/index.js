require(["config"], function(){
	require(["jquery", "tools", "header", "footer","drag"], function($,tools,header){

		//promise
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
				resolve();
			});
		}).then(function(){
			header.nav();
		}).then(function(){
			$(".box").drag();

		})



	})
});
