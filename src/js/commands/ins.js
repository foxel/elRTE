(function($) {

	/**
	 * @class Create/remove ins tag 
	 * @author Dmitry (dio) Levashov, dio@std42.ru
	 **/
	elRTE.prototype.commands.ins = function() {
		this.title     = 'Insertion';
		this.node      = 'ins'
		this.regExp    = /^INS$/;
		this.test      = $.proxy(this.rte.mixins.textElement.test, this);
		this.unwrap    = $.proxy(this.rte.mixins.textElement.unwrap, this);
		this.wrap      = $.proxy(this.rte.mixins.textElement.wrap, this);
		this._exec     = $.proxy(this.rte.mixins.textElement.exec, this);
		this._getState = $.proxy(this.rte.mixins.textElement.state, this);
	}

})(jQuery);