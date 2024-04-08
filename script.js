
function test() {
  var name = document.getElementById("name").value;
  localStorage.setItem("Name", name);

  var mobile = document.getElementById("mob").value;
  localStorage.setItem("Mobile", mobile);

  var email = document.getElementById("ema").value;
  localStorage.setItem("Email", email);

  var dob = document.getElementById("date").value;
  localStorage.setItem("DOB", dob);

  var pass = document.getElementById("pass").value;
  localStorage.setItem("Password", pass);

  isValidate();
}

function rst() {
  localStorage.clear;

}

function validateLogin() {
  var userid = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;

  if (userid.trim() == "" || pass.trim() == "") {
    alert("No blank values allowed");
    return false;
  }
  else { return true; }
}
// function profile() {
  

  
// }
// profile();

function isValidate() {
  var uname = document.getElementById("name").value;

  var num = document.getElementById("mob").value;

  var mail = document.getElementById("ema").value;

  var pass1 = document.getElementById("pass").value;

  const phoneno = /^\d{10}$/;
  if (uname.trim() == "" || pass1.trim() == "") {
    alert("Please enter valid Credential");
    return false;
  }
  else if (!num.match(phoneno)) {
    alert("Invalid Contact Number");
    return false;
  }

  else { return true };

}
function verify() {
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  var user1 = localStorage.getItem("Email");
  var pass1 = localStorage.getItem("Password");

  if (user !== user1) {
    alert("Invalid UserID");
    return false;
  }
  else if (pass !== pass1) {
    alert("Invalid Password");
    return false;
  }
  else { return true; }

}

const apiKey = '74318a243035b78219ca998ec6b6ad74'
const city = 'Ahmedabad';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const weatherInfo = `
                        <h3><i class="fas fa-location"></i>${data.name}</h3>
                        <br>
                        <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                        <br>
                        <p>Weather: ${data.weather[0].description}</p>
                    `;
    document.getElementById('weather').innerHTML = weatherInfo;
  })
  .catch(error => console.error('Error fetching weather:', error));


function updateTime() {
  var now = new Date();


  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  if (hours > 12) {
    hours -= 12;
  }


  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');


  var timeString = hours + ':' + minutes + ':' + seconds;


  document.getElementById('live-time').innerText = timeString;
}
setInterval(updateTime, 1000);


// updateTime();

var gifUrls = [

  'https://media.giphy.com/media/3o7TKzCzCb8EfYRybC/giphy.gif',
  'https://media.giphy.com/media/l46C9MyE87YybDp3G/giphy.gif',
  'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
  'https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif'

];


function getRandomGifUrl() {
  return gifUrls[Math.floor(Math.random() * gifUrls.length)];
}


function updateRandomGif() {
  var randomGifUrl = getRandomGifUrl();
  document.getElementById('gif').src = randomGifUrl;
}
updateRandomGif();
setInterval(updateRandomGif, 4000)




const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


function addTask(taskContent) {

  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');
  taskItem.innerText = taskContent;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    taskItem.classList.toggle('completed');
  });
  taskItem.appendChild(checkbox);

  const updateButton = document.createElement('button');
  updateButton.innerText = 'Update';
  updateButton.addEventListener('click', () => {
    const newTaskContent = prompt('Enter updated task:');
    if (newTaskContent !== null) {
      taskItem.innerText = newTaskContent.trim();
    }
  });
  taskItem.appendChild(updateButton);

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', () => {
    taskItem.remove();
  });
  taskItem.appendChild(deleteButton);


  taskList.appendChild(taskItem);
}



taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskContent = taskInput.value.trim();
  if (taskContent !== '') {
    addTask(taskContent);
    taskInput.value = '';
  }
});


// const initialTasks = [];


// initialTasks.forEach(addTask);

