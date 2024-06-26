"use client"
import React, { useEffect, useState } from 'react'
import FileItemC from "./_components/FileItemC"
import { app } from '../../../firebaseConfig';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Link from 'next/link';
import Image from 'next/image';
function FileView({params}) {
    const db = getFirestore(app);
    const [file,setFile]=useState();
    useEffect(()=>{
        // console.log(params.fileId)
        params.fileId&&getFileInfo()

    },[])

    const getFileInfo=async()=>{
        const docRef = doc(db, "uploadedFile", params?.fileId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setFile(docSnap.data());
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
    }
  return (
    <div className='
    bg-gray-100 h-screen w-full flex justify-center
    items-center flex-col gap-4'>
        <Link href=''>
        <Image src="/logo.svg" alt="logo" width={150} height={100} priority />
        </Link>
        <FileItemC file={file} /> 
    </div>
  )
}

export default FileView