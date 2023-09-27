const videoTitles = ["Scartamento S1", "Scartamento S2", "Scartamento S3","Scartamento S4", "Scartamento S5", "Scartamento S6","Scartamento S7","Scartamento S8", 
"Quota passaggio aghi QPA1","Quota passaggio aghi QPA2", "Quota ingresso della controrotaia QIC1", "Quota ingresso della controrotaia QIC3", "Quota ingresso della controrotaia QIC4", 
"Quota ingresso della zampa di lepre QIZ1", "Quota ingresso della zampa di lepre QIZ2",
"Quota di libero passaggio QLP1","Quota di libero passaggio QLP2",
"Quota di protezione QP1","Quota di protezione QP2","Gola A1","Gola A2","Gola A3","Gola A4","Gola A5", "Gola A6"];
const videoDescriptions = ["Lo Scartamento è la minima distanza, in mm, fra i fianchi attivi dei funghi delle due rotaie, misurata dal piano di rotolamento fino a 14mm sotto di esso. S1 si misura alla giunzione di ingresso del telaio degli aghi o a 1 metro dalla punta degli aghi.", 
"S2 si misura in corrispondenza della punta reale degli aghi", "S3 si misurano in corrispondenza del contatto funghi ago-contrago o alla fine della lavorazione del contrago.",
"S4 si misurano in corrispondenza del contatto funghi ago-contrago o alla fine della lavorazione del contrago.", "S5 si misurano in corrispondenza della prima piastra speciale  della parte fissa del telaio degli aghi.", 
"S6 si misurano in corrispondenza della prima piastra speciale  della parte fissa del telaio degli aghi.", "S7 si misurano a 100mm dalla punta reale del cuore.", "S8 si misurano a 100mm dalla punta reale del cuore.",
"Per quote si intende le distanze, in mm, misurate sia sul ramo principale che sul secondario, dal piano di rotolamento fino a 14mm sotto di esso, che, a seconda del punto di misura sull’apparecchio di binario si suddividono in QPA, QIC, QIZ, QLP, QP. QPA quota passaggio aghi, si misura tra il fianco attivo dell’ago in posizione accosta e il fianco non attivo dell’ago in posizione discosta nel punto in cui termina la lavorazione dell’ago.",
"QPA quota passaggio aghi, si misura tra il fianco attivo dell’ago in posizione accosta e il fianco non attivo dell’ago in posizione discosta nel punto in cui termina la lavorazione dell’ago.", "QIC quota ingresso della controrotaia, si misura a 100mm dalle estremità di ingresso della controrotaia: QIC1 tra i fianchi attivi della controrotaia e il fianco attivo della rotaia affacciata",
"QIC quota ingresso della controrotaia, si misura a 100mm dalle estremità di ingresso della controrotaia: QIC3 tra i fianchi attivi della controrotaia e il cuore.","QIC quota ingresso della controrotaia, si misura a 100mm dalle estremità di ingresso della controrotaia: QIC4 tra i fianchi attivi della controrotaia e il cuore.",
"QIZ quota ingresso della zampa di lepre, si misura a 100 mm dall’estremità di ingresso della zampa di lepre tra i fianchi attivi della zampa di lepre e il fianco attivo  della rotaia affacciata.", "QIZ quota ingresso della zampa di lepre, si misura a 100 mm dall’estremità di ingresso della zampa di lepre tra i fianchi attivi della zampa di lepre e il fianco attivo  della rotaia affacciata.",
"QLP quota di libero passaggio, si misura tra il fianco attivo della controrotaia e il fianco attivo della zampa di lepre in un punto compreso tra 100mm dalla punta reale del cuore e la sezione dove la punta del cuore ha uno spessore di 58mm.","QLP quota di libero passaggio, si misura tra il fianco attivo della controrotaia e il fianco attivo della zampa di lepre in un punto compreso tra 100mm dalla punta reale del cuore e la sezione dove la punta del cuore ha uno spessore di 58mm.",
"QP quota di protezione, si misura tra il fianco attivo della controrotaia e la punta del cuore ad una distanza di 100mm dalla punta reale del cuore.", "QP quota di protezione, si misura tra il fianco attivo della controrotaia e la punta del cuore ad una distanza di 100mm dalla punta reale del cuore.",
"Le gole rappresentano la minima distanza espressa in mm, misurata dal piano di rotolamento fino a 14 mm sotto di esso, sia sul ramo principale che secondario. A1 si misurano prendendo l’apertura tra ago e contrago.", "A2 si misurano prendendo l’apertura tra ago e contrago.",
"A3 si misurano tra controrotaia e rotaia unita alla controrotaia.", "A4 si misurano tra controrotaia e rotaia unita alla controrotaia.","A5 si misurano tra zampa di lepre e punta del cuore", "A6 si misurano tra zampa di lepre e punta del cuore"];
const videoSources = ["videoconvert/S1.mp4", "videoconvert/S2.mp4", "videoconvert/S3.mp4","videoconvert/S4.mp4", "videoconvert/S5.mp4", "videoconvert/S6.mp4","videoconvert/S7.mp4", "videoconvert/S8.mp4",
"videoconvert/QPA1.mp4", "videoconvert/QPA2.mp4","videoconvert/QIC1.mp4", "videoconvert/QIC3.mp4", "videoconvert/QIC4.mp4",
"videoconvert/QIZ1.mp4","videoconvert/QIZ2.mp4",
"videoconvert/QLP1.mp4","videoconvert/QLP2.mp4","videoconvert/QP1.mp4","videoconvert/QP2.mp4",
"videoconvert/A1.mp4","videoconvert/A2.mp4","videoconvert/A3.mp4","videoconvert/A4.mp4","videoconvert/A5.mp4","videoconvert/A6.mp4"];
let currentIndex = 0;

const videoTitleElement = document.getElementById("video-title");
const videoDescriptionElement = document.getElementById("video-description");
const videoContainer = document.getElementById("video-container");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function updateVideo(index) {
    videoTitleElement.textContent = videoTitles[index];
    videoDescriptionElement.textContent = videoDescriptions[index];

    // Rimuovi l'elemento video esistente, se presente
    const existingVideo = videoContainer.querySelector("video");
    if (existingVideo) {
        videoContainer.removeChild(existingVideo);
    }

    // Crea e aggiungi un nuovo elemento video
    const videoElement = document.createElement("video");
    videoElement.width = "100%";
    videoElement.controls = true;
    videoElement.src = videoSources[index];
    videoContainer.appendChild(videoElement);

    currentIndex = index;
}

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        updateVideo(currentIndex - 1);
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < videoTitles.length - 1) {
        updateVideo(currentIndex + 1);
    }
});

function createVideoElement(videoUrl) {
    var containerDiv = document.getElementById("video-container");
    
    
            var videoElement = document.createElement("video");
    
            videoElement.src = videoUrl; // Sostituisci con l'URL del tuo video
            videoElement.controls = true; // Permette i controlli del video (play, pausa, volume, ecc.)
    
            containerDiv.appendChild(videoElement);
    }
    
    document.addEventListener("DOMContentLoaded", function(event) {
       
    // codice per creare un nodo e renderlo figlio del div, e poi caricare il video 
     createVideoElement("videoconvert/S1.mp4")
    });

// Initialize with the first video
updateVideo(0);
