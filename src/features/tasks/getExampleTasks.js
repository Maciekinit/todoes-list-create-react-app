export const getExampleTasks = async () => {
    const response = await fetch("/todoes-list-create-react-app/exampleTasks.json");

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};
