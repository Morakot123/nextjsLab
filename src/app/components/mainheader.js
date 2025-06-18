import Link from "next/link";

export default function MainHeader() {
    return (
        <header id="main-header">
            <div id="logo">
                <Link href="/">NextNews</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">หน้าหลัก</Link>
                    </li>
                    <li>
                        <Link href="/news">ข่าวสาร</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}