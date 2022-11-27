{
    abstract class PostalAddress{
        /**
         * returns Formatted Full address
         */
        abstract WriteAddress():string;
    }

    class ItalyPostalAddress extends PostalAddress{
        WriteAddress(): string {
            return "Formatted Address Italy";
        }
    }

    class UKPostalAddress extends PostalAddress{
        WriteAddress(): string {
            return "Formatted Address UK";
        }
    }

    class AddressWriter {
        PrintPostalAddress(writer:PostalAddress):string{
            return writer.WriteAddress();
        }
    }

    const italy = new ItalyPostalAddress();
    const uk = new UKPostalAddress();

    const writer = new AddressWriter();

    console.log(writer.PrintPostalAddress(italy))
    console.log(writer.PrintPostalAddress(uk))
}