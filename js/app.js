var snippet = document.getElementById('snippet')

document.getElementById('encodeURIComponent').addEventListener('click', function() {
	snippet.value = encodeURIComponent(snippet.value)
})

document.getElementById('decodeURIComponent').addEventListener('click', function() {
	snippet.value = decodeURIComponent(snippet.value)
})