/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div role="tablist" className="tabs tabs-lifted">
      {categories.map((category) => (
        <NavLink
          key={category.id}
          className={({ isActive }) =>
            `tab text-2xl font-thin ${isActive ? "tab-active" : ""}`
          }
          role="tab"
          to={`/category/${category.category}`}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
