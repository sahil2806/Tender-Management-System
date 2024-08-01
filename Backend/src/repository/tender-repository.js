import Tender from "../model/tender.js";
import CrudRepository from "./crud-repository.js";

class TenderRepository extends CrudRepository {
    constructor(){
        super(Tender);
    }
}



export default TenderRepository;