import { Layout } from '@/components/Layout';
import { api } from '@/services/axios';
import { Card, Text } from '@tremor/react';
import Head from 'next/head';
import Image from 'next/image';
import { useQuery } from 'react-query';

interface ICharacter {
  id: number;
  image: string;
  name: string;
}

interface ResponseData {
  data: {
    info: {
      count: number;
      next: string;
      pages: number;
      prev: number | null;
    };
    results: ICharacter;
  };
}

export default function Playground() {
  const { data, error, isFetching } = useQuery('getCharacters', async () => {
    const response = await api.get<ResponseData>('api/character');

    return response?.data.data;
  });

  console.log(data?.results);

  return (
    <>
      <Head>
        <title>API Playground</title>
      </Head>
      <Layout>
        <Card
          maxWidth="max-w-none"
          hFull={false}
          shadow={true}
          decoration=""
          decorationColor="blue"
          marginTop="mt-0"
        >
          <Image alt="ricky-morty-char" src="" />
          <Text>Ricky Marley</Text>
        </Card>
      </Layout>
    </>
  );
}
