import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hello and Welcome!</b> Discover stuff stuff stuff
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src={"/p1.jpeg"}
            alt=""
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, aut?
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a
            deserunt laboriosam eaque necessitatibus at culpa veniam tempore
            laudantium possimus nisi eligendi, repellendus facilis animi tempora
            quas? Molestiae, repellat modi voluptatibus, animi amet quam
            expedita cumque provident illo corporis labore.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
