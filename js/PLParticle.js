var PLParticle = (function(){
	var PLParticle,
	staticVars = "",
	ctx,
	MAX_SPEED = 5;
	
	function exports(context, x, y){
		return new PLParticle(context, x, y);
	};
	
	PLParticle = function(context, x, y){
		ctx = context;
		this.pos = new Vector(x, y);
		var speed = 2;
		this.speed = new Vector(Math.random() * speed - speed/2, Math.random() * speed - speed/2);
		this.accel = new Vector();

		this.size = new Vector(5,5);
		this.colour = [255, 255, 255];
	};
	
	PLParticle.prototype.update = function(){
		var speed = 1;
		this.accel = new Vector(Math.random() * speed - speed/2, Math.random() * speed - speed/2);
		this.speed = this.speed.add(this.accel);
		this.speed.clampMag(MAX_SPEED);
		this.pos = this.pos.add(this.speed);
	};
	
	PLParticle.prototype.draw = function(){
		ctx.fillStyle = "rgb(" + this.colour.join() + ")";

		ctx.save();
		ctx.translate(this.pos.x, this.pos.y);
		ctx.rotate(Math.atan2(this.speed.y, this.speed.x) + Math.PI/2);
		ctx.fillRect(-this.size.x/2, -this.size.x/2, this.size.x, this.size.y * this.speed.mag() );

		ctx.strokeStyle = "#F00";
		ctx.beginPath();
		ctx.moveTo(0,0);
		ctx.lineTo(0,-10);
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
	};
	
	return exports;
}());