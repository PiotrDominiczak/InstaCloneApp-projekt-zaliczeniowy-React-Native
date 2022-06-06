import Svg, { Path } from "react-native-svg";

export function SendIcon(props) {
	return (
		<Svg
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M31.708.292a1 1 0 01.22 1.08L20.29 30.466a1.5 1.5 0 01-2.658.248l-6.356-9.99-9.99-6.356a1.5 1.5 0 01.248-2.66L30.628.074a1 1 0 011.08.22V.292zM13.272 20.14l5.522 8.676L28.26 5.152 13.272 20.14zM26.846 3.738L3.182 13.204l8.678 5.52L26.848 3.738h-.002z"
				fill="#fff"
			/>
		</Svg>
	);
}
