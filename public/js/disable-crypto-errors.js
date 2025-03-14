// This script prevents errors related to ethereum/web3 providers
// It creates a harmless dummy object instead of throwing errors
(function() {
  try {
    // Only run this code if we're in a browser context
    if (typeof window !== 'undefined') {
      // Check if ethereum is already defined as a getter
      const descriptor = Object.getOwnPropertyDescriptor(window, 'ethereum');
      
      // If it's not already defined or not a getter, we can safely define our own
      if (!descriptor || !descriptor.get) {
        // Create a dummy ethereum object that won't cause errors
        window.ethereum = {
          isMetaMask: false,
          request: function() { 
            return Promise.resolve(null);
          },
          on: function() {},
          removeListener: function() {},
          isConnected: function() { return false; }
        };
        
        console.log('Crypto wallet support disabled on this site');
      }
    }
  } catch (e) {
    console.log('Error initializing crypto compatibility layer:', e);
  }
})(); 