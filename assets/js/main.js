//quand la page est chargée (ready)
$(document).ready(function () {
    //si j'appuie sur show
    $("#show").click(function () {
        //je fais reapparaitre le paragraphe text
        //j'enleve l'attribut hidden du paragraphe text
        $("#text").removeAttr('hidden');
    });
});