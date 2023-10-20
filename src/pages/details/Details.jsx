import React from 'react'
import './style.scss'
import { useParams } from 'react-router-dom'
import Cast from './cast/cast'
import UseFetch from  '../../hooks/UseFetch'
import DetailsBanner from './detailsBanner/DetailsBanner'
import VideoSection from './videoSection/VideoSection'
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recommendation'


const Details = () => {
  const { mediaType, id } = useParams();
    const { data, loading } = UseFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = UseFetch(
        `/${mediaType}/${id}/credits`
    );

    return (
        <div>
            <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
            <Cast data={credits?.cast} loading={creditsLoading} />
            <VideoSection data={data} loading={loading}/>
            <Similar mediaType={mediaType} id={id}/>
            <Recommendation mediaType={mediaType} id={id}/>

    </div>
  )
}

export default Details;
