import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchBook } from "../services/api";
import axios from "../services/axios";

const SearchBox = () => {
  const [searchContent, setSearchContent] = useState("");
  const [errMsg, setMsg] = useState("");
  const dispatch = useDispatch();
  const search = async(event)=>{
    event.preventDefault();
    console.log(searchContent, "searchContent");
    if(searchContent.trim()){
      dispatch(searchBook(searchContent))
    }else{
      setMsg("Search value cannot be empty!")
    }
  }
  return (
    <div>
      <label htmlFor="fname">Search Book</label>
      <input type="text" id="fname" name="fname" value={searchContent} onChange={value=>{setSearchContent(value.target.value); setMsg("");}} />
      <input type="button" value="Search" onClick={search}/>
      {errMsg?<p className="err-message">{errMsg}</p>:null}
    </div>
  );
};

export default SearchBox;
