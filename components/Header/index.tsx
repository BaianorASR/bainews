import React from 'react';

import * as S from './styles';

export function Header() {
  return (
    <S.Header>
      <S.Content>
        <h1>BaiNews</h1>
        <nav>
          <a href='#id'>Home</a>
          <a href='#id'>Posts</a>
        </nav>
      </S.Content>
    </S.Header>
  );
}
