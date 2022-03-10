default: build

init:
	docker-compose exec web bash init.sh
	docker-compose restart

build:
	docker-compose build

run:
	docker-compose up -d

log:
	docker-compose logs -f $(@1)

restart:
	docker-compose restart

stop:
	docker-compose down

clean:
	docker-compose down --rmi all --volumes
	sudo rm -rf web/app.egg-info
	sudo rm -rf web/app/alembic/versions/

migrate:
	docker-compose exec web bash migrate.sh
