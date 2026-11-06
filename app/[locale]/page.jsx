import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

function Page({ params }) {
    const { locale } = use(params);
    setRequestLocale(locale);
    const t = useTranslations("HomePage");

    return (
        <div className="p-4">
            <h1 className="text-4xl p-8 flex justify-center">{t("hello สวัสดีเจ้า")}</h1>
            <h1>{t("title")}</h1>
            <p>{t("description")}</p>
            <button>{t("about")}</button>
        </div>
    );
}

export default Page;
