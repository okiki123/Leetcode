/* Given two integers a and b, return the sum of the two integers without using the operators + and -. */

var getSum = function(a, b) {
     let tb = b;
     let res = a;

     while(tb) {
        let temp = (res & b) << 1;
        res = res ^ tb;
        temp = tb;
     }

     return res;
}