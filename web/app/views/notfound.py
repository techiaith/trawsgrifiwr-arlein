from pyramid.view import notfound_view_config, exception_view_config


@notfound_view_config(renderer="../templates/404.html.j2")
def notfound_view(request):
    request.response.status = 404
    return {}


@exception_view_config(renderer="../templates/500.html.j2")
def exception_view(request):
    request.response.status = 500
    return {}
