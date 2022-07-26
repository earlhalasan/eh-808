import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as loopAPI from "../../utilities/loops-api";

export default function LoopList({ allLoops, setAllLoops, setUpdated }) {
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    soundFile: "",
    onNotes: [],
  });

  //*** fucntion = creating new category ***//
  async function deleteLoop(evt) {
    console.log(evt.target.value);
    //sending new data to backend
    // get data again from the backend
    const loops = allLoops.filter((loop) => loop._id !== evt.target.value);
    console.log(loops);
    setAllLoops(loops);
    await loopAPI.deleteLoop(evt.target.value);
  }

  // *** fucntion = editing a category ***//
  async function editLoop(evt) {
    console.log(evt.target.value);

    // FrontEnd updating
    const loops = allLoops.filter((loop) => loop._id === evt.target.value);
    // loops[0].title = formData.title;
    // setEdit(!edit);
    // console.log(cats[0].title);
    // console.log(formData)

    //Backend updating
    loopAPI.editLoop(evt.target.value, formData);
    setFormData({
      title: "",
      soundFile: "",
      onNotes: [],
    });
  }

  //*** function = form data ***//
  function handleChange(evt) {
    const updatedLoop = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(updatedLoop);
    console.log(formData);
  }

  //*** function = Edit data ***//
  function handleEditing(evt) {
    console.log("edit mode activated");
    setEdit(!edit);
  }

  let viewMode = {};
  let editMode = {};

  if (edit) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  //   for categories
  //   function catFinder(a) {
  //     let r = allCats.filter((cat) => cat._id === a);
  //     console.log(allNotes);
  //     console.log(r);
  //     console.log(r[0].title);
  //     return r[0].title;
  //   }

  return (
    <>
      <div className="flex">
        <div className="h-screen overflow-y-auto">
          {allLoops ? (
            <div className="flex flex-col px-10 py-4">
              <div
                className="text-black flex flex-col-reverse justify-items-start order-last border-[#7b7e63] focus:text-black focus:bg-[#f7f7f2] font-extralight"
                aria-selected="false"
              >
                {allLoops.map((loop, idx, { setEdit }) => (
                  <>
                    <div
                      className="border-black border-[1px] rounded-md pt-2 pb-4 px-4 font-light my-3 w-[24.5rem] text-left"
                      id="hardshadow"
                      key={idx}
                    >
                      {/* <Link to={`/loops/${loop._id}`} style={viewMode}> */}
                      <p className="border-black border-b-[1px] text-lg">
                        {loop.title}
                      </p>
                      <i class="fa-solid fa-tag mt-1.5 pl-1.5 text-orange-500"></i>{" "}
                      &nbsp; {/* <p className="pt-2">{note.body}</p> */}
                      <button
                        value={loop._id}
                        className="bg-[#1f1f1f] flex items-end font-light text-sm text-white mt-4 py-1 px-3 rounded-lg hover:ring hover:ring-orange-400"
                        // style={editMode}
                        onClick={deleteLoop}
                      >
                        Delete
                      </button>
                      {/* </Link> */}
                      <input
                        type="text"
                        className="textInput"
                        style={editMode}
                        placeholder={loop.title}
                        onChange={handleChange}
                      />
                      {/* <button
                        className="border-1 border-black bg-[#7b7e63]  rounded text-white text-sm px-1 mx-2"
                        onClick={editNote}
                        type="submit"
                        style={editMode}
                      >
                        Edit
                      </button> */}
                      {/* <button
                        className="border-1 border-black bg-[#7b7e63]  rounded text-white text-sm px-1 mx-2"
                        type="submit"
                        value={note._id}
                        style={editMode}
                        onClick={handleEditing}
                      >
                        Save
                      </button> */}
                      {/* <br></br> */}
                    </div>
                  </>
                ))}
              </div>
            </div>
          ) : (
            <h5>loading</h5>
          )}
        </div>
      </div>
    </>
  );
}
