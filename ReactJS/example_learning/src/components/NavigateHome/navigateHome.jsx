import { useNavigate } from "react-router-dom";
export default function NavigateHome() {
  const navigate = useNavigate();
  const handleGoToHomePage = () => {
    navigate("/home", { replace: true });
  };
  return (
    <>
      <button Click={handleGoToHomePage}>HOMEPAGE</button>
    </>
  );
}
