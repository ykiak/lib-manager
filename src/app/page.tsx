import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to <span>Library Manager</span></h1>
      <p>Your app to control books borrowings and returns</p>
      <Link href="pages/sign-up">Get Started</Link>
    </div>
  );
}
