class Volume{
    constructor(){

        this.audio=document.getElementById("audio");
        this.audio.volume=50/100;
        this.audio.playbackRaet=1;




        this.volaudio=document.getElementById("volumhigdon");
        this.volaudio.addEventListener("change",()=>{
            this.audio.volume=this.volaudio.value/100;
        });


        this.spedaudio=document.getElementById("volspeed");
        this.spedaudio.addEventListener("change",()=>{
            this.audio.playbackRate=this.spedaudio.value/100;
        });
    }
}
class Color{
    constructor(){
        this.color1=document.getElementById("color1");
        this.color1.addEventListener("click",()=>{
            this.changecolor("color1");
        })
        this.color2=document.getElementById("color2");
        this.color2.addEventListener("click",()=>{
            this.changecolor("color2");
        })
        this.color3=document.getElementById("color3");
        this.color3.addEventListener("click",()=>{
            this.changecolor("color3");
        })
        this.color4=document.getElementById("color4");
        this.color4.addEventListener("click",()=>{
            this.changecolor("color4");
        })

        
        if(localStorage.getItem("keepcolor")==null){
            document.body.style.backgroundImage="linear-gradient(to left,rgb(99, 86, 216) , rgb(10, 131, 20))";}
            this.changecolor(localStorage.getItem("keepcolor"));

    }
    changecolor(color){
 if(color=="color1"){
    document.body.style.backgroundImage="linear-gradient(to left,red , black)";
}else if(color=="color2"){
    document.body.style.backgroundImage="linear-gradient(to left,rgb(99, 86, 216) , rgb(10, 131, 20))";

}else if(color=="color3"){
    document.body.style.backgroundImage="linear-gradient(to left,rgb(133, 18, 108) , rgb(141, 119, 119))";


}else if(color=="color4"){
    document.body.style.backgroundImage="linear-gradient(to left,rgb(247, 148, 1) , rgb(231, 80, 10))";

}
localStorage.setItem("keepcolor",color);

    }
}
onload=new Color();
onload=new Volume();
