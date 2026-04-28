function galleryData() {
  const el = document.getElementById('collection');
  const images = JSON.parse(el.dataset.images);

  return {
    images,
    lightbox: { open: false, index: 0 },
    open(i) { this.lightbox.index = i; this.lightbox.open = true; },
    prev() { this.lightbox.index = (this.lightbox.index - 1 + this.images.length) % this.images.length; },
    next() { this.lightbox.index = (this.lightbox.index + 1) % this.images.length; },
  };
}
