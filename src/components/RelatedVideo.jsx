import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from "react-icons/bs";

const RelatedVideo = ({ thumbnail, channelLogo, title, channelName, views, posted, length, isVerified, isLive, liveWatching, id }) => {

    function formetLength(time) {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const remainingSeconds = time % 60;
        return `${hours === 0 ? '' : hours + ":"}${String(minutes === 0 ? '' : minutes + ":").padStart(2, '0')}${String(remainingSeconds).padStart(2, '0')}`;
    }

    function formatLargeNumber(number) {
        if (number < 1e3) {
            return number;
        } else if (number < 1e6) {
            return (number / 1e3).toFixed(1) + 'K';
        } else if (number < 1e9) {
            return (number / 1e6).toFixed(1) + 'M';
        } else {
            return (number / 1e9).toFixed(1) + 'B';
        }
    }


    return (

        <Link to={`/video/${id}`}>
            <div className=' mb-8'>
                <div className='relative'>
                    <img src={thumbnail} alt="thumbnail" className="w-full h-full object-cover rounded-lg" />
                    <p className={isLive ? 'hidden' : 'absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md'}>{formetLength(length)}</p>
                    {isLive && <p className='absolute bottom-2 right-2 bg-red-600 py-[2px] px-2 text-white text-xs rounded-sm'>Live</p>}
                </div>
                <div>
                    <div className='flex items-center my-2'>
                        <div className="flex-shrink-0 rounded-full overflow-hidden h-9 w-9"><img
                            src={channelLogo}
                            className="w-full h-full object-cover rounded-full"
                        /></div>
                        <span className='ml-3 text-md font-medium'>{title.length > 70 ? title.split(' ').slice(0, 10).join(' ') + "..." : title}</span>
                    </div>
                    <div className='ml-12'>
                        <p className='flex items-center text-sm font-normal text-white/70 gap-2'>{channelName} {isVerified && (<BsFillCheckCircleFill />)} </p>
                        <span className={liveWatching ? 'hidden' : 'text-sm font-normal text-white/70'}>{formatLargeNumber(views)} views</span>
                        {liveWatching && <span className='text-sm font-normal text-white/70'>{formatLargeNumber(liveWatching)} watching</span>}
                        <span className='text-sm font-normal text-white/70'>  • </span>
                        <span className={liveWatching ? 'hidden' : 'text-sm font-normal text-white/70'}>{posted}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RelatedVideo