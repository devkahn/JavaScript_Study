var memberArray = ['egoing', 'graphittie', 'leezhce'];
console.log("memberArray[2]",memberArray[2]);

var memeberObject = {
    manager : 'egoing',
    developer : 'graphittie',
    designer : 'leezhce'
}

memeberObject.designer = 'leezcheeee';
console.log('memeberObject.designer',memeberObject.designer);
console.log('memeberObject[designer]',memeberObject['designer']);
delete memeberObject.manager
console.log('after delete memberObject.manager', memeberObject.manager);