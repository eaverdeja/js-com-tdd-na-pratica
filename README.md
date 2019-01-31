# JSS com TDD na prática - Willian Justens

Esse repositório foi criado para seguir o curso do Willian na Udemy. Esse readme serve para documentar meus aprendizados e para pontuar algumas mudanças necessárias pra tudo continuar funcionando conforme o curso prega

## Diferenças e Atualizações em relação à 2019

### **Husky**

Comandos do husky no NPM scripts vão ser depreciados em breve. Continua funcionando normalmente, mas o script gera um warning com algumas recomendações. No caso do curso foi só adicionar o seguinte bloco na raiz do `package.json`

```
"husky": {
  "hooks": {
    "pre-commit": "npm run lint"
  }
}
```

### **Webpack**

Eu clonei o [código do curso de es6](https://github.com/willianjusten/es6-curso) pra raiz do projeto original para fins de organização. Como eu já tinha o eslint configurado, ele ficou bravo quando chegamos na aula de [webpack](./es6-curso/15-js-modules/README.md)

<img src="https://media.giphy.com/media/13EjnL7RwHmA2Q/giphy.gif" width="130" height="130" />



Por conta do arquivo `build.js`, o eslint acusou todo tipo de erro. Após uma pesquisa rápida, descobri que [basta criar um arquivo `.eslintignore`](https://eslint.org/docs/user-guide/configuring.html#ignoring-files-and-directories) na raiz do projeto e adicionar os arquivos apropriados - igualzinho ao bom e velho `.gitignore`

A versão do webpack que foi instalada usando o comando `npm i --save-dev webpack` foi a `4.29.0`. Ao usar o comando `node_modules/.bin/webpack`, o pacote `webpack-cli` teve que ser instalado. Ou seja, o comando apropriado passou a ser `npm i --save-dev webpack webpack-cli`

A instalação do NPM pegou uma vulnerabilidade alta e uma crítica, então eu usei o audit. Ao rodar `npm audit fix`, ele acusou um warning de semver por conta do `webpack-dev-server` e parou por ai. A cli sugeriu o comando `npm i -D webpack-dev-server@3.1.14`, alertando sobre os temidos **POTENTIALLY BREAKING CHANGES**

<img src="https://media.giphy.com/media/NIVdosAtzETMQ/giphy.gif" width="130" height="130" />

Instalei, apaguei os arquivos de build e rodei o webpack. Tudo sem problemas 🎊
