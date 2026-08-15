import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      <div className="max-w-[900px] mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[42px] leading-[52px] font-bold text-primary mb-4">Cookie Policy</h1>
          <p className="text-[16px] text-muted mb-8">Last updated: January 2026</p>

          <div className="bg-surface rounded-2xl p-8 shadow-sm border border-subtle space-y-8">
            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">1. What Are Cookies</h2>
              <p className="text-[15px] leading-[26px] text-secondary">
                Cookies are small text files that are placed on your device when you visit our platform. They help us provide you with a better experience by remembering your preferences, understanding how you use our platform, and improving our services.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">2. How We Use Cookies</h2>
              <p className="text-[15px] leading-[26px] text-secondary mb-3">
                Mettalent uses cookies for several purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[15px] leading-[26px] text-secondary ml-4">
                <li><strong>Essential Cookies:</strong> Required for the platform to function properly, including authentication and security</li>
                <li><strong>Performance Cookies:</strong> Help us understand how users interact with our platform through analytics</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings for a personalized experience</li>
                <li><strong>Analytics Cookies:</strong> Allow us to analyze usage patterns to improve our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">3. Types of Cookies We Use</h2>

              <div className="space-y-4">
                <div className="bg-subtle rounded-xl p-5">
                  <h3 className="text-[18px] font-semibold text-primary mb-2">Session Cookies</h3>
                  <p className="text-[14px] text-secondary">
                    Temporary cookies that expire when you close your browser. These are essential for login functionality and maintaining your session state.
                  </p>
                </div>

                <div className="bg-subtle rounded-xl p-5">
                  <h3 className="text-[18px] font-semibold text-primary mb-2">Persistent Cookies</h3>
                  <p className="text-[14px] text-secondary">
                    Remain on your device for a set period. These remember your login information, language preferences, and other settings to enhance your experience.
                  </p>
                </div>

                <div className="bg-subtle rounded-xl p-5">
                  <h3 className="text-[18px] font-semibold text-primary mb-2">Third-Party Cookies</h3>
                  <p className="text-[14px] text-secondary">
                    Set by external services we use, such as analytics providers (e.g., Google Analytics) to help us understand user behavior and improve our platform.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">4. Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-[14px] border border-subtle rounded-lg overflow-hidden">
                  <thead className="bg-subtle">
                    <tr>
                      <th className="text-left p-3 text-primary font-semibold">Cookie Name</th>
                      <th className="text-left p-3 text-primary font-semibold">Purpose</th>
                      <th className="text-left p-3 text-primary font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-secondary">
                    <tr className="border-t border-subtle">
                      <td className="p-3 font-mono text-[13px]">session_id</td>
                      <td className="p-3">Authentication and session management</td>
                      <td className="p-3">Session</td>
                    </tr>
                    <tr className="border-t border-subtle">
                      <td className="p-3 font-mono text-[13px]">user_preferences</td>
                      <td className="p-3">Store user settings and preferences</td>
                      <td className="p-3">1 year</td>
                    </tr>
                    <tr className="border-t border-subtle">
                      <td className="p-3 font-mono text-[13px]">analytics_id</td>
                      <td className="p-3">Track usage for analytics purposes</td>
                      <td className="p-3">2 years</td>
                    </tr>
                    <tr className="border-t border-subtle">
                      <td className="p-3 font-mono text-[13px]">_ga</td>
                      <td className="p-3">Google Analytics tracking</td>
                      <td className="p-3">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">5. Managing Cookies</h2>
              <p className="text-[15px] leading-[26px] text-secondary mb-3">
                You have control over cookies and can manage them in several ways:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[15px] leading-[26px] text-secondary ml-4">
                <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through their settings</li>
                <li><strong>Opt-Out Tools:</strong> Use browser extensions or opt-out tools provided by analytics services</li>
                <li><strong>Platform Settings:</strong> Manage your cookie preferences in your account settings</li>
              </ul>
              <p className="text-[15px] leading-[26px] text-secondary mt-3">
                Please note that blocking certain cookies may impact your ability to use some features of our platform.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">6. How to Disable Cookies</h2>
              <p className="text-[15px] leading-[26px] text-secondary mb-3">
                To disable cookies in common browsers:
              </p>
              <div className="space-y-2 text-[14px] text-secondary ml-4">
                <p><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</p>
                <p><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</p>
                <p><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</p>
                <p><strong>Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</p>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">7. Third-Party Services</h2>
              <p className="text-[15px] leading-[26px] text-secondary">
                We use the following third-party services that may set cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[15px] leading-[26px] text-secondary ml-4 mt-3">
                <li><strong>Google Analytics:</strong> For understanding user behavior and platform usage</li>
                <li><strong>Authentication Services:</strong> For secure login and session management</li>
                <li><strong>Cloud Services:</strong> For hosting and delivering platform content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">8. Updates to This Policy</h2>
              <p className="text-[15px] leading-[26px] text-secondary">
                We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on this page with a new "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">9. Contact Us</h2>
              <p className="text-[15px] leading-[26px] text-secondary">
                If you have questions about our use of cookies, please contact us at:<br />
                <strong className="text-primary">Email:</strong> privacy@mettalent.id<br />
                <strong className="text-primary">Address:</strong> Batam, Kepulauan Riau, Indonesia
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
