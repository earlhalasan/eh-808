// import "./CategoryList.css";

export default function CategoryList({ categories, activeCat, setActiveCat }) {
  const cats = categories.map((cat) => (
    <li
      key={cat}
      className="py-1.5 text-lg font-semibold hover:bg-gray-200 px-5 rounded-md place-items-center "
      // FYI, the below will also work, but will give a warning
      // className={cat === activeCat && 'active'}
      onClick={() => setActiveCat(cat)}
    >
      {cat}
    </li>
  ));
  return (
    <>
      <div className="px-3 py-1.5">
        <ul className="text-left">{cats}</ul>
      </div>
    </>
  );
}
