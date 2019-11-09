import { withCancel } from './withCancelPromise';

const customfetch = new Promise((res, rej) => setTimeout(() => res({time: 1000}), 1000));

const setState = (data) => console.log({ data });

const withoutCancelFetch = withCancel(customfetch, setState);

const withCancelFetch = withCancel(customfetch, setState);
setTimeout(withCancelFetch.cancel, 600);
