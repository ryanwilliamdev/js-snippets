// TAKES ANY INPUT STRING AND RETURNS IT IN REVERSE


const reverseString = function(str) {
    const arrayStrings = str.split("");
    const reverseArray = arrayStrings.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
}
