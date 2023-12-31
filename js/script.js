//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
//Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite

//contenuto HTML row
/*
                <div class="card text-start">
                    <img class="card-img-top" src="img/wayne-barnett-founder-ceo.jpg" alt="waine">
                    <div class="card-body text-center">
                        <h4 class="card-title ">bubu</h4>
                        <p class="card-text ">bubu</p>
                    </div>
                </div>   
               
*/

// creo l'arrey di oggetti (team).
"use strict";

const team = [
    {
        nome: 'Waine Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
 
];
/*
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, 
ruolo e la stringa della foto.
*/
const rowEl = document.querySelector('.row');
console.log(rowEl);

/*
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe.
Trasformare la stringa foto in una immagine effettiva.
BONUS :
Organizzare i singoli membri in card/schede.
*/

for (let i= 0; i < team.length; i++){
/*
    console.group();
    console.log(team[i].nome);
    console.log(team[i].ruolo);
    console.log(team[i].foto);
    console.groupEnd();
*/
const col = printCol(team[i]);

}

//prendo l'html
function printCol(teams){
    const col = document.createElement("div");
    col.classList.add("col-4");
    const gruppo = `
                <div class="card text-start">
                    <img class="card-img-top" src="img/${teams.foto}" alt="waine">
                    <div class="card-body text-center">
                        <h4 class="card-title ">${teams.nome}</h4>
                        <p class="card-text ">${teams.ruolo}</p>
                    </div>
                </div>  
            `;
        col.innerHTML = gruppo;
        rowEl.append(col);
        }

//aggiungere una persona al team.
const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    const nuovoUtente = {
   nome: document.getElementById('nome').value,
   ruolo: document.getElementById('ruolo').value,
   foto: document.getElementById('foto').value,
    }
    console.log(nuovoUtente);
    team.push(nuovoUtente);
    printCol(nuovoUtente);
    reset();
});

//appena invio si resetta il form
function reset (){
    document.getElementById('nome').value = ''
    document.getElementById('ruolo').value = ''
    document.getElementById('foto').value = ''
}