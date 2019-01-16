import * as React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import './App.css';
import {PhotosList} from './modules/PhotosList/PhotosList';
import store from './store';

const PhotoListContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10px;
`;

class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Carousel Test</h1>
        </header>
          <Provider store={store}>
          <div>
            <PhotoListContainer>
                <PhotosList />
            </PhotoListContainer>
            </div>
          </Provider>
      </div>
    );
  }
}

export default App;
