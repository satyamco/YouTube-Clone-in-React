import React, {useState, useContext, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { BiLike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import RelatedVideo from './RelatedVideo';
import { formatLargeNumber} from '../utils/someFunc'
import { fetchDataFromApi } from '../utils/api';
import { Context } from '../context/contextApi';

const PlayVideo = () => {
  const [relatedVideo, setRelatedVideo] = useState([]);
  const [video, setVideo] = useState();
  const { videoId } = useParams()
  const { setLoding } = useContext(Context)
  const [subs, setSubs] = useState(false)


  useEffect(() => {
    fetchVideoInfo();
    fetchRelatedVideoInfo()
  }, [videoId])


  const fetchVideoInfo = () => {
    setLoding(true)
    fetchDataFromApi(`video/details/?id=${videoId}`).then((response) => {
      setVideo(response);
      // console.log(response);
      setLoding(false)
    })
  }
  const fetchRelatedVideoInfo = () => {
    setLoding(true)
    fetchDataFromApi(`video/related-contents/?id=${videoId}`).then((response) => {
      setRelatedVideo(response);
      // console.log(response);
      setLoding(false)
    })
  }

 



  return (
    <div className='play-video max-md:m-4 '>
      <div className='sticky  '>
        <div className=' h-auto max-lg:h-[50vw] max-xl:h-[50vw] xl:h-[34.2vw]  rounded-xl overflow-hidden'>
          <ReactPlayer
            controls
            url={`https://www.youtube.com/watch?v=${videoId}`}
            width="100%"
            height="100%"
            style={{ backgroundColor: '#000000', objectFit: 'cover' }}
            playing={true}
          />
        </div>
        <div>
          <h1 className=' px-2 py-4 max-md:py-2 mt-2 max-md:text-[18px] text-white text-[22px] lg:font-semibold lg:tracking-wide leading-[1.2]'> {video?.title}</h1>
          <div className=' max-md:w-auto flex items-center justify-between text-white'>

            <div className='flex items-center max-md:my-3 gap-3'><img src={video?.author?.avatar[0]?.url} className='w-[50px] max-md:w-[36px] max-md:h-[36px] h-[50px] object-cover rounded-full' alt="" />
              <span ><p className='text-[18px] max-md:text-[16px] font-medium tracking-wide flex items-center'>{video?.author?.title}
                {video?.author?.badges[0]?.type ===
                  "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                  )}</p>
                <p className='text-sm text-white/70'>{video?.author?.stats?.subscribersText}</p>
              </span>
              <p className={`cursor-pointer py-2 px-6 font-semibold max-md:font-medium max-md:text-xs ml-6 rounded-full ${subs?'text-white/90 bg-white/15 hover:bg-white/30' :' text-black bg-white hover:bg-white/90 '}`}
              onClick={() =>(setSubs(!subs))}
              >{subs?"Subscribed":"Subscribe"}</p></div>

            <div className='flex gap-2 max-md:hidden'>
              <p className='py-2 px-5 max-md:hidden flex items-center gap-1 rounded-full bg-white/10 hover:bg-white/20'><BiLike className='text-2xl pb-[1px]' />{formatLargeNumber(video?.stats?.likes)}</p>
              <p className='py-2 px-5 max-md:hidden  rounded-full bg-white/10 hover:bg-white/20'>{formatLargeNumber(video?.stats?.views)} views</p>
            </div>

          </div>
        </div>
      </div>

      <div className='text-white grid gap-4 max-xl:grid-cols-2 xl:grid-cols-1 max-lg:grid-cols-1 '  >
        {
          relatedVideo?.contents?.filter(item => item?.video?.thumbnails[1]?.url != null).map((item) => (
            <RelatedVideo
              key={item?.video?.videoId}
              id={item?.video?.videoId}
              thumbnail={item?.video?.thumbnails[1]?.url || 'fallbackThumbnailUrl'}
              length={item?.video?.lengthSeconds}
              isLive={item?.video?.isLiveNow}
              liveWatching={item?.video?.stats?.viewers}
              channelLogo={item?.video?.author?.avatar[0]?.url || 'fallbackChannelLogoUrl'}
              title={item?.video?.title || 'Fallback Title'}
              channelName={item?.video?.author?.title || 'Fallback Channel Name'}
              isVerified={item?.video?.author?.badges[0]?.type === "VERIFIED_CHANNEL"}
              views={item?.video?.stats?.views || 0}  // You can replace 0 with a default value
              posted={item?.video?.publishedTimeText || 'Fallback Published Time'}
            />
          ))
        }
      </div>

    </div>
  )
}

export default PlayVideo