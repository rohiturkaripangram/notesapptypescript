import { useState, useEffect } from "react";
import Header from "./Component/Header";
import Notecreate from "./Component/Notecreate";
import Notes from "./Component/Notes";
import { Box } from "@mui/material";
import "./App.css";
import { NoteObject } from "./models/note.interface";

function App() {
  const [note, setNote] = useState<NoteObject[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("note");
    if (storedData) {
      setNote(JSON.parse(storedData));
    }
  }, []);

  const addNote = (value: NoteObject) => {
    setNote([value, ...note]);
    localStorage.setItem("note", JSON.stringify([value, ...note]));
  };
  return (
    <>
      <Header />
      <Box>
        <Notecreate addNote={addNote} />
      </Box>
      <Notes note={note} setNote={setNote} />
    </>
  );
}

export default App;
