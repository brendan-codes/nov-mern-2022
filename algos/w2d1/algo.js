// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped (without duplicates)

function intersection(arr1, arr2) {
    let idx1 = 0; // define indexes for both arrays
    let idx2 = 0;

    const len1 = arr1.length; // fix the lengths
    const len2 = arr2.length;

    const result = []; // set a result
    // [2, 7]

    // while loop is a for loop + an if statement
    // as long as we don't read off an array
    while (idx1 < len1 && idx2 < len2) {
        // walk the smaller idx forward
        if (arr1[idx1] < arr2[idx2]) {
            idx1++;
        } else if (arr1[idx1] > arr2[idx2]) {
            idx2++;
            // else they are equal
        } else {
            // double check we've not already added this number
            if (result[result.length - 1] !== arr1[idx1]) {
                result.push(arr1[idx1]);
            }
            // walk forward both indexes
            idx1++;
            idx2++;
        }
    }

    return result;
}


var x = [1,1,1,2,2,3];
// idx1
var y = [1,1,2,2,3,7];
// idx2

// [1,2,3]

// same length? no
// are these arrayws ALWAYS in order? yes
// O(n) = every value is visited only a single time



