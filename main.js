
(function () {

	var canvas = document.getElementById("canvas"),
		context = canvas.getContext('2d');
	

	init();
	
	function init() {
		
		var gameTitle = "PUMPKIN GAME";
		
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;	
		
		context.fillStyle = "#FF9900";
		context.font = "30px Verdana";
		
		context.fillText(gameTitle,canvas.width / 2.6,40);
		
		addEventListener("resize",onResizeScreen);
		setInterval(generatePumpkin,3000);
	}
	
	function onResizeScreen() {
			
		init();	
	}
	
	function Pumpkin(diameter, expression) {
		
		this.diameter = diameter || 30;
		this.expression = expression || "clueless";
	}
	
	function generatePumpkin() {
		var random = 10 + Math.random() * 100,
			pumpkinClone = new Pumpkin(random),
			x = (Math.random() * window.innerWidth) - random,
			y = (Math.random() * window.innerHeight) - random;
        
            drawBody(random, x, y);
			drawStem(random, x, y);
			drawEyes(random, x, y);
            drawMouth(random, x, y);
	}
    
    function drawBody(random, x, y) {
        context.fillStyle = "#FF9900";
        context.fillRect(x,y,random,random);
    }
	
	function drawStem(random, x, y) {
		var ratio = 0.2;
		var stemSize = random * ratio;
		context.fillStyle = "#006400";
		context.fillRect(x + (random / 2.5),y - 5,stemSize,stemSize);	
	}
	function drawEyes(random, x, y) {
		var ratio = 0.2;
		var eyeSize = random * ratio;
		context.fillStyle = "#000";
		context.fillRect(x + (random / 7.8), y + (random / 4.6),eyeSize, eyeSize);
		context.fillRect(x + (random * 0.7), y + (random / 4.6),eyeSize,eyeSize);
	}
    function drawMouth(random, x, y) {
        var ratio = 0.2;
        var mouthHeight = random * ratio;
        context.fillStyle = "#000";
        context.fillRect(x + (random / 5), y + (random * 0.7),mouthHeight * 3,mouthHeight);
    }


})();
