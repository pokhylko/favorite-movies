import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";

import {Google} from "../../components/Login/Google";
import {Container} from "../../components/Container";
import {Section} from "../../components/Section";
import {PageHeader} from "../../components/PageHeader";
import {Form} from "../../components/Login/Form";

import firebase from '../../services/firebase';

import styles from './Login.module.scss';

export const Login = () => {
    const [user, setUser] = useState<firebase.User | null>(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(firebaseUser => {
            setUser(firebaseUser);
        })
    }, [])

    if (user) {
        return <Navigate replace to="/"/>
    }

    return (
        <>
            <PageHeader>Login</PageHeader>

            <Section bottomSpace="large">
                <Container className={styles.login__container}>
                    <Form/>

                    <Google/>
                </Container>
            </Section>
        </>
    )
}
