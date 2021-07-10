import * as process from 'process';
import UserApi from "../../../../core/ports/api/User.api";
import DataBaseLocalRepository from "../../../../core/ports/repositories/DataBaseLocal.repository";
import UserRestApi from "../rest/User.RestApi";

export const getUserInstanceApi = (dataBaseLocal: DataBaseLocalRepository) : UserApi => {
    switch (process.env.API_URL){
        default:
            return new UserRestApi(dataBaseLocal);
    }
}
