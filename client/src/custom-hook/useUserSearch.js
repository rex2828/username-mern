import { useEffect, useState } from 'react'

export default function useBookSearch(pageNumber) {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://randomuser.me/api/?page=${pageNumber}&results=10&seed=aaa`)
    .then(response => response.json())
    .then(data  => {
      setUsers(prevUsers => {
        return [...prevUsers,...data.results]
      })
      setLoading(false)
      setHasMore(data.results.length > 0)
    })
  }, [pageNumber])

  return { loading, users, hasMore }
}