import { useState } from "react";
import jsonData from "../src/data.json";

function SearchBar() {
  const [searched, setSearched] = useState();

  return (
    <div>
      <label>Search</label>
    </div>
  );
}

export default SearchBar;
