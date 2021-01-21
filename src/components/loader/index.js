import React from 'react'
import styled, { keyframes } from 'styled-components'

const loaderKeyFrame = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoaderRing = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #888888;
    border-color: #888888 transparent #888888 transparent;
    animation: ${loaderKeyFrame} 1.2s linear infinite;
  }
`

const Loader = () => <LoaderRing/>

export default Loader