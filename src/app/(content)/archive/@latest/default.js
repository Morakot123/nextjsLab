import NewsList from '@/Components/NewsList';
import { getLatestNews } from '@/lib/news';

export default async function LatestNewsPage() {
    const latestNews = await getLatestNews();
    console.log(latestNews);

    return (
        <>
            <h2>Latest News</h2>
            <NewsList news={latestNews} />
        </>
    );
}