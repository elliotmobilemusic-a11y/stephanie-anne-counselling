# Assets — Image Guide

Place image files in the `/public/images/` folder (create it if it doesn't exist).
Reference them in components as `/images/filename.jpg` (Vite serves `public/` at the root).

---

## Images Needed

### 1. Hero Portrait
- **Where to add**: `src/components/Hero.jsx` — find the comment `TODO: Replace this placeholder`
- **Suggested filename**: `/public/images/stephanie-portrait.jpg`
- **Recommended size**: 800 × 1000 px (portrait, 4:5 ratio)
- **Replace the placeholder div with**:
  ```jsx
  <img
    src="/images/stephanie-portrait.jpg"
    alt="Stephanie, Person-Centred Counsellor in Brighouse"
    className="w-full h-full object-cover"
  />
  ```

### 2. About Section Photo
- **Where to add**: `src/components/About.jsx` — find the comment `TODO: Replace this placeholder`
- **Suggested filename**: `/public/images/stephanie-about.jpg`
- **Recommended size**: 600 × 800 px (portrait, 3:4 ratio)
- **Replace the placeholder div with**:
  ```jsx
  <img
    src="/images/stephanie-about.jpg"
    alt="Stephanie in her therapy room in Brighouse"
    className="w-full h-full object-cover"
  />
  ```

### 3. Open Graph / Social Share Image
- **Where to add**: `index.html` — uncomment the `og:image` meta tag
- **Suggested filename**: `/public/og-image.jpg`
- **Required size**: 1200 × 630 px (landscape)
- **Uncomment in index.html**:
  ```html
  <meta property="og:image" content="/og-image.jpg" />
  ```

---

## Tips
- Use `.jpg` for photographs (smaller file size, same quality for photos).
- Compress images with [Squoosh](https://squoosh.app) before adding them.
- Keep portrait images focused on the face with some breathing room.
