import NewsFeed from "@/app/news/NewsFeed";
import styles from "../styles/news.module.css";

const newsCards = [
    {rssUrl: "https://css-tricks.com/rss-for-newsletters", imageSrc: "/css.jpg" },
    {rssUrl: "https://www.wired.com/feed/rss", imageSrc: "/mixed.jpg" },
    {rssUrl: "https://frontendfront.com/feed/stories", imageSrc: "/fe.jpg" }
]

const News = () => {
    return (
        <div className={styles.main}>
            {
                newsCards.map((card, index) => {
                    return (
                        <div key={index}>
                            <NewsFeed rssUrl={card.rssUrl} imageSrc={card.imageSrc}/>
                        </div>

                    )
                })
            }
        </div>
    );
}

export default News;