import React from 'react';

import * as S from './styles';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return <S.SubscribeButtonStyled type='button'>Subscribe now</S.SubscribeButtonStyled>;
}
