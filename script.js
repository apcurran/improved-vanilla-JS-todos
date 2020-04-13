"use strict";

{
    // Cached DOM selections
    const todoInput = document.querySelector(".form__group__input");
    // const addTodoBtn = document.querySelector(".form__group__submit");
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
        completedBtn.classList.add("todo__completed-btn");
        const completedBtnImg = document.createElement("img");
        completedBtnImg.src = "assets/images/icon-check-circle.svg";
        completedBtn.append(completedBtnImg);

        const trashBtn = document.createElement("button");
        trashBtn.classList.add("todo__trash-btn");
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

    todoForm.addEventListener("submit", addTodo);
}