var health = 100;
var gunshot = new Audio("gunshot.mp3");
var enemyGunshot = new Audio("ak47.mp3");
var enemydead = new Audio("enemy-dead.mp3");
function updateHealth(points) {

	health = points;
	var healthBar = document.querySelector("#healthBar");
	healthBar.style.width = points + "%";

	if(health <= 0) {
		alert("Game over!");
		window.location.reload();
	}

}


function Enemies() {
	return document.querySelectorAll(".enemy:not(.dead)");
}


function Shoot(enemy) {
    gunshot.play();
	enemy.classList.add("dead");
    enemydead.play();
	if(!Enemies().length) {
		alert("You win!");
		window.location.reload();
	}

}

function hostageappear(hostage){
    if(health > 0) {

		enemy.classList.add("showing");
        setTimeout(()=> {
			enemy.classList.remove("showing");
		}, 3000);
    }

}

function enemyAttacks(enemy) {

	if(health > 0) {

		enemy.classList.add("showing");

		setTimeout(()=> {
			enemyShoots(enemy);
		}, 1000);

		setTimeout(()=> {
			enemy.classList.remove("showing");
		}, 3000);
		
	}


}


function enemyShoots(enemy) {

	if(!enemy.classList.contains("dead")) {

		enemy.classList.add("shooting");
        enemyGunshot.play();
		updateHealth(health - 25);

		setTimeout(()=> {
			enemy.classList.remove("shooting");
		}, 200);

	}

}


function randomEnemyAttacks() {

	var randomEnemyNo = Math.random() * Enemies().length;
	randomEnemyNo = Math.floor(randomEnemyNo);
	var enemy = Enemies()[randomEnemyNo];

	var randomDelay = Math.random() * 2000 + 1000;

	setTimeout( ()=> {
		enemyAttacks(enemy);
		randomEnemyAttacks();
	}, randomDelay);

}