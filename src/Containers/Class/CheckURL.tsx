class CheckURL {
    SearchCheckURL(Params: string): boolean | {
        Page: number;
        ListPage: number;
        Params: string;
        SearchValue: string;
        Categories: string;
    } {
        const searchParams = new URLSearchParams(Params);
        const boolPage: boolean = (!Number.isNaN(+`${searchParams.get("Page")}`) &&
            !!searchParams.get("Page"));
        const boolListPage: boolean = (!Number.isNaN(
            +`${searchParams.get("ListPage")}`
        ) && !!searchParams.get("ListPage"));
        const boolCheckUrl: boolean = (!searchParams.get("Categories") || !searchParams.get("Search") || !boolPage || !boolListPage);

        if (boolCheckUrl) { return (boolCheckUrl); }
        else {
            const Categories = (searchParams.get("Categories") !== "All" && searchParams.get("Categories")) ?
                `${searchParams.get("Categories")}.json` : ".json";
            return ({
                Page: +`${searchParams.get("Page")}`,
                ListPage: +`${searchParams.get("ListPage")}`,
                Params: `/sch/${Params.split("&", 2).map(e => e + "&").join("")}`,
                SearchValue: `${searchParams.get("Search")}`,
                Categories: Categories
            });
        }

    }
    CategoryCheckURL(Params: string, Path: string, matchURL:string): boolean | {
        Page: number;
        ListPage: number;
        SearchValue: string;
        Categories: string;
    } {
        const CategoryParams = new URLSearchParams(Params);
        const boolPage =
            !Number.isNaN(+`${CategoryParams.get("Page")}`) &&
            !!CategoryParams.get("Page");
        const boolListPage =
            !Number.isNaN(+`${CategoryParams.get("ListPage")}`) &&
            !!CategoryParams.get("ListPage")
        const boolCheckUrl = !boolPage || !boolListPage;
        if (boolCheckUrl) { return (boolCheckUrl); }
        else {
            const CategoryNameArr = Path.split("/");
            return ({
                Page:+`${CategoryParams.get("Page")}`,
                ListPage: +`${CategoryParams.get("ListPage")}`,
                SearchValue: `Categories ${CategoryNameArr[1]}  ${CategoryNameArr[2]}`,
                Categories: `${matchURL.replace(`${Params}`,"")}.json`
            });
        }
    }
}
export default new CheckURL();