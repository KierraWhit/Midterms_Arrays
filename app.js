var listELe = document.body.querySelector(".list");
var list = [
    {
        name: "Harry",
        age: 25
    },
    {
        name: "Larry",
        age: 15
    },
    {
        name: "Bert",
        age: 45
    },
    {
        name: "Jerry",
        age: 35
    },
    {
        name: "Berry",
        age: 5
    },
    {
        name: "Bart",
        age: 55
    }
];

function renderList(){
    listELe.innerHTML="";
    for (var i=0; i<list.length; i++){
    ageUp(list[i].age);
    }
}

function ageUp(age, num){
    ageEle + num;


}
renderList();
ageUp(list[0].age);
for (var i=0; i<list.length; i++)
{
    var ele = document.createElement("div");
    var nameEle = document.createElement("h2");
    var ageEle = document.createElement("h4");
    nameEle.innerHTML = "Name: " + list[i].name;
    ageEle.innerHTML = "Age: " + list[i].age;
    if (list[i].age>25){
        nameEle.style.color ="green";
        ageEle.style.color = "green";
}


        ele.appendChild(nameEle);
        ele.appendChild(ageEle);
        document.body.appendChild(ele)
    }
document.body.querySelector(".button").addEventListener("click", function () {
    ageUp(ageEle,1)
    renderList();
    ageUp();
})

