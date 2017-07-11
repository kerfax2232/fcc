// This one was hard as fuck.  still need to wrap head around it
// Module that multiplies all the number in 2D array and returns the product
function multiplyAll(arr) { 
   var product = 1;

    // Iterates the outer array
    for (var i=0;i<arr.length;i++) {
        // 1st Iter: [1,2]
        // 2nd Itr: [3,4]
        // 3rd Itr: [5,6,7]
        console.log('i: ' + i, arr[i]);
        for (var j=0;j<arr[i].length;j++) {
            // Outer loop 1st inner 1st : 1
            // Outer loop 1st inner 2nd : 2
            // Outer loop 2nd inner 1st : 3
            // ...
            console.log('j: ' + j, arr[i][j]);

            // Save the multiplication result

            // Prev multiplication result * current no;
            // Outer loop 1st inner 1st : 1 * 1 = 1 
            // Outer loop 1st inner 2nd : 1 * 2 = 2
            // Outer loop 2nd inner 1st : 2 * 3 = 6
            // Outer loop 2nd inner 1st : 6 * 4 = 24
            // ...
            product *= arr[i][j];
       }
    }

    // Only change code above this line
    return product;
}


multiplyAll([[1,2],[3,4],[5,6,7]]); // this multiplies all elements in the array, 1*2*3*4*5*6*7=5040