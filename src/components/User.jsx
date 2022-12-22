import React from 'react';

const User = ({ name, picture, iconEmail, email, iconPhone, phone, iconLocation, location }) => {
    return (
        <article className='article'>
            <div className='article__div'>
                <h1 className='article__div--h1'>{name}</h1>
                <img className='article__div--img' src={picture} alt={`picture ${name}`} />
            </div>
            <div className='article__div--data'>
                <h2 className='article__div--h2'>{iconEmail}{email}</h2>
                <h2 className='article__div--h2'>{iconPhone}{phone}</h2>
                <h2 className='article__div--h2'>{iconLocation}{location}</h2>
            </div>
        </article>
    );
};

export default User;