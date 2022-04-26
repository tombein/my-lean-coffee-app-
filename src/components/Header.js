import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">Home</Link>

      <br />

      <Link href="/cards">cards</Link>

      <br />

      <Link href="/create">create</Link>
    </header>
  );
}
