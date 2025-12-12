import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Get in touch with the Yap Fantasy team.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
