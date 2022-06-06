import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import * as S from './style';

export function SignInButton() {
  const { data: session, status } = useSession();

  return session ? (
    <S.SignInButtonStyle type='button' onClick={() => signOut()}>
      <FaGithub />
      {session.user?.name}
      <FiX />
    </S.SignInButtonStyle>
  ) : (
    <S.SignInButtonStyle type='button' onClick={() => signIn('github')}>
      <FaGithub />
      Sign in with Github
    </S.SignInButtonStyle>
  );
}
