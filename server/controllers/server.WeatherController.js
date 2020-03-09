import request from 'request';
export const report = (req,res)=> {
    if (!req) {
        res.status(400).send({
            message: " Empty!"
        });
    }
    request({
        url: 'placeholder',
        qs: options
    }, async (error, response, body) => {
        if (error) res.send(error);
        let weather = body;
        //format data here
        res.send(weather);

    });
};