import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

// Define the form data interface
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

// Define the return type of the hook
interface UseContactFormReturn {
  formData: ContactFormData;
  isSubmitting: boolean;
  submitError: string;
  submitSuccess: boolean;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
  setSubmitSuccess: (value: boolean) => void;
}

export function useContactForm(): UseContactFormReturn {
  const isProd = process.env.NODE_ENV === "production";

  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });
  };

  // Helper function to get formatted service name
  const getServiceName = () => {
    switch (formData.service) {
      case "ai-development":
        return "AI Development";
      case "ml-consulting":
        return "Machine Learning Consulting";
      case "nlp-solutions":
        return "NLP Solutions";
      case "custom-ai-agents":
        return "Custom AI Agents";
      default:
        return "General Inquiry";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      // Create the email content with improved formatting
      const emailContent = {
        ...formData,
        _replyto: formData.email,
        _subject: `Lulo AI Contact: ${getServiceName()} - ${formData.name}`,
        _cc: "yesidlopez@luloai.com",
      };

      // Log the email content to console for testing
      console.log("Form submission data:", emailContent);
      console.log("Name:", formData.name);
      console.log("Email:", formData.email);
      console.log("Company:", formData.company || "Not provided");
      console.log("Service:", getServiceName());
      console.log("Message:", formData.message);

      if (isProd) {
        const response = await fetch("https://formspree.io/f/mrbenkgz", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formData,
              _replyto: formData.email,
              _subject: `Lulo AI Contact: ${getServiceName()} - ${formData.name}`,
              // Remove the formattedMessage field to simplify the email
              _cc: "yesidlopez@luloai.com",
            }),
          });
    
          if (!response.ok) {
            throw new Error("Failed to submit form");
          }
      } else

      // Simulate successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      setSubmitSuccess(true);

      // Reset the form
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        t("errorMessage") ||
          "There was an error sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    submitError,
    submitSuccess,
    handleChange,
    handleSubmit,
    resetForm,
    setSubmitSuccess,
  };
}
