interface IMemoItemProps {
  children: string;
  handleClickItem: () => void;
  isSelected: boolean;
  handleClickDelete: (e: React.MouseEvent) => void;
}
const MemoItem = ({
  children,
  handleClickItem,
  isSelected,
  handleClickDelete,
}: IMemoItemProps) => {
  return (
    <div
      className={"MemoItem" + (isSelected ? " selected" : "")}
      onClick={handleClickItem}
    >
      {children}
      <button className="MemoItem__delete-button" onClick={handleClickDelete}>
        X
      </button>
    </div>
  );
};

export default MemoItem;
