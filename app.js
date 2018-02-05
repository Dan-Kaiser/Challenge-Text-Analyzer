// your code here!

function getTokens(rawString){
	return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

function wordCounter(text){
	var words = getTokens(text);
	wordCount = words.length;
	$('.js-count').empty().append(wordCount);
}

function getAverageWordLength(text) {
  // join all tokens together to create one big string
  // then divide that total length by the number
  // of tokens to get average
  var words = getTokens(text);
  var totalLength = words.join("").length;
  result = (totalLength / words.length).toFixed(2);
  $('.js-length').empty().append(result);
}

function uniqueCounter(text){
	var words = getTokens(text);
	var distinctWords = [];
	for (var i = 0; i < words.length; i++){
		console.log(distinctWords.indexOf(words[i]));
		if (distinctWords.indexOf(words[i]) === -1){
				distinctWords.push(words[i]);
		}
	}
	uniqueWordsAmount = distinctWords.length;
	$('.js-unique').empty().append(uniqueWordsAmount);
}

function formHandler(){
	$('.js-form').submit(function(event){
		event.preventDefault();
		$('.js-text-report').removeClass('hidden');
		var text = $(event.currentTarget).find('#user-text').val();
		wordCounter(text);
		uniqueCounter(text);
		getAverageWordLength(text);
	});
}


$(function(){
	formHandler();
});




