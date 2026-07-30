import DEBUGZ from "../assets/DEBUGZ.jpeg"; 

export default function Logo() {
  return (
    <div className="select-none">
      <img
        src={DEBUGZ}
        alt="DEBUGZ Logo"
        className="h-10 w-auto"
      />
    </div>
  );
}