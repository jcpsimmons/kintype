import React from 'react';

type Props = {isLighter: boolean};

const NewBlog = ({isLighter}: Props) => {
	return (
		<div
			className={`text-white absolute transform -rotate-90 -right-16 top-[1500px] whitespace-nowrap w-96 ${
				isLighter ? 'opacity-10' : 'opacity-25'
			} blur-md`}
		>
			<h1 className="font-bold text-[20rem]">New Blog.</h1>
		</div>
	);
};

export default NewBlog;
