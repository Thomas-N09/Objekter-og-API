//1. create an array of 5 person objects, the objhects should contain first name last name, age and job properties, jobb should be a boolean.
//------------------------------------------------------------------------------------------------------------------------------------------------

let array = [
  {
    firstName: "Jack",
    lastName: "Sawyer",
    age: 25,
    job: true,
  },
  {
    firstName: "John",
    lastName: "Colton",
    age: 35,
    job: false,
  },
  {
    firstName: "Sophia",
    lastName: "Dalton",
    age: 30,
    job: true,
  },
  {
    firstName: "Anna",
    lastName: "Lincoln",
    age: 17,
    job: true,
  },
  {
    firstName: "Martin",
    lastName: "Smith",
    age: 55,
    job: false,
  },
];

console.log(array);

//2. print First and last name of the first person in the array. using dot notation on firstname and bracket notation last name
//------------------------------------------------------------------------------------------------------------------------------------------------
let first = array[0].firstName;
console.log(first);

const last = array[0]["lastName"];
console.log(last);

//3. That was tiresome.. just so much typing. Lets write a method to that we never need to that again..
//create a method in every person object that returns first and last name, call it fullName. This can be done manually for each one or with a loop.
//Print fullName of the second person in the array by calling the method.
//------------------------------------------------------------------------------------------------------------------------------------------------

array.forEach(function (element) {
  console.log(element.firstName + " " + element.lastName);
});

//4. Its the third person's birthday! And their job status changed. Update their age and job status using dot notation.
//------------------------------------------------------------------------------------------------------------------------------------------------

array[2].age = 31;
console.log(array[2].age);
array[2].job = false;
console.log(array[2].job);

//5. Person three is throwing a giant party! create a function called fotballPubben(). The function should check if
// the person is over 18, print "party time" if they are and "too young" if they are not. It should also print the name of the person.
// use a loop to call the function for every person in the array.
//------------------------------------------------------------------------------------------------------------------------------------------------

function fotballPubben() {
  let message = "";
  let messageTwo = "";
  array.forEach(function (array) {
    if (array.age >= 18) {
      message += array.firstName + "\n";
    } else if (array.age < 18) {
      messageTwo += array.firstName + "\n";
      console.log("too young \n" + messageTwo);
    }
  });
  console.log("party time \n" + message);
}
fotballPubben();

//6. It's time for school! Create a function called university. It should take in an person object as well as type of
// degree (bachelors or masters) as arguments.
// The function should update age and add two properties called "degree" and "student loan". The value of age, degree and student
//loan should change depending on what degree
//was passed into the function. Send one person to uni and print the result.
//------------------------------------------------------------------------------------------------------------------------------------------------

// Fikk ikke til denne :(
function university() {}

// 7. API TIME!
// Read the documentation of this dog API: https://dog.ceo/dog-api/documentation/
// Fetch 4 dogs of the same breed or sub-breed and display them in the DOM
//feel free to change the ID of the images and/or add css.
//------------------------------------------------------------------------------------------------------------------------------------------------
get_dog();
function get_dog() {
  const url = "https://dog.ceo/api/breed/hound/afghan/images/random";

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      display_image(data.message);
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
}

function display_image(image_url) {
  document.getElementById("image").src = image_url;
  document.getElementById("image2").src = image_url;
  document.getElementById("image3").src = image_url;
  document.getElementById("image4").src = image_url;
}

//BONUS!!
//create a way for you to change the breed of the dogs displayed on your page
//------------------------------------------------------------------------------------------------------------------------------------------------
