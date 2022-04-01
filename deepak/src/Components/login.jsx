import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import axios from 'axios'

import Modal from "@mui/material/Modal";
import PinterestIcon from "@mui/icons-material/Pinterest";
import styled from "styled-components";
import './signup.css'

const Logo = styled.div`
  .MuiSvgIcon-root {
    color: #e60013;
    font-size: 50px;
    cursor: pointer;
    border: 1px solid transparent;
    margin-left: 45%;
  }
`;

const Button= styled.button`
background-color: rgb(246, 9, 9);
border-radius: 20px;
height: 38px;
color:white;
margin-top: 5px;
`

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "transparent",
  boxShadow: 50,
  p: 4,
  borderRadius: 7,
};

export function Login() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData]=useState({
    username:"",
    password:'',
    
   
})
console.log(formData)

const change=(e)=>{
  const {id,value}=e.target 

  setFormData({
      ...formData,
      [id]:value,
  })
  
}

const submit=(e)=>{
  e.preventDefault()
  axios.post('https://marriott-bonvoy.herokuapp.com/login',formData).then(()=>{
     
      alert("Login Successful")
      setFormData({
        username:"",
        password:'',
        
      
      })
  })

}

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
    <Button  onClick={handleOpen} className='login'>Login</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div id="main-register-div">
            <Logo>
              <PinterestIcon />
            </Logo>
            <h1 id="heading">Welcome to Pinterest</h1>
            <div id="myForm">
              <form onSubmit={submit} className="register">
                <input
                  className="margin_txt"
                  id="email"
                  type="text
                  "
                  placeholder="Email"
                  onChange={change}
                />
                <input
                  className="margin_txt"
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={change}
                />
                <input type='submit' className="margin_txt1"/>
              </form>
              <div className="Btn">
                <p className="below-btn">
                  By continuing, you agree to Pinterest's <br />{" "}
                  <strong>Terms of Service</strong> and acknowledge you've read
                  our <br /> <strong>Privacy Policy</strong>
                </p>
                <p>
                  Not on Pinterest yet?<a href="#">Sign up</a>
                </p>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
