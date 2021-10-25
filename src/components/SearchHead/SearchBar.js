import React, {useState} from "react";
import classes from "./SearchBar.module.scss";
import shortid from "shortid"
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const SearchBar = ({onSubmit}) => {
  const [search, setSearch] = useState("")
  const uniqueId = shortid.generate()

  const handleChangeName = (e) => {
    setSearch(e.currentTarget.value.toLowerCase())
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (search.trim() === "") {
      toast("Your form is empty!")
      return
    }
    onSubmit(search)
    setSearch("")
  }
  return (
    <header className={classes.Searchbar}>
      <form onSubmit={handleSubmit} className={classes.search_form}>
        <input
          className={classes.input_field}
          type="text"
          autoComplete="off"
          id={uniqueId}
          autoFocus
          value={search}
          onChange={handleChangeName}
          placeholder="Search images and photos"
        />
        <label htmlFor={uniqueId} className={classes.input_label}>Search Images...</label>
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick
                      rtl={false} theme="dark" pauseOnFocusLoss={false} draggable pauseOnHover/>
    </header>
  )
}
export default SearchBar

