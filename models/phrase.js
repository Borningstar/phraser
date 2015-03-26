var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var phraseSchema = new Schema(
	{
		name: String,
	  	words: [{	id: { type: String, index: true },
			  		list: [String],
			  		enabled: { type: Boolean, default: true },
			  		next: [String] }],
		lists: [{	id:  {type: String, index: true },
					list: [String] }]
	}
);

phraseSchema.methods.getWords = function (id) {
	var word = null;
	var words = [];

	for (var i = 0; i < this.words.length; i++){
		if (this.words[i].id == id || id == i){
			words = this.words[i].list;

			if (this.words[i].enabled){
				var wordIndex = Math.floor(Math.random() * words.length);
				word = words[wordIndex];
			}
			break;
		}
	}

	return word;
};

phraseSchema.methods.getNext = function (id) {
	var next = null;
	var nextList = this.words.next;
	var words = this.words.words;	

	if (this.words[id].enabled){
		for (var i = 0; i < nextList.length; i++){
			var wordIndex = Math.floor(Math.random() * wordList.length);
			if (this.words[wordIndex].enabled){
				var nextIndex = Math.floor(Math.random() * nextList.length);
				next = this.words[wordIndex].next[nextIndex];
				break;
			}
		}
	}
	return next;
};

var Phrase = mongoose.model('Phrase', phraseSchema);

module.exports = Phrase;
