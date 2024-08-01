import Bid from "../model/bid";
import CrudRepository from "./crud-repository";


class BidRepository  extends CrudRepository {
    constructor(){
        super(Bid);
    }
}

export default BidRepository;