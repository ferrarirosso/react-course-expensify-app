import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};

// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// }, (e) => {
//     console.log('Some error when fetching data ', e);
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'Great note',
//     amount: 19500,
//     createdAt: 0
// });

// database.ref('expenses').push({
//     description: 'Coffee',
//     note: 'maybe macchiato',
//     amount: 2000,
//     createdAt: 100
// });

// database.ref('expenses').push({
//     description: 'Leasing!',
//     note: 'should be avoided',
//     amount: 200,
//     createdAt: -100
// });
// const onValueChange = database.ref().on('value', (snapshot) => {
//     var data = snapshot.val();
//     console.log(data.name + ' is a ' + data.job.title + ' working at ' + data.job.company);
// }, (e) => {
//     console.log('Some error when fetching data ', e);
// });

// database.ref().update({
//     name: 'Mike'
// });

// database.ref('isSingle').remove().then(() => {
//     console.log('isSingle was removed');
// }).catch((e) => {
//     console.log('remove failed ', e);
// });

// database.ref().set({
//     name: 'Nello D\'Andrea',
//     age: 48,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Münchenbuchsee',
//         country:'Switzerland'
//     }
// }).then(() => {
//     console.log('Data is saved 1');
// }).catch((e) => {
//     console.log('This failed 1 ', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company' : 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref().set({
//     age:50
// });

// database.ref('age').set(49);

// database.ref('location/city').set('London');

// database.ref('location/magical').set('Yes');

// database.ref('attributes').set({
//     height:175,
//     weight:90
// }).then(() => {
//     console.log('Data is saved 2');
// }).catch((e) => {
//     console.log('This failed 2 ', e);
// });
