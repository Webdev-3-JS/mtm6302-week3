// MTM6302 — Week 3: Adopt a Tiny Monster
// Write one checkpoint at a time. Save and refresh to see your changes.

// 1. Change document.title.
document.title = "My crazy monster adoption";
console.log(document.title);
// 2. Select the name and mood. Change their textContent.
const monsterName = document.getElementById("monster-name");
const moodText = document.querySelector("#monster-mood")
const energyText = document.querySelector("#monster-energy");
const mosnterImage = document.querySelector("#monster-image");
const monsterCard = document.querySelector("#monster-card");
const messageText = document.querySelector("#monster-message");
const certificate = document.querySelector("#certificate");
const certificateName = document.querySelector("#certificate-name");

// 3. Explore the snack list using children, firstElementChild,
//    and nextElementSibling. Inspect querySelectorAll() in the console.
const snackList = document.querySelector("#snack-list");
const firstSnack = snackList.firstElementChild;
const secondSnack = firstSnack.nextElementSibling;
const thirdSnack = secondSnack.nextElementSibling;
firstSnack.textContent = "CHEESE";
secondSnack.textContent = "Potato";
thirdSnack.textContent = "Steak";

console.log(snackList.children);
console.log(document.querySelector(".snack"));
console.log(document.querySelectorAll(".snack"));

monsterName.textContent = "Tuja";
moodText.textContent = "A bit grumpy";

// 4. Read/change image attributes, reveal the certificate,
//    and experiment with classList.add(), remove(), and toggle().
console.log(mosnterImage.getAttribute("src"))
mosnterImage.setAttribute("src", "assets/happy.svg")
mosnterImage.setAttribute("alt", "A happy green monster")
console.log(monsterCard.classList)
monsterCard.classList.add("is-happy")
monsterCard.classList.remove("is-happy")
monsterCard.classList.toggle("party-mode")

certificate.removeAttribute("hidden")
certificateName.textContent = monsterName.textContent

// 5. Use an energy number and if / else if / else to choose a mood.
let energy = 20
energyText.textContent = energy
function getMood(energy){
    if(energy < 30){
        return "Eepy";
    }
    else if(energy >= 30 && energy < 70){
        return "Wants to eat you";
    }
    else{
        return "CoMpLeTeLy InSaNe";
    }
}

function feedMonster(amount){
    energy = energy + amount;
    if(energy > 100){
        energy = 100
    }
    if (energy < 0){
        energy = 0
    }
    updateMonster()
    getMood(energy)
}

function updateMonster(){
    const mood = getMood(energy)
    moodText.textContent = mood
    energyText.textContent = energy
    monsterCard.classList.remove("is-sleepy", "is-hungry", "is-happy")
    if (energy < 30){
        monsterCard.classList.add("is-sleepy")
        mosnterImage.setAttribute("src", "assets/sleepy.svg")
        mosnterImage.setAttribute("alt", "a sleepy green monster with eyes closed")
        messageText.textContent = "Currently passed out, food might wake him up tho"
    }
    else if (energy >= 30 && energy < 70){
        monsterCard.classList.add("is-hungry")
        mosnterImage.setAttribute("src", "assets/hungry.svg")
        mosnterImage.setAttribute("alt", "an alert green monster with his mouth wide open")
        messageText.textContent = "He's very HANGRY"
    }
    else{
        monsterCard.classList.add("is-happy")
        mosnterImage.setAttribute("src", "assets/happy.svg")
        mosnterImage.setAttribute("alt", "a smiley green monster")
        messageText.textContent = "Enough energy to kill all humans"
    }
}
function playMonster(amount){
    energy -= amount;
    if(energy > 100){
        energy = 100
        console.log("Energy is already at MAXIMUM")
    }
    if (energy < 0){
        energy = 0
        console.log("Energy is already at minimum")
    }
    updateMonster()
}
function renameMonster(name){
    monsterName.textContent = name
    certificateName.textContent = name
    document.title += " - " + name
}
function toggleParty(){
    monsterCard.classList.toggle("party-mode")
}
function resetMonster(){
    energy = 20
    renameMonster("Mochi")
    monsterCard.classList.remove("party-mode")
    updateMonster()
}
resetMonster()
// 6. Put display updates in updateMonster(). Add feedMonster(amount).

// 7. Extract getMood(energy), which returns a string.

// 8. Add your own messages. Test energy values 0, 29, 30, 69, 70, 100.
