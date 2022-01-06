import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {
  return (
    <Router>
      <div className="App">
      <div className="container">
      <Navbar/>
      </div>
    <Switch>
       <div className="container">
         <div className="content">
            <Route exact path="/">
               <Home/>
            </Route>
          </div>
          <Route path="/create">
               <Create/>
          </Route>
          <Route  path="/blogs/:id">
               <BlogDetails/>
          </Route>
         </div>
         <Route path="*">
               <NotFound/>
          </Route>
    </Switch> 
    </div>
    </Router>
    
  );
}

export default App;
