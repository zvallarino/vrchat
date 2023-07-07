import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div>hello overall page</div>
      <Link href="/homepage">
        hello
      </Link>
    </div>

  )
}
