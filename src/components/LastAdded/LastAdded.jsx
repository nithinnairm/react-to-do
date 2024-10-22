/* eslint-disable react/prop-types */
import "./LastAdded.scss";
const LastAdded = ({ inputValue }) => {
  return (
    <>
      <h3>Last added item</h3>
      <p>{inputValue}</p>
    </>
  );
};
export default LastAdded;
