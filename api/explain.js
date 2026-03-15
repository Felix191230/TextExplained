module.exports = async (req, res) => {

if (!process.env.OPENAI_API_KEY) {
return res.status(200).json({
result: "API KEY NOT FOUND"
});
}

try {

const text = req.body.text;;
