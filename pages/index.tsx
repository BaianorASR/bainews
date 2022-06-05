import { GetServerSideProps, GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';

import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import * as S from './home.styles';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  console.log(product);

  return (
    <S.contentContainer>
      <S.hero>
        <span>👏 Hey, welcome</span>
        <h1>
          News about <br />
          the <span>React</span> World
        </h1>
        <p>
          Get access to all the publications <br />
          <span>for {product.amount} month</span>
        </p>
        <SubscribeButton priceId={product.priceId} />
      </S.hero>
      <Image
        width={600}
        height={600}
        layout='fixed'
        src='/images/mulher.svg'
        alt='Imagem de uma mulher mexendo no notebook'
      />
    </S.contentContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1L7QPNHC09huyq8xO6ArmbI3');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format((price.unit_amount as number) / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
