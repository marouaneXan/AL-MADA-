import Products from "./components/Products/Products";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import ProductDetails from "./components/Products/ProductDetails";
import AddProduct from "./components/Products/AddProduct";
import UpdateProduct from "./components/Products/UpdateProduct";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product_id" element={<ProductDetails />} />
            <Route path="/add_product" element={<AddProduct />} />
            <Route path="/update_product/:id" element={<UpdateProduct />} />
          </Routes>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
