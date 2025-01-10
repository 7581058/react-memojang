import { IMemoType } from "../App";

interface IMemoContainerProps {
  memo: IMemoType;
  setMemo: (newMemo: IMemoType) => void;
}
const MemoContainer = ({ memo, setMemo }: IMemoContainerProps) => {
  if (memo === undefined) {
    return (
      <div>
        <span>메모가 없습니다.</span>
        <span>새로운 메모를 추가해주세요.</span>
      </div>
    );
  }
  return (
    <div className="MemoContainer">
      <div>
        <input
          className="MemoContainer__title"
          type="text"
          value={memo.title}
          onChange={(e) => {
            setMemo({
              ...memo,
              title: e.target.value,
              updatedAt: new Date().getTime(),
            });
          }}
        />
      </div>
      <div>
        <textarea
          className="MemoContainer__content"
          value={memo.content}
          onChange={(e) => {
            setMemo({
              ...memo,
              content: e.target.value,
              updatedAt: new Date().getTime(),
            });
          }}
        />
      </div>
    </div>
  );
};

export default MemoContainer;
