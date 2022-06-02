import Image from 'next/image';
import React from 'react';

import { SubscribeButton } from '../components/SubscribeButton';
import * as S from './home.styles';

export default function Home() {
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
          <span>for $9.90 month</span>
        </p>
        <SubscribeButton />
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
