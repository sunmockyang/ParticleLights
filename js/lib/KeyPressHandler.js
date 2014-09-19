var KeyPressHandler = function(){
	this.keydown = {length: 0};
};

KeyPressHandler.prototype.isAnyKeyDown = function() {
	return this.keydown.length > 0;
};

KeyPressHandler.prototype.isKeyDown = function(keyCode) {
	// console.log(arguments, arguments.length);
	if(arguments.length === 1){
		return this.keydown[keyCode] ? true : false;
	} else {
		for (var i = 0; i < arguments.length; i++) {
			if(this.keydown[arguments[i]]){
				return true;
			}
		};
		return false;
	}
};

KeyPressHandler.prototype.onkeydown = function(e) {
	this.keydown[e.keyCode] = true;
	this.keydown.length++;
};

KeyPressHandler.prototype.onkeyup = function(e) {
	delete this.keydown[e.keyCode];
	this.keydown.length--;
};

