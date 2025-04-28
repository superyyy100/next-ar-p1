import { SignUpForm } from '@/components/singup-form'

const Page = () => {
    //const [state, action, pending] = useActionState(signup, undefined)

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <SignUpForm />
            </div>
        </div>
    )
}

export default Page
