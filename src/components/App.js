import React,{useState} from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/theme';
import Header from './ui/Header';
import Footer from  './ui/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex= {selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route exact path='/' component={() => <div style={{height:"1000px"}}>Home</div>} />
          <Route exact path='/services' component={() => <div>services</div>} />
          <Route
            exact
            path='/customsoftware'
            component={() => <div>customsoftware</div>}
          />
          <Route
            exact
            path='/mobileapps'
            component={() => <div>mobileapps</div>}
          />
          <Route exact path='/websites' component={() => <div>websites</div>} />
          <Route
            exact
            path='/revolution'
            component={() => <div>revolutionm</div>}
          />
          <Route exact path='/about' component={() => <div>about</div>} />
          <Route exact path='/contact' component={() => <div>contact</div>} />
          <Route exact path='/estimate' component={() => <div>estimate</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex= {selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
