import React from 'react'
import {useData} from '../../context/DataContext'
import './Cart.css'
import {Link} from 'react-router-dom'

function Cart() {
    const {filterdata} = useData()
    

    return (
        <div className='cart'>
                {
                        filterdata.map((result, i) =>{
                                return(
                                <Link key={i} style={{textDecoration : 'none'}} to={{
                                        pathname: `/moviecart/${result.original_title}/details`,
                                        state: { detail : result }
                                    }}>
                                    <img title={`${result.original_title} - ${result.overview}`} alt='poster' className='poster'  src={`http://image.tmdb.org/t/p/w500/${result.poster_path}`} />
                                </Link>
                                )
                            })
                        
                }   
        </div>
    )
}

export default Cart
