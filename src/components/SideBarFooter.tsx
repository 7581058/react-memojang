interface ISideBarFooterProps {
  onClick: () => void;
}
const SideBarFooter = ({ onClick }: ISideBarFooterProps) => {
  return (
    <div className="SideBarFooter">
      <button className="SideBarFooter__add-button" onClick={onClick}>
        페이지 추가
      </button>
    </div>
  );
};

export default SideBarFooter;
