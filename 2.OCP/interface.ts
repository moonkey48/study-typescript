{
 /**
  * OCP 적용 예: Interface 
  * */   

 interface playAlgorithm {
    ext: string
    play: ()=>void
 }

 class Wav implements playAlgorithm {
    ext: string;
    constructor(){
        this.ext = '.wav';
    }

    //@Overriding
    play():void{
        console.log(`play ${this.ext} file`);
    }
 }

 class FLAC implements playAlgorithm {
    ext: string;
    constructor(){
        this.ext = '.flac';
    }

    //@Overriging
    play():void{
        console.log(`play ${this.ext} file`)
    }
 }

 class SoundPlayer {
    private file: playAlgorithm;
    constructor(newFile:playAlgorithm){
        this.file = newFile;
    }

    setFile(file:playAlgorithm){
        this.file = file;
    }

    play():void{
        this.file.play();
    }
 }

 const wavPlayer = new SoundPlayer(new Wav());
 wavPlayer.play();

 const flacPlayer = new SoundPlayer(new FLAC());
 flacPlayer.play();
 
}