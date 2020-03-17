export default class ValidateService {
    constructor(

    ) {

    }

    static validateNewUser(payload) {
        let error = null;
        const regular = /^[a-zA-Z][a-zA-Z0-9]+$/ig;
        const regular1 = /^[a-zA-Z0-9]+$/ig;

        if (payload.login.length <= 6) error = 'Login very short';
        if (payload.login.length >= 32) error = 'Login very long';
        if (payload.password.length <= 6) error = 'Password very short';
        if (payload.password.length >= 32) error = 'Password very long';
        if (!regular.test(payload.login)) error = 'Unacceptable symbols in login';
        if (!regular1.test(payload.password)) error = 'Unacceptable symbols in password';

        return error;
    }

    static validateUser(payload) {
        let error = null;
        const regular = /^[a-zA-Z][a-zA-Z0-9]+$/ig;
        const regular1 = /^[a-zA-Z0-9]+$/ig;

        if (payload.login.length <= 6) error = 'Login very short';

        if (payload.login.length >= 32) error = 'Login very long';
        if (payload.password.length <= 6) error = 'Password very short';

        if (payload.password.length >= 32) error = 'Password very long';
        if (!regular.test(payload.login)) error = 'Unacceptable symbols in login';
        if (!regular1.test(payload.password)) error = 'Unacceptable symbols in password';

        return error;
    }

    static validateCamera(payload) {
        let error = null;

        if(payload.connection_string.length <= 4) error = 'Connection string to short';
        if(payload.name.length <= 4) error = 'Name to short';

        return error;
    }

}

