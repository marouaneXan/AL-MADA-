import Products from "./components/Products/Products";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

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
          </Routes>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
