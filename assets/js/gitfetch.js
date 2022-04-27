(
    function(global) {
    	function fetchDescription(repo,id) {
    		$.ajax('https://api.github.com/repos/'+repo).done(function(json) { 
   				console.log("Loaded " + repo);
   				console.log(json);
   				$("#"+id+"-desc").text(json.description);
   				console.log("#"+repos[i]+"-desc");

   				$("."+id).click(function() {
   					window.open("https://github.com/" + repo);
				});
			});
    	}
        
        var repos = {"slimjar/slimjar":"sj", "ElaraLang/Elara":"el", "Vshnv/skeson":"sk"}
        for (i in repos) {
        	fetchDescription(i,repos[i]);
        }
    }
)(window);
