import Link from "next/link";
import { DUMMY_NEWS } from '@/app/data/dummy-news';

export default function NewsPage() {
    return (
        <>
            <h2>ข่าวสารและกิจกรรม</h2>
            <p>ติดตามข่าวสารและกิจกรรมล่าสุดของเราได้ที่นี่</p>
            <ul className="news-list">
                {DUMMY_NEWS.map((newsItem) => (
                    <li key={newsItem.id}>
                        <Link href={`/news/${newsItem.slug}`}>
                            <img
                                src={`/images/news/${newsItem.image}`}
                                alt={newsItem.title}
                            />
                            <span>{newsItem.title}</span>
                        </Link>
                    </li>
                ))
                }
            </ul >
        </>
    );
}

