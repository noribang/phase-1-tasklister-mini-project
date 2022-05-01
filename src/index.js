document.addEventListener("DOMContentLoaded", () => {
  /* 
  1. As a user, I should be able to type a 
     task into the input field.
  2. As a user, I should be able to click 
     some form of a submit button.
  3. As a user, I expect to see the task string 
     that I provided appear in the DOM after the 
     submit button has been activated.
   */

  // console.log("DOMContentLoaded")
  const form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    // Prevent default page reload on submit event.
    e.preventDefault()
    buildTodo(e.target.new_task_description.value)
    /* Clear input text. */
    e.target.new_task_description.value = ""
  })

  function buildTodo(todo) {
    // console.log("Handling: ", todo)
    /* Create li element to put user input into. */
    const li = document.createElement("li")
    /* Create button element */
    const btn = document.createElement("button")
    /* Add .addEventListener to button 
       to be able to delete it later. */
    btn.addEventListener("click", handleDelete)
    btn.textContent = "x"
    /* Assign user input to li element. */
    li.textContent = `${todo} `
    /* Append button to li element. */
    li.appendChild(btn)
    // console.log(li)
    /* Append li element to ul element as a child element. */
    document.querySelector("#tasks").appendChild(li)
  }

  function handleDelete(e) {
    // console.log(e)
    /* Delete button as target and li as parentNode. */
    e.target.parentNode.remove()

  }


});

// console.log("Outside DOMContentLoaded")
