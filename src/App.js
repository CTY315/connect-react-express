import "./App.css";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function App() {
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    try {
      // console.log("before axios.post");
      const paymentIntent = await axios.post("http://localhost:5000/test", {
        name,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form onSubmit={handleSubmit} action="POST">
          <Form.Group style={{ textAlign: "start" }}>
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              name="name"
              type="text"
              placeholder="Name"
              value={name}
            />
          </Form.Group>

          <br />
          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Form>
      </header>
    </div>
  );
}

export default App;
