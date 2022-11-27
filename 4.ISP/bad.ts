{
    // Bad example

    interface Printer {
        copy():void;
        print(doc:string):void;
        staple(doc:string, page:number):void;
    }

    class SimplePrinter implements Printer{
        copy(){
            console.log('copy...');
        }
        print(doc:string):void{
            console.log(`print ${doc}`)
        }

        staple(doc:string, page:number){
            console.log(`${doc} staple per ${page}`)
        }
    }
}