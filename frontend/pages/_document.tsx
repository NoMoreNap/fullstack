import React from "react";
import { Head, Html, Main, NextScript } from "next/document";
import { FullScreenWrapper } from "../app/components/fullscreen";

export default function customDocument() {
    return (
        <Html lang="ru">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <FullScreenWrapper>
                    <Main />
                    <NextScript />
                </FullScreenWrapper>
            </body>
        </Html>
    );
}
