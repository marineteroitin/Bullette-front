import Token from "../../domain/Token";
import User from "../../domain/User";

export default interface UserApi {
    register(user: User): Promise<Token>;
}
