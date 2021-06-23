var score, activePlayer,roundScore;

activePlayer=0;
roundScore=0;
score=[0,0];

document.getElementById('score-0').innerHTML='0';
document.getElementById('score-1').innerHTML='0';
document.getElementById('current-0').innerHTML='0';
document.getElementById('current-1').innerHTML='0';


document.querySelector('.dice').style.display='none';

document.querySelector('.btn-roll').addEventListener('click',function(){


//random son olindi 0-6 gaca
var dice;
	dice = Math.floor(Math.random()*6)+1;
	document.querySelector('.dice').style.display = 'block';
	document.querySelector('.dice').src = "dice-"+ dice + ".png";

	if  (dice !==1) {
    roundScore+=dice;
    console.log('test');
    document.getElementById('current-'+ activePlayer).innerHTML=roundScore;
	}
	else {
		
			changeActivePlayer();
		
	}
});
///hold function for adding current scores to global score///

document.querySelector('.btn-hold').addEventListener('click',function(){

score[activePlayer]+=roundScore;
document.getElementById('score-'+activePlayer).innerHTML=score[activePlayer];


			changeActivePlayer();
		
});
//document style display holatida rasm almawiwini berdik
function changeActivePlayer(){
	roundScore=0;
	document.getElementById('current-'+
		activePlayer).innerHTML=0;

	document.querySelector('.player-'+activePlayer+
		'-panel').classList.remove('active');
	if (activePlayer===0) {
		activePlayer=1;
	}
	else{
		activePlayer=0;
	}
	document.querySelector('.player-'+activePlayer+
		'-panel').classList.add('active');
}
























