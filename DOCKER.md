Docker Build

        docker build --no-cache -f dockers/Dockerfile.os -t protyom/test_react_docker:os .
        docker build -f dockers/Dockerfile.os -t protyom/test_react_docker:os .
        docker push protyom/test_react_docker:os
        
        docker build --no-cache -f dockers/Dockerfile.pip -t protyom/test_react_docker:pip .
        docker build -f dockers/Dockerfile.pip -t protyom/test_react_docker:pip .
        docker push protyom/test_react_docker:pip
        
        docker build -f dockers/Dockerfile.pip.dev -t protyom/test_react_docker:pip .
        docker build -f dockers/Dockerfile.pip.dev -t protyom/test_react_docker:pip_dev .
        
        docker build --no-cache -f dockers/Dockerfile -t protyom/test_react_docker:dev .
        docker build -f dockers/Dockerfile -t protyom/test_react_docker:dev_4_5_13 .
        docker push protyom/test_react_docker:dev_4_5_13

Docker on server side

        docker pull protyom/test_react_docker:dev_4_5_13
        
        docker-compose up -d
        docker-compose up -d --force-recreate --no-deps web celery-beat celery-worker celery-flower
        docker-compose up -d --force-recreate
        docker-compose up -d --no-deps --force-recreate celery-worker
        docker-compose up -d --no-deps --force-recreate celery-beat
        
        docker-compose down
        
        docker logs 0dc4b5b004bd
        docker logs docker_celery-worker_1 >& celery_worker.log

Docker see exist

- Images

        docker image ls

- Containers
    
        docker ps -a
    

Move volume from old name to new
    
        docker volume create --name <new_volume>
        docker run --rm -it -v <old_volume>:/from -v <new_volume>:/to alpine ash -c "cd /from ; cp -av . /to"
        docker volume rm <old_volume>

- Execute in docker

        docker exec -it docker_web_1_de3101518138 python3 /home/docker/code/manage.py silk_clear_request_log
        docker exec -it docker_web_1 /../bin/sh

Remove on Linux

- All not needed:
        
        docker system prune

- Containers:

        docker rm $(docker ps -a -q)

- Images:

        docker rmi $(docker images -q)
        docker image prune

- Volumes:

        docker volume rm volume_name
        docker volume rm $(docker volume ls -qf dangling=true)
        docker run -it --rm -v docker_postgresql-postgis-volume:/volume -v /tmp:/backup alpine tar -cjf /backup/trenada_16_12_2019.tar.bz2 -C /volume ./
