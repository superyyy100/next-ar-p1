'use server'

import { SignupFormSchema, FormState } from '@/app/auth/definitions'
import bcrypt from 'bcrypt';
//import { createSession } from '@/app/auth/session'
import { redirect } from 'next/navigation';
import pool from '../../../utils/db' 

export async function signup(_state: FormState, formData: FormData) {

    // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
  // 2. Prepare data for insertion into database
  const { name, email, password } = validatedFields.data
  // e.g. Hash the user's password before storing it
  const hashedPassword = await bcrypt.hash(password, 10)

  const data = await pool.query(
    `INSERT INTO users(username, password) VALUES ($1, $2) RETURNING id`,
    [email, hashedPassword]
  )
 
  const user = data.rows[0]

  if (!user) {
    return {
      message: 'An error occurred while creating your account.',
    }
  }

  // 4. Create user session
  //await createSession(user.id)
  // 5. Redirect user
  redirect('/web3')
}

