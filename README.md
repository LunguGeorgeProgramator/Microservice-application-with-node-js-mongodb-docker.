# test-microservices-node-app
 
In order to set this project up and running please instal docker.

https://www.docker.com/

After create a folder on your computer and name it test-microservices-node-app.

Open a terminal and set to path to your folder path:

cd c:/{path to folder}/test-microservices-node-app

After docker is up in running, write the following command in terminal:

docker-compose up

and for changes in the code force build comand:

docker-compose up -d --force-recreate --build

*Note if the comand do not work you may whant to see docker-compose why is not working.

The site should be live on localhost link:

http://localhost:3000/
