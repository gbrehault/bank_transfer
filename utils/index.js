export const wait = (delay = 500) => new Promise(resolve => setTimeout(resolve, delay));

export const error = (message = 'An error occurred') => {
    throw new Error(message);
}