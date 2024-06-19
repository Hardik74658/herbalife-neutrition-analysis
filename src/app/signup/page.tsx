// "use client";
// import React from "react";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { cn } from "@/utils/cn";
// import {
//   IconBrandGithub,
//   IconBrandGoogle,
// } from "@tabler/icons-react";
// import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
// import { GridImages2 } from "@/components/GridImages2";
// import Link from "next/link";
// import { useForm, SubmitHandler } from "react-hook-form"
// import { date } from "zod";

// function page() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm()
//   return (
//     <HeroHighlight className="h-full flex flex-row items-center justify-start w-full px-32 gap-12" containerClassName="h-full py-12 pt-36 ">
//     <GridImages2/>

//     <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8  shadow-input bg-white dark:bg-black">
//       <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
//         Welcome to Neighbourly Connect
//       </h2>
      

//       <form className="my-8" onSubmit={handleSubmit((data)=>console.log(data))}>
//         <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
//           <LabelInputContainer>
//             <Label htmlFor="firstName">First name</Label>
//             <Input id="firstName" placeholder="Tyler" type="text" {...register("firstname")}/>
//           </LabelInputContainer>
//           <LabelInputContainer>
//             <Label htmlFor="lastName">Last name</Label>
//             <Input id="lastName" placeholder="Durden" type="text" {...register("lastname")}/>
//           </LabelInputContainer>
//         </div>
//         <LabelInputContainer className="mb-4">
//           <Label htmlFor="email">Email Address</Label>
//           <Input id="email" placeholder="projectmayhem@fc.com" type="email" {...register("email")}/>
//         </LabelInputContainer>
//         <LabelInputContainer className="mb-4">
//           <Label htmlFor="password">Password</Label>
//           <Input id="password" placeholder="••••••••" type="password" {...register("password")}/>
//         </LabelInputContainer>
//         <LabelInputContainer className="mb-8">
//           <Label htmlFor="confirmpwd">Confirm Password</Label>
//           <Input
//             id="confirmpwd"
//             placeholder="••••••••"
//             type="password"
//             {...register("confirmpwd")}
//           />
//         </LabelInputContainer>
//         <LabelInputContainer className="mb-4">
//           <Label htmlFor="isWorker">User Type</Label>
//           {/* <div className="dark:bg-zinc-800 p-2 rounded-md border-white flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-32 mb-4">
//            */}
//            <div className=" flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-32 mb-4 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
//           file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
//           focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
//            disabled:cursor-not-allowed disabled:opacity-50
//            dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
//            group-hover/input:shadow-none transition duration-400
//            `,">
//           <input  type="radio" name="isWorker" id="isWorker"  value="false" {...register("isWorker")}/>&nbsp;&nbsp;&nbsp;User
//           <input type="radio" name="isWorker" id="isWorker" value="true" {...register("isWorker")}/>&nbsp;&nbsp;&nbsp;Worker
//           </div>
//         </LabelInputContainer>
//         <LabelInputContainer className="mb-4">
//           <Label htmlFor="pincode">Pin Code</Label>
//           <Input id="pincode" placeholder="123456" type="number" {...register("pincode")} />
//         </LabelInputContainer>
      
//         <button
//           className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
//           type="submit"
//         >
//           Sign up &rarr;
//           <BottomGradient />
//         </button>


//         <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        
//         <div className="text-center dark:text-white text-black my-8">
//           Already a User? 
//           <Link href="/login" className=" text-blue-600 mx-2">
//             Login
//           </Link>
//         </div>

//         <div className="flex flex-col space-y-4">
//           <button
//             className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
//             type="submit"
//           >
//             <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
//             <span className="text-neutral-700 dark:text-neutral-300 text-sm">
//               GitHub
//             </span>
//             <BottomGradient />
//           </button>
//           <button
//             className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
//             type="submit"
//           >
//             <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
//             <span className="text-neutral-700 dark:text-neutral-300 text-sm">
//               Google
//             </span>
//             <BottomGradient />
//           </button>
          
//         </div>
//       </form>
//     </div>
//     </HeroHighlight>
    
//   );
// }

// const BottomGradient = () => {
//   return (
//     <>
//       <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
//       <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
//     </>
//   );
// };

// const LabelInputContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div className={cn("flex flex-col space-y-2 w-full", className)}>
//       {children}
//     </div>
//   );
// };

// export default page
"use client"; // Add this line to ensure it's treated as a Client Component
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { GridImages2 } from "@/components/GridImages2";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation"; // Correct import
import { toast } from "react-toastify"; // Import react-toastify
import { delay } from "framer-motion";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmpwd: string;
  isWorker: string;
  pincode: number;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log('Form submitted:', data);
    try {
      const response = await fetch('/api/signup', { // Ensure this URL is correct
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json(); // Parse the JSON response
      
      if (result.status !== 200) {
        const errorText = await result.message;
        throw new Error(errorText);
      }

      console.log('Server response:', result);
      toast.success('Account created successfully!');
      // Redirect to sign-in page
      delay(()=>{router.push('/login');},4000)
    } catch (error:any) {
      console.error('Form submission error:', error);
      toast.error(`Form submission failed: ${error.message}`);
    }
  };

  console.log('Form Errors:', errors); // Debugging

  return (
    <HeroHighlight className="h-full flex flex-row items-center justify-start w-full px-32 gap-12" containerClassName="h-full py-12 pt-36">
      <GridImages2 />
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to Neighbourly Connect
        </h2>
        <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" placeholder="Tyler" type="text" {...register("firstName", { required: true })} />
              {errors.firstName && <p className="text-red-500">First name is required</p>}
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" placeholder="Durden" type="text" {...register("lastName", { required: true })} />
              {errors.lastName && <p className="text-red-500">Last name is required</p>}
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" {...register("email", { required: true })} />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" {...register("password", { required: true })} />
            {errors.password && <p className="text-red-500">Password is required</p>}
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="confirmpwd">Confirm Password</Label>
            <Input id="confirmpwd" placeholder="••••••••" type="password" {...register("confirmpwd", { required: true })} />
            {errors.confirmpwd && <p className="text-red-500">Confirm password is required</p>}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="isWorker">User Type</Label>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-32 mb-4 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm">
              <label>
                <input type="radio"  value="false" {...register("isWorker", { required: true })} />
                &nbsp;&nbsp;&nbsp;User
              </label>
              <label>
                <input type="radio"  value="true" {...register("isWorker", { required: true })} />
                &nbsp;&nbsp;&nbsp;Worker
              </label>
            </div>
            {errors.isWorker && <p className="text-red-500">User type is required</p>}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="pincode">Pin Code</Label>
            <Input id="pincode" placeholder="123456" type="number" {...register("pincode", { required: true })} />
            {errors.pincode && <p className="text-red-500">Pin code is required</p>}
          </LabelInputContainer>
          <button className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]" type="submit">
            Sign up &rarr;
            <BottomGradient />
          </button>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <div className="text-center dark:text-white text-black my-8">
            Already a User? 
            <Link href="/login" className="text-blue-600 mx-2">
              Login
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <button className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]" type="button">
              <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">GitHub</span>
              <BottomGradient />
            </button>
            <button className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]" type="button">
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">Google</span>
              <BottomGradient />
            </button>
          </div>
        </form>
      </div>
    </HeroHighlight>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };
  
  export default Page