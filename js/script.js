var constructTable = function(apiResponse) {
	var tableNode = document.querySelector('.tableBody')
	var htmlString = ''
	for (var i = 0; i < apiResponse.length; i++) {
		htmlString += '<tr>'
		htmlString += 	'<td>' + apiResponse[i].name + '</td>'
		htmlString += 	'<td>' + apiResponse[i].win_count + '</td>'
		htmlString += 	'<td>' + apiResponse[i].loss_count + '</td>'
		htmlString += 	'<td>' + apiResponse[i].winning_percentage + '</td>'
		htmlString += '</tr>'
	}
	tableNode.innerHTML = htmlString
}
setInterval(function() {
	var promise = $.getJSON('https://ironpong.herokuapp.com/home/index.json')
	promise.then(constructTable)
}, 1000)



