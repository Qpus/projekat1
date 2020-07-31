
//navigacija
document.querySelector(".nav-link").addEventListener("click", function(){
    document.getElementById("home").classList.toggle("hidden");
});




//pronadji element sa klasom fa-play i "slusaj"
document.getElementById("soundBtn").addEventListener("click", handleClick);
//nakon sto se klikne na dugme fa-play pokrece se ova funkcija za reprodukciju zvuka
function handleClick() {
    document.getElementById("progressBar").classList.toggle('progress-bar-animated');

    var music = document.getElementById('music');
    if (music.paused) {
        music.play();
        soundBtn.className = "";
        soundBtn.className = "fas fa-pause";
    } else {
        music.pause();
        soundBtn.className = "";
        soundBtn.className = "fas fa-play";
    }

}

////pronadji element sa klasom fa-list-ul i sakrij ga ili ga pokazi
document.querySelector(".fa-list-ul").addEventListener("click", function () {
    document.getElementById("playList").classList.toggle('hidden');
});
//// aktiviraj mute
//    document.querySelector(".fa-volume-up").addEventListener("click", function(){
//    document.getElementById("playList").classList.toggle('hidden');
//    }

//radio stanice
radioList = document.querySelectorAll(".playLink").length;

for (var i = 0; i < radioList; i++) {

    document.querySelectorAll(".playLink")[i].addEventListener("click", function () {


        var buttonInnerHTML = this.innerHTML;
        switch(buttonInnerHTML){
            
            case "TDI House":
                document.querySelector("source").setAttribute("src","https://streaming.tdiradio.com/house.mp3");
                music.load();
                handleClick();
            break;
            case "TDI House Classics":
                document.querySelector("source").setAttribute("src","https://streaming.tdiradio.com/houseclassics.mp3");
                music.load();
                handleClick();
            break;
            case "TDI Crna Gora":
                document.querySelector("source").setAttribute("src","https://streaming.tdiradio.com/crnagora.mp3");
                music.load();
                handleClick();
            break;
            case "TDI Top40":
                document.querySelector("source").setAttribute("src","https://streaming.tdiradio.com/top40.mp3");
                music.load();
                handleClick();
            break;
            case "TDI Pop RNB Hits":
                document.querySelector("source").setAttribute("src","https://streaming.tdiradio.com/poprnbhits.mp3");
                music.load();
                handleClick();
            break;
            case "TDI Chill Out":
                document.querySelector("source").setAttribute("src","https://streaming.tdiradio.com/chillout.mp3");
                music.load();
                handleClick();
            break;
            case "TDI Domaćica":
                document.querySelector("source").setAttribute("src","https://streaming.tdiradio.com/domacica.mp3");
                music.load();
                handleClick();
            break;
            case "TDI Yu Euro Dance":
                document.querySelector("source").setAttribute("src","https://streaming.tdiradio.com/yudance.mp3");
                music.load();
                handleClick();
            break;
            case "TDI Classic hits 80' 90'":
                document.querySelector("source").setAttribute("src","https://streaming.tdiradio.com/classics.mp3");
                music.load();
                handleClick();
            break;
            case "TDI Love":
                document.querySelector("source").setAttribute("src","https://streaming.tdiradio.com/love.mp3");
                music.load();
                handleClick();
            break;
            case "TDI Jazz":
                document.querySelector("source").setAttribute("src","https://streaming.tdiradio.com/jazz.mp3");
                music.load();
                handleClick();
            break;
        
        }
        
        
    });

}
















