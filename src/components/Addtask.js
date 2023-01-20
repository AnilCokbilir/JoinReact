import React, { useState } from "react";
import "./Addtask.css";
import arrowDown from "../assets/img/arrowDown.png";

function Addtask() {
  const assignees = [
    {
      username: "Mustafa",
      checked: false,
    },
    {
      username: "Anil",
      checked: false,
    },
  ];

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Development");
  const [selectedAssignees, setSelectedAssignees] = useState([]);
  const [dropdown, setDropdown] = useState(false);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const dropdownChangeHandler = (event) => {
    setCategory(event.target.value);
  };

  const openDropdownHandler = () => {
    setDropdown((prevState) => !prevState);
  };

  const selectUserHandler = (index) => {
    console.log(index);
    if(assignees[index].checked){
        assignees[index].checked = false;
        
    }else{
        assignees[index].checked = true;
    }
    // setSelectedAssignees(assignees[index].checked)
    // console.log(assignees)

    setSelectedAssignees(prevAssignee => ({...prevAssignee, checked: true}));
  }

  console.log(selectedAssignees);

  const ShowAssignes = () => {
    return (
      <div className="dropdown border-gray-300 rounded-b-lg border-2 border-solid pl-1 border-t-0">
        {assignees.map((assignee, index) => (
          <div key={index}>
            <label  onClick={() => {selectUserHandler(index)}}  className="flex justify-between">
              {assignee.username} <input type="checkbox" className="mr-1" />
            </label>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h2 className="text-6xl text-left my-8">Add Task</h2>
      <form>
        <div className="leftSection">
          <div className="flex flex-col mb-8">
            <label className="text-left">Title</label>
            <input
              className="rounded-lg border-gray-300 border-2 border-solid"
              placeholder="Type title"
              onChange={titleChangeHandler}
            />
          </div>
          <div className="flex flex-col join-textfields mb-8">
            <label className="flex flex-col text-left">Description</label>
            <textarea
              className="rounded-lg border-gray-300 border-2 border-solid"
              placeholder="Type description"
              onChange={descriptionChangeHandler}
            />
          </div>
          <div className="flex flex-col mb-8">
            <label className="text-left">Category</label>
            <select
              className="rounded-lg border-gray-300 border-2 border-solid"
              onChange={dropdownChangeHandler}
            >
              <option value="Development">Development</option>
              <option value="Sales">Sales</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-left">Assigned To</label>
            <div>
              <div
                className={`text-left rounded-t-lg border-gray-300 border-2 border-solid flex justify-between items-center pl-1 ${
                  dropdown ? "border-b-0" : "rounded-lg"
                }`}
                onClick={openDropdownHandler}
              >
                Select Contacts to assign{" "}
                <img
                  className="arrowIcon mr-1"
                  src={arrowDown}
                  alt="Arrow down"
                />
              </div>
              <div>{dropdown ? <ShowAssignes /> : null}</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Addtask;
