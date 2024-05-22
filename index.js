
const table = document.getElementById("tb");
table.style.marginTop = "4%";
table.style.color = "LightGray";
table.style.backgroundColor = "rgb(90, 90, 90)";
table.style.textAlign="center";
table.style.width = "50%";

const btn=document.getElementById("btn");
btn.style.backgroundColor="gray";
btn.style.color="white";
btn.style.fontSize="15px";





function add() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const sec = document.getElementById("sec").value;
    const course = document.getElementById("course").value;
    const sem = document.getElementById("sem").value;

    if (!fname || !lname || !sec || !course || !sem) {
        alert("please input data!!!");
        return;
    }

    const tbody = document.getElementById("tbody");
    const item = document.createElement("tr");

    const td = document.createElement("td");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");


    td.innerHTML = fname;
    td1.innerHTML = lname;
    td2.innerHTML = sec;
    td3.innerHTML = course;
    td4.innerHTML = sem;

    tbody.append(item);

    item.appendChild(td);
    item.appendChild(td1);
    item.appendChild(td2);
    item.appendChild(td3);
    item.appendChild(td4);


    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("sec").value = "";
    document.getElementById("course").value = "";
    document.getElementById("sem").value = "";

document.body.style.backgroundColor="hsla(120, 60%, 70%, 0.3)";



}