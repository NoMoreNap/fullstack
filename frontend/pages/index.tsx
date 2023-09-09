/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Box, Typography } from "@mui/material";
import { Full } from "../app/components/full";
import { Layout } from "@/app/layouts/layout";

const Index = () => {
    return <Full><Typography variant="h1">Добро пожаловать!</Typography></Full>;
};

Index.getLayout = (page: any) => <Layout page={page} title='Главная'/>

export default Index;
