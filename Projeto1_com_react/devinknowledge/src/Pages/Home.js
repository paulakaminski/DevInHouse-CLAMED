import "./style.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import MainContent from "../Components/MainContent/MainContent";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <MainContent />
    </div>
  );
}
