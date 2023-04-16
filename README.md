
<h1 align="center">NextJs FrontEnd Boilerplate</h1>
<p align="center">Complete structured production ready NextJs Boilerplate with styling powered by MUI</p>

### Key Features

- [**Next JS**](https://nextjs.org/)
- [**MUI**](https://nextjs.org/)
- [**Typescript**](https://nextjs.org/)
- [**SEO**](https://nextjs.org/)
- [**PWA**](https://nextjs.org/)
- [**Internationalization**](https://nextjs.org/)

### Additional Features

- Maximize lighthouse score
- Absolute Imports using @ prefix
- Structured directory
- E2E test using Cypress
- Sitemap with next-sitemap
- Pre config VsCode configuration
- CI/CD with Github Action
- Dark Theme with MUI
- Pre-commit with Husky
- Commit linter with Commitlint
- Code formatter with Prettier

<!--

### Background

sadjkfh sfsdjfasd fasdjfkhasd fjkhasdf hasfhasd fasd fasdf

-->


## Deploy or Develop

Deploy on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Farrofirezasatria%2Fnextjs-mui-boilerplate)

Develop on Gitpod in one Click:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/arrofirezasatria/nextjs-mui-boilerplate)




## How to use :

Run the following command on your local environment:

```shell
git clone https://github.com/arrofirezasatria/nextjs-mui-boilerplate.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```


### Directory Strucuture

```shell
.
├── .github/workflow                # GitHub folder for CI/CD
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── cypress                         # Cypress configuration
├── lib                             # Support core code
│   ├── utils                       # Utility Compoennet
│   └── types                       # Types for typescript
├── public                          # Public assets folder
│   ├── locales                     # Languange JSON
│   └── static                      # Static Files to be cached
├── src
│   ├── components                  # Components
│   ├── layouts                     # Layouts components
│   ├── modules                     
│   |   ├── components              # Important Component
│   |   |── hooks                   # Custom hooks
|   |   └── brandingTheme.ts        # MUI theme Configuration
│   └── pages                       # Next JS Pages
├── tailwind.config.js              # Tailwind CSS configuration
├── pretterrc.json                  # Prettier configuration
├── i18n.js                         # Next-Translate I18N configuration
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Roadmap

next roadmap