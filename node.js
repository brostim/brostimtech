/*let firstname = "brostim";
let age = 20;
let student = true;


console.log("hello", firstname);
console.log("you are", age + 1, "years old");
console.log(student)

document.getElementById("p1").innerHTML = "hello world";
*/


/*let name = window.prompt("what is your name")
 console.log(name);
 */




let department;
let myname;
let reg_no;
let entry_year;
let state;

document.getElementById("subtn").onclick = function(){

  department = document.getElementById("department").value;
  myname = document.getElementById("myname").value;
  reg_no = document.getElementById("school-reg-no").value;
  entry_year = document.getElementById("entry year").value;
  state =document.getElementById("state").value;


  console.log("your department is:", department);
  console.log("your name is:", myname);
  console.log("your reg_no is:", reg_no);
  console.log("your entry_year is:", entry_year);
  console.log("your state is:", state);
  document.getElementById("dep1").innerHTML = department;
  document.getElementById("ent1").innerHTML = entry_year;
  document.getElementById("name1").innerHTML = myname;
  document.getElementById("reg1").innerHTML = reg_no;
  document.getElementById("state1").innerHTML = state;


}



/*
document.querySelector("#upimg").addEventListener("change", function() {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    localStorage.setItem("recent-image", reader.result);
  });

  reader.readAsDataURL(this.Files[0]);
});

document.addEventListener("DOMContentloaded", () => {
  const recentImageDataUrl = localStorage.getItem("recent-image");

  if (recentImageDataUrl) {
    document.querySelector("#image-preview").setAttribute("src", recentImageDataUrl);
  }
});

*/






/*
 const upimg = document.querySelector("#upimg");
 var uploaded_image = "";
 upimg.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploaded_image = reader.result;
      document.querySelector("imgdiv").getElementsByClassName.backgroundimage = "url(${uploaded_image})";
    })
    reader.readAsDataURL(this.file[0]);
 })

*/






