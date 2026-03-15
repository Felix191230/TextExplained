module.exports = async (req, res) => {

try {

const text = req.body.text;

const response = await fetch("https://api.openai.com/v1/chat/completions", {
method: "POST",
headers: {
"Content-Type": "application/json",
"Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
},
body: JSON.stringify({
model: "gpt-4o-mini",
messages: [
{
role: "system",
content: "Explain the user's text in very simple language."
},
{
role: "user",
content: text
}
]
})
});

const data = await response.json();

if (!data.choices) {
return res.status(200).json({
result: "API error: " + JSON.stringify(data)
});
}

res.status(200).json({
result: data.choices[0].message.content
});

} catch (error) {

res.status(200).json({
result: "Server error: " + error.message
});

}

};
