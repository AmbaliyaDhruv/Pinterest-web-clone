import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PinterestIcon from "@mui/icons-material/Pinterest";
import styled from "styled-components";
const Logo = styled.div`
  .MuiSvgIcon-root {
    color: #e60013;
    font-size: 50px;
    cursor: pointer;
    border: 1px solid transparent;
    margin-left: 45%;
  }
`;

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

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
              <form className="register">
                <input
                  className="margin_txt"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="margin_txt"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </form>
              <div className="Btn">
                <button className="btn1" type="submit">
                  Login
                </button>
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
