import ToDoCard from "../ToDoCard/ToDoCard";

const CompletedItem = (updatedInputVal, handleDataFromChild) => {
  return (
    <>
      <h2>Completed items</h2>
      {updatedInputVal?.map((item, index) => {
        return item !== "" ? (
          <ToDoCard
            value={item}
            onDeleteListItem={handleDataFromChild}
            key={item.desc + index}
            hideCheckbox={true}
          />
        ) : null;
      })}
    </>
  );
};
export default CompletedItem;
