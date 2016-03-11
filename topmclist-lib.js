// Author: DCreason
// For more information go to Https://topmclist.com/API_Help


var tmcl = {
	request: function(url, _callback){ // xhr json requests made easy!
		var req = new XMLHttpRequest()
		req.onreadystatechange = function(){
			if (req.readyState == 4){
				json = JSON.parse(req.response)
				_callback(json)
			}
		}
		req.open("GET", url, true)
		req.send()
	},
	gettotal: function(_callback){
		this.request("http://topmclist.com/API?Key="+apikey+"&Type=Get_Total", _callback)
	},
	getvotes: function(address, _callback){
		this.request("http://topmclist.com/API?Key="+apikey+"&Type=Get_Votes&Address="+address, _callback)
	},
	getrank: function(address, _callback){
		this.request("http://topmclist.com/API?Key="+apikey+"&Type=Get_Rank&Address="+address, _callback)
	},
	getserverbyrank: function(rank, _callback){
		this.request("http://topmclist.com/API?Key="+apikey+"&Type=Get_Server_By_Rank&Rank="+rank, _callback)
	},
	getgraph: function(address, datapoints, _callback){
		this.request("http://topmclist.com/API?Key="+apikey+"&Type=Get_Graph&Address="+address+"&Limit="+datapoints, _callback)
	}
}