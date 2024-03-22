import { signUser } from "@/client/user"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export const useAuthRedirect = (session:any)=>{
    const navigate = useRouter()
    useEffect(()=>{
        if(session){
            console.log(session)
           signUser({userId:session.user.id})
           navigate.replace('/')
        }
    },[session])
}