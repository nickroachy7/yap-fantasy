import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page">
      <h1>Welcome to Yap Fantasy</h1>
      <p>Your ultimate fantasy sports platform.</p>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
