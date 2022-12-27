import React from 'react';
import Button from '../../common/Button/Button';
import './TopFold.css'

const TopFold = () => {
    const states = [
        { id: 1, count: '200k', label: 'Collection' },
        { id: 2, count: '10k', label: 'Artists' },
        { id: 3, count: '423k', label: 'Community' }
    ];

    const nfts = [
        { id: 1, src: 'https://i.seadn.io/gcs/files/9638148e7c1ff24f9a26b99a5eaedc0c.gif?auto=format&w=1920' },
        { id: 1, src: 'https://i.seadn.io/gae/LS2AweBD09u_9ZJKCg0kygkkUwUEm48vdgFNYm7SoT-GvQ9iysUUCbSz5ILDKd3SfLFstKOOmKjeWdE7_SZwVhCSggHiLLwytEGN?auto=format&w=128' },
        { id: 1, src: 'https://i.seadn.io/gae/oUgQOC41IwR-5bvA1eZzf2uDfyQLaQrRVo-ZJCwZoS_SiOsJZyqKenWO4xrfCY65dMRtt1Ke48op-YeAwsFWhEQ97RVAHOQAZZpK5Q?auto=format&w=128' },
        { id: 1, src: 'https://i.seadn.io/gae/vAw8NwSA7b_N3qh4Tz-R9_fm5fMtWFesq4dYgnxWq2Zxiu1N6KcLYS0HceUTcgOADtZR9NAOjvnvs40HeH_Wm7gjyJ1FLz0-S2HFMLc?auto=format&w=128' },
    ]

    return (
        <div className='topfold absolute-center'>
            <div className='tf-left'>
                <h2>
                    Buy and Sell your <br /> <span className='heading-gradient'>NFT</span> 's with us | <br /> NFT Website
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, molestias! Magnam ex, enim illo accusantium ratione deleniti quaerat! Illo, quas?
                </p>
                <div className='tf-btns'>
                    <Button btnType="Primary" btnText="Connect wallet"></Button>
                    <Button btnType="Secondary" btnText="Buy Now" customClass="tf-btn-secondary"></Button>
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
                <div className='tf-diamond'>
                    {
                        nfts.map(nft => <div className='tf-diamond-items absolute-center'
                        key={nft.id}>
                            <img src={nft.src} alt="" />
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default TopFold;