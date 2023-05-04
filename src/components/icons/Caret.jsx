import styled from "styled-components";

const CaretSVG = styled.svg`
	path {
		stroke: ${({ currentPath }) =>
			currentPath === "/" ||
			currentPath === "/login" ||
			currentPath === "/register"
				? "var(--color-secondary)"
				: "var(--color-primary)"};
	}
`;

export const Caret = ({ currentPath }) => {
	return (
		<CaretSVG
			currentPath={currentPath}
			width="10"
			height="10"
			viewBox="0 0 10 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_631_323)">
				<path
					d="M9.375 3.125L5 6.875L0.625 3.125"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_631_323">
					<rect width="10" height="10" fill="white" />
				</clipPath>
			</defs>
		</CaretSVG>
	);
};
