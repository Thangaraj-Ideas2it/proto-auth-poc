import { SignUp } from "@clerk/nextjs";
function SignUpContine() {
    return <>
      
      <SignUp path="/sign-up" afterSignUpUrl="/" routing="path" signInUrl="/sign-in" />
    </>
}

export default SignUpContine