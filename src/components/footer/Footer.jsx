import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={50}
            height={50}
          />
          <h1 className={styles.logoText}>LamaBlog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          accusantium quae optio, nulla commodi quam magni beatae odit
          voluptatum maxime culpa quia labore voluptas, eveniet quidem
          obcaecati? Libero, temporibus delectus.
        </p>
        className={styles.icon}
        <div className={styles.icons}>
          <Image
            src={"/facebook.png"}
            alt=""
            width={18}
            height={18}
          />
          <Image
            src={"/instagram.png"}
            alt=""
            width={18}
            height={18}
          />
          <Image
            src={"/tiktok.png"}
            alt=""
            width={18}
            height={18}
          />
          <Image
            src={"/youtube.png"}
            alt=""
            width={18}
            height={18}
          />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href={"/"}>HomePage</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href={"/"}>Style</Link>
          <Link href={"/"}>Fashion</Link>
          <Link href={"/"}>Coding</Link>
          <Link href={"/"}>Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href={"/"}>FaceBook</Link>
          <Link href={"/"}>Instagram</Link>
          <Link href={"/"}>TikTok</Link>
          <Link href={"/"}>YouTube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
