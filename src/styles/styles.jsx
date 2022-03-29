import styled, {createGlobalStyle} from 'styled-components';

import nuvem from '../imgs/nuvem.png';

const gutter = 16;
const blurCard = 10;
const borderRadius = 10;

export const GlobalStyle = createGlobalStyle`
	html,
	body {
		height: 100vh;
	}
	body {
		background: #f7f7f7;
		font-family: 'Raleway';
		font-weight: 200;
	}
`

export const Wrapper = styled.section`
	padding: 1.5em 1.5em 3.5em;
	background: rgba( 255, 255, 255, 0.25 );
	box-shadow: 0 ${gutter/2}px ${gutter/2}px 0 rgb(0 0 0 / 17%);
	backdrop-filter: blur( ${blurCard} );
	-webkit-backdrop-filter: blur( ${blurCard} );
	border-radius: ${borderRadius};
	border: 1px solid rgba( 255, 255, 255, 0.18 );
	width: 80vw;
	height: 90vh;
	margin-top: 5vh;

	@media(min-width: 680px) {
		width: 20vw;
	}
`;

export const BackgroundAppContainer = styled.div`
	position: fixed;
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

	.image {
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		position: absolute;
		left: 0;
		top: 0;
		display: none;
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
	margin: 0 auto;
	align-items: baseline;
	margin-top: 10px;
	flex-direction: row;
	align-items: center;

	> div {
		min-width: 50%;
	}
`;

export const GraphicContainer = styled.div``;

export const MinMaxContainer = styled.div`
	font-size: 1.2rem;
`;

export const DiarySliderConteiner = styled.div`
	margin: 5px 0 0px;

	.slick-slider {
		display: flex;
		align-items: center;
	}
`;

export const Title = styled.h3`
	font-size: 0.8em;
	text-align: left;
	display: inline-block;
	margin-top: ${gutter*2}px;
	width: 100%;
	margin-bottom: ${gutter*2}px;
	position: relative;

	span {
		display: inline-block;
		width: 70%;
		height: 1px;
		background: #000;
		position: absolute;
		top: 10px;
		opacity: 0.2;
		left: 70px;
	}
`;

export const TooltipCustom = styled.div`
    background-color: #0000008f;
    color: #000;
    background: rgba( 0,0,0,0.45 );
    -webkit-backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    -webkit-animation: AnimationName 30s ease infinite;
    -moz-animation: AnimationName 30s ease infinite;
    -webkit-animation: AnimationName 30s ease infinite;
    animation: AnimationName 30s ease infinite;
    background-image: url(${nuvem});
    background-size: 222%;
    min-height: 105px;
    display: flex;
    flex-direction: column;
    justify-content: center;

  @-webkit-keyframes AnimationName {
    0%{background-position:24% 20%}
    50%{background-position:77% 20%}
    100%{background-position:24% 20%}
  }
  @-moz-keyframes AnimationName {
      0%{background-position:24% 20%}
      50%{background-position:77% 20%}
      100%{background-position:24% 20%}
  }
  @keyframes AnimationName {
      0%{background-position:24% 20%}
      50%{background-position:77% 20%}
      100%{background-position:24% 20%}
  }
`;

export const Loader = styled.span`
    width: 20px;
    height: 20px;
    display: block;
    margin: 80px auto 20px;
    border-radius: 50%;
    background: rgba(243, 129, 67, 0.5);
    border: 5px solid #FFF;
    position: relative;
    box-sizing: border-box;

    &::before {
		content: '';  
		position: absolute;
		left: 50%;
		bottom: 10px;
		transform: translateX(-50%);
		width: 8px;
		height: 80px;
		border: 2px solid #FFF;
		border-bottom: none;
		background: #FFF;
		color: rgba(243, 129, 67, 0.5);
		border-radius: 50px 50px 0 0;
		box-shadow: 0px 0px  inset;
		box-sizing: border-box;
		animation: animloader 6s linear infinite;
    }

	@keyframes animloader {
		0% {
			box-shadow: 0px 0px  inset;
		}
		100% {
			box-shadow: 0px -80px  inset;
		}
	}
`;
