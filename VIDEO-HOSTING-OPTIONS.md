# 🎬 Video Hosting Options for Sendingcell

## Option 1: Direct Netlify Upload (Recommended for Demo)
**Best for**: Files under 100MB, quick demo setup

### Steps:
```bash
# Copy your Synthesia videos to public folder
cp ~/Downloads/dr-mara-welcome.mp4 ./public/videos/
cp ~/Downloads/chapter1-td-hd-overview.mp4 ./public/videos/

# Deploy
git add public/videos/
git commit -m "Add Synthesia demo videos"
git push origin main
```

### Pros:
- ✅ Immediate integration
- ✅ No additional accounts needed
- ✅ CDN delivery included
- ✅ Perfect for demo

### Cons:
- ❌ 100MB file size limit
- ❌ Counts toward bandwidth

---

## Option 2: Netlify Large Media
**Best for**: Files 100MB-1GB

### Setup:
```bash
# Enable in Netlify dashboard first
git lfs install
git lfs track "*.mp4"
git add .gitattributes
git commit -m "Track videos with LFS"

# Add large videos
git add public/videos/*.mp4
git commit -m "Add large Synthesia videos"
git push origin main
```

### Pros:
- ✅ Handles large files
- ✅ Git version control
- ✅ CDN delivery

### Cons:
- ❌ Requires LFS setup
- ❌ Additional bandwidth costs

---

## Option 3: External Video CDN (Production Ready)

### Cloudinary (Recommended)
```javascript
// Update ContentBlock.tsx
const videoUrl = block.metadata?.videoUrl?.startsWith('http') 
  ? block.metadata.videoUrl 
  : `https://res.cloudinary.com/your-cloud/video/upload/v1/${block.metadata.videoUrl}`;
```

### Vimeo Private Videos
```javascript
// Embed Vimeo player
<iframe 
  src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
  allow="autoplay; fullscreen; picture-in-picture" 
/>
```

### AWS S3 + CloudFront
```javascript
const videoUrl = `https://d1234567890123.cloudfront.net/videos/${filename}`;
```

---

## Quick Demo Setup (Next 5 Minutes)

### If you have videos ready:
```bash
# Navigate to project
cd /Users/tvonlinz/sendingcell

# Copy your MP4 files (replace with actual paths)
cp ~/Desktop/dr-mara-welcome.mp4 ./public/videos/
cp ~/Desktop/chapter1-overview.mp4 ./public/videos/

# Check file sizes
ls -lh ./public/videos/*.mp4

# If under 100MB each, deploy:
git add public/videos/
git commit -m "🎬 Add Synthesia videos for Kathy demo"
git push origin main

# Videos will be live at:
# https://sendingcell.netlify.app/videos/dr-mara-welcome.mp4
# https://sendingcell.netlify.app/videos/chapter1-overview.mp4
```

### If you need to create videos first:
1. **Use Synthesia scripts** from chapters.ts (transcripts are ready)
2. **Generate MP4 files** with your Synthesia account
3. **Download and rename**:
   - Welcome video → `dr-mara-welcome.mp4`
   - Chapter video → `chapter1-td-hd-overview.mp4`
4. **Follow upload steps above**

---

## File Size Check Command
```bash
# Check your video file sizes
ls -lh ~/Downloads/*.mp4
# or
ls -lh ~/Desktop/*.mp4

# Files over 100MB need Large Media setup
# Files under 100MB can go directly to public/videos/
```

---

## Troubleshooting

### "File too large" error:
- Enable Netlify Large Media
- Or compress video with: `ffmpeg -i input.mp4 -crf 28 output.mp4`

### Videos not playing:
- Check MIME type in netlify.toml (already configured)
- Verify file extension is .mp4
- Test direct URL: `https://sendingcell.netlify.app/videos/filename.mp4`

### Need different format:
- Convert with: `ffmpeg -i input.mov -c:v libx264 -c:a aac output.mp4`

---

## Next Steps for Kathy Demo

1. ✅ Upload Synthesia videos (Method 1)
2. ✅ Test playback on live site
3. ✅ Verify transcript functionality
4. ✅ Practice demo flow
5. ✅ Schedule meeting with Kathy