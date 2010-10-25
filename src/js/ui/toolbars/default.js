elRTE.prototype.ui.toolbars.default = function(rte) {
	
	var o  = rte.options,
		tb = rte.options.toolbar,
		ui = $('<div class="elrte-toolbar"/>'),
		pl = o.toolbars[tb] || o.toolbars['default'],
		l  = pl.length,
		pc = 'elrte-toolbar-panel',
		pn, pui, cmds, cl, cmd, btn; 
	
	
	while (l--) {
		pn   = pl[l];
		pui  = $('<ul class="'+pc+' '+pc+'-'+pn+'"/>');
		cmds = o.panels[pn]||[];
		cl   = cmds.length;
		while (cl--) {
			if ((cmd = rte._commands[cmds[cl]])) {
				btn = rte.ui['button'+cmd.conf.ui]||rte.ui.button;
				btn = new btn(cmd)
				pui.prepend(btn.ui);
			}
		}
		pui.children().length && ui.prepend(pui);
	}
	
	return ui.children().length ? ui : '';
}
