import React, { useContext } from 'react'
import VideoCard from './VideoCard.jsx'
import { Context } from '../context/contextApi.jsx'


const SearchFeed = () => {

  const { data } = useContext(Context)

  return (
    <div className="feed  py-16 px-[10px] max-md:pt-5 text-white grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:py-5 lg:px-4
      ">
      {data.filter(item => item.video?.thumbnails[1]?.url != null).map((item) => (
        <VideoCard
          key={item.video?.videoId}
          id={item.video?.videoId}
          thumbnail={item.video.thumbnails[1]?.url || 'fallbackThumbnailUrl'}
          length={item.video?.lengthSeconds}
          isLive={item.video?.isLiveNow}
          liveWatching={item.video?.stats?.viewers}
          channelLogo={item.video.author.avatar[0]?.url || 'fallbackChannelLogoUrl'}
          title={item.video.title || 'Fallback Title'}
          channelName={item.video.author.title || 'Fallback Channel Name'}
          isVerified={item.video.author.badges[0]?.type === "VERIFIED_CHANNEL"}
          views={item.video.stats.views || 0}  // You can replace 0 with a default value
          posted={item.video.publishedTimeText || 'Fallback Published Time'}
        />
      ))}
    </div>

  )
}

export default SearchFeed