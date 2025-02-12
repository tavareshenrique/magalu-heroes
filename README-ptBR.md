<h1 align="center">
  <img alt="Daily Diet API" title="Daily Diet API" src="https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/public/images/logo.png" width="200px" />
</h1>

<div align="center">
  <a href="/README.md">🇺🇸 Inglês</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="/README-ptBR.md">🇧🇷 Português</a>
</div>

# 🦸‍♀️ Magalu Heroes

Magalu Heroes é o projeto resultante do desafio de Front-End da Magalu. Consiste em uma aplicação que lista personagens da Marvel, onde é possível visualizar detalhes dos quadrinhos de cada personagem e favoritar personagens.


## 🎨 Figma do Projeto

<p align="center">
    <a href="https://www.figma.com/design/D85ZebUNR7fguNLlMnO7VL/Magalu-Heroes?t=2IYebcSTrfrBBF6q-0">
        <img alt="Figma" src="https://img.shields.io/badge/Acesse%20Magalu%20Heroes%20Layout-black?style=flat-square&logo=figma&logoColor=red" width="300px" />
    </a>
</p>

## ✅ Especificações

As seguintes funcionalidades foram solicitadas e todas foram implementadas:

- :white_check_mark: Paginação;
- :white_check_mark: Ordenação da lista;
- :white_check_mark: Filtros;
- :white_check_mark: Opção de favoritar personagem;
- :white_check_mark: Layout responsivo;

## 👨‍💻 Como rodar o projeto

### Passos iniciais

Clone o repositório e instale as dependências:

```shell
git clone https://github.com/tavareshenrique/magalu-heroes.git

cd magalu-heroes
```

```shell
pnpm install
```

> Caso não tenha o pnpm instalado, você pode instalá-lo globalmente com o comando abaixo:

```bash
npm install -g pnpm
```

### Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env` e preencha as variáveis de ambiente:

```shell
cp .env.example .env.local
```

Preencha as variáveis de ambiente:

```shell
NEXT_PUBLIC_PB_API_KEY=SUA_CHAVE_PUBLICA
NEXT_PUBLIC_PV_API_KEY=SUA_CHAVE_PRIVADA
```

### Utilizando Docker

```shell
docker-compose up --build
```

> A flag `--build` é utilizada apenas na primeira execução, depois pode-se rodar apenas `docker-compose up`.

### Execução Manual

Execute a aplicação com o comando abaixo:

```shell
pnpm dev
```

### Acesso

Se tudo ocorreu bem, a aplicação estará disponível em:

> Aplicativo: http://localhost:3000

## 🚀 Funcionalidades

Abaixo estão algumas funcionalidades implementadas no projeto.

> Os GIFs de demonstração podem reduzir a qualidade da imagem e não refletem a qualidade real do projeto.

### Tela Inicial/Heroes

#### Filtrar por Nome ou Mostrar Apenas Favoritos

É possível filtrar os personagens pelo nome ou exibir apenas os favoritos.

![Filtrar por Nome](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/Filter-By-Name.gif)

![Filtrar por Favoritos](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/Filter-By-Fav.gif)

#### Ordenação da Lista

Ordenação dos personagens por nome ou data de última modificação.

![Ordenação](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/Sort.gif)

### Tela de Detalhes do Herói

#### Listar Todos os Quadrinhos

Visualização de todos os quadrinhos do personagem.

![Quadrinhos](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/Comics.gif)

#### Estatísticas do Personagem

Quantidade de quadrinhos, séries, histórias e eventos em que o personagem aparece.

![Estatísticas](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/Statistics.png)

#### Comprar na Magazine Luiza

Redirecionamento para a Magazine Luiza com produtos relacionados ao personagem.

![Magalu](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/magalu.gif)

### Favoritar Personagem

Personagem favoritado será exibido na tela inicial.

![Fav-1](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/Like-Home.gif)

![Fav-2](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/Like-Detail.gif)

> Obs.: Um som é emitido ao favoritar um personagem. 😝

### Paginação

Navegação entre páginas de personagens e quadrinhos.

![Paginação](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/Pagination.gif)

### Responsividade

O layout se adapta a diferentes tamanhos de tela.

<table>
  <tr>
    <td><img alt="Dashboard" title="Dashboard" src="https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/Responsiviness-1.gif" width="300px"  /></td>
    <td><img alt="Dashboard" title="Dashboard" src="https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/Responsiviness-2.gif" width="300px" /></td>
  </tr>
</table>

### URL State

A URL salva o estado dos filtros e da página para facilitar o compartilhamento de links.

### Docker

Adicionado suporte ao Docker para facilitar a execução.

### Configuração do Editor

Arquivo `.editorconfig` para padronização do código.

### PNPM

PNPM utilizado para gerenciar dependências de forma eficiente.

## 🧪 Testes

### Testes Unitários

Utilização do [Vitest](https://vitest.dev/) e [Testing Library](https://testing-library.com/) para garantir qualidade do código.

![Testes Unitários](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/unit-tests.png)

### Testes E2E

Uso do [Playwright](https://playwright.dev/) para testes ponta a ponta.

![Testes E2E](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/e2e-tests.png)

### Executando Testes Localmente

Testes Unitários:

```shell
pnpm test
```

Testes E2E via GUI:

```shell
pnpm test:e2e:ui
```

Testes E2E via CLI:

```shell
pnpm test:e2e
```


## 🔄 CI/CD

### CI

Foi implementado o CI com o Github Actions, para garantir a qualidade do código, e para isso foi utilizado o [Vitest](https://vitest.dev/), [Playwright](https://playwright.dev/). Resumindo, o CI vai rodar os testes unitários e E2E após qualquer commit na branch `main`.

> Você pode ver um exemplo [aqui.](https://github.com/tavareshenrique/magalu-heroes/actions/runs/13285166727)

### CD

Foi implementado o CD utilizando a [Vercel](https://vercel.com/). Resumindo, o CD vai fazer o deploy da aplicação após qualquer commit na branch `main`.

### Hospedagem

Vale destacar que houve uma hospedagem, a hospedagem Front-End é simples, como mencionado, foi utilizado a [Vercel](https://vercel.com/).

> Link da Aplicação
> https://magalu-heroes.vercel.app/

## 👣 Próximos Passos

Abaixo uma lista de melhorias e evoluções do projeto para o futuro:

- [ ] Utilizar o URL State para salvar a página também, facilitando o compartilhamento de links;
- [ ] Criar o Error Boundary;
- [ ] Adicionar o Storybook;
- [ ] Adicionar o Husky;
- [ ] Mais alguma sugestão? Abra uma issue, ficarei feliz em ler e discutir sobre. 😊

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

## 🙋‍♂️ Autor

<table>
  <tr>
    <td align="center">
      <a href="http://github.com/tavareshenrique/">
        <img src="https://avatars1.githubusercontent.com/u/27022914?v=4" width="100px;" alt="Henrique Tavares"/>
        <br />
        <sub>
          <b>Henrique Tavares</b>
        </sub>
       </a>
       <br />
       <a href="https://www.linkedin.com/in/tavareshenrique/" title="Linkedin">@tavareshenrique</a>
       <br />
       <a href="https://github.com/tavareshenrique/magalu-heroes/commits?author=tavareshenrique" title="Code">
        💻 🎨
       </a>
    </td>
  </tr>
</table>
