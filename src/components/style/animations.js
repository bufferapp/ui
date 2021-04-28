import { keyframes } from 'styled-components';

export const easeOutQuart = 'cubic-bezier(0.25, 1, 0.5, 1)';

export const stageInCenter = keyframes`
  0% {
    transform: scale(.5);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const stageOutCenter = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(.5);
    opacity: 0;
  }
`;

export const stageInRight = keyframes`
  0% {
    transform: translateX(200px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const stageOutRight = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }

  100% {
    transform: translateX(200px);
    opacity: 0;
  }
`;

export const stageInTop = keyframes`
  0% {
    transform: translateY(-200px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }

  100% {
    transform: scale(1.05) translateY(-10px);
    opacity: 0;
  }
`;
