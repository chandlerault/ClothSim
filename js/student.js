let Student = {
  // please fill in your name and NetID
  // your NetID is the part of your email before @princeton.edu
  name: "Chandler Ault",
  netID: "cjault",
};

Student.updateHTML = function() {
  let studentInfo = this.name + " &lt;" + this.netID + "&gt;";
  document.getElementById("student").innerHTML = studentInfo;
};
