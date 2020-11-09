document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault()

    var data = new FormData(this);

    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.response)
                //traitement de la reponse
            var result = this.response
            if (result.success) {

                console.log(document.getElementById('result').innerHTML = '<p>' + "utilisateur inscrit" + '</p>')

            } else {
                document.getElementById('result').innerHTML = '<p>' + result.msg + '</p>'
            }
        } else if (this.readyState === 4) {

            document.getElementById('result').innerHTML = ' <p> Erreur suvenu  dans php-index</p>'
        }
    }

    xhr.open("POST", " form.php", true)
    xhr.responseType = "json"
        // xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
    xhr.send(data)

    return false
})



const openText = function(e) {
    e.preventDefault()
    $('.' + $(this).attr('name')).show('slow');
}

const closeText = function(e) {
    e.preventDefault()
    $('.' + $(this).attr('name')).hide('slow');
}
$('input').focus(openText)
$('input').focusout(closeText)
$('textarea').focus(openText)
$('textarea').focusout(closeText)