
import { createClient } from '@/lib/supabase/server'
import { LogoutButton } from './logout-button'
import Link from 'next/link'
import { Button } from './ui/button'

const LoggedIn = async () => {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()

    if (error) {
        return null
    }

    return (
        <>
            <LogoutButton />
        </>
    )
}

export default LoggedIn
