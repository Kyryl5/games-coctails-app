import { useRouteError } from "react-router-dom";
import BrandButton from "./UiElements/BrandButton";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="error-page">
      <h1 className="no-result-message-h1">Oops!</h1>
      <p>Sorry, something went wrong</p>
      <p>Сause: {error.statusText ?? error.message}</p>
      <BrandButton buttontext={"go home"} buttonlink={"/"} />
    </div>
  );
}
