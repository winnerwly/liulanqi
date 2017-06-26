function ColorBall(options) {
	this.init(options);
}

ColorBall.prototype = {
	_x: 0,
	_y: 0,
	_r: 60,
	_parent: null,
	_el: null,
	colors: ["red","green","yellow","blue","block","gray","organ","purple"],
	init: function(options) {
		this._x = options.x;
		this._y = options.y;
		this._parent = options.parent;

		this.render();
	},
	render: function() {
		var el = document.createElement("div");

		el.style.width = this._r + "px";
		el.style.height = this._r + "px";
		el.style.borderRadius = "50%";

		var randInt = getRandom(this.colors.length);
		el.style.background = this.colors[randInt];
		
		el.style.position = "absolute";
		el.style.left = this._x + "px";
		el.style.top = this._y + "px";
		
		this._el = el;			
		this._parent.appendChild(this._el);
	},
	animate: function() {
		this._x = this._x + getRandom(-5,5);
		this._y = this._y + getRandom(-5,5);
		this._r = this._r - getRandom(1,2);

		this._el.style.left = this._x + "px";		
		this._el.style.top = this._y + "px";
		this._el.style.width = this._r + "px";
		this._el.style.height = this._r + "px";
		
		if (this._r <= 0) {
			this._parent.removeChild(this._el);
		}
	}
};