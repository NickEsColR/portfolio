.PHONY: up down stop add sync run sh logs clean update

APP  := app
PM   := pnpm
RUN  := run dev

up:
	docker compose up -d

down:
	docker compose down

stop:
	docker compose stop

add:
	@docker compose exec $(APP) $(PM) i $(filter-out $@,$(MAKECMDGOALS))

add-dev:
	@docker compose exec $(APP) $(PM) i -D $(filter-out $@,$(MAKECMDGOALS))

sync:
	docker compose exec $(APP) $(PM) i

run:
	docker compose exec $(APP) $(PM) $(RUN)

sh:
	docker compose exec $(APP) sh

logs:
	docker compose logs -f

# Regla trampa para ignorar argumentos adicionales de 'add' y 'add-dev'
%:
	@:
