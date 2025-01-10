import { IMemoType } from "../App";
import MemoList from "./MemoList";
import SideBarFooter from "./SideBarFooter";
import SideBarHeader from "./SideBarHeader";
interface ISideBarProps {
  memos: IMemoType[];
  setSelectedMemoIndex: React.Dispatch<React.SetStateAction<number>>;
  selectedMemoIndex: number;
  addMemo: () => void;
  deleteMemo: (index: number) => void;
}
const SideBar = ({
  memos,
  setSelectedMemoIndex,
  selectedMemoIndex,
  addMemo,
  deleteMemo,
}: ISideBarProps) => {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        setSelectedMemoIndex={setSelectedMemoIndex}
        selectedMemoIndex={selectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <SideBarFooter onClick={addMemo} />
    </div>
  );
};

export default SideBar;
