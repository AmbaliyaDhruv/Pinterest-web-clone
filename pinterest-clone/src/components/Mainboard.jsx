import React from 'react'
import styled from "styled-components"
import Pin from './Pin'
function Mainboard({pins}) {
  return (
    <Wrapper>
        <Container>
            {pins.map((pin,i)=>{
                let {urls}=pin;
               return <Pin key={i} urls={urls}/>
            })}
    
        </Container>
    </Wrapper>
  )
}

export default Mainboard

const Wrapper = styled.div`
background-color: white;
display: flex;
justify-content: center;
width: 100%;
height: 100%;
margin-top: 10px;
`

const Container = styled.div`
column-count: 5;
column-gap: 5px;
margin: 0 auto;
height: 100%;
max-width: 1260px;

background-color: white;`