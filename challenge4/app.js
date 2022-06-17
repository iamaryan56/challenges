const element= document.getElementsByClassName("key");

let rdm=Math.floor(Math.random()*element.length); //gives a random number within our range
action=()=>{
//add jiggle class randomly
element[rdm].classList.add("jiggle");
document.addEventListener("keydown",(event)=>{
    const character= element[rdm].getAttribute("data-key");
    const characterPressed= event.key;
    
    if(character===characterPressed || character===characterPressed.toUpperCase()){
        element[rdm].classList.remove("jiggle");
        rdm=Math.floor(Math.random()*element.length);
        action();
    }
})
}
action();

