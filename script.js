console.log("welcome to spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));






let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Choo Lo [The Local Train]", filePath: "2.mp3", coverPath: "2.jpeg"},
    {songName: "Dandelions [By Ruth B.]", filePath: "3.mp3", coverPath: "3.jpeg"},
    {songName: "Falling [By Trevor Daniel]", filePath: "4.mp3", coverPath: "4.jpeg"},
    {songName: "Humsafar [ By Akhil Sachdeva,Mansheel Gujral]", filePath: "5.mp3", coverPath: "5.jpeg"},
    {songName: "Let Me Down Slowly", filePath: "6.mp3", coverPath: "6.jpeg"},
    {songName: "Mast Magan - Arijit Singh,Chinmayi", filePath: "7.mp3", coverPath: "7.jpeg"},
    {songName: "tere bina - Zaeden", filePath: "8.mp3", coverPath: "8.jpeg"},
    {songName: "Unholy (feat.Kim Petras) [By Sam Smith]", filePath: "9.mp3", coverPath: "9.jpeg"},
    {songName: "Chaleya (From 'Jawan' )", filePath: "10.mp3", coverPath: "10.jpeg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})





//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')

   //updateSeekbar
   progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   console.log(progress);
   myProgressBar.value = progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex+0}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
   })

})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=10){
        songIndex = 1
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `${songIndex+0}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex = 1
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


