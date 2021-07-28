import React from 'react'
import './Search.css'
import {useData} from '../../context/DataContext'

function Search() {

    const {posts, handleFilteredData} = useData()

    function changeHandler(e){
        const search = e.target.value
        handleFilteredData(posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()) ))  
    }
    

    return (
        <>
            <div className='searchbox'>
                <input placeholder='Search' onChange={changeHandler} className='input' type='text'/>
            </div>
        </>
    )
}

export default Search
