import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const addContact = async (event) => {
    event.preventDefault();
    const docRef = await addDoc(
      collection(db, "contact"),
      {
        name,
        phone,
        email,
        text,
    },
    setName(""),
    setPhone(""),
    setEmail(""),
    setText("")
    );
    toast('Your Message Send SuccessFully!')
  };
  return (
    <>
      <div className="contact_bg">
        <div className="container" id="Contact">
        
          <h2 className="text-center mb-4">Contact Us</h2>
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <form action="#" method="post">
                <input
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <br />
                <input
                  className="form-control"
                  name="phone"
                  placeholder="Phone"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
                <br />
                <input
                  className="form-control"
                  name="email"
                  placeholder="E-mail"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <br />
                <textarea
                  className="form-control"
                  name="text"
                  placeholder="How can we help you?"
                  style={{ height: 150 }}
                  defaultValue={""}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
                <br />
                <button className="btn btn-primary" onClick={addContact}>
                  Submit
                </button>
                <br />
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
