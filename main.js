
(function () {

	var canvas = document.getElementById("canvas"),
		context = canvas.getContext('2d'),
        minSize = 10,
        randomState,
        ratio = 0.2,
        char = {
            x: 100,
            y: 100,
            w: 20,
            h: 20,
            vx: 0,
            vy: 0,
            speed: 2,
            friction: 0.98
        },
        keys = []
	
    
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
		var int = setInterval(generatePumpkin,3000);
        addEventListener('keydown', onKeyDown);
        addEventListener('keyup', onKeyUp);
        
        main();
	}
    
    function onKeyDown(e) {
        
       keys[e.keyCode] = true;
    }
    
    function onKeyUp(e) {
        
        keys[e.keyCode] = false;
    }
    
    function main() {
        
        //context.clearRect(0,0,canvas.width,canvas.height);
        window.setTimeout(main,10);
        renderChar();
        moveChar();
    }
    
    function moveChar() {
        
        if (keys[38]) {
            if (char.vy > -char.speed) {
                char.vy -= 1.5;
            }   
        }
        if (keys[40]) {
            if (char.vy < char.speed) {
                char.vy += 1.5;
            }   
        }
          if (keys[39]) {
            if (char.vx < char.speed) {
                char.vx += 1.5;
            }   
        }
        if (keys[37]) {
            if (char.vx > -char.speed) {
                char.vx -= 1.5;
            }   
        }
        
        char.vy *= char.friction;
        char.y += char.vy;
        char.vx *= char.friction;
        char.x += char.vx;
        
    }
	
	function onResizeScreen() {
			
		clearInterval(int);
        init();	 
	}
    
    function renderChar() {

        context.fillStyle = "#f00";
        context.fillRect(char.x,char.y,char.w,char.h); 
    }

	function generatePumpkin() {

		var size = minSize + Math.random() * 100,
            girth = size / 2,
			x = (size + Math.random() * window.innerWidth) - size,
			y = (size + Math.random() * window.innerHeight) - size;
            randomState = Math.floor(Math.random() * 4);

        drawBody(size, x, y);
        drawStem(size, x, y);
        drawEyes(size, x, y);
        drawMouth(size, x, y);
	}
    
    function drawBody(size, x, y) {
        
        context.fillStyle = "#FF9900";
        context.fillRect(x,y,size,size);
        //context.fillRect(x / 1.02, y * 1.05, size * 1.5, size / 1.4);
    }
	
	function drawStem(size, x, y) {
		
		var stemSize = size * ratio;
		context.fillStyle = "#006400";
		context.fillRect(x + (size / 2.5),y - 5,stemSize,stemSize);	
	}
    
	function drawEyes(size, x, y) {

		var eyeSize = size * ratio;
		context.fillStyle = "#000";
        
        if (checkState() === 'normal' || checkState() === 'happy' || checkState() === 'sad') {
            context.fillRect(x + (size / 7.8), y + (size / 4.6),eyeSize, eyeSize);
            context.fillRect(x + (size * 0.7), y + (size / 4.6),eyeSize,eyeSize);
        }
        else if (checkState() === 'dopey') {
            context.fillRect(x + (size / 4.8), y + (size / 3.4),eyeSize, eyeSize);
            context.fillRect(x + (size * 0.55), y + (size / 4.6),eyeSize / 1.2,eyeSize / 1.2);
        }
	}
    
    function drawMouth(size, x, y) {
        
        var ratio = 0.2;
        var mouthHeight = size * ratio;
        context.fillStyle = "#000";
   
        context.fillRect(x + (size / 5), y + (size * 0.7),mouthHeight * 3,mouthHeight);

        if (checkState() === 'dopey') {
            context.fillRect(x + (size / 5), y + (size * 0.60),mouthHeight * 3,mouthHeight);
            context.fillStyle = "#fff";
            context.fillRect(x + (size / 2.8), y + (size * 0.60),mouthHeight,mouthHeight * 1.2);    
        }
        else if (checkState() === 'happy') {
            context.fillRect(x + (size / 8.5), y + (size * 0.6),mouthHeight,mouthHeight);
            context.fillRect(x + (size * 0.7), y + (size * 0.6),mouthHeight,mouthHeight);
        } 
        else if (checkState() === 'sad') {
            context.fillRect(x + (size / 8.5), y + (size * 0.75),mouthHeight,mouthHeight);
            context.fillRect(x + (size * 0.7), y + (size * 0.75),mouthHeight,mouthHeight);
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
