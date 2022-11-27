{
    //Good example of 
    interface Printer{
        print(doc:string):void;
    }

    interface Stapler{
        staple(doc:string, page:number): void;
    }

    interface Copier{
        copy(): void;
    }

    class SimplePrinter implements Printer{
        print(doc:string): void{
            console.log(`print ${doc}`);
        }
    }

    class SuperPrinter implements Printer, Stapler, Copier {
        copy(): void{
            console.log('copy...')
        }
        print(doc:string): void{
            console.log(`print ${doc}`);
        }
        staple(doc: string, page: number): void {
            console.log(`${doc} staple per ${page}`)
        }
    }
}