import ModalBackdrop from '@/Components/modal-backdrop';
import { getNewsItem } from '@/lib/news';
import { notFound } from 'next/navigation';
import ImageClientPage from './ImageClientPage';

export default async function InterceptedImagePage({ params }) {
    const { slug } = params.slug;
    const newsItem = await getNewsItem(slug);

    if (!newsItem) notFound();

    return <ImageClientPage newsItem={newsItem} />;
}
/*    return (
        <ModalBackdrop >
            <dialog open className="modal" >
                <img
                    src={`/images/news/${newsItem.image}`}
                    alt={newsItem.title}
                />
            </dialog>
        </ModalBackdrop>
    );
}*/