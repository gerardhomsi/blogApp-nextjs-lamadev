"use client";

import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const status = "notauthenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <Link
          href={"/login"}
          className={styles.link}
        >
          Login
        </Link>
      ) : (
        <>
          <Link
            href={"/login"}
            className={styles.link}
          >
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div
        className={styles.burger}
        onClick={() => setOpen(!open)}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">HomePage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          {status === "notauthenticated" ? (
            <Link href={"/login"}>Login</Link>
          ) : (
            <>
              <Link href={"/login"}>Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;