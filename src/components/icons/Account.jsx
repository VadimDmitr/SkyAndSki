import styled from "styled-components";

const AccountSVG = styled.svg`
	path {
		stroke: ${({ currentPath }) =>
			currentPath === "/" ||
			currentPath === "/login" ||
			currentPath === "/register"
				? "var(--color-secondary)"
				: "var(--color-primary)"};
	}
`;

export const Account = ({ currentPath }) => {
	return (
		<AccountSVG
			currentPath={currentPath}
			width="32"
			height="29"
			viewBox="0 0 32 29"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6.65771 25.4471C6.65771 22.2341 8.91772 19.4972 11.9891 18.9909L12.2658 18.9452C14.7252 18.5398 17.2313 18.5398 19.6908 18.9452L19.9674 18.9909C23.0389 19.4972 25.2989 22.2341 25.2989 25.4471C25.2989 26.8359 24.209 27.9617 22.8647 27.9617H9.09189C7.74753 27.9617 6.65771 26.8359 6.65771 25.4471Z"
				strokeWidth="1.99727"
			/>
			<path
				d="M21.4153 9.23734C21.4153 12.1329 18.9811 14.4802 15.9783 14.4802C12.9755 14.4802 10.5413 12.1329 10.5413 9.23734C10.5413 6.34181 12.9755 3.99452 15.9783 3.99452C18.9811 3.99452 21.4153 6.34181 21.4153 9.23734Z"
				strokeWidth="1.99727"
			/>
		</AccountSVG>
	);
};
