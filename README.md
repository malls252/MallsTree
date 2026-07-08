# MallsTree — One Link to All

MallsTree adalah website **link-in-bio** (kumpulan tautan dalam satu halaman). Pengunjung cukup membuka 1 URL untuk melihat semua link milik kamu: sosial media, konten, dan dukungan.

Aplikasi ini dibuat dengan **TanStack Start** (routing berbasis file) + **React**.

---

## Fitur

- **Halaman utama (/**)** berisi daftar link (Instagram, TikTok, YouTube, GitHub, Support me, Discord).
- **Tema modern** dengan komponen UI (Radix UI + Tailwind).
- **Routing berbasis file**: halaman baru tinggal menambahkan file di `src/routes/`.
- **Shell aplikasi** yang konsisten untuk setiap route (`src/routes/__root.tsx`).
- Route `/dashboard` menampilkan `Splash` lalu otomatis kembali ke `/`.

---

## Tech Stack

- **TanStack Start / TanStack Router** (file-based routing)
- **React**
- **TanStack Query** (`@tanstack/react-query`)
- **TailwindCSS**
- **Lucide / React Icons** untuk ikon

---

## Cara Menjalankan (Local Development)

Pastikan kamu sudah install dependencies terlebih dulu.

### Dengan bun
```bash
bun install
bun dev
```

### Dengan npm (jika mau)
```bash
npm install
npm run dev
```

---

## Cara Build & Preview

```bash
bun build
bun preview
```

atau (npm)
```bash
npm run build
npm run preview
```

---

## Mengubah Link yang Ditampilkan

Halaman utama berada di:
- `src/routes/index.tsx` → route `/`

Cari array ini:
- `const links: LinkItem[] = [...]`

Di sana kamu bisa menambah/menghapus link dengan struktur:

```ts
type LinkItem = {
  label: string;
  href: string;
  sub?: string;
  Icon: React.ComponentType<{ className?: string }>;
  featured?: boolean;
};
```

> Tip: `featured` akan membuat tampilan link lebih “menonjol”.

---

## Menambah Halaman/Route Baru (File-based Routing)

Routing diatur oleh TanStack Start **berdasarkan struktur file** di folder `src/routes/`.

Catatan penting:
- Setiap file `.tsx` di `src/routes/` otomatis jadi route.
- Jangan pakai Next/Remix convention seperti `src/pages/` atau `app/layout.tsx`.
- Root layout ada di `src/routes/__root.tsx`.
- `routeTree.gen.ts` bersifat **auto-generated** (jangan diedit manual).

Aturan mapping URL (ringkas):

| File | URL |
| --- | --- |
| `index.tsx` | `/` |
| `dashboard.tsx` | `/dashboard` |
| `about.tsx` | `/about` |
| `users/index.tsx` | `/users` |
| `users/$id.tsx` | `/users/:id` |
| `files/$.tsx` | `/files/*` (splat) |
| `_layout.tsx` | layout route memakai `<Outlet />` |

Panduan lengkap ada di:
- `src/routes/README.md`

---

## Struktur File yang Relevan

- `src/routes/__root.tsx` : app shell + QueryClientProvider + `<Outlet />`
- `src/routes/index.tsx` : halaman utama link-in-bio (`/`)
- `src/routes/dashboard.tsx` : route `/dashboard`
- `src/start.ts` : setup middleware error
- `src/router.tsx` : setup router TanStack + TanStack Query

---

## Scripts

Berdasarkan `package.json`, script yang tersedia:
- `dev` : `vite dev`
- `build` : `vite build`
- `preview` : `vite preview`
- `lint` : `eslint .`
- `format` : `prettier --write .`

