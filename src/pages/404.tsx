import { Layout } from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import ErroImage from '../assets/error.svg';

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>404 Error</title>
      </Head>
      <Layout>
        <div className="w-full flex items-center justify-center mt-32">
          <Image alt="404-logo" width={500} height={500} src={ErroImage} />
        </div>
      </Layout>
    </>
  );
}
