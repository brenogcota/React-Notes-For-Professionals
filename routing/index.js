/*
    Roteamento React
    Exemplo de arquivo Routes.js, seguido pelo uso de Router
    Link no componente
    Coloque um arquivo como o seguinte em seu diretório de nível superior. Ele define quais componentes renderizar para quais
    caminhos

*/
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import New from './containers/new-post';
import Show from './containers/show';

import Index from './containers/home';
import App from './components/app';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="posts/new" component={New} />
        <Route path="posts/:id" component={Show} />
    </Route>
);

/*
Agora, em seu index.js de nível superior, que é seu ponto de entrada para o aplicativo, você só precisa renderizar este roteador
componente assim:
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
// import the routes component we created in routes.js
import routes from './routes';

// entry point
ReactDOM.render(
 <Router history={browserHistory} routes={routes} />
 , document.getElementById('main'));

 /*
Agora é simplesmente uma questão de usar Link em vez de tags <a> em todo o seu aplicativo. Usando o link
comunicar-se com o React Router para alterar a rota do React Router para o link especificado, que por sua vez
renderizar o componente correto conforme definido em routes.js
 */

import React from 'react';
import { Link } from 'react-router';

export default function PostButton(props) {
    return (
    <Link to={`posts/${props.postId}`}>
        <div className="post-button" >
            {props.title}
            <span>{props.tags}</span>
        </div>
    </Link>
    );
}


// React Routing Async

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Index from './containers/home';
import App from './components/app';

//for single Component lazy load use this
const ContactComponent = () => {
    return {
        getComponent: (location, callback)=> {
            require.ensure([], require => {
                callback(null, require('./components/Contact')["default"]);
            }, 'Contact');
        }
    }
};
//for multiple componnets
const groupedComponents = (pageName) => {
    return {
        getComponent: (location, callback)=> {
            require.ensure([], require => {
                switch(pageName){
                    case 'about' :
                        callback(null, require( "./components/about" )["default"]);
                        break ;
                    case 'tos' :
                        callback(null, require( "./components/tos" )["default"]);
                        break ;
                }
            }, "groupedComponents");
        }
    }
};
export default(
    <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="/contact" {...ContactComponent()} />
        <Route path="/about" {...groupedComponents('about')} />
        <Route path="/tos" {...groupedComponents('tos')} />
    </Route>
);