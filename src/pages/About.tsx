import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="page">
      <h1>About Yap Fantasy</h1>
      <p>Learn more about our fantasy sports platform.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
