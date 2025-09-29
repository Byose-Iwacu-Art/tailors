"use client";
import { useState } from "react";

interface FormData {
  firstName: string;
  secondName: string;
  phone: string;
  email: string;
  district: string;
  sector: string;
  cell: string;
  village: string;
  status: string;
  gender: string;
  dob: string;
}

interface FormErrors {
  [key: string]: string;
}

const ApplyNow: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    secondName: '',
    phone: '',
    email: '',
    district: '',
    sector: '',
    cell: '',
    village: '',
    status: '',
    gender: '',
    dob: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [message, setMessage] = useState<string>('');

  // Validation functions
  const validateName = (name: string): string => {
    if (!name.trim()) return 'This field is required';
    if (name.trim().length < 2) return 'Name must be at least 2 characters';
    if (!/^[a-zA-Z\s\-']+$/.test(name)) return 'Name can only contain letters, spaces, hyphens, and apostrophes';
    if (/\d/.test(name)) return 'Name cannot contain numbers';
    return '';
  };

  const validatePhone = (phone: string): string => {
    if (!phone.trim()) return 'Phone number is required';
    // Remove spaces and hyphens for validation
    const cleanPhone = phone.replace(/[\s\-]/g, '');
    if (!/^\+?[0-9]{10,15}$/.test(cleanPhone)) return 'Please enter a valid phone number (10-15 digits)';
    return '';
  };

  const validateEmail = (email: string): string => {
    if (!email.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return '';
  };

  const validateTextField = (value: string, fieldName: string): string => {
    if (!value.trim()) return `${fieldName} is required`;
    if (value.trim().length < 2) return `${fieldName} must be at least 2 characters`;
    if (!/^[a-zA-Z\s\-']+$/.test(value)) return `${fieldName} can only contain letters, spaces, and hyphens`;
    return '';
  };

  const validateDate = (date: string): string => {
    if (!date) return 'Date of birth is required';
    const selectedDate = new Date(date);
    const today = new Date();
    
    if (selectedDate > today) return 'Date of birth cannot be in the future';
    
    // Calculate age properly accounting for month and day
    let age = today.getFullYear() - selectedDate.getFullYear();
    const monthDiff = today.getMonth() - selectedDate.getMonth();
    const dayDiff = today.getDate() - selectedDate.getDate();
    
    // If birthday hasn't occurred this year yet, subtract 1 from age
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    
    if (age < 16) return 'You must be at least 16 years old';
    if (age > 100) return 'Please enter a valid date of birth';
    return '';
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'firstName':
        return validateName(value);
      case 'secondName':
        return validateName(value);
      case 'phone':
        return validatePhone(value);
      case 'email':
        return validateEmail(value);
      case 'district':
        return validateTextField(value, 'District');
      case 'sector':
        return validateTextField(value, 'Sector');
      case 'cell':
        return validateTextField(value, 'Cell');
      case 'village':
        return validateTextField(value, 'Village');
      case 'status':
        return !value ? 'Please select marital status' : '';
      case 'gender':
        return !value ? 'Please select gender' : '';
      case 'dob':
        return validateDate(value);
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    if (error) {
      setErrors({
        ...errors,
        [name]: error,
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (): Promise<void> => {
    setMessage('');
    
    if (!validateForm()) {
      setMessage("Please fix all validation errors before submitting.");
      return;
    }
    
    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Application submitted successfully!");
        setFormData({
          firstName: '',
          secondName: '',
          phone: '',
          email: '',
          district: '',
          sector: '',
          cell: '',
          village: '',
          status: '',
          gender: '',
          dob: '',
        });
        setErrors({});
      } else {
        setMessage(result.message || "Failed to submit application.");
      }
    } catch (error) {
      setMessage("An error occurred while submitting the application.");
      console.error("Error:", error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="w-full bg-gray-50 py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-4">
            <div className="p-3 bg-white rounded-full shadow-lg">
              <i className="bi bi-journal-text text-2xl bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"></i>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 via-yellow-800 to-orange-800 bg-clip-text text-transparent mb-4">
            Apply Now
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Join Tailor's Dream College and unlock a world of opportunities in tailoring and design.
          </p>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                <i className="bi bi-person-plus-fill text-white text-sm"></i>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">Application Form</h2>
                <p className="text-xs text-gray-600">Please fill in all required fields with valid information</p>
              </div>
            </div>
          </div>

          <div className="p-6" onKeyPress={handleKeyPress}>
            <div className="space-y-6">
              {/* Personal Information */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <i className="bi bi-person text-orange-500 text-sm"></i>
                  <h3 className="text-sm font-semibold text-gray-800">Personal Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      id="firstName"
                      placeholder="Enter your first name"
                      className={`w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <i className="bi bi-exclamation-circle mr-1"></i>
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="secondName" className="block text-xs font-medium text-gray-700 mb-1">
                      Second Name *
                    </label>
                    <input
                      type="text"
                      name="secondName"
                      value={formData.secondName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      id="secondName"
                      placeholder="Enter your second name"
                      className={`w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 ${
                        errors.secondName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.secondName && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <i className="bi bi-exclamation-circle mr-1"></i>
                        {errors.secondName}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <i className="bi bi-telephone text-orange-500 text-sm"></i>
                  <h3 className="text-sm font-semibold text-gray-800">Contact Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      id="phone"
                      placeholder="+250 xxx xxx xxx"
                      className={`w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <i className="bi bi-exclamation-circle mr-1"></i>
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      id="email"
                      placeholder="example@email.com"
                      className={`w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <i className="bi bi-exclamation-circle mr-1"></i>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <i className="bi bi-geo-alt text-orange-500 text-sm"></i>
                  <h3 className="text-sm font-semibold text-gray-800">Address Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="district" className="block text-xs font-medium text-gray-700 mb-1">
                      District *
                    </label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      id="district"
                      placeholder="Enter your district"
                      className={`w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 ${
                        errors.district ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.district && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <i className="bi bi-exclamation-circle mr-1"></i>
                        {errors.district}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="sector" className="block text-xs font-medium text-gray-700 mb-1">
                      Sector *
                    </label>
                    <input
                      type="text"
                      name="sector"
                      value={formData.sector}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      id="sector"
                      placeholder="Enter your sector"
                      className={`w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 ${
                        errors.sector ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.sector && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <i className="bi bi-exclamation-circle mr-1"></i>
                        {errors.sector}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="cell" className="block text-xs font-medium text-gray-700 mb-1">
                      Cell *
                    </label>
                    <input
                      type="text"
                      name="cell"
                      value={formData.cell}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      id="cell"
                      placeholder="Enter your cell"
                      className={`w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 ${
                        errors.cell ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.cell && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <i className="bi bi-exclamation-circle mr-1"></i>
                        {errors.cell}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="village" className="block text-xs font-medium text-gray-700 mb-1">
                      Village *
                    </label>
                    <input
                      type="text"
                      name="village"
                      value={formData.village}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      id="village"
                      placeholder="Enter your village"
                      className={`w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 ${
                        errors.village ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.village && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <i className="bi bi-exclamation-circle mr-1"></i>
                        {errors.village}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <i className="bi bi-info-circle text-orange-500 text-sm"></i>
                  <h3 className="text-sm font-semibold text-gray-800">Additional Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="status" className="block text-xs font-medium text-gray-700 mb-1">
                      Marital Status *
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      id="status"
                      className={`w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 ${
                        errors.status ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select Status</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="divorced">Divorced</option>
                    </select>
                    {errors.status && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <i className="bi bi-exclamation-circle mr-1"></i>
                        {errors.status}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="gender" className="block text-xs font-medium text-gray-700 mb-1">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      id="gender"
                      className={`w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 ${
                        errors.gender ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <i className="bi bi-exclamation-circle mr-1"></i>
                        {errors.gender}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="dob" className="block text-xs font-medium text-gray-700 mb-1">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      id="dob"
                      max={new Date().toISOString().split('T')[0]}
                      className={`w-full border rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 ${
                        errors.dob ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.dob && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <i className="bi bi-exclamation-circle mr-1"></i>
                        {errors.dob}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Success/Error Message */}
              {message && (
                <div className={`p-3 rounded-lg text-xs text-center ${
                  message.includes('success') 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  <div className="flex items-center justify-center space-x-2">
                    <i className={`bi ${message.includes('success') ? 'bi-check-circle' : 'bi-exclamation-circle'} text-sm`}></i>
                    <span>{message}</span>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 text-sm group"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <i className="bi bi-send text-sm group-hover:scale-110 transition-transform duration-200"></i>
                    <span>Submit Application</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <p className="text-xs text-gray-600">
              <i className="bi bi-shield-check text-orange-500 mr-1"></i>
              Your information is secure and will only be used for application processing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;