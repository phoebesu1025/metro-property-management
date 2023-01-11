const Message = require('../db/SendMessage')


const CreateMessage = async (req, res) => {
    try {
        const { name, email, phone, prefer, message } = req.body;

        const messageInfo = await Message.create({
            name, email, phone, prefer, message
        });
        console.log(messageInfo);
        res.send({ status: "ok" } + messageInfo)

    } catch (error) {
        res.send({ status: "error" });
        console.log(error);
    }
}

module.exports = {
    CreateMessage
}