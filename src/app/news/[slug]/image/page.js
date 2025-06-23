import { DUMMY_NEWS } from '@/app/data/dummy-news';
import { notFound } from 'next/navigation';

export default async function ImagePage({ params }) {
    const { slug } = await params;
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug == slug);

    if (!newsItem) notFound();

    return (
        <div className="fullscreen-image">
            <img
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
            />
            <p>Image for the news article with slug: {slug}</p>
        </div>
    );
}