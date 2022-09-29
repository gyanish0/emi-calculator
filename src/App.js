import { Container } from "@material-ui/core";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div style={{ paddingTop: "20px" }}>
      <Container maxWidth="md">
        <Home />
      </Container>
    </div>
  );
}

export default App;
