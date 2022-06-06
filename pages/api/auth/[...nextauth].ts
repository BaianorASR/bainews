import { query as Q } from 'faunadb';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import { fauna } from '../../../services/fauna';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  // jwt: {
  //   secret: process.env.JWT_SECRET,
  // },
  callbacks: {
    async signIn({ user }) {
      const { email } = user;

      try {
        await fauna.query(
          Q.If(
            Q.Not(
              Q.Exists(Q.Match(Q.Index('user_by_email'), Q.Casefold(email as string))),
            ),
            Q.Create(Q.Collection('users'), { data: { email } }),
            Q.Get,
          ),
        );
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});
