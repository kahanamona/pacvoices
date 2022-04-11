# Copyright (c) 2022, Kahanamona and contributors
# For license information, please see license.txt
from __future__ import unicode_literals

import frappe
from frappe import _
from frappe.website.render import clear_cache
from frappe.utils import today, cint, global_date_format, get_fullname, strip_html_tags, markdown, sanitize_html
from math import ceil
from frappe.model.document import Document

class Topics(Document):
	
	def autoname(self):
		self.name = self.scrub(self.title)

	def on_update(self):
		clear_cache()

	def set_route(self):
		self.path = 'discussion/' + self.name