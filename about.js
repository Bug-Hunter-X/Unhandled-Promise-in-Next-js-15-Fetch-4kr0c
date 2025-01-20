```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a client-side error if not handled properly
  const data = fetch('/api/data'); //This fetch is not awaited.
  console.log(data); // data will not be what you are expecting. It's a promise

  return (
    <div>
      <h1>About Page</h1>
      <p>Some content</p>
      <p>Data: {JSON.stringify(data)}</p> 
    </div>
  );
}
```
```javascript
//pages/api/data.js

export default function handler(req, res) {
  res.status(200).json({ text: 'Data from API' });
}
```