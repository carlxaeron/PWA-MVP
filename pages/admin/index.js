import Link from 'next/link';

export default function Admin() {
  return (
    <div>
      <h1>Admin Interface</h1>
      <p>This is the admin-facing part of the application.</p>
      <Link href="/">
        <a>Go to Client Interface</a>
      </Link>
    </div>
  );
}
