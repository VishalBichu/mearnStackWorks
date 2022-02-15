var text="hello hai hello hai"
wordcount={}
// var words=text.split(" ")
// var wordcount={}
// for(let word of words){
//     if(word in wordcount){
// wordcount[word]+=1
//     }
//     else{
//         wordcount[word]=1
//     }
// }console.log(wordcount);
text.split(" ").map(word=>word in wordcount?wordcount[word]+=1:wordcount[word]=1)
console.log(wordcount);