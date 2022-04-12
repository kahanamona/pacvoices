// Copyright (c) 2022, Kahanamona Team and contributors
// For license information, please see license.txt

frappe.ui.form.on('Discussion', {

	refresh: function(frm) {

		if (frappe.user.has_role("PAC Voices Member")) {
			clear_cache();
			frm.page.sidebar.hide(); // this removes the sidebar
		//	$(".timeline").show()
			
			frm.set_df_property('path', 'hidden', 1)
			frm.page.wrapper.find(".layout-main-section-wrapper").addClass("col-md-10");
					
		}
//		if (frappe.user.has_role("System Manager") || frappe.user.has_role("PAC Voices Admin") || frappe.user.has_role("PAC Voice Supervisor")) {
//			clear_cache();
//			frm.page.sidebar.show(); // this removes the sidebar
//			frm.page.wrapper.find(".layout-main-section-wrapper").clear_cache();
//			frm.page.wrapper.find(".layout-main-section-wrapper").addClass("col-md-10");
//		}

//		if (frappe.user.has_role("PAC Voices Admin") || frappe.user.has_role("System Manager") || frappe.session.user != frm.doc.owner) {
//
//			frm.set_df_property('published', 'hidden', 1)
//			frm.set_df_property('published_date', 'read_only', 1)
//			frm.set_df_property('topic', 'read_only', 1)
//			frm.set_df_property('discussion_content_type', 'read_only', 1)
//			frm.set_df_property('discussion_content', 'read_only', 1)
//		}

	},
	
	title: function(frm) {
		frm.trigger('set_path');
	},

	topic: function(frm) {
		frm.trigger('set_path');
	},
 
});
