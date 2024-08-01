import Tender from "../model/tender";
import CrudRepository from "./crud-repository";

class TenderRepository extends CrudRepository {
    constructor(){
        super(Tender);
    }



}


export default TenderRepository;