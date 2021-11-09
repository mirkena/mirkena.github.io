(function(){
	var blankPosition = [3, 3];
	var startTime;
	var countMoves = 0;
	var countTime = 0;
	var stopTimer;
	var isPlaying = false;
	var sideLength;

	$(initialize);

	function initialize(){
		eightToFour();
		var cdbutton = document.getElementById("shufflebutton");
		cdbutton.onclick = shuffle;
		cdbutton = document.getElementById("16");
		cdbutton.onclick = eightToFour;
		cdbutton = document.getElementById("64");
		cdbutton.onclick = fourToEight;

		

	}
	function eightToFour(){
		sideLength = 4;
		clear();
		clearDisplay();
		createPuzzle();
		document.getElementById("16").disabled = true;
		document.getElementById("64").disabled = false;
	}
	function fourToEight(){
		sideLength = 8;
		clear();
		clearDisplay();
		createPuzzle();
		document.getElementById("16").disabled = false;
		document.getElementById("64").disabled = true;
	}
	function createPuzzle(){
		document.getElementById("puzzlearea").innerHTML = "";
		for(var i = 0; i <sideLength; i++){
			for(var j = 0; j < sideLength; j++){
				var div = document.createElement("div");
				var position = i + " " + j;
				div.id = position;
				div.style.float = "left";
				div.style.border = "black 1px solid";
				if(i === sideLength - 1 && j === sideLength - 1){
					toBlank(div);
					//div.style.fontSize = "20pt";
					//div.style.fontWeight = "bold";
				}
				else{
					toPuzzle(div, sideLength * i + j +1);
					//div.style.fontSize = "20pt";
					//div.style.fontWeight = "bold";
					
				}
				document.getElementById("puzzlearea").appendChild(div);
				div.onclick = function(){
					if(isPlaying)
						moveFunction(this, false);
				};
				div.onmouseenter = function(){
					console.log("mouseover");
				};
				div.onmouseout = changeBorderColor;
				
			}
		}
	}
	function shuffle(){
		if(isPlaying){
			clear();
		}
		clearDisplay();
		var delta = [[-1,0],[1,0],[0,-1],[0,1]];
		for(var i = 0; i < 1; i++){
			var canMove = [];
			for (var j=0; j<4; j++){
				var p = [blankPosition[0] + delta[j][0], blankPosition[1] + delta[j][1]];
				if(inGrid(p)){
					canMove.push(p);
				}
			}
			var random = Math.floor((Math.random() * canMove.length));
			moveFunction(document.getElementById(pos2id(canMove[random])), true);
		}
		startTime = new Date().getTime();
		stopTimer = setInterval(displayTime, 1000);
		isPlaying = true;
	}
	function inGrid(pos){
		return (pos[0]< sideLength && pos[0] >= 0 && pos[1] < sideLength && pos[1] >= 0);
	}
	function moveFunction(div, isShuffling){
		var location = id2pos(div.id);
		if(moveable(location)){
			var _id = pos2id(blankPosition);
			toPuzzle(document.getElementById(_id),div.innerHTML);
			toBlank(div);
			blankPosition = location;
			if(!isShuffling){
				countMoves += 1;
				document.getElementById("outputMove").innerHTML = "Moves: " + countMoves;
			}
			if(!isShuffling && isCorrect()){
				var endTime = new Date().getTime();
				var seconds = (endTime - startTime) / 1000;
				alert("You win in " + seconds + "seconds and " + countMoves + " moves!");
				clear();
			}
		}
	}
	function clear(){
		countMoves = 0;
		clearInterval(stopTimer);
		countTime = 0;
		isPlaying = false;
	}
	function clearDisplay(){
		document.getElementById("outputMove").innerHTML = "Moves: " + countMoves;
		document.getElementById("outputTime").innerHTML = "Seconds: " + countTime;
	}
	function moveable(pos){
		return (Math.abs(pos[0] - blankPosition[0]) + Math.abs(pos[1] - blankPosition[1]) === 1);

	}
	function id2pos(id){
		var location = id.split(" ");
		location = [parseInt(location[0]), parseInt(location[1])];
		return location;
	}
	function pos2id(pos){
		return pos[0] + " " + pos[1];
	}
	function changeBorderColor(){
		if(this.style.borderColor === "black"){
		}
	}
	function toBlank(div){
		var blockSize = 400 / sideLength;
		div.style.width = blockSize + "px";
		div.style.height = blockSize + "px";
		div.style.backgroundImage = "";
		div.style.borderWidth = "0px";
		div.innerHTML = "";
	}
	function toPuzzle(div, content){
		var blockSize = 400 / sideLength;
		div.style.width = blockSize - 6 + "px";
		div.style.height = blockSize - 6 + "px";
		div.style.borderWidth = "3px";
		div.innerHTML = content;
		div.style.backgroundImage = "url('background.png')";
		var xpos = Math.floor((content-1) % sideLength) * -blockSize;
		var ypos = Math.floor((content-1) / sideLength) * -blockSize;
		div.style.backgroundPosition = xpos + "px " + ypos + "px";

	}

	function isCorrect(){
		var count = 1;
		for(var i = 0; i < sideLength; i++){
			for(var j = 0; j < sideLength; j++){
				var id = pos2id([i, j]);
				if( i === sideLength - 1 && j === sideLength - 1){
					return true;
				}
				if(parseInt(document.getElementById(id).innerHTML) !== count){
					return false;
				}
				count += 1;	
			}
		}
		return true;
	}
	function displayTime(){
		countTime += 1;
		document.getElementById("outputTime").innerHTML = "Seconds: " + countTime;
	}
})();