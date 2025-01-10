import { useCallback, useState } from "react";

import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/SideBar";
import { getItem, setItem } from "./lib/storage";

import debounce from "lodash.debounce";

import "./App.css";

export interface IMemoType {
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
}

const debounceSetItem = debounce(setItem, 2000);
function App() {
  const [memos, setMemos] = useState(getItem("memo") || []);
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = useCallback(
    (newMemo: IMemoType) => {
      setMemos((memos: IMemoType[]) => {
        const newMemos = [...memos];
        newMemos[selectedMemoIndex] = newMemo;
        debounceSetItem("memo", newMemos);
        return newMemos;
      });
    },
    [selectedMemoIndex]
  );

  const addMemo = useCallback(() => {
    setMemos((memos: IMemoType[]) => {
      const now = new Date().getTime();
      const newMemos = [
        ...memos,
        { title: "Untitled", content: "", createdAt: now, updatedAt: now },
      ];
      setItem("memo", newMemos);
      return newMemos;
    });
    setSelectedMemoIndex(memos.length);
  }, [memos]);

  const deleteMemo = useCallback(
    (index: number) => {
      setMemos((memos: IMemoType[]) => {
        const newMemos = [...memos];
        newMemos.splice(index, 1);
        setItem("memo", newMemos);
        return newMemos;
      });
      if (index === selectedMemoIndex) {
        setSelectedMemoIndex(0);
      }
      if (index < selectedMemoIndex) {
        setSelectedMemoIndex(selectedMemoIndex - 1);
      }
    },
    [selectedMemoIndex]
  );

  return (
    <div className="App">
      <SideBar
        memos={memos}
        setSelectedMemoIndex={setSelectedMemoIndex}
        selectedMemoIndex={selectedMemoIndex}
        addMemo={addMemo}
        deleteMemo={deleteMemo}
      />
      <MemoContainer setMemo={setMemo} memo={memos[selectedMemoIndex]} />
    </div>
  );
}

export default App;
