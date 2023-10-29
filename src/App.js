import { Provider } from 'react-redux';
import { store } from './store';
import ThreeScene from 'components/three-scene';

function App() {
  return (
    <Provider store={store}>
      <ThreeScene />
    </Provider>
  );
}

export default App;
