// Copyright (c) 2022, Kahanamona Team and contributors
// For license information, please see license.txt

frappe.ui.form.on('Discussion', {

	onload: function(frm){
		let is_allowed = frappe.user_roles.includes('System Manager','PAC Voices Admin','PAC Voice Supervisor');
		frm.toggle_enable(['status', 'priority'], is_allowed)
		frm.toggle_enable(['topic', 'priority'], is_allowed)
		frm.toggle_enable(['published_date', 'priority'], is_allowed)
		frm.toggle_enable(['discussion_content_type', 'priority'], is_allowed)
	},

	refresh: function(frm) {

		if (frappe.user.has_role("PAC Voices Member")) {
			
			frm.page.sidebar.hide(); // this removes the sidebar
		//	$(".timeline").show()
			
			frm.set_df_property('path', 'hidden', 1)
			frm.page.wrapper.find(".layout-main-section-wrapper").addClass("col-md-10");
					
		}
	},
 
});
