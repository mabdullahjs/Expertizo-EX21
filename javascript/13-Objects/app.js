// // console.log('hello objects');



// // const arr = [];
// // arr.push('abd');
// // console.log(arr.push);
























// // const arr = ['1' , 2 , 3 , 4];
// // console.log(arr[2]);



// // const user = {
// //     name: 'abdullah',
// //     email: 'mabdullah2037@gmail.com',
// //     age: 20,
// //     isLoggedIn: false,
// // }
// // console.log(user.age);























































// // const user = {
// //     name:'abdullah',
// //     nestedObj: {
// //         nestedArr:['abdullah' , {
// //             name:'abd2',
// //             nestedObj:{
// //                 name:'abd3'
// //             }
// //         }]
// //     }
// // }
// // console.log();













// let complexObject = {
//     person: {
//         name: {
//             first: "John",
//             last: "Doe",
//         },
//         age: 30,
//         address: {
//             street: {
//                 number: 123,
//                 name: "Nested Street",
//             },
//             city: "Nested City",
//             country: "Nested Country",
//         },
//     },
//     work: {
//         company: {
//             name: "TechCorp",
//             location: {
//                 city: "TechCity",
//                 country: "TechCountry",
//             },
//         },
//         position: "Senior Developer",
//         projects: [
//             {
//                 name: "Project A",
//                 technologies: ["JavaScript", "React", "Node.js"],
//             },
//             {
//                 name: "Project B",
//                 technologies: ["Python", "Django", ["new" , ["postgresql"]]],
//             },
//         ],
//     },
//     hobbies: {
//         indoor: ["Reading", "Chess"],
//         outdoor: ["Hiking", "Cycling"],
//     },
// };

// // console.log(complexObject.work.company.location.country);
// // console.log(complexObject.work.projects[0].technologies[2]);
// console.log(complexObject.work.projects[1].technologies[2][1][0]);











































// const user = {
//     names: 'abdullah',
//     email: "mabdullah2037@gmail.com",
//     greetUser: function (){
//         console.log('function from object' , this.names);
//         // console.log(this);
//     }
// }
// console.log(user["names"]);
// console.log(user["my email"]);
// user.greetUser()


// console.log(this);



//anonymous function

// const func = function (){
//     console.log('hello world');
// }

// func()



// function greetUser (){
//     console.log('this from function' , this);
// }
// greetUser()







//constructor
// function createObject (names , age , isLoggedIn){
//     this.names = names;
//     this.age = age;
//     this.isLoggedIn = isLoggedIn;
// }

// const newObj = new createObject('abdullah' , 10 , true);
// console.log(newObj);






























// const arr = []

// function donationSlip(name, donation) {
//     this.name = name;
//     this.donation = donation;
// }

// function getDonation() {
//     const name = prompt('enter your name');
//     const donation = +prompt('enter your donation amount');
//     const userDetail = new donationSlip(name, donation);
//     arr.push(userDetail);
//     console.log(arr);
// }






























































// const user = {
//     names:'abdullah',
//     email:'mabdullah2037@gmail.com',
// }

// user.names = 'usman'
// user.age = 10
// user.age = 100

// console.log(user.age);





















//spread operator

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1 , ...arr2]
// console.log(arr3);

// const obj1 = {}
// const obj2 = {3:'3' , 4:'4'}
// const obj3 = {...obj1 , ...obj2}

// console.log(obj3);




// const obj2 = {
//     name: 'abdullah',
//     age: 20
// }

// console.log(Object.keys(obj2));
// console.log(Object.values(obj2));
// console.log(Object.entries(obj2));








const arr = [
    {
        name: 'abdullah',
        email: 'mabdullah2037@gmail.com'
    },
    {
        name: 'abdullah2',
        email: 'mabdullah2037@gmail.com2'
    },
    {
        name: 'abdullah3',
        email: 'mabdullah2037@gmail.com3'
    },
    {
        name: 'abdullah4',
        email: 'mabdullah2037@gmail.com4'
    },
    {
        name: 'abdullah5',
        email: 'mabdullah2037@gmail.com5'
    },
    {
        name: 'abdullah6',
        email: 'mabdullah2037@gmail.com6'
    },
    {
        name: 'abdullah7',
        email: 'mabdullah2037@gmail.com7'
    },
]

const div = document.querySelector('.container');
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    div.innerHTML = div.innerHTML + `name: ${arr[i].name} <br/>`
}





















































































































































