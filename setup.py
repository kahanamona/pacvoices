from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in pacvoices/__init__.py
from pacvoices import __version__ as version

setup(
	name="pacvoices",
	version=version,
	description="Application Application for the Pacific Regional Civil Society Organisations to record their Voices",
	author="Kahanamona",
	author_email="sione@caitlah.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
