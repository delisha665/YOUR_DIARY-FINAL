const firebaseConfig = {
    apiKey: "AIzaSyC8vUaNY00TAQSVfIf3rfysmYzTieR_wI0",
    authDomain: "reminder-71b10.firebaseapp.com",
    databaseURL: "https://reminder-71b10-default-rtdb.firebaseio.com",
    projectId: "reminder-71b10",
    storageBucket: "reminder-71b10.appspot.com",
    messagingSenderId: "694869685953",
    appId: "1:694869685953:web:e364e03c025dfdae684640"
  };
firebase.initializeApp(firebaseConfig); 
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key; 
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      reminder_data = childData;
                      console.log(reminder_data);
                      reminder = reminder_data["reminder"];
                      time=reminder_data["time"];
                      reminder_html = "<h4>" + reminder + "</h4> "+ "<br>" +"<h5>"+time+"</h5>"
                      check_box="<input type='checkbox' id='reminder_checkbox'>"
                      document.getElementById("output").innerHTML +=  reminder_html+check_box;
                }
          });
    });
}
getData();
function add_reminder() {
    reminder = document.getElementById("reminder").value;
    time = document.getElementById("time").value;

    firebase.database().ref("/").push({

     reminder:reminder,
     time:time
         
    });
    document.getElementById("reminder").value = " ";
}
function back() {
    window.location="choose.html"
}