import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Box } from "@mui/material";
import LoginDataContextProvider from "./context/loginContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailView from "./components/details/DetailView";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LoginDataContextProvider>
          <div className="App">
            <Header />
            <Box>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<DetailView />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </Box>
          </div>
        </LoginDataContextProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
