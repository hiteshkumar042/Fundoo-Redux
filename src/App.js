import './App.css';
import Router from './Router/Router';
import store from './redux/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <Router/>
    </Provider>
  );
}

export default App;
