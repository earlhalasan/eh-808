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

  function loopFinder(a) {
    let r = allLoops.filter((loop) => loop._id === a);
    console.log(allLoops);
    console.log(r);
    console.log(r[0].title);
    return r[0].title;
  }

  return (
    <>
      <div className="">
        <div className="">
          {allLoops ? (
            <div className="">
              <div className="" aria-selected="false">
                {allLoops.map((loop, idx, { setEdit }) => (
                  <>
                    <div className="" id="" key={idx}>
                      {/* <Link to={`/loops/${loop._id}`} style={viewMode}> */}
                      {/* <a className="">{loopFinder(loop.category._id)}</a> */}
                      <p className="">{loop.title}</p>
                      <button
                        value={loop._id}
                        className=""
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
                        className=""
                        onClick={editNote}
                        type="submit"
                        style={editMode}
                      >
                        Edit
                      </button> */}
                      {/* <button
                        className=""
                        type="submit"
                        value={note._id}
                        style={editMode}
                        onClick={handleEditing}
                      >
                        Save
                      </button> */}
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
