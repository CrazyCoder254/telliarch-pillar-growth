export const isAdminSubdomain = (): boolean => {
  const hostname = window.location.hostname;
  return hostname.startsWith('admin.') || hostname === 'admin.telliarch.co.ke';
};

export const getAdminRedirectPath = (isAuthenticated: boolean, isAdmin: boolean): string => {
  if (!isAuthenticated) return '/auth';
  if (isAdmin) return '/admin';
  return '/auth'; // Non-admin users stay on auth page with error
};
