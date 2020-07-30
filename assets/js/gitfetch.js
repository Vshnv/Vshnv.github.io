(
    function(global) {
    	function fetchDescription(repo,id) {
    		$.ajax('https://api.github.com/repos/Vshnv/'+repo).done(function(json) { 
   				console.log("Loaded " + repo);
   				console.log(json);
   				$("#"+id+"-desc").text(json.description);
   				console.log("#"+repos[i]+"-desc");

   				$("."+id).click(function() {
   					window.open("https://github.com/Vshnv/" + repo);
				});
			});
    	}
        
        var repos = {"PersistanceFramework":"pf", "web-designs":"wd", "DjinnLang":"djinn"}
        for (i in repos) {
        	fetchDescription(i,repos[i]);
        }
    }
)(window);