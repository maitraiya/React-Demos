
const AssistantV1 = require('ibm-watson/assistant/v1');

const service = new AssistantV1({
  version: "2019-08-27",
  iam_apikey: "539wC9A1e2s-SDGtnFQSf70jZg_rb9OXzSD8DDj_WbVs",
  url: "https://gateway-wdc.watsonplatform.net/assistant/api"
});

exports.getMessage = (req,res) =>{
  service.message({
    workspace_id: 'fc0b7a27-41a5-4b61-b525-fcb9ff30ebbd',
    input: {'text': req.body.input}
    })
    .then(output => {
        console.log('New Request :'+req.body.input);
        return res.status(200).send(output.output.text)
    })
    .catch(err => {
      console.log(err)
    });
}
