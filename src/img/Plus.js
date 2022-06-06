import Svg, { Rect, Line, Path } from "react-native-svg";

export function PlusIcon(props) {
	return (
		<Svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
		>
			<Rect
				x="0.5"
				y="0.5"
				width="31"
				height="31"
				rx="7"
				stroke="white"
			/>
			<Line x1="16.25" y1="7.5" x2="16.25" y2="23.75" stroke="white" />
			<Line x1="24.25" y1="16.25" x2="8" y2="16.25" stroke="white" />
		</Svg>
	);
}
