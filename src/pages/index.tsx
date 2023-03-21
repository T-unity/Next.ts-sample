import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section>
          {/* <h2>最新の記事一覧</h2>
          <p><Link href="/blogs/2023-0319">テスト投稿</Link></p>
          <h2>API</h2>
          <p><Link href="/api/hello">test API</Link></p>
          <button><Link href="/auth">サインアップ</Link></button> */}
        </section>
      </main>
    </>
  )
}
