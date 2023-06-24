
const addToListBtn = document.getElementById("add-button");

const inputField = document.getElementById("input-field");

const shoppingList = document.getElementById("shopping-list");



const deleteListModal = document.getElementById("delete-modal")
const deleteListBtn = document.getElementById("delete-btn");
const closeDeleteModal = document.getElementById("close-delete-modal")
const deleteListOption = document.getElementById("delete-option")


const saveModal = document.getElementById("save-modal");
const saveBtn = document.getElementById("save-btn");
const closeSaveModal = document.getElementById("close-save-modal");
const saveModalOption = document.getElementById("save-option");
const nameSaveModal = document.getElementById("name-save-modal");
const nameSaveOption = document.getElementById("name-save-option");
const closeNameModal = document.getElementById("close-name-modal");
const userTableName = document.getElementById("table-name");


const userListArray = []



// This belongs to the delete button and will take to confirmation modal upon user input
deleteListBtn.addEventListener("click", function (){
    deleteListModal.showModal();
})
// This will delete the list present on the screen unsaved list will be lost
deleteListOption.addEventListener("click", function(){
    shoppingList.innerHTML = "";
    deleteListModal.close();

})
// This will close the delete confirmation modal upon user input
closeDeleteModal.addEventListener("click", function(){
    deleteListModal.close();
})

// Closes all modals after saving the users database 
nameSaveOption.addEventListener("click", function(){
    
    nameSaveModal.close();
    saveModal.close();
})
// allows user to cancel the save
closeNameModal.addEventListener("click", function(){
    nameSaveModal.close();
    saveModal.close();
})
// brings user to save modal and ask for confirmation
saveBtn.addEventListener("click", function(){
    saveModal.showModal();

})
// opens the save name modal when user clicks the save button allowing user to name their list 
saveModalOption.addEventListener("click", function(){
    nameSaveModal.showModal();
})
closeSaveModal.addEventListener("click", function(){
    saveModal.close();
})

// If user input is not a empty string appends user input to list array and to the list html element
addToListBtn.addEventListener("click", function(){
    
    const userInputValue = inputField.value
    if(userInputValue !== ""){
        
        pushToList(shoppingList, userInputValue)
    }
    
   
    const liElements = shoppingList.querySelectorAll("li");
    clearInput(inputField);
    for (let i = 0; i < liElements.length; i++){
        liElements[i].addEventListener("click", function(){
            liElements[i].remove();
        });
    }
    
    

} )

// Clears the input field after user adds an item to the list
function clearInput(inputField){
    inputField.value = "";
}
function pushToList(shoppingList, userInput){
    shoppingList.innerHTML += `<li> ${userInput} </li>`;
    userListArray.push(userInput);
}
