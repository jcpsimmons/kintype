import {AbsoluteFill, Sequence, useCurrentFrame} from 'remotion';
import EndCard from './EndCard';
import {
	endCardDuration,
	excerptDuration,
	postInfo,
	titleDuration,
} from './Inputs';
import {Logo} from './Logo';
import NewBlog from './NewBlog';
import SpeedReader from './SpeedReader';

import {Title} from './Title';

export const MyComposition = () => {
	const {title, excerpt} = postInfo;
	const titleArr = title.split(' ');

	const frame = useCurrentFrame();

	return (
		<AbsoluteFill className="bg-black flex items-center p-3 justify-center">
			{/* intro screen */}
			<Sequence from={0} durationInFrames={titleDuration}>
				<Title titleArr={titleArr} /> <Logo />
			</Sequence>
			{/* new blog bg */}
			<Sequence from={0} durationInFrames={titleDuration + excerptDuration}>
				<NewBlog isLighter={frame >= titleDuration} />
			</Sequence>
			{/* excerpt */}
			<Sequence from={titleDuration} durationInFrames={excerptDuration}>
				<SpeedReader
					text={excerpt}
					startFrame={titleDuration}
					endFrame={titleDuration + excerptDuration}
				/>
			</Sequence>
			{/* website ad card */}
			<Sequence
				from={excerptDuration + titleDuration}
				durationInFrames={endCardDuration}
			>
				<EndCard />
			</Sequence>
		</AbsoluteFill>
	);
};
