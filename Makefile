# NOTE: you have to use tabs in this file for make. Not spaces.
# https://stackoverflow.com/questions/920413/make-error-missing-separator
# https://tutorialedge.net/golang/makefiles-for-go-developers/

hello:
	echo "Hello"

build-plugin:
	@sh scripts/compile-plugins.sh

build: build-plugin
	go build -o bin/lake

dev: build
	bin/lake

run:
	go run main.go

compose:
	docker-compose up grafana

compose-down:
	docker-compose down

commit:
	git cz

install:
	go clean --modcache
	go get

test: unit-test e2e-test

unit-test:
	@sh ./scripts/unit-test.sh

e2e-test:
	@sh ./scripts/e2e-test.sh

lint:
	golangci-lint run

clean:
	@rm -rf bin
