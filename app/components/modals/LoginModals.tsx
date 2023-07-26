'use client';
// import { FcGoogle } from 'react-icons/fc';
// import { useRouter } from "next/navigation";

import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form";

const LoginModal = () => {

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        },
    });
    return (
        <div>

        </div>
    )
}

export default LoginModal