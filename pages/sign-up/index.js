import { SignUp } from "@clerk/nextjs";
function SignInPage(props) {
    return <>
        <div className="cn">
        <SignUp path="/sign-up" afterSignUpUrl="/" routing="path" signInUrl="/sign-in" />
        </div>
        <style jsx>
            {
                `
                .cn {width: 100%; height: 100%; display: flex; justify-content: center; padding-top: 80px; align-items: center;}
                
                `
            }
        </style>
    </>
}

export default SignInPage