export function ContactForm() {
  return (
    <form>
      <input type="text" name="name" placeholder="John Smith" required />
      <input
        type="email"
        name="email"
        placeholder="example@gmail.com"
        required
      />
      <textarea name="message" rows={5} placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
  );
}
