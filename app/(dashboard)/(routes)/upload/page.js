"use client"
import React, { useState } from 'react'
import UploadForm from './_components/UploadForm'
import { app } from '@/firebaseConfig'
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useUser } from '@clerk/nextjs';
import { generaterandomstring } from '@/app/_utils/GenerateRandomString';
import { useRouter } from 'next/navigation';

const Upload = () => {
  const { user } = useUser();
  const [progress, setProgress] = useState();
  const [alertVisible, setAlertVisible] = useState(false);
  const storage = getStorage(app);
  const router = useRouter();
  const [fileDocId, setFileDocId] = useState();
  const db = getFirestore(app);

  const uploadfile = (file) => {
    const metadata = {
      contentType: file.type
    };
    const storageRef = ref(storage, 'file-upload/' + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgress(progress);
      }, 
      (error) => {
        console.error('Upload failed:', error);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          const docid = saveinfo(file, downloadURL);
          setFileDocId(docid);
          setAlertVisible(true); // Show alert on successful upload
          setTimeout(() => {
            setAlertVisible(false);
            router.push(`/file-preview/${docid}`);
          }, 2000);
        });
      }
    );
  };

  const saveinfo = (file, fileUrl) => {
    const docid = generaterandomstring().toString();
    setDoc(doc(db, "uploadedFile", docid), {
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileUrl: fileUrl,
      userEmail: user?.primaryEmailAddress.emailAddress,
      userName: user?.fullName,
      password: '',
      id: docid,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + generaterandomstring()
    });
    return docid;
  };

  const dismissAlert = () => {
    setAlertVisible(false);
  };

  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-center m-5'>Start <strong className='text-diffblue'>Uploading</strong> File and
        <strong className='text-diffblue'> Share</strong> it
      </h2>
      {alertVisible && (
        <div role="alert" className="rounded-xl border border-gray-100 bg-white p-4 mb-4">
          <div className="flex items-start gap-4">
            <span className="text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <div className="flex-1">
              <strong className="block font-medium text-gray-900">File Uploaded Successfully</strong>
              <p className="mt-1 text-sm text-gray-700">Your file has been uploaded and is available.</p>
            </div>
            <button className="text-gray-500 transition hover:text-gray-600" onClick={dismissAlert}>
              <span className="sr-only">Dismiss popup</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
      <UploadForm uploadbtnclick={(file) => uploadfile(file)} progress={progress} />
    </div>
  );
};

export default Upload;
