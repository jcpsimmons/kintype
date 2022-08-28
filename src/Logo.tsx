import {Gif} from '@remotion/gif';
import React from 'react';
import sphereGif from './sphere.gif';
import {interpolate, useCurrentFrame} from 'remotion';
import {titleDuration} from './Inputs';

interface Props {
	color?: string;
	scalingFactor: number;
	startFrame: number;
}

const LogoInteral: React.FC<Props> = ({
	color = 'white',
	startFrame,
	scalingFactor,
}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [startFrame, startFrame + 5], [0, 1]);

	const top = interpolate(
		frame,
		[startFrame, startFrame + scalingFactor],
		[0, startFrame * 16],
		{extrapolateRight: 'clamp'}
	);

	return (
		<div
			className="absolute right-0"
			style={{
				filter: `drop-shadow(10px 10px 50px ${color}) drop-shadow(-10px -10px 50px ${color})`,
				top,
				opacity,
			}}
		>
			<Gif src={sphereGif} />
		</div>
	);
};

interface DataObject {
	[index: number]: string;
}

export const Logo: React.FC = () => {
	const colorArr = ['pink', 'white', 'blue'];
	const numberSpheres = 9;
	const scalingFactor = Math.floor(titleDuration / numberSpheres / 1.5);
	const placeholderArr = [...new Array(numberSpheres).fill(0)].map(
		(_n, idx) => idx * scalingFactor
	);
	const dataObject: DataObject = {};

	placeholderArr.forEach((keyframe, idx) => {
		dataObject[keyframe] = colorArr[idx % colorArr.length];
	});

	return (
		<>
			{placeholderArr.map((key, idx) => (
				<LogoInteral
					key={`${key}-${idx}`}
					color={dataObject[key]}
					startFrame={key}
					scalingFactor={scalingFactor}
				/>
			))}
		</>
	);
};
