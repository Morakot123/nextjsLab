import { Suspense } from "react";
import FilterHeader from "@/Components/FilterHeader";
import FilteredNews from "@/Components/FilteredNews";

export default async function ArchiveFilterPage({ params }) {
    const { filter } = await params;

    let selectedYear;
    let selectedMonth;

    if (filter?.length > 0) {
        selectedYear = filter[0];
    }

    if (filter?.length > 1) {
        selectedMonth = filter[1];
    }

    return (
        <>
            <Suspense fallback={<p>Loading filters...</p>}>
                <FilterHeader year={selectedYear} month={selectedMonth} />
            </Suspense>
            <Suspense fallback={<p>Loading news...</p>}>
                <FilteredNews year={selectedYear} month={selectedMonth} />
            </Suspense>
        </>
    );
}

/*import { getAvailableNewsYears, getAvailableNewsMonths, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';
import NewsList from '@/Components/NewsList';
import Link from 'next/link';


export default async function ArchiveFilterPage({ params }) {
    const { filter } = await params;

    let selectedYear;
    let selectedMonth;

    if (filter?.length > 0) {
        selectedYear = filter[0];
    }

    if (filter?.length > 1) {
        selectedMonth = filter[1];
    }

    const availableYears = await getAvailableNewsYears();
    if (selectedYear && !availableYears.includes(selectedYear)) {
        throw new Error('Invalid year selected');
    }

    if (selectedMonth) {
        const availableMonths = await getAvailableNewsMonths(selectedYear);
        if (!availableMonths.includes(+selectedMonth)) {
            throw new Error('Invalid month selected');
        }
    }

    let links = [];

    if (!selectedYear) {
        // ยังไม่เลือกปี → แสดงลิงก์รายปีทั้งหมด
        links = (await getAvailableNewsYears()).map(year => ({
            label: year,
            href: `/archive/${year}`,
        }));
    } else if (selectedYear && !selectedMonth) {
        // เลือกปีแล้ว → แสดงลิงก์รายเดือนของปีนั้น
        links = getAvailableNewsMonths(selectedYear).map(month => ({
            label: `เดือน ${month}`,
            href: `/archive/${selectedYear}/${month}`,
        }));
    }

    // ถ้าเลือกทั้งปีและเดือนแล้ว ไม่ต้องแสดงลิงก์
    let news;

    if (selectedYear && !selectedMonth) {
        news = await getNewsForYear(selectedYear);
    } else if (selectedYear && selectedMonth) {
        news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    }

    let newsContent = <p>No news found for the selected period.</p>;

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />;
    }

    return (
        <>
            <header id="archive-header">
                <ul>
                    {links.map(link => (
                        <li key={link.href}>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </header>
            {newsContent}
        </>
    );
}

*/