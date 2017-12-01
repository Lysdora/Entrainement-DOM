// Petit script pour afficher et masquer les images
var gamesButton = document.getElementById('gamesButton');
var mesImages = document.querySelector('#mesImages');
//console.log(mesImages);

// add eventlistener sur le button
gamesButton.addEventListener('click', function(){
    if (mesImages.style.display === 'block') {
        gamesButton.textContent = "Voir mes images";
        mesImages.style.display = 'none';
    }else {
        gamesButton.textContent = "Ne plus voir mes images";
        mesImages.style.display = 'block';
    }
   
});