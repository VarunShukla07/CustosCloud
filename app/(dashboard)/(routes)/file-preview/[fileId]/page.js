"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getFirestore, updateDoc } from "firebase/firestore";
import { app } from '@/firebaseConfig';
import { doc, getDoc } from "firebase/firestore"
import { ArrowLeftSquare, Link } from 'lucide-react';
import FileInfo from './_componenets/FileInfo';
import FileShareInfo from './_componenets/FileShareInfo';

function FilePreview({ params }) {
    const db = getFirestore(app);
    const [file,setFile] = useState();
    useEffect(() => {
        console.log(params?.fileId)
        params?.fileId&&getFileInfo()
    }, [])

    const getFileInfo = async () => {
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
    const onPasswordSave=async(password)=>{
        const docRef = doc(db, "uploadedFile", params?.fileId);
        await updateDoc(docRef,{
            password:password
        })
    }
    return (
        <div className='py-10 px-20'>
            <a href='/upload' className='flex gap-3'>
            <ArrowLeftSquare/> Go to Upload</a>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
                <FileInfo file = {file}/>
                <FileShareInfo file = {file}
                onPasswordSave={(password)=>onPasswordSave(password)}/>
            </div>
        </div>
    );
}

export default FilePreview;
