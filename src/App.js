import SearchBar from "./components/SearchHead/SearchBar";
import ApiResults from "./components/ApiRequests/ApiResults";
import {useState} from "react";


const App = () => {
  const [hitsTags, setHitsTags] = useState("")

  const handleSearchSubmit = (hitsTags) => {
    setHitsTags(hitsTags)
  }

  return (
    <div className={"main_content"}>
      <SearchBar onSubmit={handleSearchSubmit}/>
      <ApiResults hitsTags={hitsTags}/>
    </div>
  )
}
export default App



