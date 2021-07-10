import User from "../../../domain/User";
import UserApi from "../../api/User.api";
import Token from "../../../domain/Token";

export default class RegisterUseCase {
    constructor(private api: UserApi) {
    }

    execute = async (user: User): Promise<Token> => {
        return this.api.register(user);
    };
}
