import { useState } from "react";
import DisplayEntries from "./components/displayEntries/displayEntries";

function App() {
  
  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'},{weight: 180, date: '11-24-2021'},{weight: 179, date: '11-25-2021'}])

  return (
    <div>
      <DisplayEntries parentEntries={entries}/>
      <DisplayEntries parentEntries = {entries}/>
    </div>
  );
}
export default App;
