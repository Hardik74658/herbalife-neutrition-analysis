import {z} from 'zod';

export const signUpSchema = z.object({
    firstName:z.string().min(2,"First Name must be atleast 2 Characters"),
    lastName:z.string().min(2,"Last Name must be atleast 2 Characters"),
    email:z.string().email({message:"Invalid Email Address"}),
    password:z.string().min(8,"Password must be atleast 8 Characters"),
    confirmPassword:z.string().min(8,"Password must be atleast 8 Characters"),
    pincode:z.string().length(6)
})