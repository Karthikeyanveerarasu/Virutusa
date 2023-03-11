import { Button, Card } from "react-bootstrap";
import AppBar from "./AppBar";
import Banner from "./Banner";

import Data from "./Data";
import "./styles.css";
export default function Main() {
  return (
    <>
      <div>
        <AppBar />
      </div>
      <div class="container">
        <Banner />
      </div>
      <div class="container">
        <div class="container my-5 text-center">
          <h5
            style={{
              letterSpacing: "2px",
              fontWeight: "bold",
              fontSize: "1.5em"
            }}
          >
            {" "}
            Upcoming Events{" "}
          </h5>
        </div>
        {Data.map((e) => {
          return (
            <Card
              className="text-center my-4"
              style={{ width: "80%", margin: "auto" }}
            >
              <Card.Header>
                {" "}
                <h5>
                  <strong style={{ letterSpacing: "2px" }}>{e.title}</strong>
                </h5>{" "}
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <h6 style={{ fontWeight: "bold" }}> {e.institute}</h6>{" "}
                </Card.Title>
                <Card.Text>
                  <p> {e.content} </p>
                </Card.Text>
                <Button variant="primary" style={{ letterSpacing: "2px" }}>
                  Register
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                {e.days} |{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="20"
                    fill="currentColor"
                    class="bi bi-currency-rupee"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                  </svg>
                </span>
                {e.amount}
              </Card.Footer>
            </Card>
          );
        })}
      </div>
    </>
  );
}
