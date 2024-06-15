const game = ["Rock", "Paper", "Scissors"];
let botchoose;
const player = document.querySelectorAll(".choose");
let randombot;
let playercount = 0, botcount = 0;
let playerlablecount = document.getElementById("you");
let botlablecount = document.getElementById("bot1");

console.log(player);

let flagbot = false; 

player.forEach(element => {
    element.addEventListener("click", event => {
        flagbot = true;
    const playerChoice = event.target.textContent.trim();
        document.getElementById("player").textContent = `: ${playerChoice}`; 
        console.log(playerChoice);
        randchoos(playerChoice);
    });
});

function randchoos(value) {
    if (flagbot) {
        randombot = Math.floor(Math.random() * 3);
        botchoose = game[randombot];
        document.getElementById("BOT").textContent = `: ${botchoose}`; 
        console.log(botchoose);
    }
    console.log(value);

    if (value === botchoose) {
        console.log("Tie!");
    } else if (
        (value === "Rock" && botchoose === "Scissors") ||
        (value === "Scissors" && botchoose === "Paper") ||
        (value === "Paper" && botchoose === "Rock")
    ) {
        playercount++;
        playerlablecount.textContent = playercount; 
    } else {
        botcount++;
        botlablecount.textContent = botcount; 
    }
}