// src/FileDownload.js
import React from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import './FileDownload.css';

const FileDownload = () => {
  const downloadFile = async () => {
    try {
      const response = await axios.get('http://localhost:3000/download', {
        responseType: 'blob', // Important for binary data
      });
      saveAs(response.data, 'example.pdf'); // Triggers the download
    } catch (error) {
      console.error('Download error:', error);
    }
  };

  return (
    <button className="download-button" onClick={downloadFile}>
      <span className="button-text">Download File</span>
    </button>
  );
};

export default FileDownload;
