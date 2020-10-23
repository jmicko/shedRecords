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
// It also often helps to write the last bit of code first so you know what the goal is. So in this case, the return.
// most the time it will be a return, but sometimes you will have several returns throughout the code, or none at all. 
// So it doesn't always work but I do it when I can



// make a function that takes two inputs: an array (collection), and an object (searchQuery)
function search1(searchQuery, collection) {
    // we will need an empty array to start with, and add to it as we find matching records
    const RESULTS = [];
    // -the collection array has multiple objects (records)
    // --each record object in the array has multiple keys (keys being the name of the variable that stores the value in the key:value pair)
    // --the searchQuery object will also have one or a few key:value pairs 
    // need to match up the keys of the searchQuery object with the same keys in each record object, and compare the values
    // if ALL of the values from the searchQuery object match the record being compared, copy that record into the array we made at the begining of the function
    // once all the records in the array have been gone through, return the new array
    return RESULTS;
}



// ignore this next line for a second, along with other strange words in all-caps. They are tags for organization. I'll explain it in a bit
// TOASTER TOASTER
console.log('*********-------BEGIN TEST OF SEARCH1 FUNCTION-------*********');


// I also know that what the search query will look like, so I create that straight away because it will help with debugging
// I know exactly what it will look like because they told us in the notes, so I justt change it to fit the collection I made earlier
// FISH SALAD
console.log('Testing search: ', search1({ artist: 'The Wiggles', year: 1994 }));
// Obviously these logs are not going to work because I don't actually have any code lol
console.log('*********-------SECOND TEST OF SEARCH1 FUNCTION-------*********');

// I also know it might look different based on user input, so modify it to check multiple possibilities 
// FISH SALAD
console.log('Testing search: ', search1({ albumTitle: 'Bananaphone', year: 1994 }));

// now I have multiple searches that will show results in the console. This can get confusing if there is nothing to separeate them,
// so put console logs on either side of the code we are runing. In this case, it is just the two consol.logs above where it says FISH SALAD.
// that's what the console log above, where it says TOASTER TOASTER, and this next one
// this does two things. It's big and easy to find, and it splits up the functions in the console so you know exactly what you are looking at
// they are almost always huge messages for the outside of each function call, that way they are easier to identify among all the other logs,
// and they separate each test into an easy to identify chunk in the console

console.log('*********-------END TEST OF SEARCH1 FUNCTION-------*********');
console.log('*********-------BEGIN TEST OF NEW SEARCH FUNCTION-------*********');



// So this next part mary kind of went over in class a little bit, But I'm gonna show an example.
// I't's your own code so you should be able to follow it lol.
// gotta build the collection first so
let collection = [];
function addToCollection(album, artist, year){
    let info = {
      album: album,
      artist: artist,
      year: year
      }
    collection.push(info);
    return info;
}

// add another log for clarity
console.log('building new collection to test nest search function');
// Also used the tab key to line all the values up to make it easier to read, and organized it descending by year
console.log(addToCollection('Thriller',                         'Michael Jackson',      '1982'));
console.log(addToCollection('What\'s Love Got to do with It',   'Tina Turner',          '1984'));
console.log(addToCollection('Selena',                           'Selena Quintanilla',   '1989'));
console.log(addToCollection('Dreaming of You',                  'Selena Quintanilla',   '1995'));
console.log(addToCollection('A Decade of Song',                 'Celion Dion',          '1999'));
console.log(addToCollection('Christina Aguilera',               'Christina Aguilera',   '1999'));
// I try to make the logs descriptive so I know where they are coming from without have to trace the line numbers
// make them long if you need a point that's easy to find while scrolling through the console
console.log('----------collection is built and looks like this:', collection);


// Basically we want to put console.logs all over the function and make them very descriptive as to where they are in the code, and what they are doing
// so something like this.
// It's worth noting that I have never seen a desctructured object before. I'm going to figure out what it is with just console logs
// I'm going to leave all the logs in there even if they don't work just to how how you can use them. it helps to know what doesn't work 
// I am making them a lot more wordy than I normally do. Typically they only need to be understood by me since I delete them and just make good
// notes before anyone else sees my code

function search2(array, criteria){
    // this log will tell us the input values so we can make sure they came in correctly and we know what they look like when we start using them
    // it also helps us to know what exactly we are putting into the destructered object, so we can see later how the destructuring works
    console.log('the input array is: ', array, ', and the input criteria is: ', criteria);
    const {album, artist, year} = criteria || {}; // destructured object: sets  values for our objects, and also allows a default  value if
    // ^^^this is neat and I like it. I was trying to figure out a way to cut out one more line of code but then decided there was no point lol. This is basically the line I needed
    // Add another log to see what it is, and maybe a couple to understand how it work since it's new to me
    // just realized when I didn't see my logs in the console that I've got two different functions named "search" so I went back and changed the other one to be named search1 and this is search2
    console.log('this is what looks like a constant named "album" I expect it to be the album title from the input object:', album);
    // okay so it looks like noneof the search tests you gave me include an album, which is why that ^ console.log came up with nothing.
    // I'm going to add an album to one of them and try again.
    // ope, found a problem. look below at the third test and then come back here. This divider line should mmake it easy to find again
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////        
    // okay welcome back lol. I'm gonna test the other three just to make sure they work and then comment them out so they don't clutter up the console
        // console.log('this is what looks like a constant named "artist" I expect it to be the album title from the input object:', artist);
        // console.log('this is what looks like a constant named "year" I expect it to be the album title from the input object:', year);
    // okay they work as expected so I'm gonna commit and push now and then keep going
    const results = [];
    if(album||artist||year){
      for(let i = 0; i < array.length; i++){
        if(array[i].album === album || array[i].artist === artist || array[i].year === year){
          results.push(array[i]);
        }
      } return results;
    } return array;
}

