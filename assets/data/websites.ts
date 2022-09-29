export interface Website {
    id: number;
    title: string;
    url: URL;
    rss: URL;
    color: string;
}

export const websites : Website[] = [
    {
        id: 1,
        title: "sebsauvage",
        url: new URL("https://sebsauvage.net/links/"),
        rss: new URL("https://sebsauvage.net/links/?do=rss"),
        color: "#7ab40f",
    },
    {
        id: 2,
        title: "le hollandais volant",
        url: new URL("https://lehollandaisvolant.net"),
        rss: new URL("https://lehollandaisvolant.net/rss.php?mode=links"),
        color: "blue"
    },
    {
        id: 3,
        title: "Journal du hacker",
        url: new URL("https://www.journalduhacker.net/"),
        rss: new URL("https://www.journalduhacker.net/rss"),
        color: "green"
    },
    {
        id: 4,
        title: "Warrior du Dimanche",
        url: new URL("https://warriordudimanche.fr/"),
        rss: new URL("https://warriordudimanche.fr/feed/"),
        color: "green"
    },
    {
        id: 5,
        title: "Korben",
        url: new URL("https://korben.info/"),
        rss: new URL("https://korben.info/feed"),
        color: "green"
    },
    {
        id: 6,
        title: "Zataz",
        url: new URL("https://www.zataz.com/"),
        rss: new URL("https://www.zataz.com/feed/"),
        color: "red"
    },
    {
        id: 7,
        title: "jeuxactu",
        url: new URL("https://www.jeuxactu.com/"),
        rss: new URL("https://www.jeuxactu.com/rss/ja.rss"),
        color: "blue"
    },
    {
        id: 8,
        title: "jeuxvideo.com",
        url: new URL("https://www.jeuxvideo.com/"),
        rss: new URL("https://www.jeuxvideo.com/rss/rss.xml"),
        color: "blue"
    },
    {
        id: 9,
        title: "IGN",
        url: new URL("https://fr.ign.com/"),
        rss: new URL("https://fr.ign.com/feed.xml"),
        color: "red"
    },
    {
        id: 10,
        title: "Gaming On Linux",
        url: new URL("https://www.gamingonlinux.com/"),
        rss: new URL("https://www.gamingonlinux.com/article_rss.php"),
        color: "blue"
    },
    {
        id: 11,
        title: "itsfoss",
        url: new URL("https://itsfoss.com/"),
        rss: new URL("https://itsfoss.com/feed/"),
        color: "light-blue"
    }
]
