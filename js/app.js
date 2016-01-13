var snippet = document.getElementById('snippet')

document.getElementById('encodeURIComponent').addEventListener('click', function() {
	snippet.value = encodeURIComponent(snippet.value)
})

document.getElementById('decodeURIComponent').addEventListener('click', function() {
	snippet.value = decodeURIComponent(snippet.value)
})

document.getElementById('encodeFor2Quotes').addEventListener('click', function() {
	try {
		snippet.value = JSON.stringify([snippet.value]).slice(2).slice(0, -2)
	} catch (e) {
		window.alert(e.message())
	}
})

document.getElementById('decodeFor2Quotes').addEventListener('click', function() {
	try {
		snippet.value = JSON.parse('["' + snippet.value + '"]')[0]
	} catch (e) {
		window.alert(e.message())
	}
})