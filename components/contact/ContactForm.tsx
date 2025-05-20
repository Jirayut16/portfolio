"use client";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { motion } from "framer-motion";
// import { oxanium } from "../font/font";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  console.log("loading", loading);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        setForm({ name: "", email: "", message: "" });
        toast.success("Message sent successfully!", {
          description:
            "Thank you for your message. I will reply as soon as possible.",
        });
        setLoading(false);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 3, duration: 2 }} //fade เข้ามา
      viewport={{ once: true }}
      className="flex flex-col relative justify-between p-4 w-full h-full "
    >
      <Label>From</Label>
      <Input
        type="text"
        placeholder="Name"
        name="name"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Label>Email</Label>
      <Input
        type="email"
        placeholder="Email"
        name="email"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Label>Message</Label>
      <Textarea
        placeholder="Message"
        name="message"
        required
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <Button type="submit" disabled={loading} className="w-1/2 cursor-pointer">
        {loading ? "Sending..." : "Send Me a Message"}
      </Button>
    </motion.form>
  );
};
export default ContactForm;
