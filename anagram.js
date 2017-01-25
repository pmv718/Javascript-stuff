/* to test whether the given strings are anagrams*/
/* ie made with same set of letters , eg:hai is an anagram of iah*/

function test(arg1 , arg2){
/*splitting and sorting arg1  */
arg1 = arg1.split("");
arg1 = arg1.sort();

var str1 = "";
var str2 = "";

for(i of arg1)
  str1 = i + str1;

/*asplit & sort arg2  */
arg2 = arg2.split("");
arg2 = arg1.sort();


for(i of arg2)
 {
 str2 = i + str2;
 }
/*checking if an anagram*/
if(str1==str2)
 {
return "Its an Anagram";
 }

}