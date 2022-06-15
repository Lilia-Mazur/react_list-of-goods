import React from 'react';
import './App.css';
import { GoodList } from './components/GoodList';

const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class App extends React.Component {
  state = {
    isVisible: false,
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App container">
        <h1 className="title">Goods</h1>
        {isVisible
          ? <GoodList goodsList={goodsFromServer} />
          : (
            <button
              type="button"
              onClick={() => this.setState({ isVisible: true })}
              className="button is-success"
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
