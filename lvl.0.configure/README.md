# Lvl. 0 - Configure

Antes de começar nossos estudos práticos sobre Docker é necessário configurar o ambiente para que possamos instalar-lo, além do docker, também vamos instalar o ``docker-compose`` que veremos no Lvl.5.

Para essa oficina vamos utilizar uma máquina com Debian. Caso seu computador não seja esse sistema, acessem a [documentação oficial do docker](https://docs.docker.com/install/overview/) para saber os procedimentos de instalação em outras plataformas.

## Instalação

### Docker

**1.** Instae os pacotes que permitem o apt usar repositórios com `https`.

```
$ sudo apt-get install \
     apt-transport-https \
     ca-certificates \
     curl \
     gnupg2 \
     software-properties-common
```

**2.** Adicione a chave GPG oficial do Docker

```
$ curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
```

**3.** Adicione o repositório Docker no apt

```
$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable"
```

**4.** Instale o Docker!

```
$ sudo apt-get update && sudo apt-get install docker-ce
```

**5.** [opcional] Adicione um usuário que não seja o root a executar comandos docker. Será necessário fazer logout/login para que as mudanças sejam efetivadas.

```
$ sudo usermod -aG docker $USER
```

### Docker compose

**1.** Instale o ``pip``.

```
$ sudo apt-get install python-pip
```

**2.** Insale o Docker-compose

```
$ sudo pip install docker-compose
```
