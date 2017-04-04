function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255);
  
  strokeWeight(0.5);
	for(var b = 0; b <=200; b += 20) {
	line(b,0,b,400);	// vertical lines
	}
	
	for(var c = 0; c<= 400; c += 20) {
		line(200,c,400,c); // horizontal lines
	}
	
  
	for(var a = 0; a <= 200; a += 20) {
		
  line(a,0,0,a); // upper left coner
  line(200,a,a,200); // upper left center
		
	line(400-a,200,200,400-a); // lower right center
	line(400,400-a,400-a,400); // lower right coner
		
	line(200,a,400-a,200); // upper right center
	line(200+a,0,400,200-a); // upper right corner
		
  line(200,400-a,a,200); // lower left center
	line(200-a,400,0,200+a); // lower left corner
		
 }
}
