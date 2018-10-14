# Docker Compose

Como vocês puderam reparar, os comandos do docker só fazem crescer e fica ainda mais complexo quando precisamos utilizar mais de um container para fazer nosso serviço funcionar (é natural que mais de 3 containers trabalhem em conjunto para uma única aplicação).

O Docker Compose veio para **simplificar e facilitar** a manutenção de múltiplos containers para uma unica aplicação.

## docker-compose.yaml

O docker compose utiliza um arquivo no padrão yaml para poder configurar a criação dos containers. Dentro do arquivo ``/lvl.5.compose/app/`` existe um arquivo chamado **docker-compose.yaml**, vamos analisar as informações que estão neles, assim como foi feito no arquivo Dockerfile.

### version

```
version: '3'
```
Indica a versão que o arquivo do docker-compose.yaml vai criar os containers, se for utilizar outra versão, parametros diferentes será necessário. A versão 3 é a mais recente.

### services
```
services:
```

No docker compose, cada container é conhecido como serviço, no nosso caso, vamos iniciar 2: web e bd.

### image

Reparem que no serviço de web temos a nossa imagem "myapp", caso ela não exista na máquina, será criada pelo Dockerfile que está no repositório, o docker-compose sabe disso por causa do parametro ``build: .`` o "ponto" signifca que o Dockerfile está no mesmo diretorio que o arquivo docker-compose.yaml

No serviço do BD, não tem o parametro build, logo, se não tiver a imagem na sua máquina, ela será baixada pelo Docker Hub.

### container_name

O nome do container é criado nesse parametro.

### volumes

O volume com bind é feito no serviço web, da mesma forma com que é foi feito no módulo anterior, diferença apenas que não precisa dizer o path completo.

O volume sem bind no serviço do bd, é descrito qual volume será utilizado. Nesse caso, o volume é descrito depois de "services".


## Criando vários containers ao mesmo tempo

Para criar os containers, basta entrar na pasta ``/lvl.5.compose/app`` e executar o comando

```
docker-compose up
```

## Removendo vários containers ao mesmo tempo

Para remover os containers basta executar

```
docker-compose down
``` 
