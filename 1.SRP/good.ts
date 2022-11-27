{
    /**
     * SRP 적용
     */

    class Entity {
        constructor(
            private title:string,
            private deadline:Date,
        ){
        }

        get Title():string{
            return `${this.title} (${this.deadline})`;
        }
    }

    class Repository {
        private dbCon: Database;

        constructor(){
            this.dbCon = Database.connect("admin:password@db");
        }

        save(model: Entity){
            this.dbCon.save(model)
        }
    }
}