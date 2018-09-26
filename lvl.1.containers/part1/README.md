# Containers: part 1 - Hello Docker World!

Agora que estamos com ambiente configurado para executar Docker e o docker-compose, está na hora de colocar a mão na massa!

## Introdução

O docker é uma ferramenta para criar e gerenciar containers, que assim como o nome sugere, é um compartimento para armazenar e/ou transportar objetos, no nosso caso o compartimento é criado através de **virtualização** em que memoria e o processamento são separados para o uso do exclusivo do container.

É importante frisar que container **não é uma máquina virtual**, os containers utiliza-se do próprio kernel da máquina hospedeira, enquanto as máquinas virtuais também virtualizam o kernel. Com containers é possivel **isolar bibliotecas e binários** dentro do mesmo SO sem a necessidade de virtualizar um novo sistema.

![Diferença container/vm](https://cdn-images-1.medium.com/max/1200/1*9WTam0ymAdSTrfbr7aV6oQ.png)

## Hello World

Para verificar que seu ambiente está configurado de forma correta, basta executar o seguinte comando abaixo, se aparecer a mensagem `Hello from Docker!` tudo ocorreu bem:

```
docker run hello-world
```
![Diferença container/vm](../../assets/git-hello.gif)
