const quotes = [
  {
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author:"Nelson Mandela",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "Only I can change me life, no one can do it for me.",
    author: "Carol Burnett"
  },
  {
    quote: "Despite the forecast, live like it’s spring.",
    author: "Lilly Pulitzer",
  },
  {
    quote: "Turn your wounds into wisdom.",
    author: "Oprah Gail Winfrey",
  },
  {
    quote: "When you have faults, do not fear to abandon them.",
    author: "Confucius",
  },
  {
    quote: "They must often change who would be constant in happiness or wisdom.",
    author: "Confucius",
  },
  {
    quote: "The goal of life is living in agreement with nature.",
    author: "Zeno",
  },
  {
    quote: "This too shall pass.",
    author: "Et hoc transibit",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//결과는 모두 숫자
//Math.random() -> 0~1 사이의 수를 랜덤으로 준다.
//Math.round() -> 반올림
//Math.ceil() -> 올림
//Math.floor() -> 내림

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;