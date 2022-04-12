# Copyright (c) 2022, Kahanamona Team and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe, json
from frappe.model.document import Document
from frappe import msgprint, _, scrub

class Discussion(Document):

	def validate(self):
		self.validate_dicussion_content()
        

	def validate_dicussion_content(self):
		if not self.discussion_content and not self.discussion_content_md and not self.discussion_content_html:
			msgprint(_("Discussion Content is Manadory").format(self.name), raise_exception=1)
