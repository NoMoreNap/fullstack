import mongoose from "mongoose";
import userModel from "../db/sheme";

const { DB_URL = "mongodb://localhost:27017" } = process.env;
// export const client = new MongoClient(DB_URL);

interface IMongo {
    db: any;
}

export class Mongo implements IMongo {
    db: any;
    constructor(dbName: string) {
        (async () => {
            try {
                await mongoose.connect(`${DB_URL}/${dbName}`);
                this.db = userModel;
                console.log("Success");
            } catch (error) {
                console.log(error);
            }
        })();
    }
    async insert(data: any, type: string) {
        const isExistsEmail = await this.find("auth.email",data.auth.email)
        const isExistsLogin = data.auth.login ? await this.find("auth.login",data.auth.login) : false
        if (isExistsEmail.length || isExistsLogin.length) {
            return {
                ok: false,
                info: {
                    type,
                },
                detail: "Данный пользователь уже существует!",
            };
        }
        const newData = await this.db.create(data);
        if (newData) {
            const { _id } = newData;
            return {
                ok: true,
                info: {
                    type,
                    id: _id.toString(),
                },
                detail: "Новая запись успешно создана!",
            };
        } else {
            return {
                ok: false,
                info: {
                    type,
                },
                detail: "Ошибка создания записи",
            };
        }
    }
    async find(path: string,data: string) { 
        const findedData = await this.db.find({[path]: data})
        return findedData
    }
    async getCurrentID () {
        const id = await this.db.findOne({'currentID':{$gt:0}}, {_id: 0, currentID: true})
        return id
    }

    async setOne(path: string, data: string | number, condition: any) {
        const update = await this.db.updateOne(condition, {$set: {[path]: data}})
        return update
    }
}
