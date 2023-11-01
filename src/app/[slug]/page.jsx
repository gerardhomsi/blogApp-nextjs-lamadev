import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            inventore.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className={styles.avatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>10.10.2020</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/p1.jpeg"
            alt=""
            fill
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              doloremque accusantium, similique laudantium ullam, suscipit
              minima quas harum fuga ex nulla molestiae saepe sint impedit non
              numquam labore accusamus cupiditate.
            </p>
            <h3>Lorem ipsum dolor sit</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              doloremque accusantium, similique laudantium ullam, suscipit
              minima quas harum fuga ex nulla molestiae saepe sint impedit non
              numquam labore accusamus cupiditate.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              doloremque accusantium, similique laudantium ullam, suscipit
              minima quas harum fuga ex nulla molestiae saepe sint impedit non
              numquam labore accusamus cupiditate.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              doloremque accusantium, similique laudantium ullam, suscipit
              minima quas harum fuga ex nulla molestiae saepe sint impedit non
              numquam labore accusamus cupiditate.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              doloremque accusantium, similique laudantium ullam, suscipit
              minima quas harum fuga ex nulla molestiae saepe sint impedit non
              numquam labore accusamus cupiditate.
            </p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
