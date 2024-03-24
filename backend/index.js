import express from "express";

const app = express();

const port = process.env.PORT || 3000;
const jokes = [
  {
    id: 1,
    type: "pun",
    text: "Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    id: 2,
    type: "wordplay",
    text: "Parallel lines have so much in common. It's a shame they'll never meet.",
  },
  {
    id: 3,
    type: "punchline",
    text: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  },
  {
    id: 4,
    type: "punny",
    text: "Why don't skeletons fight each other? They don't have the guts.",
  },
  {
    id: 5,
    type: "humor",
    text: "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
];
app.get("/", (req, res) => {
  res.send("<h1>HI this is Backend</h1>");
});

app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
