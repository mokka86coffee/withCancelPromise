const noop = () => {};
export const withCancel = (promise, callback = noop) => {
    let isCancelled = false;

    const wrappedPromise = new Promise((resolve, reject) =>
        promise.then(
            data => isCancelled ? reject({ isCancelled, data }) : callback({ isCancelled, data }),
            error => reject({ isCancelled, error })
        )
    );

    return {
        promise: wrappedPromise.catch(err => err),
        cancel: () => (isCancelled = true)
    }
}
