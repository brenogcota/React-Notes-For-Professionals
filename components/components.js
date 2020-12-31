/*
    ** Componentes **

    Criando componentes
    Esta é uma extensão do Exemplo Básico:

*/

import React, { Component } from 'react';
import { render } from 'react-dom';

class FirstComponent extends Component {
    render() {
        return (
            <div>
                Hello, {this.props.name}! I am a FirstComponent.
            </div>
        );
    }
}

render(
    <FirstComponent name={ 'User' } />,
    document.getElementById('content')
);

/*
    O exemplo acima é chamado de componente sem estado , pois não contém estado (no sentido React da palavra).
    Nesse caso, algumas pessoas acham preferível usar componentes funcionais sem estado, que são baseados em ES6
    arrow functions.
*/



/*
    ** Componentes funcionais sem estado **

    Em muitas aplicações, existem componentes inteligentes que mantêm o estado, mas renderizam componentes burros que simplesmente recebem
    adereços e retornar HTML como JSX. Os componentes funcionais sem estado são muito mais reutilizáveis e têm um efeito positivo
    impacto de desempenho em seu aplicativo.
    Eles têm 2 características principais:

    1 Quando renderizados, eles recebem um objeto com todos os adereços que foram passados
    2 Eles devem retornar o JSX para ser processado

*/

// Ao usar JSX dentro de um módulo, você deve importar React
import React from 'react';
import PropTypes from 'prop-types';

const FirstComponent = props => (
    <div>
        Hello, {props.name}! I am a FirstComponent.
    </div>
);

// arrow components também podem ter validação de adereços
FirstComponent.propTypes = {
    name: PropTypes.string.isRequired,
}

// // Para usar o FirstComponent em outro arquivo, ele deve ser exposto por meio de uma chamada de exportação:
export default FirstComponent;


/*
    ** Componentes com estado **

    Em contraste com os componentes 'sem estado' mostrados acima, os componentes 'com estado' têm um 
    atualizado com o método setState . O estado deve ser inicializado no construtor antes de ser definido:

*/

import React, { Component } from 'react';
class SecondComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true
        };
        // Isso é para vincular o contexto ao passar onClick como um retorno de chamada
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState((prevState, props) => ({
            toggle: !prevState.toggle
        }));
    }

    render() {
        return (
            <div onClick={this.onClick}>
                Hello, {this.props.name}! I am a SecondComponent.
                <br />
                Toggle is: {this.state.toggle}
            </div>
        );
    }
}

/*
    Estender um componente com PureComponent em vez de Component implementará automaticamente o
    método de ciclo de vida shouldComponentUpdate() com comparação de estado e prop superficial. Isso mantém seu aplicativo
    mais desempenho, reduzindo a quantidade de renderizações desnecessárias que ocorrem. Isso assume que seus componentes são
    'Puro' e sempre renderiza a mesma saída com o mesmo estado e entrada de adereços.
*/



/*
    ** Componentes de ordem superior **
    
    Os componentes de ordem superior (HOC) permitem compartilhar a funcionalidade do componente.
*/

import React, { Component } from 'react';
const PrintHello = ComposedComponent => class extends Component {
    onClick() {
        console.log('hello');
    }

    /* O componente de ordem superior leva outro componente como parâmetro
        e então o renderiza com adereços adicionais */

    render() {
        return <ComposedComponent {...this.props } onClick={this.onClick} />
    }
}

const FirstComponent = props => (
    <div onClick={ props.onClick }>
        Hello, {props.name}! I am a FirstComponent.
    </div>
)
;
const ExtendedComponent = PrintHello(FirstComponent);

/*
    Componentes de ordem superior são usados quando você deseja compartilhar a lógica entre vários componentes, independentemente de como
    diferentes eles interpretam.
*/



/*
    ** Componentes de aninhamento **

    Muito do poder do ReactJS é sua capacidade de permitir o aninhamento de componentes. Pegue os dois componentes a seguir:
*/

var React = require('react');
var createReactClass = require('create-react-class');
var CommentList = reactCreateClass({
    render: function() {
        return (
            <div className="commentList">
                Hello, world! I am a CommentList.
            </div>
        );
    }
});
var CommentForm = reactCreateClass({
    render: function() {
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
});

// Você pode aninhar e referir-se a esses componentes na definição de um componente diferente:
var React = require('react');
var createReactClass = require('create-react-class');

var CommentBox = reactCreateClass({
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />  //Que foi definido acima e pode ser reutilizado
                <CommentForm /> // O mesmo aqui
            </div>
        );
    }
});

// O aninhamento posterior pode ser feito de três maneiras, cada uma com seus próprios locais para serem usados.
