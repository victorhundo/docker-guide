# Images

![Banner Docker](../assets/docker-banner-2.jpg)

**Esse módulo é divido em:**

1. [Intrdução](#introdução)
2. [Docker Hub](#docker-Hub)


## Introdução

No módulo anterior nós copiamos os arquivos que estava na pasta ``/lvl.1.containers/app`` no repositório para que fosse possivel fazer o build e o deploy da nossa aplicação web exemplo, essa prática não é recomendada porque para uma aplicação grande contém vários arquivos além de outros programas/bibliotecas que precisam está instaladas no **ambiente da aplicação.** A melhor forma de customizar o container com as configurações necessárias para que sua aplicação funcione da melhor forma possíve é através de **imagens.**

## Docker Hub
Uma imagem docker é um container pré-configurado em que será utilizado como referencia **para criar containers**. No nosso exemplo, usamos a imagem **oficial** do Node, assim como containers, podemos visualizar as imagens que estão instaladas na nossa máquina digitando o comando:

```
docker images
```
