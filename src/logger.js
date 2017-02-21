import noop from 'lodash/noop';
import forEach from 'lodash/forEach';


const isDebugBuild = process.env.NODE_ENV === 'development';

const prodLogger = {};

// `copy(_.functions(console))`, Chrome: Version 52.0.2743.116 (64-bit)
const methods = {
    // prod logging
    error: true,
    warn: true,

    // debug logging
    debug: false,
    info: false,
    log: false,
    dir: false,
    dirxml: false,
    table: false,
    trace: false,
    group: false,
    groupCollapsed: false,
    groupEnd: false,
    clear: false,
    count: false,
    assert: false,
    markTimeline: false,
    profile: false,
    profileEnd: false,
    timeline: false,
    timelineEnd: false,
    time: false,
    timeEnd: false,
    timeStamp: false
};


forEach(methods, (isEnabledInProd, method) => {
    if (isEnabledInProd) {
        prodLogger[method] = window.console[method] || noop;
        prodLogger[method].bind(window.console);
    } else {
        prodLogger[method] = noop;
    }
});


export const getConfiguredLogger = () => {
    if (isDebugBuild) {
        return window.console;
    }

    return prodLogger;
};
