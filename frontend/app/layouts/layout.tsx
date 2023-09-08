/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
interface IPageLayout {
    page: any;
    title: string;
}
export const Layout: React.FC<IPageLayout> = ({ page, title }) => {
    const { push } = useRouter();
    useEffect(() => {
        if (!getUser()) {
            push('/login')
            return
        }
        push('/')
    }, [])
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            {page}
        </>
    );
};


export const getUser = () => {
    const isLogin = Boolean(localStorage.getItem('token'))
    return isLogin
}
