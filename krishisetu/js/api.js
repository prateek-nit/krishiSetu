/* ============================================
   KrishiSetu — Mock Data Store & API Layer
   All demo data for SIH prototype
   ============================================ */

const KrishiSetuAPI = (() => {
  // ---- Seed Data ----
  const MOCK_FARMERS = [
    { id: 'F001', name: 'Rajesh Kumar', phone: '9876543210', kisanId: 'KS-MP-2024-0012', village: 'Bairagarh', district: 'Bhopal', state: 'Madhya Pradesh', landAreaHa: 4.5, aadhaarMasked: 'XXXX-XXXX-4512', bankAccount: 'XXXX3456', ifsc: 'SBIN0001234', dbtSeeded: true, avatar: 'RK' },
    { id: 'F002', name: 'Sunita Devi', phone: '9876543211', kisanId: 'KS-MP-2024-0045', village: 'Berasia', district: 'Bhopal', state: 'Madhya Pradesh', landAreaHa: 2.8, aadhaarMasked: 'XXXX-XXXX-7891', bankAccount: 'XXXX7891', ifsc: 'CNRB0001234', dbtSeeded: true, avatar: 'SD' },
    { id: 'F003', name: 'Mohan Patel', phone: '9876543212', kisanId: 'KS-MP-2024-0078', village: 'Sehore', district: 'Sehore', state: 'Madhya Pradesh', landAreaHa: 6.2, aadhaarMasked: 'XXXX-XXXX-2345', bankAccount: 'XXXX2345', ifsc: 'BKID0001234', dbtSeeded: true, avatar: 'MP' },
    { id: 'F004', name: 'Lakshmi Bai', phone: '9876543213', kisanId: 'KS-MP-2024-0091', village: 'Raisen', district: 'Raisen', state: 'Madhya Pradesh', landAreaHa: 3.1, aadhaarMasked: 'XXXX-XXXX-6789', bankAccount: 'XXXX6789', ifsc: 'PUNB0001234', dbtSeeded: false, avatar: 'LB' },
    { id: 'F005', name: 'Hari Singh', phone: '9876543214', kisanId: 'KS-MP-2024-0103', village: 'Vidisha', district: 'Vidisha', state: 'Madhya Pradesh', landAreaHa: 8.0, aadhaarMasked: 'XXXX-XXXX-1234', bankAccount: 'XXXX1234', ifsc: 'UBIN0001234', dbtSeeded: true, avatar: 'HS' },
  ];

  const MOCK_CROPS = [
    { id: 'C001', name: 'Wheat', variety: 'Sharbati (MP Lokwan)', msp: 2275, season: 'Rabi', icon: '🌾' },
    { id: 'C002', name: 'Soybean', variety: 'JS-9560', msp: 4600, season: 'Kharif', icon: '🫘' },
    { id: 'C003', name: 'Rice', variety: 'Basmati 1121', msp: 2203, season: 'Kharif', icon: '🍚' },
    { id: 'C004', name: 'Gram (Chana)', variety: 'JG-16', msp: 5440, season: 'Rabi', icon: '🟤' },
    { id: 'C005', name: 'Mustard', variety: 'Pusa Bold', msp: 5650, season: 'Rabi', icon: '🌻' },
    { id: 'C006', name: 'Maize', variety: 'DHM-117', msp: 2090, season: 'Kharif', icon: '🌽' },
  ];

  const MOCK_FARMER_CROPS = [
    { id: 'FC001', farmerId: 'F001', cropId: 'C001', cropName: 'Wheat', variety: 'Sharbati (MP Lokwan)', sownAreaAcres: 5.0, sowingDate: '2025-11-15', expectedHarvestDate: '2026-03-20', estimatedYieldQuintals: 50, khasraNumber: 'KH-234/2', season: 'Rabi 2025-26' },
    { id: 'FC002', farmerId: 'F001', cropId: 'C004', cropName: 'Gram (Chana)', variety: 'JG-16', sownAreaAcres: 3.0, sowingDate: '2025-10-25', expectedHarvestDate: '2026-02-28', estimatedYieldQuintals: 18, khasraNumber: 'KH-234/3', season: 'Rabi 2025-26' },
    { id: 'FC003', farmerId: 'F002', cropId: 'C002', cropName: 'Soybean', variety: 'JS-9560', sownAreaAcres: 4.0, sowingDate: '2026-06-20', expectedHarvestDate: '2026-10-15', estimatedYieldQuintals: 32, khasraNumber: 'KH-567/1', season: 'Kharif 2026' },
    { id: 'FC004', farmerId: 'F003', cropId: 'C001', cropName: 'Wheat', variety: 'Sharbati (MP Lokwan)', sownAreaAcres: 8.0, sowingDate: '2025-11-10', expectedHarvestDate: '2026-03-15', estimatedYieldQuintals: 85, khasraNumber: 'KH-890/1', season: 'Rabi 2025-26' },
  ];

  const MOCK_CENTRES = [
    { id: 'PC001', name: 'Bhopal Krishi Upaj Mandi', district: 'Bhopal', location: 'Karond, Bhopal', distanceKm: 5, activeCounters: 4, dailyCapacityQuintals: 2000, procuredTodayQuintals: 1245, status: 'active', lat: 23.2599, lng: 77.4126 },
    { id: 'PC002', name: 'Vidisha Mandi Samiti', district: 'Vidisha', location: 'Station Road, Vidisha', distanceKm: 55, activeCounters: 3, dailyCapacityQuintals: 1500, procuredTodayQuintals: 890, status: 'active', lat: 23.5252, lng: 77.8081 },
    { id: 'PC003', name: 'Sehore Procurement Centre', district: 'Sehore', location: 'Mandi Road, Sehore', distanceKm: 38, activeCounters: 2, dailyCapacityQuintals: 1200, procuredTodayQuintals: 456, status: 'active', lat: 23.2047, lng: 77.0867 },
    { id: 'PC004', name: 'Raisen Collection Point', district: 'Raisen', location: 'NH-46, Raisen', distanceKm: 42, activeCounters: 2, dailyCapacityQuintals: 800, procuredTodayQuintals: 320, status: 'active', lat: 23.3315, lng: 77.7874 },
    { id: 'PC005', name: 'Berasia Sub-Mandi', district: 'Bhopal', location: 'Market Yard, Berasia', distanceKm: 28, activeCounters: 1, dailyCapacityQuintals: 500, procuredTodayQuintals: 180, status: 'maintenance', lat: 23.6352, lng: 77.4312 },
  ];

  const MOCK_SLOTS = [
    { id: 'SL001', centreId: 'PC001', date: '2026-09-18', timeSlot: '08:00 - 10:00', capacity: 25, booked: 18 },
    { id: 'SL002', centreId: 'PC001', date: '2026-09-18', timeSlot: '10:00 - 12:00', capacity: 25, booked: 22 },
    { id: 'SL003', centreId: 'PC001', date: '2026-09-18', timeSlot: '12:00 - 14:00', capacity: 20, booked: 9 },
    { id: 'SL004', centreId: 'PC001', date: '2026-09-18', timeSlot: '14:00 - 16:00', capacity: 20, booked: 5 },
    { id: 'SL005', centreId: 'PC001', date: '2026-09-19', timeSlot: '08:00 - 10:00', capacity: 25, booked: 4 },
    { id: 'SL006', centreId: 'PC001', date: '2026-09-19', timeSlot: '10:00 - 12:00', capacity: 25, booked: 2 },
    { id: 'SL007', centreId: 'PC002', date: '2026-09-18', timeSlot: '08:00 - 10:00', capacity: 20, booked: 14 },
    { id: 'SL008', centreId: 'PC002', date: '2026-09-18', timeSlot: '10:00 - 12:00', capacity: 20, booked: 8 },
    { id: 'SL009', centreId: 'PC003', date: '2026-09-18', timeSlot: '09:00 - 12:00', capacity: 15, booked: 11 },
    { id: 'SL010', centreId: 'PC003', date: '2026-09-18', timeSlot: '13:00 - 16:00', capacity: 15, booked: 3 },
  ];

  const MOCK_BOOKINGS = [
    { id: 'BK001', tokenNumber: 'T-389', farmerId: 'F001', farmerName: 'Rajesh Kumar', cropName: 'Wheat', variety: 'Sharbati', quantityQuintals: 50, centreId: 'PC001', centreName: 'Bhopal Krishi Upaj Mandi', bookingDate: '2026-09-18', timeSlot: '08:00 - 10:00', status: 'WAITING', arrivedAt: '2026-09-18T07:45:00', calledAt: null, completedAt: null, counterAssigned: null, queuePosition: 3 },
    { id: 'BK002', tokenNumber: 'T-390', farmerId: 'F002', farmerName: 'Sunita Devi', cropName: 'Soybean', variety: 'JS-9560', quantityQuintals: 32, centreId: 'PC001', centreName: 'Bhopal Krishi Upaj Mandi', bookingDate: '2026-09-18', timeSlot: '08:00 - 10:00', status: 'BOOKED', arrivedAt: null, calledAt: null, completedAt: null, counterAssigned: null, queuePosition: 5 },
    { id: 'BK003', tokenNumber: 'T-386', farmerId: 'F003', farmerName: 'Mohan Patel', cropName: 'Wheat', variety: 'Sharbati', quantityQuintals: 85, centreId: 'PC001', centreName: 'Bhopal Krishi Upaj Mandi', bookingDate: '2026-09-18', timeSlot: '08:00 - 10:00', status: 'CALLED', arrivedAt: '2026-09-18T07:30:00', calledAt: '2026-09-18T08:45:00', completedAt: null, counterAssigned: 'Counter 2', queuePosition: 0 },
    { id: 'BK004', tokenNumber: 'T-385', farmerId: 'F005', farmerName: 'Hari Singh', cropName: 'Wheat', variety: 'Sharbati', quantityQuintals: 60, centreId: 'PC001', centreName: 'Bhopal Krishi Upaj Mandi', bookingDate: '2026-09-18', timeSlot: '08:00 - 10:00', status: 'COMPLETED', arrivedAt: '2026-09-18T07:20:00', calledAt: '2026-09-18T08:10:00', completedAt: '2026-09-18T08:40:00', counterAssigned: 'Counter 1', queuePosition: -1 },
    { id: 'BK005', tokenNumber: 'T-384', farmerId: 'F004', farmerName: 'Lakshmi Bai', cropName: 'Gram (Chana)', variety: 'JG-16', quantityQuintals: 20, centreId: 'PC002', centreName: 'Vidisha Mandi Samiti', bookingDate: '2026-09-18', timeSlot: '08:00 - 10:00', status: 'PAYMENT_COMPLETED', arrivedAt: '2026-09-18T07:15:00', calledAt: '2026-09-18T08:00:00', completedAt: '2026-09-18T08:25:00', counterAssigned: 'Counter 1', queuePosition: -1 },
  ];

  const MOCK_PROCUREMENTS = [
    { id: 'PR001', bookingId: 'BK004', tokenNumber: 'T-385', farmerId: 'F005', farmerName: 'Hari Singh', cropName: 'Wheat', grossWeightQtl: 62.5, tareWeightQtl: 2.5, netWeightQtl: 60.0, moisturePercent: 11.2, foreignMatterPercent: 0.8, qualityGrade: 'A', baseRatePerQtl: 2275, bonusPerQtl: 50, totalAmount: 139500, weighbridgeOperator: 'Staff001', date: '2026-09-18', status: 'COMPLETED' },
    { id: 'PR002', bookingId: 'BK005', tokenNumber: 'T-384', farmerId: 'F004', farmerName: 'Lakshmi Bai', cropName: 'Gram (Chana)', grossWeightQtl: 21.2, tareWeightQtl: 1.2, netWeightQtl: 20.0, moisturePercent: 9.8, foreignMatterPercent: 0.5, qualityGrade: 'A+', baseRatePerQtl: 5440, bonusPerQtl: 100, totalAmount: 110800, weighbridgeOperator: 'Staff002', date: '2026-09-18', status: 'COMPLETED' },
  ];

  const MOCK_PAYMENTS = [
    { id: 'PAY001', bookingId: 'BK005', tokenNumber: 'T-384', farmerId: 'F004', farmerName: 'Lakshmi Bai', cropName: 'Gram (Chana)', quantityQtl: 20.0, amount: 110800, dbtReference: 'DBT-MP-2026-098765', bankName: 'Punjab National Bank', status: 'COMPLETED', date: '2026-09-18', completedAt: '2026-09-18T14:30:00' },
    { id: 'PAY002', bookingId: 'BK004', tokenNumber: 'T-385', farmerId: 'F005', farmerName: 'Hari Singh', cropName: 'Wheat', quantityQtl: 60.0, amount: 139500, dbtReference: 'DBT-MP-2026-098766', bankName: 'Union Bank', status: 'PROCESSING', date: '2026-09-18', completedAt: null },
    { id: 'PAY003', bookingId: 'BK010', tokenNumber: 'T-371', farmerId: 'F001', farmerName: 'Rajesh Kumar', cropName: 'Wheat', quantityQtl: 48.0, amount: 109200, dbtReference: 'DBT-MP-2026-098100', bankName: 'State Bank of India', status: 'COMPLETED', date: '2026-09-15', completedAt: '2026-09-16T10:15:00' },
    { id: 'PAY004', bookingId: 'BK011', tokenNumber: 'T-355', farmerId: 'F001', farmerName: 'Rajesh Kumar', cropName: 'Gram (Chana)', quantityQtl: 18.0, amount: 97920, dbtReference: 'DBT-MP-2026-097800', bankName: 'State Bank of India', status: 'COMPLETED', date: '2026-09-12', completedAt: '2026-09-13T11:00:00' },
  ];

  const MOCK_MARKET_PRICES = {
    'Wheat': {
      currentPrice: 2450,
      msp: 2275,
      trend: 'up',
      trendPercent: 3.2,
      history: [
        { date: '2026-09-11', price: 2320 }, { date: '2026-09-12', price: 2350 },
        { date: '2026-09-13', price: 2380 }, { date: '2026-09-14', price: 2410 },
        { date: '2026-09-15', price: 2390 }, { date: '2026-09-16', price: 2430 },
        { date: '2026-09-17', price: 2450 },
      ],
      markets: [
        { name: 'Bhopal Mandi', price: 2450, distanceKm: 5, freightPerQtl: 25, trend: 'up' },
        { name: 'Vidisha Mandi', price: 2520, distanceKm: 55, freightPerQtl: 180, trend: 'up' },
        { name: 'Sehore Mandi', price: 2400, distanceKm: 38, freightPerQtl: 120, trend: 'stable' },
        { name: 'Raisen Mandi', price: 2480, distanceKm: 42, freightPerQtl: 140, trend: 'up' },
        { name: 'Hoshangabad Mandi', price: 2510, distanceKm: 68, freightPerQtl: 220, trend: 'down' },
      ]
    },
    'Soybean': {
      currentPrice: 4850,
      msp: 4600,
      trend: 'up',
      trendPercent: 5.4,
      history: [
        { date: '2026-09-11', price: 4580 }, { date: '2026-09-12', price: 4620 },
        { date: '2026-09-13', price: 4700 }, { date: '2026-09-14', price: 4750 },
        { date: '2026-09-15', price: 4780 }, { date: '2026-09-16', price: 4820 },
        { date: '2026-09-17', price: 4850 },
      ],
      markets: [
        { name: 'Bhopal Mandi', price: 4850, distanceKm: 5, freightPerQtl: 30, trend: 'up' },
        { name: 'Indore Mandi', price: 4950, distanceKm: 190, freightPerQtl: 450, trend: 'up' },
        { name: 'Dewas Mandi', price: 4900, distanceKm: 150, freightPerQtl: 380, trend: 'stable' },
        { name: 'Sehore Mandi', price: 4800, distanceKm: 38, freightPerQtl: 120, trend: 'down' },
      ]
    },
    'Gram (Chana)': {
      currentPrice: 5600,
      msp: 5440,
      trend: 'stable',
      trendPercent: 0.8,
      history: [
        { date: '2026-09-11', price: 5520 }, { date: '2026-09-12', price: 5550 },
        { date: '2026-09-13', price: 5580 }, { date: '2026-09-14', price: 5560 },
        { date: '2026-09-15', price: 5590 }, { date: '2026-09-16', price: 5610 },
        { date: '2026-09-17', price: 5600 },
      ],
      markets: [
        { name: 'Bhopal Mandi', price: 5600, distanceKm: 5, freightPerQtl: 25, trend: 'stable' },
        { name: 'Vidisha Mandi', price: 5680, distanceKm: 55, freightPerQtl: 180, trend: 'up' },
        { name: 'Raisen Mandi', price: 5550, distanceKm: 42, freightPerQtl: 140, trend: 'down' },
      ]
    },
    'Rice': {
      currentPrice: 2350,
      msp: 2203,
      trend: 'down',
      trendPercent: -1.5,
      history: [
        { date: '2026-09-11', price: 2400 }, { date: '2026-09-12', price: 2390 },
        { date: '2026-09-13', price: 2380 }, { date: '2026-09-14', price: 2370 },
        { date: '2026-09-15', price: 2360 }, { date: '2026-09-16', price: 2355 },
        { date: '2026-09-17', price: 2350 },
      ],
      markets: [
        { name: 'Bhopal Mandi', price: 2350, distanceKm: 5, freightPerQtl: 25, trend: 'down' },
        { name: 'Sehore Mandi', price: 2380, distanceKm: 38, freightPerQtl: 120, trend: 'stable' },
      ]
    },
  };

  const MOCK_NOTIFICATIONS = [
    { id: 'N001', farmerId: 'F001', type: 'booking', title: 'Booking Confirmed', message: 'Your slot for Wheat at Bhopal Mandi on Sep 18, 08:00-10:00 is confirmed. Token: T-389', time: '2026-09-17T18:30:00', read: false },
    { id: 'N002', farmerId: 'F001', type: 'queue', title: 'Queue Update', message: 'You are now 3rd in the queue. Estimated wait: ~25 minutes.', time: '2026-09-18T08:15:00', read: false },
    { id: 'N003', farmerId: 'F001', type: 'payment', title: 'Payment Received', message: '₹1,09,200 has been credited to your SBI account for Wheat procurement (T-371).', time: '2026-09-16T10:15:00', read: true },
    { id: 'N004', farmerId: 'F001', type: 'market', title: 'Market Advisory', message: 'Wheat prices are trending upward at Bhopal Mandi. Current: ₹2,450/Qtl. Opportunity Score: 82/100.', time: '2026-09-17T09:00:00', read: true },
    { id: 'N005', farmerId: 'F001', type: 'payment', title: 'Payment Received', message: '₹97,920 has been credited to your SBI account for Gram procurement (T-355).', time: '2026-09-13T11:00:00', read: true },
  ];

  // ---- Queue simulation state ----
  let queueState = {
    centreId: 'PC001',
    nowServing: 'T-387',
    nowServingCounter: 'Counter 1',
    totalInQueue: 12,
    completedToday: 24,
  };

  // ---- AI Advisory ----
  function generateAIAdvisory(cropName) {
    const marketData = MOCK_MARKET_PRICES[cropName];
    if (!marketData) return null;

    const trendScore = marketData.trend === 'up' ? 85 : marketData.trend === 'stable' ? 55 : 30;
    const priceVsMsp = ((marketData.currentPrice - marketData.msp) / marketData.msp) * 100;
    const priceScore = priceVsMsp > 5 ? 80 : priceVsMsp > 0 ? 60 : 35;
    const seasonScore = 65;
    const demandScore = trendScore > 60 ? 75 : 50;
    const transportScore = 70;
    const historyScore = 60;

    const opportunityScore = Math.round(
      (0.30 * trendScore) + (0.25 * priceScore) + (0.15 * seasonScore) +
      (0.15 * demandScore) + (0.10 * transportScore) + (0.05 * historyScore)
    );

    let recommendation, confidence, window;
    if (opportunityScore >= 75) {
      recommendation = 'SELL NOW';
      confidence = 'High';
      window = 'Next 2-3 days';
    } else if (opportunityScore >= 50) {
      recommendation = 'CONSIDER WAITING';
      confidence = 'Medium';
      window = '7-14 days';
    } else {
      recommendation = 'CHECK ANOTHER MARKET';
      confidence = 'Low';
      window = 'Explore nearby mandis';
    }

    const reasons = [];
    if (marketData.trend === 'up') reasons.push('Price trend is upward over the last 7 days');
    if (priceVsMsp > 0) reasons.push(`Current price is ${priceVsMsp.toFixed(1)}% above MSP (₹${marketData.msp}/Qtl)`);
    if (marketData.trend === 'down') reasons.push('Price trend is declining — consider selling before further drops');
    reasons.push('Local market (Bhopal) offers best net value after transport costs');
    if (opportunityScore >= 70) reasons.push('Market arrivals are moderate, reducing glut risk');

    return {
      cropName,
      opportunityScore,
      recommendation,
      confidence,
      window,
      reasons,
      estimatedPriceRange: `₹${marketData.currentPrice - 80} - ₹${marketData.currentPrice + 50}`,
      lastUpdated: new Date().toISOString(),
      disclaimer: 'AI estimates are based on historical data and market conditions. Actual prices may vary. This is not financial advice.'
    };
  }

  // ---- Analytics ----
  const MOCK_ANALYTICS = {
    totalFarmers: 12847,
    totalBookings: 3456,
    totalProcuredQtl: 89234,
    totalProcuredValue: 203456000,
    pendingPayments: 45,
    completedPayments: 3200,
    avgWaitMinutes: 32,
    noShowPercent: 4.2,
    avgServiceMinutes: 18,
    dailyProcurement: [
      { date: '2026-09-11', quintals: 4200, value: 9660000 },
      { date: '2026-09-12', quintals: 3800, value: 8740000 },
      { date: '2026-09-13', quintals: 5100, value: 11730000 },
      { date: '2026-09-14', quintals: 4600, value: 10580000 },
      { date: '2026-09-15', quintals: 4900, value: 11270000 },
      { date: '2026-09-16', quintals: 3200, value: 7360000 },
      { date: '2026-09-17', quintals: 5400, value: 12420000 },
    ],
    cropDistribution: [
      { crop: 'Wheat', percentage: 42, quintals: 37478 },
      { crop: 'Soybean', percentage: 28, quintals: 24986 },
      { crop: 'Gram', percentage: 15, quintals: 13385 },
      { crop: 'Rice', percentage: 10, quintals: 8923 },
      { crop: 'Others', percentage: 5, quintals: 4462 },
    ],
    centrePerformance: [
      { centre: 'Bhopal Mandi', procuredQtl: 32450, capacity: 2000, avgWait: 28 },
      { centre: 'Vidisha Mandi', procuredQtl: 21300, capacity: 1500, avgWait: 35 },
      { centre: 'Sehore Centre', procuredQtl: 18200, capacity: 1200, avgWait: 22 },
      { centre: 'Raisen Point', procuredQtl: 11800, capacity: 800, avgWait: 40 },
      { centre: 'Berasia Mandi', procuredQtl: 5484, capacity: 500, avgWait: 15 },
    ],
    paymentStatus: { completed: 3200, processing: 180, pending: 45, failed: 12 },
  };

  // ---- Public API ----
  return {
    // Farmers
    getFarmers: () => [...MOCK_FARMERS],
    getFarmer: (id) => MOCK_FARMERS.find(f => f.id === id),
    
    // Crops
    getCrops: () => [...MOCK_CROPS],
    getFarmerCrops: (farmerId) => MOCK_FARMER_CROPS.filter(fc => fc.farmerId === farmerId),
    addFarmerCrop: (crop) => {
      crop.id = 'FC' + String(MOCK_FARMER_CROPS.length + 1).padStart(3, '0');
      MOCK_FARMER_CROPS.push(crop);
      return crop;
    },

    // Centres
    getCentres: () => [...MOCK_CENTRES],
    getCentre: (id) => MOCK_CENTRES.find(c => c.id === id),

    // Slots
    getSlots: (centreId, date) => MOCK_SLOTS.filter(s => s.centreId === centreId && (!date || s.date === date)),

    // Bookings
    getBookings: (filters = {}) => {
      let results = [...MOCK_BOOKINGS];
      if (filters.farmerId) results = results.filter(b => b.farmerId === filters.farmerId);
      if (filters.centreId) results = results.filter(b => b.centreId === filters.centreId);
      if (filters.status) results = results.filter(b => b.status === filters.status);
      if (filters.date) results = results.filter(b => b.bookingDate === filters.date);
      return results;
    },
    getBooking: (id) => MOCK_BOOKINGS.find(b => b.id === id),
    createBooking: (data) => {
      const tokenNum = 'T-' + (390 + MOCK_BOOKINGS.length);
      const booking = {
        id: 'BK' + String(MOCK_BOOKINGS.length + 1).padStart(3, '0'),
        tokenNumber: tokenNum,
        ...data,
        status: 'BOOKED',
        arrivedAt: null,
        calledAt: null,
        completedAt: null,
        counterAssigned: null,
        queuePosition: MOCK_BOOKINGS.filter(b => b.centreId === data.centreId && b.bookingDate === data.bookingDate).length + 1,
      };
      MOCK_BOOKINGS.push(booking);
      return booking;
    },
    updateBookingStatus: (id, status) => {
      const booking = MOCK_BOOKINGS.find(b => b.id === id);
      if (booking) {
        booking.status = status;
        if (status === 'ARRIVED') booking.arrivedAt = new Date().toISOString();
        if (status === 'CALLED') booking.calledAt = new Date().toISOString();
        if (status === 'COMPLETED') booking.completedAt = new Date().toISOString();
      }
      return booking;
    },

    // Queue
    getQueueState: () => ({ ...queueState }),
    getTodayQueue: (centreId) => {
      return MOCK_BOOKINGS.filter(b => 
        b.centreId === (centreId || 'PC001') && 
        ['ARRIVED', 'WAITING', 'CALLED', 'IN_PROCUREMENT'].includes(b.status)
      );
    },

    // Procurements
    getProcurements: (filters = {}) => {
      let results = [...MOCK_PROCUREMENTS];
      if (filters.farmerId) results = results.filter(p => p.farmerId === filters.farmerId);
      return results;
    },
    createProcurement: (data) => {
      data.id = 'PR' + String(MOCK_PROCUREMENTS.length + 1).padStart(3, '0');
      data.netWeightQtl = data.grossWeightQtl - data.tareWeightQtl;
      data.totalAmount = data.netWeightQtl * (data.baseRatePerQtl + (data.bonusPerQtl || 0));
      data.status = 'COMPLETED';
      data.date = new Date().toISOString().split('T')[0];
      MOCK_PROCUREMENTS.push(data);
      return data;
    },

    // Payments
    getPayments: (filters = {}) => {
      let results = [...MOCK_PAYMENTS];
      if (filters.farmerId) results = results.filter(p => p.farmerId === filters.farmerId);
      if (filters.status) results = results.filter(p => p.status === filters.status);
      return results;
    },

    // Market
    getMarketPrices: (cropName) => MOCK_MARKET_PRICES[cropName] || null,
    getAllMarketCrops: () => Object.keys(MOCK_MARKET_PRICES),
    getAIAdvisory: (cropName) => generateAIAdvisory(cropName),

    // Notifications
    getNotifications: (farmerId) => MOCK_NOTIFICATIONS.filter(n => n.farmerId === farmerId),
    getUnreadCount: (farmerId) => MOCK_NOTIFICATIONS.filter(n => n.farmerId === farmerId && !n.read).length,
    markRead: (notifId) => {
      const n = MOCK_NOTIFICATIONS.find(n => n.id === notifId);
      if (n) n.read = true;
    },

    // Analytics
    getAnalytics: () => ({ ...MOCK_ANALYTICS }),

    // Helpers
    formatCurrency: (amount) => '₹' + Number(amount).toLocaleString('en-IN'),
    formatDate: (dateStr) => {
      if (!dateStr) return '—';
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    },
    formatTime: (dateStr) => {
      if (!dateStr) return '—';
      const d = new Date(dateStr);
      return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
    },
    getStatusBadgeClass: (status) => {
      const map = {
        'BOOKED': 'badge-info', 'ARRIVED': 'badge-primary', 'WAITING': 'badge-warning',
        'CALLED': 'badge-accent', 'IN_PROCUREMENT': 'badge-accent', 'COMPLETED': 'badge-success',
        'PAYMENT_PROCESSING': 'badge-warning', 'PAYMENT_COMPLETED': 'badge-success',
        'NO_SHOW': 'badge-danger', 'PROCESSING': 'badge-warning', 'PENDING': 'badge-muted',
        'FAILED': 'badge-danger',
        'active': 'badge-success', 'maintenance': 'badge-warning',
      };
      return map[status] || 'badge-muted';
    },
  };
})();

// Make globally available
window.API = KrishiSetuAPI;
