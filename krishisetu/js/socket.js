/* ============================================
   KrishiSetu — Simulated Real-Time Events
   Uses setInterval + CustomEvent for prototype
   ============================================ */

const KrishiSetuSocket = (() => {
  let listeners = {};
  let intervals = [];
  let connected = false;

  // Simulated queue token progression
  const tokenSequence = ['T-385', 'T-386', 'T-387', 'T-388', 'T-389', 'T-390', 'T-391', 'T-392'];
  let currentTokenIndex = 2; // Start at T-387

  function emit(event, data) {
    if (listeners[event]) {
      listeners[event].forEach(fn => fn(data));
    }
    // Also dispatch as DOM CustomEvent for cross-component communication
    window.dispatchEvent(new CustomEvent('ks:' + event, { detail: data }));
  }

  function startQueueSimulation() {
    // Simulate queue advancement every 30 seconds
    const queueInterval = setInterval(() => {
      if (!connected) return;
      
      // Randomly decide to advance queue
      if (Math.random() > 0.4) {
        currentTokenIndex = Math.min(currentTokenIndex + 1, tokenSequence.length - 1);
        emit('queue:update', {
          nowServing: tokenSequence[currentTokenIndex],
          counter: 'Counter ' + (Math.floor(Math.random() * 4) + 1),
          timestamp: new Date().toISOString(),
        });
      }

      // Random queue position updates
      emit('queue:position', {
        totalInQueue: Math.max(1, 12 - currentTokenIndex + 2),
        avgWaitMinutes: Math.max(5, (12 - currentTokenIndex) * 8),
      });
    }, 30000);

    intervals.push(queueInterval);

    // Simulate occasional notifications
    const notifInterval = setInterval(() => {
      if (!connected) return;
      if (Math.random() > 0.7) {
        const types = ['queue', 'market', 'payment'];
        const type = types[Math.floor(Math.random() * types.length)];
        const messages = {
          queue: 'Queue is moving. Estimated wait time updated.',
          market: 'Wheat prices updated at Bhopal Mandi.',
          payment: 'Payment batch processing in progress.',
        };
        emit('notification', {
          type,
          message: messages[type],
          timestamp: new Date().toISOString(),
        });
      }
    }, 45000);

    intervals.push(notifInterval);
  }

  return {
    connect() {
      if (connected) return;
      connected = true;
      console.log('[KrishiSetu Socket] Connected (simulated)');
      startQueueSimulation();
      emit('connection', { status: 'connected' });
    },

    disconnect() {
      connected = false;
      intervals.forEach(id => clearInterval(id));
      intervals = [];
      console.log('[KrishiSetu Socket] Disconnected');
    },

    on(event, callback) {
      if (!listeners[event]) listeners[event] = [];
      listeners[event].push(callback);
    },

    off(event, callback) {
      if (listeners[event]) {
        listeners[event] = listeners[event].filter(fn => fn !== callback);
      }
    },

    isConnected() {
      return connected;
    },

    // Force emit for testing
    forceEmit: emit,

    getCurrentServingToken() {
      return tokenSequence[currentTokenIndex];
    },
  };
})();

window.Socket = KrishiSetuSocket;
