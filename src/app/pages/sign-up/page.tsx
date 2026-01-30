"use client"

import Button from "@/src/components/form/Button";
import Input from "@/src/components/form/Input";
import { supabase } from "@/src/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Message from "@/src/components/message/Message";

export default function SignUp() {
    const router = useRouter()
    const [msg, setMsg] = useState("")
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleSignUp = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        const { error } = await supabase.auth.signUp({
            email: user.email,
            password: user.password
        })

        if (!error) {
            setMsg("")
            router.push("/pages/sign-in")
        } else {
            setMsg(error.message)
        }
    }

    return (
        <>
            <h1>Sign Up</h1>
            <p>Let's start by filling out this form:</p>
            <form onSubmit={(e) => handleSignUp(e)}>
                <Input
                    type="email"
                    placeholder="you@example.com"
                    name="email"
                    labelText="What is your email?"
                    onChange={(e) => setUser({ ...user, email: e.target.value})}
                />
                <Input
                    type="password"
                    placeholder="********"
                    name="password"
                    labelText="Enter an 8 digit password"
                    onChange={(e) => setUser({ ...user, password: e.target.value})}
                    minLength={8}
                />
                <Button type="submit" text="Submit" />
            </form>
            <p>Already have an account? <Link href="./sign-in">Sign In</Link></p>
            <Message text={msg} />
        </>
    )
}