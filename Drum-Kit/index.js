var buttonsList = document.querySelectorAll(".drum");
var numButtons = buttonsList.length;

const drumSoundsDict = 
{
    "w": "sounds/crash.mp3",
    "a": "sounds/kick-bass.mp3",
    "s": "sounds/snare.mp3",
    "d": "sounds/tom-1.mp3",
    "j": "sounds/tom-2.mp3",
    "k": "sounds/tom-3.mp3",
    "l": "sounds/tom-3.mp3"
};

function stopButtonAnimation(button)
{
    document.querySelector("." + button).classList.remove("pressed");
}

function playButtonAnimation(button)
{
    document.querySelector("." + button).classList.add("pressed");
}

function playDrumSound(event)
{
    soundSrc = "";
    button = "";
    if (event.type == "click")
    {
        soundSrc = drumSoundsDict[event.currentTarget.classList[0]];
        button = event.currentTarget.classList[0]
    }
    else if (event.type == "keydown")
    {
        soundSrc = drumSoundsDict[event.key];
        button = event.key;
    }

    playButtonAnimation(button);
    new Audio(soundSrc).play();
    setTimeout(() => stopButtonAnimation(button), 100);
}

buttonsList.forEach(button => 
{
    button.addEventListener("click", playDrumSound);
});

document.addEventListener("keydown", playDrumSound);