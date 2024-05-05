import "./Burger.css";

function Burger({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      className={`styled-button ${open ? "styled-button__open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </button>
  );
}

export default Burger;
