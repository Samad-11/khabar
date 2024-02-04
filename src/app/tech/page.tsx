import MainBody from '@/components/MainBody';
import { Metadata } from 'next';
// import { getData } from '@/components/module'
import React from 'react'


async function getData() {
    const res = await fetch('https://newsapi.org/v2/top-headlines?apiKey=4ebb2f6b5a964d99873b1723914febed&language=en&category=technology')

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        // throw new Error('Failed to fetch data')
        console.error("failed to fetch data")
    }
    return res.json()
}
export const metadata: Metadata = {
    title: "Technology",
}
const page = async () => {
    const data = await getData();
    let news: object[] = await data.articles;

    return (
        <MainBody news={data.articles} heading={"Technology"} />
    )
}

export default page
