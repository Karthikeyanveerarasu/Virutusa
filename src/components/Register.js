import { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const navigate = useNavigate();
  const [email, SetEmail] = useState("");
  const [password, SetPass] = useState("");
  function register(e) {
    e.preventDefault();
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regex = /[^((0-9)|(a-z)|(A-Z)|\s)]/g;
    let num = /[0-9]/;
    console.log(email);
    if (email === "" || password === "") {
      toast.error("Fill all the data", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    } else if (!res.test(email)) {
      toast.error("Enter a valid Email !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    } else if (password.length < 8) {
      toast.error("Password must greater than 8 character", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    } else if (!num.test(password)) {
      toast.error("Password must contain atleast one number", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    } else if (!regex.test(password)) {
      toast.error("Password must contain atleast one special character", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }
  }
  return (
    <div class="App">
      <div>
        <ToastContainer />
        <div class="card" style={{ width: "300px", margin: "auto" }}>
          <div class="card-body">
            <div>
              <h5 class="card-title text-center" style={{ fontSize: "25px" }}>
                <strong>REGISTER</strong>
              </h5>
              <div class="margin"></div>
            </div>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3 my-4"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Password"
              className="mb-3 my-4"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={password}
                onChange={(e) => SetPass(e.target.value)}
              />
            </FloatingLabel>
            <div class="text-center">
              <button class="btn btn_login btn-lg px-4 my-3" onClick={register}>
                Register
              </button>
            </div>
            <div class="text-center">
              Already a user ? &nbsp;
              <a
                href="#"
                style={{ letterSpacing: "1px" }}
                onClick={() => navigate("/")}
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
