# Personas ✦ Social Media Platform

A modern, responsive, and feature-rich social media web application built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**. Personas connects people through interactive feeds, real-time social engagement, customizable profiles, and instant notifications—all styled with a warm custom theme (`#E3BB70`).

---

## 🚀 Key Features

### 🔐 Authentication & Account Management
- **Registration & Login**: Fast onboarding with robust client-side validation using **Zod** and **React Hook Form**.
- **Protected Routes**: Custom navigation guards (`Authguard` and `Mainguard`) to manage authenticated and public view access.
- **Session Persistence**: JWT-based authentication stored securely for seamless session recovery.
- **Account Security**: In-app modal for updating account password with validation checks.

### 📝 Post & Feed Management
- **Interactive Feed**: Explore global posts with rich media and real-time updates powered by **TanStack Query**.
- **Media Uploads**: Create posts with image attachments and custom text.
- **Post Actions**: Edit, delete, and inspect individual posts in a dedicated single-post detail view (`/postdetails/:postid`).
- **Likes & Shares**: Like or unlike posts instantly with optimistic state handling, and share posts with the community.

### 💬 Comments & Discussions
- **Comment Threads**: Add, edit, and delete comments on any post.
- **Dynamic Counters**: Real-time comment counts and structured engagement views.

### 👤 Profile & Social Graph
- **Personal Profile**: View follower/following counts, personal posts, and user information.
- **Avatar Customization**: Upload and preview profile picture updates seamlessly.
- **Follow Suggestions**: Discover and follow new creators and friends with one-click follow/unfollow actions.

### 🔔 Notifications & Discovery
- **Live Counter**: Unread notifications indicator in the top navigation bar.
- **Notification Center**: Dedicated notifications feed (`/Notifications`) with filter badges and a "Mark all as read" feature.

### 🎨 Design & Experience
- **Custom Brand Identity**: Cohesive warm gold theme (`#E3BB70`) across all UI elements, buttons, focus borders, and interactive states.
- **HeroUI & Tailwind v4**: Powered by `@heroui/react` components and layered Tailwind CSS v4 design tokens.
- **Toast Feedback**: Real-time action feedback via **Sonner**.
- **Mobile First**: Fully responsive layout with sticky headers, mobile menu drawers, and custom scrollbars.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Bundler & Dev Server** | [Vite 8](https://vitejs.dev/) |
| **Styling & UI** | [Tailwind CSS v4](https://tailwindcss.com/) + [HeroUI v3](https://heroui.com/) |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **Data Fetching & Cache** | [TanStack React Query v5](https://tanstack.com/query) |
| **Forms & Validation** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **HTTP Client** | [Axios](https://axios-http.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) + [@gravity-ui/icons](https://gravity-ui.com/icons) |
| **Notifications** | [Sonner](https://sonner.emilkowal.ski/) |

---

## 📂 Project Structure

```text
src/
├── components/          # Reusable UI & feature components
│   ├── Footer/          # Application footer
│   ├── Guard/           # Route guards (Authguard, Mainguard)
│   ├── Navbar/          # Navigation bar with brand & notification badges
│   ├── Posts/           # Post feed, modals, likes, shares, comments, profile photo
│   ├── authcomplayout/  # Authentication layouts, Brand logo, headers
│   └── interface/       # TypeScript type & data definitions
├── const/               # Global constants & API environment variables
├── context/             # React context providers (AuthContext, UserDataContext)
├── data/                # Static data & mocks
├── Layouts/             # Top-level shell layouts (Authlayout, Mainlayout)
├── pages/               # Application route views
│   ├── Auth/            # Login & Signup pages
│   ├── Home/            # Main feed & home dashboard
│   ├── Notifications/   # Notifications center & Mark All controls
│   ├── Profile/         # User profile & personal timeline
│   └── Notfound/        # 404 page
├── Routes/              # React Router configuration
├── Services/            # API integration & axios service calls
├── validation/          # Zod validation schemas (signup, password change)
├── App.tsx              # Root component & providers setup
├── index.css            # Tailwind CSS v4 & theme token overrides (#E3BB70)
└── main.tsx             # Application entry point
```

---

## 🏁 Getting Started

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (or yarn / pnpm / bun)

### 1. Clone the repository
```bash
git clone https://github.com/your-username/Personas.git
cd Personas
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to explore the app.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview production build
```bash
npm run preview
```

### 6. Lint the codebase
```bash
npm run lint
```


---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
