import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Contact.css";

const Contact = () => {

 const submit=async (e)=>{
  e.preventDefault();
  const formData = new FormData(e.target);

    formData.append("access_key", "01a7015a-d7ae-40a6-a0b1-4acd09f3854b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Form submit successfully")
    }
 }

  return (
    <div className="contact-container">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      ></Box>

      <h1 className="main-head1">Contact Us</h1>
      <h2 className="main-head2">If you have any questions, require further information, or would like to discuss potential collaborations, please feel free to reach out.</h2>
      <div className="form-container">
        <form onSubmit={submit} className="form-data">
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            type="text"
            name="Name"
            autoComplete="off"
            required
            sx={{
              "& .MuiInputLabel-root": {
                color: "rgb(175, 178, 174)",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
              },
            }}
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            type="email"
            name="Email"
            autoComplete="off"
            required
            sx={{
              "& .MuiInputLabel-root": {
                color: "rgb(175, 178, 174)",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
              },
            }}
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="Subject"
            variant="standard"
            type="text"
            name="Subject"
            autoComplete="off"
            required
            sx={{
              "& .MuiInputLabel-root": {
                color: "rgb(175, 178, 174)",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
              },
            }}
          />
          <br />
          <br />
          <div className="text-area-container">
            <textarea
              placeholder="Enter message"
              maxLength="250"
              rows="10"
              cols="50"
              className="custom-text-area"
              name="Message"
              autoComplete="off"
              required
            ></textarea>
          </div>
          <div className="button">
            <button type="submit" className="sub-btn">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
