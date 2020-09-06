import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import requestAuthTokesFromSpotify from '../services/requestAuthTokesFromSpotify'
import requestAuthCodeFromAPI from '../services/requestAuthCodeFromAPI'
import manageLocalStorage from '../services/manageLocalStorage'

const Callback = ({ setHasError }) => {
  const router = useRouter()

  useEffect(() => {
    const asyncCall = async () => {
      if (router.query.code) {
        const { authCode } = await requestAuthCodeFromAPI()
        const data = await requestAuthTokesFromSpotify(
          router.query.code,
          authCode
        )

        if (data.error) {
          setHasError(true)
          router.push('/')
        }

        manageLocalStorage.setItem('tokens', data)
        router.push('/logged')
      }
    }
    asyncCall()
  }, [router, setHasError])

  return <></>
}

Callback.propTypes = {
  setHasError: PropTypes.func
}

export default Callback
