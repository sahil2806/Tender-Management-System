import User from "../model/user.js";
import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }

    async findBy(data){
        try {
            console.log('data',data);
            const response = await User.findOne(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default UserRepository;