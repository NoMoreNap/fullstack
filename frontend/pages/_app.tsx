/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "@/app/styles/global.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/app/theme/theme";

type Props = AppProps & {
    Component: {
        getLayout?: (page: React.ReactNode) => React.ReactNode
    }
}

const App = (props: Props) =>  {
    const {Component, pageProps} = props
    const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page);
    return (
        <ThemeProvider theme={theme}>
            {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
    );
}

// App.getInitialProps = async (context: any) => {
//     console.log(context)
//     // const allCookies = cookies(context.ctx)
//     // const token = allCookies[tokenName]

//     // if (!token && context.ctx.pathname !== '/sign-in') {
//     //     context.ctx.res.writeHead(302, {Location: '/sign-in'}); // Перенаправляем на страницу авторизации
//     //     context.ctx.res.end();
//     // }
//     // const getUser = async () => {
//     //     try {
//     //         const response = await instance.get('/accounts/profile/info/', {
//     //             headers: {
//     //                 'Authorization': `Bearer ${token}`
//     //             }
//     //         })
//     //         if (response.status === 200) {
//     //             return response
//     //         }
//     //     } catch (e) {
//     //         if (context.ctx.pathname !== '/sign-in') {
//     //             context.ctx.res.writeHead(302, {Location: '/sign-in'}); // Перенаправляем на страницу авторизации
//     //             context.ctx.res.end();
//     //         }
//     //     }
//     // }
//     // const response = await getUser()


//     // return {user: response?.data || null};
// }
export default App

