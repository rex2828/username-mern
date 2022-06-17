import React, {useState ,useRef,useCallback} from 'react'
import Card from '../components/Card'
import Loader from '../components/Loader'
import styles from './Home.module.css'
import useUsersSearch from '../custom-hook/useUserSearch'
const Home = ({userdetails,onClickReadMore}) => {
  const [pageNumber,setPageNumber] = useState(1)
  const {loading, users, hasMore} = useUsersSearch(pageNumber)
  const observer = useRef()
  const lastUserElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  const renderedUsers = users.map((user,index) => {
     if(index+1 === users.length){
      return (<Card ref={lastUserElementRef} key={index} 
        index={index}
        fname={user.name.first} 
        lname={user.name.last} 
        email={user.email}
        phone={user.phone}
        picture={user.picture.large}
        onClickReadMore={onClickReadMore}
        />)
    }
    else { 
    return (<Card key={index} 
      index={index}
      fname={user.name.first} 
      lname={user.name.last} 
      email={user.email}
      phone={user.phone}
      picture={user.picture.large}
      onClickReadMore={onClickReadMore}
      />)
    }
  })

  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardMainContaiener}>
          {renderedUsers}
      </div>
      {loading && <Loader/>}
    </div>
  )
}

export default Home