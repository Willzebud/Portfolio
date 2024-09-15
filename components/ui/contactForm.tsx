import { useState } from "react";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Nouvel état pour désactiver le bouton

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsButtonDisabled(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "94819b83-cd20-452f-bbc5-7fe2f2062ffe");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      setFormStatus("Merci, votre message a été envoyé !");
    } else {
      setFormStatus("Une erreur est survenue, veuillez réessayer.");
      setIsButtonDisabled(false);
    }
  }

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-brandSecondary dark:text-brandPrimary"
          >
            Nom
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-1 p-2 block w-full border rounded-md bg-background text-foreground"
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-brandSecondary dark:text-brandPrimary"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 p-2 block w-full border rounded-md bg-background text-foreground"
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-brandSecondary dark:text-brandPrimary"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            className="mt-1 p-2 block w-full border rounded-md bg-background text-foreground h-32"
          ></textarea>
        </div>
        <button
          type="submit"
          className={`w-full bg-brandSecondary dark:bg-brandPrimary dark:text-black text-white font-semibold py-2 px-4 rounded-md ${
            isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isButtonDisabled}
        >
          Envoyer
        </button>
      </form>
      {formStatus && (
        <p className="form-status mt-4 text-center text-green-500">
          {formStatus}
        </p>
      )}
    </div>
  );
}
