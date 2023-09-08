/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import { Full } from "../app/components/full";
import api from "@/app/api/api";
import { useRouter } from "next/router";
import {Layout} from "@/app/layouts/layout";

const Login = () => {
    const { push } = useRouter();
    const [open, setOpen] = useState(false);
    const login = async (e: any) => {
        e.preventDefault();
        try {
            const { data } = await api.get("posts");
            setOpen(true);
            localStorage.setItem('token', 'token')
            setTimeout(() => push('/'), 1500)
        } catch (e) {
            setOpen(true);
        }
    };
    return (
        <Full>
            <form onSubmit={login}>
                <Box display="flex" flexDirection="column" gap="10px">
                    <TextField
                        variant="standard"
                        label="Введите пароль"
                        sx={{ borderBottom: "1px solid #9b9b9b" }}
                    />
                    <Button type="submit" variant="contained" color="secondary">
                        Войти
                    </Button>
                </Box>
            </form>
            <Snackbar
                style={{ borderRadius: "10px" }}
                open={open}
                autoHideDuration={1500}
                onClose={() => setOpen(false)}
            >
                <Alert severity="success">Авторизация ппрошла успешно!</Alert>
            </Snackbar>
        </Full>
    );
};
Login.getLayout = (page: any) => <Layout page={page} title='Вход'/>
export default Login;
