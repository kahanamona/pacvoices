# Copyright (c) 2022, Kahanamona Team and contributors
# For license information, please see license.txt
from __future__ import unicode_literals

import frappe
from frappe import _, scrub
from frappe.website.render import clear_cache
from frappe.model.document import Document

class Topics(Document):

	def on_update(self):
		clear_cache()
