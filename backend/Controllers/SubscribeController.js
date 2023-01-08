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
        res.send({ status: "ok" })
    } catch (e) {
        res.send({ status: "error" });
        console.log(e);
    }
}

module.exports = {
    CreateSubscribe
}