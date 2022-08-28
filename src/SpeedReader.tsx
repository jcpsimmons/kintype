import {FC} from 'react';
import {useCurrentFrame} from 'remotion';

type Props = {text: string; startFrame: number; endFrame: number};

const SpeedReader: FC<Props> = ({text, startFrame, endFrame}) => {
	const frame = useCurrentFrame();
	const textArr = text.split(' ');
	const durationFrames = endFrame - startFrame;
	const increment = Math.floor(durationFrames / textArr.length);

	return (
		<div className="text-[75px] font-extrabold flex flex-wrap content-center mx-16">
			{/* <h1>{textArr[frame / increment]}</h1> */}
			{textArr.map((word, idx) => (
				<div
					key={`${word}-${idx}`}
					className={`mr-8 leading-snug ${
						idx === Math.floor(frame / increment)
							? 'text-red-400'
							: 'text-white'
					}`}
					style={{
						filter: `blur(${Math.abs(
							(Math.floor(frame / increment) - idx) / 4
						)}px)`,
					}}
				>
					<h1>{word}</h1>
				</div>
			))}
		</div>
	);
};

export default SpeedReader;
