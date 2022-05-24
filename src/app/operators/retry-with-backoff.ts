import { Observable, of, throwError } from "rxjs";
import { delay, mergeMap, retryWhen } from "rxjs/operators";

const DEFAULT_DELAY_MS: number = 1000;
const DEFAULT_MAX_RETRIES: number = 1;
const DEFAULT_SCALE_FACTOR: number = 2;
const getErrorMessage = (maxRetry: number) => `Tried to load resource over XHR ${maxRetry} times without success. Giving up.`;

interface RetryOptions {
    delayMs?: number;
    maxRetries?: number;
    scaleFactor?: number;
}

export function retryWithBackoff(options?: RetryOptions) {
    options = options || {};
    const maxRetries = options.maxRetries || DEFAULT_MAX_RETRIES;
    const scaleFactor = options.scaleFactor || DEFAULT_SCALE_FACTOR;
    let delayMs = options.delayMs || DEFAULT_DELAY_MS;
    let remainingRetries = maxRetries;

    return (src: Observable<any>) => src.pipe(
        retryWhen((errors: Observable<any>) => errors.pipe(
            mergeMap(error => {
                if (remainingRetries > 0) {
                    delayMs += delayMs * scaleFactor * (maxRetries - remainingRetries);
                    remainingRetries--;
                    return of(error).pipe(delay(delayMs));
                }
                return throwError(getErrorMessage(maxRetries));
            })
        ))
    );
}