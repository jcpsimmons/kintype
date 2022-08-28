import {random, useCurrentFrame} from 'remotion';
import React from 'react';

interface Props {
	titleArr: string[];
}

export const Title: React.FC<Props> = ({titleArr}) => {
	const frame = useCurrentFrame();
	const xWeave = (word: string) =>
		Math.floor(random(word + Math.floor(frame / 5)) * 10);

	const animationNumber = Math.round(frame / 3);
	const partialArray = titleArr.slice(0, animationNumber);

	return (
		<div className="flex flex-col justify-center h-full z-50">
			<div className="text-[160px] font-extrabold leading-tighter flex flex-col my-10 text-white">
				{partialArray.map((word) => (
					<div
						key={word}
						className="h-[150px] drop-shadow-[0_0_20px_rgba(255,255,255,.5)]"
						style={{
							transform: `translateX(${xWeave(word)}px)`,
						}}
					>
						{word}
					</div>
				))}
			</div>
		</div>
	);
};
