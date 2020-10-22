// Ignore this for now. I'm just putting in an array that will look like the record collection since I don't have all my functions in this doc
const COLLECTION =[
    {albumTitle: "Yummy Yummy", artist: "The Wiggles", year: 1994,},
    {albumTitle: "Young & Unafraid", artist: "The Moth & The Flame", year: 2016,},
    {albumTitle: "Bananaphone", artist: "Raffi", year: 1994,},
    {albumTitle: "This is the life", artist: "Amy Macdonald", year: 2007,},
    {albumTitle: "Secondhand Rapture", artist: "MS MR", year: 2013,},
    {albumTitle: "Mr Sandman - Single", artist: "SYML", year: 2017,}
]


// alright not a lot to go on here so I'd say you don't know where to start lol.
// I always just start with a bunch of comments in the order I think things should
// go in, and start putting my code in between each line.
// so something like:



// make a function that takes two inputs: an array (collection), and an object (searchQuery)
// we will need an empty array to start with, and add to it as we find matching records
// -the collection array has multiple objects (records)
// --each record object in the array has multiple keys (keys being the name of the variable that stores the value in the key:value pair)
// --the searchQuery object will also have one or a few key:value pairs 
// need to match up the keys of the searchQuery object with the same keys in each record object, and compare the values
// if ALL of the values from the searchQuery object match the record being compared, copy that record into the array we made at the begining of the function
// once all the records in the array have been gone through, return the new array




// so once I'm done with that, I'll start coding between the lines. It will look something like this.
// I don't want to give it away unless you want me to, but I personally don't learn like that so I'll just do the first couple lines
// as I'm coding, I'll move the lines around as necessary or rewrite them




// make a function that takes two inputs: an array (collection), and an object (searchQuery)
function search(searchQuery, collection) {
    // we will need an empty array to start with, and add to it as we find matching records
    const RESULTS = [];
    // -the collection array has multiple objects (records)
    // --each record object in the array has multiple keys (keys being the name of the variable that stores the value in the key:value pair)
    // --the searchQuery object will also have one or a few key:value pairs 
    // need to match up the keys of the searchQuery object with the same keys in each record object, and compare the values
    // if ALL of the values from the searchQuery object match the record being compared, copy that record into the array we made at the begining of the function
    // once all the records in the array have been gone through, return the new array
    
}



// ignore this next line for a second, along with other strange words in all-caps. They are tags for organization. I'll explain it in a bit
// TOASTER TOASTER
console.log('*********-------BEGIN TEST OF SEARCH FUNCTION-------*********');


// I also know that what the search query will look like, so I create that straight away because it will help with debugging
// I know exactly what it will look like because they told us in the notes, so I justt change it to fit the collection I made earlier
// FISH SALAD
console.log('Testing search: ', search({ artist: 'The Wiggles', year: 1994 }));

console.log('*********-------SECOND TEST OF SEARCH FUNCTION-------*********');

// I also know it might look different based on user input, so modify it to check multiple possibilities 
// FISH SALAD
console.log('Testing search: ', search({ albumTitle: 'Bananaphone', year: 1994 }));

// now I have multiple searches that will show results in the console. This can get confusing if there is nothing to separeate them,
// so put console logs on either side of the code we are runing. In this case, it is just the two consol.logs above where it says FISH SALAD.
// that's what the console log above, where it says TOASTER TOASTER, and this next one
// this does two things. It's big and easy to find, and it splits up the functions in the console so you know exactly what you are looking at
// they are al

console.log('*********-------END TEST OF SEARCH FUNCTION-------*********');







