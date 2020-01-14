import {getUserDone, getUserError, getUserStarting} from "./actions";
import client from "../axios";
import axios from "axios";


export const getUser = (email, password) => {
    return async function(dispatch) {
        try {
            dispatch(getUserStarting());
            const user = {
                username: email,
                password: password,
                client_id: "tgA2ww6Vtt6ztqpqoyMtijZGbNuoupwVD7lYmPiC",
                client_secret: "Do4fshsPrd7Iqe4IjAoL8raZppxmW733R5scrHZtlBxxkQLdRU50nUnWcPCaksBNfRU8AqkeoZFOPI6ocabZWKYPWkthGFNzKWVpHIyxGMfVnHt9nITNK68GDVZOV5bR",
                grant_type: "password"
            };
            const {data} = await axios.post('http://localhost/api/token/', user);
            // const {data} = await client({
            //     url: '/api/token/',
            //     method: 'post',
            //     data: JSON.stringify(user),
            //     headers: { 'Content-Type': 'application/json' },
            // });

            console.log(data);
            // const form = new FormData();
            // form.append('username', email);
            // form.append('password', password);
            // form.append('client_id', 'tgA2ww6Vtt6ztqpqoyMtijZGbNuoupwVD7lYmPiC');
            // form.append('client_secret', 'Do4fshsPrd7Iqe4IjAoL8raZppxmW733R5scrHZtlBxxkQLdRU50nUnWcPCaksBNfRU8AqkeoZFOPI6ocabZWKYPWkthGFNzKWVpHIyxGMfVnHt9nITNK68GDVZOV5bR');
            //  await client({ url: '/api/login', method: 'post', data: form });
            dispatch(
                getUserDone({
                    token: data.access_token,
                })
            );
        } catch (error) {
            dispatch(getUserError(error))
        }
    }
};

export const mapStateToProps = state => ({
    token: state.token,
    error: state.error,
});

export const mapDispatchToProps = dispatch => ({
    setUser: (email, password) => dispatch(getUser(email, password)),
});