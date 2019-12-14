export default function getMinSquaredNumber(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;

    let a = arr.map(num => num * num);

    return Math.min(...a);
}