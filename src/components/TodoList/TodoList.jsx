import { useEffect, useRef, useState } from "react";
import ToDoCard from "../ToDoCard/ToDoCard";
import "./ToDoList.scss";
import LastAdded from "../LastAdded/LastAdded";
import TodoItemCount from "../TodoItemCount/TodoItemCount";
import CompletedItem from "../CompletedItem/CompletedItem";

const TodoList = () => {
  const [inputVal, setInputVal] = useState([]);
  const [updatedInputVal, setUpdatedInputVal] = useState([]);

  const [inputFieldValue, setInputFieldValue] = useState();

  const inputRef = useRef();

  // useEffect(() => {
  //   const LoadedInputVal = localStorage.getItem(inputVal);
  //   console.log("LoadedInputVal", LoadedInputVal);
  //   console.log("InputVal", inputVal);

  //   LoadedInputVal ? setInputVal(LoadedInputVal) : null;
  // }, []);
  useEffect(() => {
    // console.log("InputVal", inputVal);
    // localStorage.getItem(inputVal);
    localStorage.setItem("listItems", JSON.stringify(inputVal));
    // return () => {
    //   localStorage.setItem("listItems", "");
    //   console.log(inputVal);
    // };
  }, [inputVal]);

  const handleDataFromChild = (data) => {
    let dataValues = inputVal;
    let index = dataValues.findIndex((obj) => obj.id === data.id);
    dataValues.splice(index, 1);

    setInputVal([...dataValues]);
  };

  const updateCompletedItem = (UpdatedValue) => {
    let inputDatas = inputVal;
    let index = inputDatas.findIndex((obj) => obj.id === UpdatedValue.id);
    inputDatas[index].isCompleted = !inputDatas[index].isCompleted;
    console.log(UpdatedValue);
    setUpdatedInputVal(inputVal.filter((item) => item.isCompleted === true));
  };

  const inputFetch = () => {
    setInputVal((prev) => [
      ...prev,
      { id: prev.length ?? 0 + 1, desc: inputFieldValue, isCompleted: false },
    ]);
    setInputFieldValue("");
    inputRef.current.focus();
  };
  const removeItems = () => {
    const NewUpdatedInputVal = inputVal.filter(
      (item) => item.isCompleted === false
    );
    setInputVal(NewUpdatedInputVal);
    // setUpdatedInputVal(inputVal.filter((item) => item.isCompleted === true));

    // console.log(NewUpdatedInputVal);
  };

  // const saveTodo = () => {
  //   setInputVal((prev) => [
  //     ...prev,
  //     { id: prev.length ?? 0 + 1, desc: inputFieldValue },
  //   ]);
  //   setInputFieldValue("");
  // };

  return (
    <>
      <h1> To Do Items</h1>
      <form action="">
        <div className="to-do-input">
          <div className="input-group">
            <label htmlFor="todoInput" hidden>
              todoInput label
            </label>
            <input
              type="text"
              name="todoInput"
              id="todoInput"
              placeholder="What do you need to do?"
              value={inputFieldValue || ""}
              onChange={(e) => setInputFieldValue(e.target.value)}
              ref={inputRef}
            />
          </div>
          <button
            type="button"
            onClick={() => inputFetch()}
            className="to-do-submit"
            disabled={!inputFieldValue}
          >
            Add
          </button>
        </div>
      </form>
      {inputVal?.map((item, index) => {
        return item !== "" ? (
          <ToDoCard
            value={item}
            onDeleteListItem={handleDataFromChild}
            isCompletedUpdate={updateCompletedItem}
            key={item.desc + index}
          />
        ) : null;
      })}
      {inputFieldValue && <LastAdded inputValue={inputFieldValue} />}

      <TodoItemCount count={inputVal} />
      <CompletedItem
        updatedInputVal={updatedInputVal}
        onDeleteListItem={handleDataFromChild}
      />

      {/* <h2>Completed items</h2>
      {updatedInputVal?.map((item, index) => {
        return item !== "" ? (
          <ToDoCard
            value={item}
            onDeleteListItem={handleDataFromChild}
            key={item.desc + index}
            hideCheckbox={true}
          />
        ) : null;
      })} */}
      <button onClick={removeItems}>Remove completed items</button>
    </>
  );
};

export default TodoList;
