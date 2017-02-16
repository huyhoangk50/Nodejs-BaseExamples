function Vector (){
	this.x = 0;
	this.y = 0;

	this.init = function(mX, mY){
		this.x = mX;
		this.y = mY;
	}

	this.length = function(){
		return Math.sqrt(this.x * this. x + this.y * this.y);
	}
}

var vector = new Vector();
vector.init(4,3);
console.log(vector.length());