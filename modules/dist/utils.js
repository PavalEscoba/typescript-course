export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function formatDate(date) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return new Date(date).toLocaleDateString(undefined, options);
}
