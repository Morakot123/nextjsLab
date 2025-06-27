import { getAllNews, addNews } from '@/lib/news';

export async function GET() {
    try {
        const news = await getAllNews();
        return Response.json(news);
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const form = await req.formData();
        const news = {
            slug: form.get('slug'),
            title: form.get('title'),
            content: form.get('content'),
            date: form.get('date'),
        };
        const file = form.get('image');

        const result = await addNews(news, file);
        return Response.json(result, { status: 201 });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}


/*import { getAllNews, addNews } from '@/lib/news';

export function GET() {
    return Response.json(getAllNews());
}

export async function POST(request) {
    const body = await request.json();

    if (!body.title || !body.content || !body.slug) {
        return Response.json({ error: 'Missing fields' }, { status: 400 });
    }

    const newItem = {
        id: 'n' + Date.now(),
        title: body.title,
        slug: body.slug,
        content: body.content,
        image: body.image || 'news.jpg',
        date: new Date().toISOString().split('T')[0],
    };

    addNews(newItem);
    return Response.json({ message: 'News added', data: newItem }, { status: 201 });
}*/