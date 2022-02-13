import fetch from 'node-fetch';

/**
 *  TODO добавить теории
 */

// до использования колбека
fetch('https://cat-fact.herokuapp.com/facts')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        //console.log(data);
    });

// после колбека
function getCats(callback) {
    fetch('https://cat-fact.herokuapp.com/facts')
        .then((response) => {

            return response.json();
        })
        .then((data) => {
            callback(data);
        });
}

function showCatFullInfo(data) {
    data.map((item) => console.log(item));
}

function showCatFact(data) {
    data.map((item) => console.log(item.text));
}

// {
//   status: { verified: true, sentCount: 1 },
//   _id: '58e008800aac31001185ed07',
//   user: '58e007480aac31001185ecef',
//   text: 'Wikipedia has a recording of a cat meowing, because why not?',
//   __v: 0,
//   source: 'user',
//   updatedAt: '2020-08-23T20:20:01.611Z',
//   type: 'cat',
//   createdAt: '2018-03-06T21:20:03.505Z',
//   deleted: false,
//   used: false
// }
getCats(showCatFullInfo);

// Wikipedia has a recording of a cat meowing, because why not?
getCats(showCatFact);
