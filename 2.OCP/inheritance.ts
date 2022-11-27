/**
 * OCP 적용 예시: 상속
 * 
 * CreditCard 클래스에 정의된 monthlyDiscount 메소드를 모버라이드 해서 이미 사용되고 있는 다른 함수들에게 영향을 주지 않게 했다.
 */

class CreditCard {
    private code: string
    protected monthlyCost: number

    constructor(
        code:string,
        MonthlyCost:number
    ){
        this.code = code
        this.monthlyCost = MonthlyCost
    }

    get Code():string{
        return this.code;
    }

    monthlyDiscount():number{
        return this.monthlyCost * 0.02;
    }
}

class GoldCreditCard extends CreditCard {
    //@Overriding
    monthlyDiscount(): number {
        return this.monthlyCost * 0.05;
    }
}

const aCard = new CreditCard('a', 100);
aCard.Code
aCard.monthlyDiscount()
