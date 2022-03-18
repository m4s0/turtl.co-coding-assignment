.DEFAULT_GOAL:=help

.PHONY: init
init: build-container up

.PHONY: build-container
build-container:
	cd docker && docker-compose build

.PHONY: up
up:
	cd docker && docker-compose up -d

.PHONY: down
down:
	cd docker && docker-compose down

.PHONY: down-remove-volume
down-remove-volume:
	cd docker && docker-compose down -v

.PHONY: logs
logs:
	cd docker && docker-compose logs -f

.PHONY: bash
bash:
	cd docker && docker-compose run node bash

.PHONY: install
install:
	cd docker && docker-compose run --rm node bash -c 'npm install'

.PHONY: build
build:
	cd docker && docker-compose run --rm node bash -c 'npm run build'

.PHONY: lint
lint:
	cd docker && docker-compose run --rm node bash -c 'npm run lint'

.PHONY: run
run:
	cd docker && docker-compose run --rm node bash -c 'npm run start'

.PHONY: tests
tests:
	cd docker && docker-compose run --rm node bash -c 'npm run test'
