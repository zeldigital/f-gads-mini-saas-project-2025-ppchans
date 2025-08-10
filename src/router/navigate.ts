export function navigate(path: string): void {
  if (typeof window === 'undefined') return;
  const [pathname, hash] = path.split('#');
  // Avoid pushing duplicate path
  if (window.location.pathname !== pathname || (hash ?? '') !== (window.location.hash.replace('#', '') ?? '')) {
    window.history.pushState({}, '', path);
  }
  // Notify Router
  window.dispatchEvent(new Event('popstate'));

  if (hash) {
    const scrollToHash = () => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    // Delay to allow view to render
    setTimeout(scrollToHash, 0);
  } else {
    // No hash: scroll to top of page after route render
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  }
}


