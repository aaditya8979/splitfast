# SplitFast 🇮🇳

![SplitFast Banner](https://via.placeholder.com/1200x400/FF6B6B/FFFFFF?text=SplitFast+-+The+Indian+Bill+Splitter)

**SplitFast** is the smartest way to split bills with flatmates, friends, and travel buddies. Designed specifically for the **Indian context**, it handles everything from **UPI settlements** to complex restaurant bills (including GST & Service Charge) with ease.

> **Hackathon Submission 2026**
> *Live Demo:* [https://splitfast-final.vercel.app](https://splitfast-final.vercel.app)

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

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Database:** [PostgreSQL](https://postgresql.org) (via **Supabase**)
- **ORM:** [Prisma](https://prisma.io)
- **Styling:** [TailwindCSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)
- **Deployment:** [Vercel](https://vercel.com)


## 🏃‍♂️ Run Locally

Clone the project and start splitting bills in minutes.

1. **Clone the repository**
   ```bash
   git clone [https://github.com/aaditya8979/splitfast-final.git](https://github.com/aaditya8979/splitfast-final.git)
   cd splitfast-final
   ```

2. **Install Dependencies**
     ```bash
   npm install
   ```

3. **Environment Setup**
     ```bash
    POSTGRES_PRISMA_URL="postgresql://..."
    POSTGRES_URL_NON_POOLING="postgresql://..."
    NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

4. **Initialise Database**
     ```bash
   npx prisma db push
    npx prisma db seed
   ```

5. **Start Server**
     ```bash
   npm run dev
   ```

Open http://localhost:3000 to view it in the browser.