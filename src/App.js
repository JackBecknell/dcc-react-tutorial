import { useState } from "react";
import DisplayEntries from "./components/displayEntries/displayEntries";
import AddEntryForm from "./components/displayEntries/addEntry/addEntryForm";

function App() {
  
  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'},{weight: 180, date: '11-24-2021'},{weight: 179, date: '11-25-2021'}])

  function addNewEntry (entry) {
    let tempEntries = [...entries, entdry];
    setEntries(tempEntries)
  }
  return (
    <div>
      <DisplayEntries parentEntries = {entries}/>
      <AddEntryForm addNewEntryProperty={addNewEntry}/>
    </div>
  );
}
export default App;
