import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  return (
    <div>
      <label htmlFor="fname">Search Book</label>
      <input type="text" id="fname" name="fname" />
      <input type="button" value="Search" />
    </div>
  );
};

export default SearchBox;
