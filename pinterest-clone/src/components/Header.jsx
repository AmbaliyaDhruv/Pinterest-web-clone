import React, { useState } from 'react'
// import { Link } from "react-router-dom";
import styled from 'styled-components'
import PinterestIcon from '@mui/icons-material/Pinterest';
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextsmsIcon from '@mui/icons-material/Textsms';
import FaceIcon from '@mui/icons-material/Face';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Header({onSubmit}) {

  const [input,setInput]=useState("");

  const onSubmitevent=(e)=>{
 e.preventDefault();
 onSubmit(input);
 setInput("");
  }
  return (
  <Wrapper>
    <LogoWrapper>

      <IconButton>
      <PinterestIcon/>
      </IconButton>

    </LogoWrapper>
    <A href='/'>
     <HomePageButton>
      Home
    </HomePageButton></A>
    <A href="/"> <FollowingButton>
       Today
    </FollowingButton></A>
   <SearchWrapper>
      <SearchBarWrapper>
        <IconButton>
          <SearchIcon/>
        </IconButton>
        <form>
          <input type="text" value={input} onChange={(e)=>setInput
          (e.target.value)} />
          <button type='submit' onClick={onSubmitevent}></button>
        </form>

      </SearchBarWrapper>
    </SearchWrapper>
    <IconsWrapper>
      <IconButton>
      <NotificationsIcon/>
      </IconButton>

      <IconButton>
        <TextsmsIcon/>
     </IconButton>

        <IconButton>
        <FaceIcon/>
        </IconButton>

        <IconButton>
        <KeyboardArrowDownIcon/>
        </IconButton>

    </IconsWrapper>
  </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding:12px 4px 4px 16px;
  background-color: white;
  color: black;
  position: fixed;
  margin-top:-12px;
 z-index: 1;
  width:99%;
 `

 const LogoWrapper = styled.div`
 .MuiSvgIcon-root{
   color: #e60013;
   font-size: 32px;
   cursor: pointer;
 }
 
 `

 const HomeButton = styled.div`
 display: flex;
 height:48px;
 min-width:123px;
 align-items:center;
 justify-content:center;
 border-radius:20px;
 cursor: pointer;
 `

 const HomePageButton = styled(HomeButton)`
 
 background-color:white;
  text-decoration: none;
   color:black;
   font-weight: 700;

   :hover{
   background-color: #e1e1e1;
 }
 
 `

 const FollowingButton = styled(HomeButton)`

 background-color:white;
  text-decoration: none;
   color:black;
   font-weight: 700;


 :hover{
   background-color: #e1e1e1;
 }
 `

const SearchWrapper = styled.div`
  flex: 1;
  `

  const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius:50px;
  border: none;
  padding-left: 10px;

  form{
    display: flex;
    flex:1;
  }

  form > input{
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px ;
    font-size: 16px;

  }

  form > button{
    display: none;

  }
  input:focus{
    outline: none;

  }
  `

  const IconsWrapper = styled.div`
  margin-left: 10px;
  `

  const A=styled.a`
  text-decoration: none;

  `