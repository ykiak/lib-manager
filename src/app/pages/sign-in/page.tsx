"use client"

import Input from "@/src/components/form/Input";
import Button from "@/src/components/form/Button"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/src/lib/supabase";

export default function SignIn() {
    const router = useRouter()
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
            router.push("/pages/dashboard")
        } else {
            console.log(error)
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
        </>
    )
}