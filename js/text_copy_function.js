document.getElementById('copyLink').addEventListener('click', function() {

    var textToCopy = document.getElementById('textToCopy').innerText;

    var tempTextarea = document.createElement('textarea');

    tempTextarea.value = textToCopy;

    document.body.appendChild(tempTextarea);

    tempTextarea.select();

    document.execCommand('copy');

    document.body.removeChild(tempTextarea);

});