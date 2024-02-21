"use client";
import { Text } from "@radix-ui/themes";

import { ContactForm } from "@/src/components/ContactForm";
import styles from "./page.module.css";

import { handleSubmitServerSide } from "@/app/actions";

export default function Home() {
  function handleSubmitClientSide(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
  }

  return (
    <main className={styles.main}>
      <div>
        <Text as="h2">Client-side only 😕</Text>
        <ContactForm onSubmit={handleSubmitClientSide} />
      </div>
      <div>
        <Text as="h2">Server-side Progressively enhanced 🚀</Text>
        <ContactForm action={handleSubmitServerSide} />
      </div>
    </main>
  );
}
