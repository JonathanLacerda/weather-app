import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100vh;
  }
  body {
    background: #f7f7f7;
    font-family: 'Quicksand';
  }
`

export const Wrapper = styled.section`
  padding: 1.5em 1.5em 3.5em;
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 5px 0 rgb(0 0 0 / 17%);
  backdrop-filter: blur( 10px );
  -webkit-backdrop-filter: blur( 10px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  @media(min-width: 680px) {

  padding: 4em;
    flex-direction: column;
    position: relative;
  }
`;

export const backgroundApp = styled.div`
  position: fixed;
  padding: 4em;
  width: 100%;
  height: 100%;
  background: linear-gradient(327deg, #f38143, #377898, #f38143);
  background-size: 600% 600%;

  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;

  @-webkit-keyframes AnimationName {
    0%{background-position:24% 0%}
    50%{background-position:77% 100%}
    100%{background-position:24% 0%}
  }
  @-moz-keyframes AnimationName {
      0%{background-position:24% 0%}
      50%{background-position:77% 100%}
      100%{background-position:24% 0%}
  }
  @keyframes AnimationName {
      0%{background-position:24% 0%}
      50%{background-position:77% 100%}
      100%{background-position:24% 0%}
  }
`;

export const VideoBackground = styled.div`
  position: fixed;
  height: 100vh;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;   
  }
`;

export const WindHumContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 150px;
  margin: 0 auto;
  align-items: baseline;
  margin-top: 10px;
`;

export const GraphicContainer = styled.div`
  margin: 16px 0 8px;
`;

export const MinMaxContainer = styled.div`

`;

