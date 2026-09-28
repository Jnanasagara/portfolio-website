"""Regenerate the standard Frappe DocType JSON checked into this app."""
import json
from pathlib import Path

ROOT = Path(__file__).parent / "portfolio_content" / "portfolio_content" / "doctype"

def field(name, label, kind="Data", **options):
    return {"fieldname": name, "label": label, "fieldtype": kind, **options}

MODELS = {
    "Portfolio Project": [
        field("title", "Title", reqd=1, in_list_view=1),
        field("slug", "Slug", reqd=1, unique=1),
        field("short_description", "Short Description", "Small Text", reqd=1),
        field("description", "Description", "Long Text"),
        field("year", "Year"), field("status", "Status"),
        field("technologies", "Technologies", "Small Text"),
        field("github_url", "GitHub URL"), field("live_url", "Live URL"),
        field("featured", "Featured", "Check", default="0"),
        field("display_order", "Display Order", "Int", default="0", in_list_view=1),
        field("preview_image", "Preview Image", "Attach Image"),
    ],
    "Portfolio Experience": [
        field("company", "Company", reqd=1, in_list_view=1),
        field("role", "Role", reqd=1), field("location", "Location"),
        field("start_date", "Start Date", "Date"), field("end_date", "End Date", "Date"),
        field("description", "Description", "Small Text", reqd=1),
        field("achievements", "Achievements", "Small Text"),
        field("technologies", "Technologies", "Small Text"),
        field("display_order", "Display Order", "Int", default="0", in_list_view=1),
    ],
    "Portfolio Writing": [
        field("title", "Title", reqd=1, in_list_view=1),
        field("slug", "Slug", reqd=1, unique=1),
        field("excerpt", "Excerpt", "Small Text", reqd=1),
        field("content", "Content", "Long Text", reqd=1),
        field("published_date", "Published Date", "Date"),
        field("tags", "Tags", "Small Text"),
        field("published", "Published", "Check", default="0", in_list_view=1),
        field("display_order", "Display Order", "Int", default="0", in_list_view=1),
    ],
    "Portfolio Skill": [
        field("skill_name", "Name", reqd=1, in_list_view=1),
        field("category", "Category", reqd=1, in_list_view=1),
        field("display_order", "Display Order", "Int", default="0", in_list_view=1),
    ],
}

for title, fields in MODELS.items():
    slug = title.lower().replace(" ", "_")
    folder = ROOT / slug
    folder.mkdir(parents=True, exist_ok=True)
    (folder / "__init__.py").write_text("", encoding="utf-8")
    class_name = title.replace(" ", "")
    (folder / f"{slug}.py").write_text(
        f"from frappe.model.document import Document\n\n\nclass {class_name}(Document):\n    pass\n",
        encoding="utf-8",
    )
    document = {
        "doctype": "DocType", "name": title, "module": "Portfolio Content",
        "custom": 0, "istable": 0, "issingle": 0, "editable_grid": 1,
        "engine": "InnoDB", "autoname": "hash",
        "field_order": [item["fieldname"] for item in fields],
        "fields": fields,
        "permissions": [{"role": "System Manager", "read": 1, "write": 1, "create": 1, "delete": 1, "report": 1, "export": 1}],
        "sort_field": "display_order", "sort_order": "ASC",
    }
    (folder / f"{slug}.json").write_text(json.dumps(document, indent=2) + "\n", encoding="utf-8")
