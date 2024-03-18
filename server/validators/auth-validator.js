const { z } = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least of 6 characters" })
    .max(1024, "Password can't be greater than 1024 characters"),
});

// Creating an object schema
const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at lest of 3 chars. " })
    .max(255, { message: "Name must not be more than 255 characters" }),

  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 characters" })
    .max(20, { message: "Phone must not be more than 20 characters" }),
});

const serviceSchema = z.object({
  service: z
    .string({ required_error: "Service is required" })
    .trim()
    .min(3, { message: "Service must be at least of 3 characters" })
    .max(255, { message: "Service must not be more than 255 characters" })
    .regex(/^[a-zA-Z\s]*$/, {
      message: "Service must contain only letters and spaces",
    }),
  price: z
    .string({ required_error: "Price is required" })
    .trim()
    // Price must be in the format 10.00-20.00
    .regex(/^\d+\.\d+-\d+\.\d+$/, {
      message: "Price must be in the format 10.00-20.00",
    })
    .max(255, { message: "Price must not be more than 255 characters" }),
  provider: z
    .string({ required_error: "Provider is required" })
    .trim()
    .min(3, { message: "Provider must be at least of 3 characters" })
    .max(255, { message: "Provider must not be more than 255 characters" }),
  description: z
    .string({ required_error: "Description is required" })
    .trim()
    .min(3, { message: "Description must be at least of 3 characters" })
    .max(255, { message: "Description must not be more than 255 characters" }),
});



module.exports = { signupSchema, loginSchema, serviceSchema};
