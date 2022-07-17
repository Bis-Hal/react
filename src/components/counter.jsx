import React, { Component } from 'react';

class Counter extends Component {
    
    render() { 
        return (
            <>
              <nav>
                <div className='companyName'>True Body</div>
                <div className='searchbar'>
                  <input type='text' placeholder='Search'/>
                    <a href=''>
                      <img src='https://cdn-icons-png.flaticon.com/512/151/151773.png' alt='search'/>
                      </a>
                </div>
                <div className='login'>
                  <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='login'/>
                </div>
                
              </nav>
            </>
        );
    }
}
 
export default Counter;