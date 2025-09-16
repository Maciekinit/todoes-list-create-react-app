import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Przejść kurs React.js", done: true },
  { id: 2, content: "Zrobić zakupy", done: false },
  { id: 3, content: "Odebrać pranie", done: false },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
        extaheaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      />
    </Container>
  );
}

export default App;

