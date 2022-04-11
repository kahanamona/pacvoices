# Copyright (c) 2022, Kahanamona and contributors
# For license information, please see license.txt

from __future__ import unicode_literals

import frappe
from frappe import _
from frappe.model.document import Document

class Discussion(Document):
#	pass

	@frappe.whitelist()
	def create_path(self):
		if not self.path:
			return frappe.db.get_value('Topics', self.topic,
				'path') + '/' + frappe.scrub(self.title)
