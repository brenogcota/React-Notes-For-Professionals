/*
    ** Estado em reação **
    Estado Básico
    O estado dos componentes React é essencial para gerenciar e comunicar dados em seu aplicativo. É representado como um
    Objeto JavaScript e tem escopo de nível de componente , pode ser considerado como os dados privados de seu componente.
    No exemplo abaixo, estamos definindo algum estado inicial na função do construtor de nosso componente e make
    uso dele na função de renderização .
*/

class ExampleComponent extends React.Component {
    constructor(props){
        super(props);

        // Configurando nosso estado inicial
        this.state = {
            greeting: 'Hiya Buddy!'
        };
    }

    render() {

        // Podemos acessar a propriedade de saudação por meio de this.state
        return(
            <div>{this.state.greeting}</div>
        );
    }
}


/*
    ** Antipadrão comum **

    Você não deve salvar props no estado. É considerado um antipadrão. Por exemplo:
*/
export default class MyComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            url: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            url: this.props.url + '/days=?' + e.target.value
        });
    }

    componentWillMount() {
        this.setState({url: this.props.url});
    }

    render() {
        return (
            <div>
                <input defaultValue={2} onChange={this.onChange} />
                URL: {this.state.url}
            </div>
        )
    }
}

/*
    O URL da propriedade é salvo no estado e depois modificado. Em vez disso, escolha salvar as alterações em um estado e, em seguida, crie
    o caminho completo usando estado e props :
*/
export default class MyComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            days: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            days: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input defaultValue={2} onChange={this.onChange} />
                URL: {this.props.url + '/days?=' + this.state.days}
            </div>
        )
    }
}
   


/*
    Isso ocorre porque em um aplicativo React queremos ter uma única fonte de verdade - ou seja, todos os dados são de responsabilidade de
    um único componente e apenas um componente. É responsabilidade deste componente armazenar os dados dentro
    seu estado e distribuir os dados para outros componentes por meio de adereços.
    
    No primeiro exemplo, a classe MyComponent e seu pai mantêm 'url' em seu estado. Se nós atualizar state.url em MyComponent, essas alterações não são refletidas no pai. Perdemos nossa única fonte de
    verdade, e se torna cada vez mais difícil rastrear o fluxo de dados por meio de nosso aplicativo. Compare isso com o
    segundo exemplo - o url é mantido apenas no estado do componente pai e utilizado como um suporte em
    MyComponent - portanto, mantemos uma única fonte de verdade.
*/


/*
    ** setState() **

    A principal maneira de fazer atualizações de IU em seus aplicativos React é por meio de uma chamada à função setState () .
    Esta função irá realizar uma fusão superficial entre o novo estado que você forneceu e o estado anterior, e irá
    acionar uma nova renderização de seu componente e todos os descendentes.

    Parâmetros
        1 updater: pode ser um objeto com vários pares de valores-chave que devem ser mesclados no estado ou um
        função que retorna tal objeto.
        2 callback ( opcional ) : uma função que será executada após setState () ter sido executado com sucesso.
        Devido ao fato de que as chamadas para setState () não são garantidas pelo React como atômicas, às vezes pode ser
        útil se você deseja realizar alguma ação depois de ter certeza de que setState () foi executado
        com sucesso.

    O método setState aceita um argumento atualizador que pode ser um objeto com vários pares chave-valor
    que deve ser mesclado com o estado, ou uma função que retorna tal objeto calculado a partir de prevState e
    props.



    Usando setState () com um objeto como atualizador
    //
    // Um exemplo de componente de estilo ES6, atualizando o estado com um simples clique de botão.
    // Também demonstra onde o estado pode ser definido diretamente e onde setState deve ser usado.
    //
*/

class Greeting extends React.Component {
    constructor(props) {
        super(props);

        this.click = this.click.bind(this);
        // Configure o estado inicial (APENAS ACEITO NO CONSTRUTOR)
        this.state = {
            greeting: 'Hello!'
        };
    }

    click(e) {
        this.setState({
            greeting: 'Hello World!'
        });
    }
    render() {
        return(
            <div>
                <p>{this.state.greeting}</p>
                <button onClick={this.click}>Click me</button>
            </div>
        );
    }

}


/*
    Usando setState () com uma função como atualizador
    //
    // Isso é mais frequentemente usado quando você deseja verificar ou fazer uso
    // do estado anterior antes de atualizar quaisquer valores.
    //
*/
this.setState(function(previousState, currentProps) {
    return {
        counter: previousState.counter + 1
    };
});

//  Isso pode ser mais seguro do que usar um argumento de objeto em que várias chamadas para setState () são usadas, pois várias chamadas podem
//  ser agrupados pelo React e executados de uma vez, e é a abordagem preferida ao usar os props atuais para definir Estado.

this.setState({ counter: this.state.counter + 1 });
this.setState({ counter: this.state.counter + 1 });
this.setState({ counter: this.state.counter + 1 });



/*
    Essas chamadas podem ser agrupadas pelo React usando Object. assign () , resultando no contador sendo incrementado
    por 1 em vez de 3.
    A abordagem funcional também pode ser usada para mover a lógica de configuração de estado para fora dos componentes. Isso permite
    isolamento e reutilização da lógica de estado.
    // Fora da classe do componente, potencialmente em outro arquivo / módulo
*/
function incrementCounter(previousState, currentProps) {
    return {
        counter: previousState.counter + 1
    };
}

this.setState(incrementCounter);
   
   
// Chamar setState () com um objeto e uma função de retorno de chamada
//
// 'Hi There' será registrado no console após a conclusão de setState

this.setState({ name: 'John Doe' }, console.log('Hi there'));