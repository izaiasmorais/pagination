import { Layout } from '@/components/Layout';
import { MenuTable } from '@/components/dashboard/MenuTable';
import { Subscriptions } from '@/components/dashboard/Subscriptions';
import { Summmary } from '@/components/dashboard/Summary';
import { ColGrid } from '@tremor/react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>EZDASH</title>
      </Head>
      <main className="w-full min-h-screen">
        <Layout>
          <Summmary />

          <div className="grid grid-cols-3 p-4 gap-4">
            <div className="col-start-1 col-end-3">
              <MenuTable />
            </div>
            <div className="ml-3">
              <Subscriptions />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
