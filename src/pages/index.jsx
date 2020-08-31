import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Error from '../components/Error'
import Home from 'components/Home'

export default function Index() {
  const router = useRouter()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (router.query.error) {
      setHasError(true)
    }
  }, [router])

  return (
    <>
      {hasError && <Error />}
      <Home />
    </>
  )
}
