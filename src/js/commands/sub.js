/**
 * @class Set/unset Subscript text
 * @author Dmitry (dio) Levashov, dio@std42.ru
 **/
elRTE.prototype.commands.sub = function() {
	this.title     = 'Subscript';
	this.node      = 'sub';
	this.regExp    = /^SUB$/;
	this.cssProp   = 'vertical-align';
	this.cssVal    = 'sub';
	this.test      = $.proxy(this.rte.mixins.textElement.test, this);
	this.unwrap    = $.proxy(this.rte.mixins.textElement.unwrap, this);
	this.wrap      = $.proxy(this.rte.mixins.textElement.wrap, this);
	this._exec     = $.proxy(this.rte.mixins.textElement.exec, this);
	this._onInit   = $.proxy(this.rte.mixins.textElement.init, this);
	this._getState = $.proxy(this.rte.mixins.textElement.state, this);
}