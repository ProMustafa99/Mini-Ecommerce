import { CartProvider } from './context/CartContext';
import Main from './components/Main';

function App() {
  return (
    <CartProvider>
      <Main />
    </CartProvider>
  );
}

export default App;
