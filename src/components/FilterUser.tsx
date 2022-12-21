import React from "react";
import "../components/FilterUser.css";
const FilterUser: React.FC<Props> = (Props) => {


  const onFilterValueChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(e.target.value)
    Props.fliterValueSelected(e.target.value);
  };
  return (
    <div>
      <div>
        <select
          className="custom-select"
          name="gender"
          id=""
          onChange={onFilterValueChanged}
        >
          <option value="all">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="age">age above 10</option>
        </select>
      </div>
    </div>
  );
};

export default FilterUser;

interface Props {
fliterValueSelected: (filervalue: string) => void
}
