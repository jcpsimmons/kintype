import {random} from 'remotion';
import {FC} from 'react';
import {useCurrentFrame} from 'remotion';

const EndCard: FC = () => {
	const repeatArr = 'READ IT NOW,'.repeat(150).split(',');
	const frame = useCurrentFrame();

	return (
		<div className="text-white text-[5rem] text-center flex w-full justify-end mb-32 flex-col font-bold">
			<div
				className="flex flex-row flex-wrap justify-center text-4xl absolute top-0 left-1/2 w-full -translate-x-1/2"
				style={{width: '1280px'}}
			>
				{repeatArr.map((text, idx) => (
					<div
						className={`mx-3 ${
							random(idx + Math.floor(frame / 5)) > 0.98 ? 'text-red-400' : ''
						}`}
						style={{
							visibility:
								random(idx + Math.floor(frame / 20)) > 0.8
									? 'hidden'
									: 'visible',
							transform:
								random(Math.floor(frame / 15) + idx) > 0.5
									? 'scale(-1,1)'
									: 'none',
						}}
					>
						<h2>{text}</h2>
					</div>
				))}
			</div>
			<div>
				<h1 className="font-extrabold">joshcsimmons.com/latest</h1>
			</div>
			<div className="font-extralight text-[3rem] mt-32 border-white border-solid border-2 mx-auto p-5">
				<h2>
					The Blog of
					<br />
					<span className="font-light">Dr. Josh C. Simmons</span>
				</h2>
			</div>
		</div>
	);
};

export default EndCard;
