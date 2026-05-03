# SplitFast 🇮🇳

**SplitFast** is the smartest way to split bills with flatmates, friends, and travel buddies. Designed for the **Indian context**, it handles everything from **UPI settlements** to complex restaurant bills (including GST & Service Charge) with ease.

> **Built by Aaditya**

## 🚀 Features

### 🇮🇳 Built for India
- **UPI Integration:** Settle debts instantly via **GPay, PhonePe, or Paytm**. One-click payment links.
- **Indian Currency (₹):** Native support for INR formatting.
- **GST & Tip Handling:** Fairly split tax and service charges proportionally across all members.

### 🤖 AI-Powered Automation
- **Smart Receipt Scanning:** Upload a photo of any printed bill. Our **OCR** automatically extracts items, prices, and taxes.
- **Auto-Categorization:** Expenses are automatically sorted into categories like *Food, Travel, Rent, and Utilities*.

### ⚡ Real-Time Sync
- **Live Updates:** See who is adding items in real-time.
- **Offline Support:** Works even with spotty internet (PWA enabled).
- **No Login Required:** Just create a group and share the link.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Database:** [PostgreSQL](https://postgresql.org) (via **Supabase**)
- **ORM:** [Prisma](https://prisma.io)
- **Styling:** [TailwindCSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)
- **Deployment:** [Vercel](https://vercel.com)
- **i18n:** [next-intl](https://next-intl-docs.vercel.app/) (23 languages)

## 🏃‍♂️ Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/aaditya8979/splitfast-pro.git
   cd splitfast-pro
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**

   Copy the example env file and fill in your Supabase credentials:
   ```bash
   cp .env.example .env
   ```

   ```env
   POSTGRES_PRISMA_URL="postgresql://..."
   POSTGRES_URL_NON_POOLING="postgresql://..."
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

4. **Initialize Database**
   ```bash
   npx prisma migrate deploy
   npx prisma generate
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

Open http://localhost:3000 to view it in the browser.

## 📦 Deploy to Vercel

1. Push this repo to GitHub
2. Connect it to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy — Vercel will handle the build automatically

## 📄 License

MIT License © 2026 Aaditya