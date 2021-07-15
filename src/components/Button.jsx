import React from 'react'
import styled from 'styled-components'

const ButtonS = styled.button`
  padding: 15px;
  color: rgba(96, 102, 208, 0.7);
  border-radius: 12px;  
  border: 2px solid rgba(96, 102, 208, 0.7);
  cursor: pointer;
  background: #fff;

  &:hover {
    border: 2px solid #F9A826;
    background: #F9A826;
    color: #fff;
  }
`

const Button = ({children}) => {
  return ( 
    <ButtonS>{children}</ButtonS>
   );
}
 
export default Button; 