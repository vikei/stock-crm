export function goToFakeLocation(pathname: string) {
  window.history.replaceState(
    {prevPathname: window.location.pathname},
    `fake:${pathname}`,
    pathname,
  );
}

export function goBackFromFakeLocation() {
  const prevPathname = window.history.state?.prevPathname;
  prevPathname &&
    window.history.replaceState(null, `return-from-fake-to:${prevPathname}`, prevPathname);
}
