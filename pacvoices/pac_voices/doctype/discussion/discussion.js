// Copyright (c) 2022, Kahanamona Team and contributors
// For license information, please see license.txt

frappe.ui.form.on('Discussion', {

	refresh: function(frm) {

	},
	
	title: function(frm) {
		frm.trigger('set_path');
	},

	topic: function(frm) {
		frm.trigger('set_path');
	},

	set_path(frm) {
		if (frm.doc.path) return;
		if (frm.doc.title && frm.doc.topic) {
			frm.call('create_path').then(r => {
				frm.set_value('path', r.message);
			});
		}
	}
});
