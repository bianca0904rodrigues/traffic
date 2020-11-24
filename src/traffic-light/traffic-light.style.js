import styled from '@emotion/styled'

export const Container = styled.div`
	width: 374px;
	height: 120px;
	border-radius: 60px;
	background: black;
	margin-bottom: 10px;
	padding: 10px;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

export const GreenLamp = styled.div`
	width: 100px;
	height: 100px;
	background: #51CF66;
	border-radius: 50%;
	opacity: ${ props => props.on ? 1 : 0 };
`

export const YellowLamp = styled(GreenLamp)`
	background: #FFD43B;
`

export const RedLamp = styled(GreenLamp)`
	background: #F03E3E;
`