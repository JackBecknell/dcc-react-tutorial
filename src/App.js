import { useState } from "react";
import DisplayEntries from "./components/displayEntries/displayEntries";
import AddEntryForm from "./components/addEntry/addEntryForm";
import EntriesChartTracker from "./components/EntriesChartTracker/EntriesChartTracker";

function App() {
  
  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'},{weight: 180, date: '11-24-2021'},{weight: 179, date: '11-25-2021'}])

  function addNewEntry (entry) {
    let tempEntries = [...entries, entry];
    setEntries(tempEntries)
  }
  return (
    <div>
      <DisplayEntries parentEntries = {entries}/>
      <AddEntryForm addNewEntryProperty = {addNewEntry}/>
      <EntriesChartTracker parentEntries = {entries}/>
    </div>
  );
}
export default App;
