import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button } from "./styled";
import { selectTasks, toggleHideDone, selectAreEmpty, selectHideDone, selectIsEveryTaskDone } from "../tasksSlice";


const Buttons = ({ setAllDone }) => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();
    return (
        <Wrapper>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
            {!areTasksEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Wrapper>
    )
};

export default Buttons;