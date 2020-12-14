FROM library/postgres:10.15-alpine

COPY init-databases.sh /docker-entrypoint-initdb.d/
COPY create-databases.sql /docker-entrypoint-initdb.d/

ENV POSTGRES_HOST_AUTH_METHOD trust

RUN chmod +x /docker-entrypoint-initdb.d/init-databases.sh

EXPOSE 5432
