
import Link from 'next/link';

export default function Page() {
    return (
        <div>
        <h1>CPRG- 306 assignments</h1><br></br>
   
        {/* <li>
          <a href="/week-2"> week2 </a>
        </li> */}

        <Link href="/week-2"> Week 2 Assignments</Link><br></br>
        <div><br></br>
        
        <p>Week 3 Assignments</p><br></br>
        <p>Week 4 Assignments</p>
        </div>
        </div>
    );
};