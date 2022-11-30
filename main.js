
let myLeads = [];
const inputEl = document.getElementById("input-el");

let ulEl = document.getElementById("ul-el");  

//way1--onclick on html
let deleteBtn = document.getElementById("delete-btn") 
let tabBtn = document.getElementById("tab-btn")   


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))  
console.log(leadsFromLocalStorage); 
if (leadsFromLocalStorage) 
    myLeads = leadsFromLocalStorage;  
    render(myLeads); 
}


tabBtn.addEventListener("click", function () {  
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url);  
        localStorage.setItem("myLeads", JSON.stringify(myLeads))  
        render(myLeads)
    })
})


function render(leads) {   
    let listItem = " ";  
    for (let i = 0; i < leads.length; i++) {
        listItem += `<li><a target='_blank' href='${leads[i]}'>  ${leads[i]}  </a></li>`;
        ulEl.innerHTML = listItem;
    }
    ulEl.innerHTML = listItem;  //step9-outside the loop
}

 
deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear();
    myLeads = [];
    render(myLeads); 
})

//way2 --addEventListener
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);    
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads));   
    console.log(localStorage.getItem("myLeads"));  
    render(myLeads);  
})
