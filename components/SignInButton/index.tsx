import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import * as S from './style';

export function SignInButton() {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <S.SignInButtonStyle type='button'>
      <FaGithub />
      Baianor
      <FiX />
    </S.SignInButtonStyle>
  ) : (
    <S.SignInButtonStyle type='button'>
      <FaGithub />
      Sign in with Github
    </S.SignInButtonStyle>
  );
}
