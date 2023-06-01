import styled, { keyframes } from 'styled-components'
import { grayLight, gray, grayDarker } from '../style/colors'

export const LoaderStyled = styled.div``

// Create the keyframes
const pulseTop = keyframes`
  0%, 60%{
    fill: transparent;
  }
  70% {
    fill: ${grayLight};
  }
  80% {
    fill: ${gray};
  }
  90% {
    fill: ${grayDarker};
  } 
  100% {
    fill: transparent;
  }
`

const pulseMiddle = keyframes`
0%, 30% {
  fill: transparent;
}
40% {
  fill: ${grayLight};
}
50% {
  fill: ${gray};
}
60%, 90% {
  fill: ${grayDarker};
} 
100% {
  fill: transparent;
}
`

const pulseBottom = keyframes`
0%, 100% {
  fill: transparent;
}
10% {
  fill: ${grayLight};
}
20% {
  fill: ${gray};
} 
30%, 90% {
  fill: ${grayDarker};
}`

export const Top = styled.path`
  animation: ${pulseTop} 1s ease-in-out infinite;
`

export const Middle = styled.path`
  animation: ${pulseMiddle} 1s ease-in-out infinite;
`

export const Bottom = styled.path`
  animation: ${pulseBottom} 1s ease-in-out infinite;
`
