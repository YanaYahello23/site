import { Linkedin, Mail, PhoneIncoming} from "lucide-react";
import styles from "../styles/footer.module.css";

const Footer = () => {
    const contactData = [
        {
            name: "Phone",
            content: "+380952096545",
            iconName: PhoneIncoming
        },
        {
            name: "LinkedIn",
            link: "www.linkedin.com/in/yana-yahello-3537aa150",
            iconName: Linkedin,
        },
        {
            name: "Email",
            content: "yana.yahello@gmail.com",
            iconName: Mail
        }
    ];

    return (
        <section>
            <div className={styles.mainContainer}>
                <h1>Contacts</h1>
                <ul className={styles.contactContainer}>
                    {contactData.map((item, index) => {
                        const Icon = item.iconName;
                        const href = item.link
                            ? item.link
                            : item.name === "Email"
                                ? `mailto:${item.content}`
                                : null;
                        return (
                            <li key={index} className={styles.li}>
                                <Icon/>
                                {href ? (
                                    <a href={href} target="_blank" rel="noopener noreferrer">
                                        {item.content ?? item.link}
                                    </a>
                                ) : (
                                    <p>{item.content}</p>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Footer;