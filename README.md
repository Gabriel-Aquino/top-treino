# top-treino

# What do you need?

Docker installed;

node.JS installed;

npm and yarn;

# Install Docker

To install it on Ubuntu, you can follow these steps on the link below (In portuguese):

https://www.digitalocean.com/community/tutorials/como-instalar-e-usar-o-docker-no-ubuntu-18-04-pt

after that, run (if you want a postgres image):

> docker run --name pg-my-project -e POSTGRES_PASSWORD=anypassword -p anyport:anyport -d postgres

note: you should to check if the port you has been chosen is avaliable.

to run container:

> docker start pg-my-project

# Diagram

![alt text](https://github.com/Gabriel-Aquino/top-treino/blob/main/src/shared/images/top-treino.png)
