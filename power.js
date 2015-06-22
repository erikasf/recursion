//power
var power = function(num, exponent) {
var result = 1;
for (var count = 0; count < exponent; count++)
result *= num;
return result;
};


//recursive
powerR: function(num, exp) {
if (exp === 0) {
return 1;
}
return num * powerR(num, exp-1);
}
