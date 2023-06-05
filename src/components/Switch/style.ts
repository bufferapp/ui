import styled from 'styled-components'
import { blue, white, gray, blueLighter } from '../style/colors'

export const Container = styled.div`
  display: flex;
`

/** needs to be label for switch to work properly */
export const Wrapper = styled.label`
  display: flex;
  margin-left: 8px;
  justify-content: center;
  align-items: center;
`

/** switch round button */
export const Span = styled.span`
  position: relative;
  cursor: pointer;
  display: inline-block;
  width: 32px;
  height: 16px;
  background-color: ${gray};
  border-radius: 20px;
  transition: all 0.3s;
  &::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 100px;
    background-color: ${white};
    top: 1px;
    left: 1px;
    transition: all 0.3s;
  }
`

/** input with special states */
export const Input = styled.input`
  position: absolute;
  pointer-events: none;
  width: 32px;
  height: 16px;
  margin-left: 3px;
  opacity: 0;

  &:checked + ${Span} {
    background: ${blue};
    &::after {
      content: '';
      display: block;
      border-radius: 100px;
      width: 14px;
      height: 14px;
      margin-left: 16px;
      transition: 0.2s;
    }
  }

  &:focus + ${Span} {
    box-shadow: 0px 0px 0px 2px ${blueLighter};
    outline: none;
    transition-duration: 0.1s;
    transition-timing-function: ease-in;
  }

  &:disabled + ${Span} {
    cursor: not-allowed;
    filter: grayscale(100%);
    opacity: 0.6;

    &:after {
      box-shadow: none;
    }
  }
`
