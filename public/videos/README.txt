Place any local video files (e.g., mother_review.mp4) inside this public/videos/ folder.
They can be loaded in Next.js using the standard HTML5 video tag:
<video controls className="w-full rounded-[16px]">
  <source src="/videos/your_video_name.mp4" type="video/mp4" />
</video>
