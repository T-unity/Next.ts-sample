import type { FC } from 'react';
import Link from 'next/link';

const FirstPost: FC = () => {
	return (
    <>
      <h1>Test Post</h1>
      <p>
				<Link href="/">ホームに戻る</Link>
			</p>
    </>
  )
  
};
export default FirstPost;