import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import { OAuthUserConfig } from "next-auth/providers/oauth";

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    } as OAuthUserConfig<any>),
  ],
  async session({ session }: { session: string }) {},
  async signIn({ profile }: { profile: string }) {},
});

export { handler as GET, handler as POST };
