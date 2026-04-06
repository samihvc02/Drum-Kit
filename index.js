const soundSet = {
    w:"tom-1",
    a:"tom-2",
    s: "tom-3",
    d: "tom-4",
    j:"snare",
    k:"kick",
    l:"crash"
}

function playSound(sound){
    let audio = new Audio("sounds/"+ sound + ".mp3")
    audio.play()
}

function animation(key){
    document.querySelector("."+ key).classList.add("animation")
    setTimeout(function ()  {
    document.querySelector("."+ key).classList.remove("animation");
    }, 100);

}
document.querySelector(".container").addEventListener("click",(e) => {
    let button = e.target.closest(".drum");
    if (button){
        let key = button.innerHTML.trim();
        animation(key);
        playSound(soundSet[key]);
    }
})

document.addEventListener("keydown", (e) => {
    if (!soundSet[e.key]) return;
    animation(e.key)
    playSound(soundSet[e.key])
})
