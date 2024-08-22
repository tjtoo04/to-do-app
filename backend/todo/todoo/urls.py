from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('task-list/', views.taskList, name="task-list"),
    path('task-create/', views.taskCreate, name="task-Create"),
    path('task-update/', views.taskCreate, name="task-Update"),
    path('task-delete/', views.taskCreate, name="task-Delete"),
  ]
  
  