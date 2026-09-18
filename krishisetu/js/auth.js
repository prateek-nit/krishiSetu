/* ============================================
   KrishiSetu — Authentication & Session
   Role-based auth using localStorage
   ============================================ */

const KrishiSetuAuth = (() => {
  const SESSION_KEY = 'krishisetu_session';

  // Dynamically compute the base path of the krishisetu folder
  // by using the script's own URL (js/auth.js is always at <base>/js/auth.js)
  const BASE_PATH = (() => {
    try {
      const scripts = document.querySelectorAll('script[src*="auth.js"]');
      for (const s of scripts) {
        const src = s.getAttribute('src');
        if (src && src.includes('auth.js')) {
          // src could be relative like "../js/auth.js" or "js/auth.js"
          // Resolve it to an absolute URL
          const absUrl = new URL(src, window.location.href).href;
          // Strip /js/auth.js to get the base
          const idx = absUrl.lastIndexOf('/js/auth.js');
          if (idx !== -1) {
            return absUrl.substring(0, idx);
          }
        }
      }
    } catch (e) { /* fallback below */ }
    // Fallback: use current page location and strip known subfolders
    const path = window.location.pathname;
    const knownDirs = ['/farmer/', '/staff/', '/admin/', '/js/'];
    for (const dir of knownDirs) {
      const i = path.indexOf(dir);
      if (i !== -1) {
        return window.location.origin + path.substring(0, i);
      }
    }
    // If we're at the root (e.g. login.html or index.html), use the directory
    return window.location.href.substring(0, window.location.href.lastIndexOf('/'));
  })();

  const DEMO_USERS = {
    farmer: { id: 'F001', name: 'Rajesh Kumar', role: 'farmer', phone: '9876543210', avatar: 'RK', kisanId: 'KS-MP-2024-0012' },
    staff: { id: 'S001', name: 'Amit Sharma', role: 'staff', phone: '9876500001', avatar: 'AS', centreId: 'PC001', centreName: 'Bhopal Krishi Upaj Mandi' },
    admin: { id: 'A001', name: 'Dr. Priya Verma', role: 'admin', phone: '9876500010', avatar: 'PV', designation: 'District Agriculture Officer' },
  };

  function getSession() {
    try {
      const data = localStorage.getItem(SESSION_KEY);
      return data ? JSON.parse(data) : null;
    } catch { return null; }
  }

  function setSession(user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  }

  function clearSession() {
    localStorage.removeItem(SESSION_KEY);
  }

  return {
    // Login with demo credentials
    demoLogin(role) {
      const user = DEMO_USERS[role];
      if (!user) return false;
      setSession(user);
      return true;
    },

    // Simulated OTP login
    login(phone, otp, role) {
      // For prototype, accept any 6-digit OTP
      if (otp && otp.length === 6) {
        const user = DEMO_USERS[role] || DEMO_USERS.farmer;
        user.phone = phone;
        setSession(user);
        return true;
      }
      return false;
    },

    logout() {
      clearSession();
      window.location.href = BASE_PATH + '/login.html';
    },

    // Get current user
    getUser() {
      return getSession();
    },

    isLoggedIn() {
      return !!getSession();
    },

    getRole() {
      const session = getSession();
      return session ? session.role : null;
    },

    // Guard: redirect if not logged in or wrong role
    requireAuth(requiredRole) {
      const session = getSession();
      if (!session) {
        window.location.href = BASE_PATH + '/login.html';
        return false;
      }
      if (requiredRole && session.role !== requiredRole) {
        window.location.href = BASE_PATH + '/login.html';
        return false;
      }
      return true;
    },

    // Get redirect path by role
    getDashboardPath(role) {
      const paths = {
        farmer: BASE_PATH + '/farmer/dashboard.html',
        staff:  BASE_PATH + '/staff/dashboard.html',
        admin:  BASE_PATH + '/admin/dashboard.html',
      };
      return paths[role] || paths.farmer;
    },

    // Expose base path for other scripts that may need it
    getBasePath() {
      return BASE_PATH;
    },

    DEMO_USERS,
  };
})();

window.Auth = KrishiSetuAuth;
