/*
    Comunicação entre Componentes

    Comunicação entre o funcional sem estado
    Componentes
    Neste exemplo, usaremos os módulos Redux e React Redux para lidar com o estado do nosso aplicativo e para
    renderizar novamente os nossos componentes funcionais. E, claro, React e React Dom
    Você pode verificar a demonstração concluída aqui
    No exemplo abaixo, temos três componentes diferentes e um componente conectado


    > UserInputForm : este componente exibe um campo de entrada E quando o valor do campo muda, ele chama
    método inputChange em adereços (que é fornecido pelo componente pai) e se os dados são fornecidos como
    bem, ele exibe isso no campo de entrada.

    > UserDashboard : este componente exibe uma mensagem simples e também aninha o componente UserInputForm , It
    também passa inputChange método para UserInputForm componente, UserInputForm inturn componente marcas
    uso deste método para se comunicar com o componente pai.

    > UserDashboardConnected : este componente apenas envolve o componente UserDashboard usando
    Método de conexão ReactRedux . Isso torna mais fácil para nós gerenciar o estado do componente e atualizar
    o componente quando o estado muda.

    > App : este componente apenas renderiza o componente UserDashboardConnected .

*/

const UserInputForm = (props) => {
    let handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name">Please enter your name</label>
            <br />
            <input type="text" id="name" defaultValue={props.data.name || ''} onChange={props.inputChange } />
        </form>
    )
}
const UserDashboard = (props) => {

    let inputChangeHandler = (event) => {
        props.updateName(event.target.value);
    }
    return(
        <div>
            <h1>Hi { props.user.name || 'User' }</h1>
            <UserInputForm data={props.user} inputChange={inputChangeHandler} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateName: (data) => dispatch( Action.updateName(data) ),
    };
};
const { connect, Provider } = ReactRedux;
const UserDashboardConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDashboard);
const App = (props) => {
    return(
        <div>
            <h1>Communication between Stateless Functional Components</h1>
            <UserDashboardConnected />
        </div>
    )
}
const user = (state={name: 'John'}, action) => {
    switch (action.type) {
        case 'UPDATE_NAME':
        return Object.assign( {}, state, {name: action.payload} );
    default:
        return state;
    }
};

const { createStore } = Redux;
const store = createStore(user);

const Action = {
    updateName: (data) => {
        return { type : 'UPDATE_NAME', payload: data }
    },
}

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('application')
);
                  