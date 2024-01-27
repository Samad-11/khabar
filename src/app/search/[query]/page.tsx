import MainBody from '@/components/MainBody';
import { Metadata } from 'next';
import { usePathname } from 'next/navigation';
// import { getData } from '@/components/module'
import React from 'react'


async function getData(query: string) {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=4ebb2f6b5a964d99873b1723914febed&q=${query}`)

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        // throw new Error('Failed to fetch data')
        console.error("failed to fetch data")
    }
    return res.json()
}

export const metadata: Metadata = {
    title: "Search",
}

const page = async ({ params }: { params: { query: string } }) => {
    const data = await getData(params.query);
    let news: object[] = await data.articles;

    return (
        <MainBody news={news} heading={params.query} />
    )
}

export default page