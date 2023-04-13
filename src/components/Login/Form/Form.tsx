import {FC} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

import {Button} from "../../Button";
import {Input} from "../../Input";

import styles from './Form.module.scss';

const schema = yup.object({
    email: yup.string()
        .email('Email is not valid')
        .required('Email is required'),
    password: yup.string()
        .min(8, 'Password is too short - should be 8 chars minimum')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters')
        .required('Password is required'),
}).required();

type FormData = yup.InferType<typeof schema>;

export const Form: FC = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const onSubmit = handleSubmit((data: FormData) => data);

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <Input {...register("email")} type="email" placeholder="email"/>
            {errors?.email && <p>{errors.email.message}</p>}

            <Input {...register("password")} type="password" placeholder="password"/>
            {errors?.email && <p>{errors.email.message}</p>}

            <Button type="submit">Submit</Button>
        </form>
    )
}
