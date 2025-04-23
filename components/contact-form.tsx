"use client"

import { motion } from "framer-motion"
import { useContactForm } from "@/hooks/use-contact-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const {
    formData,
    isSubmitting,
    isFormValid,
    formError,
    errorMessage,
    handleChange,
    handleSubmit,
  } = useContactForm()

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      animate={formError ? { x: [0, -10, 10, -10, 10, 0] } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="sr-only">Name</label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className={`bg-gray-800 border-gray-700 text-white focus:border-blue-500 ${
              formError && !formData.name.trim() ? "border-red-500" : ""
            }`}
            aria-label="Name"
            aria-invalid={formError && !formData.name.trim()}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="sr-only">Email</label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            title="Enter a valid email address"
            placeholder="Your email"
            className={`bg-gray-800 border-gray-700 text-white focus:border-blue-500 ${
              formError && !formData.email.trim() ? "border-red-500" : ""
            }`}
            aria-label="Email"
            aria-invalid={formError && !formData.email.trim()}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="sr-only">Message</label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message"
            className={`min-h-[150px] bg-gray-800 border-gray-700 text-white focus:border-blue-500 ${
              formError && !formData.message.trim() ? "border-red-500" : ""
            }`}
            aria-label="Message"
            aria-invalid={formError && !formData.message.trim()}
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        disabled={isSubmitting || !isFormValid}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      {formError && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 text-sm text-center"
          role="alert"
        >
          {errorMessage}
        </motion.p>
      )}
    </motion.form>
  )
}
