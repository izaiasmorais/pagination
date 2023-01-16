import { InvoicesTable } from '@/components/invoices/InvoicesTable';
import { Layout } from '@/components/Layout';
import Head from 'next/head';

export default function Invoices() {
  return (
    <>
      <Head>
        <title>Contas</title>
      </Head>
      <Layout>
        <InvoicesTable />
      </Layout>
    </>
  );
}
