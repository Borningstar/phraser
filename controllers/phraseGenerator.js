var phraseGenerator = function (phraseModel) {
	var current = 0;
	var next = phraseModel.getNext(current);
	var phrase = phraseModel.getWord(current);

	while (next) {
		current = next;
		if (current){
			phrase += phraseModel.getWord(current);
			next = phraseModel.getNext(current);	
		} else {
			break;
		}
	}

	return phrase;
}

module.exports = phraseGenerator;
