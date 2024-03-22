import React from "react";
import Input from "../Input/Input";
import Selector from "../SelectorFilter/SelectorFilter";
import "./PostFilter.css";
const PostFilter = ({ filter, setFilter }) => {
  return (
    <div className="select_container">
      <Input
        value={filter.search}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      ></Input>
      <Selector
        value={filter.sort}
        onChange={(SelectedSort) =>
          setFilter({ ...filter, sort: SelectedSort })
        }
        options={[
          { value: "priceHigher", name: "from higher to lower" },
          { value: "priceLower", name: "from lower to higher" },
        ]}
      ></Selector>
    </div>
  );
};

export default PostFilter;
