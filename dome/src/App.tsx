import React from 'react';
import './App.css';
import RouterView from './router/routerview'
import routes from './router/routerconfig'
import {BrowserRouter as Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/index'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Route>
        <RouterView routes={routes.routes}/>
      </Route>
    </Provider>
  );
}

export default App;
