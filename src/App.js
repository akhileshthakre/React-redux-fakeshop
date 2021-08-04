import './App.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductLisiting from './components/ProductListing';
// import ProductComponent from './components/ProductComponent';
import ProductDetails from './components/ProdutDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
        <Route path="/" exact component={ProductLisiting}/>
        <Route path="/product/:productId" exact component={ProductDetails} />
        <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
