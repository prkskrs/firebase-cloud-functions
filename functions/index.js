const functions = require("firebase-functions")
const axios = require("axios")

exports.helloWorld = functions.https.onRequest((request, response) => {
    //   logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
});

exports.api = functions.https.onRequest(async (request, response) => {
    switch (request.method) {
        case 'GET':
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/users/1")
                response.send(res.data);
            } catch (error) {
                response.status(500).send('Internal Server Error');
            }
            break;
        case 'POST':
            response.send('it was POST request')
            break;
        case 'DELETE':
            response.send('it was DELETE request')
            break;
        default:
            response.send('it was a default request')
            break;
    }
})
