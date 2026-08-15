import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Terms() {
  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      <div className="max-w-[900px] mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[42px] leading-[52px] font-bold text-primary mb-4">Terms of Service</h1>
          <p className="text-[16px] text-muted mb-8">Last updated: January 2026</p>

          <div className="bg-surface rounded-2xl p-8 shadow-sm border border-subtle space-y-8">
            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">1. Acceptance of Terms</h2>
              <p className="text-[15px] leading-[26px] text-secondary">
                By accessing and using Mettalent's platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">2. Description of Service</h2>
              <p className="text-[15px] leading-[26px] text-secondary">
                Mettalent provides a talent supply chain platform connecting vocational graduates with data center career opportunities in the Batam-Singapore corridor. Our services include skills gap analysis, personalized learning pathways, and job matching based on competency assessments.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">3. User Responsibilities</h2>
              <p className="text-[15px] leading-[26px] text-secondary mb-3">
                As a user of our platform, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[15px] leading-[26px] text-secondary ml-4">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain the security of your account credentials</li>
                <li>Update your profile information to keep it accurate and current</li>
                <li>Not impersonate another person or misrepresent your qualifications</li>
                <li>Not use the platform for any illegal or unauthorized purpose</li>
                <li>Comply with all applicable local, state, and national laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">4. Account Registration</h2>
              <p className="text-[15px] leading-[26px] text-secondary">
                To use certain features of the platform, you must register for an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">5. Intellectual Property Rights</h2>
              <p className="text-[15px] leading-[26px] text-secondary">
                The platform and its original content, features, and functionality are owned by Mettalent and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">6. User Content</h2>
              <p className="text-[15px] leading-[26px] text-secondary mb-3">
                By submitting content to our platform (including resumes, portfolios, and assessments), you grant us:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[15px] leading-[26px] text-secondary ml-4">
                <li>A non-exclusive, worldwide, royalty-free license to use, reproduce, and display your content</li>
                <li>Permission to share your profile with potential employers based on job matching</li>
                <li>The right to use aggregated, anonymized data for analytics and platform improvement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">7. Skills Assessment and Matching</h2>
              <p className="text-[15px] leading-[26px] text-secondary">
                Our skills gap analysis and job matching algorithms are provided for informational purposes. While we strive for accuracy, we do not guarantee specific employment outcomes or the accuracy of all assessments. Final hiring decisions are made by employers, not by Mettalent.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">8. Limitation of Liability</h2>
              <p className="text-[15px] leading-[26px] text-secondary">
                Mettalent shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the platform. Our total liability for any claim arising from these Terms or your use of the platform shall not exceed the amount you paid to us in the past 12 months.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">9. Third-Party Links and Services</h2>
              <p className="text-[15px] leading-[26px] text-secondary">
                Our platform may contain links to third-party websites, educational institutions, and certification providers. We are not responsible for the content, privacy policies, or practices of third-party sites. Your use of third-party services is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">10. Termination</h2>
              <p className="text-[15px] leading-[26px] text-secondary">
                We reserve the right to terminate or suspend your account and access to the platform at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">11. Modifications to Terms</h2>
              <p className="text-[15px] leading-[26px] text-secondary">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on this page with a new "Last updated" date. Your continued use of the platform after such modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">12. Governing Law</h2>
              <p className="text-[15px] leading-[26px] text-secondary">
                These Terms shall be governed by and construed in accordance with the laws of Indonesia, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Batam, Indonesia.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">13. Contact Information</h2>
              <p className="text-[15px] leading-[26px] text-secondary">
                If you have questions about these Terms of Service, please contact us at:<br />
                <strong className="text-primary">Email:</strong> legal@mettalent.id<br />
                <strong className="text-primary">Address:</strong> Batam, Kepulauan Riau, Indonesia
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
