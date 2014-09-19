var ParticleLights = (function(){
	var ParticleLights,
	canvas, ctx;
	
	function exports(canvasElement){
		return new ParticleLights(canvasElement);
	};
	
	ParticleLights = function(canvasElement){
		canvas = canvasElement;
		ctx = canvas.getContext("2d");

		this.particles = [];

		for (var i = 0; i < 1; i++) {
			this.particles.push(new PLParticle(ctx, canvas.width/2, canvas.height/2));
		};

		run.call(this);
	};
	
	ParticleLights.prototype.update = function(){
		for (var i = 0; i < this.particles.length; i++) {
			this.particles[i].update();
		};
	};
	
	ParticleLights.prototype.draw = function(){
		ctx.fillStyle = "rgba(0,0,0, 1)";
		ctx.fillRect(0,0,canvas.width, canvas.height);

		for (var i = 0; i < this.particles.length; i++) {
			this.particles[i].draw();
		};
	};

	function run(){this.update();this.draw();window.requestAnimationFrame(run.bind(this));}

	window.requestAnimationFrame = window.requestAnimationFrame ||
									window.mozRequestAnimationFrame ||
									window.webkitRequestAnimationFrame ||
									window.msRequestAnimationFrame;
	
	return exports;
}());