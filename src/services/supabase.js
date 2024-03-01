import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://tudhjufvdrkmtrvhmqrs.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1ZGhqdWZ2ZHJrbXRydmhtcXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwOTk1MDcsImV4cCI6MjAyMzY3NTUwN30.o5FOrZju2iH2_ZSf0oUYoodqC8l6VIGsgIwdJmSF5is'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
