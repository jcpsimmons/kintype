import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import {endCardDuration, excerptDuration, fps, titleDuration} from './Inputs';
import './style.css';

export const RemotionVideo: React.FC = () => {
	const durationInFrames = titleDuration + endCardDuration + excerptDuration;

	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={durationInFrames}
				fps={fps}
				width={1080}
				height={1920}
			/>
		</>
	);
};
