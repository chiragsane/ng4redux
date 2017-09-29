import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { HttpService } from '../core/http.service';

import { AppStore } from '../app.store';
import { User } from '../models/user';

@Injectable()
export class UserService {
    user: Observable<User>;
    campaignUrl = 'user';
    constructor(private http: HttpService, private router: Router, private store: Store<AppStore>) {
        this.user = store.select(appStore => appStore.user);
    }
    loadUser(req) {
        const payload = {
            name: req.username,
            username: req.username,
        };
        this.store.dispatch({ type: 'ADD_USER', payload })
        this.router.navigate(['home']);
    }
}
