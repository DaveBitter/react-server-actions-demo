import { Button, Text, TextArea, TextField } from "@radix-ui/themes";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

import styles from "./contact-form.module.css";

export function ContactForm(props) {
  return (
    <form className={styles.form} {...props}>
      <div className={styles.formItem}>
        <Text htmlFor="name" as="label" mb="10" size="4">
          Name
        </Text>

        <TextField.Input
          id="name"
          name="name"
          size="3"
          placeholder="Name"
          required
        />
      </div>

      <div className={styles.formItem}>
        <Text htmlFor="email" as="label" mb="10" size="4">
          Email
        </Text>

        <TextField.Input
          id="email"
          name="email"
          size="3"
          placeholder="Email"
          required
          type="email"
        />
      </div>

      <div className={styles.formItem}>
        <Text htmlFor="message" as="label" mb="10" size="4">
          Message
        </Text>

        <TextArea
          id="message"
          name="message"
          size="3"
          rows="10"
          placeholder="Message"
          required
        />
      </div>

      <Button type="submit" size="4">
        Submit
        <PaperPlaneIcon width="16" height="16" />
      </Button>
    </form>
  );
}
