import React, { Component } from 'react';
import Grid from './components/Grid';
import Card from './components/Card';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Card>
            Hola desde DominiCODE
          </Card>
        </Grid>
      </div>
    );
  }
}

export default App;
