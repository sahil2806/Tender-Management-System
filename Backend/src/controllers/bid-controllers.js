import BidService from "../service/bid-service.js";

const bidService = new BidService();

export const createBid = async(req,res) => {
    try {
        console.log("sahil")
        const response = await bidService.createBid(req.body.bidAmount , req.query.tender , req.query.user);
        return res.status(201).json({
            success: true,
            message: `Successfully created a Bid`,
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Bid is not created',
            data: 'Something went wrong',
            success: false,
            err: error
        });
    }
}
