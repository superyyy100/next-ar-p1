
import { createClient } from '@/lib/supabase/server'
import { LogoutButton } from './logout-button'

const LoggedIn = async () => {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <>
            <LogoutButton/>
        </>
    )
}

export default LoggedIn
