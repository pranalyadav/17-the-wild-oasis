
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://eeqfxpckzbfbprpltlbl.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlcWZ4cGNremJmYnBycGx0bGJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1MTI4MTUsImV4cCI6MjA1NTA4ODgxNX0.9vcJ8aMZ8hJDYmUWA5Nqm8qYNJpMhen1nlaqwC9wlIE"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase