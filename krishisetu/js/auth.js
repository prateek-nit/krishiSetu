/* ============================================
   KrishiSetu — Authentication & Session
   Role-based auth using localStorage
   ============================================ */

const KrishiSetuAuth = (() => {
  const SESSION_KEY = 'krishisetu_session';

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
      window.location.href = '/login.html';
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
        window.location.href = '/login.html';
        return false;
      }
      if (requiredRole && session.role !== requiredRole) {
        window.location.href = '/login.html';
        return false;
      }
      return true;
    },

    // Get redirect path by role
    getDashboardPath(role) {
      const paths = {
        farmer: '/farmer/dashboard.html',
        staff: '/staff/dashboard.html',
        admin: '/admin/dashboard.html',
      };
      return paths[role] || paths.farmer;
    },

    DEMO_USERS,
  };
})();

window.Auth = KrishiSetuAuth;
