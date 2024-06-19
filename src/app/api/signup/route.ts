import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User.model";
import bcrypt from "bcryptjs"


export async function POST(request: Request){
    await dbConnect()

    try {
        const {firstName,lastName,email,password,isWorker,pincode} = await request.json()
        

        

        const existingUserWithEmail = await UserModel.findOne({email})

        if(existingUserWithEmail){
            return Response.json({
                status:400,
                message:"User already exists with email",
                success:false
            })
        }else{
            const hashedPassword = await bcrypt.hash(password,10)
            const newUser = new UserModel({
                fullname:firstName+" "+lastName,
                password:hashedPassword,
                email,
                isWorker:isWorker,
                pincode
            })
            const savedUser = await newUser.save()

            if(savedUser){
                console.log("User Saved Successfully " , savedUser)
                return Response.json({
                    status:200,
                    message:"User Registered Successfully",
                    success:true
                })
            }
        }




    } catch (error) {
        console.error("Error Registering User : ",error)
        return Response.json({
            status:500,
            message:"Error registering User",
            success:false
        })
    }

}
