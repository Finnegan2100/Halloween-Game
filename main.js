
(function () {

	var canvas = document.getElementById("canvas"),
		context = canvas.getContext('2d');
	

	init();
	
	function init() {
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
		var random = 10 + Math.random() * 50,
			pumpkinClone = new Pumpkin(random),
			x = (Math.random() * window.innerWidth) - random,
			y = (Math.random() * window.innerHeight) - random;
			drawStem(random, x, y);
		context.fillStyle = "#FF9900";
		return context.fillRect(x,y,random,random);
	}
	
	function drawStem(random,x,y) {
			var ratio = 0.2;
			var stemSize = random * ratio;
			context.fillStyle = "#006400";
			context.fillRect(x + (random / 2.5),y - 5,stemSize,stemSize);	
		}

})();
