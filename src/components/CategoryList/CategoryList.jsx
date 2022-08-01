// import "./CategoryList.css";
import React from "react";

export default function CategoryList({ categories, activeCat, setActiveCat }) {
  const cats = categories.map((cat) => (
    <li
      key={cat}
      className="py-1.5 text-lg font-semibold hover:bg-[#FCBF49] px-5 rounded-md place-items-center duration-200"
      // FYI, the below will also work, but will give a warning
      // className={cat === activeCat && 'active'}
      onClick={() => setActiveCat(cat)}
    >
      {cat}
    </li>
  ));
  return (
    <>
      {/* <div>Welcome, {user.name}</div> */}
      <div className="px-3 py-1.5 bg-white">
        <ul className="text-left">{cats}</ul>
      </div>
    </>
  );
}
