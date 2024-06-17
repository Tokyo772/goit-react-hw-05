import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <p>Not Found, go to Home page!</p>
      <Link to="/">Home</Link>
    </div>
  );
}
