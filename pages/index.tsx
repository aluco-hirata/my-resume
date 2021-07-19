import Head from 'next/head';
import Link from 'next/link';
import { auth } from '../firebase/firebase';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { logout } from '../src/features/userSlice';
import Layout from '../src/components/Layout';

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  const signOut = async () => {
    await auth.signOut();
    dispatch(logout());

    router.push('/login');
  };

  return (
    <>
      <Head>
        <title>ヒラタの履歴書</title>
      </Head>

      <div className="p-top">
        <Layout>
          <div className="content-wrap">
            <div className="left">
              <div className="left-inner">
                <span className="head">Welcome!</span>
                <h1 className="title">こちらでは、私の履歴書と職務経歴書がご確認いただけます。</h1>
                <button className="button button-white" onClick={signOut}>
                  Logout
                </button>
              </div>
            </div>

            <div className="right">
              <div className="right-inner">
                <div className="link">
                  <Link href="/resume">
                    <a className="link">履歴書はこちら</a>
                  </Link>
                  <Link href="/cv">
                    <a className="link">職務経歴書はこちら</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}
