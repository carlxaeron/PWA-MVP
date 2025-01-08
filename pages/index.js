import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the E-Learning Platform</h1>
      <p>This is the client-facing part of the application.</p>
      <Link href="/admin">
        <a>Go to Admin Interface</a>
      </Link>
    </div>
  );
}
