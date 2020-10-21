class Player{
    constructor(){
        var main1=document.getElementById("main1");
        main1.style.height=screen.height+"px";
        if(screen.width<620){
            main1.style.width=screen.width+"px"
        }
        var divmain=document.getElementById("content");
        divmain.style.height=screen.height-300+"px";
    }
}
class Audio{
    constructor(){
        this.audio=document.getElementById("audio");
        this.title_audio=document.getElementById("title_audio");
        this.isplay;
        this.play_pause_button=document.getElementById("play_pause");
        this.play_pause_button.addEventListener("click",()=>{
            this.play_pause();
            
        })
        

        this.titleaudio=[],
        this.titleaudio[0]="فيوز اف ام ";
        this.titleaudio[1]="  الاذاعة اللبنانية الدولية";
        this.titleaudio[2]="شام اف ام";
        this.titleaudio[3]="فيروز";
        this.titleaudio[4]="نجوم اف ام";
        this.titleaudio[5]="اذاعة دبي للقران الكريم  ";
        this.titleaudio[6]="club fm";
        this.titleaudio[7]="اذاعة الأولى";
        this.titleaudio[8]="سوا الخليج";



        this.urlmusic=[];
        this.urlmusic[0]="http://192.99.17.12:4986/;stream.mp3";
        this.urlmusic[1]="http://andromeda.shoutca.st:8192/;stream.mp3";
        this.urlmusic[2]="http://radioshamfm.grtvstream.com:8400/;stream.ecsi  ";
        this.urlmusic[3]="fir.mp3";
        this.urlmusic[4]="https://reach-audio.esteam.rocks/radio/8000/live.mp3?1603275812";
        this.urlmusic[5]="http://uk5.internet-radio.com:8079/;stream.mp3";
        this.urlmusic[6]="http://playerservices.streamtheworld.com/api/livestream-redirect/CLUBFMUAE.mp3";
        this.urlmusic[7]="http://uk6.internet-radio.com:8103/;stream.mp3";
        this.urlmusic[8]="http://mbn-channel-01.akacast.akamaistream.net/7/29/233450/v1/ibb.akacast.akamaistream.net/mbn_channel_01";

        this.server=0;
        this.setresours();
        
        document.getElementById("next_mus").addEventListener("click",()=>{
            if(this.server<this.urlmusic.length-1){
                ++this.server;
                this.isplay=false;
            }else{
                this.server=0
            }
            localStorage.setItem("save",this.server);
            this.setresours();
        })
        document.getElementById("back_mus").addEventListener("click",()=>{
            if(this.server>0){
                --this.server;
                  this.isplay=false;
            }else{
                this.server=this.urlmusic.length-1
            }
            localStorage.setItem("save",this.server);
            this.setresours(); 


        })
    }
    setresours(){
        if(localStorage.getItem("save")!=null){
            this.server=localStorage.getItem("save");
        }
        this.audio.src=this.urlmusic[this.server];
        this.title_audio.innerHTML=this.titleaudio[this.server];
        this.play_pause();
    }
    play_pause(){
        if(this.isplay==false){
            this.audio.play();
            this.play_pause_button.src="image/stop.jpg";
            this.isplay=true
        }else{
            this.play_pause_button.src="image/play.jpg";
            this.audio.pause();
            this.isplay=false;
        }
    }
   
}
onload=new Player();
onload=new Audio();
