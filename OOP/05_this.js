var kim = {
    name:'kim',
    first:10,
    second:20,
    sum: function(f, s){
        return f + s ;
    }
}

console.log("kim.sum(kim.first, kim.second)",kim.sum(kim.first, kim.second));


var park = {
    name:'park',
    first:10,
    second:20,
    sum: function(){
        return kim.first + kim.second ;
    }
}

console.log("park.sum()", park.sum());

var lee = {
    name:'lee',
    first:10,
    second:20,
    sum: function(){
        return this.first + this.second ;
    }
}

console.log("lee.sum()", lee.sum());