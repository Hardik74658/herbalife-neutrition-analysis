import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User.model";
import bcrypt from "bcryptjs"


export async function POST(request: Request){
    await dbConnect()

    try {
        const {email,password,isWorker} = await request.json()

        const existingUserWithEmail = await UserModel.findOne({email})

        if(!existingUserWithEmail){
            return Response.json({
                status:400,
                message:"User Does Not  exists with This email",
                success:false
            })
        }else{
            const isPasswordCorrect = await bcrypt.compare(password,existingUserWithEmail.password);
            
            
            if(isPasswordCorrect){
                console.log("User Saved Successfully " , existingUserWithEmail)
                return Response.json({
                    status:200,
                    message:"Logged In Succesfully",
                    success:true
                })
            }
            else{
                return Response.json({
                    status:400,
                    message:"Invalid Password!!",
                    success:false
                })
            }
        }




    } catch (error) {
        console.error("Error Registering User : ",error)
        return Response.json({
            status:500,
            message:"Error While Sigining in",
            success:false
        })
    }

}
