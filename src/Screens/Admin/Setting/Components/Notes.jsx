import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React, { useState } from "react";
import NotesEdit from "../Screens/NotesEdit";
import SavedNotes from "../Screens/SavedNotes";

const Notes = () => {
  const [pageType, setPageType] = useState("editNotes");
  return (
    <>
      <div className="d-flex align-items-center justify-content-end mb-5">
        <button
          className="btn p-2 border-0"
          onClick={() => setPageType("editNotes")}
        >
          <FeatherIcon icon="edit" size={18} />
        </button>
        <button
          className="btn p-2 border-0"
          onClick={() => setPageType("savedNote")}
        >
          <FeatherIcon icon="save" size={18} />
        </button>
      </div>
      {pageType === "editNotes" && <NotesEdit />}
      {pageType === "savedNote" && <SavedNotes />}
    </>
  );
};

export default Notes;
