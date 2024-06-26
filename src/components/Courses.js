import React from "react";
import './animation.css';

function Courses(){

    return(
        <div className="flex flex-col justify-around h-auto items-center p-20 bg-slate-100">
            <h1 className="text-4xl font-bold underline pb-10">Courses</h1>
            <div className="flex flex-row justify-around h-auto items-center p-20 bg-slate-100 gap-5">

            {/* AI Tools */}
            <div className=" rounded-lg  bg-gradient-to-r from-slate-200 to-slate-300 w-72 h-96 p-6  flex flex-col justify-between cursor-pointer hover:from-slate-400 hover:to-slate-400 transition-transform">
                <div>
                    <h1 className="text-black text-2xl mb-3 font-semibold">Build Effective Resume and Websites using AI tools</h1>
                    <p className="mb-5 text-medium">Transforming Your Digital Identity with AI-Powered Tools</p>
                </div>
                <div>
                    <a href="https://prathambhandari.odoo.com/slides/build-effective-resume-and-websites-using-ai-tools-chatgpt-mokker-etc-1" className="text-decoration-none">
                        <button className="bg-black px-6 py-3 text-slate-200 rounded-md hover:text-rose-100">Start Learning</button>
                    </a>
                </div>
            </div>
            {/* Github */}

            <div className=" rounded-lg  bg-gradient-to-r from-slate-200 to-slate-300 w-72 h-96 p-6  flex flex-col justify-between cursor-pointer hover:from-slate-400 hover:to-slate-400 transition-transform">
                <div>
                    <h1 className="text-black text-2xl mb-3 font-semibold">Version Control with GitHub: The Complete Course</h1>
                    <p className="mb-5 text-medium">A Comprehensive Course on Code Management and Collaboration</p>
                </div>
                <div>
                    <a href="https://www.udemy.com/share/10a5DG/" className="text-decoration-none">
                        <button className="bg-black px-6 py-3 text-slate-200 rounded-md hover:text-rose-100">Start Learning</button>
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Courses;




