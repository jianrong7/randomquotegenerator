let quotes = [
    "People often say that motivation doesn't last. Well, neither does bathing -- that's why we recommend it daily. -Zig Ziglar",
    "Someday is not a day of the week. -Denise Brennan-Nelson",
    "Hire character. Train skill. -Peter Schutz",
    "Your time is limited, so don't waste it living someone else's life. -Steve Jobs",
    "Sales are contingent upon the attitude of the salesman -- not the attitude of the prospect. -W. Clement Stone",
    "Everyone lives by selling something. -Robert Louis Stevenson",
    "If you are not taking care of your customer, your competitor will. -Bob Hooey",
    "The golden rule for every businessman is this: Put yourself in your customer's place. -Orison Swett Marden",
    "If you cannot do great things, do small things in a great way. -Napoleon Hill",
    "The best leaders are those most interested in surrounding themselves with assistants and associates smarter than they are. They are frank in admitting this and are willing to pay for such talents. -Antos Parrish",
    "Beware of monotony; it's the mother of all the deadly sins. -Edith Wharton",
    "Nothing is really work unless you would rather be doing something else. -J.M. Barrie",
    "Without a customer, you don't have a business -- all you have is a hobby. -Don Peppers",
    "To be most effective in sales today, it's imperative to drop your 'sales' mentality and start working with your prospects as if they've already hired you. -Jill Konrath",
    "Pretend that every single person you meet has a sign around his or her neck that says, 'Make me feel important.' Not only will you succeed in sales, you will succeed in life. -Mary Kay Ash"
]
var link = document.getElementById('tweetShare');

const changeAuthor = (index) => {
    const regex = ". -";
    let removalIndex = quotes[index].indexOf(regex);
    author = quotes[index].slice(removalIndex + 2);
    quote = quotes[index].slice(0, removalIndex + 1);
    return [quote, author];
}
const newQuote = () => {
    let index = getRandomArbitrary(0, quotes.length);
    let quote = document.querySelector("#text");
    let authorText = document.querySelector("#author");
    let values = changeAuthor(index);
    quote.innerHTML = values[0];
    authorText.innerHTML = values[1];
    let color = getRandomColor();
    document.querySelector("#body").style.backgroundColor = color;
    document.querySelectorAll("button").forEach(button => {
        button.style.backgroundColor = color;
    })
    return;
}
const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
document.onload = newQuote();

link.addEventListener('click',function(event){
    event.preventDefault();
    let quote = document.querySelector("#text")
    let author = document.querySelector("#author")
    window.open("https://twitter.com/share?url="+quote.innerHTML+" "+author.innerHTML);
},false);