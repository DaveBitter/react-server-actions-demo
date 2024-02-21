"use client";
import { Text } from "@radix-ui/themes";

import styles from "./page.module.css";

export default function ThankYou() {
  return (
    <main className={styles.main}>
      <Text as="h1">Thank your for reaching out!</Text>
      <Text as="p">We will get back to you as soon as possible.</Text>
    </main>
  );
}
