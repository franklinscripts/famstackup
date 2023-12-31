import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';

if(!process.env.NEXTAUTH_SECRET){
    throw new Error(
        "Please provide process.env.NEXTAUTH_SECRET environment variable"
    );
}

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            id: "credentials",
            credentials: {
                email: {label:"email", type:"text"},
                password: { label:"password", type: "password"},
            },
            async  authorize(credentials) {
                if(
                    credentials?.email !== "admin@example.com" ||
                    credentials.password !== "@password123"
                ){
                    throw new Error("Invalid email or Password");

                }
                return{
                    email: "admin@example.com",
                    name:"Admin",
                    id: "test-id",
                };
                
            },

        }),
    ],
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: "/login",
        // signUp: "../../components/RegisterModal.tsx"
    }
})