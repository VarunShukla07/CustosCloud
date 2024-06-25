import React, { useState } from 'react';
import { Copy } from 'lucide-react';

function FileShareInfo({ file, onPasswordSave }) {
    const [isPasswordEnable, setIsPasswordEnable] = useState(false);
    const [password, setPassword] = useState('');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(file.shortUrl)
            .then(() => {
                console.log('URL copied to clipboard');
            })
            .catch(err => {
                console.error('Failed to copy URL: ', err);
            });
    };

    return file && (
        <div className='flex flex-col gap-2'>
            <div>
                <label className='text-[14px] text-gray-500'>Short Url</label>
                <div className='flex gap-5 p-2 border rounded-md'>
                    <input type='text' value={file.shortUrl} disabled className='disabled:text-gray-500 bg-transparent outline-none w-full' />
                    <Copy className='text-gray-500 hover:text-diffblue cursor-pointer' onClick={copyToClipboard} />
                </div>
            </div>
            <div className='gap-3 flex mt-5'>
                <input type='checkbox' onChange={(e) => setIsPasswordEnable(e.target.checked)} />
                <label>Enable Password?</label>
            </div>
            {isPasswordEnable ?
                <div className='flex gap-3 items-center'>
                    <div className='border rounded-md w-full p-2'>
                        <input type='password' className='disable:text-gray-500 bg-transparent outline-none' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className='p-2 bg-diffblue text-white rounded-md disabled:bg-gray-300 hover:bg-blue-600' disabled={password?.length < 3} onClick={() => onPasswordSave(password)}> Save </button>
                </div>
                : null}
            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-bold mb-4">Send File to Email</h2>
                <div className="flex flex-col gap-4">
                    <input type="email" placeholder="example@gmail.com" className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button type="submit" className="bg-diffblue text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600">Send Email</button>
                </div>
            </div>
        </div>
    );
}

export default FileShareInfo;
