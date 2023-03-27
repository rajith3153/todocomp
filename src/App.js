import "./App.css";
import TodoLayout from "./components/Todoform";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar  from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" style={{ marginBottom: "20px" }}>
        <Container>
          <Navbar.Brand className="mx-auto">
            What's the plan for today ??
          </Navbar.Brand>
        </Container>
      </Navbar>
      <TodoLayout />
    </div>
  );
}

export default App;
