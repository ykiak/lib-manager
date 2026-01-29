"use client"

import PrivateRoute from "@/src/components/auth/PrivateRoute"
import Button from "@/src/components/form/Button"
import { supabase } from "@/src/lib/supabase"
import { useRouter } from "next/navigation"

export default function Dashboard(){
    const router = useRouter()
    const handleLogout = async () => {
        const {error} = await supabase.auth.signOut()
        if(error){
            console.log("Logout Error:", error)
        }
        router.replace("./sign-in")
    }
    return (
        <PrivateRoute redirectRoute="./sign-in">
            <h1>Dashboard</h1>
            <Button type="button" onClick={() => handleLogout()} text="Logout"></Button>
        </PrivateRoute>
    )
}