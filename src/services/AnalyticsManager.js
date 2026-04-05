class AnalyticsManager {
    constructor() {
        // Initialize Firebase Analytics
        this.analytics = firebase.analytics();
    }

    trackEvent(eventName, params) {
        this.analytics.logEvent(eventName, params);
    }

    trackPurchase(item, value) {
        this.trackEvent('purchase', { item, value });
    }

    trackAdImpression(adUnitId) {
        this.trackEvent('ad_impression', { adUnitId });
    }

    setUserProperty(propertyName, propertyValue) {
        this.analytics.setUserProperties({ [propertyName]: propertyValue });
    }
}

// Export the AnalyticsManager class
export default new AnalyticsManager();