/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './Footer.css'
import Popup from '../Popup/Popup';

const Footer = () => {
    const [isTermsPopupOpen, setIsTermsPopupOpen] = useState(false);
    const [isPrivacyPopupOpen, setIsPrivacyPopupOpen] = useState(false);

    const termsContent = (
        <>
        <h1>Terms of Service</h1>
        <b>
            Terms of Service for boxingheads.app (Matchup Labs LLC)
        </b>
        <b>
            Effective Date: 09.01.23
        </b>
        <h2>1. Acceptance of Terms</h2>
    <p>
        By accessing or using the services offered on boxingheads.app ("Website"), operated by Matchup Labs LLC ("Company", "we", "us", or "our"), you agree to comply with and be bound by these Terms of Service. Please review them carefully.
    </p>

    <h2>2. Changes to Terms</h2>
    <p>
        We reserve the right to modify these terms at any time. It is your responsibility to check this page regularly for updates. Continued use of the Website after changes indicates your acceptance of the updated terms.
    </p>

    <h2>3. Access to Website</h2>
    <p>
        We reserve the right to withdraw or amend this Website, and any service or material we provide on the Website, at our sole discretion.
    </p>

    <h2>4. Use Restrictions</h2>
    <p>
        You agree not to use the Website:
    </p>
    <ul>
        <li>For any unlawful purpose.</li>
        <li>To solicit others to perform or participate in unlawful acts.</li>
        <li>To violate any international, federal, or local regulations or laws.</li>
        <li>To infringe upon our intellectual property rights or the intellectual property rights of others.</li>
    </ul>

    <h2>5. Intellectual Property</h2>
    <p>
        All content, features, and functionality on this Website are owned by the Company and are protected by copyright, trademark, and other intellectual property laws.
    </p>

    <h2>6. Limitation of Liability</h2>
    <p>
        In no event shall the Company, nor its directors, employees, partners, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Website or services.
    </p>

    <h2>7. User Accounts</h2>
    <p>
        To access some parts of the Website, you may need to register for a user account. You must treat your user credentials as confidential and not disclose them to any third party.
    </p>

    <h2>8. Termination</h2>
    <p>
        We may terminate or suspend your account and access to the Website at our sole discretion, without notice, for behavior that we believe violates these Terms or is harmful to other users, us, or third parties.
    </p>

    <h2>9. Governing Law</h2>
    <p>
        These Terms are governed by the laws of [Specify State/Country], without regard to its conflict of laws rules.
    </p>

    <h2>10. Dispute Resolution</h2>
    <p>
        Any disputes arising out of these terms will be resolved through arbitration in [Specify Location]. The decision of the arbitrator will be final and binding.
    </p>

    <h2>11. Third-party Links</h2>
    <p>
        Our Website may contain links to third-party sites that are not owned or controlled by us. We assume no responsibility for their content, privacy policies, or practices.
    </p>

    <h2>12. Disclaimer</h2>
    <p>
        Your use of the Website is at your sole risk. The Website and services are provided on an "AS IS" and "AS AVAILABLE" basis without any warranties of any kind, either express or implied.
    </p>

    <h2>13. Feedback</h2>
    <p>
        Any feedback, comments, or suggestions you may provide is entirely voluntary, and we will be free to use such feedback without any obligation to you.
    </p>

    <h2>14. Contact Information</h2>
    <p>
        For questions about these Terms, please contact:<b/>
        Matchup Labs LLC<br/>
        New York, NY<b/>
        Email: jackjohnson@matchup.dev<br/>
        {/* Phone: [Specify Phone Number] */}
    </p>
        </>
    );

    const privacyContent = (
        <>
        <h1>Privacy Policy for boxingheads.app (Matchup Labs LLC)</h1>
        <p>
            <b>Effective Date: [09.01.23]</b>
        </p>
        <h2>1. Introduction</h2>
        <p>Thank you for choosing to be a part of our community at Matchup Labs LLC ("we", "us", or "our"). Your privacy is critically important to us. This Privacy Policy is meant to help you understand what information we collect, how we use it, and what rights you have regarding your personal data.</p>
        <h2>2. Information We Collect</h2>
    <p>We collect various types of information, including:</p>
    <ul>
        <li><strong>Personal Identifiable Information (PII)</strong>: Such as your name, email address, phone number, and other information you provide during the registration process.</li>
        <li><strong>Transactional Data</strong>: Related to any purchases or transactions on boxingheads.app.</li>
        <li><strong>Technical Data</strong>: Including IP address, browser type and version, time zone setting and location, operating system, and platform.</li>
        <li><strong>Usage Data</strong>: Concerning your activities on our website, such as page views, clicks, and time spent on pages.</li>
    </ul>

    <h2>3. How We Use Your Information</h2>
    <p>We use the information we collect to:</p>
    <ul>
        <li>Process transactions.</li>
        <li>Improve our website and present its contents to you.</li>
        <li>Notify you about updates, products, and services.</li>
        <li>Carry out our obligations and enforce our rights.</li>
        <li>For any other purpose with your consent.</li>
    </ul>

    <h2>4. Sharing Your Information</h2>
    <p>We do not sell or rent your personal data to third parties. However, we may disclose your personal information:</p>
    <ul>
        <li>To our subsidiaries or affiliates.</li>
        <li>To contractors, service providers, and other third parties we use to support our business.</li>
        <li>For any other purpose disclosed by us when you provide the information.</li>
    </ul>

    <h2>5. Cookies and Tracking Technologies</h2>
    <p>Our website may use "cookies" and other tracking technologies to collect information about your activity on our website and store your preferences.</p>

    <h2>6. Security</h2>
    <p>We employ security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet is 100% secure; therefore, while we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.</p>

    <h2>7. Your Rights</h2>
    <p>Depending on your region, you may have certain rights concerning your personal data, such as:</p>
    <ul>
        <li>Access to your data.</li>
        <li>Correction of your data.</li>
        <li>Erasure of your data.</li>
        <li>Object to processing of your data.</li>
        <li>Request restriction of processing your data.</li>
        <li>Data portability.</li>
        <li>Withdraw consent.</li>
    </ul>

    <h2>8. Children's Privacy</h2>
    <p>Our website is not intended for children under the age of 13. We do not knowingly collect personal data from children under 13.</p>

    <h2>9. Changes to the Privacy Policy</h2>
    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

    <h2>10. Contact Us</h2>
    <p>For any questions or concerns regarding this Privacy Policy, please contact us at:</p>
    <p>
        Matchup Labs LLC<br />
        New York, NY<br />
        Email: <Link href="mailto:jackjohnson@matchup.dev">jackjohnson@matchup.dev</Link><br />
        {/* Phone: [Phone Number] */}
    </p>
        </>
    );

    return (
        <div className="footer">
            <div className='container'>
                
                <div className="footer-nav">
                    <Link href="/"><img src="/img/logo.png" alt="Logo" height="73px"  width="53px" /></Link>
    
                    <div className='navigation'>
                    <nav>
                        <ul className="nav-list">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">About us</Link></li>
                        <li><Link href="/">The 34 Founders</Link></li>
                        <li><Link href="/">Roadmap</Link></li>
                        </ul>
                    </nav>
                    </div>
                </div>
                <div className='separator'></div>
                <div className="footer-copyright">
                    <div>Copyright 2023 MATCHUP LABS LLC. All rights reserved. <a href="#" onClick={(e) => { e.preventDefault(); setIsTermsPopupOpen(true); }}>Terms of Service</a>
                    {' '}|{' '}
                    <Link href="#" onClick={(e) => { e.preventDefault(); setIsPrivacyPopupOpen(true); }}>
                          Privacy Policy
                          </Link>
                {isTermsPopupOpen && (
                    <Popup
                    onClose={() => setIsTermsPopupOpen(false)}
                    content={termsContent}
                    />
                )}
                {isPrivacyPopupOpen && (
                    <Popup
                    onClose={() => setIsPrivacyPopupOpen(false)}
                    content={privacyContent}
                    />
                )}</div>
                    <div className="social-icons">
                        <ul className="icons-list">
                        <li><Link href="https://twitter.com/MatchupDAO" target="window"> <img src="/img/twitter.png" alt="Twitter" /></Link></li>
                        <li><Link href="https://www.instagram.com/boxing.heads/" target="window"> <img src="/img/insta.png" alt="instagram" /></Link></li>
                        <li><Link href="https://discord.gg/Y7EZSRPe" target="window"> <img src="/img/discord.png" alt="discord" /></Link></li>
                        <li><Link href="https://t.me/+lJtR18FxtG8xZjhk" target="window"> <img src="/img/telegram.png" alt="telegram" /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Footer;
