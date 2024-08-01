import TenderService from "../service/tender-service.js";

const tenderService = new TenderService();

export const create = async(req,res) => {
    try {
        const response = await tenderService.createTender(req.body);
        return res.status(201).json({
            success: true,
            message: `Successfully created a Tender`,
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Tender is not created',
            data: 'Something went wrong',
            success: false,
            err: error
        });
    }
}

export const destroy = async(req,res) => {
    try {
        const response = await tenderService.deleteTender(req.params.id);
        return res.status(201).json({
            success: true,
            message: `Successfully deleted a Tender`,
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Tender is not deleted',
            data: 'Something went wrong',
            success: false,
            err: error
        });
    }
}

export const update = async(req,res) => {
    try {
        const response = await tenderService.updateTender(req.params.id, req.body);
        return res.status(201).json({
            success: true,
            message: `Successfully update the Tender`,
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Tender is not updated',
            data: 'Something went wrong',
            success: false,
            err: error
        });
    }
}

