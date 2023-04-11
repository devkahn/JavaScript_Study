var memberArray = ['egoing', 'graphittie', 'leezhce'];

console.group('array loop');
var i =0;
while(i < memberArray.length){
    console.log(i+":"+memberArray[i]);
    i = i +1;
}
console.groupEnd('array loop');


var memeberObject = {
    manager : 'egoing',
    developer : 'graphittie',
    designer : 'leezhce'
}

console.group('object loop');
for(var name in memeberObject){
    console.log(name,":", memeberObject[name]);
}
console.groupEnd('object loop');