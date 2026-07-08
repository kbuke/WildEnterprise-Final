from config import app, api

from resources.Sites import SitesList, SpecificSite
from resources.Animals import AnimalList, SpecificAnimal
from resources.SiteAnimals import SiteAnimalList, SpecificSiteAnimal
from resources.Blog import BlogList, SpecificBlog
from resources.SiteBlog import SiteBlogList, SpecificSiteBlog
from resources.Users import UserList
from resources.GoogleAuth import GoogleAuth
from resources.Logout import Logout
from resources.CheckSession import CheckSession

api.add_resource(SitesList, "/sites")
api.add_resource(SpecificSite, "/sites/<int:id>")

api.add_resource(AnimalList, "/animals")
api.add_resource(SpecificAnimal, "/animals/<int:id>")

api.add_resource(SiteAnimalList, "/siteanimals")
api.add_resource(SpecificSiteAnimal, "/siteanimals/<int:id>")

api.add_resource(BlogList, "/blogs")
api.add_resource(SpecificBlog, "/blogs/<int:id>")

api.add_resource(SiteBlogList, "/siteblogs")
api.add_resource(SpecificSiteBlog, "/siteblogs/<int:id>")

api.add_resource(UserList, "/users")

api.add_resource(GoogleAuth, "/auth/google")
api.add_resource(Logout, "/auth/logout")
api.add_resource(CheckSession, "/auth/checksession")

if __name__ == "__main__":
    app.run(port = 5555, debug = True)