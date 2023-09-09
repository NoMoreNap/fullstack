/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { TextField, Button, Box, Snackbar, Alert, Typography } from "@mui/material";
import { Full } from "../app/components/full";
import api from "@/app/api/api";
import { useRouter } from "next/router";
import {Layout} from "@/app/layouts/layout";

const Login = () => {
    const { push } = useRouter();
    const [openAccess, setOpenAccess] = useState(false);
    const [openFail, setOpenFails] = useState(false);

    const [loginInput, setLoginInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const login = async (e: any) => {
        e.preventDefault();
        const type = loginInput.includes('@') ? 'email' : 'username'
        try {
            const { data } = await api.post("/user/auth", {
                type,
                login:loginInput,
                password:passwordInput
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            setOpenAccess(true);
            localStorage.setItem('token', data.authToken)
            
            setTimeout(() => push('/'), 1000)
        } catch (e) {
            console.log('ss')
            setOpenFails(true);
        }
    };
    return (
        <Full>
            <form onSubmit={login}>
                <Box display="flex" flexDirection="column" gap="40px" alignItems='center'>
                    <Typography variant="h2">
                        Вход
                    </Typography>
                    <TextField
                        variant="standard"
                        label="Введите email или логин"
                        sx={{ borderBottom: "1px solid #9b9b9b" }}
                        onInput={(e: any) => setLoginInput(e.target.value)}
                    />
                    <TextField
                        variant="standard"
                        label="Введите пароль"
                        sx={{ borderBottom: "1px solid #9b9b9b" }}
                        onInput={(e: any) => setPasswordInput(e.target.value)}
                    />
                    <Button fullWidth type="submit" variant="contained" color="secondary">
                        Войти
                    </Button>
                </Box>
            </form>
            <Snackbar
                style={{ borderRadius: "10px" }}
                open={openAccess}
                autoHideDuration={1500}
                onClose={() => setOpenAccess(false)}
            >
                <Alert severity="success">Авторизация прошла успешно!</Alert>
            </Snackbar>
            <Snackbar
                style={{ borderRadius: "10px" }}
                open={openFail}
                autoHideDuration={1500}
                onClose={() => setOpenFails(false)}
            >
                <Alert severity="error">Ошибка авторизации!</Alert>
            </Snackbar>
        </Full>
    );
};
Login.getLayout = (page: any) => <Layout page={page} title='Вход'/>
export default Login;
