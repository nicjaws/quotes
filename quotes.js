var quotes = [
    "I'm not interested in caring about people.",
    "Clear alcohols are for rich women on diets.",
    "On my deathbed, my final wish is to have my ex-wives rush to my side so I can use my dying breath to tell them both to go to hell one last time.",
    "I’m a simple man. I like pretty, dark-haired women, and breakfast food.",
    "It’s pointless for a human to paint scenes of nature when they can go outside and stand in it.",
    "There has never been a sadness that can’t been cured by breakfast food.",
    "Strippers do nothing for me…but I will take a free breakfast buffet anytime, anyplace.",
    "So you talked to Tammy? What's it like to stare into the eye of Satan's butthole?",
    "I once worked with a guy for three years and never learned his name. Best friend I ever had. We still never talk sometimes.",
    "When people get too chummy with me I like to call them by the wrong name to let them know I don't really care about them.",
    "The government is a greedy piglet that suckles on a taxpayer’s teat until they have sore, chapped nipples.",
    "Just give me all the bacon and eggs you have. Wait…wait. I worry what you just heard was: Give me a lot of bacon and eggs. What I said was: Give me all the bacon and eggs you have. Do you understand?",
    "History began on July 4, 1776. Everything that happened before that was a mistake.",
    "Fishing relaxes me. It’s like yoga, except I still get to kill something.",
    "America: The only country that matters. If you want to experience other ‘cultures,’ use an atlas or a ham radio.",
    "Sting like a bee. Do not float like a butterfly. That's ridiculous.",
    "When I eat, it is the food that is scared.",
    "Give 100%. 110% is impossible. Only idiots recommend that.",
    "You had me at ‘Meat Tornado.’",
    "Capitalism: God's way of determining who is smart and who is poor.",
    "Fishing is for sport only. Fish meat is practically a vegetable.",
    "There is only one bad word: taxes.",
    "Any dog under fifty pounds is a cat and cats are useless.",
    "Never half-ass two things. Whole-ass one thing.",
    "There's only one thing I hate more than lying: skim milk. Which is water that is lying about being milk.",
    "Dear frozen yogurt, you are the celery of desserts. Be ice cream or be nothing. Zero stars.",
  ]
  
  function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
  }