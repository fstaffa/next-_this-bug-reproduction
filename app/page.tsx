'use client'

export default function Home() {
  const c = new Test()
  c.test()
  return <div />
}

class Test
{
  test() {
    console.log(this?.some)
  }
}
