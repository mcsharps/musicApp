import { GET_MUSIC_LIBRARY, GET_BEARER_TOKEN } from './action-types';
import { Observable } from 'rxjs/Observable';
// import { push } from 'react-router-redux';
import { getMusicLibraryFufilled, getBearerTokenFufilled } from './actions';

export const getMusicLibrary = action$ =>
    action$
    .ofType(GET_MUSIC_LIBRARY)
    .mergeMap(() =>
    Observable.ajax({
        url: 'https://api.discogs.com/users/mcsharps/collection/folders/0/releases',
        method: 'GET',
        crossDomain: true,
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
    .map(response => getMusicLibraryFufilled(response))
    );

export const getBearerToken = action$ =>
    action$
    .ofType(GET_BEARER_TOKEN)
    .mergeMap(() =>
    Observable.ajax({
        url: 'http://127.0.0.1:7777/authorize',
        method: 'POST',
        crossDomain: true,
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            'authorizeUrl' : {}
        }
    })
    // .mapTo(push({ url: 'counter' }))
    .map(response => {
        console.log(response);

        return getBearerTokenFufilled(response);
    })
    );
    // .switchMap(() => push('counter'));
    // response.response.authorizeUrl
    // .mapTo(push('counter'));
 //
// var headers = {
//   'Accept': 'application/json',
//   'Content-Type': 'application/json',
//   'iscsproxyhost' : 'https://na4.thunderhead.com'
// };
// var url = "http://127.0.0.1:8080/one/oauth1/api/v3/job/generateDraft";
// var method = 'POST';
// var call = {method: method, url: url, data: generateDraftBody, headers: headers};
