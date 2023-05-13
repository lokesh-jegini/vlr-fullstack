function loki(event) {
  event.preventDefault();

  var text1 = document.getElementById("text1").value;
  var passord1 = document.getElementById("passord1").value;
  var radio1 = document.getElementById("radio1").value;
  var check1 = document.getElementById("check1").value;
  var textarea1 = document.getElementById("textarea1").value;
  console.log(text1);
  console.log(passord1);
  console.log(radio1);
  console.log(check1);
  console.log(textarea1);
  document.getElementById("text1").value = "";
  document.getElementById("passord1").value = "";
  document.getElementById("radio1").value = "";
  document.getElementById("check1").value = "";
  document.getElementById("textarea1").value = "";

  // Optionally, focus on the first text field after resetting the values
  document.getElementById("text1").focus();
}
