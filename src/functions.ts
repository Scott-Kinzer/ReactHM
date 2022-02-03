interface IUser {
    name: string, 
    age: number,
    gender: string,
}

const user = {
    name:"Max",
    age:18,
    gender:'male',
}

function sum <T extends number>(a: T,b: T): number{
    return a+b;
}

function showSum<T extends number>(a: T,b: T): void{
    console.log(a + b);
}



function incAge<T extends IUser>(someUser: T, inc: number): T{
    someUser.age += inc
    return someUser
}

console.log(sum(1, 2));
showSum<number>(2,3)
incAge<IUser>(user, 2)

