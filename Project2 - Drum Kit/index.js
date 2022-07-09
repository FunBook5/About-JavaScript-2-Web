//alert("This is an alert");

var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrums; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", handleClick_playSound);

function handleClick_playSound(){
    var key = this.innerHTML;
    handleClick_or_keydown_playSound(key);
}


document.addEventListener("keypress", handle_Keydown)

function handle_Keydown(event){
    handleClick_or_keydown_playSound(event.key);
}

function handleClick_or_keydown_playSound(key1){ 
    
    switch (key1) {
        case "w":
             var audio1 = new Audio("sounds/crash.mp3");
             audio1.play();            
            break;
        
        case "a":
            var audio1 = new Audio("sounds/kick-bass.mp3");
            audio1.play();            
            break;

        case "s":
            var audio1 = new Audio("sounds/snare.mp3");
            audio1.play();            
            break;
        
        case "d":
            var audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();            
            break;

        case "j":
             var audio1 = new Audio("sounds/tom-2.mp3");
             audio1.play();            
            break;
           
        case "k":
            var audio1 = new Audio("sounds/tom-3.mp3");
            audio1.play();            
            break;
   
        case "l":
            var audio1 = new Audio("sounds/tom-4.mp3");
            audio1.play();            
            break;
    
        default:

           alert("Please press the correct keys");

            break;
    }
}

}



