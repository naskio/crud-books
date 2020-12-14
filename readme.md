# Docker and Docker-Compose

## Build Images
```shell
docker-compose build
```

## Run
```shell
docker-compose up
```


## Run migration (initialize Database)
```shell
docker-compose run web yarn migrate
```

## Test

Create a Book
```
http://localhost:4000/books/create?info={}
```

View the created Book
```
http://localhost:4000/books?id=XXXXXXX
```


