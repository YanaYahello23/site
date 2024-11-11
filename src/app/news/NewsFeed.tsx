"use client"

import {useEffect, useState} from "react";
import Image from "next/image";
import styles from "../styles/news-feed.module.css";

interface NewsProps {
    rssUrl: string;
    imageSrc: string;
}

interface FeedData {
    link: string;
    title: string;
}

export default function NewsFeed({rssUrl, imageSrc}: NewsProps) {
    const [items, setItems] = useState<FeedData[]>([]);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`/api/rss?url=${encodeURIComponent(rssUrl)}`);
                if (!response.ok) {
                    new Error('Network response was not ok');
                }
                const items = await response.json();
                setItems(items);
                setError(false);
            } catch (error) {
                console.error('Failed to fetch data:', error);
                setError(true);
            }
        }

        fetchData();
    }, []);

    if (error) {
        return (
            <section>
                <div>
                    <h3>Latest News</h3>
                    <ul>
                        <p>Failed to fetch data, please try again later.</p>
                    </ul>
                    <a
                        href={"https://kevin-jonathan.medium.com/"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                        Read on Medium
                    </a>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.card}>
            <div>
                <ul>
                    {items.map((item, index) => (
                        <div key={index}>
                            <a href={item.link} target={"_blank"}>
                                <h3>{item.title}</h3>
                            </a>
                        </div>
                    ))}
                </ul>
                <Image
                    src={imageSrc}
                    alt="main bg image"
                    height={400}
                    width={400}
                    style={{ borderRadius: "4px" }}
                />
            </div>
        </section>
    );
}