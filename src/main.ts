const person: string = "kenneth";
const popularTag: (string | number)[] = ['apple', 'orange', 10]

const getFullName = (firstName: boolean, lastName: string[]): any => {
    return firstName + " " + lastName;
}

console.log(getFullName(true, ['Pineda']));

interface UserInterface {
    name: string,
    age?: number,
    getMessage(): string
}

const user: UserInterface = {
    name: 'Kenneth',
    age: 23,
    getMessage() {
        return 'Hello' + name;
    }
}

const user2: UserInterface = {
    name: 'Ivan',
    getMessage() {
        return 'Hello' + name;
    }
}

console.log(user.getMessage())