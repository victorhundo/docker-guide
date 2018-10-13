# Volumes

![Banner Docker](../assets/docker-banner-4.jpg)


**Esse módulo é divido em:**

1. [Introdução](#intrdução)
2. [Tipos de volumes](#tipos-de-volumes)
3. [Deixando BD persistente](#dexiando-bd-persistente)
4. [Criando container para desenvolvimento](#criando-container-para-desenvolvimento)


## Introdução
Até agora nós vimos maneiras de utilizar containers para pegar sistemas já desenvolvido e inicia-lo em um mambiente controlado, também vimos que a ideia do container é que seja efêmero. Então como fazer com que os containers salvem os dados gerados? A repsosta para essa pergunta é **utilizando volumes!**

Ao criar um volume, os dados que estão nele serão montados em algum diretório especifico dentro do container, os volumes são salvos na máquina real, desta forma, garantimos a opersistencia dos dados já que eles ficam idepedente do container.

## Tipos de volumes
Existe dois tipos de volume: com bind e sem bind, volumes com bind são utilizados quando você quer especificar o caminho da sua máquina onde estão os dados do container enquanto volumes sem bind esse trabalho é feito pelo próprio Docker.

A criação do volume pode ser feito na criação do container utilizando o paramêtro ``-v``

```
# Exemplo de criação de volume com bind
-v /home/user/container_data:/opt/app
```

```
# Exemplo de criação de volume sem bind
-v /opt/app (volume sem bind)
```

Normamelnte volumes com bind são utilizados quando é preciso **fazer modificações** nos dados frequentemente, ao alterar os dados na pasta da sua máquina real em que está fazendo o bind, os dados dentro do container também serão alterados. **Arquivos de configuração ou códigos de desenvolvimento** são exemplos de bons usos dese tipo de volume.

Já os volume sem bind geralmente são utilizados quando queremos **apenas salvar as informações** e queremos apenas ler esses dados, **banco de ddados** é um exemplo que pode utilizar esse tipo de volme.

## Deixando BD persistente

Para que possamos deixar os dados do banco de dados persistene primeiro precisamos saber como que o seu sgbd armazena os dados. No nosso caso que estamos utilizando mysql, ele armazena os dados no caminho ``/var/lib/mysql``, então o que será necessário é apenas informar ao Docker que essa pasta será armazenada em um volume. No nosso exemplo será:


```
docker run -d --name bd -e MYSQL_ROOT_PASSWORD=senha -v my_data:/var/lib/mysql mysql:latest
```
Assim como com o parametro ``-p`` o parametro ``-v`` é dividido em duas partes pelo dois pontos. Em um volume sem bind que criamos agora a palavra antes dos dois pontos **my_data** é o nome do volume que estamos criando e a palavra depois dos dois pontos é o caminho que está dentro do container que queremos aramazenar.

Execute o comando ``docker volume ls`` e verifeque que existe um volume chamado my_data.

```
DRIVER              VOLUME NAME
local               my_data
```

## Criando container para desenvolvimento

Assim como vimos que a melhorm maneira de criar um volume para desenvolvimento é utilizando bind, vamos criar o container da nossa aplicação novamente da seguinte forma:

```
docker run -d --name my_app -p 1915:3000 -v /docker-guide/lvl.4.volumes/app:/opt/ --link bd:my_bd my_node:1
```

Acessem http://localhost:1915 para verificar que a aplicação está acessivel.

Em seguinda edite o arquivo `lvl.4.volumes/app/index.html` localize o nome ``Make Anything with Docker.`` e subsituta para ``Make My Web App with Docker.``

Atualize a página http://localhost:1915 e verifque as alterações, isso só foi possivél porque o arquivo dentro do container também foi modificado. Desta forma é possivel criar um ambiente docker para o desenvolvimento e não terá mais necessidade de configurar cada máquina para desenvolver a aplicação, basta ter Docker!
