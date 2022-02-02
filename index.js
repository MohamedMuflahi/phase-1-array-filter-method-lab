// Code your solution here

const findMatching = (arr,string) => {
    const result = arr.filter(element => element.toLowerCase() === string.toLowerCase());
    return result;
}
const fuzzyMatch = (arr,string) => {
    const result = arr.filter(element => element.toLowerCase().startsWith(string.toLowerCase()));
    return result;
}
const matchName = (arr, string) => {
    const result = arr.filter(element => element.name.toLowerCase() === string.toLowerCase());
    return result;
}