import {NextAuthOptions} from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User.model";
import GitHubProvider from "next-auth/providers/github";


export const authOptions : NextAuthOptions = {
    providers : [
        GitHubProvider({
            clientId: process.env.GITHUB_ID? ,
            clientSecret: process.env.GITHUB_SECRET?
          }),
        CredentialsProvider({
            id: "credentials",
            name : "Credentials",
            credentials:{
                email : { label:"Email",type:"text" },
                password : { label: "Password" ,type:"password" }
            },
            async authorize(credentials:any):Promise<any>{
                
                await dbConnect()
                try {
                    
                    const user = await UserModel.findOne({
                        $or:[
                            {email:credentials.email},
                            {username:credentials.identifier}
                        ]
                    })
                    if(!user){
                        throw new Error("User Not Found With This Email Or Username")
                    }

                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

                    if(isPasswordCorrect){
                        console.log(user)
                        return user
                    }
                    else{
                        throw new Error("Incorrect Password!!!")
                    }

                } catch (error:any) {
                    throw new Error(error);
                }

            }
        })        
    ],
    callbacks:{
        async jwt({token , user}){
            if(user){
                token._id=user._id?.toString()
                token.email=user.email;
                token.fullName=user.fullName;
                token.user_type=user.user_type;
                token.pincode=user.pincode;
            }

            return token 
        },
        async session({session , token }){

            if(token){
                session.user._id=token._id?.toString()
                session.user.email=token.email;
                session.user.fullName=token.fullName;
                session.user.user_type=token.user_type;
                session.user.pincode=token.pincode;
            }

            return session
        }
    },
    pages:{
        signIn:"/login",
    },
    session:{
        strategy:"jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
}

