"use server";
import { redirect } from "next/navigation";

export async function handleSubmitServerSide(formData) {
  const data = Object.fromEntries(formData);

  console.log(data);
  redirect("/thank-you");
}
