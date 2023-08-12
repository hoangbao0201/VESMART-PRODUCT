// import NextAuth, { NextAuthOptions } from "next-auth";
// // import { PrismaAdapter } from "@next-auth/prisma-adapter";
// // import prisma from "@/lib/prisma";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions: NextAuthOptions = {
//     // adapter: PrismaAdapter(prisma),
//     providers: [
//         GoogleProvider({
//             clientId: process.env.NEXT_PUBLIC_GOOGLE_ID as string,
//             clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET as string,
//         }),
//     ],
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import NextAuth, { Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET as string,
        }),
        FacebookProvider({
            clientId: process.env.NEXT_PUBLIC_FACEBOOK_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET as string,
        }),
    ],

    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET as string,
});