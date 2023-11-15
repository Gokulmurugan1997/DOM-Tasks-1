const form=document.getElementById("data");
const tbody=document.getElementById("table");

form.addEventListener("submit", function(e){
     e.preventDefault();
const firstname=document.getElementById("firstname").value;
const lastname=document.getElementById("lastname").value;
const address=document.getElementById("address").value;
const pincode=document.getElementById("pincode").value;
const Gender=document.getElementsByName("Gender");
for(let i=0; i<=1; i++){
if(Gender[i].checked===true){
 var gen=Gender[i].value;
}
}

const food=document.getElementsByName("food");
var fud=[];
for(let i=0; i<=4; i++){
if(food[i].checked===true){
 fud.push(food[i].value)
}
}
if (fud.length<2){
 fud="please select at least 2"
}

const State=document.getElementById("State").value;
const Country=document.getElementById("Country").value;


const newrow=tbody.insertRow();

const cell1=newrow.insertCell(0);
const cell2=newrow.insertCell(1);
const cell3=newrow.insertCell(2);
const cell4=newrow.insertCell(3);
const cell5=newrow.insertCell(4);
const cell6=newrow.insertCell(5);
const cell7=newrow.insertCell(6);
const cell8=newrow.insertCell(7);

cell1.textContent=firstname;
cell2.textContent=lastname;
cell3.textContent=address;
cell4.textContent=pincode;
cell5.textContent=gen;
cell6.textContent=fud;
cell7.textContent=State;
cell8.textContent=Country;

form.reset();
})