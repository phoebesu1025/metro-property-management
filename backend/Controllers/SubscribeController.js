const Subscribe = require('../db/Subscribe')

//post new Subscription
const CreateSubscribe = async (req, res) => {
    try {
        const { email } = req.body;
        const emailExists = await Subscribe.findOne({ email: email });
        console.log(emailExists);
        if (emailExists) {
            throw new Error(`${email} already exists`);
        }
        const subscribe = await Subscribe.create({
            email
        });
        console.log(subscribe);
        res.send()
    } catch (e) {
        const newError = e;
        res.status(409).send(`${newError}`);
    }
}

module.exports = {
    CreateSubscribe
}