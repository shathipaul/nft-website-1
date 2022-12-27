import React from 'react';
import Button from '../../common/Button/Button';
import './TopFold.css'

const TopFold = () => {
    const states = [
        { id: 1, count: '200k', label: 'Collection' },
        { id: 2, count: '10k', label: 'Artists' },
        { id: 3, count: '423k', label: 'Community' }
    ];

    return (
        <div className='topfold absolute-center'>
            <div className='tf-left'>
                <h1>
                    Buy and Sell your <span className='heading-gradient'>NFT</span> 's with us | NFT Website
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, molestias! Magnam ex, enim illo accusantium ratione deleniti quaerat! Illo, quas?
                </p>
                <div className='tf-btns'>
                    <Button btnType="Primary" btnText="Explore"></Button>
                    <Button btnType="Secondary" btnText="Create" customClass="tf-btn-secondary"></Button>
                </div>
                <div className='tf-states'>
                    {
                        states.map(state => <div className='absolute-center tf-states-info'
                            key={state.id}>
                            <div className='tf-states-count'>
                                    {state.count}
                            </div>
                            <div className='tf-states-label'>
                                    {state.label}
                            </div>
                        </div>)
                    }

                </div>
            </div>
            <div className='tf-right'>
                
            </div>
        </div>
    );
};

export default TopFold;