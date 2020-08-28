import styled from 'styled-components'

export const FullBody = styled.main`
  background-color: #041924;
  background-image: linear-gradient(
    45deg,
    #041924 0%,
    #01202e 50%,
    #072331 100%
  );
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  .header {
    color: #facd9b;
    font-size: 18px;
    font-weight: bold;
  }
  .headline {
    font-size: 12px;
    text-transform: uppercase;
    opacity: 0.5;
  }
`
