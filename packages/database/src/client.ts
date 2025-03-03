import { createClient } from '@supabase/supabase-js'
import type { User, Activity, Notification } from './schema/types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient<{
  public: {
    Tables: {
      Users: {
        Row: User
        Insert: Omit<User, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<User, 'id'>>
      }
      Activity: {
        Row: Activity
        Insert: Omit<Activity, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Activity, 'id'>>
      }
      Notifications: {
        Row: Notification
        Insert: Omit<Notification, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Notification, 'id'>>
      }
    }
  }
}>(supabaseUrl, supabaseKey)
