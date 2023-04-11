import React from 'react';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-6 my-7 bg-slate-900 h-[70px] rounded-2xl text-slate-100 fixed w-11/12 left-14 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.55)] z-10" >
            <div className="px-6 font-bold text-2xl tracking-widest">
                <a href="">KAVITA PATIL RECIPES</a>
            </div>
            <ul className="flex justify-end gap-6 px-6">
                <li className="tracking-wide text-lg opacity-75 bg-[rgb(250,148,148)] px-3 py-1 rounded-xl text-slate-900"><a href="" >Home</a></li>
                <li className="tracking-wide text-lg hover:opacity-75 hover:bg-[rgb(250,148,148)] px-3 py-1 hover:rounded-xl hover:text-slate-900"><a href="" >About Me</a></li>
                <li className="tracking-wide text-lg hover:opacity-75 hover:bg-[rgb(250,148,148)] px-3 py-1 hover:rounded-xl hover:text-slate-900"><a href="" >Videos</a></li>
                <li className="tracking-wide text-lg hover:opacity-75 hover:bg-[rgb(250,148,148)] px-3 py-1 hover:rounded-xl hover:text-slate-900"><a href="" >Contacts Us</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
