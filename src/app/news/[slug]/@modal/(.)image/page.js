"use client";

import { DUMMY_NEWS } from '@/app/data/dummy-news';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { use } from 'react';

export default function InterceptedImagePage({ params }) {
    const router = useRouter();
    const { slug } = use(params);
    const newsItem = DUMMY_NEWS.find(item => item.slug === slug);

    if (!newsItem) notFound();

    return (
        <div className="modal-backdrop" onClick={router.back}>
            <dialog open className="modal" onClick={e => e.stopPropagation()}>
                <img
                    src={`/images/news/${newsItem.image}`}
                    alt={newsItem.title}
                />
            </dialog>
        </div>
    );
}