// here again, mark the start of the tests to split them up in the console. I added descriptions of what is being searched so
// we can compare it to the results right in the console instead of looking back and forth

console.log('*********-------FIRST TEST OF SEARCH2 FUNCTION-------*********');
console.log('searching for Tina Turner, 1984', search2(collection, {artist: 'Tina Turner', year: 1984}));

console.log('*********-------SECOND TEST OF SEARCH2 FUNCTION-------*********');
console.log('searching for Tina Max, 1847', search2(collection, {artist: 'Tina Max', year: 1847}));

console.log('*********-------THIRD TEST OF SEARCH2 FUNCTION-------*********');
console.log('searching for Celion Dion', search2(collection, {album:'Selena', artist: 'Celion Dion', year: 1999}));
// okay so searching for a record that doesn't exist still shows two results. Selena is not by Celion Dion, but it returns both albums: Selana and A Decade of Song
    // The assignment is jusssst slightly ambigious enough that you could say it works because each of those records matches at least one search result, but as an end user, 
    // that isn't how I would expect a search to work. If I put in search parameters that could only match one album, I would expect only that album to show up in the results
    // this kind of works with our small 6 record collection, but imaginee if we had 30 records, and 10 of them happened to have the album title 'top hits', 10 different ones
    // were by fleetwood mac, and another 10 were written in 1990. A search for "top hits fleetwood mac 1990" would return every song in the collection, even though I'm only searching for one

// I'm actually surprised at this point that it didn't also return Christina Aguilera, since that came out in the same year. I haven't finished reading through 
// your code yet, but I'm gonna run a search for 1999 and see what turns up so I maaybe get an idea where to start looking

console.log('*********-------FOURTH TEST OF SEARCH2 FUNCTION-------*********');
console.log('searching for 1999', search2(collection, {year: 1999}));
// okay so that actually returns nothing, and looking further in the code shows the use of === in an if statement. There's a good way to catch this with a console.log that 
// I'll get to as I continue through the code. for now I'm just going to  make sure 1999 goes in as a string and test again.

console.log('*********-------FOURTH TEST OF SEARCH2 FUNCTION-------*********');
console.log('searching for 1999', search2(collection, {year: '1999'}));



console.log('*********-------END TEST OF SEARCH2 FUNCTION-------*********');






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function showCollection(array){
//   console.log(array.length); //
//     for(let i = 0; i < array.length; i++){
//       console.log(`${array[i].album} by ${array[i].artist} , published in ${array[i].year}`);
//     }
//     return 'Showing collection information above';
//   }



// console.log(showCollection(collection));
// function findByArtist(stringArtist){
//   let matchingArtist = [];
//   for (let j = 0; j < collection.length; j++){
//     if(stringArtist === collection[j].artist){
//       matchingArtist.push(stringArtist);
//     }
//   }
//   return matchingArtist;
// }


// console.log('Is this artist in Yer\'s collection?' , findByArtist('Selena Quintanilla'));
// console.log('Is this artist in Yer\'s collection?' , findByArtist('Touly Vangkhue'));
// console.log('Is this artist in Yer\'s collection?' , findByArtist('Tina Turner'));
// console.log('Is this artist in Yer\'s collection?' , findByArtist('Michael Jackson'));
// console.log('Is this artist in Yer\'s collection?' , findByArtist('Celion Dion'));
// console.log('Is this artist in Yer\'s collection?' , findByArtist('Christina Aguilera'));
                                                                                    // It's generally good to have a spoace between your codes to help readability

// function findByTitle(stringTitle){
//   let matchingTitle = [];
//   for (let j = 0; j < collection.length; j++){
//     if(stringTitle === collection[j].album){
//       matchingTitle.push(stringTitle);
//     }
//   }
//   return matchingTitle;
// }


// console.log('Is this title in Yer\'s collection?' , findByTitle('Selena'));
// console.log('Is this title in Yer\'s collection?' , findByTitle('Dreaming of You'));
// console.log('Is this title in Yer\'s collection?' , findByTitle('Disney Greatest Hits'));
// console.log('Is this title in Yer\'s collection?' , findByTitle('Thriller'));
// console.log('Is this title in Yer\'s collection?' , findByTitle('What\'s Love Got to do with It'));
// console.log('Is this title in Yer\'s collection?' , findByTitle('A Decade of Song'));
// function findByYear(stringYear){
//   let matchingYear = [];
//   for (let j = 0; j < collection.length; j++){
//     if(stringYear === collection[j].year){
//       matchingYear.push(stringYear);
//     }
//   }
//   return matchingYear;
// }
// console.log('Year published: ', findByYear('1982'));
// console.log('Year published: ', findByYear('1995'));
// console.log('Year published: ', findByYear('2080'));
// console.log('Year published: ', findByYear('2025'));
// console.log('Year published: ', findByYear('1999'));
// console.log('Year published: ', findByYear('1984'));
// function search(array, criteria){
//   const {album, artist, year} = criteria || {}; // destructured object: sets  values for our objects, and also allows a default  value if
//   const results = [];
//   if(album||artist||year){
//     for(let i = 0; i < array.length; i++){
//       if(array[i].album === album || array[i].artist === artist || array[i].year === year){
//         results.push(array[i]);
//       }
//     } return results;
//   } return array;
// }
// console.log(search(collection, {artist: 'Tina Turner', year: 1984}));
// console.log(search(collection, {artist: 'Tina Max', year: 1847}));
// console.log(search(collection, {artist: 'Celion Dion', year: 1999}));