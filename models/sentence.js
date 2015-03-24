var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sentenceSchema = new Schema({
  words: [{	id: { type: String, index: true },
  		list: [String],
  		enabled: { type: bool, default: true },
  		next: [String] }],
  lists: [{	id:  type: String, index: true },
		list: [String] }]
});

sentenceSchema.methods.getWords = function (id) {
	var word = null;
	var words = this.words[id].list;

	if (this.words[id].enabled){
		var wordIndex = Math.floor(Math.random() * words.length);
		word = words[wordIndex];
	}
	return word;
};

sentenceSchema.methods.getNext = function (id) {
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
	return next;
};

var Sentence = mongoose.model('Sentence', sentenceSchema);

module.exports = Sentence;
