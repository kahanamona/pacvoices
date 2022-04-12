// Copyright (c) 2022, Kahanamona Team and contributors
// For license information, please see license.txt

frappe.ui.form.on('Discussion', {

	onload: function(frm){

		if (!frm.is_new()) {
			let is_allowed = frappe.user_roles.includes('System Manager','PAC Voices Admin','PAC Voice Supervisor');
			frm.toggle_enable(['status', 'priority'], is_allowed)
			frm.toggle_enable(['topic', 'priority'], is_allowed)
			frm.toggle_enable(['published_date', 'priority'], is_allowed)
			frm.toggle_enable(['discussion_content_type', 'priority'], is_allowed)
		}

		if ((frappe.session.user != frm.doc.owner) && (!in_list(frappe.user_roles, 'System Manager', 'PAC Voices Admin','PAC Voices Supervisor'))) {
			frm.toggle_enable('status', false)
			frm.toggle_enable('topic', false)
			frm.toggle_enable('published_date', false)
			frm.toggle_enable('discussion_content_type', false)
			frm.toggle_enable('discussion_content', false)
		}

		if ((frappe.session.user === frm.doc.owner)){
			frm.toggle_enable('topic', true)
		}
	},


	refresh: function(frm) {

		

		if (!in_list(frappe.user_roles, 'System Manager', 'PAC Voices Admin','PAC Voices Supervisor')){
			frm.page.sidebar.hide(); // this removes the sidebar
		//	$(".form-footer").hide();
			frm.page.wrapper.find(".layout-main-section-wrapper").addClass("col-md-12");
		}

		if (in_list(frappe.user_roles, 'System Manager', 'PAC Voices Admin','PAC Voices Supervisor')){
			frm.page.sidebar.show(); // this removes the sidebar
		//	$(".form-footer").show();
			frm.page.wrapper.find(".layout-main-section-wrapper").addClass("col-md-10");
		}
	},
 
});
