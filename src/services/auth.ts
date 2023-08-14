import { TEST_DB, USING_TEST_DB } from "../utils/constants";
import { AUTH_ERROR_MSG } from "../utils/erros";


export async function fetchUserData (username : string, password : string) {
    if (USING_TEST_DB) {
        return (
            fetch(`${TEST_DB}/users/${username}`)
                .then(res => res.json())
                .then(user => {
                    if (user.password !== password) {throw Error(AUTH_ERROR_MSG);}
                    else return user;
                })
        );
    } else {
        throw Error('Not implemented');
    }
}