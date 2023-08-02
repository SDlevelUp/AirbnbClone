'use client';

import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import { useCallback, useState } from 'react';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../Inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post('/api/register', data)
            .then(() => {
                registerModal.onClose();
            })
            .catch((error) => {
                toast.error('Ooops...une erreur semble s’être glisée dans le formulaire.')
            })
            .finally(() => {
                setIsLoading(false);
            })
    };

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading
                title='Bienvenue chez Airbnb'
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />

            <Input
                id="name"
                label="Nom"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />

            <Input
                id="password"
                label="Mot de passe"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    );


    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <div className="flex items-center gap-4">
                <hr className="flex-grow border-gray-400" />
                <div className="text-gray-500">ou</div>
                <hr className="flex-grow border-gray-400" />
            </div>
            <Button
                outline
                label="Continuer avec Facebook"
                icon={FaFacebookSquare}
                onClick={() => { }}
            />
            <Button
                outline
                label="Continuer avec Google"
                icon={FcGoogle}
                onClick={() => { }}
            />
            <Button
                outline
                label="Continuer avec une adresse e-mail"
                icon={CiMail}
                onClick={() => { }}
            />
        </div>
    );

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Créer un compte"
            actionLabel="Continuer"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal;
