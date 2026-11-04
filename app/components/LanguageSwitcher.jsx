"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/app/i18n/navigation";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const changeLanguage = (newLocale) => {
        router.replace(pathname, {
            locale: newLocale,
        });
    };

    return (
        <select value={locale} onChange={(e) => changeLanguage(e.target.value)}>
            <option value="th">ไทย</option>
            <option value="en">English</option>
            <option value="zh">中文</option>
        </select>
    );
}
