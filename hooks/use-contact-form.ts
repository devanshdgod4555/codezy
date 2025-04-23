import { useState, useCallback, useEffect } from "react"
import { motion } from "framer-motion"

export interface FormData {
  name: string
  email: string
  message: string
}

export interface UseContactFormReturn {
  formData: FormData
  isSubmitting: boolean
  isFormValid: boolean
  formError: boolean
  errorMessage: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  resetForm: () => void
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
}

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  // Reset error state when form data changes
  useEffect(() => {
    if (formError) {
      setFormError(false)
      setErrorMessage("")
    }
  }, [formData, formError])

  // Basic validation
  const isFormValid = Object.values(formData).every((val: string) => val.trim() !== "")

  // Email validation
  const isEmailValid = /\S+@\S+\.\S+/.test(formData.email)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev: FormData) => ({ ...prev, [name]: value }))
  }, [])

  const resetForm = useCallback(() => {
    setFormData({ name: "", email: "", message: "" })
    setFormError(false)
    setErrorMessage("")
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!isFormValid) {
      setFormError(true)
      setErrorMessage("Please fill in all fields")
      return
    }

    // Validate email
    if (!isEmailValid) {
      setFormError(true)
      setErrorMessage("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)
    setFormError(false)
    setErrorMessage("")

    try {
      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      resetForm()
    } catch (error) {
      setFormError(true)
      setErrorMessage("Could not send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }, [isFormValid, isEmailValid, resetForm])

  return {
    formData,
    isSubmitting,
    isFormValid,
    formError,
    errorMessage,
    handleChange,
    handleSubmit,
    resetForm,
    setFormData,
  }
} 