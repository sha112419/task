const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createpayment = async (req,res) =>{
    try{
        const{ amount, currency, description,source} =req.body;

        const charge = await stripe.charge.create({
            amount,
            currency,
            description,
            stripe_charge_id: charge.id
        })
    } catch (err){
        res.status(201).json({error: err.message});
    }
}

module.exports = {
    createpayment
}