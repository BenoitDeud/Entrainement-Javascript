//SPEEDY EXO2
let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");

function courrir() {
    document.getElementById('speedyDepart').style.display = "none";
    document.getElementById('speedyCourt').style.display = "block";
}

function restart() {
    document.getElementById('speedyDepart').style.display = "block";
    document.getElementById('speedyCourt').style.display = "none";
}
btn1.addEventListener("click", courrir);
btn2.addEventListener("click", restart);


//MODAL EXO3

let btnOuvrir = document.getElementById("disp");
let btnFerme = document.getElementById("ferme");

function ouvrir() {
    document.getElementById("modal").style.display = "block";
}

function fermer() {
    document.getElementById("modal").style.display = "none";
}
btnOuvrir.addEventListener("click", ouvrir);
btnFerme.addEventListener("click", fermer);



//Like Dislike EXO4

let btnLike = document.getElementById("btnLike");
let btnDislike = document.getElementById("btnDislike");

function like () {
    document.getElementById("like").style.display = "none";
    document.getElementById("dislike").style.display = "block";
    btnDislike.style.display = "none";
    btnLike.style.display = "block";
};

function dislike () {
    document.getElementById("like").style.display = "block";
    document.getElementById("dislike").style.display = "none";
    btnLike.style.display = "none";
    btnDislike.style.display = "block";
};

btnLike.addEventListener("click", dislike);
btnDislike.addEventListener("click", like);




//faire apparaitre disparaitre une image EXO5



//texte apparait et l'autre disparait EXO6

let conception = document.getElementById("titre1");
let formation = document.getElementById("titre2");
let jury = document.getElementById("titre3");
let audit = document.getElementById("titre4");
let stage = document.getElementById("titre5");

function ouvrirConception () {
    document.getElementById("pave1").style.display = "block";
    document.getElementById("pave2").style.display = "none";
    document.getElementById("pave3").style.display = "none";
    document.getElementById("pave4").style.display = "none";
    document.getElementById("pave5").style.display = "none";
}

function ouvrirFormation () {
    document.getElementById("pave1").style.display = "none";
    document.getElementById("pave2").style.display = "block";
    document.getElementById("pave3").style.display = "none";
    document.getElementById("pave4").style.display = "none";
    document.getElementById("pave5").style.display = "none";
}

function ouvrirJury () {
    document.getElementById("pave1").style.display = "none";
    document.getElementById("pave2").style.display = "none";
    document.getElementById("pave3").style.display = "block";
    document.getElementById("pave4").style.display = "none";
    document.getElementById("pave5").style.display = "none";
}

function ouvrirAudit () {
    document.getElementById("pave1").style.display = "none";
    document.getElementById("pave2").style.display = "none";
    document.getElementById("pave3").style.display = "none";
    document.getElementById("pave4").style.display = "block";
    document.getElementById("pave5").style.display = "none";
}

function ouvrirStage () {
    document.getElementById("pave1").style.display = "none";
    document.getElementById("pave2").style.display = "none";
    document.getElementById("pave3").style.display = "none";
    document.getElementById("pave4").style.display = "none";
    document.getElementById("pave5").style.display = "block";
}

conception.addEventListener("click", ouvrirConception);
formation.addEventListener("click", ouvrirFormation);
jury.addEventListener("click", ouvrirJury);
audit.addEventListener("click", ouvrirAudit);
stage.addEventListener("click", ouvrirStage);


//EXO 7 My big burger mais comment le fermer hum

let btnBurger = document.getElementById("burger");
let header = document.getElementById("headerLienNone")

function ouvrirBurger() {
    if(header.style.display="none"){
        header.style.display ="block";
        }
}

btnBurger.addEventListener("click", ouvrirBurger);





