from rest_framework import routers
from .api import ElementViewSet


router = routers.DefaultRouter()
router.register('api/elements', ElementViewSet, 'elements')

print(router.urls)
urlpatterns = router.urls

from .utils import update
update()