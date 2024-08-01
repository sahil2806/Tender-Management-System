import TenderRepository from "../repository/tender-repository";

class TenderService {
    constructor(){
        this.tenderRepository = new TenderRepository();
    }

    async createTender(data){
        try {
            const tender = await this.tenderRepository.create(data);
            return tender;
        } catch (error) {
            throw {error};
        }
    }

    async updateTender(TenderId , data){
        try {
            const tender = await this.tenderRepository.update(TenderId,data);
            return tender;
        } catch (error) {
            throw {error};
        }
    }

    async deleteTender(TenderId){
        try {
            const response = await this.tenderRepository.destroy(TenderId);
            return response;
        } catch (error) {
            throw {error};
        }
    }

    async getTender(TenderId){
        try {
            const tender  = await this.tenderRepository.get(TenderId);
            return tender;
        } catch (error) {
            throw {error};
        }
    }

    async getAllTender(){
        try {
            const tenders = await this.tenderRepository.getAll();
            return tenders;
        } catch (error) {
            throw {error};
        }
    }
}

export default TenderService;