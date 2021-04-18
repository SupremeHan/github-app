import './App.css';
import Repos from './components/Repos.jsx'
import Navbar from './components/Navbar';
import Search from './components/Search';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
//Redux
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#025451'
    },
    background: {
      default: '#0E0E10',
      paper: '#1F1F23'
    },
    text: {
      primary: '#dee2e6'
    }
  },
  typography: {
    h1: {
      fontSize: '3.2rem'
    },
    h2: {
      fontSize: '1.7rem'
    },  
    h3: {
      fontSize: '1.2rem'
    },
    h4: {
      fontSize: '1.5rem'
    },
    body1: {
      fontSize: '0.9rem'
    }
  }
})

function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router>
          <Navbar/>
            <Switch>
              <Route exact path="/" component={Search}/>
              <Route exact path="/user-repo/:id" component={Repos}/>
            </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
