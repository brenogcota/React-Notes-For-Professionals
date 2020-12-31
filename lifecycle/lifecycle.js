/*
    Ciclo de vida do componente React
    Os métodos de ciclo de vida devem ser usados para executar o código e interagir com o seu componente em diferentes pontos do
    vida dos componentes. Esses métodos são baseados na montagem, atualização e desmontagem de um componente.
    
    Criação de componente
    Quando um componente React é criado, várias funções são chamadas:
    Se você estiver usando o React. createClass (ES5), 5 funções definidas pelo usuário são chamadas
    Se você estiver usando a classe Component extends React. Componente (ES6), 3 funções definidas pelo usuário são chamadas
    
*/

/*
    getDefaultProps () (ES5 apenas)

    Este é o primeiro método chamado.
    Os valores prop retornados por esta função serão usados como padrões se não forem definidos quando o componente for
    instanciado.
    No exemplo a seguir, this.props.name será padronizado para Bob, se não for especificado de outra forma:

*/
getDefaultProps() {
    return {
        initialCount: 0,
        name: 'Bob'
    };
}

/*
    getInitialState () (somente ES5)

    Este é o segundo método chamado.
    O valor de retorno de getInitialState () define o estado inicial do componente React. A estrutura do React irá
    chame esta função e atribua o valor de retorno a ela . estado .
    No exemplo a seguir, this.state.count será inicializada com o valor this.props.initialCount :
*/
getInitialState() {
    return {
        count : this.props.initialCount
    };
}

/*
    componentWillMount () (ES5 e ES6)

    Este é o terceiro método chamado.
    Esta função pode ser usada para fazer alterações finais no componente antes que ele seja adicionado ao DOM.
*/
componentWillMount() {
    
}

/*
    render() (ES5 e ES6)

    Este é o quarto método chamado.
    A função render() deve ser uma função pura do estado e adereços do componente. Ele retorna um único elemento
    que representa o componente durante o processo de renderização e deve ser uma representação de um nativo
    Componente DOM (por exemplo, <p /> ) ou um componente composto. Se nada deve ser processado, ele pode retornar nulo ou
    indefinido .
    Esta função será chamada novamente após qualquer alteração nos adereços ou estado do componente.
*/
render() {
    return (
        <div>
            Hello, {this.props.name}!
        </div>
    );
}

/*
    componentDidMount () (ES5 e ES6)

    Este é o quinto método chamado.
    O componente foi montado e agora você pode acessar os nós DOM do componente, por exemplo, por meio de refs .
    Este método deve ser usado para:
    Preparando cronômetros
    Buscando dados
    Adicionar ouvintes de eventos
    Manipulando elementos DOM

*/
componentDidMount() {

}

/*
    Sintaxe ES6

    Se o componente for definido usando a sintaxe de classe ES6, as funções getDefaultProps () e getInitialState ()
    não pode ser usado.

    Em vez disso, declaramos nosso defaultProps como uma propriedade estática na classe e declaramos a forma do estado e o estado inicial
    no construtor de nossa classe. Ambos são definidos na instância da classe no momento da construção, antes de qualquer
    outra função de ciclo de vida do React é chamada.
    O exemplo a seguir demonstra essa abordagem alternativa:

*/
class MyReactClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: this.props.initialCount
        };
    }
    
    upCount() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div>
                Hello, {this.props.name}!<br />
                You clicked the button {this.state.count} times.<br />
                <button onClick={this.upCount}>Click here!</button>
            </div>
        );
    }
}

MyReactClass.defaultProps = {
    name: 'Bob',
    initialCount: 0
};

