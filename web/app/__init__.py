from pyramid.config import Configurator


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    with Configurator(settings=settings,
                      root_factory='.resources.Root') as config:
        config.include('.models')
        config.include('pyramid_jinja2')
        config.include('pyramid_debugtoolbar')
        config.add_jinja2_renderer('.j2')
        config.include('.routes')
        config.include('pyramid_tm')
        config.include('pyramid_celery')
        config.configure_celery(global_config['__file__'])
        config.scan()
    return config.make_wsgi_app()
