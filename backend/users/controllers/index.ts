import type Express from "express";
import { Mongo } from "../../db/actionsDB";
import md5 from "md5";
import { IUserInsert } from "./types";

const dbUsers = new Mongo("users");

export const createUser = async (
    req: Express.Request,
    res: Express.Response
) => {
    const { email, name, last_name, password, age, login } = req.body;
    const ts = (Date.now() / 1000) >> 0;
    const { passPrase = "hash" } = process.env;
    const {currentID} = await dbUsers.getCurrentID()
    const id = currentID + 1
    const toCreate = {
        id: id,
        info: {
            name,
            last_name,
            age,
        },
        hash: md5(`${email}${md5(password)}${passPrase}`),
        auth: {
            email,
            password: md5(password),
            login: login ? login : null
        },
        ts_su: ts,
    };
    console.log(md5(`${email}${md5(password)}${passPrase}`))
    console.log(email, md5(password), passPrase)

    const data: IUserInsert = await dbUsers.insert(toCreate, "user");
    if (data.ok) {
        dbUsers.setOne('currentID', id, {currentID: {$gt: 0}})
        res.status(200);
        res.send(JSON.stringify(data));
    } else {
        res.status(400);
        res.send(JSON.stringify(data));
    }
};

export const validateAuth = async (
    req: Express.Request,
    res: Express.Response
) => {
    const { type, login, password } = req.body
    const { passPrase = "hash" } = process.env;
    let hash
    if (type === 'email') {
        const data = await dbUsers.find('auth.email',login)
        if (data.length) {
            hash = md5(`${login}${md5(password)}${passPrase}`)
        } else {
            res.status(401)
            res.send(JSON.stringify({
                ok: false,
                info: {
                    type,
                },
                detail: "Данного пользователя не существует!",
            }))
            return
        }
    } else {
        const data = await dbUsers.find('auth.login',login)
        if (data.length) {
            const findedEmail = data[0].auth.email
            hash = md5(`${findedEmail}${md5(password)}${passPrase}`)
        } else {
            res.status(400)
            res.send(JSON.stringify({
                ok: false,
                info: {
                    type,
                },
                detail: "Данного пользователя не существует!",
            }))
            return
        }
    }
    console.log(md5(`${login}${md5(password)}${passPrase}`))
    const findByHash = await dbUsers.find('hash', hash)
    if(findByHash.length) {
        res.status(200)
        res.send(JSON.stringify({
            ok: true,
            info: {
                type,
            },
            authToken: 'isComing', // ts
            detail: "Авторизация прошла успешно!",
        }))
    } else {
        res.status(400)
        res.send(JSON.stringify({
            ok: false,
            info: {
                type,
            },
            detail: "Неверный логин или пароль!",
        }))
    }
    
};
