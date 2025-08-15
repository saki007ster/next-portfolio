# Contact Form Troubleshooting Guide

## 🚨 **"Failed to send email" Error - Production Fix**

### **Root Causes:**
1. **Missing API Key** - `RESEND_API_KEY` environment variable not set
2. **Domain Not Verified** - Resend needs to verify your production domain
3. **API Key Restrictions** - Key might be restricted to specific domains/IPs

### **Quick Fixes:**

#### **1. Set Environment Variables (Vercel)**
```bash
# In your Vercel project dashboard:
# Settings → Environment Variables
RESEND_API_KEY=re_your_actual_api_key_here
```

#### **2. Verify Your Domain in Resend**
1. Go to [resend.com/dashboard](https://resend.com/dashboard)
2. Navigate to "Domains" section
3. Add and verify your domain (e.g., `yourdomain.com`)
4. Wait for DNS verification (usually 24-48 hours)

#### **3. Update From Address (Optional)**
```typescript
// In src/app/api/contact/route.ts
from: 'Contact Form <noreply@yourdomain.com>', // After domain verification
```

### **Testing Steps:**

#### **Local Development:**
1. Create `.env.local` file:
   ```bash
   RESEND_API_KEY=re_your_api_key_here
   ```
2. Restart dev server: `npm run dev`
3. Test contact form locally

#### **Production (Vercel):**
1. Add `RESEND_API_KEY` in Vercel environment variables
2. Redeploy your app
3. Test contact form on live site

### **Common Error Messages:**

| Error | Solution |
|-------|----------|
| "Email service is not configured" | Set `RESEND_API_KEY` environment variable |
| "Domain verification required" | Verify your domain in Resend dashboard |
| "Rate limit exceeded" | Wait a few minutes before trying again |
| "Invalid API key" | Check your API key in Resend dashboard |

### **Resend Dashboard Links:**
- [API Keys](https://resend.com/api-keys)
- [Domains](https://resend.com/domains)
- [Logs](https://resend.com/logs)

### **Need Help?**
- Check Resend logs for detailed error messages
- Verify API key permissions and restrictions
- Ensure domain verification is complete
- Contact Resend support if issues persist

---
**Last Updated:** $(date)
**Status:** ✅ Build successful, ready for production deployment
