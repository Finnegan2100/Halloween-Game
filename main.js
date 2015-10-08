
(function () {

	var canvas = document.getElementById("canvas"),
		context = canvas.getContext('2d'),
        minSize = 10,
        randomState,
        ratio = 0.2;
	
    
	init();
	
	function init() {
		
        var states = ['happy','dopey','sad','normal'],
		    gameTitle = "PUMPKIN GAME";
		
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;	
		
		context.fillStyle = "#FF9900";
		context.font = "30px Verdana";
		
		context.fillText(gameTitle,canvas.width / 2.6,40);
		
		addEventListener("resize",onResizeScreen);
		var int = setInterval(generatePumpkin,1000);
	}
	
	function onResizeScreen() {
			
		clearInterval(int);
        init();	
        
	}

	function generatePumpkin() {

		var random = minSize + Math.random() * 100,
			x = (random + Math.random() * window.innerWidth) - random,
			y = (random + Math.random() * window.innerHeight) - random;
            randomState = Math.floor(Math.random() * 4);

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
		
		var stemSize = random * ratio;
		context.fillStyle = "#006400";
		context.fillRect(x + (random / 2.5),y - 5,stemSize,stemSize);	
	}
	function drawEyes(random, x, y) {

		var eyeSize = random * ratio;
		context.fillStyle = "#000";
        
        if (checkState() === 'normal' || checkState() === 'happy' || checkState() === 'sad') {
		//ORIGINAL VALUE
        context.fillRect(x + (random / 7.8), y + (random / 4.6),eyeSize, eyeSize);
        context.fillRect(x + (random * 0.7), y + (random / 4.6),eyeSize,eyeSize);
        }
        else if (checkState() === 'dopey') {
        //DOPEY EYES
        context.fillRect(x + (random / 4.8), y + (random / 3.4),eyeSize, eyeSize);
		context.fillRect(x + (random * 0.55), y + (random / 4.6),eyeSize / 1.2,eyeSize / 1.2);
        }
	}
    function drawMouth(random, x, y) {
        
        var ratio = 0.2;
        var mouthHeight = random * ratio;
        context.fillStyle = "#000";
        
        //if (checkState() === 'normal') {
        //ORIGINAL VALUE
        context.fillRect(x + (random / 5), y + (random * 0.7),mouthHeight * 3,mouthHeight);
        //}
        if (checkState() === 'dopey') {
        context.fillRect(x + (random / 5), y + (random * 0.60),mouthHeight * 3,mouthHeight);
        //DOPEY
        context.fillStyle = "#fff";
        context.fillRect(x + (random / 2.8), y + (random * 0.60),mouthHeight,mouthHeight * 1.2);    
        }
        else if (checkState() === 'happy') {
        // ADD SMILES
        context.fillRect(x + (random / 8.5), y + (random * 0.6),mouthHeight,mouthHeight);
        context.fillRect(x + (random * 0.7), y + (random * 0.6),mouthHeight,mouthHeight);
        } 
        else if (checkState() === 'sad') {
        // ADD FROWNS
        context.fillRect(x + (random / 8.5), y + (random * 0.75),mouthHeight,mouthHeight);
        context.fillRect(x + (random * 0.7), y + (random * 0.75),mouthHeight,mouthHeight);
        }
        
    }
    
    function checkState() {
        
        switch(randomState) {
                
            case 0:
            return 'normal';
            break;
                
            case 1:
            return 'dopey';
            break;
                
            case 2:
            return 'happy';
            break;
            
            case 3:
            return 'sad';
            break;
        }
    }

})();
