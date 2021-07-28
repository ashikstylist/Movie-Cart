import React, { useContext, useState, useEffect } from "react"

const DataContext = React.createContext()

export function useData() {
  return useContext(DataContext)
}

export function DataProvider({ children }) {
  
  const[posts,setPosts] = useState([])
  const [filterdata, setFilterdata] = React.useState(posts)

  
  useEffect(() => {
     fetch('http://localhost:8000/api').then(res => {
        if(res.ok){
          return res.json()
        }
     }).then(jsonRes => setPosts(jsonRes.data.results))
  },[])

  useEffect(() => {
    setFilterdata(posts)
  },[posts])

  
  function handleFilteredData(data){
    setFilterdata(data)
  }

  const value = {
    posts,
    filterdata,
    handleFilteredData
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}