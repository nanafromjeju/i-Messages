import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes />
      </Router>
    </ChakraProvider>
  );
}

export default App;
