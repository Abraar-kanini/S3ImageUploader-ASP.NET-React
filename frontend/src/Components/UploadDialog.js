import React, { useState } from 'react';

const UploadDialog = ({ onClose }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
    formData.append('bucketName', 'test-demo-2002');
    formData.append('prefix', ''); // Prefix is set to an empty string
  
    try {
      const response = await fetch(`https://localhost:7196/api/Files/upload?bucketName=test-demo-2002`, {
        method: 'POST',
        body: formData,
      });
  
      // Log the status code for debugging
      console.log('Response Status:', response.status);
  
      if (response.ok) {
        const data = await response.text();
        alert(data);
        onClose();
      } else {
        // Log the response body for debugging
        const errorText = await response.text();
        console.error('Response Error:', errorText);
        alert('Failed to upload file. ' + errorText);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file');
    }
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4">Upload Image</h2>
        <input 
          type="file" 
          onChange={handleFileChange} 
          className="mb-4 p-2 border border-gray-300 rounded w-full" 
        />
        <div className="flex justify-end">
          <button 
            onClick={handleUpload} 
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700"
          >
            Upload
          </button>
          <button 
            onClick={onClose} 
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadDialog;
