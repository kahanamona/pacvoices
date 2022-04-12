// Copyright (c) 2022, Kahanamona and contributors
// For license information, please see license.txt

frappe.ui.form.on('Member', {
	refresh: function(frm) {
		
		if (!in_list(frappe.user_roles, 'System Manager', 'PAC Voices Admin','PAC Voices Supervisor')){
			frm.page.sidebar.hide(); // this removes the sidebar
			$(".form-footer").hide();
			frm.page.wrapper.find(".layout-main-section-wrapper").addClass("col-md-12");
		}

		if (in_list(frappe.user_roles, 'System Manager', 'PAC Voices Admin','PAC Voices Supervisor')){
			frm.page.sidebar.show(); // this removes the sidebar
			$(".form-footer").show();
			frm.page.wrapper.find(".layout-main-section-wrapper").addClass("col-md-10");
		}
	},

	onload: function(frm){

		if ((frappe.session.user !== frm.doc.user) && (!in_list(frappe.user_roles, 'System Manager', 'PAC Voices Admin','PAC Voices Supervisor'))) {

			frm.toggle_enable('user', false)
			frm.toggle_enable('status', false)
			frm.toggle_enable('first_name', false)
			frm.toggle_enable('last_name', false)
			frm.toggle_enable('full_name', false)
			frm.toggle_enable('organisation', false)
			frm.toggle_enable('region', false)
		}
		if ((frappe.session.user === frm.doc.user)){
			frm.toggle_enable('user', true)
			frm.toggle_enable('status', true)
			frm.toggle_enable('first_name', true)
			frm.toggle_enable('last_name', true)
			frm.toggle_enable('full_name', true)
			frm.toggle_enable('organisation', true)
			frm.toggle_enable('region', true)

		}
	}
});
