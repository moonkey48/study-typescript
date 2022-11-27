{
    /**
     * LSP 적용 예시
     */

    class Person {
        introduce(name:string):string{
            return `My name is ${name}`;
        }
    }

    class Slave extends Person {
        introduce(name: string): string {
            return `My name is ${name}, my load`;
        }
    }

    class Master {
        showMySlave(slave:Person){
            const msg = slave.introduce('Oscar');
            console.log(msg)
        }
    }

    const person = new Person();
    const slave = new Slave();

    new Master().showMySlave(person);
    new Master().showMySlave(slave);
}