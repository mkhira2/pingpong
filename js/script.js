var constructTable = function(apiResponse) {
	var tableNode = document.querySelector('.tableBody')
	var htmlString = ''
	for (var i = 0; i < apiResponse.length; i++) {
		if(!(i%2)){
			htmlString += '<tr style="background: #white">'
		}
		else
		{
			htmlString += '<tr style="background: #eee">'
		}
	htmlString += '<td>' + apiResponse[i].name + '</td>'
	htmlString += '<td>' + apiResponse[i].win_count + '</td>'
	htmlString += '<td>' + apiResponse[i].loss_count + '</td>'
	htmlString += '<td>' + apiResponse[i].winning_percentage + '</td></tr>'
	}
	tableNode.innerHTML = htmlString
}
setInterval(function() {
var promise = $.getJSON('js/localdata.json')

promise.then(constructTable)
}, 1000)



