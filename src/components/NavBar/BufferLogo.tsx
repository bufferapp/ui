import React from 'react'
import styled from 'styled-components'

const StlyedBufferLogo = styled.div`
  width: 64px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BufferLogo = () => (
  <StlyedBufferLogo>
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 4.71874L9 1.08887L15.75 4.71874L9 8.28887L2.25 4.71874ZM4.41963 7.87503L9.00001 10.2026L13.6286 7.87503L15.7862 8.96123L9.00001 12.375L2.28617 8.96123L4.41963 7.87503ZM4.38347 11.925L9 14.4917L13.5924 11.925L15.75 13.1167L9 16.875L2.25 13.1167L4.38347 11.925Z"
        fill="#231F20"
      />
    </svg>
  </StlyedBufferLogo>
)

export default BufferLogo
