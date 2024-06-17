const firebaseConfig = {
  apiKey: "AIzaSyDJod3Atwge_mv3NWT1hcik8Dz5tTu6n-I",

  authDomain: "student-guidance-f67e2.firebaseapp.com",

  databaseURL: "https://student-guidance-f67e2-default-rtdb.firebaseio.com",

  projectId: "student-guidance-f67e2",

  storageBucket: "student-guidance-f67e2.appspot.com",

  messagingSenderId: "837697365941",

  appId: "1:837697365941:web:ed99881dfba63e977e5bfc",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
var studentDB = firebase.database().ref("Student Guidance");

document.getElementById("studentForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var Name = getElementVal("name");
  var email = getElementVal("email");
  var pass = getElementVal("password");
  var studentid = getElementVal("studentid");
  var semister = getElementVal("semister");
  var batch = getElementVal("batch");
  var section = getElementVal("section");
  save(Name, email, pass, studentid, semister, batch, section);
}
const save = (Name, email, pass, studentid, semister, batch, section) => {
  var newForm = studentDB.push();
  newForm.set({
    name: Name,
    email: email,
    pass: pass,
    studentid: studentid,
    semister: semister,
    batch: batch,
    section: section,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

document.getElementById("submit").addEventListener("click", alertBox);
function alertBox() {
  alert("Submitted");
  document.getElementById("studentForm").reset();
}
