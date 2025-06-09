// JavaScript program to find all the
// substrings of given string

// Recursive Function to find all
// substrings of a string
function subString(s, n, index, cur, res) {

    // if we have reached the
    // end of the string
    if (index === n) {
        return;
    }

    // add the character s[index]
    // to the current string
    cur += s[index];

    // add the current string in result
    res.push(cur);

    // move to next index
    subString(s, n, index + 1, cur, res);

    // remove the current character
    // from the current string
    cur = cur.slice(0, -1);

    // if current string is empty
    // skip the current index to
    // start the new substring
    if (cur.length === 0) {
        subString(s, n, index + 1, cur, res);
    }
}

// Function to find all substrings
function findSubstrings(s) {

    // to store all substrings
    let res = [];

    // to store current string
    let cur = "";
    subString(s, s.length, 0, cur, res);
    return res;
}

const s = "abc";
const res = findSubstrings(s);
console.log(res.join(" "));