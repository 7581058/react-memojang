import React from "react";
import { IMemoType } from "../App";
import MemoItem from "./MemoItem";
interface IMemoListProps {
  memos: IMemoType[];
  setSelectedMemoIndex: React.Dispatch<React.SetStateAction<number>>;
  selectedMemoIndex: number;
  deleteMemo: (index: number) => void;
}
const MemoList = ({
  memos,
  setSelectedMemoIndex,
  selectedMemoIndex,
  deleteMemo,
}: IMemoListProps) => {
  return (
    <div className="MemoList">
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          handleClickItem={() => {
            setSelectedMemoIndex(index);
          }}
          handleClickDelete={(e: React.MouseEvent) => {
            deleteMemo(index);
            e.preventDefault();
            e.stopPropagation();
          }}
          isSelected={index === selectedMemoIndex}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
};

export default MemoList;
