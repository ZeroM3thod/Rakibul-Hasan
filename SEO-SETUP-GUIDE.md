# SEO Setup Guide for Rakibul Hasan Rakib Portfolio

## ✅ Completed SEO Configurations

### 1. **Sitemap (sitemap.ts)**
Location: `src/app/sitemap.ts`

The sitemap has been created with all main pages:
- Homepage: Priority 1.0
- Projects: Priority 0.9
- Experience: Priority 0.8
- Skills: Priority 0.8
- Achievements: Priority 0.7
- Blog: Priority 0.7
- Gallery: Priority 0.6
- Resume: Priority 0.6
- Contact: Priority 0.5

**Access your sitemap at:** https://rakibulhasan.live/sitemap.xml

### 2. **Robots.txt (robots.ts)**
Location: `src/app/robots.ts`

Configuration:
- Allows all search engines to crawl your site
- Blocks `/api/` and `/private/` routes
- References your sitemap

**Access your robots.txt at:** https://rakibulhasan.live/robots.txt

### 3. **Google Site Verification**
Location: `public/google6dff2d69354829b0.html`

Your Google verification file has been created and added to the `public` folder.

**Verification code added to metadata:** `google6dff2d69354829b0`

### 4. **Enhanced Metadata (layout.tsx)**
Location: `src/app/layout.tsx`

Updated with:
- **Title:** Rakibul Hasan Rakib | AI & Web Development Expert
- **Description:** Comprehensive description highlighting your AI and Web Development expertise
- **Keywords:** Rakibul Hasan Rakib, AI Engineer, Web Developer, Machine Learning, Full Stack Developer, React, Next.js, Python, TensorFlow, Portfolio, Bangladesh, Web Design, AI Development
- **Open Graph tags** for social media sharing
- **Twitter Card** configuration
- **Canonical URL:** https://rakibulhasan.live

---

## 🚀 Next Steps - Google Search Console Setup

### Step 1: Verify Your Site
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Click "Add Property"
3. Enter: `https://rakibulhasan.live`
4. Choose verification method: **HTML file** (already uploaded)
5. Click "Verify"

### Step 2: Submit Your Sitemap
1. In Google Search Console, go to **Sitemaps** (left sidebar)
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Google will start crawling your pages

### Step 3: Request Indexing (Optional but Recommended)
1. Go to **URL Inspection** tool
2. Enter: `https://rakibulhasan.live`
3. Click "Request Indexing"
4. Repeat for important pages like `/projects`, `/experience`, etc.

---

## 📊 Additional SEO Recommendations

### 1. Create an Open Graph Image
Create an image file: `public/og-image.png`
- **Dimensions:** 1200x630 pixels
- **Content:** Your name, title, and a professional background
- This image will appear when sharing your site on social media

### 2. Add Structured Data (JSON-LD)
Consider adding structured data to help search engines understand your content better.

Example for your homepage:
```json
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Rakibul Hasan Rakib",
  "url": "https://rakibulhasan.live",
  "image": "https://rakibulhasan.live/about/rakib.webp",
  "sameAs": [
    "https://github.com/rakibulhasanrakib",
    "https://linkedin.com/in/rakibulhasanrakib",
    "https://twitter.com/rakibulhasanrakib"
  ],
  "jobTitle": "AI and Web Development Expert",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  }
}
```

### 3. Performance Optimization
- Ensure all images are optimized (WebP format)
- Use Next.js Image component for automatic optimization
- Monitor Core Web Vitals in Google Search Console

### 4. Content Best Practices
- Use descriptive heading tags (H1, H2, H3)
- Add alt text to all images
- Write unique meta descriptions for each page
- Keep URLs clean and descriptive

---

## 🔍 Monitoring & Analytics

### Google Analytics (Recommended)
1. Create a Google Analytics 4 property
2. Add the tracking code to your `layout.tsx`
3. Monitor traffic, user behavior, and conversions

### Bing Webmaster Tools
1. Visit [Bing Webmaster Tools](https://www.bing.com/webmasters/)
2. Add your site
3. Import settings from Google Search Console (easier)

---

## 📝 SEO Checklist

- ✅ Sitemap.xml created and accessible
- ✅ Robots.txt configured
- ✅ Google verification file added
- ✅ Meta tags optimized
- ✅ Open Graph tags added
- ✅ Twitter Card configured
- ✅ Canonical URLs set
- ⏳ Submit to Google Search Console
- ⏳ Submit to Bing Webmaster Tools
- ⏳ Create og-image.png (1200x630)
- ⏳ Add Google Analytics
- ⏳ Monitor performance with PageSpeed Insights

---

## 🌐 Important URLs

- **Your Website:** https://rakibulhasan.live
- **Sitemap:** https://rakibulhasan.live/sitemap.xml
- **Robots.txt:** https://rakibulhasan.live/robots.txt
- **Google Verification:** https://rakibulhasan.live/google6dff2d69354829b0.html

---

## 📞 Support

If you encounter any issues:
1. Check that your DNS is properly configured
2. Ensure your site is deployed and accessible
3. Wait 24-48 hours for Google to index your site
4. Monitor Google Search Console for any errors

---

**Build Status:** ✅ Successful
**Last Updated:** July 28, 2026
**SEO Configuration:** Complete

Good luck with your portfolio! 🚀
