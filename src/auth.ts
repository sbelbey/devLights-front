import NextAuth, { AuthError } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signinResponse } from "./Interfaces/user.interface";
import { login } from "./actions/authActions";

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: { strategy: "jwt" },
    secret: process.env.JWT_SECRET,
    providers: [
        Credentials({
            async authorize(credentials) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };

                try {
                    const result: signinResponse = await login({
                        email,
                        password,
                    });

                    return result.payload;
                } catch (error) {
                    if (error instanceof Error) {
                        throw new AuthError(error.message);
                    } else {
                        throw new AuthError("An unexpected error occurred");
                    }
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = (user as signinResponse["payload"]).firstName;
                token.role = (user as signinResponse["payload"]).role;
                token.cartId = (user as signinResponse["payload"]).cart;
            }
            return token;
        },
        async session({ session, token }) {
            const user = session.user as unknown as {
                userId: string;
                name: string;
                role: string;
                cartId: string;
            };

            user.userId = token.id as string;
            user.name = token.name as string;
            user.role = token.role as string;
            user.cartId = token.cartId as string;

            return session;
        },
    },
});
