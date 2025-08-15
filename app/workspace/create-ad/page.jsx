"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles } from 'lucide-react';
import { useState } from 'react';
import React from 'react';


function CreateAd() {
    const [userInput, setUserInput] = useState();
    return (
        <div className='mt-32 flex flex-col items-center justify-center w-full'>
            <h2 className='font-bold text-2xl text-center'>
                🎥 Create AI Video ads in Just One Click!
            </h2>
            <p className='mt-3 text-lg text-gray-500'>
               🚀 Turn Your into stunning, Scroll-Stoping Videos - Instantly, Effortlessly, and without Editing Skills!
            </p>
            <Input placeholder="Enter the topic or product info" 
            className={"w-lg text-lg mt-5"}
            onChange={(e) => setUserInput(e.target.value)}
            />
            <Button className={"mt-5 w-md"}><Sparkles/>Generate</Button>
        </div>
    )
}

export default CreateAd;
