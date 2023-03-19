import type { FC } from 'react';
import Link from 'next/link';
import OutputFC from '@/components/layout';

const CurrentPost: FC = () => {
	return (
    <OutputFC>
      <h1>Test Post</h1>
      <p>
				<Link href="/">ホームに戻る</Link>
			</p>
    </OutputFC>
  )

};
export default CurrentPost;
