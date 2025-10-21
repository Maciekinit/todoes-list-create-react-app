const localStorageKey = "tasks";

export const sevaTasksInLocalStorage = tasks =>
    localStorage.setItem("tasks", JSON.stringify(tasks));

export const getTasksFromLocalStorage = () =>
    JSON.parse(localStorage.getItem("tasks")) || [];