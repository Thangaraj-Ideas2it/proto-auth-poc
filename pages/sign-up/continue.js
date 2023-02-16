import { SignUp } from "@clerk/nextjs";
function SignUpContine() {
    return <>
      <h1>Continue</h1>
      <SignUp path="/sign-up" afterSignUpUrl="/" routing="path" signInUrl="/sign-in" />
    </>
}

export default SignUpContine