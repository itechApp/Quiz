const form =document.querySelector('.form-quizz');
let tableauResultats =[];
const reponses =['a','a','c','b','a'];
const emojis = [];
const titreResultat = document.querySelector('.resultats h2');
const texteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const texteLesQuestios = document.querySelector('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log(document.querySelector('input[name="q1"]:checked').value);

    for(i=1; i < 6; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    console.log(tableauResultats);
    tableauResultats = [];
})

function veriffunc(tabResultats) {
    for(let a =0; a < 5; a++){
        if(tabResultats[a] === reponses[a]) {
            verifTableau.push(true);
        }else{
            verifTableau.push(false);
        }
    }
    //console.log(verifTableau);
    afficherResultats(verifTableau);
    verifTableau = [];
}
function afficherResultats(tabCheck) {
    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    console.log(nbdefautes);
}