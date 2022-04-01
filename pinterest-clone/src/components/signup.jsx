
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PinterestIcon from "@mui/icons-material/Pinterest";
import styled from "styled-components";
import './signup.css'
import { useState } from "react";
import axios from "axios"
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
background-color: rgb(222, 188, 188);
border-radius: 20px;
height: 38px;
margin-top: 5px;
color:black;
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
};

export function Signup() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData]=useState({
    name:'',
    email:"",
    password:'',
    username:"",
    mobile:"",
    description:""
})


const change=(e)=>{
  const {id,value}=e.target 

  setFormData({
      ...formData,
      [id]:value,
  })
  
}

const submit=(e)=>{
  e.preventDefault()
  axios.post('https://marriott-bonvoy.herokuapp.com/Register',formData).then(()=>{
      alert("details updated")
      setFormData({
        name:'',
        email:"",
        password:'',
        username:"",
        mobile:"",
        description:""
      
      })
  })

}

  return (
    <div>
      <Button  className='signup' onClick={handleOpen}>SignUp</Button>
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
            <h1 id="heading">Welcome to Pinterst</h1>
            <p id="sub-heading">Find new ideas to try</p>

            <div id="myForm">
              <form  onSubmit={submit} className="register">
              <input
                  className="margin_txt"
                  id="name"
                  type="text"
                  placeholder="Name"
                  onChange={change}
                />
                <input
                  className="margin_txt"
                  id="email"
                  type="email"
                  placeholder="Email"
                  onChange={change}
                />
                <input
                  className="margin_txt"
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  onChange={change}
                />
                <input type="text"  id="username" placeholder="Username" className="margin_txt" onChange={change} />
                <input
                  className="margin_txt"
                  id="mobile"
                  type="number"
                  placeholder="Mobile"
                  onChange={change}
                />
                <input
                  className="margin_txt"
                  id="description"
                  type="text"
                  placeholder="Description"
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
    Already a member? <a href="#">Log in</a>
  </p>
</div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
