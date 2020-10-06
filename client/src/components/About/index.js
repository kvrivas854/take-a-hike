import React from 'react';

function About (props) {
    return (
    <div>
         <section className="m-4">
            <div className="text-3xl lobster">About us</div>
            <p className="mt-4">This project was created by:</p>
        </section>
        <div className="flex about-cards">
            <div className="box-border sm:box-content m-4 container">
                <div className="relative open-sans bg-white px-6 py-4">
                    <div className="flex">
                        <img src={process.env.PUBLIC_URL + '/headshot.png'} alt="img" className="p-2 h-32 w-32 rounded-full"/> 
                        <div className="flex flex-col">
                            <h4 className="p-2 font-bold">Kelly Rivas</h4>
                            <p className="rounded p-2 text-base">Kellyv.rivas@gmail.com</p>
                            <div className="flex">
                                <a className="w-max-content font-bold py-1 px-4 mt-4 rounded" rel="noreferrer" target="_blank" href="https://github.com/kvrivas854">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.73438 18.6562C7.73438 18.5625 7.64062 18.4688 7.5 18.4688C7.35938 18.4688 7.26562 18.5625 7.26562 18.6562C7.26562 18.75 7.35938 18.8438 7.5 18.7969C7.64062 18.7969 7.73438 18.75 7.73438 18.6562ZM6.28125 18.4219C6.28125 18.5156 6.375 18.6562 6.51562 18.6562C6.60938 18.7031 6.75 18.6562 6.79688 18.5625C6.79688 18.4688 6.75 18.375 6.60938 18.3281C6.46875 18.2812 6.32812 18.3281 6.28125 18.4219ZM8.39062 18.375C8.25 18.375 8.15625 18.4688 8.15625 18.6094C8.15625 18.7031 8.29688 18.75 8.4375 18.7031C8.57812 18.6562 8.67188 18.6094 8.625 18.5156C8.625 18.4219 8.48438 18.3281 8.39062 18.375ZM11.4375 0.375C4.96875 0.375 0 5.34375 0 11.8125C0 17.0156 3.23438 21.4688 7.92188 23.0625C8.53125 23.1562 8.71875 22.7812 8.71875 22.5C8.71875 22.1719 8.71875 20.5781 8.71875 19.5938C8.71875 19.5938 5.4375 20.2969 4.73438 18.1875C4.73438 18.1875 4.21875 16.8281 3.46875 16.5C3.46875 16.5 2.39062 15.75 3.51562 15.75C3.51562 15.75 4.6875 15.8438 5.34375 16.9688C6.375 18.7969 8.0625 18.2812 8.76562 17.9531C8.85938 17.2031 9.14062 16.6875 9.51562 16.3594C6.89062 16.0781 4.21875 15.7031 4.21875 11.2031C4.21875 9.89062 4.59375 9.28125 5.34375 8.4375C5.20312 8.10938 4.82812 6.89062 5.48438 5.25C6.42188 4.96875 8.71875 6.51562 8.71875 6.51562C9.65625 6.23438 10.6406 6.14062 11.625 6.14062C12.6562 6.14062 13.6406 6.23438 14.5781 6.51562C14.5781 6.51562 16.8281 4.92188 17.8125 5.25C18.4688 6.89062 18.0469 8.10938 17.9531 8.4375C18.7031 9.28125 19.1719 9.89062 19.1719 11.2031C19.1719 15.7031 16.4062 16.0781 13.7812 16.3594C14.2031 16.7344 14.5781 17.4375 14.5781 18.5625C14.5781 20.1094 14.5312 22.0781 14.5312 22.4531C14.5312 22.7812 14.7656 23.1562 15.375 23.0156C20.0625 21.4688 23.25 17.0156 23.25 11.8125C23.25 5.34375 17.9531 0.375 11.4375 0.375ZM4.54688 16.5469C4.45312 16.5938 4.5 16.7344 4.54688 16.8281C4.64062 16.875 4.73438 16.9219 4.82812 16.875C4.875 16.8281 4.875 16.6875 4.78125 16.5938C4.6875 16.5469 4.59375 16.5 4.54688 16.5469ZM4.03125 16.1719C3.98438 16.2656 4.03125 16.3125 4.125 16.3594C4.21875 16.4062 4.3125 16.4062 4.35938 16.3125C4.35938 16.2656 4.3125 16.2188 4.21875 16.1719C4.125 16.125 4.07812 16.125 4.03125 16.1719ZM5.53125 17.8594C5.48438 17.9062 5.48438 18.0469 5.625 18.1406C5.71875 18.2344 5.85938 18.2812 5.90625 18.1875C5.95312 18.1406 5.95312 18 5.85938 17.9062C5.76562 17.8125 5.625 17.7656 5.53125 17.8594ZM5.01562 17.1562C4.92188 17.2031 4.92188 17.3438 5.01562 17.4375C5.10938 17.5312 5.20312 17.5781 5.29688 17.5312C5.34375 17.4844 5.34375 17.3438 5.29688 17.25C5.20312 17.1562 5.10938 17.1094 5.01562 17.1562Z" fill="#48BB78"/>
                                    </svg>
                                </a>
                                <a className="w-max-content font-bold py-1 px-4 mt-4 rounded" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/kelly-rivas-37896a76/">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5 0.5H1.45312C0.65625 0.5 0 1.20312 0 2.04688V20C0 20.8438 0.65625 21.5 1.45312 21.5H19.5C20.2969 21.5 21 20.8438 21 20V2.04688C21 1.20312 20.2969 0.5 19.5 0.5ZM6.32812 18.5H3.23438V8.51562H6.32812V18.5ZM4.78125 7.10938C3.75 7.10938 2.95312 6.3125 2.95312 5.32812C2.95312 4.34375 3.75 3.5 4.78125 3.5C5.76562 3.5 6.5625 4.34375 6.5625 5.32812C6.5625 6.3125 5.76562 7.10938 4.78125 7.10938ZM18 18.5H14.8594V13.625C14.8594 12.5 14.8594 11 13.2656 11C11.625 11 11.3906 12.2656 11.3906 13.5781V18.5H8.29688V8.51562H11.25V9.875H11.2969C11.7188 9.07812 12.75 8.23438 14.25 8.23438C17.3906 8.23438 18 10.3438 18 13.0156V18.5Z" fill="#48BB78"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-border sm:box-content m-4 container">
                <div className="relative open-sans bg-white px-6 py-4">
                    <div className="flex">
                        <img src={process.env.PUBLIC_URL + '/chris.jpg'} alt="img" className="p-2 h-32 w-32 rounded-full"/> 
                        <div className="flex flex-col">
                            <h4 className="p-2 font-bold">Chris Maffei</h4>
                            <p className="rounded p-2 text-base">cmaffei720@gmail.com</p>
                            <div className="flex">
                                <a className="w-max-content font-bold py-1 px-4 mt-4 rounded" rel="noreferrer" target="_blank" href="https://github.com/cmaffei720">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.73438 18.6562C7.73438 18.5625 7.64062 18.4688 7.5 18.4688C7.35938 18.4688 7.26562 18.5625 7.26562 18.6562C7.26562 18.75 7.35938 18.8438 7.5 18.7969C7.64062 18.7969 7.73438 18.75 7.73438 18.6562ZM6.28125 18.4219C6.28125 18.5156 6.375 18.6562 6.51562 18.6562C6.60938 18.7031 6.75 18.6562 6.79688 18.5625C6.79688 18.4688 6.75 18.375 6.60938 18.3281C6.46875 18.2812 6.32812 18.3281 6.28125 18.4219ZM8.39062 18.375C8.25 18.375 8.15625 18.4688 8.15625 18.6094C8.15625 18.7031 8.29688 18.75 8.4375 18.7031C8.57812 18.6562 8.67188 18.6094 8.625 18.5156C8.625 18.4219 8.48438 18.3281 8.39062 18.375ZM11.4375 0.375C4.96875 0.375 0 5.34375 0 11.8125C0 17.0156 3.23438 21.4688 7.92188 23.0625C8.53125 23.1562 8.71875 22.7812 8.71875 22.5C8.71875 22.1719 8.71875 20.5781 8.71875 19.5938C8.71875 19.5938 5.4375 20.2969 4.73438 18.1875C4.73438 18.1875 4.21875 16.8281 3.46875 16.5C3.46875 16.5 2.39062 15.75 3.51562 15.75C3.51562 15.75 4.6875 15.8438 5.34375 16.9688C6.375 18.7969 8.0625 18.2812 8.76562 17.9531C8.85938 17.2031 9.14062 16.6875 9.51562 16.3594C6.89062 16.0781 4.21875 15.7031 4.21875 11.2031C4.21875 9.89062 4.59375 9.28125 5.34375 8.4375C5.20312 8.10938 4.82812 6.89062 5.48438 5.25C6.42188 4.96875 8.71875 6.51562 8.71875 6.51562C9.65625 6.23438 10.6406 6.14062 11.625 6.14062C12.6562 6.14062 13.6406 6.23438 14.5781 6.51562C14.5781 6.51562 16.8281 4.92188 17.8125 5.25C18.4688 6.89062 18.0469 8.10938 17.9531 8.4375C18.7031 9.28125 19.1719 9.89062 19.1719 11.2031C19.1719 15.7031 16.4062 16.0781 13.7812 16.3594C14.2031 16.7344 14.5781 17.4375 14.5781 18.5625C14.5781 20.1094 14.5312 22.0781 14.5312 22.4531C14.5312 22.7812 14.7656 23.1562 15.375 23.0156C20.0625 21.4688 23.25 17.0156 23.25 11.8125C23.25 5.34375 17.9531 0.375 11.4375 0.375ZM4.54688 16.5469C4.45312 16.5938 4.5 16.7344 4.54688 16.8281C4.64062 16.875 4.73438 16.9219 4.82812 16.875C4.875 16.8281 4.875 16.6875 4.78125 16.5938C4.6875 16.5469 4.59375 16.5 4.54688 16.5469ZM4.03125 16.1719C3.98438 16.2656 4.03125 16.3125 4.125 16.3594C4.21875 16.4062 4.3125 16.4062 4.35938 16.3125C4.35938 16.2656 4.3125 16.2188 4.21875 16.1719C4.125 16.125 4.07812 16.125 4.03125 16.1719ZM5.53125 17.8594C5.48438 17.9062 5.48438 18.0469 5.625 18.1406C5.71875 18.2344 5.85938 18.2812 5.90625 18.1875C5.95312 18.1406 5.95312 18 5.85938 17.9062C5.76562 17.8125 5.625 17.7656 5.53125 17.8594ZM5.01562 17.1562C4.92188 17.2031 4.92188 17.3438 5.01562 17.4375C5.10938 17.5312 5.20312 17.5781 5.29688 17.5312C5.34375 17.4844 5.34375 17.3438 5.29688 17.25C5.20312 17.1562 5.10938 17.1094 5.01562 17.1562Z" fill="#48BB78"/>
                                    </svg>
                                </a>
                                <a className="w-max-content font-bold py-1 px-4 mt-4 rounded" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/christopher-maffei-355a55108/">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5 0.5H1.45312C0.65625 0.5 0 1.20312 0 2.04688V20C0 20.8438 0.65625 21.5 1.45312 21.5H19.5C20.2969 21.5 21 20.8438 21 20V2.04688C21 1.20312 20.2969 0.5 19.5 0.5ZM6.32812 18.5H3.23438V8.51562H6.32812V18.5ZM4.78125 7.10938C3.75 7.10938 2.95312 6.3125 2.95312 5.32812C2.95312 4.34375 3.75 3.5 4.78125 3.5C5.76562 3.5 6.5625 4.34375 6.5625 5.32812C6.5625 6.3125 5.76562 7.10938 4.78125 7.10938ZM18 18.5H14.8594V13.625C14.8594 12.5 14.8594 11 13.2656 11C11.625 11 11.3906 12.2656 11.3906 13.5781V18.5H8.29688V8.51562H11.25V9.875H11.2969C11.7188 9.07812 12.75 8.23438 14.25 8.23438C17.3906 8.23438 18 10.3438 18 13.0156V18.5Z" fill="#48BB78"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex about-cards">
            <div className="box-border sm:box-content m-4 container">
                <div className="relative open-sans bg-white px-6 py-4">
                    <div className="flex">
                        <img src={process.env.PUBLIC_URL + '/adia.jpg'} alt="img" className="p-2 h-32 w-32 rounded-full"/> 
                        <div className="flex flex-col">
                            <h4 className="p-2 font-bold">Adia Grisby</h4>
                            <p className="rounded p-2 text-base">Kellyv.rivas@gmail.com</p>
                            <div className="flex">
                                <a className="w-max-content font-bold py-1 px-4 mt-4 rounded" rel="noreferrer" target="_blank" href="https://github.com/DiaG86">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.73438 18.6562C7.73438 18.5625 7.64062 18.4688 7.5 18.4688C7.35938 18.4688 7.26562 18.5625 7.26562 18.6562C7.26562 18.75 7.35938 18.8438 7.5 18.7969C7.64062 18.7969 7.73438 18.75 7.73438 18.6562ZM6.28125 18.4219C6.28125 18.5156 6.375 18.6562 6.51562 18.6562C6.60938 18.7031 6.75 18.6562 6.79688 18.5625C6.79688 18.4688 6.75 18.375 6.60938 18.3281C6.46875 18.2812 6.32812 18.3281 6.28125 18.4219ZM8.39062 18.375C8.25 18.375 8.15625 18.4688 8.15625 18.6094C8.15625 18.7031 8.29688 18.75 8.4375 18.7031C8.57812 18.6562 8.67188 18.6094 8.625 18.5156C8.625 18.4219 8.48438 18.3281 8.39062 18.375ZM11.4375 0.375C4.96875 0.375 0 5.34375 0 11.8125C0 17.0156 3.23438 21.4688 7.92188 23.0625C8.53125 23.1562 8.71875 22.7812 8.71875 22.5C8.71875 22.1719 8.71875 20.5781 8.71875 19.5938C8.71875 19.5938 5.4375 20.2969 4.73438 18.1875C4.73438 18.1875 4.21875 16.8281 3.46875 16.5C3.46875 16.5 2.39062 15.75 3.51562 15.75C3.51562 15.75 4.6875 15.8438 5.34375 16.9688C6.375 18.7969 8.0625 18.2812 8.76562 17.9531C8.85938 17.2031 9.14062 16.6875 9.51562 16.3594C6.89062 16.0781 4.21875 15.7031 4.21875 11.2031C4.21875 9.89062 4.59375 9.28125 5.34375 8.4375C5.20312 8.10938 4.82812 6.89062 5.48438 5.25C6.42188 4.96875 8.71875 6.51562 8.71875 6.51562C9.65625 6.23438 10.6406 6.14062 11.625 6.14062C12.6562 6.14062 13.6406 6.23438 14.5781 6.51562C14.5781 6.51562 16.8281 4.92188 17.8125 5.25C18.4688 6.89062 18.0469 8.10938 17.9531 8.4375C18.7031 9.28125 19.1719 9.89062 19.1719 11.2031C19.1719 15.7031 16.4062 16.0781 13.7812 16.3594C14.2031 16.7344 14.5781 17.4375 14.5781 18.5625C14.5781 20.1094 14.5312 22.0781 14.5312 22.4531C14.5312 22.7812 14.7656 23.1562 15.375 23.0156C20.0625 21.4688 23.25 17.0156 23.25 11.8125C23.25 5.34375 17.9531 0.375 11.4375 0.375ZM4.54688 16.5469C4.45312 16.5938 4.5 16.7344 4.54688 16.8281C4.64062 16.875 4.73438 16.9219 4.82812 16.875C4.875 16.8281 4.875 16.6875 4.78125 16.5938C4.6875 16.5469 4.59375 16.5 4.54688 16.5469ZM4.03125 16.1719C3.98438 16.2656 4.03125 16.3125 4.125 16.3594C4.21875 16.4062 4.3125 16.4062 4.35938 16.3125C4.35938 16.2656 4.3125 16.2188 4.21875 16.1719C4.125 16.125 4.07812 16.125 4.03125 16.1719ZM5.53125 17.8594C5.48438 17.9062 5.48438 18.0469 5.625 18.1406C5.71875 18.2344 5.85938 18.2812 5.90625 18.1875C5.95312 18.1406 5.95312 18 5.85938 17.9062C5.76562 17.8125 5.625 17.7656 5.53125 17.8594ZM5.01562 17.1562C4.92188 17.2031 4.92188 17.3438 5.01562 17.4375C5.10938 17.5312 5.20312 17.5781 5.29688 17.5312C5.34375 17.4844 5.34375 17.3438 5.29688 17.25C5.20312 17.1562 5.10938 17.1094 5.01562 17.1562Z" fill="#48BB78"/>
                                    </svg>
                                </a>
                                <a className="w-max-content font-bold py-1 px-4 mt-4 rounded" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/adia-grigsby-7515aa78/">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5 0.5H1.45312C0.65625 0.5 0 1.20312 0 2.04688V20C0 20.8438 0.65625 21.5 1.45312 21.5H19.5C20.2969 21.5 21 20.8438 21 20V2.04688C21 1.20312 20.2969 0.5 19.5 0.5ZM6.32812 18.5H3.23438V8.51562H6.32812V18.5ZM4.78125 7.10938C3.75 7.10938 2.95312 6.3125 2.95312 5.32812C2.95312 4.34375 3.75 3.5 4.78125 3.5C5.76562 3.5 6.5625 4.34375 6.5625 5.32812C6.5625 6.3125 5.76562 7.10938 4.78125 7.10938ZM18 18.5H14.8594V13.625C14.8594 12.5 14.8594 11 13.2656 11C11.625 11 11.3906 12.2656 11.3906 13.5781V18.5H8.29688V8.51562H11.25V9.875H11.2969C11.7188 9.07812 12.75 8.23438 14.25 8.23438C17.3906 8.23438 18 10.3438 18 13.0156V18.5Z" fill="#48BB78"/>
                                    </svg>
                                </a>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-border sm:box-content m-4 container">
                <div className="relative open-sans bg-white px-6 py-4">
                    <div className="flex">
                        <img src={process.env.PUBLIC_URL + '/sarah.jpg'} alt="img" className="p-2 h-32 w-32 rounded-full"/> 
                        <div className="flex flex-col">
                            <h4 className="p-2 font-bold">Sarah Shealy</h4>
                            <p className="rounded p-2 text-base">sshealy124@gmail.com</p>
                            <div className="flex">
                                <a className="w-max-content font-bold py-1 px-4 mt-4 rounded" rel="noreferrer" target="_blank" href="https://github.com/sarahshea12">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.73438 18.6562C7.73438 18.5625 7.64062 18.4688 7.5 18.4688C7.35938 18.4688 7.26562 18.5625 7.26562 18.6562C7.26562 18.75 7.35938 18.8438 7.5 18.7969C7.64062 18.7969 7.73438 18.75 7.73438 18.6562ZM6.28125 18.4219C6.28125 18.5156 6.375 18.6562 6.51562 18.6562C6.60938 18.7031 6.75 18.6562 6.79688 18.5625C6.79688 18.4688 6.75 18.375 6.60938 18.3281C6.46875 18.2812 6.32812 18.3281 6.28125 18.4219ZM8.39062 18.375C8.25 18.375 8.15625 18.4688 8.15625 18.6094C8.15625 18.7031 8.29688 18.75 8.4375 18.7031C8.57812 18.6562 8.67188 18.6094 8.625 18.5156C8.625 18.4219 8.48438 18.3281 8.39062 18.375ZM11.4375 0.375C4.96875 0.375 0 5.34375 0 11.8125C0 17.0156 3.23438 21.4688 7.92188 23.0625C8.53125 23.1562 8.71875 22.7812 8.71875 22.5C8.71875 22.1719 8.71875 20.5781 8.71875 19.5938C8.71875 19.5938 5.4375 20.2969 4.73438 18.1875C4.73438 18.1875 4.21875 16.8281 3.46875 16.5C3.46875 16.5 2.39062 15.75 3.51562 15.75C3.51562 15.75 4.6875 15.8438 5.34375 16.9688C6.375 18.7969 8.0625 18.2812 8.76562 17.9531C8.85938 17.2031 9.14062 16.6875 9.51562 16.3594C6.89062 16.0781 4.21875 15.7031 4.21875 11.2031C4.21875 9.89062 4.59375 9.28125 5.34375 8.4375C5.20312 8.10938 4.82812 6.89062 5.48438 5.25C6.42188 4.96875 8.71875 6.51562 8.71875 6.51562C9.65625 6.23438 10.6406 6.14062 11.625 6.14062C12.6562 6.14062 13.6406 6.23438 14.5781 6.51562C14.5781 6.51562 16.8281 4.92188 17.8125 5.25C18.4688 6.89062 18.0469 8.10938 17.9531 8.4375C18.7031 9.28125 19.1719 9.89062 19.1719 11.2031C19.1719 15.7031 16.4062 16.0781 13.7812 16.3594C14.2031 16.7344 14.5781 17.4375 14.5781 18.5625C14.5781 20.1094 14.5312 22.0781 14.5312 22.4531C14.5312 22.7812 14.7656 23.1562 15.375 23.0156C20.0625 21.4688 23.25 17.0156 23.25 11.8125C23.25 5.34375 17.9531 0.375 11.4375 0.375ZM4.54688 16.5469C4.45312 16.5938 4.5 16.7344 4.54688 16.8281C4.64062 16.875 4.73438 16.9219 4.82812 16.875C4.875 16.8281 4.875 16.6875 4.78125 16.5938C4.6875 16.5469 4.59375 16.5 4.54688 16.5469ZM4.03125 16.1719C3.98438 16.2656 4.03125 16.3125 4.125 16.3594C4.21875 16.4062 4.3125 16.4062 4.35938 16.3125C4.35938 16.2656 4.3125 16.2188 4.21875 16.1719C4.125 16.125 4.07812 16.125 4.03125 16.1719ZM5.53125 17.8594C5.48438 17.9062 5.48438 18.0469 5.625 18.1406C5.71875 18.2344 5.85938 18.2812 5.90625 18.1875C5.95312 18.1406 5.95312 18 5.85938 17.9062C5.76562 17.8125 5.625 17.7656 5.53125 17.8594ZM5.01562 17.1562C4.92188 17.2031 4.92188 17.3438 5.01562 17.4375C5.10938 17.5312 5.20312 17.5781 5.29688 17.5312C5.34375 17.4844 5.34375 17.3438 5.29688 17.25C5.20312 17.1562 5.10938 17.1094 5.01562 17.1562Z" fill="#48BB78"/>
                                    </svg>
                                </a>
                                <a className="w-max-content font-bold py-1 px-4 mt-4 rounded" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/sarah-shealy-b62856195/">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5 0.5H1.45312C0.65625 0.5 0 1.20312 0 2.04688V20C0 20.8438 0.65625 21.5 1.45312 21.5H19.5C20.2969 21.5 21 20.8438 21 20V2.04688C21 1.20312 20.2969 0.5 19.5 0.5ZM6.32812 18.5H3.23438V8.51562H6.32812V18.5ZM4.78125 7.10938C3.75 7.10938 2.95312 6.3125 2.95312 5.32812C2.95312 4.34375 3.75 3.5 4.78125 3.5C5.76562 3.5 6.5625 4.34375 6.5625 5.32812C6.5625 6.3125 5.76562 7.10938 4.78125 7.10938ZM18 18.5H14.8594V13.625C14.8594 12.5 14.8594 11 13.2656 11C11.625 11 11.3906 12.2656 11.3906 13.5781V18.5H8.29688V8.51562H11.25V9.875H11.2969C11.7188 9.07812 12.75 8.23438 14.25 8.23438C17.3906 8.23438 18 10.3438 18 13.0156V18.5Z" fill="#48BB78"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

}

export default About;