import { GET_BEARER_TOKEN } from './action-types';
import { Observable } from 'rxjs/Observable';
import { getBearerTokenFufilled } from './actions';

export const getBearerToken = action$ =>
    action$
    .ofType(GET_BEARER_TOKEN)
    .mergeMap(action =>
            Observable.ajax({
                url: 'http://127.0.0.1:7777/authorize',
                method: 'POST',
                headers : {
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                    'usernameToFetch' : action.payload
                }
            })
            .map(response => getBearerTokenFufilled(response))
    );
