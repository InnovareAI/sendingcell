# Video Assets

This folder contains the video content for the sendingcell educational platform.

## Current Video Files Needed:

1. **dr-mara-welcome.mp4** - Welcome video with Dr. Mara introduction
2. **chapter1-td-hd-overview.mp4** - Chapter 1 overview of TD and HD

## Video Upload Instructions for Netlify:

### Option 1: Direct Upload to Public Folder
1. Place your Synthesia-generated MP4 files directly in this `/public/videos/` folder
2. Videos will be accessible at `https://your-site.netlify.app/videos/filename.mp4`
3. Netlify supports files up to 100MB for free tier

### Option 2: External Video Hosting (Recommended for larger files)
If videos are larger than 100MB, consider hosting on:
- **Vimeo** (Private videos with player embedding)
- **YouTube** (Unlisted videos)
- **AWS S3** or **Cloudinary** for CDN delivery

### Option 3: Netlify Large Media (Git LFS)
For files larger than 100MB:
1. Enable Netlify Large Media in site settings
2. Use Git LFS to track video files
3. Videos are stored separately and delivered via CDN

## Video Specifications:
- **Format**: MP4 (H.264)
- **Resolution**: 1920x1080 (recommended)
- **Aspect Ratio**: 16:9
- **Max Duration**: 5 minutes per video
- **File Size**: Under 100MB for direct upload

## Integration Status:
- ✅ Video placeholder structure created
- ✅ ContentBlock component updated for video playback
- ✅ Transcript functionality added
- ⏳ Awaiting Synthesia video files
- ⏳ Testing video upload and playback

## Demo Instructions for Kathy:
1. Show video placeholder functionality
2. Demonstrate transcript access
3. Explain how Synthesia videos will replace placeholders
4. Showcase interactive elements around videos