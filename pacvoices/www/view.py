from __future__ import unicode_literals
import frappe
from frappe.utils import now
from frappe import _

no_cache = 1
no_sitemap = 1

def get_context(context):
#    if frappe.session.user == "Guest" and frappe.session.data.user_type !="System User":
#        frappe.local.flags.redirect_location = "/login"
#        raise frappe.Redirect
 

    context.discussion = frappe.db.sql("select name, title, topic, discussion_content, published_date, owner, status from `tabDiscussion` where published = 1 ORDER BY creation DESC", as_dict=True)
#    context.user_list = frappe.db.sql("select name, email, full_name, user_image from `tabUser`", as_dict=True)
#    context.document_manager = frappe.db.sql("select owner, modified, sub_menu, file_url, file_name, top_menu from `tabFile` where published = 1 and is_private = 0", as_dict=True)
