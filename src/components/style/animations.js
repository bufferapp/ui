import { keyframes } from 'styled-components';

export const easeOutQuart = 'cubic-bezier(0.25, 1, 0.5, 1)';

export const stageInAnimation = keyframes`
  0% {
    transform: scale(.5);
    opacity: .5;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const stageOutAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(.5);
    opacity: .5;
  }
`;
