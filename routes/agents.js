var express = require('express');
var router = express.Router();

var Agent = require('../models/agent');

/* GET users listing. */
router.get('/', function(req, res, next) {

	var newAgent = new Agent({name: "Agent Name", real_estate: 'Real Estate', location: 'Brisbane'});
  	newAgent.ratings.push({comment: "Comment", user_id: '5', rating: '2'});
  	newAgent.save(function(err, agent){
    	if (err) {
    		console.log("Error saving agent: " + err)
		} 
		else {
			console.log('Agent created.')
			console.log(agent);
		};
  	})

	var agents;
	var query = Agent.find()
					.exec(function (err, results){
						if (err) {
				    		console.log("Error getting agents: " + err)
						} 
						else {
							agents = results;
							res.json(agents);
						};				
					});
});

router.put('/', function(req, res){

});

router.post('/', function(req, res){

});

module.exports = router;
