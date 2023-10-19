//DARK MODE

let toggleDark = document.getElementById('btn');
let body = document.getElementsByTagName('body')[0];

toggleDark.addEventListener('click', function (e) {
    body.classList.toggle("dark");
});

//Changement d'image en cliquant

let image = document.querySelector('img');
image.addEventListener ('click', function (e) {
    let image2 = document.querySelector('img');
    image2.src = "speedy.png"
});

// Modal

//récupération bouton par l'ID
let toggleModal = document.getElementById('disp');

//Add Event listener
toggleModal.addEventListener ('click', function (e) {

    //Récupération de l'ID modal des détails à afficher ou cacher puis mis dans la variable element
    let element = document.getElementById('modal');

    //utilisation de la classe en CSS qui n'apparait pas dans le HTML
    element.classList.remove('display');
});

// récupération du bouton par l'ID pour le bouton fermé 
let toggleFerme = document.getElementById('ferme');

//ADD event listener
toggleFerme.addEventListener ('click' ,function (e) {

    //Récupération de l'ID modal des détails à afficher ou cacher puis mis dans la variable element 
    let element = document.getElementById('modal');

    // //utilisation de la classe en CSS qui n'apparait pas dans le HTML
    element.classList.add('display');
});


//Bouton like/dislike 

let like = document.getElementById('like');
let boutonLD = document.getElementById('btnLikeDislike')
like.addEventListener ('click', function (e) {
    let dislike = document.getElementById('dislike');
    dislike.src = "dislike.png"
});