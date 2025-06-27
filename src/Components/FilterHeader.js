import { getAvailableNewsYears, getAvailableNewsMonths } from '@/lib/news';
import Link from 'next/link';

export default async function FilterHeader({ year, month }) {
    const availableYears = await getAvailableNewsYears();
    if (year && !availableYears.includes(year)) {
        throw new Error('Invalid year selected');
    }

    if (month) {
        const availableMonths = await getAvailableNewsMonths(year);
        if (!availableMonths.includes(month)) {
            throw new Error('Invalid month selected');
        }
    }

    let links = [];

    if (!year) {
        // ยังไม่เลือกปี → แสดงลิงก์รายปีทั้งหมด
        links = (await getAvailableNewsYears()).map(year => ({
            label: year,
            href: `/archive/${year}`,
        }));
    } else if (year && !month) {
        // เลือกปีแล้ว → แสดงลิงก์รายเดือนของปีนั้น
        links = (getAvailableNewsMonths(year)).map(month => ({
            label: `เดือน ${month}`,
            href: `/archive/${year}/${month}`,
        }));
    }

    return (
        <header id="archive-header">
            <ul>
                {links.map(link => (
                    <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </header>
    );
}