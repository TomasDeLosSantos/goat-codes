// UTILITIES;
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// STYLES
import "./styles/reset.css"
import "./styles/style.css"

// COMPONENTS
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContext from './components/CartContext';

const theme = extendTheme({
  fonts: {
    heading: "Archivo, sans-serif",
    body: "Archivo, sans-serif"
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  }
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div className="App">
          <CartContext>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer greeting="all games."/>}/>
                <Route path='/game/:id' element={<ItemDetailContainer></ItemDetailContainer>}/>
                <Route path='/category/:category' element={<ItemListContainer></ItemListContainer>}/>
                <Route path='/cart' element={<Cart></Cart>}/>
            </Routes>
          </CartContext>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
