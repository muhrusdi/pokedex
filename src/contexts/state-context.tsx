import React, { useState } from "react";

export const StateContext = React.createContext({});

const StateProvider = ({ children }) => {
  const [data, setData] = useState({
    bookmarks: {}
  });

  const handleAdd = bookmark => {
    setData(s => ({
      ...s,
      bookmarks: { ...s.bookmarks, ...bookmark }
    }));
  };

  const handleDelete = id => {
    delete data.bookmarks[id];
    setData(s => ({
      ...s,
      bookmarks: data.bookmarks
    }));
  };

  return (
    <StateContext.Provider
      value={{
        bookmarks: data.bookmarks,
        handleAdd,
        handleDelete
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
