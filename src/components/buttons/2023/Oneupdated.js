import React from 'react'
import { useState, useEffect } from 'react';
import pdf from "../../../pdf/2023/1-Seat-Matrix.pdf"


const One = () => {

    const [downloading, setDownloading] = useState(false);

    useEffect(() => {
        setDownloading(false);
    }, [downloading]);

    const handleDownload = () => {
        setDownloading(true);
        const link = document.createElement("a");
        link.href = pdf;
        link.download = "1-Seat-Matrix.pdf";
        link.onload = () => {
            link.remove();
            setDownloading(false);
        };
        document.body.appendChild(link);
        link.click();
    };

    return (
        <div>
            <button className='bg-blue-700 text-white p-4 m-4 font-serif font-semibold' onClick={handleDownload}>Downloaf pdf</button>

        </div>
    )
}

export default One
