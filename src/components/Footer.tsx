import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
           <p>created by<span> Tal Mamistvalov </span> | &copy; All rights reserved</p> 
        </Container>
    )
}

export default Footer

const Container= styled.footer`
width: 100%;
height: 100%;
flex: 0.05;
background-color: #333;
align-items: center;
text-align: center;
justify-content: center;
color: #0ccda1;
span{
    color:#fff;
}

`