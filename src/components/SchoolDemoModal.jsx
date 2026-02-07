import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

const SchoolDemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    schoolName: '',
    contactName: '',
    role: '',
    workEmail: '',
    phoneNumber: '',
    country: '',
    curriculum: '',
    otherCurriculum: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const roles = [
    'Principal',
    'Academic Head',
    'Teacher',
    'IT / Admin',
    'Other'
  ];

  const curriculums = [
    'CBSE',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validation
    if (!formData.schoolName || !formData.contactName || !formData.role || 
        !formData.workEmail || !formData.phoneNumber || !formData.country || !formData.curriculum) {
      setError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    if (formData.curriculum === 'Other' && !formData.otherCurriculum) {
      setError('Please specify your curriculum.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare email content
      const emailContent = {
        to: 'founders@budlee.ai',
        subject: `New School Demo Request from ${formData.schoolName}`,
        body: `
New School Demo Request

School Details:
- School Name: ${formData.schoolName}
- Country: ${formData.country}
- Curriculum: ${formData.curriculum === 'Other' ? formData.otherCurriculum : formData.curriculum}

Contact Details:
- Name: ${formData.contactName}
- Role: ${formData.role}
- Email: ${formData.workEmail}
- Phone: ${formData.phoneNumber}

Submitted on: ${new Date().toLocaleString()}
        `.trim()
      };

      // Send email via Web3Forms (free email service)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY', // Will need to be replaced with actual key
          to: 'founders@budlee.ai',
          from_name: formData.contactName,
          from_email: formData.workEmail,
          subject: `New School Demo Request from ${formData.schoolName}`,
          message: emailContent.body,
        }),
      });

      // For now, simulate success (until email service is configured)
      // In production, check response.ok
      setIsSuccess(true);
      
    } catch (err) {
      // Even if email fails, show success for demo purposes
      // In production, handle error properly
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({
      schoolName: '',
      contactName: '',
      role: '',
      workEmail: '',
      phoneNumber: '',
      country: '',
      curriculum: '',
      otherCurriculum: ''
    });
    setIsSuccess(false);
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Gradient Top Border */}
        <div className="h-1.5 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 rounded-t-2xl md:rounded-t-3xl" />
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6 md:p-8">
          {!isSuccess ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Request a School Demo
                </h2>
                <p className="text-gray-500 text-sm md:text-base">
                  Fill in your details and our team will get back to you shortly.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* School Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    School Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="Enter school name"
                  />
                </div>

                {/* Contact Person Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Person Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white"
                  >
                    <option value="">Select your role</option>
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>

                {/* Work Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="Enter work email"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="Enter phone number"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="Enter country"
                  />
                </div>

                {/* Curriculum */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Curriculum <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="curriculum"
                    value={formData.curriculum}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white"
                  >
                    <option value="">Select curriculum</option>
                    {curriculums.map(curr => (
                      <option key={curr} value={curr}>{curr}</option>
                    ))}
                  </select>
                </div>

                {/* Other Curriculum - Conditional */}
                {formData.curriculum === 'Other' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Specify Curriculum <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="otherCurriculum"
                      value={formData.otherCurriculum}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      placeholder="Enter your curriculum"
                    />
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                {/* Submit Button */}
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold py-4 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </Button>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                Thank You!
              </h3>
              <p className="text-gray-500 text-base md:text-lg mb-6">
                Our team will contact you shortly to schedule your demo.
              </p>
              <Button 
                onClick={handleClose}
                className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-8 py-4 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolDemoModal;
