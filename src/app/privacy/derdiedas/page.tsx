'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function DerDieDasPrivacy() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <Navigation />
      
      <div className="flex-grow px-6 py-12 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 sora-text text-center">
              Privacy Policy for Artikel: Der, Die, Das
            </h1>
            <p className="text-lg text-gray-600 sora-light text-center italic">
              Last updated: 26.09.2025
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="space-y-8 text-gray-800">
            
            {/* Introduction */}
            <section>
              <p className="mb-4 sora-light leading-relaxed">
                Thank you for using <strong>Artikel: Der, Die, Das</strong>. Your privacy is very important to us. This policy explains what information we collect, how we use it, and your rights regarding your data.
              </p>
            </section>

            <hr className="border-gray-300 my-8" />

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 sora-text">1. Information We Collect</h2>
              <p className="mb-4 sora-light leading-relaxed">
                The app is designed to help you learn German articles in a simple and structured way. To provide this experience, <strong>we do not require you to create an account</strong> and we do not collect personal information such as your name, email address, or phone number.
              </p>
              <p className="mb-4 sora-light leading-relaxed">
                However, we may collect the following non-personal information:
              </p>
              <ul className="list-disc list-inside mb-4 sora-light space-y-1 ml-4">
                <li><strong>App usage data</strong>: such as number of sessions, time spent in the app, or features used (e.g. categories, favorites, search).</li>
                <li><strong>Device information</strong>: such as device type, operating system version, and language settings.</li>
                <li><strong>Crash and performance data</strong>: to help us improve stability and performance.</li>
              </ul>
            </section>

            <hr className="border-gray-300 my-8" />

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 sora-text">2. How We Use Information</h2>
              <p className="mb-4 sora-light leading-relaxed">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside mb-4 sora-light space-y-1 ml-4">
                <li>Improve the learning experience and app performance</li>
                <li>Identify and fix technical issues</li>
                <li>Understand how the app is used so we can make it better</li>
              </ul>
              <p className="mb-4 sora-light leading-relaxed">
                We do not sell or share your data with third parties for advertising purposes.
              </p>
            </section>

            <hr className="border-gray-300 my-8" />

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 sora-text">3. Third-Party Services</h2>
              <p className="mb-4 sora-light leading-relaxed">
                To support the app, we may use trusted third-party services such as:
              </p>
              <ul className="list-disc list-inside mb-4 sora-light space-y-1 ml-4">
                <li><strong>Analytics providers</strong> (e.g. Apple App Store analytics)</li>
                <li><strong>Crash reporting tools</strong> (to help fix bugs and improve stability)</li>
              </ul>
              <p className="mb-4 sora-light leading-relaxed">
                These providers may collect anonymized, non-personal data as described in their own privacy policies.
              </p>
            </section>

            <hr className="border-gray-300 my-8" />

            {/* Data Storage & Security */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 sora-text">4. Data Storage & Security</h2>
              <p className="mb-4 sora-light leading-relaxed">
                All collected data is either stored locally on your device.
              </p>
            </section>

            <hr className="border-gray-300 my-8" />

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 sora-text">5. Data Retention</h2>
              <ul className="list-disc list-inside mb-4 sora-light space-y-1 ml-4">
                <li>All app-related data (such as favorites or learning progress) is stored <strong>only on your device</strong>.</li>
                <li>You can delete this data anytime directly via your device.</li>
                <li>Nothing is stored or backed up online.</li>
              </ul>
            </section>

            <hr className="border-gray-300 my-8" />

            {/* International Users */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 sora-text">6. International Users</h2>
              <p className="mb-4 sora-light leading-relaxed">
                Because no personal data leaves your device, <strong>international data transfer laws (such as GDPR or CCPA) do not apply</strong>. Your data remains solely within your local jurisdiction.
              </p>
            </section>

            <hr className="border-gray-300 my-8" />

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 sora-text">7. Children&apos;s Privacy</h2>
              <p className="mb-4 sora-light leading-relaxed">
                This app is suitable for learners of all ages. We do not knowingly collect personal information from children under the age of 13. If you believe your child has provided personal information, please contact us and we will delete it.
              </p>
            </section>

            <hr className="border-gray-300 my-8" />

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 sora-text">8. Your Rights</h2>
              <p className="mb-4 sora-light leading-relaxed">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside mb-4 sora-light space-y-1 ml-4">
                <li>Access the data collected about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Opt out of analytics collection (you can do this by adjusting your device settings)</li>
              </ul>
            </section>

            <hr className="border-gray-300 my-8" />

            {/* Changes to This Policy */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 sora-text">9. Changes to This Policy</h2>
              <p className="mb-4 sora-light leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted within the app or on our official website. Please review this policy periodically for updates.
              </p>
            </section>

            <hr className="border-gray-300 my-8" />

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 sora-text">10. Contact Us</h2>
              <p className="mb-4 sora-light leading-relaxed">
                If you have questions or concerns about this Privacy Policy, contact us at:
              </p>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="sora-light mb-2"><strong>Email:</strong> saradrada@luloai.com, yesidlopez@luloai.com</p>
                <p className="sora-light"><strong>Developers:</strong> Sara Ortiz Drada, Yesid López</p>
              </div>
            </section>

          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
