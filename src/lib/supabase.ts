import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// We only initialize the client if the keys are actually present AND look valid
export const supabase = (supabaseUrl.startsWith('http') && supabaseKey) 
  ? createClient(supabaseUrl, supabaseKey) 
  : null
