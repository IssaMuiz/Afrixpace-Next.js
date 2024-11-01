import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import { OAuthUserConfig } from "next-auth/providers/oauth";
import User from "@/models/user";
import Session from "@/data";
const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    } as OAuthUserConfig<any>),
  ],
  async session({ session }: { session: Session }) {
    const sessionUser = await User.findOne({
      email: session.user.email,
    });
    session.user.id = sessionUser._id.toString();
    return session;
  },
  async signIn({ profile }: { profile: string | any }) {
    const userExists = await User.findOne({ email: profile.email });

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
