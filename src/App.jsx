import React from "react";

import Header from "./Components/Header";
import Note from "./Components/Note";
import notes from "./Data/notes";
import Footer from "./Components/Footer";



function App() {
return <div>
    <Header/>
    {notes.map(noteEntry => (
        <Note
            key ={noteEntry.id}
            title = {noteEntry.title}
            content = {noteEntry.content}
        />
    ))}
    <Footer/>
</div>
}

export default App;