import { signUser } from "@/client/user";
import { provider_token } from "@/constants/token";
import User from "@/models/user";
import { connectDb } from "@/utils/db";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const providers = [
  Google({
    //@ts-ignore
    clientId: process.env.google_client_id,
    //@ts-ignore
    clientSecret: process.env.google_client_secret,
  }),
];

const callbacks = {
  async session({ session }: any) {
    await connectDb();
    const { email, name } = session.user;
    const userExist = await User.findOne({ email });
    if (userExist) {
      session.user.id = userExist._id;
      return session;
    }
    const user = await User.create({
      email,
      fullName: name,
      password: "created via next auth js",
    });

    session.user.id = user._id;
    signUser({ userId: session.user.id });
    return session;
  },
  async redirect() {
    return `/?signedin=true&providertoken=${provider_token}`;
  },
};

const handler = NextAuth({
  providers,
  callbacks,
});

export { handler as GET, handler as POST };
