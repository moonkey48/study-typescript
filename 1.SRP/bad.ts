/*
* SRP의 잘못된 적용 예
같은 클래스 내에서 데이터 모델의 property와 데이터 모델을 조작하는 save 메소드가 같이 정의되어 있다. 
save 메소드에 대한 수정이 있으면 정의되어 있는 데이터모델 자체를 수정해야 하므로 유지보수가 비효율적이다. 
따라서 데이터 모델 정의에 대한 기능과 데이터 모델을 조작하는 기능이 분리되어야 한다. 
*/
class Entity {
    private dbCon: Database;
  
    constructor(
      private title: string,
      private deadline: Date,
    ) {
      this.dbCon = Database.connect("admin:password@db")
    }
  
    get title(): string {
      return `${this.title} (${this.deadline})`
    }
  
    save(): any {
      this.dbCon.save({ title: this.title, date: this.deadline })
    }
  }

  