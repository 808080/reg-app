import styled from 'styled-components';

export const WarnWrapper = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	background-color: #0000004d;
	z-index: 10;
	.warn__dialog {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #fff;
		border-radius: 12px;
		width: 340px;
		padding: 30px;
		max-height: 90%;
		overflow-y: auto;
		text-align: center;
	}
	.warn__text {
		margin-bottom: 30px;
		font-size: 18px;
	}
`;