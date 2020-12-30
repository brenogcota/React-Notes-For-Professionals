/*

    ** O que é ReactJS? **

    ReactJS é uma biblioteca de front-end baseada em componentes de código aberto responsável apenas pela camada de visualização do
    inscrição. É mantido pelo Facebook.
    ReactJS usa um mecanismo baseado em DOM virtual para preencher os dados (visualizações) no HTML DOM. O DOM virtual funciona rápido possuindo
    ao fato de que ele apenas altera elementos DOM individuais em vez de recarregar o DOM completo todas as vezes
    Um aplicativo React é feito de vários componentes , cada um responsável por gerar uma pequena
    parte reutilizável de HTML. Os componentes podem ser aninhados em outros componentes para permitir
    aplicativos a serem construídos a partir de blocos de construção simples. Um componente também pode manter o estado interno - para
    Por exemplo, um componente TabList pode armazenar uma variável correspondente à guia aberta no momento.
    O React nos permite escrever componentes usando uma linguagem específica de domínio chamada JSX. JSX nos permite escrever nosso
    componentes usando HTML, enquanto mistura em eventos JavaScript. O React irá convertê-lo internamente em um DOM virtual, e
    acabará por produzir nosso HTML para nós.
    React " reage " às mudanças de estado em seus componentes de forma rápida e automática para renderizar novamente os componentes no
    HTML DOM utilizando o DOM virtual. O DOM virtual é uma representação na memória de um DOM real. De
    fazendo a maior parte do processamento dentro do DOM virtual em vez de diretamente no DOM do navegador, o React pode agir
    rapidamente e apenas adicione, atualize e remova componentes que foram alterados desde o último ciclo de renderização.


    ** Instalação ou configuração **

    ReactJS é uma biblioteca JavaScript contido em um único arquivo de reagir - < versão > . js que pode ser incluído em qualquer página HTML.
    As pessoas também costumam instalar a biblioteca React DOM react - dom - < version > . js junto com o arquivo React principal:


    <!DOCTYPE html>
    <html>
        <head></head>
        <body>
        <script type="text/javascript" src="/path/to/react.js"></script>
        <script type="text/javascript" src="/path/to/react-dom.js"></script>
        <script type="text/javascript">
            // Use react JavaScript code here or in a separate file
        </script>
        </body>
    </html>

    React também suporta Sintaxe JSX. JSX é uma extensão criada pelo Facebook que adiciona sintaxe XML ao JavaScript. Em ordem
    para usar JSX, você precisa incluir a biblioteca Babel e alterar <script type = "text / javascript" > para <script
    type = "text / babel" > para traduzir JSX para código Javascript.

    <! DOCTYPE html >
    <html>
        <head> </head>
        <body>
        <script type = "text / javascript" src = "/path/to/react.js" > </script>
        <script type = "text / javascript" src = "/path/to/react-dom.js" > </script>
        <script src = "https://npmcdn.com/babel-core@5.8.38/browser.min.js" > </script>
        <script type = "text / babel" >
            // Use o código react JSX aqui ou em um arquivo separado
        </script>
        </body>
    </html>


    Instalando via npm
    Você também pode instalar o React usando npm fazendo o seguinte:
    npm install --save react react-dom

*/
    var React = require('react');
    var ReactDOM = require('react-dom');
    ReactDOM.render(<App />);

/*
    ** Hello World com funções sem estado **

    Os componentes sem estado estão obtendo sua filosofia da programação funcional. O que implica que: Uma função
    retorna o tempo todo a mesma coisa exatamente sobre o que é dado a ele.

*/
    const statelessSum = (a, b) => a + b;
    let a = 0;
    const statefulSum = () => a++;

/*
    Como você pode ver no exemplo acima, statelessSum é sempre retornará os mesmos valores dados a e b.
    No entanto, a função statefulSum não retornará os mesmos valores, mesmo sem parâmetros. Este tipo de função é
    comportamento também é chamado de efeito colateral . Desde então, o componente afeta algumas coisas além.
    Portanto, é aconselhável usar componentes sem estado com mais frequência, uma vez que eles não têm efeitos colaterais e irão criar o mesmo
    comportamento sempre. Isso é o que você deseja em seus aplicativos, porque o estado de flutuação é o pior caso
    cenário para um programa sustentável.
    O tipo mais básico de componente de reação é aquele sem estado. Reagir componentes que são funções puras de seus
    adereços e não requerem nenhum gerenciamento de estado interno podem ser escritos como funções JavaScript simples. Esses são
    Diz-se que Apátridas componentes funcionais , porque eles são uma função somente de adereços , sem ter qualquer estado
    para acompanhar.
    Aqui está um exemplo simples para ilustrar o conceito de um componente funcional sem estado :
*/


// Em HTML
<div id="element"></div>
// Em React
const MyComponent = props => {
 return <h1>Hello, {props.name}!</h1>;
};
ReactDOM.render(<MyComponent name="Arun" />, element);
// Irá renderizar <h1>Hello, Arun!</h1>

/*
    Observe que tudo o que esse componente faz é renderizar um elemento h1 contendo o nome prop. Este componente não
    acompanhar qualquer estado. Aqui está um exemplo ES6 também:
*/

import React from 'react'
const HelloWorld = props => (
    <h1>Hello, {props.name}!</h1>
)

HelloWorld.propTypes = {
    name: React.PropTypes.string.isRequired
}

export default HelloWorld

/*
    Uma vez que esses componentes não requerem uma instância de apoio para gerenciar o estado, o React tem mais espaço para
    otimizações. A implementação está limpa, mas aindanenhuma dessas otimizações para componentes sem estado tem
    foi implementado.
*/


