import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
        <HomeWrap className="flex justify-center text-center items-center flex-col w-screen h-screen top-9 gap-16">
            <h1 className="text-stone-100 font-black text-7xl underline">कविता पाटील रेसिपीज</h1>
            <h2 className="text-4xl text-slate-300 font-semibold">Where every recipe is a masterpiece.</h2>
            <p className="text-2xl font-medium text-red-200">A place where we all grow and learn together.</p>
            <Button className="px-6 py-4 text-gray-100 rounded-3xl font-semibold tracking-wide hover:opacity-80">GO TO YOUTUBE</Button>
        </HomeWrap>
    );
}

export default Home;

export const HomeWrap= styled.div`
background: #556270;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FF6B6B, #556270);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #FF6B6B, #556270); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`
const Button = styled.button`
background: #f857a6;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #ff5858, #f857a6);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`