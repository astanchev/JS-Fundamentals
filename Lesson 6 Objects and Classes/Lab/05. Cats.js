function cats(input) {
    
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;

            this.meow = () => console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const obj of input) {

        let cat = new Cat(obj.split(' ')[0], obj.split(' ')[1]);

        console.log(`${cat.name}, age ${cat.age} says Meow`);
    }
}

cats(['Mellow 2', 'Tom 5']);