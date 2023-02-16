import { getAuth } from "@clerk/nextjs/server";
function SSR(props) {
    return <>
       <h1>Protected SSR page</h1>
    </>
}

export const getServerSideProps = async ctx => {
    const { userId, getToken } = getAuth(ctx.req)
    const token = getToken()  
    console.log(token)
    if (!userId) {
      // handle user is not logged in.
    }
    return { props: {} }
  }

export default SSR