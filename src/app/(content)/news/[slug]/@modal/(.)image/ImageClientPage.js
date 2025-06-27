"use client";

import ModalBackdrop from "@/Components/modal-backdrop";

export default function ImageClientPage({ newsItem }) {
    return (
        <ModalBackdrop>
            <dialog open className="modal">
                <img
                    src={`/images/news/${newsItem.image}`}
                    alt={newsItem.title}
                />
            </dialog>
        </ModalBackdrop>
    );
}
