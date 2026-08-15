import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      <div className="max-w-[900px] mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[42px] leading-[52px] font-bold text-primary mb-4">Privacy Policy</h1>
          <p className="text-[16px] text-muted mb-8">Last updated: January 2026</p>

          <div className="bg-surface rounded-2xl p-8 shadow-sm border border-subtle space-y-8">
            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">1. Introduction</h2>
              <p className="text-[15px] leading-[26px] text-secondary">
                Mettalent ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our talent supply chain platform that connects vocational graduates with data center careers in the Batam-Singapore corridor.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">2. Information We Collect</h2>
              <p className="text-[15px] leading-[26px] text-secondary mb-3">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[15px] leading-[26px] text-secondary ml-4">
                <li>Personal information (name, email address, phone number)</li>
                <li>Educational background and certifications</li>
                <li>Skills, competencies, and work experience</li>
                <li>Resume/CV and portfolio materials</li>
                <li>Job preferences and career goals</li>
                <li>Assessment and test results</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">3. How We Use Your Information</h2>
              <p className="text-[15px] leading-[26px] text-secondary mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[15px] leading-[26px] text-secondary ml-4">
                <li>Provide, maintain, and improve our talent matching services</li>
                <li>Analyze your skills and identify gaps compared to job requirements</li>
                <li>Generate personalized learning pathways and recommendations</li>
                <li>Match you with relevant data center job opportunities</li>
                <li>Communicate with you about our services, updates, and opportunities</li>
                <li>Conduct analytics and research to improve our platform</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">4. Information Sharing</h2>
              <p className="text-[15px] leading-[26px] text-secondary mb-3">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[15px] leading-[26px] text-secondary ml-4">
                <li><strong>Employers:</strong> With your consent, we share your profile with potential employers who have matching job openings</li>
                <li><strong>Educational Institutions:</strong> To coordinate certification programs and learning pathways</li>
                <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our platform</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">5. Data Security</h2>
              <p className="text-[15px] leading-[26px] text-secondary">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">6. Your Rights</h2>
              <p className="text-[15px] leading-[26px] text-secondary mb-3">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[15px] leading-[26px] text-secondary ml-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict certain processing of your information</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with a data protection authority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">7. Data Retention</h2>
              <p className="text-[15px] leading-[26px] text-secondary">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">8. Children's Privacy</h2>
              <p className="text-[15px] leading-[26px] text-secondary">
                Our services are not directed to individuals under 16. We do not knowingly collect personal information from children under 16. If we become aware that a child under 16 has provided us with personal information, we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">9. Changes to This Policy</h2>
              <p className="text-[15px] leading-[26px] text-secondary">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-primary mb-4">10. Contact Us</h2>
              <p className="text-[15px] leading-[26px] text-secondary">
                If you have questions or concerns about this Privacy Policy, please contact us at:<br />
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
