import { DUMMY_NEWS } from '@/app/data/dummy-news';
import Link from "next/link";

export default function NewsContentPage({ params }) {
    const slug = params.slug;
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug == slug);

    if (!newsItem) return <p>News not found!</p>;

    return (
        <article className="news-article">
            <header>
                <img
                    src={`/images/news/${newsItem.image}`}
                    alt={newsItem.title}
                />
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    );
}