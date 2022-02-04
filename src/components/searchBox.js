import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchBook } from "../services/api";

const SearchBox = () => {
  const [searchContent, setSearchContent] = useState("");
  const [errMsg, setMsg] = useState("");
  const dispatch = useDispatch();
  const search = async(event)=>{
    event.preventDefault();
    if(searchContent.trim()){
      dispatch(searchBook(searchContent))
    }else{
      setMsg("Search value cannot be empty!")
    }
  }
  const handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.keyCode === 13) {
    search(e);
  }
};
  return (
    <div className="search-area" data-test="SearchBox">
      <label htmlFor="fname">Search book title</label>
      <div className="search-bar">
      <input type="text" id="fname" name="fname" value={searchContent} onChange={value=>{setSearchContent(value.target.value); setMsg("");}} />
      <button onClick={search} onKeyPress={handleKeypress} className="btn"><span value="Search" className="material-icons-sharp" >search</span></button>
      </div>
      {errMsg?<p data-test="ErrorMsg" className="err-message">{errMsg}</p>:null}
    </div>
  );
};

export default SearchBox;
