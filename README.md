# Santosh Dasari's Portfolio

[![CI](https://github.com/santoshblds/santoshblds.com/actions/workflows/ci.yml/badge.svg)](https://github.com/santoshblds/santoshblds.com/actions/workflows/ci.yml)
[![Deploy](https://github.com/santoshblds/santoshblds.com/actions/workflows/deploy.yml/badge.svg)](https://github.com/santoshblds/santoshblds.com/actions/workflows/deploy.yml)
[![Security Audit](https://github.com/santoshblds/santoshblds.com/actions/workflows/security-audit.yml/badge.svg)](https://github.com/santoshblds/santoshblds.com/actions/workflows/security-audit.yml)

A modern, performance-optimized React portfolio website.

## Performance Optimizations

This website has been optimized for maximum performance and speed. Here's how to use the optimizations:

### Image Optimization

1. **Use OptimizedImage component** for all images:

   ```jsx
   import OptimizedImage from "./components/OptimizedImage";

   <OptimizedImage
     src="/path/to/image.jpg"
     alt="Description"
     width={800}
     height={600}
     priority={false} // Set to true for above-the-fold images
   />;
   ```

2. **Use OptimizedVideo component** for GIFs:

   ```jsx
   import OptimizedVideo from "./components/OptimizedVideo";

   <OptimizedVideo
     src="/path/to/animation.gif"
     alt="Description"
     width={800}
     height={600}
     priority={false}
   />;
   ```

3. **Generate optimized images** (WebP, AVIF, and responsive sizes):

   ```bash
   npm run optimize-images
   ```

4. **Convert GIFs to MP4** (requires FFmpeg):
   ```bash
   npm run convert-gifs
   ```

### Optimized Image Structure

After running the optimization scripts, your images will be organized as follows:

```
assets/example.jpg                 # Original image
assets/optimized/example.jpg       # Optimized original format
assets/optimized/example.webp      # WebP version
assets/optimized/example.avif      # AVIF version (if supported)
assets/optimized/example-640.jpg   # Responsive versions
assets/optimized/example-960.jpg
assets/optimized/example-1280.jpg
assets/optimized/example-1920.jpg
assets/optimized/example-640.webp  # Responsive WebP versions
assets/optimized/example-960.webp
assets/optimized/example-1280.webp
assets/optimized/example-1920.webp
```

The `OptimizedImage` component automatically handles the path mapping to use these optimized versions.

### Lazy Loading

The entire app uses code-splitting with React.lazy and dynamic imports:

1. **Lazy load components**:

   ```jsx
   const HeavyComponent = lazy(() => import("./components/HeavyComponent"));

   <Suspense fallback={<LoadingSpinner />}>
     <HeavyComponent />
   </Suspense>;
   ```

### Build and Deployment

1. **Standard Build** (with image optimization):

   ```bash
   npm run build
   ```

2. **Full Build** (with image AND video optimization):

   ```bash
   npm run build:full
   ```

3. **Analyze bundle size**:

   ```bash
   npm run analyze
   ```

4. **Test performance** (requires Lighthouse CLI):

   ```bash
   npm run preview
   npm run lighthouse
   ```

5. **Check security**:
   ```bash
   npm run check-security
   ```

### Security

This project uses a security-focused approach:

- No third-party image processing plugins with vulnerable dependencies in production code
- Direct use of well-maintained libraries like Sharp for image processing
- Regular security audits with `npm audit`
- Proper Content Security Policy in HTTP headers
- Modern security headers configured in Vercel deployment

### Service Worker

The site includes a service worker that:

- Caches assets for offline access
- Implements different caching strategies based on resource type
- Provides a better user experience with faster repeat visits

### Deployment Configuration

- Vercel.json configured for optimal delivery
- Aggressive caching for static assets
- Gzip/Brotli compression enabled
- Proper security headers configured

## Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:```bash
   npm run dev

   ```

   ```

## Lighthouse Scores

Target lighthouse scores after optimizations:

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## Force rebuild

Timestamp: [Current timestamp: ${new Date().toISOString()}]
