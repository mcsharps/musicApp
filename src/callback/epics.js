import { GET_CALLBACK_TOKEN } from './action-types';
import { Observable } from 'rxjs/Observable';
// import { push } from 'react-router-redux';
import { getCallbackTokenFufilled } from './actions';

export const getCallbackTokens = action$ =>
    action$
    .ofType(GET_CALLBACK_TOKEN)
    .mergeMap(() =>
        // Observable.concat(
            Observable.ajax({
                url: 'http://127.0.0.1:7777/callback',
                method: 'POST',
                crossDomain: true,
                headers : {
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                    'authorizeUrl' : {}
                }
            })
            .map(response => getCallbackTokenFufilled(response))
        // Observable.of(window.history.pushState({
        //     'https://www.discogs.com/oauth/authorize?oauth_token=aNiQZFEwtbnfUFFNdhDGzgwgUsvlEpSLYwSJPZgW' }))

        // )
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
