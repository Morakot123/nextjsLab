import NewsList from '@/Components/NewsList';
import { getAllNews } from '@/lib/news';

export default async function NewsPage() {
    const news = await getAllNews();
    /*const response = await fetch('http://localhost:8080/news');
    if (!response.ok) {
        throw new Error('ดึงข้อมูลข่าวไม่สำเร็จ');
    }
    const news = await response.json();*/
    return (
        <>
            <h1>หน้ารายการข่าว</h1>
            <NewsList news={news} />
        </>
    );
}

/*"use client";

import { useEffect, useState } from 'react';
import NewsList from '@/Components/NewsList';

export default function NewsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [news, setNews] = useState();

    useEffect(() => {
        async function fetchNews() {
            setIsLoading(true);
            const response = await fetch('http://localhost:8080/news');
            if (!response.ok) {
                setError('ดึงข้อมูลข่าวไม่สำเร็จ');
                setIsLoading(false);
                return;
            }
            const news = await response.json();
            setIsLoading(false);
            setNews(news);
        }
        fetchNews();
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <h1>หน้ารายการข่าว</h1>
            {news && <NewsList news={news} />}
        </>
    );
}*/

/*import NewsList from "@/Components/NewsList";

export default function NewsPage() {
    return (
        <>
            <h2>ข่าวสารและกิจกรรม</h2>
            <p>ติดตามข่าวสารและกิจกรรมล่าสุดของเราได้ที่นี่</p>
            <NewsList news={DUMMY_NEWS} />
        </>
    );
}*/

