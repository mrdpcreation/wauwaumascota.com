export type User = {
  id: string
  name: string
  email: string
  profile?: string
  role: 'ADMIN' | 'USER'
  created_at: string
  updated_at: string
}

export type Activity = {
  id: string
  user_id?: string
  type: 'LOGIN' | 'REGISTRATION' | 'PURCHASE' | 'PAGE_VIEW'
  category: 'AUTHENTICATION' | 'NAVIGATION' | 'PURCHASE' | 'PROFILE'
  description?: string
  metadata?: Record<string, any>
  ip?: string
  user_agent?: string
  created_at: string
  updated_at: string
}

export type Notification = {
  id: string
  user_id: string
  message: string
  type: 'info' | 'warning' | 'error' | 'success'
  read: boolean
  created_at: string
  updated_at: string
}
