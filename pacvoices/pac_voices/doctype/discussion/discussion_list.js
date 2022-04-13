// Copyright (c) 2022, Kahanamona Team and contributors
// For license information, please see license.txt

frappe.listview_settings['Discussion'] = {
    hide_name_column: true,
    add_fields: ["status", "title"],

	get_indicator: function(doc) {
		if (doc.status) {
			var indicator = [__(doc.status), frappe.utils.guess_colour(doc.status), "status,=," + doc.status];
			indicator[1] = {
				"Open": "orange",
				"Implemented": "green",
				"Pending": "red",
				"Close" : "blue"
			}[doc.status];
			return indicator;
		}
	},
    refresh: function(frm) {
		
	//	if (!in_list(frappe.user_roles, 'System Manager', 'PAC Voices Admin','PAC Voices Supervisor')){
	//		frm.page.sidebar.hide(); // this removes the sidebar
	//		$(".form-footer").hide();
	//		frm.page.wrapper.find(".layout-main-section-wrapper").addClass("col-md-12");
	//	}

	//	if (in_list(frappe.user_roles, 'System Manager', 'PAC Voices Admin','PAC Voices Supervisor')){
	//		frm.page.sidebar.show(); // this removes the sidebar
	//		$(".form-footer").show();
	//		frm.page.wrapper.find(".layout-main-section-wrapper").addClass("col-md-10");
	//	}
	},

}

