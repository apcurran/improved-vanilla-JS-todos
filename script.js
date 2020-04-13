"use strict";

{
    // Cached DOM selections
    const todoInput = document.querySelector(".form__group__input");
    const todosUl = document.querySelector(".todos-list");
    const todoForm = document.querySelector(".form");

    function addTodo(event) {
        event.preventDefault();

        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        const newTodoLi = document.createElement("li");
        newTodoLi.classList.add("todo__item");

        newTodoLi.textContent = todoInput.value;
        clearTodoInput();

        const completedBtn = document.createElement("button");
        completedBtn.classList.add("todo__completed-btn", "todo__btn");
        const completedBtnImg = document.createElement("img");
        completedBtnImg.src = "assets/images/icon-check-circle.svg";
        completedBtn.append(completedBtnImg);

        const trashBtn = document.createElement("button");
        trashBtn.classList.add("todo__trash-btn", "todo__btn");
        const trashBtnImg = document.createElement("img");
        trashBtnImg.src = "assets/images/icon-trash.svg";
        trashBtn.append(trashBtnImg);

        // Append children to parent div
        todoDiv.append(newTodoLi, completedBtn, trashBtn);
        // Append todoDiv to todoListUl
        todosUl.append(todoDiv);
    }

    function clearTodoInput() {
        todoInput.value = "";
    }

    function checkButtonClick(event) {
        const clickedBtn = event.target.closest(".todo__btn");

        if (clickedBtn.matches(".todo__trash-btn")) {
            deleteTodo(event);
        } else if (clickedBtn.matches(".todo__completed-btn")) {
            checkOffTodo(event);
        }
    }
    
    function deleteTodo(event) {
        const todo = event.target.closest(".todo");

        // Add animation class
        todo.classList.add("fall");
        todo.addEventListener("animationend", () => todo.remove());
    }
    
    function checkOffTodo(event) {
        const todo = event.target.closest(".todo");
    
        todo.classList.toggle("completed");
    }

    todoForm.addEventListener("submit", addTodo);
    todosUl.addEventListener("click", checkButtonClick);
}