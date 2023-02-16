import { SignIn, SignInWithMetamaskButton } from "@clerk/nextjs";
function SignInPage(props) {
    return <>
        <div className="cn">
            <SignIn path="/sign-in" afterSignInUrl="/" routing="path" signUpUrl="/sign-up" />
            <SignInWithMetamaskButton />
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