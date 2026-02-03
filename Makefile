env:
	cp .env.example .env

run-database-only:
	docker compose -f docker-compose.yaml up -d mongodb 

stop-database-only:
	docker compose -f docker-compose.yaml down mongodb

run-backend-container:
	docker compose -f docker-compose.yaml up -d --build

stop-backend-container:
	docker compose -f docker-compose.yaml down