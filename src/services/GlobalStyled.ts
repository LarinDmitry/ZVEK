import {css} from 'styled-components';

export const welcomeTitleStyles = css`
  font-size: 3rem;
  font-weight: bold;
  color: ${({theme}) => theme.colors.gray000};
  margin-bottom: 1rem;
  background: linear-gradient(to right, rgb(141, 252, 253), rgb(201, 254, 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  animation: glow 2s infinite alternate;

  @keyframes glow {
    0% {
      text-shadow:
        0 0 5px rgb(141, 252, 253),
        0 0 10px rgb(201, 254, 255);
    }
    100% {
      text-shadow:
        0 0 10px rgb(141, 252, 253),
        0 0 20px rgb(201, 254, 255);
    }
  }
`;
