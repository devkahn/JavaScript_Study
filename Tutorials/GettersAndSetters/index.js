const person = {
    firstName:'Kahn',
    lastName:"dev",

    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Daniel Kahn';

// getters => access prorperties
// setters => change (mutate) them

console.log(person);