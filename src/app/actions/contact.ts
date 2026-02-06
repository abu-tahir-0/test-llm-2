'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormState = {
  success?: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    form?: string[];
  };
  message?: string;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please fix the errors below.',
    };
  }

  try {
    // Simulate API call or database insertion
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // In a real application, you would send an email or save to a database here
    console.log('Contact form submission:', validatedFields.data);

    return {
      success: true,
      message: 'Thank you for your message. We will get back to you soon!',
    };
  } catch (error) {
    return {
      success: false,
      errors: {
        form: ['Something went wrong. Please try again later.'],
      },
    };
  }
}
