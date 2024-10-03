import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>CPRG-306 Assignments</h1>
      <br />
      <Link href="/week-2">Week 2 Assignments</Link>
      <br />
      <div>
        <br />
        <Link href="/week-3">Week 3 Assignments</Link>
        <br /><br></br>
        <Link href="/week-4">Week 4 Assignments</Link>
        <br />
      </div>
    </div>
  );
}