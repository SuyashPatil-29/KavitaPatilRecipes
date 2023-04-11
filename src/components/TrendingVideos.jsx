import React from 'react';
import styled from 'styled-components';
import { HomeWrap } from './Home';

const TrendingVideos = () => {
    return (
        <HomeWrap className="px-20 py-12 bg-white h-11/12">
        <h1 className="my-4 underline font-bold text-2xl ">TRENDING VIDEOS</h1>
            <div className="flex flex-row gap-9">
            <Wrap >
            <iframe width="400" height="200" src="https://www.youtube.com/embed/SGAJa2aoabc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Wrap>
            <Wrap >
            <iframe width="400" height="200" src="https://www.youtube.com/embed/_Vdwp-4R2Mk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Wrap>
            <Wrap >
            <iframe width="400" height="200" src="https://www.youtube.com/embed/OCKar0oCcbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Wrap>
            <Wrap >
            <iframe width="400" height="200" src="https://www.youtube.com/embed/nPxBDBwYVvI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Wrap>
            </div>
            <div className="flex flex-row gap-9 py-12">
            <Wrap>
            <iframe width="400" height="200" src="https://www.youtube.com/embed/H99Vn1cA-p4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Wrap>
            <Wrap>
            <iframe width="400" height="200" src="https://www.youtube.com/embed/Fjdb_53kpPQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Wrap>
            <Wrap>
            <iframe width="400" height="200" src="https://www.youtube.com/embed/MVftDptR6C8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Wrap>
            <Wrap>  
            <iframe width="400" height="200" src="https://www.youtube.com/embed/_3cQOoQ8eT0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Wrap>
            </div>
        </HomeWrap>
    );
}

export default TrendingVideos;

const Section = styled.div`
`

const Wrap = styled.div`
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  iframe{
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`
