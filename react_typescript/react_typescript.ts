/*
    ** Usando ReactJS com TypeScript **

    Componente ReactJS escrito em TypeScript
    Na verdade, você pode usar os componentes do ReactJS no Typescript como no exemplo do Facebook. Basta substituir a extensão do arquivo 'jsx'
    para 'tsx':
*/

var HelloMessage = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});
ReactDOM.render(<HelloMessage name="John" />, mountNode);
   

/*
    Mas, para fazer uso total do recurso principal do Typescript (verificação estática de tipo), devem ser feitas algumas coisas:
    
    1) converter o exemplo React.createClass em Classe ES6:
    2) em seguida, adicione Props e interfaces de estado:

*/

// 1
class HelloMessage extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

ReactDOM.render(<HelloMessage name="John" />, mountNode);

// 2
interface IHelloMessageProps {
    name:string;
}
interface IHelloMessageState {
    //empty in our case
}
class HelloMessage extends React.Component<IHelloMessageProps, IHelloMessageState> {
    constructor(){
        super();
    }
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

ReactDOM.render(<HelloMessage name="Sebastian" />, mountNode);


/*
    ** Instalação e configuração **

    Para usar o typescript com react em um projeto de nó, você deve primeiro ter um diretório de projeto inicializado com npm. Para
    inicialize o diretório com npm init
    Instalando via npm ou yarn

    // npm install --save react react-dom
    // yarn add react react-dom


    Instalando definições de tipo de reação em Typescript 2.0+
    Para compilar seu código usando typescript, adicione / instale arquivos de definição de tipo usando npm ou yarn.

    // npm install --save-dev @types/react @types/react-dom
    // yarn add --dev @types/react @types/react-dom
*/

/*
    ** Adicionando ou alterando a configuração do Typescript ** 

    Usar JSX , uma linguagem que mistura javascript com html / xml, você tem que alterar a configuração do compilador de typescript. No
    o arquivo de configuração de texto digitado do projeto (geralmente denominado tsconfig. json ), você precisará adicionar a opção JSX como:
    
    "compilerOptions": {"jsx": "react"},
    
    Essa opção do compilador basicamente diz ao compilador de texto digitado para traduzir as tags JSX no código para a função javascript
    chamadas.
    Para evitar que o compilador de typescript converta JSX em chamadas de função javascript simples, use
    
    "compilerOptions" : {
        "jsx" : "preserve"
    },

*/


/*
    ** Componentes do React sem estado no TypeScript **

    Os componentes React que são funções puras de seus adereços e não requerem nenhum estado interno podem ser escritos como
    JavaScript funciona em vez de usar a sintaxe de classe padrão, como:

*/

import React from 'react'

const HelloWorld = (props) => (
    <h1>Hello, {props.name}!</h1>
);

// Observe que o nome React. SFC é um alias de React. StatelessComponent Portanto, qualquer um pode ser usado.

   
/*
    ** Componentes sem estado e sem propriedade **
    O componente de reação mais simples sem um estado e sem propriedades pode ser escrito como:
*/

import * as React from 'react';

const Greeter = () => <span>Hello, World!</span>


/*
Esse componente, no entanto, não pode acessar isso . adereços desde o texto datilografado não podem dizer se é um componente de reação. Para acessar seu
adereços, use:

*/
import * as React from 'react';

const Greeter: React.SFC<{}> = props => () => <span>Hello, World!</span>


/*
    Mesmo se o componente não tiver propriedades definidas explicitamente, ele agora pode acessar os adereços. crianças desde tudo
    componentes inerentemente têm filhos.
    Outro bom uso semelhante de componentes sem estado e sem propriedade é na modelagem de página simples. A seguir
    um componente de página simples exemplar , supondo que haja Container , NavTop e NavBottom hipotéticos
    componentes já no projeto:
*/
import * as React from 'react';
const Page: React.SFC<{}> = props => () =>
    <Container>
        <NavTop />
            {props.children}
        <NavBottom />
    </Container>
const LoginPage: React.SFC<{}> = props => () =>
    <Page>
        Login Pass: <input type="password" />
    </Page>