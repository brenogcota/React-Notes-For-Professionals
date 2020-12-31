/*
    ** Props em Reação ** 

    Introdução
    props são usados para passar dados e métodos de um componente pai para um componente filho.
    Coisas interessantes sobre adereços

        1 Eles são imutáveis.
        2 Eles nos permitem criar componentes reutilizáveis.


*/
class Parent extends React.Component{
    doSomething(){
        console.log("Parent component");
    }

    render() {
        return <div>
                    <Child
                        text="This is the child number 1"
                        title="Title 1"
                        onClick={this.doSomething} 
                    />
                    <Child
                        text="This is the child number 2"
                        title="Title 2"
                        onClick={this.doSomething} 
                    />
                </div>
    }
}

class Child extends React.Component{
    render() {

    return <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.text}</h2>
            </div>
    }
}


/*
    propTypes permite que você especifique quais props seus componentes precisam e o tipo que eles devem ser. Seu componente
    funcionará sem definir propTypes , mas é uma boa prática defini-los, pois isso tornará seu componente mais
    legível, atua como documentação para outros desenvolvedores que estão lendo seu componente e, durante o desenvolvimento,
    O React irá avisá-lo se você tentar definir um suporte que seja de um tipo diferente da definição que você definiu para ele.
    Alguns primitivos propTypes e comumente utilizáveis propTypes são -

    optionalArray: React.PropTypes.array,
    optionalBool: React.PropTypes.bool,
    optionalFunc: React.PropTypes.func,
    optionalNumber: React.PropTypes.number,
    optionalObject: React.PropTypes.object,
    optionalString: React.PropTypes.string,
    optionalSymbol: React.PropTypes.symbol

    Se você anexar isRequired a qualquer propType, então esse prop deve ser fornecido ao criar a instância desse
    componente. Se você não fornecer os required propTypes, a instância do componente não poderá ser criada.

*/
//  ES5
var MyClass = React.createClass({
    propTypes: {
        randomObject: React.PropTypes.object,
        callback: React.PropTypes.func.isRequired,
    }
}

//  ES6
class MyClass extends React.Component {}
MyClass.propTypes = {
    randomObject: React.PropTypes.object,
    callback: React.PropTypes.func.isRequired,
};

// ES7
class MyClass extends React.Component {
    static propTypes = {
        randomObject: React.PropTypes.object,
        callback: React.PropTypes.func.isRequired,
    };
}

/*
    Validação de adereços mais complexos

    Da mesma forma, PropTypes permite que você especifique uma validação mais complexa
*/
//Validando um objeto
randomObject: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    text: React.PropTypes.string,
}).isRequired,
   
//Validando em uma série de objetos
arrayOfObjects: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    text: React.PropTypes.string,
})).isRequired,
   

/*
    ** Props **

    Os props são uma forma de passar informações para um componente React, eles podem ter qualquer tipo, incluindo funções -
    às vezes referido como callbacks.
    Em JSX, os props são passados com a sintaxe do atributo

    <ID do usuário do MeuComponente = {123} />
    Dentro da definição para o ID do usuário MyComponent agora estará acessível a partir do objeto props

    render() {
        return (
            <span>The user's ID is {this.props.userID}</span>
        )
    }

*/

// É importante definir todos os props , seus tipos e, quando aplicável, seus valores padrão:
MyComponent.propTypes = {
    someObject: React.PropTypes.object,
    userID: React.PropTypes.number.isRequired,
    title: React.PropTypes.string
};

MyComponent.defaultProps = {
    someObject: {},
    title: 'My Default Title'
}

/*
    Neste exemplo, o prop someObject é opcional, mas o prop userID é obrigatório. Se você não fornecer o ID do usuário para
    MyComponent , em tempo de execução, o mecanismo React mostrará um console avisando que a prop necessária não era
    forneceu. Porém, cuidado, este aviso só é mostrado na versão de desenvolvimento da biblioteca React, o
    a versão de produção não registrará nenhum aviso.

*/
   
// Usar defaultProps permite que você simplifique
const { title = 'My Default Title' } = this.props;
console.log(title);

// para
console.log(this.props.title);

/*
    É também uma proteção para o uso de array de objetos e funções . Se você não fornecer um adereço padrão para um objeto, o
    o seguinte irá gerar um erro se o prop não for aprovado:
*/
if (this.props.someObject.someKey)

/*
    No exemplo acima, this.props.someObject é indefinido e, portanto, a verificação de someKey lançará um erro e
    o código vai quebrar. Com o uso de defaultProps, você pode usar com segurança a verificação acima.

*/



/*
    ** Estados do componente - Interface de usuário dinâmica **

    Suponha que desejamos ter o seguinte comportamento - Temos um título (digamos, elemento h3) e, ao clicar nele, queremos
    para se tornar uma caixa de entrada para que possamos modificar o nome do título. React torna isso altamente simples e intuitivo usando
    estados do componente e instruções if else. (Explicação do código abaixo)
*/

var Button = ReactBootstrap.Button;
var Form = ReactBootstrap.Form;
var FormGroup = ReactBootstrap.FormGroup;
var FormControl = ReactBootstrap.FormControl;

var Comment = reactCreateClass({
    getInitialState: function() {
        return {show: false, newTitle: ''};
    },
    handleTitleSubmit: function() {
        // código para lidar com o envio da caixa de entrada - por exemplo, emita uma solicitação ajax para alterar o nome em
        // base de dados

    },
    handleTitleChange: function(e) {
        // código para alterar o nome na caixa de entrada do formulário. newTitle é inicializado como string vazia. Nós precisamos
        // atualize-o com a string atualmente inserida pelo usuário no formulário

        this.setState({newTitle: e.target.value});
    },
    changeComponent: function() {
        // isso alterna a variável show que é usada para IU dinâmica
        this.setState({show: !this.state.show});
    },
    render: function() {
        var clickableTitle;
        if(this.state.show) {
            clickableTitle = `<Form inline onSubmit={this.handleTitleSubmit}>
                                <FormGroup controlId="formInlineTitle">
                                    <FormControl type="text" onChange={this.handleTitleChange}>
                                </FormGroup>
                            </Form>;`
        } else {
            clickabletitle = `<div>
                                <Button bsStyle="link" onClick={this.changeComponent}>
                                    <h3> Default Text </h3>
                                </Button>
                            </div>;`
        }

        return (
            <div className="comment">
                {clickableTitle}
            </div>
        );
    }
});

ReactDOM.render(
    <Comment />, document.getElementById('content')
);

/*
    A parte principal do código é a variável clickableTitle . Com base na exibição da variável de estado , pode ser um
    Elemento de formulário ou um elemento de botão. React permite aninhamento de componentes.
    Portanto, podemos adicionar um elemento {clickableTitle} na função de renderização. Ele procura a variável clickableTitle. Com base no
    valor 'this.state.show', ele exibe o elemento correspondente.

*/
