import { updateNews, deleteNews } from '@/lib/news';

export async function PUT(req, { params }) {
    try {
        const form = await req.formData();
        const news = {
            id: (await params).id,
            slug: form.get('slug'),
            title: form.get('title'),
            content: form.get('content'),
            date: form.get('date'),
        };
        const file = form.get('image');

        const result = await updateNews(news, file);
        return Response.json(result);
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(_, { params }) {
    const { id } = await params;
    try {
        await deleteNews(id);
        return new Response(null, { status: 204 });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}

/*import { DUMMY_NEWS } from '@/data/dummy-news';
import { updateNews, deleteNews } from '@/lib/news';

export async function GET(_, { params }) {
    const { id } = await params;
    const index = DUMMY_NEWS.findIndex((item) => item.id === id);
    if (index == -1) {
        return new Response('News not found', { status: 404 });
    }
    return Response.json(DUMMY_NEWS[index]);
}

export async function PUT(request, { params }) {
    const body = await request.json();
    const { id } = await params;

    if (!body.title && !body.content && !body.slug) {
        return Response.json({ error: 'Nothing to update' }, { status: 400 });
    }

    updateNews(id, body);
    return Response.json({ message: `News ${params.id} updated` });
}

export async function DELETE(_, { params }) {
    const { id } = await params;

    deleteNews(id);
    return new Response(null, { status: 204 });
}*/