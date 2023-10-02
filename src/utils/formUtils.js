const validateForm = (formData) => {
  const requiredFields = ["title", "trackingNumber", "from", "to", "subject"];
  for (const field of requiredFields) {
    if (!formData[field]) {
      console.error(`${field} is required`);
      return false;
    }
  }
  return true;
};

const clearForm = (setFormData) => {
  setFormData({
    title: "",
    trackingNumber: "",
    from: "",
    to: "",
    subject: "",
    type: "incoming",
    attachment: null,
  });
};

const submitForm = (formData) => {
  console.log("Form submitted:", formData);
};

export { validateForm, clearForm, submitForm };
