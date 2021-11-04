const express = require('express');
const app = express();

const path=require("path");

app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));


app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req,res)=>{

    res.render('index.ejs')
})

app.get('/trivia', (req,res)=>{

    const questionListOfObjects=[
      {question:"Which detective believed Sherlock was still alive and had theories to prove it?",options:["John Watson","Philip Anderson","Greg Lestrade"],correctAnswer:"Philip Anderson"},
      {question:"At the beginning of the second season, we see how Sherlock and John get out of their predicament with Moriarty at the pool. It starts when Moriarty's phone rings out which fitting song?",options:["John Watson","Bohemian Rhapsody","Stayin' Alive"],correctAnswer:"Stayin' Alive"},
      {question:"The opening scene of the special is set during which war?",options:["Afghan War","The War of 1812","World War II"],correctAnswer:"Afghan War"},
      {question:"Which holiday is the plot of the story of the Abominable Bride framed around?",options:["Christmas","St. Patrick's Day","Halloween"],correctAnswer:"Christmas"},
      {question:"Which of the following does Sherlock not correctly deduce from John Watson's phone?",options:["Harry is John's brother","Harry is an alcoholic","Harry and John don't get along"],correctAnswer:"Harry is John's brother"},
      {question:"Which beloved character says, Im your landlady, dear. Not your housekeeper ?" ,options:[ "Mrs Hudson","Irene","Molly"],correctAnswer:"Mrs Hudson"},
      {question:"Name the actor who plays Sherlock Holmes.",options:[ "Benedict Cumberbatch","Johnny Depp","Martin Freeman" ],correctAnswer:"Benedict Cumberbatch"},
      {question:"Which character, who died in the previous season of the show, reappeared in this episode?",options:["Moriarty","Dr. Watson","Insp. Lestrade"],correctAnswer:"Moriarty"},
      {question:"Mrs. Hudson, as Sherlock's landlady, puts up with quite a lot, from eyeballs in the microwave to a severed head in the fridge. But which of Sherlock's possessions does she continuously confiscate?",options:[ "his skull","his gun", "his cigarettes" ],correctAnswer:"his skull"},
      {question:"What was written on the image of Moriarty at the end of the third episode?",options:["Miss Me?","Kill Me?","Did hear me?"],correctAnswer: "Miss Me?"}
    ]  //database //
    
      res.render('trivia.ejs', {objects:questionListOfObjects} )
    })
    

    app.get('/home', (req,res)=>{
      res.render('home.ejs')
    })

const PORT = 5000;

app.listen(PORT, console.log(`Server running on  ${PORT}`));

