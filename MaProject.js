if (Meteor.isClient) {
  

	webix.ready(function(){
			grida = webix.ui({
				container:"project-table",
				view:"treetable",
				columns:[
					{ id:"id",	header:"", css:{"text-align":"right"}},
					{ id:"value",	header:"Film title",	fillspace:true,
						template:"{common.treetable()} #value#" },
					{ id:"chapter",	header:"Mode"}
				],
				autoheight:true,
				scrollX:false,

				data: [
					{ "id":"1", "value":"The Shawshank Redemption", "open":true, "data":[
						{ "id":"1.1", "value":"Part 1", "chapter":"alpha"},
						{ "id":"1.2", "value":"Part 2", "chapter":"beta", "open":true, "data":[
							{ "id":"1.2.1", "value":"Part 1", "chapter":"beta-twin"},
							{ "id":"1.2.2", "value":"Part 1", "chapter":"beta-twin"}
						]},
						{ "id":"1.3", "value":"Part 3", "chapter":"gamma" }
					]},
					{ "id":"2", "value":"The Godfather", "data":[
						{ "id":"2.1", "value":"Part 1", "chapter":"alpha" },
						{ "id":"2.2", "value":"Part 2", "chapter":"beta" }
					]},
					{ "id":"1", "value":"The Shawshank Redemption", "open":true, "data":[
						{ "id":"1.1", "value":"Part 1", "chapter":"alpha"},
						{ "id":"1.2", "value":"Part 2", "chapter":"beta", "open":true, "data":[
							{ "id":"1.2.1", "value":"Part 1", "chapter":"beta-twin"},
							{ "id":"1.2.2", "value":"Part 1", "chapter":"beta-twin"}
						]},
						{ "id":"1.3", "value":"Part 3", "chapter":"gamma" }
					]},
					{ "id":"2", "value":"The Godfather", "data":[
						{ "id":"2.1", "value":"Part 1", "chapter":"alpha" },
						{ "id":"2.2", "value":"Part 2", "chapter":"beta" }
					]}
				]
			});	
		});		
  
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
