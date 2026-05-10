APP_NAME=lulo-cms
REGISTRY=registry.yesidlopez.de
DEV ?= false

# Conditional repository name based on DEV flag
REPO_NAME = $(if $(filter true,$(DEV)),$(APP_NAME)-dev,$(APP_NAME))

# Default IMAGE_TAG to commit time + short SHA so workstation pushes order
# the same way as CI builds (Flux ImagePolicy is alphabetical asc on the tag).
IMAGE_TAG ?= v$(shell TZ=UTC git show -s --format=%cd --date=format-local:%Y%m%d.%H%M%S HEAD).$(shell git rev-parse --short=7 HEAD)

PHONY: build publish start-docker start-docker-dev

build:
	docker buildx build --platform linux/amd64,linux/arm64 -t $(REGISTRY)/$(REPO_NAME):$(IMAGE_TAG) .

publish:
	docker buildx build --platform linux/amd64,linux/arm64 -t $(REGISTRY)/$(REPO_NAME):$(IMAGE_TAG) --push .

