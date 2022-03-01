import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import MovieList from "./MovieList"
import Navbar from "./Navbar";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styled/Global';
import { lightTheme, darkTheme } from './components/styled/Theme.styled';
import {  useState } from "react";




function App() {

  const[theme, setTheme] = useState(darkTheme);



  const handleTheme = () =>{
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
  }

  return (

    <Router>
      <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Navbar themeChange={handleTheme}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movieslist/:pge_no">
              <MovieList/>
          </Route>
          <Route exact path="/movie/:id">
            <MovieDetails/>
          </Route>

        </Switch>
        </ThemeProvider>  
      </div>
    </Router>
    
  );
}

export default App;
