APP_NAME=lulo-cms
REGISTRY=registry.yesidlopez.de
DEV ?= false

# Conditional repository name based on DEV flag
REPO_NAME = $(if $(filter true,$(DEV)),$(APP_NAME)-dev,$(APP_NAME))

PHONY: build publish start-docker start-docker-dev

build:
	docker buildx build --platform linux/amd64,linux/arm64 -t $(REGISTRY)/$(REPO_NAME):$(IMAGE_TAG) .

publish:
	docker buildx build --platform linux/amd64,linux/arm64 -t $(REGISTRY)/$(REPO_NAME):$(IMAGE_TAG) --push .

