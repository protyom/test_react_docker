import {getUserDone, getUserError, getUserStarting} from "./actions";
import client from "../axios";


export const getUser = (email, password) => {
    return async function(dispatch) {
        try {
            dispatch(getUserStarting());
            const form = new FormData();
            form.append('username', email);
            form.append('password', password);
            form.append('client_id', 'tgA2ww6Vtt6ztqpqoyMtijZGbNuoupwVD7lYmPiC');
            form.append('client_secret', 'Do4fshsPrd7Iqe4IjAoL8raZppxmW733R5scrHZtlBxxkQLdRU50nUnWcPCaksBNfRU8AqkeoZFOPI6ocabZWKYPWkthGFNzKWVpHIyxGMfVnHt9nITNK68GDVZOV5bR');
            const { data } = await client({ url: '/api/login', method: 'post', data: form });
            dispatch(
                getUserDone({
                    token: data.token,
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