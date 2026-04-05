# APP STORE GUIDE

## Introduction
This guide provides detailed instructions for deploying the Truck Simulator Pro game to the Google Play Store and Apple App Store. It includes steps for monetization setup, in-app purchase (IAP) configuration, build process, and submission guidelines.

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Monetization Setup](#monetization-setup)
3. [IAP Configuration](#iap-configuration)
4. [Build Process](#build-process)
5. [Submission Guidelines](#submission-guidelines)

---

## Prerequisites
- Develop the game using Unity or your preferred game development environment.
- Accounts on Google Play Console and Apple Developer.
- SDKs for both Android and iOS installed.

---

## Monetization Setup
### Google Play Store
1. Log in to the [Google Play Console](https://play.google.com/console).
2. Create a new application.
3. Set up the app's details (title, description, etc.).
4. Navigate to the ‘Monetize’ section:
   - Select ‘In-app products’ to manage IAP options.
   - Set up ads through the ‘AdMob’ or ‘Google Ads’ sections.

### Apple App Store
1. Log in to [App Store Connect](https://appstoreconnect.apple.com).
2. Create a new app.
3. Fill in the required information (app name, SKU, etc.).
4. For IAP, navigate to the ‘Features’ tab and select ‘In-App Purchases.’
5. Configure your IAP products and set up revenue models.

---

## IAP Configuration
### Google Play Store
1. Set up managed and/or consumable products.
2. Utilize Google Play Billing Library for integration.
3. Test purchases using license testing in the Play Console.

### Apple App Store
1. Create IAPs in App Store Connect.
2. Use StoreKit for integrating IAP in your app.
3. Test in-app purchases using a sandbox account.

---

## Build Process
### For Android
1. Open your project in Unity.
2. Select **File > Build Settings**.
3. Choose **Android** and set up required configurations.
4. Build the APK/AAB and sign it with your keys.

### For iOS
1. Open your project in Unity.
2. Select **File > Build Settings**.
3. Choose **iOS** and configure the settings.
4. Build and open the project in Xcode.
5. Ensure provisioning profiles and codes are correctly set up, then archive the app.

---

## Submission Guidelines
### Google Play Store
1. Ensure compliance with Google Play's Developer Policy.
2. Fill out the app content rating questionnaire.
3. Upload the APK/AAB, add promotional graphics, and set a store listing.
4. Click the ‘Review’ button to check for issues before submission.
5. Submit the app for review.

### Apple App Store
1. Ensure all guidelines are followed according to the App Store Review Guidelines.
2. Upload the build via Xcode.
3. Fill required metadata in App Store Connect.
4. Submit for review and monitor the status.

---

## Conclusion
Follow these steps carefully to deploy your Truck Simulator Pro game successfully on both platforms. Regularly check for updates in guidelines from both stores, as they can change over time.