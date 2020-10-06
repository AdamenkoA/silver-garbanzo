import {ILogin} from "./ILogin";

export class LoginState implements ILogin {
    private _caption: string;
    private _isAuthenticated: boolean;

    get caption(): string {
        return this._caption;
    }

    set caption(value: string) {
        this._caption = value;
    }

    get isAuthenticated(): boolean {
        return this._isAuthenticated;
    }

    set isAuthenticated(value: boolean) {
        this._isAuthenticated = value;
    }

    constructor(caption: string, isAuthenticated: boolean) {
        this._caption = caption;
        this._isAuthenticated = isAuthenticated;
    }
}
