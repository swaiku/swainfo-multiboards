export interface website {
    title: string;
    url: URL;
    rss: URL;
    color: string;
}

export const websites : website[] = [
    {
        title: "sebsauvage",
        url: new URL("https://sebsauvage.net/"),
        rss: new URL("https://sebsauvage.net/links/?do=rss"),
        color: "green"
    },
    {
        title: "lehollandaisvolant",
        url: new URL("https://lehollandaisvolant.net"),
        rss: new URL("https://lehollandaisvolant.net/rss.php?mode=links"),
        color: "blue"
    },
/*    {
        title: "",
        url: new URL(""),
        rss: new URL(""),
        color: "green"
    },*/
]
