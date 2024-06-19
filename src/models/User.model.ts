import { match } from "assert";
import { User } from "lucide-react";
import mongoose , {Schema ,Document}  from "mongoose";
import { boolean } from "zod";



export interface User extends Document {
    fullname:string;
    avatar:string;
    password:   string;
    email:string;
    isWorker:Boolean;
    pincode:number;
    // verifyCode:string;
    // verifyCodeExpiry:Date;
    // isVeified:boolean;
}

const UserSchema:Schema<User> = new Schema({
    fullname:{
        type:String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20,
    },
    avatar:{
        type : String,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true,"Password is required"],
        trim: true,
        minlength: 6,
    },
    email:{
        type:String,
        required: [true,"Email is required"],
        unique: true,
        lowercase: true,
        match: [/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,"Please Enter Valid Email Address"]
    },
    isWorker:  {
        type:Boolean,
        required:true
    },
    pincode:{
        type:Number,
        required:true,
        minlength: 6,
        maxlength: 6,
    },
    // verifyCode: {
    //     type:String,
    //     required:true,
    // },
    // verifyCodeExpiry:{
    //     type:Date,
    //     required:true,
    // },
    // isVeified:{
    //     type:Boolean,
    //     required:true,
    //     default:false
    // }
},{timestamps:true})


export interface Employer extends Document {
    employer_id : User["_id"];
}

const EmployerSchema:Schema<Employer> = new Schema({
    employer_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

export interface Worker extends Document {
    worker_id : User["_id"];
    rating:string;
    contact_email:string;
    contact_phone:Number;
}

const WorkerSchema:Schema<Worker> = new Schema({
    worker_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    rating:{
        type : String,
        required: true,
        enum:[1,2,3,4,5],
        min:[1,"Rating Must Be Greater Than 1 and Less Than 5"],
        max:[5,"Rating Must Be Greater Than 1 and Less Than 5"],
    },
    contact_email:{
        type:String,
        required:true,
        unique: true,
        lowercase: true,
        match: [/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,"Please Enter Valid Email Address"]      
    },
    contact_phone:{
        type:Number,
        required:true,
        unique: true,
        minlength: 10,
        maxlength: 10,
    },
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User",UserSchema));

export default UserModel