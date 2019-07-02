export default class ValidateService {
    constructor(

    ) {

    }

    static validateNewUser(payload) {
        let error = null;
        const regular = /^[a-zA-Z][a-zA-Z0-9]+$/ig;
        const regular1 = /^[a-zA-Z0-9]+$/ig;

        if (payload.login.length <= 6) error = 'Логин слишком маленький';
        if (payload.login.length >= 32) error = 'Логин слишком большой';
        if (payload.password.length <= 6) error = 'Пароль слишком маленький';
        if (payload.password.length >= 32) error = 'Пароль слишком большой';
        if (!regular.test(payload.login)) error = 'Недопустимые символы в логине';
        if (!regular1.test(payload.password)) error = 'Недопустимые символы в пароле';

        return error;
    }

    static validateUser(payload) {
        let error = null;
        const regular = /^[a-zA-Z][a-zA-Z0-9]+$/ig;
        const regular1 = /^[a-zA-Z0-9]+$/ig;

        if (payload.login.length <= 6) error = 'Логин слишком маленький';

        if (payload.login.length >= 32) error = 'Логин слишком большой';
        if (payload.password.length <= 6) error = 'Пароль слишком маленький';

        if (payload.password.length >= 32) error = 'Пароль слишком большой';
        if (!regular.test(payload.login)) error = 'Недопустимые символы в логине';
        if (!regular1.test(payload.password)) error = 'Недопустимые символы в пароле';

        return error;
    }

    static validateCamera(payload) {
        let error = null;

        if(payload.connection_string.length <= 4) error = 'Строка подключения слишком мала';
        if(payload.name.length <= 4) error = 'Имя слишком маленькое';

        return error;
    }

}

