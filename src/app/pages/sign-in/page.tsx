"use client"

import Input from "@/src/components/form/Input";
import Button from "@/src/components/form/Button"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/src/lib/supabase";
import Link from "next/link";
import Message from "@/src/components/message/Message"

export default function SignIn() {
    const router = useRouter()
    const [msg, setMsg] = useState("")
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleSignIn = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        const { error } = await supabase.auth.signInWithPassword({
            email: user.email,
            password: user.password
        })

        if (!error) {
            setMsg("")
            router.push("/pages/dashboard")
        } else {
            setMsg(error.message)
        }
    }

    return (
        <>
            <h1>Sign In</h1>
            <form onSubmit={(e) => handleSignIn(e)}>
                <Input
                    type="email"
                    placeholder="you@example.com"
                    name="email"
                    labelText="Email"
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <Input
                    type="password"
                    placeholder="********"
                    name="password"
                    labelText="Password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    minLength={8}
                />
                <Button type="submit" text="Submit" />
            </form>
            <p>Do not have an account? <Link href="./sign-up">Sign Up</Link></p>
            <Message text={msg}/>
        </>
    )
}