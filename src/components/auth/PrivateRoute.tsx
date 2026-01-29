import { supabase } from "@/src/lib/supabase";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function PrivateRoute(props: {
    children: ReactNode,
    redirectRoute: string
}) {
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession()
                if (!session) {
                    router.replace(props.redirectRoute)
                    return
                }
                setLoading(false)
            } catch (error) {
                console.log("Error verifying authentication: ", error)
                router.replace(props.redirectRoute)
            }
        }
        checkAuth()
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    return props.children
}