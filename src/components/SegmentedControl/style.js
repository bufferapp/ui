import styled from 'styled-components'
import { gray } from '../style/colors';
import { borderRadius } from '../style/borders';

export const Container = styled.div`
  display: flex;
  border: 1px solid ${gray};
  border-radius: ${borderRadius};
`
