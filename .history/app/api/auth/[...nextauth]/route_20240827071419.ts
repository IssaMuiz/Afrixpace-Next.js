import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import { OAuthUserConfig } from "next-auth/providers/oauth";
import { SessionOptions } from "next-auth";
import userData from "@/models/user";
import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    } as OAuthUserConfig<any>),
  ],
  async session({
    session,
    token,
    user,
  }: {
    session: Session;
    token: JWT;
    user: User;
  }): Promise<Session> {
    const sessionUser = await userData.findOne({
      email: session.user.email,
    });
    session.user.id = sessionUser._id.toString();
    return session;
  },
  async signIn({ profile }: { profile: string | any }) {
    const userExists = await userData.findOne({ email: profile.email });

    if (!userExists) {
      User.create({
        email: profile.email,
        username: profile.username.replace(" ", "").toLowerCase(),
        image: profile.image,
      });
    }
  },
});

export { handler as GET, handler as POST };
