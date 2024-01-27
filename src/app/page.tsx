import MainBody from "@/components/MainBody";


async function getData() {
  const res = await fetch('https://newsapi.org/v2/everything?q=headline&apiKey=4ebb2f6b5a964d99873b1723914febed')


  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export default async function Home() {
  const data = await getData();



  // let news: object[] = data.results;
  let news: object[] = data.articles;
  // console.log(news)

  // console.log(news[0]);
  // console.log(data.totalResults)
  return (
    <MainBody news={news} heading={"Latest News"} />
  );
}
