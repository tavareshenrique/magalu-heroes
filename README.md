<h1 align="center">
  <img alt="Daily Diet API" title="Daily Diet API" src="https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/public/images/logo.png" width="200px" />
</h1>

<div align="center">
  <a href="/README.md">🇺🇸 English</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="/README-ptBR.md">🇧🇷 Portuguese</a>
</div>

# 🦸‍♀️ Magalu Heroes

Magalu Heroes is the result of Magalu's Front-End challenge. It consists of an application that lists Marvel characters, where you can view details of each character's comics and favorite characters.

## 🎨 Project Figma

<p align="center">
    <a href="https://www.figma.com/design/D85ZebUNR7fguNLlMnO7VL/Magalu-Heroes?t=2IYebcSTrfrBBF6q-0">
        <img alt="Figma" src="https://img.shields.io/badge/Access%20Magalu%20Heroes%20Layout-black?style=flat-square&logo=figma&logoColor=red" width="300px" />
    </a>
</p>

## ✅ Specifications

The following features were requested and all have been implemented:

- :white_check_mark: Pagination;
- :white_check_mark: List sorting;
- :white_check_mark: Filters;
- :white_check_mark: Option to favorite a character;
- :white_check_mark: Responsive layout;

## 👨‍💻 How to Run the Project

### Initial Steps

Clone the repository and install the dependencies:

```shell
git clone https://github.com/tavareshenrique/magalu-heroes.git

cd magalu-heroes
```

```shell
pnpm install
```

> If you don't have pnpm installed, you can install it globally with the command below:

```bash
npm install -g pnpm
```

### Environment Variables

Copy the `.env.example` file to `.env` and fill in the environment variables:

```shell
cp .env.example .env.local
```

Fill in the environment variables:

```shell
NEXT_PUBLIC_PB_API_KEY=YOUR_PUBLIC_KEY
NEXT_PUBLIC_PV_API_KEY=YOUR_PRIVATE_KEY
```

### Using Docker

```shell
docker-compose up --build
```

> The `--build` flag is used only for the first execution, afterwards, you can just use `docker-compose up`.

### Manual Execution

Run the application with the command below:

```shell
pnpm dev
```

### Access

If everything went well, the application will be available at:

> Application: http://localhost:3000

## 🚀 Features

Below are some features implemented in the project.

> The demonstration GIFs may reduce the screen quality and do not reflect the actual project quality.

### Home/Heroes Screen

#### Filter by Name or Show Only Favorites

You can filter characters by name or display only favorites.

![Filter by Name](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/Filter-By-Name.gif)

![Filter by Favorites](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/Filter-By-Fav.gif)

#### List Sorting

Sort characters by name or last modification date.

![Sorting](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/Sort.gif)

### Hero Details Screen

#### List All Comics

View all comics of the character.

![Comics](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/Comics.gif)

#### Character Statistics

See the number of comics, series, stories, and events the character appears in.

![Statistics](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/Statistics.png)

#### Buy on Magazine Luiza

Redirect to Magazine Luiza's search page with the character's information.

![Magalu](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/magalu.gif)

### Favorite Character

Favorited characters will be displayed on the home screen.

![Fav-1](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/Like-Home.gif)

![Fav-2](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/Like-Detail.gif)

> Note: A sound is played when you favorite a character. 😝

### Pagination

Navigate between pages of characters and comics.

![Pagination](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/Pagination.gif)

### Responsiveness

The layout adapts to different screen sizes.

<table>
  <tr>
    <td><img alt="Dashboard" title="Dashboard" src="https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/Responsiviness-1.gif" width="300px"  /></td>
    <td><img alt="Dashboard" title="Dashboard" src="https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/Responsiviness-2.gif" width="300px" /></td>
  </tr>
</table>

### URL State

The URL saves the filter and page state for easy link sharing.

### Docker

Added Docker support to simplify execution.

### Editor Configuration

`.editorconfig` file added for code standardization.

### PNPM

PNPM used for efficient dependency management.

## 🧪 Tests

### Unit Tests

Using [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/) to ensure code quality.

![Unit Tests](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/unit-tests.png)

### E2E Tests

Using [Playwright](https://playwright.dev/) for end-to-end testing.

![E2E Tests](https://raw.githubusercontent.com/tavareshenrique/magalu-heroes/refs/heads/main/src/assets/previews/e2e-tests.png)

### Running Tests Locally

Unit Tests:

```shell
pnpm test
```

E2E Tests via GUI:

```shell
pnpm test:e2e:ui
```

E2E Tests via CLI:

```shell
pnpm test:e2e
```

## 🔄 CI/CD

### CI

Implemented CI with GitHub Actions to ensure code quality using [Vitest](https://vitest.dev/) and [Playwright](https://playwright.dev/).

> See an example [here](https://github.com/tavareshenrique/magalu-heroes/actions/runs/13285166727).

### CD

Implemented CD using [Vercel](https://vercel.com/) to deploy the application after any commit to the `main` branch.

> Application link: https://magalu-heroes.vercel.app/

## 👣 Next Steps

- [ ] Use URL State to save the page as well for better link sharing;
- [ ] Create an Error Boundary;
- [ ] Add Storybook;
- [ ] Add Husky;
- [ ] Any suggestions? Open an issue, I'd be happy to discuss! 😊

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Author


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
