import { useEffect } from 'react'
import useAxios from 'axios-hooks'

const useCrud = (baseUrl) => {
    const [{ data, loading, error }, refetch] = useAxios(baseUrl)

    useEffect(()=>{
        if()
    })

}

function App() {
  const [{ data, loading, error }, refetch] = useAxios(
    'https://reqres.in/api/users?delay=1'
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <div>
      <button onClick={refetch}>refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}