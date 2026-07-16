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
from resources.BlogComments import BlogCommentsList, SpecificBlogComment
from resources.AdminLogin import AdminLogin
from resources.AdminLogout import AdminLogout
from resources.AdminCheckSession import AdminCheckSession
from resources.Inhabitants import InhabitantsList, SpecificInhabitants
from resources.SiteImage import SiteImgList, SpecificSiteImg
from resources.Events import EventsList, SpecificEvent
from resources.OtherSites import OtherSitesList, SpecificOtherSite
from resources.Emails import EmailList, SpecificEmail

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

api.add_resource(BlogCommentsList, "/comments")
api.add_resource(SpecificBlogComment, "/comments/<int:id>")

api.add_resource(AdminLogin, "/admin/login")
api.add_resource(AdminLogout, "/admin/logout")
api.add_resource(AdminCheckSession, "/admin/checksession")

api.add_resource(InhabitantsList, "/inhabitants")
api.add_resource(SpecificInhabitants, "/inhabitants/<int:id>")

api.add_resource(SiteImgList, "/siteimages")
api.add_resource(SpecificSiteImg, "/siteimages/<int:id>")

api.add_resource(EventsList, "/events")
api.add_resource(SpecificEvent, "/events/<int:id>")

api.add_resource(OtherSitesList, "/othersites")
api.add_resource(SpecificOtherSite, "/othersites/<int:id>")

api.add_resource(EmailList, "/emails")

if __name__ == "__main__":
    app.run(port = 5555, debug = True)