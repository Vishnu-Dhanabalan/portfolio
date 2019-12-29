import { keyframes } from "styled-components";

export const blinkingEffect = keyframes`
  from, to {
      opacity: 0;
  }
  50% {
      opacity: 1;
  }
`;
