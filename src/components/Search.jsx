import React from 'react'

const Search = () => {
    return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder="Find a user" />
            </div>
            <div className='userChat' >
                <img src="https://pixlr.com/images/index/remove-bg.webp" alt='' />
                <div className='userChatInfo' >
                    <span>jane</span>
                </div>
            </div>

        </div>
    )
}

export default Search
