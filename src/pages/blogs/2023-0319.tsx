import type { FC } from 'react';
import Link from 'next/link';
import Layout from '@/components/layout';

const CurrentPost: FC = () => {
	return (
    <Layout>
      <h1>Test Post</h1>
      <p>
				<Link href="/">ホームに戻る</Link>
			</p>
    </Layout>
  )

};
export default CurrentPost;
