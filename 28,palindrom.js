function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
const str = "racecar";
if (isPalindrome(str)) {
    console.log(`${str} is a palindrome`);
} else {
    console.log(`${str} is not a palindrome`);
}