const plant = document.querySelector('#plantje')

plant.src = 'plant.png'

const plantplaatjes = ['plant.png', 'plant2.png', 'plant3.png', 'plant4.png', 'plantdood.png']

const health = document.getElementById ('bar')

const zon = document.getElementById('zon');

const gieter = document.getElementById('gieter');

const praten = document.getElementById('praten');

const geluidGieter = new Audio('waterdruppel.mp3'); //How to play a sound with JavaScript. (2021, July 19). Go Make Things. https://gomakethings.com/how-to-play-a-sound-with-javascript/ & Sound Effect by <a href="https://pixabay.com/nl/users/floraphonic-38928062/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=165637">floraphonic</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=165637">Pixabay</a>

const geluidPraten = new Audio('brabbel.mp3');//Pixabay. (n.d.). Free Gibberish 0-30 Sound Effects download - Pixabay. https://pixabay.com/nl/sound-effects/search/gibberish/?duration=0-30

const geluidZon = new Audio('burn.mp3')//Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=88637">Pixabay</a>

const kop = document.querySelector('h1')

const knop = document.getElementById('button')

let klikaantal = 0;


//healthbar
setInterval(countSeconds, 800)

function countSeconds() {
    // alleen als health > 0
    health.value -=1;

    
    // healthbar die naar beneden zakt en veranderd van afbeeling
    if (health.value > 85) {
        plant.src = plantplaatjes[0]
        health.classList.remove('groen', 'oranje', 'oranjerood'); //ChatGPT. (n.d.). https://chatgpt.com/c/bb5bb18e-3fc7-4e8c-b97d-b5ecfadc9330
        console.log('plant1')


    }else if (health.value > 60) {
        plant.src = plantplaatjes[1]
        health.classList.add('groen')
        health.classList.remove('oranje', 'oranjerood');
        console.log('plant2')


    }else if (health.value > 30) {
        plant.src = plantplaatjes[2]
        health.classList.add('oranje')
        health.classList.remove('oranjerood');
        console.log('plant3')


    }else if (health.value > 0) {
        plant.src = plantplaatjes[3]
        document.querySelector('#bar').classList.add('oranjerood')
        console.log('plant4')


    }else if (health.value <= 0) {
        plant.src = plantplaatjes[4]
        kop.textContent = ('Plant is dood')
        kop.textContent = (plantnaam + ' is dood') //Als er geen plantnaam is ingevuld, word de textcontent 'plant is dood' ingevoerd. Het systeem krijgt dan een error dat het de plantnaam niet kan vinden, maar dat is intentioneel.
        console.log('plantdood')
    }

}

//naam plant
function veranderNaam() {
    plantnaam = document.getElementById('naam').value;
    kop.textContent = ('Houd ' + plantnaam + ' in leven')
    console.log ('Houd ' + naam + ' in leven')
}

knop.addEventListener('click', veranderNaam)


//health van de zon gaat omhoog
function healthOmhoog (){
    if (health.value < 100){
        health.value +=10;
    }
}

zon.addEventListener('click', healthOmhoog);

function geluidafspelenzon () {
	geluidZon.play();
    
}

zon.addEventListener('click', geluidafspelenzon); //Sound Effect by <a href="https://pixabay.com/nl/users/floraphonic-38928062/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=186586">floraphonic</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=186586">Pixabay</a>


//health van de gieter gaat omhoog
function healthOmhoog (){
    if (health.value < 100){
        health.value +=5;
    }
}

gieter.addEventListener('click', healthOmhoog);

//geluid van de gieter
function geluidafspelengieter () {
	geluidGieter.play();
    
}

gieter.addEventListener('click', geluidafspelengieter);

//health van praten gaat omhoog
function healthOmhoog (){
    if (health.value < 100){
        health.value +=5;
    }
}

praten.addEventListener('click', healthOmhoog);


function geluidafspelenpraten () {
	geluidPraten.play();
}

praten.addEventListener('click', geluidafspelenpraten); //Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=88637">Pixabay</a>


//dood door water
function waterscherm (){
    klikaantal += 1;

    if(klikaantal >= 10){
        document.querySelector('#water').classList.add('omhoog') //ChatGPT. (n.d.). https://chatgpt.com/c/56adf1bb-2933-40d0-a323-7f653400f7cd
        health.value = 0;
        console.log ('plant verdronken')
    }
}

gieter.addEventListener('click', waterscherm);
