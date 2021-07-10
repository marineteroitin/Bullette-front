import * as process from 'process';
import Token from '../../../../core/domain/Token';
import User from '../../../../core/domain/User';
import UserApi from "../../../../core/ports/api/User.api";
import fetch from 'node-fetch';
import DataBaseLocalRepository from "../../../../core/ports/repositories/DataBaseLocal.repository";


export default class UserRestApi implements UserApi{
    baseUrl: string = process.env.API_URL;

    constructor(private databaseLocal: DataBaseLocalRepository) {
    }

    async register(user: User): Promise<Token> {
        var userData = {
            email: user.email,
            password: user.password,
            firstName: user.firstName
        };

        try {
            const response = await fetch(this.baseUrl + '/users/register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify(user),
            });
            const json = await response.json();
            console.log(json);
            if (json.error) {
                throw json;
            } else {
                return json;
            }
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}
