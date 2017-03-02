import { GET_MUSIC_LIBRARY } from './action-types';
import { Observable } from 'rxjs/Observable';
// import { push } from 'react-router-redux';
// https://api.discogs.com/users/mcsharps/collection/folders/0/releases?count=5
import { getMusicLibraryFufilled } from './actions';

export const getMusicLibrary = action$ =>
    action$
    .ofType(GET_MUSIC_LIBRARY)
    .mergeMap(() =>
    Observable.ajax({
        url: 'http://127.0.0.1:7777/music',
        method: 'POST',
        crossDomain: true,
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        },
    })
    .map(response => getMusicLibraryFufilled(response))
    );
