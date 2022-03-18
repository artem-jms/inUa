import { makeAutoObservable } from 'mobx'

export default class User {
    constructor() {
        this._auth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setAuth(bool) {
        this._auth = bool
    }

    get auth() {
        return this._auth
    }

    setUser(user) {
        this._user = user
    }

    get user() {
        return this._user
    }

}