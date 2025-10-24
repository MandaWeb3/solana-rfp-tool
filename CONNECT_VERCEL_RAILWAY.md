# 🔗 Connect Vercel Frontend to Railway Backend

## ✅ Current Setup
- **Backend**: https://web-production-723d3.up.railway.app
- **Frontend**: Your Vercel deployment
- **Database**: Supabase (PostgreSQL with pgvector)

## 🚨 CRITICAL: Fix CORS Issues

Your Railway backend currently only allows `localhost` origins. We need to add your Vercel URL.

### **Step 1: Add Environment Variables in Railway**

1. Go to **Railway Dashboard**: https://railway.app/dashboard
2. Select your **solana-rfp-backend** project
3. Click on the service (backend)
4. Go to **"Variables"** tab
5. Add/Update these variables:

```bash
# Copy these from your Supabase project settings
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@db.YOUR_PROJECT.supabase.co:5432/postgres
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Your OpenAI API key
OPENAI_API_KEY=sk-proj-YOUR_OPENAI_KEY

# 🔥 MOST IMPORTANT: Add your Vercel URL here
BACKEND_CORS_ORIGINS=http://localhost:3000,http://localhost:8000,https://your-vercel-app.vercel.app
```

⚠️ **Replace `https://your-vercel-app.vercel.app` with your ACTUAL Vercel URL!**

6. Click **"Save"** or wait for auto-save
7. Railway will **automatically redeploy** with the new environment variables

---

### **Step 2: Add Environment Variable in Vercel**

1. Go to **Vercel Dashboard**: https://vercel.com/dashboard
2. Select your **solana-rfp-tool** project
3. Go to **"Settings"** → **"Environment Variables"**
4. Add:
   - **Key**: `REACT_APP_API_URL`
   - **Value**: `https://web-production-723d3.up.railway.app`
   - **Environments**: ✅ Production, ✅ Preview, ✅ Development
5. Click **"Save"**

---

### **Step 3: Redeploy Vercel**

1. Go to **"Deployments"** tab in Vercel
2. Click the **three dots (•••)** on the latest deployment
3. Click **"Redeploy"**
4. Wait for deployment to complete (~1-2 minutes)

---

## 🧪 Test Your Setup

### **1. Test Backend Health**
Open in browser: https://web-production-723d3.up.railway.app/health

Should return:
```json
{
  "status": "healthy",
  "service": "solana-rfp-api"
}
```

### **2. Test Frontend**
1. Open your Vercel URL
2. Click **"Mock Login"**
3. Go to **"Process Questions"**
4. Enter a test question: "What is Solana?"
5. Click **"Process Questions"**

✅ **Success**: You should see answers from your knowledge base!
❌ **Network Error**: Check CORS settings in Railway (Step 1)

---

## 🐛 Troubleshooting

### Network Error on Frontend

**Check browser console (F12):**
- If you see `CORS error`: Go back to Railway and verify `BACKEND_CORS_ORIGINS` includes your Vercel URL
- If you see `404 Not Found`: The backend might not have redeployed correctly
- If you see `401 Unauthorized`: Clear browser cache and re-login

### Backend Not Responding

**Check Railway logs:**
1. Go to Railway Dashboard
2. Select your backend service
3. Click **"Logs"** tab
4. Look for startup errors

### Database Connection Issues

**Verify Supabase credentials in Railway:**
- `DATABASE_URL` should match your Supabase PostgreSQL connection string
- Test connection: https://web-production-723d3.up.railway.app/api/v1/knowledge/stats

---

## 📋 Full Stack Status

Once everything is connected:

| Component | Service | URL | Status |
|-----------|---------|-----|--------|
| Frontend | Vercel | `https://your-app.vercel.app` | ✅ |
| Backend | Railway | `https://web-production-723d3.up.railway.app` | ✅ |
| Database | Supabase | `db.zaqonwxzoafewoloexsk.supabase.co` | ✅ |
| AI | OpenAI | API Key configured | ✅ |

🎉 **Your Solana RFP Tool is fully deployed!**

