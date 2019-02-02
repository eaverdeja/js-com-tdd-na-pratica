# JS com TDD na prática - Willian Justens

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

### Tipos de Teste

#### Pirâmide de Testes x Troféu de Testes

Complementando a teoria passada pelo Willian, outra interpretação que está sendo popularizada é a do [Troféu de Testes, popularizada pelo Kent Dodds](https://testingjavascript.com/). Relembrando a pirâmide tradicional:

<img src="https://cdn-images-1.medium.com/max/1200/0*UMzL89XZJ63vRCcc.png" width="400" />

Testes unitários são mais rápidos e menos custosos. Testes de UI (E2E) são mais lentos e mais custosos. Outra métrica que não está presente no desenho mas que é de grande interesse é a *confiabilidade*. A medida que subimos na pirâmide, os testes nos garantem mais confiabilidade. Essa visão é traduzida no Trófeu de Testes:

<img src="https://testingjavascript.com/static/trophyWithLabels@2x-3c2b593913ddfea970b801e67648092d.png" width="400"/>

A medida que subimos no troféu, os testes nos garantem mais confiabilidade. Um único teste E2E pode cobrir boa parte dos casos que todo um conjunto de testes unitários cobre. No entanto, todo o conjunto de testes unitários pode ser mais caro de manter em comparação com um único teste E2E.

Se o teste E2E nos der a *confiabilidade* que precisamos, pode ser mais interessante focar os esforços nessa camada. Sob essa ótica, a relação de custo-benefício se torna mais complexa e demanda uma análise caso a caso. Cada projeto é único!

#### Static - A base da pirâmide

O Kent Dodds adiciona a análise estática do código ao trófeu de testes com o argumento de que essa análise estática nos auxilia a lidar com erros **em tempo real**. Erros de escrita ou erros de tipo podem ser identificados pela IDE em tempo de desenvolvimento, evitando a necessidade de cobrir esses casos nos outros tipos de teste. Basta usarmos um linter (ESLint) e um sistema de tipos (Typescript ou Flow). Muita velocidade e pouco custo 🚀

#### Testes de UI (E2E)

O Willian comenta que as ferramentas mais populares para esse tipo de teste são o Selenium e o PhantomJS. Ambos são vistos como ferramentas lentas e de gerenciamento difícil. Recentemente, o CypressJS surgiu para auxiliar no desenvolvimento de testes E2E,aparentemente resolvendo os problemas mais comuns das ferramentas de testes E2E consolidadas no mercado. Vou tentar introduzir o Cypress ao final do curso 😄
