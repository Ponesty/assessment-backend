const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

let encouragement = ['empty'];

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
           "Cool shirt!",
           "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});


app.post("/api/encourage", (req, res) => {
  if(encouragement[0]==='empty'){
    encouragement[0]= req.body;
  }
  res.status(200).send(encouragement[0]);
  
});


app.put("/api/encourage", (req, res) => {
  if(encouragement[0]==='empty'){
    let arr =['Please make encouragement']
    res.status(404).send(arr);
  } else {
    encouragement.push(req.body);
    res.status(200).send(encouragement);

  }
  
});

app.delete("/api/encourage", (req, res) => {
  
  for(let i=0; i<encouragement.length; i++){
    if(encouragement[i].word===req.body.word){
      encouragement.splice(i,1);
    }

  }
  res.status(200).send(encouragement);
  
});




app.get("/api/fortune", (req, res) => {
  const fortunes = ["Curiosity kills boredom. Nothing can kill curiosity.",
					 "Dedicate yourself with a calm mind to the task at hand.",
					 "Depart not from the path which fate has you assigned.",
           "Determination is what you need now.",
           "Diligence and modesty can raise your social status.",
           "Disbelief destroys the magic.",
           "Join the dark side of the force."
  ];

  // choose random fortune
  let randomIndex2 = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex2];

  res.status(200).send(randomFortune);
  
});

app.listen(4000, () => console.log("Server running on 4000"));
