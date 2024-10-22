import "./TodoItemCount.scss";

const TodoItemCount = ({ count }) => {
  return (
    <>
      <h3>Total no of Todo Items</h3>
      <p> {count.length}</p>
    </>
  );
};
export default TodoItemCount;
