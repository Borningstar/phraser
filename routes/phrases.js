var express = require('express');
var phraseGenerator = require('../controllers/phraseGenerator')
var router = express.Router();

var Phrase = require('../models/phrase');

/* GET users listing. */
router.get('/', function(req, res, next) {
/*
	var newPhrase = new Phrase ({name: "InsultPraise"});

	newPhrase.words.push({	id: "greeting",
			 				list: ["Hi", "Hello"],
			 				next: ["2"]});

	newPhrase.words.push({	id: "2",
			 				list: [", you are a"],
			 				next: ["insult", "praise"]});

	newPhrase.words.push({	id: "insult",
			 				list: ["jerk"],
			 				next: [null]});

	newPhrase.words.push({	id: "praise",
			 				list: ["hero"],
			 				next: [null]});

  	newPhrase.save(function(err, Phrase){
    	if (err) {
    		console.log("Error saving Phrase: " + err)
		} 
		else {
			console.log('Phrase created.')
			console.log(Phrase);
		};
  	})
*/

	var phrase;

	query = Phrase.findOne({'name' : 'InsultPraise'})
	.exec(function (err, results){
		if (err) {
    		console.log("Error getting phrase: " + err)
		} 
		else {
			phrase = results;
			res.json(phrase.getWords('greeting'));
		};				
	});
});

router.put('/', function(req, res){

});

router.post('/', function(req, res){

});

module.exports = router;
