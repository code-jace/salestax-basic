# salestax-basic
salestax-basic


# v2 docker

```sh
docker build -t salestax-basic-v2 .
docker run -p 51001:51001 -e WEB_HOST=0.0.0.0 -e BS_HOST=192.168.59.103 -d salestax-basic-v2 node /service/salestax-basic-main.js
```