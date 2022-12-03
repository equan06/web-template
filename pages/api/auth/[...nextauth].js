import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                // await db call to verify credentials
                console.log(credentials);

                const user = { id: 1, name: "e", email: "test" };
                if (user) return user;
                return null;
            }
        })
    ],
    callbacks: {
        async jwt({ token }) {
          token.userRole = "admin";
          return token;
        },
      },
};

export default NextAuth(authOptions);