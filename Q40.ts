/*Q40- 40.	Album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, and it should return a Object 
containing these two pieces of information. Use the function to make three dictionaries representing
 different albums. Print each return value to show that Objects are storing the album information correctly. 
 Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
 If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
 Make at least one new function call that includes the number of tracks on an album.*/

function make_album (artist: string, title: string, tracks?: number) : { artist: string, title: string, tracks?: number } 
{
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title,
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Call the function to create three dictionaries representing different albums
console.log(make_album('Erum', 'Pheli Wafa'));
console.log(make_album('Yousuf', 'Judai', 12));
console.log(make_album('Saba', 'Ahd e Wafa'));

// Call the function with an optional parameter for the number of tracks
console.log(make_album('Hina', 'Ye Zindagi', 10));